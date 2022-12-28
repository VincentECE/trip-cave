import create from "zustand";
import {
  createVisualControlSlice,
  VisualControlType,
} from "./createVisualControlSlice";
import { createVideo1Slice, Video1Type } from "./createVideo1Slice";
import { createVideo2Slice, Video2Type } from "./createVideo2Slice";

export type UnifiedStoreType = VisualControlType & Video1Type & Video2Type;

export const useStore = create<UnifiedStoreType>()((...a) => ({
  ...createVisualControlSlice(...a),
  ...createVideo1Slice(...a),
  ...createVideo2Slice(...a),
}));
