import styled, { css } from "styled-components";

export const ModalContainer = styled.div<{ $open: boolean }>`
  opacity: 0;
  visibility: hidden;

  transition: opacity 0.3s;

  ${({ $open }) =>
    $open &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  padding: 1rem;
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;

  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Close = styled.span`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ModalWrapper = styled.div`
  overflow-y: hidden !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  background-color: white;
  border-radius: 1rem;
`;
