import { useTranslations } from 'next-intl';
import { ChevronRight } from 'lucide-react';
import { Link } from '@/ui/components';

export function TopBanner() {
  const t = useTranslations('website.hero');

  return (
    <Link
      href="/demo"
      className="flex items-center gap-1.5 pr-3 pl-4 py-1.5 border border-border-primary rounded-full bg-bg-primary text-text-brand"
    >
      <span className=" font-medium">{t('topBanner')}</span>
      <ChevronRight className="size-[18px] " />
    </Link>
  );
}
