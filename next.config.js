// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },

  images: {
    domains: ['www.ieee-ecce.org'],
  },

  esModule: true,

  i18n: {
    locales: ['en', 'es', 'pt'],
    defaultLocale: 'pt',
  },
};
