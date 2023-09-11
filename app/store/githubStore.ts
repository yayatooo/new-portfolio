import { create } from 'zustand'

export const useStore = create((set) => ({
  data: {},
//   increasePopulation: () => set((state: any) => ({ data: state.data + 1 })),
  setData: (data:any) => set({data: data}),
  removeAllData: () => set({ data: {} }),
}))