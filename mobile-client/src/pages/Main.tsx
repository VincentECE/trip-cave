import { SceneList } from "../features";
import { MainContainer } from "./Main.style";

export type MainProps = {};

export const Main = (props: MainProps) => (
  <MainContainer>
    <SceneList />
  </MainContainer>
);
