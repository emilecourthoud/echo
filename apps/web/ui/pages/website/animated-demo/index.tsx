'use client';

import { Iphone18Mockup } from './iphone-16-mockup';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/ui/components';
import { SequenceSteps } from './sequence-steps';
import { Steps, STEPS_ARRAY, STEP_DURATION } from './constants';
// import { ...} from './steps';

const TOTAL_DURATION = STEP_DURATION * STEPS_ARRAY.length;

export function AnimatedDemo() {
  const [step, setStep] = useState<Steps>(STEPS_ARRAY[0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const currentProgress = (elapsed % TOTAL_DURATION) / TOTAL_DURATION;
      setProgress(currentProgress);

      const currentStepIndex = Math.floor((elapsed % TOTAL_DURATION) / STEP_DURATION);
      if (STEPS_ARRAY[currentStepIndex] !== step) {
        setStep(STEPS_ARRAY[currentStepIndex]);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isAutoPlaying, step, STEPS_ARRAY]);

  const handleStepClick = (index: number) => {
    startTimeRef.current = Date.now() - index * STEP_DURATION;
    setStep(STEPS_ARRAY[index]);
    setProgress(index / STEPS_ARRAY.length);
  };

  const handleRestart = () => {
    startTimeRef.current = Date.now();
    setStep(STEPS_ARRAY[0]);
    setProgress(0);
    setIsAutoPlaying(true);
  };

  const background = step === 'incoming-call' ? 'call' : step === 'agent-notification' ? 'secondBrain' : 'home';

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <SequenceSteps step={step} progress={progress} handleStepClick={handleStepClick} />

      <Iphone18Mockup background={background}>
        {/* <AnimatePresence mode="wait">
          {step === 0 && <... />}
        </AnimatePresence> */}
      </Iphone18Mockup>
      <Button variant="ghost" className="text-text-tertiary" onClick={handleRestart}>
        Restart
      </Button>
    </div>
  );
}
