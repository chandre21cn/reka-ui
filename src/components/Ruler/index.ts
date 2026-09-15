export interface RulerProps {
    values: number[]
}

export interface RulerEmits {
    (e: 'change', value: number): void;
}

export { default as Ruler } from './Ruler.vue'