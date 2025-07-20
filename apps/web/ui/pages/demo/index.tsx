'use client';

import { Iphone18Mockup } from '@/ui/pages/website/animated-demo/iphone-16-mockup';
import { useDemoStore } from '@/lib/hooks/demo-store';
import { Button } from '@/ui/components';
import { Activity, Mic, Pause, Save } from 'lucide-react';
import { AnimatedPictogram } from './animated-pictogram';
import { DemoHeader } from './recording/recording-header';
import { useState, useEffect, useRef } from 'react';
import { RecordingBody } from './recording/recording-body';

type Status = 'idle' | 'recording' | 'paused';

// Speech recognition type definitions
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

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
