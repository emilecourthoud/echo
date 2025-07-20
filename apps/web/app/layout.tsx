import '@/styles/globals.css';
import '@/styles/styles.css';
import { inter } from '../styles/fonts';
import { cn } from '@/lib/utils/functions/cn';
import { RootProviders } from '@/lib/providers';
import { getLocale } from 'next-intl/server';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={cn(inter.variable)}>
      <body>
        <RootProviders>
          <div className="overflow-x-hidden">{children}</div>
        </RootProviders>
      </body>
    </html>
  );
}
