import { FC, memo, useState } from "react";
import { IRoadMapBlockProps } from "../model";
import { RoadMapBlockWrapper } from "../styled";
import { IMAGE_ID } from "..";

export const RoadMapBlock: FC<IRoadMapBlockProps> = memo(
  ({ id, photo, onOpenModal }) => {
    const [isClicked, setIsClicked] = useState(false);

    const onClick = () => {
      setIsClicked(true);
      onOpenModal(id);
    };

    return (
      <RoadMapBlockWrapper $isClicked={isClicked} id={id}>
        <img
          id={`${IMAGE_ID}${id}`}
          src={photo}
          alt="Photo"
          onClick={onClick}
        />
      </RoadMapBlockWrapper>
    );
  }
);
