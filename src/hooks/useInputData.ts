import { create } from 'zustand';

interface InputDataState {
  hourlyPayData: number;
  setHourlylPayData: (hourlyPayData: number) => void;
  startAt: Date;
  setStartAt: (startAt: Date) => void;
  workhour: number;
  setWorkhour: (workhour: number) => void;
  description: string;
  setDescription: (description: string) => void;
}

const useInputData = create<InputDataState>((set) => ({
  hourlyPayData: 0,
  setHourlylPayData: (hourlyPayData) => set({ hourlyPayData }),
  startAt: new Date(),
  setStartAt: (startAt) => set({ startAt }),
  workhour: 0,
  setWorkhour: (workhour) => set({ workhour }),
  description: '',
  setDescription: (description) => set({ description }),
}));

export default useInputData;
