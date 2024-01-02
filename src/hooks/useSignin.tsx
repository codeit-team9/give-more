import { create } from 'zustand';

interface SigninState {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

const useSignin = create<SigninState>((set) => ({
  email: '',
  setEmail: (email) => set({ email }),
  password: '',
  setPassword: (password) => set({ password }),
}));

export default useSignin;
