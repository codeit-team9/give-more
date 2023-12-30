import { create } from 'zustand';

interface LoginInfoState {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  token: string;
  setToken: (token: string) => void;
}

const useLoginInfo = create<LoginInfoState>((set) => ({
  isLogin: false,
  setIsLogin: (isLogin) => set({ isLogin }),
  token: '',
  setToken: (token) => set({ token }),
}));

export default useLoginInfo;
