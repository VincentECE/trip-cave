import { useRef } from "react";
import create, { StateCreator } from "zustand";
import { UnifiedStoreType } from "./useStore";

const skyScrapersVideo = "http://localhost:3001/skyscrapers.mp4";
const holyVideo = "http://localhost:3001/Holy.mp4";
const dotsVideo = "http://localhost:3001/DotsBackground.mp4";

export interface Video2Type {
  currentVideo2: string;
  video2Ref?: React.RefObject<HTMLVideoElement> | null; //todo: strictly type this eventually...
  video2RefIsLoaded: boolean;
  showPlayer2: boolean;
  setCurrentVideo2: (currentVideo: string) => void;
  setVideo2Ref: (videoRef: any) => void;
  playVideo2: () => void;
  pauseVideo2: () => void;
  goFullScreenOnElement: (elementId: string) => void;
}

export const createVideo2Slice: StateCreator<
  UnifiedStoreType,
  [],
  [],
  Video2Type
> = (set, get) => ({
  currentVideo2: dotsVideo,
  video2Ref: null,
  video2RefIsLoaded: false,
  showPlayer2: false,

  setCurrentVideo2: (currentVideo2) => {
    set({ currentVideo2 });
  },

  setVideo2Ref: (video2Ref) => {
    set({ video2Ref, video2RefIsLoaded: true });
    console.log("video2Ref Loaded");
  },

  playVideo2: () => {
    const video2Ref = get().video2Ref;

    console.log("playVideo from state");

    video2Ref?.current?.play();
  },

  pauseVideo2: () => {
    const video2Ref = get().video2Ref;

    console.log("pauseVideo2 from state");

    video2Ref?.current?.pause();
  },

  goFullScreenOnElement: (elementId: string) => {
    console.log("should be going fullscreen");
    document.getElementById(elementId)?.requestFullscreen();
  },
});
