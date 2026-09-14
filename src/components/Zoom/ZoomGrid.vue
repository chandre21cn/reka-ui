<template>
    <div ref="scrollerRef" 
        class="ui-ZoomGrid-scroller" 
        :class="{ 'is-grabbing': isDragging }"
        @pointerdown="handlePointerDown"
    >
        <div ref="wrapperRef" class="ui-ZoomGrid-wrapper" :style="scaleStyle">
            <div class="ui-ZoomGrid-grid" :class="{ 'is-shift-active': isShiftPressed }" :style="gridLayoutStyles">
                <div v-for="item in data" :key="item.viewId" :data-view-id="item.viewId" class="ui-ZoomGrid-item">
                    <slot :item="item"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick, useTemplateRef, onBeforeUnmount, type StyleValue } from 'vue'
import { useEventListener, useMagicKeys, useResizeObserver, watchDebounced } from '@vueuse/core'

// ==================== 类型定义 ====================
interface Props {
    activeViewId: number
    gridLayoutStyles?: StyleValue
    data: { 
        viewId: number; 
        col: number; 
        row: number 
    }[]
}

interface ItemRect {
    viewId: number
    left: number
    top: number
    width: number
    height: number
}

// ==================== 组件配置 ====================

const props = withDefaults(defineProps<Props>(), {
    data: () => [],
    gridLayoutStyles: ''
})

const emit = defineEmits<{ (e: 'zoom', isZoomActive: boolean): void }>()

// ==================== 模板引用 ====================

const scrollerRef = useTemplateRef<HTMLDivElement>('scrollerRef')
const wrapperRef = useTemplateRef<HTMLDivElement>('wrapperRef')

// ==================== 响应式状态 ====================

/** 当前缩放比例，1 为原始大小 */
const scale = ref(1)

/** 当前水平平移像素值（负数表示内容向左滚动） */
const translateX = ref(0)

/** 当前垂直平移像素值（负数表示内容向上滚动） */
const translateY = ref(0)

/** 是否正在拖拽平移 */
const isDragging = ref(false)

/** 是否正在执行滚轮缩放动画，用于控制 transition 开关 */
const isZooming = ref(false)

// ==================== 非响应式尺寸缓存 ====================

/** 视口容器几何信息，避免频繁调用 getBoundingClientRect */
const containerRect = { width: 0, height: 0, left: 0, top: 0 }

/** 内容区域总尺寸 */
const contentRect = { width: 0, height: 0 }

// ==================== 常量配置 ====================

/** 最小缩放比例 */
const MIN_SCALE = 1

/** 最大缩放比例上限 */
const MAX_SCALE = 5

/** 每次滚轮缩放的步长 */
const SCALE_STEP = 0.2

// ==================== 内部计时器与状态标记 ====================

/** 缩放动画计时器，用于延迟关闭 transition */
let zoomTimer: ReturnType<typeof setTimeout> | null = null

/** zoom false 事件防抖计时器，避免状态抖动 */
let emitTimer: ReturnType<typeof setTimeout> | null = null

/** 上次对外派发的 zoom 状态，用于去重 */
let lastEmittedStatus: boolean | null = null

/** reset 重入版本号，保证多次连续调用 reset 只以最后一次为准 */
let resetVersion = 0

/** Shift 按住期间是否有待派发的状态更新 */
let queuedUpdate = false

/** 卡片原始几何缓存，data 变化或 reset 时清空，滚轮缩放时按需计算 */
let itemRectsCache: ItemRect[] | null = null

// ==================== 键盘状态 ====================

const { shift } = useMagicKeys()
const isShiftPressed = computed(() => shift.value)

// ==================== 计算属性 ====================

/**
 * 生成 wrapper 的 transform 样式
 * 使用 translate3d 触发 GPU 加速，scale 以左上角为变换原点
 */
const scaleStyle = computed(() => ({
    transform: `translate3d(${translateX.value.toFixed(2)}px, ${translateY.value.toFixed(2)}px, 0) scale(${scale.value.toFixed(4)})`,
    transformOrigin: '0 0',
    transition: isZooming.value ? 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
}))

