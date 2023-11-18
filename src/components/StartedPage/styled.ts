import styled, { keyframes } from "styled-components";

export const StartedPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  width: 100%;
  height: 100%;
`;

export const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

export const EmojiWrapper = styled.div`
  font-size: 5rem;
  animation: ${pulseAnimation} 1s infinite;

  cursor: pointer;
`;

export const StartPageTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
`;
