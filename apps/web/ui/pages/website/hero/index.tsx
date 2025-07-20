import { useTranslations } from 'next-intl';
import { TopBanner } from './top-banner';
import { Button, Link } from '@/ui/components';
import { Phone, Smartphone } from 'lucide-react';
import { Background } from './background';
import { AnimatedDemo } from '../animated-demo';
import { ContainerTextFlip } from '@/ui/components/container-text-flip';

export function Hero() {
  const t = useTranslations('website');

  return (
    <div className="relative">
      <Background />
      <div className="relative z-10 flex text-center flex-col items-center max-w-screen-lg mx-auto px-4 pt-20 sm:pt-40 pb-24 gap-8">
        <TopBanner />
        <h1 className="relative h-40">
          <span className="relative z-20 text-text-tertiary">
            {t('hero.title.part1')} <span className="text-text-primary">{t('hero.title.part2')}</span> {t('hero.title.part3')}{' '}
          </span>
          <ContainerTextFlip words={[t('hero.title.part4.healthTracking'), t('hero.title.part4.wellnessInsights'), t('hero.title.part4.personalGrowth')]} />
        </h1>
        <span className="text-text-tertiary font-medium text-2xl max-w-screen-md">{t('hero.description')}</span>

        <div className="flex gap-2">
          <Link href="/demo">
            <Button variant="outline" size="lg" rounded className="shadow-md">
              <Phone className="size-5" />
              {t('callToAction.testMeOut')}
            </Button>
          </Link>
          <Button variant="primary" size="lg" rounded>
            <Smartphone className="size-5" />
            {t('callToAction.downloadApp')}
          </Button>
        </div>
        <AnimatedDemo />
      </div>
    </div>
  );
}
