import { create } from 'zustand';

interface LoginInfoState {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

const useLoginInfo = create<LoginInfoState>((set) => ({
  isLogin: false,
  setIsLogin: (isLogin) => set({ isLogin }),
}));

export default useLoginInfo;
