import { useEffect } from "react";
import { Video, VideoPlayerContainer } from "./VideoPlayer.style";

export type VideoPlayerProps = {
  currentVideo: string;
  setTriggerAnimation: (trigger: boolean) => void;
  triggerAnimation: boolean;
  videoRef?: React.RefObject<HTMLVideoElement> | null; //todo: strictly type this eventually...
};

export const VideoPlayer = ({
  currentVideo,
  videoRef,
  setTriggerAnimation,
  triggerAnimation,
}: VideoPlayerProps): JSX.Element => {
  return (
    <VideoPlayerContainer id="video-player-container">
      <Video
        hide={triggerAnimation}
        ref={videoRef}
        id="video-player"
        width="100%"
        autoPlay
        loop
        muted
        src={currentVideo}
        onAnimationEnd={() => setTriggerAnimation(false)}
      />
    </VideoPlayerContainer>
  );
};
