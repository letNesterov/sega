import { useCallback, useMemo, useRef, useState } from "react";
import { EmojiContainer, EmojiIcon } from "../shared/emojiStyled";

const HEARTS_NUMBER = 20;

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export interface IEmojiState {
  id: number;
  top: number;
  left: number;
}

export const useEmojiAnimation = () => {
  const [emojis, setEmojis] = useState<IEmojiState[]>([]);
  const originalMainPageRef = useRef<HTMLDivElement | null>(null);

  const handleButtonClick = useCallback(() => {
    const originalMainPageHeight = originalMainPageRef.current?.offsetHeight;
    const originalMainPageWidth = originalMainPageRef.current?.offsetWidth;

    const newEmojis: IEmojiState[] = Array.from(
      { length: HEARTS_NUMBER },
      (_, index) => ({
        id: Date.now() + index,
        top: getRandomNumber(50, originalMainPageHeight!),
        left: getRandomNumber(50, originalMainPageWidth!),
      })
    );

    setEmojis((prev) => [...prev, ...newEmojis]);

    setTimeout(() => {
      setEmojis((prev) => prev.slice(HEARTS_NUMBER));
    }, 1000);
  }, []);

  const RenderComponent = useMemo(
    () =>
      emojis.map(({ id, left, top }) => (
        <EmojiContainer key={id} $top={top} $left={left}>
          <EmojiIcon>🍺</EmojiIcon>
        </EmojiContainer>
      )),
    [emojis]
  );

  return { RenderComponent, handleButtonClick, originalMainPageRef };
};
