import { useEffect } from "react";
import { establishConnection } from "./socket";
import { Main } from "./pages/Main";
import styled from "styled-components";
import { flex } from "./style/flex";
import { MobileBottomTabBar } from "./components/BottomTabBar/MobileBottomTabBar";
import { MediaBar } from "./components/MediaBar";
import { useStore } from "./store";

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
  }, [establishConnection, syncSceneStatus]);

  return (
    <AppContainer>
      <Main />
      <MobileBottomTabBar>
        <MediaBar />
      </MobileBottomTabBar>
    </AppContainer>
  );
};

export default App;
