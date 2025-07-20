import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type DemoPage = 'home' | 'record';

type DemoState = {
  demoPage: DemoPage;
  setDemoPage: (demoPage: DemoPage) => void;
  getDemoPage: () => DemoPage;
};

const initialDemoState: Pick<DemoState, 'demoPage'> = {
  demoPage: 'record',
};

export const useDemoStore = create<DemoState>()(
  persist(
    (set, get) => ({
      ...initialDemoState,
      setDemoPage: (demoPage: DemoPage) => set({ demoPage }),
      getDemoPage: () => get().demoPage,
    }),
    {
      name: 'demo-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
