import { FCC } from "../../types";
import { ISVGIcon } from "./model";
import { SVGIconWrapperStyled } from "./styled";

export const SVGIconWrapper: FCC<ISVGIcon> = ({ children, ...rest }) => {
  return <SVGIconWrapperStyled {...rest}>{children}</SVGIconWrapperStyled>;
};
