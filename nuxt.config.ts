// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@nuxt/test-utils',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss'
  ],
 app: {
    head: {
      htmlAttrs: {
        lang: 'en' // or your preferred language code
      },
      title: 'Gyamficodes | Fullstack Developer Portfolio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Gyamficodes is a fullstack developer portfolio showcasing work in Vue, Nuxt, Laravel, and modern UI/UX design.' },
        { name: 'keywords', content: 'Gyamficodes, fullstack developer, Nuxt.js, Vue, React, Laravel, C# , Umbraco frontend, backend, portfolio, UI/UX' },
        { name: 'author', content: 'Gyamficodes' },

        // Open Graph (Facebook/LinkedIn)
        { property: 'og:title', content: 'Gyamficodes | Fullstack Developer Portfolio' },
        { property: 'og:description', content: 'Explore fullstack projects by GyamfiCodes, featuring modern web technologies like Vue, Nuxt, and Laravel.' },
        { property: 'og:image', content: 'https://gyamficodes-portfolio.vercel.app/og-image.jpg' }, // Update this
        { property: 'og:url', content: 'https://gyamficodes-portfolio.vercel.app/' },
        { property: 'og:type', content: 'website' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Gyamficodes | Fullstack Developer' },
        { name: 'twitter:description', content: 'Discover projects by fullstack developer Gyamficodes using Nuxt.js, Vue, Laravel, and more.' },
        { name: 'twitter:image', content: 'https://gyamficodes-portfolio.vercel.app/og-image.jpg' }
      ],
      link: [
        { rel: 'canonical', href: 'https://gyamficodes-portfolio.vercel.app/' }
      ]
    }
  },
 
})