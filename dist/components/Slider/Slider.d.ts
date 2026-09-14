interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    values?: number[];
    hideThumb?: boolean;
}
type __VLS_Props = SliderProps;
type __VLS_ModelProps = {
    modelValue?: number;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number | undefined) => any;
} & {
    change: (value: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
}>, {
    disabled: boolean;
    max: number;
    min: number;
    step: number;
    hideThumb: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
