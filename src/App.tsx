import { useState } from "react";
import { AppWrapper } from "./styled";
import { MainPage } from "./components/MainPage";
import { StartedPage } from "./components/StartedPage";

export const App = () => {
  const [shouldShowMainPage, setShouldShowMainPage] = useState(false);

  const onNextPage = () => {
    setShouldShowMainPage(true);
  };

  return (
    <AppWrapper>
      {shouldShowMainPage ? (
        <MainPage />
      ) : (
        <StartedPage onNextPage={onNextPage} />
      )}
    </AppWrapper>
  );
};
