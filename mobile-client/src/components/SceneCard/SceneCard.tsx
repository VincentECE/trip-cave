import { Scene } from "../../api";
import { useStore } from "../../store";
import { Container, Img } from "./SceneCard.style";

type SceneCardProps = { scene: Scene };

export const SceneCard = (props: SceneCardProps): JSX.Element => {
  const playNow = useStore((state) => state.playNow);

  const { title, imageUrl, sceneId } = props.scene;
  return (
    <Container
      onClick={() => {
        playNow(sceneId);
      }}
    >
      <h3>{title}</h3>
      <Img src={imageUrl} />
    </Container>
  );
};
