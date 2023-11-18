import styled from "styled-components";

export const RoadMapMainPageWrapper = styled.div<{ $isModalOpen: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  overflow-y: hidden !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  overflow: ${({ $isModalOpen }) => ($isModalOpen ? "hidden" : "scroll")};
  height: 100%;
`;

export const RoadMapBlockWrapper = styled.div<{ id: number }>`
  width: 100%;
  display: flex;
  z-index: 9999;

  justify-content: ${({ id }) =>
    id === 0 ? "center" : id % 2 === 0 ? "flex-end" : "flex-start"};

  img {
    width: 6rem;
    height: 6rem;
    object-fit: cover;

    border-radius: 50%;

    cursor: pointer;
  }
`;

export const RoadWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;

export const CanvasStyled = styled.canvas`
  display: block;
`;

export const EmptyPhotosText = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
  text-align: center;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: black;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 20rem;
  object-fit: cover;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const MainText = styled.p`
  width: 100%;
  white-space: wrap;
  line-height: 1.8rem;
  word-wrap: break-word;
  font-size: 1rem;
  padding: 1rem;

  font-family: "Roboto", sans-serif;
`;
