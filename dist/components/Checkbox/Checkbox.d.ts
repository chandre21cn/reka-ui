export interface CheckboxProps<T = boolean> {
    /** 选中时的值，默认为 true */
    trueValue?: T;
    /** 未选中时的值，默认为 false */
    falseValue?: T;
    /** 表单提交时的原生 value，默认为 'on' */
    value?: string;
    /** 默认值 (非受控) */
    defaultValue?: T;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否必填 */
    required?: boolean;
    /** 表单字段名 */
    name?: string;
}
declare const __VLS_export: <T extends boolean | string | number = boolean>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_exposed?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: import('vue').PublicProps & __VLS_PrettifyLocal<(CheckboxProps<boolean> & {
        modelValue?: T;
    }) & {
        onChange?: ((value: T) => any) | undefined;
        "onUpdate:modelValue"?: ((value: T | undefined) => any) | undefined;
    }> & (typeof globalThis extends {
        __VLS_PROPS_FALLBACK: infer P;
    } ? P : {});
    expose: (exposed: {}) => void;
    attrs: any;
    slots: {
        default?: (props: {}) => any;
    };
    emit: ((e: "change", value: T) => void) & ((event: "update:modelValue", value: T | undefined) => void);
}>) => import('vue').VNode & {
    __ctx?: NonNullable<Awaited<typeof __VLS_setup>>;
};
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_PrettifyLocal<T> = (T extends any ? {
    [K in keyof T]: T[K];
} : {
    [K in keyof T as K]: T[K];
}) & {};
