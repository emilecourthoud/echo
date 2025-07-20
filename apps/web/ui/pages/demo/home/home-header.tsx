import { Mic } from 'lucide-react';
import { DemoPage, useDemoStore } from '@/lib/hooks/demo-store';

export function HomeHeader() {
  const handleDemoPageChange = (demoPage: DemoPage) => {
    useDemoStore.setState({ demoPage });
  };

  return (
    <div className="flex flex-row gap-2 w-full justify-between">
      <div className="flex flex-row gap-2 justify-between w-full">
        <span className="text-xl font-medium">My memories</span>

        <button
          className="flex items-center justify-center rounded-full h-8 w-8 mb-1 cursor-pointer"
          onClick={() => handleDemoPageChange('record')}
        >
          <Mic className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
