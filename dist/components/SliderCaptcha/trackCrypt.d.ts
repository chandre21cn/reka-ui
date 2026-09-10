declare const TrackCrypt: {
    fp: (c: Record<string, string | number | boolean>) => string;
    st: (d: number) => string;
    pi: (a: string, b: number) => string;
    pm: (d: number, c: number, b: boolean) => string;
    encrypt: (c: number[][]) => string;
    parseSt: (str: string, charSet: string[]) => number;
    decrypt: (encryptedStr: string) => number[][];
};
export declare function getTrace(distance: number): string;
export default TrackCrypt;
