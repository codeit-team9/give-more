import { create } from 'zustand';

interface SignupState {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isUser: 'employee' | 'employer';
  setIsUser: (isUser: 'employee' | 'employer') => void;
  isInput: boolean;
  setIsInput: (inInput: boolean) => void;
  isPassword: boolean;
  setIsPassword: (isPassword: boolean) => void;
}

const useSignup = create<SignupState>((set) => ({
  email: '',
  setEmail: (email) => set({ email }),
  password: '',
  setPassword: (password) => set({ password }),
  isUser: 'employee',
  setIsUser: (isUser) => set({ isUser }),
  isInput: false,
  setIsInput: (isInput) => set({ isInput }),
  isPassword: false,
  setIsPassword: (isPassword) => set({ isPassword }),
}));

export default useSignup;