/**
 * 当前是否处于“缩放/平移”活跃状态
 * 用于判断是否需要对外 emit zoom(true)
 */
const currentStatus = computed(() =>
    scale.value !== 1 || Math.round(translateX.value) !== 0 || Math.round(translateY.value) !== 0
)

// ==================== zoom 事件派发 ====================

/**
 * 根据当前状态对外派发 zoom 事件
 * - 进入缩放/平移状态时立即派发 true
 * - 退出状态时若 Shift 仍被按住则排队，等 Shift 释放后再延迟派发 false
 * - 状态未变化时不重复派发
 */
const updateZoomStatus = () => {
    const nowStatus = currentStatus.value

    // 进入缩放/平移状态时立即通知，不需要等 Shift 松开
    if (nowStatus) {
        if (lastEmittedStatus === true) return
        if (emitTimer) {
            clearTimeout(emitTimer)
            emitTimer = null
        }
        lastEmittedStatus = true
        emit('zoom', true)
        return
    }

    // 退出状态时若 Shift 仍被按住，先排队，等释放后再派发 false
    if (isShiftPressed.value) {
        queuedUpdate = true
        return
    }

    queuedUpdate = false
    if (lastEmittedStatus === false) return

    if (emitTimer) {
        clearTimeout(emitTimer)
        emitTimer = null
    }

    emitTimer = setTimeout(() => {
        lastEmittedStatus = false
        emit('zoom', false)
        emitTimer = null
    }, 250)
}

/** Shift 释放后：清理拖拽状态，并处理排队中的 zoom 状态更新 */
watchDebounced(isShiftPressed, (pressed): void => {
    if (!pressed) {
        if (isDragging.value) clearDraggingState()
        if (queuedUpdate) {
            queuedUpdate = false
            updateZoomStatus()
        }
    }
}, { debounce: 50 })

/** 监听缩放或平移变化，即时检查并派发 zoom 事件 */
watch(
    () => [scale.value, translateX.value, translateY.value],
    () => updateZoomStatus(),
    { flush: 'sync' }
)

// ==================== 数学工具函数 ====================

/**
 * 将数值限制在 [min, max] 范围内
 */
const clamp = (v: number, min: number, max: number): number => Math.min(max, Math.max(min, v))

// ==================== 尺寸测量 ====================

/**
 * 测量视口容器和内容区域尺寸
 * 容器尺寸来自 getBoundingClientRect，内容尺寸来自 scrollWidth/scrollHeight
 */
const measureDimensions = (): void => {
    if (!scrollerRef.value || !wrapperRef.value) return
    const rect = scrollerRef.value.getBoundingClientRect()
    containerRect.width = rect.width
    containerRect.height = rect.height
    containerRect.left = rect.left
    containerRect.top = rect.top
    contentRect.width = wrapperRef.value.scrollWidth
    contentRect.height = wrapperRef.value.scrollHeight
}

// ==================== 卡片几何信息 ====================

/**
 * 清空卡片几何缓存
 * 在 data 变化、reset、resize 时调用，保证下次滚轮缩放重新测量
 */
const invalidateItemRects = (): void => {
    itemRectsCache = null
}

/**
 * 一次性计算所有卡片在 scale=1 时的原始几何信息
 * 结果会被缓存，在同一组连续滚轮事件中复用，避免重复查询 DOM
 */
const getItemRects = (): ItemRect[] => {
    if (itemRectsCache) return itemRectsCache
    itemRectsCache = props.data
        .map((item) => {
            const el = scrollerRef.value?.querySelector<HTMLElement>(`[data-view-id="${item.viewId}"]`)
            if (!el) return null
            return {
                viewId: item.viewId,
                left: el.offsetLeft,
                top: el.offsetTop,
                width: el.clientWidth,
                height: el.clientHeight
            }
        })
        .filter((rect): rect is ItemRect => rect !== null)
    return itemRectsCache
}

/**
 * 计算水平方向允许的最大滚动范围，并将目标平移值限制在范围内
 * 当内容宽度小于容器时返回 0，防止出现白边
 */
