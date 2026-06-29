import { config as loadEnv } from 'dotenv'

loadEnv({ path: '.env.local', override: false })
loadEnv({ path: '.env', override: false })

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-06-12',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL || 'https://bmmdnwrzgkzzgxseenpx.supabase.co',
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_FEJ5u78FedHncLID8_iZWQ_rNrTvv0K'
    },
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  },

  // Connects your Tailwind global styles file cleanly
  css: ['~/styles/main.css'],

  modules: [
    '@nuxtjs/tailwindcss'
  ]
})