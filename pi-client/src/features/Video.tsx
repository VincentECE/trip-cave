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
        showPlayer,
      }) => ({
        currentVideo,
        videoRef,
        setVideoRef,
        setTriggerAnimation,
        triggerAnimation,
        showPlayer,
      })
    );

  useEffect(() => {
    if (!videoRef) {
      setVideoRef(videoRef);
    }
  }, [videoRef, currentVideo, triggerAnimation]);

  return currentVideo ? (
    <>
      <VideoPlayer
        currentVideo={currentVideo}
        videoRef={videoRef}
        setTriggerAnimation={setTriggerAnimation}
        triggerAnimation={triggerAnimation}
      />
    </>
  ) : (
    <></>
  );
};
