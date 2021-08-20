import type sampleLangTransaltionKeys from 'locales/en.json';
import { useTranslation } from 'react-i18next';

interface DateTranslationType {
  time?: Date;
  date?: Date;
}

export const useTypeSafeTranslation = () => {
  const { t, i18n } = useTranslation();

  return {
    translate: (s: keyof typeof sampleLangTransaltionKeys, f?: DateTranslationType) => t(s, f),
    i18n,
  };
};
