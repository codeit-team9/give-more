import { create } from 'zustand';

interface ShopInfoState {
  id: string;
  setId: (id: string) => void;
  name: string;
  setName: (name: string) => void;
  category: string;
  setCategory: (category: string) => void;
  address: string;
  setAddress: (address: string) => void;
  specAddress: string;
  setSpecAddress: (address: string) => void;
  imageUrl: string;
  setImageUrl: (imageUrl: string) => void;
  originalHourlyPay: number;
  setOriginalHourlyPay: (originalHourlyPay: number) => void;
  description: string;
  setDescription: (description: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser: (user: any) => void;
}

const useShopInfo = create<ShopInfoState>((set) => ({
  id: '',
  setId: (id: string) => set({ id }),
  name: '',
  setName: (name: string) => set({ name }),
  category: '',
  setCategory: (category: string) => set({ category }),
  address: '',
  setAddress: (address: string) => set({ address }),
  specAddress: '',
  setSpecAddress: (specAddress: string) => set({ specAddress }),
  imageUrl: '',
  setImageUrl: (imageUrl: string) => set({ imageUrl }),
  originalHourlyPay: 0,
  setOriginalHourlyPay: (originalHourlyPay: number) => set({ originalHourlyPay }),
  description: '',
  setDescription: (description: string) => set({ description }),
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser: (user: any) => set({ user }),
}));

export default useShopInfo;
