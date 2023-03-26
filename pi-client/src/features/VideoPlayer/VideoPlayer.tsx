import { VideoPlayer1, VideoPlayer2 } from "../../components/VideoPlayer";
import { useStore } from "../../store";
import { Container } from "./VideoPlayer.style";

export const VideoPage = (): JSX.Element => {
  const { showPlayer1, showPlayer2 } = useStore((state) => ({
    showPlayer1: state.showPlayer1,
    showPlayer2: state.showPlayer2,
  }));

  const videoIdentifier = showPlayer1 ? "1" : "2";
  return (
    <Container>
      <h3>{`Player ${videoIdentifier}`}</h3>
      <VideoPlayer1 hide={videoIdentifier === "1"} />
      <VideoPlayer2 hide={videoIdentifier === "2"} />
    </Container>
  );
};
