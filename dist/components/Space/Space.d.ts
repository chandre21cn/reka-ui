import { VNode } from 'vue';
import { SpaceVariants } from '.';
export interface SpaceProps {
    size?: number;
    direction?: SpaceVariants['direction'];
}
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
}>> & Readonly<{}>, {
    size: number;
    direction: "vertical" | "horizontal" | null | undefined;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
