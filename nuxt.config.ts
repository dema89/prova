import { defineNuxtConfig } from 'nuxt/config'
import fs from 'fs'
import path from 'path'

const jsonPath = path.resolve('./public/data/data.json')
let filmData: { nome: string }[] = []

try {
  filmData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))
} catch (e) {
  console.warn('⚠️ Impossibile leggere data.json', e)
}

const filmRoutes = (filmData || [])
  .filter((item) => typeof item.nome === 'string')
  .map((film) => `/${film.nome}`)

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
        '/index',        // Home page
        ...filmRoutes
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
