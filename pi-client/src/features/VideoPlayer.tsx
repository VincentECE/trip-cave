import { Header3 } from "../components/Typography/Header3";
import { VideoPlayer1, VideoPlayer2 } from "../components/VideoPlayer";
import { useStore } from "../store";

export const VideoPlayer = (): JSX.Element => {
  const { showPlayer1 } = useStore((state) => ({
    showPlayer1: state.showPlayer1,
    showPlayer2: state.showPlayer2,
  }));

  const videoIdentifier = showPlayer1 ? "1" : "2";
  return (
    <div>
      <Header3 text={`Player ${videoIdentifier}`} />
      <VideoPlayer1 hide={videoIdentifier === "1"} />
      <VideoPlayer2 hide={videoIdentifier === "2"} />
    </div>
  );
};
