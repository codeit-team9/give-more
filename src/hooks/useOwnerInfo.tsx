import { create } from 'zustand';

interface OnwerInfoState {
  id: string;
  setId: (id: string) => void;
  email: string;
  setEmail: (email: string) => void;
  type: 'employee' | 'employer';
  setType: (UserType: 'employee' | 'employer') => void;
  name: string;
  setName: (name: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  address: string;
  setAddress: (address: string) => void;
  bio: string;
  setBio: (bio: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  shop: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setShop: (shop: any) => void;
}

const useOwnerInfo = create<OnwerInfoState>((set) => ({
  id: '',
  setId: (id) => set({ id }),
  email: '',
  setEmail: (email) => set({ email }),
  type: 'employer',
  setType: (type) => set({ type }),
  name: '',
  setName: (name) => set({ name }),
  phone: '',
  setPhone: (phone) => set({ phone }),
  address: '',
  setAddress: (address) => set({ address }),
  bio: '',
  setBio: (bio) => set({ bio }),
  shop: null,
  setShop: (shop) => set({ shop }),
}));

export default useOwnerInfo;
