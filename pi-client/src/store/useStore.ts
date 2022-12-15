import create from 'zustand';
import { createVisualControlSlice, VisualControlType } from "./createVisualControlSlice";

export const useStore = create<VisualControlType>()((...a) => ({
    ...createVisualControlSlice(...a),
  }));
