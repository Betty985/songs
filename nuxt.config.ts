// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  title: "Hello Nuxt",
  devtools: { enabled: true },
  alias: {
    "~": "/",
  },
  modules: ["@nuxt/content"],
  pages: true,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  // https://content.nuxtjs.org
  content: {
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: "github-dark",
        default: "github-light",
      },
    },
  },
});
