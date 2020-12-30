export interface CSSProperties {
  [k: string]: unknown | CSSProperties;
}

export type StyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSProperties
>;
export function createStyles<ClassKey extends string = string>(
  styles: StyleRules<ClassKey>
): StyleRules<ClassKey> {
  return styles;
}
