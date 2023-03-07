import { Scene } from "../../api";
import { useStore } from "../../store";
import { Header3 } from "../Typography";
import { Container, Img } from "./SceneCard.style";

type SceneCardProps = { scene: Scene };

export const SceneCard = (props: SceneCardProps): JSX.Element => {
  const playNextVideo = useStore((state) => state.playNextVideo);

  const { title, imageUrl, videoUrl } = props.scene;
  return (
    <Container
      onClick={() => {
        playNextVideo(videoUrl);
      }}
    >
      <Img src={imageUrl} />
      <Header3>{title}</Header3>
    </Container>
  );
};
