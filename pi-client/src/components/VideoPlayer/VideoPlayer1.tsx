import { useStore } from "../../store";
import { useEffect, useRef } from "react";

export const VideoPlayer1 = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>();
  const { currentVideo1, video1RefIsLoaded, setVideo1Ref, playVideo1 } =
    useStore((state) => ({
      currentVideo1: state.currentVideo1,
      video1RefIsLoaded: state.video1RefIsLoaded,
      setVideo1Ref: state.setVideo1Ref,
      playVideo1: state.playVideo1,
    }));

  useEffect(() => {
    if (!video1RefIsLoaded) {
      setVideo1Ref(videoRef.current);
    }
  }, []);

  return (
    <div className="Video-Container" id="video2">
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
        controls
        loop
      />
    </div>
  );
};
