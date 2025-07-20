'use client';

import { Iphone18Mockup } from '@/ui/pages/website/animated-demo/iphone-16-mockup';
import { useDemoStore } from '@/lib/hooks/demo-store';
import { DemoHeader } from './recording/recording-header';
import { RecordingBody } from './recording/recording-body';

export function Demo() {
  const demoPage = useDemoStore((state) => state.getDemoPage());

  return (
    <Iphone18Mockup background={demoPage}>
      <div className="flex flex-col gap-2 h-full w-full px-2">
        <DemoHeader />
        <RecordingBody />
      </div>
    </Iphone18Mockup>
  );
}
