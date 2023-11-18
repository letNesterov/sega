import styled, { keyframes } from "styled-components";

const riseAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateY(-30rem) scale(0);
    opacity: 0;
  }
`;

export const EmojiContainer = styled.div.attrs<{ $top: number; $left: number }>(
  ({ $left, $top }) => ({
    style: {
      position: "absolute",
      top: `calc(${$top}px - 4rem)`,
      left: `calc(${$left}px - 3rem)`,
    },
  })
)`
  animation: ${riseAnimation} 1.5s ease-in-out;
`;

export const EmojiIcon = styled.div`
  font-size: 3rem;
  color: #e74c3c;
  user-select: none;
`;

export const EmojiButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 1rem;
  background-color: white;
  background-size: 500%;
  transition: all 0.2s ease;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0 2px 4px darkslategray;
  user-select: none;

  &:active {
    box-shadow: 0 0 2px darkslategray;
    transform: translateY(2px);
  }
`;
