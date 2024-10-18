import { create } from "zustand";

export const useStore = create((set) => ({
  hamburger: false,
  handleHamburger: () => set((state) => ({ hamburger: !state.hamburger })),
}));
