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
  <VideoPlayerContainer id="video-player-container">
    <div>
      <Video
        hide={hide}
        ref={videoRef}
        id="video-player"
        width="100%"
        autoPlay
        loop
        src={currentVideo}
        showFullScreen={true} // <- Connect this with the sockets
      />
    </div>
  </VideoPlayerContainer>
);
