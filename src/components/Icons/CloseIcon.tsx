import { FC } from "react";

import { SVGIconWrapper } from "./SVGIconWrapper";
import { ISVGIcon } from "./model";

export const CloseIcon: FC<ISVGIcon> = (props) => {
  return (
    <SVGIconWrapper
      viewBox="0 0 64 64"
      width="40px"
      height="40px"
      strokeWidth="3.432"
      stroke="#fff"
      {...props}
    >
      <line x1="16" y1="16" x2="48" y2="48" />
      <line x1="48" y1="16" x2="16" y2="48" />
    </SVGIconWrapper>
  );
};
