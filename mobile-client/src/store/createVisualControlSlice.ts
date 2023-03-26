import { StateCreator } from "zustand";
import { mobileClientSocket } from "../socket";
import { UnifiedStoreType } from "./useStore";

export interface VisualControlType {
  playNow: () => void;
  playSelectedScene: (sceneId: number) => void;
  goFullScreen: () => void;
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
  playSelectedScene: (sceneId: number) => {
    console.log("playSelectedScene");
    mobileClientSocket.emit("playSelectedScene", sceneId);
  },

  goFullScreen: () => {
    mobileClientSocket.emit("goFullScreen");
  },
});
