import { useEffect } from "react";
import { establishConnection } from "./socket";
import { Main } from "./pages/Main";
import styled from "styled-components";
import { flex } from "./style/flex";
import { MobileBottomTabBar } from "./components/BottomTabBar/MobileBottomTabBar";
import { ControlBar } from "./components/ControlBar";
import { QueueList } from "./components/QueueList/QueueList";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.appBg};
  padding: 20px;
  min-width: 360px;
  ${flex.default("column")}
`;

const App = (): JSX.Element => {
  useEffect(() => {
    establishConnection();
  });

  return (
    <AppContainer>
      <Main />
      <MobileBottomTabBar>
        <>
          <ControlBar />
          <QueueList />
        </>
      </MobileBottomTabBar>
    </AppContainer>
  );
};

export default App;
