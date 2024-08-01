import vuetify from 'vite-plugin-vuetify'
import axios from 'axios';

export default defineNuxtConfig({
  generate: {
    fallback: true,
    routes: function () {
      return axios.get('https://testotzovik.onrender.com/api/v1/courses/')  // Змініть на ваш API
        .then((res) => {
          return res.data.map((course) => {
            return '/course/' + course.id
          })
        })
    }
  },
  devtools: { enabled: true },
  plugins: [
    '~/plugins/vuetify',
    '~/plugins/axios',
  ],
  app: {
    baseURL: '/testMypages/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the beginning of the folder name to avoids nojkill conflict
    head: {
      title: 'testMypages',
      link: [
        { rel: 'icon', href: '/testMypages/favicon.png' } 
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
