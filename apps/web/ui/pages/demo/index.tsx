'use client';

import { Iphone18Mockup } from '@/ui/pages/website/animated-demo/iphone-16-mockup';
import { DemoPage, useDemoStore } from '@/lib/hooks/demo-store';
import { Button } from '@/ui/components';
import { Activity, Mic, Pause, Save } from 'lucide-react';
import { AnimatedPictogram } from './animated-pictogram';
import { DemoHeader } from './demo-header';
import { useState } from 'react';

type Status = 'idle' | 'recording' | 'paused';

export function Demo() {
  const demoPage = useDemoStore((state) => state.getDemoPage());
  const [status, setStatus] = useState<Status>('idle');

  return (
    <Iphone18Mockup background={demoPage}>
      <div className="flex flex-col gap-2 h-full w-full px-2">
        <DemoHeader />
        <DemoBody status={status} setStatus={setStatus} />
      </div>
    </Iphone18Mockup>
  );
}

function DemoBody({ status, setStatus }: { status: Status; setStatus: (status: Status) => void }) {
  const demoTrascript =
    'This is a longer demo transcript that provides more detailed information about the functionality and features of the application. It serves as a guide to help users understand how to interact with the demo effectively and make the most out of their experience. This is a longer demo transcript that provides more detailed information about the functionality and features of the application. It serves as a guide to help users understand how to interact with the demo effectively and make the most out of their experience. This is a longer demo transcript that provides more detailed information about the functionality and features of the application. It serves as a guide to help users understand how to interact with the demo effectively and make the most out of their experience. This is a longer demo transcript that provides more detailed information about the functionality and features of the application. It serves as a guide to help users understand how to interact with the demo effectively and make the most out of their experience. This is a longer demo transcript that provides more detailed information about the functionality and features of the application. It serves as a guide to help users understand how to interact with the demo effectively and make the most out of their experience. This is a longer demo transcript that provides more detailed information about the functionality and features of the application. It serves as a guide to help users understand how to interact with the demo effectively and make the most out of their experience.';
  const [transcript, setTranscript] = useState<string>(demoTrascript);

  switch (status) {
    case 'recording':
      return (
        <>
          <DemoBodyWithTranscript isRecording={true} transcript={transcript} />
          <div className="grid grid-cols-2 gap-2 w-full justify-center">
            <Button variant="ghost" rounded className="w-full px-0" onClick={() => setStatus('idle')}>
              Discard
            </Button>
            <Button variant="outline" rounded onClick={() => setStatus('paused')}>
              <Pause className="w-4 h-4" />
              Pause
            </Button>
          </div>
        </>
      );
    case 'paused':
      return (
        <>
          <DemoBodyWithTranscript isRecording={false} transcript={transcript} />
          <div className="grid grid-cols-2 gap-2 w-full justify-center">
            <Button variant="ghost" rounded className="w-full px-0" onClick={() => setStatus('idle')}>
              Discard
            </Button>
            <Button variant="outline" rounded className="w-full px-0" onClick={() => setStatus('idle')}>
              <Save className="w-4 h-4" />
              Save
            </Button>
          </div>
        </>
      );
    case 'idle':
    default:
      return (
        <>
          <div className="flex flex-col gap-2 h-full items-center pt-10">
            <span className="text-text-secondary font-medium text-2xl text-center max-w-[200px]">What are you thinking today?</span>
            <AnimatedPictogram />
          </div>
          <div className="grid grid-cols-2 gap-2 w-full justify-center">
            <Button variant="outline" rounded className="w-full">
              <Activity className="w-4 h-4" />
              Interact
            </Button>
            <Button variant="outline" rounded className="w-full" onClick={() => setStatus('recording')}>
              <Mic className="w-4 h-4" />
              Record
            </Button>
          </div>
        </>
      );
  }
}

function DemoBodyWithTranscript({ isRecording, transcript }: { isRecording: boolean; transcript: string }) {
  return (
    <div className="flex flex-col gap-2 h-full items-center pt-2 overflow-hidden">
      <div className="flex items-center gap-2">
        <span className={`text-center font-medium ${isRecording ? 'text-brand-500 animate-pulse' : ''}`}>
          {isRecording ? 'Recording...' : 'Recording paused'}
        </span>
      </div>
      <div className="text-gray-500 text-sm w-full overflow-auto">{transcript}</div>
    </div>
  );
}
