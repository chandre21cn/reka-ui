const TrackCrypt = {
    // c 是一个键值对对象，用于生成 URL 参数
    fp: function (c: Record<string, string | number | boolean>) {
        const a: string[] = [];
        for (const b in c) {
            if (Object.prototype.hasOwnProperty.call(c, b)) {
                a.push(encodeURIComponent(b) + "=" + encodeURIComponent(String(c[b])));
            }
        }
        a.push(("v=" + Math.random()).replace(".", ""));
        return a.join("&");
    },

    // 进制转换：将数字转换为自定义字符集的字符串
    st: function (d: number): string {
        const c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-~".split("");
        const b = c.length;
        let e = Math.floor(+d);
        const a: string[] = [];
        do {
            const mod = e % b;
            e = (e - mod) / b;
            a.unshift(c[mod]);
        } while (e);
        return a.join("");
    },

    // 补齐长度
    pi: function (a: string, b: number): string {
        return (Array(b).join("0") + a).slice(-b);
    },

    // 格式化并压缩数字
    pm: function (d: number, c: number, b: boolean): string {
        const e = this.st(Math.abs(d));
        let a = "";
        if (!b) {
            a += (d >= 0 ? "1" : "0"); // 符号位
        }
        a += this.pi(e, c);
        return a;
    },

    // 轨迹加密主函数
    encrypt: function (c: number[][]): string {
        const b: string[] = [];
        for (let e = 0; e < c.length; e++) {
            if (e === 0) {
                // 第一个点使用绝对坐标
                b.push(this.pm(c[e][0] < 262143 ? c[e][0] : 262143, 3, true));
                b.push(this.pm(c[e][1] < 16777215 ? c[e][1] : 16777215, 4, true));
                b.push(this.pm(c[e][2] < 4398046511103 ? c[e][2] : 4398046511103, 7, true));
            } else {
                // 后续点使用相对前一点的增量
                const diffX = c[e][0] - c[e - 1][0];
                const diffY = c[e][1] - c[e - 1][1];
                const diffT = c[e][2] - c[e - 1][2];
                b.push(this.pm(Math.abs(diffX) < 4095 ? diffX : (diffX > 0 ? 4095 : -4095), 2, false));
                b.push(this.pm(Math.abs(diffY) < 4095 ? diffY : (diffY > 0 ? 4095 : -4095), 2, false));
                b.push(this.pm(diffT < 16777215 ? diffT : 16777215, 4, true));
            }
        }
        return b.join("");
    },

    // 解析 st 转换的字符串回数字
    parseSt: function (str: string, charSet: string[]): number {
        let value = 0;
        const base = charSet.length;
        for (const char of str) {
            const index = charSet.indexOf(char);
            if (index === -1) throw new Error(`无效字符: ${char}`);
            value = value * base + index;
        }
        return value;
    },

    // 轨迹解密
    decrypt: function (encryptedStr: string): number[][] {
        const charSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-~".split("");
        const result: number[][] = [];
        let index = 0;

        // 解析第一个点 (3+4+7)
        const firstX = this.parseSt(encryptedStr.substring(index, index + 3), charSet); index += 3;
        const firstY = this.parseSt(encryptedStr.substring(index, index + 4), charSet); index += 4;
        const firstT = this.parseSt(encryptedStr.substring(index, index + 7), charSet); index += 7;
        result.push([firstX, firstY, firstT]);

        // 解析后续差值点 (3+3+4 = 10位)
        while (index + 10 <= encryptedStr.length) {
            const prev = result[result.length - 1];

            // X 差值
            const signX = encryptedStr[index] === "1" ? 1 : -1;
            const valX = this.parseSt(encryptedStr.substring(index + 1, index + 3), charSet);
            index += 3;

            // Y 差值
            const signY = encryptedStr[index] === "1" ? 1 : -1;
            const valY = this.parseSt(encryptedStr.substring(index + 1, index + 3), charSet);
            index += 3;

            // T 差值 (无符号)
            const valT = this.parseSt(encryptedStr.substring(index, index + 4), charSet);
            index += 4;

            result.push([
                prev[0] + (signX * valX),
                prev[1] + (signY * valY),
                prev[2] + valT
            ]);
        }
        return result;
    }
};

function RandomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min + 1;
}

function RandomChoice<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function getTrace(distance: number): string {
    distance = Math.floor(distance);
    const trace: number[][] = []; // 明确为 number[][]

    const sy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0];
    const st = [15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 14, 16, 17, 18, 16, 17, 18, 19, 20, 17];

    let sx: number[];
    if (distance < 95) {
        sx = [1, 2, 1, 2, 1, 2, 1, 1, 2, 1];
    } else {
        sx = [1, 2, 1, 2, 1, 2, 2, 2, 3, 4];
    }

    let zt = new Date().getTime() - 2000;
    
    // 修正：不要推入字符串，直接推入数字
    trace.push([672, 341, zt]);
    
    const baseX = 36;
    const baseY = 415;
    let zx = 0;
    let zy = 0;
    const random_x_step = RandomNum(9, 14);

    trace.push([baseX, baseY, zt]);

    let n = 0;
    while (true) {
        n += 1;
        let x = (n < 5) ? 1 : RandomChoice(sx);

        if (distance > 125 && random_x_step === n) {
            x = RandomNum(14, 18);
        }

        const y = RandomChoice(sy);
        const t = RandomChoice(st);

        zx += x;
        zy += y;
        zt += t;

        trace.push([zx + baseX, zy + baseY, zt]);

        if (distance - zx < 6) break;
    }

    const remaining = distance - zx;
    for (let i = 0; i < remaining; i++) {
        let t = RandomChoice(st);
        if (remaining === i + 1) t = RandomNum(42, 56);
        else if (remaining === i + 2) t = RandomNum(32, 38);
        else if (remaining === i + 3) t = RandomNum(30, 36);

        zx += 1;
        zt += t;
        trace.push([zx + baseX, zy + baseY, zt]);
    }

    zt += RandomNum(100, 200);
    trace.push([zx + baseX, zy + baseY, zt]);

    return TrackCrypt.encrypt(trace);
}

export default TrackCrypt;