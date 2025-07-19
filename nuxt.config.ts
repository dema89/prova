
import { defineNuxtConfig } from 'nuxt/config'
import fs from 'fs'
import path from 'path'

// Caricamento rotte dinamiche dal JSON
const jsonPath = path.resolve('./public/data/data.json')
let filmRoutes: string[] = []

try {
  const json = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))

  // Assicurati che ogni voce abbia un campo 'nome'
  if (Array.isArray(json)) {
    filmRoutes = json
      .filter((item): item is { nome: string } => typeof item.nome === 'string')
      .map((film) => `/${film.nome}`)
  }
} catch (error) {
  console.warn('⚠️ Impossibile leggere public/data/data.json. Nessuna route dinamica generata.')
}

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
        '/',       // Home page
        ...filmRoutes // Pagine dinamiche dal JSON
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