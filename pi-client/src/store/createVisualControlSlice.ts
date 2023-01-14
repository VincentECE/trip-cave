import create, { StateCreator } from "zustand";
import { UnifiedStoreType } from "./useStore";

export interface VisualControlType {
  playNextVideo: () => void;
  playVideo: () => void;
  pauseVideo: () => void;
  playNow: (videoUrl: string) => void;
}

export const createVisualControlSlice: StateCreator<
  UnifiedStoreType,
  [],
  [],
  VisualControlType
> = (set, get) => ({
  playNextVideo: () => {
    const { showPlayer1, showPlayer2 } = get();

    console.log("from playNextVideo state");
    if (showPlayer1) {
      set({ showPlayer1: false, showPlayer2: true });
    } else {
      set({ showPlayer1: true, showPlayer2: false });
    }
  },

  playVideo: () => {
    const { playVideo1, playVideo2, showPlayer1, showPlayer2 } = get();

    if (showPlayer1) {
      playVideo1();
    } else {
      playVideo2();
    }
  },

  pauseVideo: () => {
    const { pauseVideo1, pauseVideo2, showPlayer1 } = get();

    if (showPlayer1) {
      pauseVideo1();
    } else {
      pauseVideo2();
    }
  },

  playNow: (videoUrl) => {
    const { setCurrentVideo1, playVideo1, showPlayer1, setCurrentVideo2 } =
      get();

    console.log("playNow from createVisualControlSlice");

    // setCurrentVideo1(videoUrl);
    // playVideo1();

    if (showPlayer1) {
      // this is supposed to switch from player1 to player 2 with a transition effect to make the change not jarring
      set({ showPlayer1: false, currentVideo2: videoUrl, showPlayer2: true });
    } else {
      set({ showPlayer2: false, currentVideo1: videoUrl, showPlayer1: true });
    }
  },
});