const getClampedX = (targetTx: number, currentScale: number): number => {
    if (containerRect.width <= 0 || contentRect.width === 0) return 0
    const maxScrollX = containerRect.width - contentRect.width * currentScale
    return maxScrollX >= 0 ? 0 : clamp(targetTx, maxScrollX, 0)
}

/**
 * 计算垂直方向允许的最大滚动范围，并将目标平移值限制在范围内
 * 当内容高度小于容器时返回 0，防止出现白边
 */
const getClampedY = (targetTy: number, currentScale: number): number => {
    if (containerRect.height <= 0 || contentRect.height === 0) return 0
    const maxScrollY = containerRect.height - contentRect.height * currentScale
    return maxScrollY >= 0 ? 0 : clamp(targetTy, maxScrollY, 0)
}

/**
 * 获取单个元素在 scale=1 时的几何信息
 * 使用 offsetLeft/Top 与 clientWidth/Height，不受当前 transform 影响
 */
const getItemGeometry = (el: HTMLElement): { left: number; top: number; width: number; height: number } | null => {
    if (!wrapperRef.value) return null
    return {
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.clientWidth,
        height: el.clientHeight
    }
}

/**
 * 计算单个卡片在当前容器高度下允许的最大缩放比例
 * 保证放大后卡片高度不会超出容器高度
 */
const getItemMaxScale = (el: HTMLElement): number => {
    const geo = getItemGeometry(el)
    if (!geo || containerRect.height <= 0 || geo.height <= 0) return MAX_SCALE
    return Math.min(MAX_SCALE, Math.max(MIN_SCALE, containerRect.height / geo.height))
}

/**
 * 将指定 viewId 的卡片滚动到视口中心
 * 同时应用边界限制，防止内容被拖出可见范围
 */
const scrollToView = (viewId: number): void => {
    const el = scrollerRef.value?.querySelector<HTMLElement>(`[data-view-id="${viewId}"]`)
    if (!el || containerRect.width === 0) return
    const geo = getItemGeometry(el)
    if (!geo) return
    const targetTx = containerRect.width / 2 - (geo.left + geo.width / 2) * scale.value
    const targetTy = containerRect.height / 2 - (geo.top + geo.height / 2) * scale.value
    translateX.value = getClampedX(targetTx, scale.value)
    translateY.value = getClampedY(targetTy, scale.value)
}

// ==================== 属性监听 ====================

/** data 或布局样式变化时重置缩放状态 */
watch([() => props.data?.length, () => props.data, () => props.gridLayoutStyles], () => reset(), {
    deep: false
})

/** activeViewId 变化且不在交互中时，将目标视图居中 */
watch(() => props.activeViewId, () => {
    if (isZooming.value || isDragging.value) return
    nextTick(() => scrollToView(props.activeViewId))
}, { immediate: false })

// ==================== Resize 处理 ====================

/**
 * 监听视口容器尺寸变化
 * 通过归一化滚动比例保持当前视口在内容中的相对位置不变
 * 适用于 item 高度弹性变化、窗口缩放等场景
 */
useResizeObserver(scrollerRef, () => {
    if (isDragging.value) return
    invalidateItemRects()

    const currentScale = scale.value
    const oldContainerW = containerRect.width || 1
    const oldContainerH = containerRect.height || 1
    const oldContentW = contentRect.width || 1
    const oldContentH = contentRect.height || 1

    // 将当前平移归一化为滚动比例（0 = 贴左/上，1 = 贴右/下，0.5 = 居中）
    const oldMaxX = oldContainerW - oldContentW * currentScale
    const oldMaxY = oldContainerH - oldContentH * currentScale
    const scrollRatioX = oldMaxX < 0 ? translateX.value / oldMaxX : 0.5
    const scrollRatioY = oldMaxY < 0 ? translateY.value / oldMaxY : 0.5

    measureDimensions()

    scale.value = currentScale

    // 根据新的容器与内容尺寸，动态计算实际像素位置
    const newMaxX = containerRect.width - contentRect.width * currentScale
    const newMaxY = containerRect.height - contentRect.height * currentScale
    const targetTx = newMaxX < 0 ? scrollRatioX * newMaxX : 0
    const targetTy = newMaxY < 0 ? scrollRatioY * newMaxY : 0

    translateX.value = getClampedX(targetTx, currentScale)
    translateY.value = getClampedY(targetTy, currentScale)
})

