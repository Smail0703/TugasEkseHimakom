// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Bawaan Nuxt dari inisialisasi awal
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // --- Tambahan Konfigurasi Portofolio Anda ---
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Portofolio Personal',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Website portofolio personal dan rekam jejak akademik.' }
      ],
      htmlAttrs: {
        class: 'scroll-smooth' // Untuk animasi scroll yang halus
      }
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
  }
})