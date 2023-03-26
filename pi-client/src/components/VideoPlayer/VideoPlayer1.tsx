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
      <video ref={videoRef} width="100%" autoPlay loop id="video1-div">
        <source
          src={currentVideo1}
          type="video/mp4"
          media="all and (max-width:480px)"
        />
      </video>
    </VideoPlayerContainer>
  );
};
