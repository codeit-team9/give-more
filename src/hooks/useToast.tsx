import { create } from 'zustand';

interface ToastState {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const useToast = create<ToastState>((set) => ({
  isActive: false,
  setIsActive: (isActive) => set({ isActive }),
}));

export default useToast;
