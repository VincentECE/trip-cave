import { useRef } from "react";
import create, { StateCreator } from "zustand";
import coffeeVideo from "../assets/Coffee.mp4";
import skyScrapersVideo from "../assets/Skyscrapers.mp4";

console.log("coffeeVideo: ", coffeeVideo);

export interface VisualControlType {
  switchVideo: () => void;
}

export const createVisualControlSlice: StateCreator<
  VisualControlType,
  [],
  [],
  VisualControlType
> = (set, get) => ({
  switchVideo: () => {
    console.log("switchVideo called");
  },
});
