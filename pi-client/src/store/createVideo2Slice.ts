import { useRef } from "react";
import create, { StateCreator } from "zustand";
import coffeeVideo from "../assets/Coffee.mp4";
import skyScrapersVideo from "../assets/Skyscrapers.mp4";

console.log("coffeeVideo: ", coffeeVideo);

export interface Video2Type {
  currentVideo2: string;
  video2Hidden: boolean;
  video2Ref: any; //todo: strictly type this eventually...
  video2RefIsLoaded: boolean;
  setCurrentVideo2: (currentVideo: string) => void;
  setVideo2Ref: (videoRef: any) => void;
  playVideo2: () => void;
  pauseVideo2: () => void;
  goFullScreenOnElement: (elementId: string) => void;
}

export const createVideo2Slice: StateCreator<Video2Type, [], [], Video2Type> = (
  set,
  get
) => ({
  currentVideo2: skyScrapersVideo,
  video2Hidden: false,
  video2Ref: undefined,
  video2RefIsLoaded: false,

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

    video2Ref.play();
  },

  pauseVideo2: () => {
    const video2Ref = get().video2Ref;

    console.log("pauseVideo2 from state");

    video2Ref.pause();
  },

  goFullScreenOnElement: (elementId: string) => {
    console.log("should be going fullscreen");
    document.getElementById(elementId)?.requestFullscreen();
  },
});
