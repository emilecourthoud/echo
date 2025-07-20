import { Mic } from 'lucide-react';
import { DemoPage, useDemoStore } from '@/lib/hooks/demo-store';
import { TagList } from './tag-list';

export function HomeHeader() {
  const handleDemoPageChange = (demoPage: DemoPage) => {
    useDemoStore.setState({ demoPage });
  };

  return (
    <div className="flex flex-col w-full gap-1">
      <div className="flex flex-row gap-2 justify-between w-full">
        <span className="text-xl font-medium">My memories</span>

        <button
          className="flex items-center justify-center rounded-full h-8 w-8 -mt-2 cursor-pointer"
          onClick={() => handleDemoPageChange('record')}
        >
          <Mic className="w-4 h-4" />
        </button>
      </div>
      <TagList selectedTagIdx={0} />
    </div>
  );
}
