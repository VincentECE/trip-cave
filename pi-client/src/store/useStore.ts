import create from "zustand";
import { createVideoSlice, VideoType } from "./createVideoSlice";


export type UnifiedStoreType = VideoType;

export const useStore = create<UnifiedStoreType>()((...a) => ({
  ...createVideoSlice(...a),
}));
