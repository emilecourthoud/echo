import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type DemoPage = 'home' | 'record';

type DemoState = {
  demoPage: DemoPage;
};

const initialDemoState: DemoState = {
  demoPage: 'home',
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
