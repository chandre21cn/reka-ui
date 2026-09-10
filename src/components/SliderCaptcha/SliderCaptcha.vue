<template>
    <div :class="[ 'SliderCaptcha', `SliderCaptcha-${ size }` ]" ref="wrapRef">
        <div 
            class="SliderCaptcha-Mask"
            :class="{
                error: isError,
                success: isSuccess,
                transition: isReady,
            }"
            :style="{ width: maskWidth + 'px'}" 
        />

        <div class="SliderCaptcha-Tips"
            :class="{
                ready: isReady || isPending
            }"
        >
            <span v-if="isChecking">验证中...</span>
            <span v-else-if="isSuccess">验证成功</span>
            <span v-else-if="isError">验证失败</span>
            <span v-else>拖动滑块到最右边</span>
        </div>

        <div ref="btnRef" 
            class="SliderCaptcha-Btn" 
            :class="{
                transition: isReady,
                checking: isChecking,
                error: isError,
                success: isSuccess,
            }"
            :style="{ left: offsetX + 'px', 'touch-action': 'none' }"
            @pointerdown="onDown" 
        >
            <Loader2 :size="16" class="SliderCaptcha_loader" v-if="isChecking" />
            <Check :size="16" v-else-if="isSuccess" />
            <X :size="16" v-else-if="isError" />
            <ArrowRight v-else :size="16" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import TrackCrypt from './trackCrypt'
import { ArrowRight, Check, Loader2, X } from 'lucide-vue-next';

const Status = {
    READY: 1,
    PENDING: 2,
    CHECKING: 3,
    SUCCESS: 4,
    ERROR: 5
} as const;

interface SlideResponse {
    key: string;
    ttl: number;
}

interface SliderCaptchaProps {
    size?: 'base' | 'medium',
    request?: (tracks: string) => Promise<SlideResponse>
}

const props = withDefaults(defineProps<SliderCaptchaProps>(), {
    size: 'base'
})


const wrapRef = ref<HTMLElement | null>(null)
const btnRef = ref<HTMLElement | null>(null)
const offsetX = ref<number>(0)
const status = ref<number>(Status.READY)

// 4. 普通变量类型定义
let maxWidth = 0
let startX = 0
let lastTime = 0
let trackRecord: number[][] = [] // 明确为数字二维数组
let timer: ReturnType<typeof setTimeout> | null = null

// 5. 计算属性
const isReady = computed(() => status.value === Status.READY)
const isPending = computed(() => status.value === Status.PENDING)
const isChecking = computed(() => status.value === Status.CHECKING)
const isSuccess = computed(() => status.value === Status.SUCCESS)
const isError = computed(() => status.value === Status.ERROR)

const maskWidth = computed(() => {
    return offsetX.value + (btnRef.value?.offsetWidth ? btnRef.value.offsetWidth - 1 : 0)
})

/** 添加操作轨迹 */
function addTrack(x: number, y: number) {
    const now = Date.now()
    if (now - lastTime > 16) {
        trackRecord.push([x, y, now])
        lastTime = now
    }
}

/** 恢复初始状态 */
function reset() {
    status.value = Status.READY
    offsetX.value = 0
    startX = 0
    lastTime = 0
    trackRecord = []
    if (timer) {
        clearTimeout(timer)
        timer = null
    }
}

/** 提交验证 */
async function startCheck() {
    if (!props.request) return;
    status.value = Status.CHECKING
    try {
        const tracks = TrackCrypt.encrypt(trackRecord)
        const data = await props.request(tracks)
        status.value = Status.SUCCESS
        timer = setTimeout(reset, data.ttl * 999)
    } catch (error: any) {
        status.value = Status.ERROR
        setTimeout(() => {
            reset()
        }, 1000)
    }
}

/** 动态更新最大可滑动宽度 */
function updateMaxWidth() {
    if (wrapRef.value && btnRef.value) {
        maxWidth = wrapRef.value.offsetWidth - btnRef.value.offsetWidth
    }
}

/** 按下事件 */
function onDown(event: PointerEvent) {
    if (!isReady.value) return
    updateMaxWidth()
    status.value = Status.PENDING
    if (btnRef.value) {
        btnRef.value.setPointerCapture(event.pointerId)
    }
    
    startX = event.clientX
    addTrack(Math.floor(event.clientX), Math.floor(event.clientY))
}

/** 移动事件 */
function onMove(event: PointerEvent) {
    if (!isPending.value) return
    const moveX = Math.max(0, Math.min(maxWidth, event.clientX - startX))
    addTrack(Math.floor(event.clientX), Math.floor(event.clientY))
    offsetX.value = moveX
}

/** 抬起事件 */
function onEnd(event: PointerEvent) {
    if (!isPending.value) return
    if (btnRef.value) {
        btnRef.value.releasePointerCapture(event.pointerId)
    }
    addTrack(Math.floor(event.clientX), Math.floor(event.clientY))
    if (offsetX.value < maxWidth || trackRecord.length < 8) {
        reset()
        return
    }
    
    startCheck()
}

onMounted(() => {
    document.addEventListener('pointermove', onMove)
    document.addEventListener('pointerup', onEnd)
    document.addEventListener('pointercancel', onEnd)
    updateMaxWidth()
})

onBeforeUnmount(() => {
    if (timer) clearTimeout(timer)
    document.removeEventListener('pointermove', onMove)
    document.removeEventListener('pointerup', onEnd)
    document.removeEventListener('pointercancel', onEnd)
})
</script>

<style lang="less">
    .SliderCaptcha {
        position: relative;
        width: 100%;
        height: var(--control-height-base);
        user-select: none;
        border-radius: var(--border-radius-base);
        background-color: var(--color-fill-a4);

        &-Mask, &-Btn, &-Tips {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        
        .transition {
            transition: all .3s
        }


        &-Tips {
            right: 0;
            font-size: var(--font-size-small);
            color: var(--color-white-a12);
            &.ready {
                background: -webkit-gradient(
                    linear, left top, right top, 
                    color-stop(0, var(--color-text-2)), 
                    color-stop(.4, var(--color-text-2)), 
                    color-stop(.5, #fff), 
                    color-stop(.6, var(--color-text-2)), 
                    color-stop(1, var(--color-text-2))
                );
                background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: slidetounlock 3s infinite;
            }
        }

        &-Btn {
            width: var(--control-height-base);
            cursor: pointer;
            font-size: var(--font-size-base);
            color: var(--color-text-3);
            border-radius: inherit;
            background-color: var(--color-white-a12);
            box-shadow: var(--shadow-line);
            touch-action: none; 

            &.error {
                color: var(--color-danger-9);
            }
            &.success {
                color:var(--color-success-9);
            }
            &.checking, &.error, &.success {
                cursor: auto;
            }
        }

        &-Mask {
            width: 0;
            background-color: var(--color-success-9);
            border-radius: inherit;
            overflow: hidden;
            &.error {
                background-color: var(--color-danger-9);
            }
            &.success {
                color: var(--color-success-9);
            }
        }
        
        &_loader {
            animation: ui-spin 1s linear infinite;
        }

        &-medium {
            height: var(--control-height-medium);
            border-radius: var(--border-radius-medium);
        }
        &-medium &-Btn {
            width: var(--control-height-medium);
        }

    }

   

    @keyframes slidetounlock {
        0% {
            background-position: -200px 0
        }
        100% {
            background-position: 200px 0
        }
    }
</style>