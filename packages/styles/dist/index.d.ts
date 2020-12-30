export declare type PropsFunc<Props extends object, T> = (props: Props) => T;
declare namespace CSS {
    /**
     * incomplete
     */
    interface Properties<Value> {
        display: Value;
    }
    namespace AtRule {
        interface FontFace {
        }
    }
}
declare type JSSNormalCssProperties = CSS.Properties<number | string>;
declare type JSSFontface = CSS.AtRule.FontFace & {
    fallbacks?: CSS.AtRule.FontFace[];
};
/**
 * Allows the user to augment the properties available
 */
export interface BaseCSSProperties extends JSSNormalCssProperties {
    "@font-face"?: JSSFontface | JSSFontface[];
}
export interface CSSProperties extends BaseCSSProperties {
    [k: string]: unknown | CSSProperties;
}
export declare type BaseCreateCSSProperties<Props extends object = {}> = {
    [P in keyof BaseCSSProperties]: BaseCSSProperties[P] | PropsFunc<Props, BaseCSSProperties[P]>;
};
export interface CreateCSSProperties<Props extends object = {}> extends BaseCreateCSSProperties<Props> {
    [k: string]: BaseCreateCSSProperties<Props>[keyof BaseCreateCSSProperties<Props>] | CreateCSSProperties<Props>;
}
export declare type StyleRules<Props extends object = {}, ClassKey extends string = string> = Record<ClassKey, CSSProperties | CreateCSSProperties<Props> | PropsFunc<Props, CreateCSSProperties<Props>>>;
export declare function createStyles<ClassKey extends string = string, Props extends object = {}>(styles: StyleRules<Props, ClassKey>): StyleRules<Props, ClassKey>;
export {};
//# sourceMappingURL=index.d.ts.map