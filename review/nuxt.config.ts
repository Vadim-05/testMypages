import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/vuetify',
    '~/plugins/axios',
  ],
  app: {
    baseURL: '/vadimTest/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the beginning of the folder name to avoids nojkill conflict
    head: {
      title: 'vadimTest',
      link: [
        { rel: 'icon', href: '/vadimTest/favicon.png' } 
      ],
    },
  },
  css: ['vuetify/lib/styles/main.sass'],

  modules: ["@nuxt/icon"],

  build: {
    transpile: ['vuetify']
  },

  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/my-icons'
      },
    ],
  },

  compatibilityDate: '2024-07-26',
})
