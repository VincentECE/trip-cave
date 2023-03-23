import { StateCreator } from "zustand";
import { UnifiedStoreType } from "./useStore";

const DEFAULT_VIDEO = "http://localhost:3001/coffee.mp4";

export interface VideoType {
  currentVideo: string;
  videoRef?: React.RefObject<HTMLVideoElement> | null; //todo: strictly type this eventually...
  videoRefIsLoaded: boolean;
  triggerAnimation: boolean;
  setCurrentVideo: (currentVideo: string) => void;
  setVideoRef: (videoRef: any) => void;
  playVideo: () => void;
  pauseVideo: () => void;
  playNextVideo: (video?: string) => void;
  goFullScreen: () => void;
  setTriggerAnimation: (trigger: boolean) => void;
  showPlayer: boolean
}

export const createVideoSlice: StateCreator<
  UnifiedStoreType,
  [],
  [],
  VideoType
> = (set, get) => ({
    currentVideo: DEFAULT_VIDEO,
    videoRef: null,
    videoRefIsLoaded: false,
    showPlayer: true,
    triggerAnimation: true,
    setCurrentVideo: (currentVideo) => set({ currentVideo, triggerAnimation: true, showPlayer: true }),
    setVideoRef: (videoRef) => set({ videoRef }),
    playVideo: () => get().videoRef?.current?.play(),
    pauseVideo: () => get().videoRef?.current?.pause(),
    playNextVideo: (video?: string) => {
      set({ triggerAnimation: false, showPlayer: false });
      get().pauseVideo();
      video && get().setCurrentVideo(video);    
      get().videoRef?.current?.load();
    },
    goFullScreen: () =>
      document.getElementById("video-player-container")?.requestFullscreen(),
    setTriggerAnimation: (triggerAnimation: boolean) => set({ triggerAnimation }),
  });
