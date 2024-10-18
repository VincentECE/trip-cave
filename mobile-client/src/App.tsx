import { useEffect } from "react";
import { establishConnection } from "./socket";
import { Main } from "./pages/Main";
import styled from "styled-components";
import { flex } from "./style/flex";
import { MobileBottomTabBar } from "./components/BottomTabBar/MobileBottomTabBar";
import { MediaBar } from "./components/MediaBar";
import { useStore } from "./store";
import { QueueList } from "./components/QueueList/QueueList";
import { CurrentMediaInfo } from "./components/CurrentMediaInfo";

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.color.appBg};
  padding: 20px;
  min-width: 360px;
  ${flex.default("column")}
`;

const App = (): JSX.Element => {
  const { syncSceneStatus } = useStore();

  useEffect(() => {
    establishConnection();
    syncSceneStatus();
    console.log("UseEffect from app fired");
  }, [establishConnection, syncSceneStatus]);

  return (
    <AppContainer>
      <Main />
      <MobileBottomTabBar>
        <MediaBar />
        <CurrentMediaInfo />
      </MobileBottomTabBar>
    </AppContainer>
  );
};

export default App;
