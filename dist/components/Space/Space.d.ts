import { VNode } from 'vue';
import { SpaceVariants } from '.';
declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    size: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: () => SpaceVariants["direction"];
        default: string;
    };
    fill: {
        type: () => SpaceVariants["fill"];
        default: boolean;
    };
}>, () => VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: () => SpaceVariants["direction"];
        default: string;
    };
    fill: {
        type: () => SpaceVariants["fill"];
        default: boolean;
    };
}>> & Readonly<{}>, {
    size: number;
    fill: boolean | null | undefined;
    direction: "vertical" | "horizontal" | null | undefined;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
