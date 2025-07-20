import * as React from 'react';

import { cn } from '@/lib/utils/index';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-text-primary placeholder:text-text-tertiary selection:bg-bg-primary selection:text-text-primary dark:bg-input/30 border-border-secondary flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1  shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ',
        'focus-visible:border-border-brand focus-visible:ring-border-brand focus-visible:ring-[3px]',
        'aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
