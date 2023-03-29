import { useEffect } from "react";
import { establishConnection } from "./socket";
import styled from "styled-components";
import { flex } from "./style/flex";
import { MobileBottomTabBar } from "./components/molecules/BottomTabBar/MobileBottomTabBar";
import { MediaBar } from "./components/molecules/MediaBar";
import { SceneList } from "./features";
import { BaseLayout } from "./components/layout/BaseLayout";

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.color.appBg};
  padding: 20px;
  ${flex.default("column")}
`;

const App = (): JSX.Element => {
  useEffect(() => {
    establishConnection();
  });

  return (
    <AppContainer>
      <BaseLayout>
        <>
          <SceneList />
        </>
      </BaseLayout>
      <MobileBottomTabBar>
        <MediaBar />
      </MobileBottomTabBar>
    </AppContainer>
  );
};

export default App;
