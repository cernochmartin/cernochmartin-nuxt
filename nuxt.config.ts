export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: ['~/assets/style.css'],
  googleFonts: {
    families: {
      'DM Sans': true
    }
  }
})
