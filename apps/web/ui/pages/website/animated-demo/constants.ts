export type Steps = 'incoming-call' | 'agent-handle' | 'agent-notification' | 'call-ended';

export const STEPS_ARRAY: Steps[] = ['incoming-call', 'agent-handle', 'agent-notification', 'call-ended'];

export const STEP_DURATION = 5000; // 5 seconds per step
