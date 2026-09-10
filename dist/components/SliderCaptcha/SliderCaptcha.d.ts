interface SlideResponse {
    key: string;
    ttl: number;
}
interface SliderCaptchaProps {
    size?: 'base' | 'medium';
    request?: (tracks: string) => Promise<SlideResponse>;
}
declare const __VLS_export: import('vue').DefineComponent<SliderCaptchaProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<SliderCaptchaProps> & Readonly<{}>, {
    size: "base" | "medium";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
