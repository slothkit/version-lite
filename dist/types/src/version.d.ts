declare class Version {
    v: string;
    private _v;
    constructor(v: string);
    set value(v: string);
    get value(): string;
    static valid(v: string): boolean;
    static compare(v1: string, v2: string): 0 | 1 | -1;
    /**
     * is v1 < v2
     */
    static isLt(v1: string, v2: string): boolean;
    /**
     * is v1 <= v2
     */
    static isLte(v1: string, v2: string): boolean;
    /**
     * is v1 > v2
     */
    static isGt(v1: string, v2: string): boolean;
    /**
     * is v1 >= v2
     */
    static isGte(v1: string, v2: string): boolean;
    /**
     * is v1 === v2
     */
    static isEq(v1: string, v2: string): boolean;
    lt(v: string): boolean;
    lte(v: string): boolean;
    gt(v: string): boolean;
    gte(v: string): boolean;
    eq(v: string): boolean;
}
export declare function version(v: string): Version;
export default Version;
