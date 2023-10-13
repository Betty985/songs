// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  title: "Hello Nuxt",
  devtools: { enabled: true },
  alias: {
    "~": "/",
  },
  modules: ["@nuxt/content"],
  pages: true,
  pageTransition: { name: "page", mode: "out-in" },
  layoutTransition: { name: "layout", mode: "out-in" },
});
