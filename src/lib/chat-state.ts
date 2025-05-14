import { create } from 'zustand'

interface ChatState {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const useGlobalChatState = create<ChatState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
})) 