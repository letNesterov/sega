import { FC, memo } from "react";
import { IRoadMapBlockProps } from "../model";
import { RoadMapBlockWrapper } from "../styled";
import { IMAGE_ID } from "..";

export const RoadMapBlock: FC<IRoadMapBlockProps> = memo(
  ({ id, photo, onOpenModal }) => {
    return (
      <RoadMapBlockWrapper id={id}>
        <img
          id={`${IMAGE_ID}${id}`}
          src={photo}
          alt="Photo"
          onClick={() => onOpenModal(id)}
        />
      </RoadMapBlockWrapper>
    );
  }
);
