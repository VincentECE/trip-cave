import { useStore } from '../../store';
import { useRef } from 'react';

export const VideoPlayer = () => {
  const videoRef = useRef(null);
  const currentVideo = useStore(
    (state) => state.currentVideo
  );

  return (
    <div className="Video-Container" id="video">
      <button onClick={() => videoRef.current.play()}>help me father</button>
      <video
        ref={videoRef}
        id="video-window"
        src={currentVideo}
        width="100%"
        autoPlay
        controls
      />
    </div>
  );
};
