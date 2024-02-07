export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts', 
    '@nuxt/image'
  ],
  css: ['~/assets/style.css'],
  googleFonts: {
    families: {
      'DM Sans': true
    }
  },
  image: {
    format: ['webp']
  }
})
