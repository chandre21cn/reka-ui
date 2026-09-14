<script setup lang="ts">
    import { useTemplateRef, ref, computed, onMounted } from 'vue';
    import { useResizeObserver, useEventListener, useElementHover } from '@vueuse/core'
    import type { ZoomCenter, ZoomData, ZoomEmits, ZoomExpose, ZoomProps } from '.';

    const props = withDefaults(defineProps<ZoomProps>(), {
        enable: true,
        maxScale: 5
    })

    const emits             = defineEmits<ZoomEmits>()
    const zoomRef           = useTemplateRef('zoomRef')
    const containerRef      = useTemplateRef('containerRef')

    const containerSize     = ref({ width: 0, height: 0 })
    const pendingZoom       = ref<ZoomData | null>(null);
        
    const isHovered         = useElementHover(zoomRef)

    const matrix           = ref({ scale: 1, tx: 0, ty: 0 });
    const isDragging       = ref(false);
    const hasMoved         = ref(false);
    const isTransitioning  = ref(false);
    const minScale         = 1;
    const lastEmittedState = ref({ scale: 1, centerX: 0.5, centerY: 0.5 });
        
    let transitionTimer: ReturnType<typeof setTimeout> | null = null;

    /**
     * 转换数值精度
     */
    const toFixed5 = (val: number): number => {
        return Number(val.toFixed(5));
    };

    /**
     * 尝试执行暂存的缩放任务
     */
    const applyPendingZoom = () => {
        if (pendingZoom.value && containerSize.value.width > 0 && containerSize.value.height > 0) {
            const { center, scale } = pendingZoom.value;
            pendingZoom.value = null;
            setZoom(center, scale);
        }
    };

     /**
     * 计算并向外发送归一化的缩放中心点坐标和缩放比例
     */
    const emitTransformState = () => {
        const { width, height } = containerSize.value;
        if (width === 0 || height === 0) return;

        const rawX = (-matrix.value.tx / matrix.value.scale) / width + 0.5;
        const rawY = (-matrix.value.ty / matrix.value.scale) / height + 0.5;

        const centerX      = toFixed5(Math.max(0, Math.min(1, rawX)));
        const centerY      = toFixed5(Math.max(0, Math.min(1, rawY)));
        const currentScale = toFixed5(matrix.value.scale);

        if (
            currentScale === lastEmittedState.value.scale &&
            centerX === lastEmittedState.value.centerX &&
            centerY === lastEmittedState.value.centerY
        ) {
            return;
        }

        lastEmittedState.value = { scale: currentScale, centerX, centerY };

        emits('change', {
            scale: currentScale,
            center: { x: centerX, y: centerY }
        });
    };

    /**
     * 限制拖拽位移边界，防止内容缩放后四周留白
     */
    const clampBounds = () => {
        const { scale, tx, ty } = matrix.value;
        const { width, height } = containerSize.value;
        if (width === 0 || height === 0) return;

        const maxOffset  = Math.max(0, (width * scale - width) / 2);
        const maxOffsetV = Math.max(0, (height * scale - height) / 2);

        matrix.value.tx = Math.max(-maxOffset, Math.min(maxOffset, tx));
        matrix.value.ty = Math.max(-maxOffsetV, Math.min(maxOffsetV, ty));
        
        emitTransformState();
    };

    /**
     * 监听容器大小改变，按比例缩放位移量以防画面跳动
     */
    useResizeObserver(zoomRef, (entries) => {
        const { width, height } = entries[0].contentRect;
        
        if (containerSize.value.width !== 0) {
            matrix.value.tx *= width / containerSize.value.width;
            matrix.value.ty *= height / containerSize.value.height;
        }
        
        containerSize.value = { width, height };
        clampBounds();
        applyPendingZoom();
    });

    /**
     * 重置视图矩阵至初始状态
     */
    const reset = () => { 
        triggerTransition();
        matrix.value = { scale: 1, tx: 0, ty: 0 }; 
        emitTransformState();
    };

    /**
     * 辅助函数：触发并管理过渡动画的时效
     */
    const triggerTransition = () => {
        if (transitionTimer) clearTimeout(transitionTimer);
        isTransitioning.value = true;
        transitionTimer = setTimeout(() => {
            isTransitioning.value = false;
        }, 300);
    };

    /**
     * 根据中心点和缩放值计算并更新矩阵
     */
    const setZoom = (center: ZoomCenter, scale: number, isWheelInternal = false) => {
        const { width, height } = containerSize.value;
        if (width === 0 || height === 0) {
            pendingZoom.value = { center, scale };
            return;
        }

        const targetScale = Math.min(Math.max(scale, minScale), props.maxScale);

        if (isWheelInternal) {
            isTransitioning.value = false;
            
            const ratio         = targetScale / matrix.value.scale;
            const targetX       = (center.x - 0.5) * width;
            const targetY       = (center.y - 0.5) * height;

            matrix.value.tx     = targetX - (targetX - matrix.value.tx) * ratio;
            matrix.value.ty     = targetY - (targetY - matrix.value.ty) * ratio;
            matrix.value.scale  = targetScale;
        } else {
            triggerTransition();

            const clampedCenterX = Math.max(0, Math.min(1, center.x));
            const clampedCenterY = Math.max(0, Math.min(1, center.y));

            const rawTx         = -(clampedCenterX - 0.5) * width * targetScale;
            const rawTy         = -(clampedCenterY - 0.5) * height * targetScale;

            const maxOffset     = Math.max(0, (width * targetScale - width) / 2);
            const maxOffsetV    = Math.max(0, (height * targetScale - height) / 2);

            matrix.value.tx     = Math.max(-maxOffset, Math.min(maxOffset, rawTx));
            matrix.value.ty     = Math.max(-maxOffsetV, Math.min(maxOffsetV, rawTy));
            matrix.value.scale  = targetScale;
        }
        
        clampBounds();
    };

    defineExpose<ZoomExpose>({ reset, setZoom });

    /**
     * 计算容器的 CSS Transform 样式与鼠标指针状态
     */
    const containerStyles = computed(() => ({
        transform: `matrix(${matrix.value.scale}, 0, 0, ${matrix.value.scale}, ${matrix.value.tx}, ${matrix.value.ty})`,
        cursor: !props.enable ? 'default' : (isDragging.value ? 'grabbing' : 'grab'),
        transition: isTransitioning.value ? 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
    }));

    /**
     * 处理包裹层的点击，区分拖拽结束与纯点击事件
     */
    const handleWrapperClick = (e: MouseEvent) => {
        if (hasMoved.value) {
            e.stopImmediatePropagation();
            e.preventDefault();
            hasMoved.value = false;
        } else {
            emits('left', e);
        }
    };

    /**
     * 转发右键点击事件
     */
    const handleRightClick = (e: MouseEvent) => emits('right', e);

    /**
     * 接管非被动滚轮缩放事件
     */
    const handleWheel = (e: WheelEvent) => {
        if (e.shiftKey || e.ctrlKey) return; 

        if (!props.enable) { 
            emits('wheel', e); 
            return; 
        }

        e.preventDefault(); 

        if (!zoomRef.value) return;

        const delta     = e.deltaY > 0 ? -1 : 1;
        const factor    = Math.pow(1.1, delta);
        const oldScale  = matrix.value.scale;
        const nextScale = Math.min(Math.max(oldScale * factor, minScale), props.maxScale);
        
        const rect = zoomRef.value.getBoundingClientRect();
        
        const parentScaleX = rect.width / containerSize.value.width;
        const parentScaleY = rect.height / containerSize.value.height;
        
        const pixelX = (e.clientX - rect.left) / (parentScaleX || 1);
        const pixelY = (e.clientY - rect.top) / (parentScaleY || 1);
        
        const rateX = pixelX / containerSize.value.width;
        const rateY = pixelY / containerSize.value.height;
        
        setZoom({ x: rateX, y: rateY }, nextScale, true);
    };

    useEventListener(zoomRef, 'wheel', handleWheel, { passive: false });

    /**
     * 处理键盘方向键事件
     */
    useEventListener(window, 'keydown', (e: KeyboardEvent) => {
        if (!isHovered.value) return;
        const activeElement = document.activeElement;
        if (activeElement) {
            const tagName = activeElement.tagName.toLowerCase();
            if (
                tagName === 'input' || 
                tagName === 'textarea' || 
                activeElement.hasAttribute('contenteditable')
            ) {
                return;
            }
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            emits('left', e);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            emits('right', e);
        }
    });

    /**
     * 处理 PointerEvent 拖拽初始化
     */
    const startDrag = (e: PointerEvent) => {
        if (!props.enable || (e.pointerType === 'mouse' && e.button !== 0)) return;
        if (!zoomRef.value) return;

        isTransitioning.value = false;
        if (transitionTimer) clearTimeout(transitionTimer);

        const rect         = zoomRef.value.getBoundingClientRect();
        const parentScaleX = rect.width / containerSize.value.width;
        const parentScaleY = rect.height / containerSize.value.height;

        const startX        = e.clientX - matrix.value.tx * (parentScaleX || 1);
        const startY        = e.clientY - matrix.value.ty * (parentScaleY || 1);
        const startClientX  = e.clientX;
        const startClientY  = e.clientY;

        hasMoved.value   = false;
        isDragging.value = true;

        const target = e.target as HTMLElement;
        try {
            target.setPointerCapture(e.pointerId);
        } catch {}

        const onMove = (me: PointerEvent) => {
            if (Math.abs(me.clientX - startClientX) > 3 || Math.abs(me.clientY - startClientY) > 3) {
                hasMoved.value = true;
            }
            matrix.value.tx = (me.clientX - startX) / (parentScaleX || 1);
            matrix.value.ty = (me.clientY - startY) / (parentScaleY || 1);
            clampBounds();
        };

        const onEnd = (me: PointerEvent) => {
            isDragging.value = false;
            
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onEnd);
            window.removeEventListener('pointercancel', onEnd);
            
            try { 
                target.releasePointerCapture(me.pointerId); 
            } catch {}
        };

        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onEnd);
        window.addEventListener('pointercancel', onEnd);
    };

    useEventListener(zoomRef, 'pointerdown', startDrag);

    /**
     * 组件挂载时初始化容器的实际宽高
     */
    onMounted(() => {
        const container = containerRef.value;
        if (container) {
            containerSize.value = {
                width: container.clientWidth,
                height: container.clientHeight,
            };
            applyPendingZoom();
        }
    });
</script>

<template>
    <div class="ui-zoom"
        ref="zoomRef"
        @contextmenu.prevent="handleRightClick"
        @click.capture="handleWrapperClick"
    >
        <div class="ui-zoom-container"
            ref="containerRef"
            :style="containerStyles"
        >
            <slot></slot>
        </div>
    </div>
</template>


<style lang="less">
    .ui-zoom {
        position: relative;
        width: 100%;
        height: 100%;
        user-select: none; 
        touch-action: none; 
        overflow: hidden;

        &-container {
            width: 100%;
            height: 100%;
            will-change: transform; 
            transform-origin: 50% 50%;
        }

        img {
            -webkit-user-drag: none;
            user-select: none;
            -webkit-user-select: none;
        }
    }
</style>