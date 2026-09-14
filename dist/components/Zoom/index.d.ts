export interface ZoomProps {
    enable?: boolean;
    maxScale?: number;
}
export interface ZoomCenter {
    x: number;
    y: number;
}
export interface ZoomData {
    scale: number;
    center: ZoomCenter;
}
export interface ZoomEmits {
    (e: 'left', event: MouseEvent | KeyboardEvent): void;
    (e: 'right', event: MouseEvent | KeyboardEvent): void;
    (e: 'wheel', event: WheelEvent): void;
    (e: 'change', data: ZoomData): void;
}
export interface ZoomExpose {
    reset: () => void;
    setZoom: (center: ZoomCenter, scale: number, isWheelInternal?: boolean) => void;
}
export { default as Zoom } from './Zoom';
export { default as ZoomGrid } from './ZoomGrid';
