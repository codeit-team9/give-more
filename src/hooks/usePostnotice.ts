import { create } from 'zustand';

interface PostNoticeProps {
  hourlyPay: number;
  setHourlyPay: (hourlyPay: number) => void;
  startsAt: string;
  setStartsAt: (startsAt: string) => void;
  workhour: number;
  setWorkhour: (workhour: number) => void;
  description: string;
  setDescription: (description: string) => void;
}

const usePostNotice = create<PostNoticeProps>((set) => ({
  hourlyPay: 0,
  setHourlyPay: (hourlyPay: number) => set({ hourlyPay }),
  startsAt: '',
  setStartsAt: (startsAt: string) => set({ startsAt }),
  workhour: 0,
  setWorkhour: (workhour: number) => set({ workhour }),
  description: '',
  setDescription: (description: string) => set({ description }),
}));

export default usePostNotice;
