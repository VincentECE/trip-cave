import { StateCreator } from "zustand";
import { mobileClientSocket } from "../socket";
import { UnifiedStoreType } from "./useStore";

export interface VisualControlType {
  playNow: () => void;
  playSelectedScene: (sceneId: number) => void;
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
    mobileClientSocket.emit("playSelectedScene", sceneId);
  },
});
