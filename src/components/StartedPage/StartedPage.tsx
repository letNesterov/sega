import { FC } from "react";
import { IStartedPageProps } from "./module";
import { EmojiWrapper, StartPageTitle, StartedPageWrapper } from "./styled";

export const StartedPage: FC<IStartedPageProps> = ({ onNextPage }) => {
  return (
    <StartedPageWrapper>
      <StartPageTitle>С днем рождения сергунья!</StartPageTitle>

      <EmojiWrapper onClick={onNextPage}>🍺</EmojiWrapper>
    </StartedPageWrapper>
  );
};
