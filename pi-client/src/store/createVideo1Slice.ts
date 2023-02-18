import { useRef } from "react";
import create, { StateCreator } from "zustand";
import { UnifiedStoreType } from "./useStore";

const coffeeVideo = "http://localhost:3001/coffee.mp4";

export interface Video1Type {
  currentVideo1: string;
  video1Ref?: React.RefObject<HTMLVideoElement> | null; //todo: strictly type this eventually...
  video1RefIsLoaded: boolean;
  showPlayer1: boolean;
  setCurrentVideo1: (currentVideo: string) => void;
  setVideo1Ref: (videoRef: any) => void;
  playVideo1: () => void;
  pauseVideo1: () => void;
  goFullScreenOnElement: (elementId: string) => void;
}

export const createVideo1Slice: StateCreator<
  UnifiedStoreType,
  [],
  [],
  Video1Type
> = (set, get) => ({
  currentVideo1: coffeeVideo,
  video1Ref: null,
  video1RefIsLoaded: false,
  showPlayer1: true,

  setCurrentVideo1: (currentVideo1) => {
    set({ currentVideo1 });
  },

  setVideo1Ref: (video1Ref) => {
    set({ video1Ref, video1RefIsLoaded: true });
    console.log("videoRef Loaded");
  },

  playVideo1: () => {
    const video1Ref = get().video1Ref;

    console.log("playVideo from state");

    video1Ref?.current?.play();
  },

  pauseVideo1: () => {
    const video1Ref = get().video1Ref;

    console.log("pauseVideo from state");

    video1Ref?.current?.pause();
  },

  goFullScreenOnElement: (elementId: string) => {
    console.log("should be going fullscreen");
    document.getElementById(elementId)?.requestFullscreen();
  },
});
