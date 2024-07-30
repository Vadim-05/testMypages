import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  let api = axios.create({
    baseURL: 'https://testotzovik.onrender.com/api/v1/',
  });
  
  nuxtApp.provide('api', api);
});