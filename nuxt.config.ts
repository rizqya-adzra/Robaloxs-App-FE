// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  types: ['@nuxtjs/i18n'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
  ],
  i18n: {
    defaultLocale: "id",
    langDir: "locales/",
    locales: [
      { code: "id", file: "id.json" },
      { code: "en", file: "en.json" },
    ],
  },
});
