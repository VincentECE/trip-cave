import { StateCreator } from "zustand";
import { mobileClientSocket } from "../socket";
import { UnifiedStoreType } from "./useStore";

export interface VisualControlType {
  playNow: () => void;
  playNextVideo: (video: string) => void;
}

export const createVisualControlSlice: StateCreator<
  UnifiedStoreType,
  [],
  [],
  VisualControlType
> = (set, get) => ({
  playNow: () => {
    mobileClientSocket.emit("playNow");
  },
  playNextVideo: (video: string) => {
    mobileClientSocket.emit("playNextVideo", video);
  }
});
