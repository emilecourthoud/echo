import { cn } from '@/lib/utils';
import NextLink from 'next/link';

interface IProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className }: IProps) {
  return (
    <NextLink href={href} prefetch className={cn('cursor-pointer', className)}>
      {children}
    </NextLink>
  );
}
