import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import en from './locales/en/translation.json';
import ar from './locales/ar/translation.json';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ["en", "ar"],
    resources: {
        en,
        ar
      },  
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
