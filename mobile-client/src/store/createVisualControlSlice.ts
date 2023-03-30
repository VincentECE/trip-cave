import { StateCreator } from "zustand";
import { mobileClientSocket } from "../socket";
import { UnifiedStoreType } from "./useStore";

export interface VisualControlType {
  playScene: () => void;
  playSelectedScene: (sceneId: number) => void;
  goFullScreen: () => void;
  pauseScene: () => void;
}

export const createVisualControlSlice: StateCreator<
  UnifiedStoreType,
  [],
  [],
  VisualControlType
> = (set, get) => ({
  playScene: () => {
    mobileClientSocket.emit("playScene");
  },
  playSelectedScene: (sceneId: number) => {
    console.log("playSelectedScene");
    mobileClientSocket.emit("playSelectedScene", sceneId);
  },

  goFullScreen: () => {
    mobileClientSocket.emit("goFullScreen");
  },

  pauseScene: () => {
    mobileClientSocket.emit("pauseScene");
  },
});
