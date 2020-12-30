export interface CSSProperties {
    [k: string]: unknown | CSSProperties;
}
export declare type StyleRules<ClassKey extends string = string> = Record<ClassKey, CSSProperties>;
export declare function createStyles<ClassKey extends string = string>(styles: StyleRules<ClassKey>): StyleRules<ClassKey>;
//# sourceMappingURL=index.d.ts.map