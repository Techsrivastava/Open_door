import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';

export const metadata: Metadata = {
  title: 'Open Door Expedition - Explore the World You Have Never Seen',
  description:
    'Book your next trekking adventure with Open Door Expedition. Explore the best trekking destinations in India and around the world.',
  generator: 'v0.dev'
};

export default async function LocaleLayout(props: { children: React.ReactNode; params: { locale: string } }) {
  const { children, params } = props;
  const locale = params.locale;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    // Default to English if the locale doesn't exist
    messages = (await import(`../../messages/en.json`)).default;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}