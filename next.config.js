/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'images6.alphacoders.com',
      'sprint-rowery.pl',
      'demo2.themelexus.com',
    ],
  },
  env: {
    URL: process.env.URL,
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  },
  i18n,
  async rewrites() {
    return [
      {
        source: '/katalog',
        destination: '/catalog',
      },
      {
        source: '/rejestracja',
        destination: '/register',
      },
      {
        source: '/logowanie',
        destination: '/login',
      },
      {
        source: '/przypomnij-haslo',
        destination: '/forgot-password',
      },
    ];
  },
};

module.exports = nextConfig;
