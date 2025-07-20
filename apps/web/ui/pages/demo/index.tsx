'use client';

import { useState } from 'react';
import { Iphone18Mockup } from '@/ui/pages/website/animated-demo/iphone-16-mockup';
import { useDemoStore } from '@/lib/hooks/demo-store';
import { RecordingHeader } from './recording/recording-header';
import { RecordingBody } from './recording/recording-body';
import { HomeHeader } from './home/home-header';
import { MemoryTimeline } from './home/memory-timeline';

export function Demo() {
  const demoPage = useDemoStore((state) => state.getDemoPage());
  const [selectedTagId, setSelectedTagId] = useState(0); // 0 = "All"

  return (
    <Iphone18Mockup background={demoPage}>
      {demoPage === 'record' ? (
        <>
          <RecordingHeader />
          <RecordingBody />
        </>
      ) : (
        <>
          <HomeHeader selectedTagId={selectedTagId} onTagSelect={setSelectedTagId} />
          <MemoryTimeline selectedTagId={selectedTagId} />
        </>
      )}
    </Iphone18Mockup>
  );
}
