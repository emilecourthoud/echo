import { useTranslations } from 'next-intl';

interface IProps {
  withPictogram?: boolean;
}

export function Logo({ withPictogram = false }: IProps) {
  const t = useTranslations('shared');

  return (
    <div className="flex items-center gap-1">
      {withPictogram && (
        <img
          src="/pictogram.svg"
          alt="Second brain"
          className="size-8
      "
        />
      )}
      <span className="text-xl font-semibold text-text-primary">{t('secondBrain')}</span>
    </div>
  );
}
