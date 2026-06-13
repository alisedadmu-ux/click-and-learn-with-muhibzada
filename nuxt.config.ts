// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-06-12',
  devtools: { enabled: true },

  // Connects your Tailwind global styles file cleanly
  css: ['~/styles/main.css'],

  modules: [
    '@nuxtjs/tailwindcss'
  ]
})