// ==================== 滚轮缩放 ====================

/**
 * 处理滚轮事件
 * 仅在按住 Shift 时响应，以鼠标指针下卡片为焦点进行缩放
 * 缩放后自动调整平移，使被缩放的卡片尽量保持在视口内
 */
const handleWheel = (event: WheelEvent): void => {
    if (!scrollerRef.value || !event.shiftKey) return
    event.preventDefault()

    const mouseX = event.clientX - containerRect.left
    const mouseY = event.clientY - containerRect.top
    const oldScale = scale.value

    // 用原始画布坐标命中卡片，保证缩放过程中焦点不随当前 DOM 位置漂移
    const localX = (mouseX - translateX.value) / oldScale
    const localY = (mouseY - translateY.value) / oldScale
    let hoveredItem: ItemRect | null = null
    for (const rect of getItemRects()) {
        if (
            localX >= rect.left &&
            localX <= rect.left + rect.width &&
            localY >= rect.top &&
            localY <= rect.top + rect.height
        ) {
            hoveredItem = rect
            break
        }
    }
    if (!hoveredItem) return

    const itemEl = scrollerRef.value.querySelector<HTMLElement>(
        `[data-view-id="${hoveredItem.viewId}"]`
    )
    if (!itemEl) return

    // 优先取移动幅度更大的轴，兼容触控板水平滚动
    const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX
    const isZoomIn = delta < 0

    // 放大时限制最大不超过卡片填满容器高度；缩小时放开到全局 MAX_SCALE
    const currentMaxScale = isZoomIn ? getItemMaxScale(itemEl) : MAX_SCALE
    const newScale = Math.min(
        currentMaxScale,
        Math.max(MIN_SCALE, oldScale + (isZoomIn ? SCALE_STEP : -SCALE_STEP))
    )
    if (newScale === oldScale) return

    if (zoomTimer) clearTimeout(zoomTimer)

    const ratio = newScale / oldScale

    // 以鼠标位置为缩放中心计算新的平移量
    let targetTx = mouseX - (mouseX - translateX.value) * ratio
    let targetTy = mouseY - (mouseY - translateY.value) * ratio

    // 放大时将被缩放的卡片尽量约束在视口内，避免放大后目标卡片跑到屏幕外
    if (isZoomIn) {
        const left = hoveredItem.left * newScale + targetTx
        const right = left + hoveredItem.width * newScale
        const top = hoveredItem.top * newScale + targetTy
        const bottom = top + hoveredItem.height * newScale

        // 水平方向：卡片宽度小于容器时尽量完整显示；大于容器时允许滚动但不留白边
        if (hoveredItem.width * newScale <= containerRect.width) {
            if (left < 0) targetTx -= left
            else if (right > containerRect.width) targetTx -= right - containerRect.width
        } else {
            if (left > 0) targetTx -= left
            else if (right < containerRect.width) targetTx += containerRect.width - right
        }

        // 垂直方向同理
        if (hoveredItem.height * newScale <= containerRect.height) {
            if (top < 0) targetTy -= top
            else if (bottom > containerRect.height) targetTy -= bottom - containerRect.height
        } else {
            if (top > 0) targetTy -= top
            else if (bottom < containerRect.height) targetTy += containerRect.height - bottom
        }
    }

    translateX.value = getClampedX(targetTx, newScale)
    translateY.value = getClampedY(targetTy, newScale)
    scale.value = newScale
    isZooming.value = true

    zoomTimer = setTimeout(() => {
        isZooming.value = false
        zoomTimer = null
    }, 150)
}

useEventListener(scrollerRef, 'wheel', handleWheel, { passive: false, capture: true })

// ==================== 拖拽平移 ====================

/** 拖拽开始时的状态快照 */
const dragStart = { x: 0, y: 0, tx: 0, ty: 0, pointerId: -1 }

/**
 * 清理拖拽状态
 * 释放指针捕获、移除全局事件监听，并记录当前平移作为下次拖拽起点
 */
