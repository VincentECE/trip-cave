import { getHashes } from "crypto";
import { StateCreator } from "zustand";
import { getScenes, Scene } from "../api";
import { UnifiedStoreType } from "./useStore";

export interface ScenesType {
  scenes: Scene[];
  scenesIsLoaded: boolean;
  getAllScenes: () => void;
}

export const createScenesSlice: StateCreator<
  UnifiedStoreType,
  [],
  [],
  ScenesType
> = (set, get) => ({
  scenes: [],
  scenesIsLoaded: false,

  getAllScenes: async () => {
    const scenes = await getScenes();
    set({ scenes });
    console.log("scenes: ", scenes);
  },
});
