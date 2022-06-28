import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptBR from '../i18n/pt-BR.json';

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: 'pt-BR',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    'pt-BR': {
      translation: ptBR,
    },
  },
});

export default i18n;