const clearDraggingState = (): void => {
    if (isDragging.value) {
        dragStart.tx = translateX.value
        dragStart.ty = translateY.value
    }
    isDragging.value = false
    dragStart.pointerId = -1
    window.removeEventListener('pointermove', handlePointerMove, { capture: true })
    window.removeEventListener('pointerup', handlePointerUp, { capture: true })
    window.removeEventListener('pointercancel', handlePointerUp, { capture: true })
    window.removeEventListener('blur', handleWindowBlur, { capture: true })
}

/**
 * 拖拽过程中根据指针位移更新平移量
 */
const handlePointerMove = (event: PointerEvent): void => {
    if (!isDragging.value || event.pointerId !== dragStart.pointerId) return
    translateX.value = getClampedX(dragStart.tx + event.clientX - dragStart.x, scale.value)
    translateY.value = getClampedY(dragStart.ty + event.clientY - dragStart.y, scale.value)
}

/**
 * 指针抬起或取消时结束拖拽
 */
const handlePointerUp = (event: PointerEvent): void => {
    if (event.pointerId === dragStart.pointerId) clearDraggingState()
}

/**
 * 窗口失去焦点时强制结束拖拽，避免 Shift 状态异常导致拖拽卡死
 */
const handleWindowBlur = (): void => clearDraggingState()

/**
 * 指针按下时判断是否进入拖拽模式
 * 仅当按住 Shift 且是左键时才启动拖拽
 */
const handlePointerDown = (event: PointerEvent): void => {
    if (!event.shiftKey || event.button !== 0 || !scrollerRef.value) return
    isDragging.value = true
    dragStart.x = event.clientX
    dragStart.y = event.clientY
    dragStart.tx = translateX.value
    dragStart.ty = translateY.value
    dragStart.pointerId = event.pointerId

    window.addEventListener('pointermove', handlePointerMove, { capture: true, passive: true })
    window.addEventListener('pointerup', handlePointerUp, { capture: true })
    window.addEventListener('pointercancel', handlePointerUp, { capture: true })
    window.addEventListener('blur', handleWindowBlur, { capture: true })

    event.preventDefault()
}

// ==================== 生命周期 ====================

/** 组件挂载后先测量尺寸，再将激活视图居中 */
onMounted(() => {
    nextTick(() => {
        measureDimensions()
        if (props.activeViewId !== undefined) scrollToView(props.activeViewId)
    })
})

/** 组件卸载前清理定时器、事件监听和拖拽状态，避免内存泄漏 */
onBeforeUnmount(() => {
    clearDraggingState()
    if (zoomTimer) clearTimeout(zoomTimer)
    if (emitTimer) clearTimeout(emitTimer)
})

// ==================== 暴露方法 ====================

/**
 * 重置缩放与平移状态到初始值
 * 清空卡片几何缓存，并强制对外派发 zoom(false)
 * 若外部在 reset 异步阶段再次调用 reset，只以最新一次为准
 */
const reset = (): void => {
    const version = ++resetVersion
    invalidateItemRects()
    scale.value = 1
    translateX.value = 0
    translateY.value = 0
    clearDraggingState()
    isZooming.value = false
    if (zoomTimer) clearTimeout(zoomTimer)
    if (emitTimer) clearTimeout(emitTimer)

    nextTick(() => {
        if (version !== resetVersion) return
        measureDimensions()
        if (lastEmittedStatus !== false) {
            lastEmittedStatus = false
            emit('zoom', false)
        }
    })
}

defineExpose({ reset })
</script>

<style lang="less">
.ui-ZoomGrid {
    &-scroller {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        overflow: hidden;
        touch-action: none;
        user-select: none;
        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: geometricPrecision;

        &.is-grabbing {
            cursor: grabbing !important;
        }
    }

    &-wrapper {
        flex: 1;
        position: relative;
    }

    &-grid {
        display: grid;
        min-width: 100%;
        height: 100%;
        gap: var(--size-2, 8px);

        * {
            -webkit-user-drag: none !important;
        }

        &.is-shift-active {
            cursor: grab;

            * {
                pointer-events: none !important;
            }
        }
    }

    &-item {
        display: flex;
        min-height: 0;
    }
}
</style>
