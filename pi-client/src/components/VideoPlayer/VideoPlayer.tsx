import { Video, VideoPlayerContainer } from "./VideoPlayer.style";

export type VideoPlayerProps = {
  hide?: boolean;
  currentVideo: string;
  videoRef?: React.RefObject<HTMLVideoElement> | null; //todo: strictly type this eventually...
};

export const VideoPlayer = ({
  hide = false,
  currentVideo,
  videoRef,
}: VideoPlayerProps): JSX.Element => (
  <VideoPlayerContainer>
    <div>
      <Video
        hide={hide}
        ref={videoRef}
        id="video-player"
        width="100%"
        controls
        autoPlay
        loop
        src={currentVideo}
      />
    </div>
  </VideoPlayerContainer>
);
