import { Scene } from "../../api";
import { useStore } from "../../store";
import { Header3 } from "../Typography";
import { Container, Img } from "./SceneCard.style";

type SceneCardProps = { scene: Scene };

export const SceneCard = (props: SceneCardProps): JSX.Element => {
  const playSelectedScene = useStore((state) => state.playSelectedScene);

  const { title, imageUrl, sceneId } = props.scene;
  return (
    <Container
      onClick={() => {
        playSelectedScene(sceneId);
      }}
    >
      <Img src={imageUrl} />
      <Header3>{title}</Header3>
    </Container>
  );
};
