import * as React from "react";
import { StyledComponentProps } from "@material-ui/styles";

export interface SvgIconProps extends StyledComponentProps<"root"> {
  children?: React.ReactNode;
}

declare const SvgIcon: React.JSXElementConstructor<SvgIconProps>;
export default SvgIcon;
