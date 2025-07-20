import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border",
  {
    variants: {
      variant: {
        primary: 'border-button-brand hover:border-button-brand-hover bg-button-brand text-white hover:bg-button-brand-hover',
        outline: 'border-border-primary shadow-xs hover:bg-bg-secondary hover:text-text-brand',
        secondary: 'border-border-secondary bg-bg-secondary text-text-secondary shadow-xs hover:bg-bg-secondary/80',
        ghost: 'border-transparent hover:bg-bg-secondary hover:text-text-brand',
        link: 'border-transparent text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-8 gap-1.5 px-2.5 has-[>svg]:px-2.5',
        medium: 'h-10 px-3 has-[>svg]:px-2.5',
        lg: 'h-12 px-6 has-[>svg]:px-5 text-lg',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
);
function Button({
  className,
  variant = 'primary',
  size,
  asChild = false,
  rounded = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    rounded?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp data-slot="button" className={cn('relative', buttonVariants({ variant, size, className }), rounded && 'rounded-full')} {...props}>
      {variant === 'primary' && (
        <>
          <div
            className={cn(
              'absolute inset-[1px] border-0 pointer-events-none shadow-[0_3px_5px_rgba(20,0,0,0.4)]',
              rounded ? 'rounded-full' : 'rounded-md',
            )}
          />

          <div
            className={cn(
              'z-10 absolute inset-0 border-[1px] border-white/10 pointer-events-none',
              rounded ? 'rounded-full' : 'rounded-md',
            )}
          />
        </>
      )}
      {props.children}
    </Comp>
  );
}

export { Button, buttonVariants };
