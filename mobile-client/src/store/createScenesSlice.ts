import { getHashes } from "crypto";
import { StateCreator } from "zustand";
import { getScenes, Scene } from "../api";
import { UnifiedStoreType } from "./useStore";
import { SceneStatus } from "../api";

export interface ScenesType {
  scenes: Scene[];
  scenesIsLoaded: boolean;
  sceneStatus: SceneStatus | undefined;
  getAllScenes: () => void;
  setSceneStatus: (sceneStatus: SceneStatus) => void;
}

export const createScenesSlice: StateCreator<
  UnifiedStoreType,
  [],
  [],
  ScenesType
> = (set, get) => ({
  scenes: [],
  scenesIsLoaded: false,
  sceneStatus: undefined,

  getAllScenes: async () => {
    const scenes = await getScenes();
    set({ scenes });
  },

  setSceneStatus: async (sceneStatus) => {
    set({ sceneStatus });
  },
});
