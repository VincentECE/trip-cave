import { useStore } from '../../store';
import { useEffect, useRef } from 'react';

export const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>();
  const { currentVideo, videoRefIsLoaded, setVideoRef, playVideo } = useStore(
    (state) => ({
      currentVideo: state.currentVideo,
      videoRefIsLoaded: state.videoRefIsLoaded,
      setCurrentVideo: state.setCurrentVideo,
      setVideoRef: state.setVideoRef,
      playVideo: state.playVideo,
    })
  );

  useEffect( ()=> {
    if (!videoRefIsLoaded) {
      setVideoRef(videoRef.current);
    }
  },[])

  return (
    <div className="Video-Container" id="video">
      <button onClick={() => { playVideo(); }}>help me father</button>
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
