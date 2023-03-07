import { StateCreator } from "zustand";
import { UnifiedStoreType } from "./useStore";

const DEFAULT_VIDEO = "http://localhost:3001/coffee.mp4";

export interface VideoType {
  currentVideo: string;
  videoRef?: React.RefObject<HTMLVideoElement> | null; //todo: strictly type this eventually...
  videoRefIsLoaded: boolean;
  showPlayer: boolean;
  setCurrentVideo: (currentVideo: string) => void;
  setVideoRef: (videoRef: any) => void;
  playVideo: () => void;
  pauseVideo: () => void;
  playNextVideo: (video?: string) => void;
  goFullScreen: () => void;
}

export const createVideoSlice: StateCreator<
  UnifiedStoreType,
  [],
  [],
  VideoType
> = (set, get) => {
  const skeet = get();
  return {
    currentVideo: DEFAULT_VIDEO,
    videoRef: null,
    videoRefIsLoaded: false,
    showPlayer: true,
    setCurrentVideo: (currentVideo) => {
      set({ currentVideo });
    },
    setVideoRef: (videoRef) => {
      set({ videoRef, videoRefIsLoaded: true });      
    },
    playVideo: () => {     
      skeet.videoRef?.current?.play();
    },
    pauseVideo: () => {
      skeet.videoRef?.current?.pause();
    },
    playNextVideo: (video?: string) => {
      video && skeet.setCurrentVideo(video); 
      skeet.pauseVideo();
      skeet.videoRef?.current?.load();
    },
    goFullScreen: () => {
      document.getElementById("video1-div")?.requestFullscreen();
    },
  }
};
