import { SVGProps } from "react";

export interface ISVGIcon extends SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  viewBox?: string;
  $isCursorPointer?: boolean;
}
