import create from "zustand";

import { createScenesSlice, ScenesType } from "./createScenesSlice";
import {
  createVisualControlSlice,
  VisualControlType,
} from "./createVisualControlSlice";
import { mountStoreDevtool } from 'simple-zustand-devtools';

export type UnifiedStoreType = ScenesType & VisualControlType;

export const useStore = create<UnifiedStoreType>()((...a) => ({
  ...createScenesSlice(...a),
  ...createVisualControlSlice(...a),
}));


// Add conditional statement when config is set up to only use this in dev environments.
mountStoreDevtool('Store', useStore);