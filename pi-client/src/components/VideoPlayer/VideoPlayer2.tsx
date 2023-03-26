import { useStore } from "../../store";
import { useEffect, useRef } from "react";
import { VideoPlayerContainer } from "./VideoPlayer.style";
import { VideoPlayerProps } from "./type";
export type VideoPlayer2Props = {} & VideoPlayerProps;
export const VideoPlayer2 = (props: VideoPlayer2Props): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { currentVideo2, video2RefIsLoaded, setVideo2Ref } = useStore(
    (state) => ({
      currentVideo2: state.currentVideo2,
      video2RefIsLoaded: state.video2RefIsLoaded,
      setCurrentVideo2: state.setCurrentVideo2,
      setVideo2Ref: state.setVideo2Ref,
      playVideo2: state.playVideo2,
    })
  );

  useEffect(() => {
    setVideo2Ref(video2RefIsLoaded);
  }, [video2RefIsLoaded]);
  return (
    <VideoPlayerContainer hide={props.hide}>
      <video ref={videoRef} width="100%" autoPlay loop id="video2-div">
        <source
          src={currentVideo2}
          type="video/mp4"
          media="all and (max-width:480px)"
        />
      </video>
    </VideoPlayerContainer>
  );
};
