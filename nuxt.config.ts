import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    defaultLocale: 'id',
    langDir: 'locales/',
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'id', file: 'id.json' }
    ],
  }
})
