import create, { StateCreator } from "zustand";
import coffeeVideo from "../assets/Coffee .mp4";

export interface VisualControlType {
  currentVideo: string;
  hidden: boolean;
  setCurrentVideo: (currentVideo: string) => void;
  goFullScreenOnElement: (elementId: string) => void;
}

// export const createVisualControlSlice: StateCreator<VisualControlType> =
  // create<VisualControlType>((set, get) => ({
    // currentVideo: coffeeVideo,
    // hidden: false,

    // setCurrentVideo: (currentVideo) => {
    //   set({ currentVideo });
    // },

    // goFullScreenOnElement: (elementId: string) => {
    //   document.getElementById(elementId)?.requestFullscreen();
    // },
//   }));

export const createVisualControlSlice: StateCreator<
  VisualControlType,
  [],
  [],
  VisualControlType
> = (set) => ({
  currentVideo: coffeeVideo,
    hidden: false,

    setCurrentVideo: (currentVideo) => {
      set({ currentVideo });
    },

    goFullScreenOnElement: (elementId: string) => {
      document.getElementById(elementId)?.requestFullscreen();
    },
})


//THIS NEEDS TO BE SET UP RIGHT