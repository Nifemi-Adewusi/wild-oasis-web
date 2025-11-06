import { create } from "zustand";
const initialRange = { from: null, to: null };
export const useDateRange = create((set) => ({
  range: initialRange,
  resetRange: () => set({ range: initialRange }),
  //   setRange: () => set((state) => ({ range: state.range + amount })),
  setRange: (newRange) => set({ range: newRange }),
}));
