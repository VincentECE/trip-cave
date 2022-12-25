import { useRef } from "react";
import create, { StateCreator } from "zustand";
import coffeeVideo from "../assets/Coffee.mp4";
import skyScrapersVideo from "../assets/Skyscrapers.mp4";

console.log("coffeeVideo: ", coffeeVideo);

export interface Video1Type {
  currentVideo1: string;
  video1Hidden: boolean;
  video1Ref: any; //todo: strictly type this eventually...
  video1RefIsLoaded: boolean;
  setCurrentVideo1: (currentVideo: string) => void;
  setVideo1Ref: (videoRef: any) => void;
  playVideo1: () => void;
  pauseVideo1: () => void;
  goFullScreenOnElement: (elementId: string) => void;
}

export const createVideo1Slice: StateCreator<Video1Type, [], [], Video1Type> = (
  set,
  get
) => ({
  currentVideo1: coffeeVideo,
  video1Hidden: false,
  video1Ref: undefined,
  video1RefIsLoaded: false,

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

    video1Ref.play();
  },

  pauseVideo1: () => {
    const video1Ref = get().video1Ref;

    console.log("pauseVideo from state");

    video1Ref.pause();
  },

  goFullScreenOnElement: (elementId: string) => {
    console.log("should be going fullscreen");
    document.getElementById(elementId)?.requestFullscreen();
  },
});
