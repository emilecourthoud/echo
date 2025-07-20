import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = 'en';

  // Load translations from different folders
  const [sharedMessages, websiteMessages] = await Promise.all([
    import(`@/public/messages/shared/${locale}.json`),
    import(`@/public/messages/website/${locale}.json`),
  ]);

  // Merge all messages together
  const messages = {
    ...sharedMessages.default,
    ...websiteMessages.default,
  };

  return {
    locale,
    messages,
  };
});
