import { FCC } from "../../types";
import { CloseIcon } from "../Icons/CloseIcon";
import { IModalProps } from "./model";

import { Close, ModalContainer, ModalWrapper } from "./styled";

export const Modal: FCC<IModalProps> = ({ children, onClose, open }) => {
  const handleWrapperClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <ModalContainer $open={open}>
      <ModalWrapper onClick={handleWrapperClick}>{children}</ModalWrapper>
      <Close onClick={onClose}>
        <CloseIcon $isCursorPointer />
      </Close>
    </ModalContainer>
  );
};
