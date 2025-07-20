'use client';

import { Logo, Link, Button } from '@/ui/components';
import { useTranslations } from 'next-intl';
import { Phone, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '@/lib/hooks/use-is-mobile';

export function Navbar() {
  const t = useTranslations('website.callToAction');
  const [isAtTop, setIsAtTop] = useState(true);
  const isDemoPage = usePathname().includes('demo');
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed flex items-center border-border-primary',
        isMobile
          ? 'w-full px-4 py-2 z-50 bg-bg-secondary/50 backdrop-blur-md justify-between'
          : 'left-1/2 -translate-x-1/2 top-8 z-50 gap-8 shadow-sm rounded-full pr-2 pl-4 py-2 border  transition-colors duration-200',
        isAtTop && isMobile ? 'bg-transparent' : isAtTop && !isMobile ? 'bg-bg-primary' : 'bg-bg-secondary/50 backdrop-blur-md',
      )}
    >
      <Link href="/">
        <Logo withPictogram />
      </Link>
      <div className="flex gap-2">
        {!isDemoPage && (
          <Link href="/demo">
            <Button variant="ghost" rounded>
              <Phone className="size-4" />
              {t('testMeOut')}
            </Button>
          </Link>
        )}
        <Button variant={isAtTop ? 'outline' : 'primary'} className="transition-colors duration-400" rounded>
          <Smartphone className="size-4" />
          {t('downloadApp')}
        </Button>
      </div>
    </div>
  );
}
