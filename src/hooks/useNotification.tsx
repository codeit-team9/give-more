import { create } from 'zustand';

interface NotificationState {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const useNotification = create<NotificationState>((set) => ({
  isActive: false,
  setIsActive: (isActive) => set({ isActive }),
}));

export default useNotification;
