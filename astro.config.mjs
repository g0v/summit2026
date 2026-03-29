import { fileURLToPath } from 'node:url'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

const STAGING_PROJECT_NAME = 'summit2026'
const PRODUCTION_PROJECT_NAME = '2026'

// https://astro.build/config
export default defineConfig({
  base: process.env.BUILD_MODE === 'production' ? `/${PRODUCTION_PROJECT_NAME}/` : `/${STAGING_PROJECT_NAME}/`,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      allowedHosts: process.env.ALLOW_HOSTS?.split(',') || []
    }
  },
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'en'],
  },
  devToolbar: {
    enabled: false,
  },
})
