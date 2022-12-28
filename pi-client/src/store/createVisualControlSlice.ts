import { useRef } from "react";
import create, { StateCreator } from "zustand";
import { UnifiedStoreType } from "./useStore";

export interface VisualControlType {
  playNextVideo: () => void;
  pauseVideo: () => void;
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

  pauseVideo: () => {
    const { pauseVideo1, pauseVideo2, showPlayer1 } = get();

    if (showPlayer1) {
      pauseVideo1();
    } else {
      pauseVideo2();
    }
  },
});
