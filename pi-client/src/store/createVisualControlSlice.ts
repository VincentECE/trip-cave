import { useRef } from "react";
import create, { StateCreator } from "zustand";
import coffeeVideo from "../assets/Coffee.mp4";

export interface VisualControlType {
  currentVideo: string;
  hidden: boolean;
  videoRef: any; //todo: strictly type this eventually...
  videoRefIsLoaded: boolean;
  setCurrentVideo: (currentVideo: string) => void;
  setVideoRef: (videoRef: any) => void;
  goFullScreenOnElement: (elementId: string) => void;
  playVideo: () => void;
  pauseVideo: () => void;
}

export const createVisualControlSlice: StateCreator<
  VisualControlType,
  [],
  [],
  VisualControlType
> = (set, get) => ({
  currentVideo: coffeeVideo,
  hidden: false,
  videoRef: undefined,
  videoRefIsLoaded: false,

  setCurrentVideo: (currentVideo) => {
    set({ currentVideo });
  },

  setVideoRef: (videoRef) => {
    set({ videoRef, videoRefIsLoaded: true });
    console.log("videoRef Loaded");
  },

  goFullScreenOnElement: (elementId: string) => {
    console.log("should be going fullscreen");
    document.getElementById(elementId)?.requestFullscreen();
  },

  playVideo: () => {
    const videoRef = get().videoRef;

    console.log("playVideo from state");

    videoRef.play();
  },

  pauseVideo: () => {
    const videoRef = get().videoRef;

    console.log("pauseVideo from state");

    videoRef.pause();
  },
});
