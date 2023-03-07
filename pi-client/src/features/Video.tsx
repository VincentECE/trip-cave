import { VideoPlayer } from "../components/VideoPlayer";
import { useStore } from "../store";
import { useEffect, useRef } from "react";

export const Video = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const { currentVideo, setVideoRef } = useStore(
    ({ currentVideo, videoRef, setVideoRef }) => ({
      currentVideo,
      videoRef,
      setVideoRef,
    })
  );

  useEffect(() => {
    setVideoRef(videoRef);
  }, []);

  return <VideoPlayer currentVideo={currentVideo} videoRef={videoRef} />;
};
