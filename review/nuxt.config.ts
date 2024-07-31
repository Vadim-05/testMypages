import axios from 'axios';
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
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
  generate: {
    routes: async () => {
      const { data } = await axios.get('https://testotzovik.onrender.com/api/v1/courses/'); // Замените на ваш API
      return data.results.map(course => `/courseReview/${course.id}`);
    },
    fallback: true // добавляет поддержку 404 страницы
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
});
