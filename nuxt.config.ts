// https://nuxt.com/docs/api/configuration/nuxt-config
const fs = require("fs");
const path = require("path");
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-module-hotjar"],
  hotjar: {
    hotjarId: 4954366,
    scriptVersion: 6,

    // optionally you can turn on debug mode for development
    debug: true,
  },
  devServer: {
    https: {
      key: "./localhost-key.pem",
      cert: "./localhost.pem",
    },
  },
});
