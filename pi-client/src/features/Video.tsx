import { VideoPlayer } from "../components/VideoPlayer";
import { useStore } from "../store";
import { useEffect, useRef } from "react";

export const Video = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { currentVideo, setVideoRef, setTriggerAnimation, triggerAnimation } =
    useStore(
      ({
        currentVideo,
        videoRef,
        setVideoRef,
        setTriggerAnimation,
        triggerAnimation,
      }) => ({
        currentVideo,
        videoRef,
        setVideoRef,
        setTriggerAnimation,
        triggerAnimation,
      })
    );

  useEffect(() => {
    setVideoRef(videoRef);
  }, [currentVideo]);

  return (
    <VideoPlayer
      currentVideo={currentVideo}
      videoRef={videoRef}
      setTriggerAnimation={setTriggerAnimation}
      triggerAnimation={triggerAnimation}
    />
  );
};
