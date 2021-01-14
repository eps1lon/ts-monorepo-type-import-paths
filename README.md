# ts-monorepo-type-import-paths

## Steps to reproduce

1. clone this repository
1. `yarn`
1. `yarn start`

## Expected behavior

`import()` types use package identifiers.

## Actual behavior

`import()` types use relative paths that are unusable if the packages are published.

Example (removed lines is actual code, added lines is expected code):

`packages/lab/dist/ArrowLeft.d.ts`

```diff
import * as React from "react";
-declare const _default: React.JSXElementConstructor<import("../../core/src/SvgIcon").SvgIconProps>;
+declare const _default: React.JSXElementConstructor<import("@material-ui/core/SvgIcon").SvgIconProps>;
/**
 * @ignore - internal component.
 */
export default _default;
//# sourceMappingURL=ArrowLeft.d.ts.map
```

## Context

Originally reported in https://github.com/mui-org/material-ui/issues/24112.
