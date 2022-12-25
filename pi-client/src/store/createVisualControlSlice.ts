import { useRef } from "react";
import create, { StateCreator } from "zustand";
import coffeeVideo from "../assets/Coffee.mp4";
import skyScrapersVideo from "../assets/Skyscrapers.mp4";

export interface VisualControlType {
  currentVideo1: string;
  currentVideo2: string;
  video1Hidden: boolean;
  video2Hidden: boolean;
  video1Ref: any; //todo: strictly type this eventually...
  video2Ref: any; //todo: strictly type this eventually...
  video1RefIsLoaded: boolean;
  video2RefIsLoaded: boolean;
  setCurrentVideo1: (currentVideo: string) => void;
  setCurrentVideo2: (currentVideo: string) => void;
  setVideo1Ref: (videoRef: any) => void;
  setVideo2Ref: (videoRef: any) => void;
  playVideo1: () => void;
  playVideo2: () => void;
  pauseVideo1: () => void;
  pauseVideo2: () => void;
  goFullScreenOnElement: (elementId: string) => void;
}

export const createVisualControlSlice: StateCreator<
  VisualControlType,
  [],
  [],
  VisualControlType
> = (set, get) => ({
  currentVideo1: coffeeVideo,
  currentVideo2: skyScrapersVideo,
  video1Hidden: false,
  video2Hidden: false,
  video1Ref: undefined,
  video2Ref: undefined,
  video1RefIsLoaded: false,
  video2RefIsLoaded: false,

  setCurrentVideo1: (currentVideo1) => {
    set({ currentVideo1 });
  },

  setCurrentVideo2: (currentVideo2) => {
    set({ currentVideo2 });
  },

  setVideo1Ref: (video1Ref) => {
    set({ video1Ref, video1RefIsLoaded: true });
    console.log("videoRef Loaded");
  },

  setVideo2Ref: (video2Ref) => {
    set({ video2Ref, video2RefIsLoaded: true });
    console.log("video2Ref Loaded");
  },

  playVideo1: () => {
    const video1Ref = get().video1Ref;

    console.log("playVideo from state");

    video1Ref.play();
  },

  playVideo2: () => {
    const video2Ref = get().video1Ref;

    console.log("playVideo from state");

    video2Ref.play();
  },

  pauseVideo1: () => {
    const video1Ref = get().video1Ref;

    console.log("pauseVideo from state");

    video1Ref.pause();
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
