import { defineNuxtConfig } from 'nuxt/config'
import filmData from './public/data/data.json'

// Generazione delle rotte dinamiche dai dati JSON
const filmRoutes = (filmData || [])
  .filter((item: any) => typeof item.nome === 'string')
  .map((film: any) => `/${film.nome}`)

export default defineNuxtConfig({
  css: ['~/assets/styles/main.css'],

  vite: {
    build: {
      cssCodeSplit: false
    }
  },

  ssr: true,

  nitro: {
    preset: 'static',
    prerender: {
      routes: [
        '/',        // Home page
        ...filmRoutes // Pagine dinamiche dai dati JSON
      ]
    }
  },

  app: {
    baseURL: '/',
    head: {
      title: 'Light in the Darkness - A project by Studio K95',
      meta: [
        { name: 'description', content: 'Animazioni immersive per un progetto horror' }
      ]
    }
  },

  compatibilityDate: '2024-11-22',
  modules: ['@nuxt/image']
})
