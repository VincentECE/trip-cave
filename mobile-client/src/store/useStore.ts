import create from "zustand";

import { createScenesSlice, ScenesType } from "./createScenesSlice";
import {
  createVisualControlSlice,
  VisualControlType,
} from "./createVisualControlSlice";

export type UnifiedStoreType = ScenesType & VisualControlType;

export const useStore = create<UnifiedStoreType>()((...a) => ({
  ...createScenesSlice(...a),
  ...createVisualControlSlice(...a),
}));
