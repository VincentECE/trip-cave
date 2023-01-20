import { useStore } from "../../store";
import { useEffect, useRef } from "react";
import { VideoPlayerContainer } from "./VideoPlayer.style";
import { VideoPlayerProps } from "./type";
export type VideoPlayer2Props = {} & VideoPlayerProps;
export const VideoPlayer2 = (props: VideoPlayer2Props): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>();
  const { currentVideo2, video2RefIsLoaded, setVideo2Ref, playVideo2 } =
    useStore((state) => ({
      currentVideo2: state.currentVideo2,
      video2RefIsLoaded: state.video2RefIsLoaded,
      setCurrentVideo2: state.setCurrentVideo2,
      setVideo2Ref: state.setVideo2Ref,
      playVideo2: state.playVideo2,
    }));

  useEffect(() => {
    setVideo2Ref(videoRef.current);
  }, []);

  return (
    <VideoPlayerContainer hide={props.hide}>
      <button
        onClick={() => {
          playVideo2();
        }}
      >
        Play
      </button>
      <video
        ref={videoRef}
        id="video-window"
        src={currentVideo2}
        width="100%"
        autoPlay
        controls
        loop
      />
    </VideoPlayerContainer>
  );
};
