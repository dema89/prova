import data from '~/public/data/data.json'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('movies', data)
})