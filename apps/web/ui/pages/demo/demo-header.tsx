import { ChevronLeft } from 'lucide-react';
import { DemoPage, useDemoStore } from '@/lib/hooks/demo-store';

export function DemoHeader() {
  const handleDemoPageChange = (demoPage: DemoPage) => {
    useDemoStore.setState({ demoPage });
  };

  return (
    <div className="flex flex-row gap-2 w-full justify-between">
      <div className="flex flex-row gap-2">
        <button
          className="flex flex-row gap-2 items-center justify-center px-2 py-1 text-text-secondary"
          onClick={() => handleDemoPageChange('home')}
        >
          <div className="flex border items-center justify-center rounded-full p-0.5 ">
            <ChevronLeft className="w-4 h-4" />
          </div>
          <span className="font-medium">My memories</span>
        </button>
      </div>
    </div>
  );
}
