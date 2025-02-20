import { create } from "zustand"

interface AppState {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export const useStore = create<AppState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}))

