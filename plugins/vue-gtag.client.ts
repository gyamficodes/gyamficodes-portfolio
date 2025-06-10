import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag-next' // ✅ This is the correct package

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-ZKCSHHHRGQ', // ✅ Your GA4 tracking ID
    }
  })
})
