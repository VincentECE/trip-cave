import { useRef } from "react";
import create, { StateCreator } from "zustand";
import coffeeVideo from "../assets/Coffee.mp4";

export interface VisualControlType {
  currentVideo: string;
  hidden: boolean;
  videoRef: any;
  setCurrentVideo: (currentVideo: string) => void;
  goFullScreenOnElement: (elementId: string) => void;
  playVideo: (videoRef: HTMLVideoElement) => void;
}

export const createVisualControlSlice: StateCreator<
  VisualControlType,
  [],
  [],
  VisualControlType
> = (set) => ({
  currentVideo: coffeeVideo,
  hidden: false,
  videoRef: null,

  setCurrentVideo: (currentVideo) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    set({ currentVideo, videoRef });
  },

  goFullScreenOnElement: (elementId: string) => {
    document.getElementById(elementId)?.requestFullscreen();
  },

  playVideo: (videoRef) => {
    if (videoRef == null) {
      return;
    }

    videoRef.current.play();
    // console.log('videoRef: ', videoRef)
    // if (videoRef.paused) {
    //   videoRef.play();
    // } else {
    // }
    // videoRef.pause();
  },
});


