const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'default',
    localeDetection: true,
    locales: ['default', 'pl', 'en'],
    fallbackLng: {
      en: ['en'],
      pl: ['pl'],
      default: ['pl'],
    },
    localePath: path.resolve('./public/locales'),
  },
};
