import { useStore } from "../../store";
import { useEffect, useRef } from "react";
import { VideoPlayerContainer } from "./VideoPlayer.style";
import { VideoPlayerProps } from "./type";

export type VideoPage1Props = {} & VideoPlayerProps;
export const VideoPlayer1 = (props: VideoPage1Props): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { currentVideo1, video1RefIsLoaded, setVideo1Ref, playVideo1 } =
    useStore((state) => ({
      currentVideo1: state.currentVideo1,
      video1RefIsLoaded: state.video1RefIsLoaded,
      setVideo1Ref: state.setVideo1Ref,
      playVideo1: state.playVideo1,
    }));

  useEffect(() => {
    setVideo1Ref(videoRef.current);
  }, []);

  return (
    <VideoPlayerContainer hide={props.hide}>
      <button
        onClick={() => {
          playVideo1();
        }}
      >
        Play
      </button>
      <video
        ref={videoRef}
        id="video-window"
        src={currentVideo1}
        width="100%"
        autoPlay
        // controls
        loop
      />
    </VideoPlayerContainer>
  );
};
