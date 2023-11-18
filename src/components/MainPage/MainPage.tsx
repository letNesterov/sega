import { useCallback, useEffect, useState } from "react";
import { IPositionState } from "./model";
import { roadMapImages } from "./data";
import {
  Image,
  ImageWrapper,
  MainText,
  ModalContentWrapper,
  RoadMapMainPageWrapper,
} from "./styled";
import { RoadMapBlock } from "./components/RoadMapBlock";
import { Road } from "./components/Road";
import { useEmojiAnimation } from "../../hooks/useEmojiAnimation";
import { EmojiButton } from "../../shared/emojiStyled";
import { Modal } from "../Modal";

export const IMAGE_ID = "image-";

export const MainPage = () => {
  const [positions, setPositions] = useState<IPositionState[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const { RenderComponent, handleButtonClick, originalMainPageRef } =
    useEmojiAnimation();

  useEffect(() => {
    if (roadMapImages.length !== positions.length) {
      setIsModalOpen(false);
      setSelectedImage(null);
      const positions = roadMapImages
        .map((_, index) => {
          const imageById = document.getElementById(`${IMAGE_ID}${index}`);

          if (imageById) {
            const fromTop = imageById.offsetTop + imageById.offsetHeight;
            const fromLeft = imageById.offsetLeft + imageById.offsetWidth / 2;

            return {
              startX: fromLeft,
              startY: fromTop,
            };
          }
        })
        .filter(Boolean);

      setPositions(positions as IPositionState[]);
    }
  }, [positions.length]);

  const onOpenModal = useCallback((index: number) => {
    setIsModalOpen(true);
    setSelectedImage(index);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
  }, []);

  return (
    <>
      <RoadMapMainPageWrapper $isModalOpen={isModalOpen}>
        {roadMapImages.map(({ image, id }, index) => (
          <RoadMapBlock
            key={id}
            photo={image}
            id={index}
            onOpenModal={onOpenModal}
          />
        ))}

        {positions.map((position, index) => (
          <Road key={index} positions={positions} {...position} id={index} />
        ))}
      </RoadMapMainPageWrapper>

      <Modal open={isModalOpen} onClose={onCloseModal}>
        {selectedImage !== null && roadMapImages[selectedImage] && (
          <ModalContentWrapper ref={originalMainPageRef}>
            <ImageWrapper>
              <Image src={roadMapImages[selectedImage].image} />
            </ImageWrapper>
            <MainText
              dangerouslySetInnerHTML={{
                __html: roadMapImages[selectedImage]?.text || "",
              }}
            />

            <EmojiButton onClick={handleButtonClick}>🍺</EmojiButton>

            {RenderComponent}
          </ModalContentWrapper>
        )}
      </Modal>
    </>
  );
};
