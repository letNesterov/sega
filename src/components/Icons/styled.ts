import styled, { css } from "styled-components";

import { ISVGIcon } from "./model";

export const SVGIconWrapperStyled = styled.svg<ISVGIcon>`
  ${({ width, height, $isCursorPointer }) => css`
    width: ${width};
    height: ${height};
    cursor: ${$isCursorPointer ? "pointer" : "default"};
  `}
`;
