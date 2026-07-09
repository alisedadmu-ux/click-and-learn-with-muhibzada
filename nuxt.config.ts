import { config as loadEnv } from 'dotenv'
import { fileURLToPath } from 'node:url'

loadEnv({ path: '.env.local', override: false })
loadEnv({ path: '.env', override: false })

const rootDir = fileURLToPath(new URL('.', import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-06-12',
  devtools: { enabled: true },

  // Root-level component directory (Nuxt 4 uses app/ as srcDir)
  components: [
    { path: rootDir + 'components', pathPrefix: false },
  ],

  // Root-level composables for auto-import
  imports: {
    dirs: [rootDir + 'composables'],
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL || 'https://bmmdnwrzgkzzgxseenpx.supabase.co',
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_FEJ5u78FedHncLID8_iZWQ_rNrTvv0K'
    },
    supabaseServiceRoleKey: process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '',
    // YouTube config (server-only, not exposed to client)
    youtubeApiKey: process.env.NUXT_YOUTUBE_API_KEY || 'AIzaSyCnyKk9Rdo2Nm9lTOup5H0VjqRb_QijBS8',
    youtubeChannelId: process.env.NUXT_YOUTUBE_CHANNEL_ID || 'UCiskzzqhqQ_pyw91CYZt8ow'
  },

  // Connects your Tailwind global styles file cleanly
  css: ['~/styles/main.css'],

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  app: {
    head: {
      htmlAttrs: {
        class: 'dark'
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' }
  }
})