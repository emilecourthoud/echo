import { useTranslations } from 'next-intl';
import { Steps, STEPS_ARRAY } from './constants';
import { motion } from 'framer-motion';

interface SequenceStepsProps {
  step: Steps;
  progress: number;
  handleStepClick: (index: number) => void;
}

export function SequenceSteps({ step, progress, handleStepClick }: SequenceStepsProps) {
  const t = useTranslations('website.animatedDemo.steps');

  const getStepProgress = (stepIndex: number) => {
    if (stepIndex < STEPS_ARRAY.indexOf(step)) return 1;
    if (stepIndex > STEPS_ARRAY.indexOf(step)) return 0;
    return (progress * STEPS_ARRAY.length) % 1;
  };

  return (
    <div className="flex gap-8 items-center mb-2">
      {STEPS_ARRAY.map((stepId, index) => (
        <div key={index} className="flex flex-col items-center cursor-pointer group" onClick={() => handleStepClick(index)}>
          <span
            className={` font-semibold transition-colors mb-2 ${
              stepId === step ? 'text-text-brand' : 'text-text-secondary'
            } group-hover:text-text-brand`}
          >
            {t(`${stepId}.title`)}
          </span>
          <div className="w-24 h-1 bg-bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-bg-brand"
              initial={{ width: '0%' }}
              animate={{ width: `${getStepProgress(index) * 100}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
