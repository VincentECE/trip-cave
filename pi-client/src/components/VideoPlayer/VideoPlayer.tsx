import myVideo from '../../assets/nature.mp4';
import { useStore } from '../../store';

export const VideoPlayer = () => {

  const currentVideo = useStore(
    (state) => state.currentVideo
  );

  return (
    <div className="Video-Container" id="video">
      <video
        id="video-window"
        src={currentVideo}
        width="100%"
        autoPlay
        controls
      ></video>
    </div>
  );
};
