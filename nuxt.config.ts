import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/fonts', '@nuxt/image', '@nuxt/ui'],
  runtimeConfig: {
    public: {
      appName: process.env.NUXT_APP_APP_NAME,
      creatorUrl: process.env.NUXT_APP_CREATOR_URL,
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'tr', name: 'Türkçe', file: 'tr.json' },
    ],
    strategy: 'no_prefix',
  },

  ui: {
    fonts: false,
    prefix: 'Ui',
  },
})
