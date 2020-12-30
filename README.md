# ts-monorepo-type-import-paths

## Steps to reproduce

1. clone this repository
1. `yarn`
1. `yarn build`

## Expected behavior

`import()` types use package identifiers.

## Actual behavior

`import()` types use relative paths that are unusable if the packages are published.

Example (removed lines is actual code, added lines is expected code):

`packages/core/dist/index.d.ts`

```diff
-export declare const styles: Record<"root", import("../../styles/src").CSSProperties | import("../../styles/src").CreateCSSProperties<{}> | import("../../styles/src").PropsFunc<{}, import("../../styles/src").CreateCSSProperties<{}>>>;
+export declare const styles: Record<"root", import("../../styles/src").CSSProperties | import("@material-ui/core").CreateCSSProperties<{}> | import("@material-ui/core").PropsFunc<{}, import("@material-ui/core").CreateCSSProperties<{}>>>;
```

## Context

Originally reported in https://github.com/mui-org/material-ui/issues/24112.
