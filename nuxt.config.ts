import { defineNuxtConfig } from 'nuxt/config'
import fs from 'fs'
import path from 'path'

// Caricamento rotte dinamiche dal JSON
const jsonPath = path.resolve('./public/data/data.json')
let filmRoutes: string[] = []

try {
  const json = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))
  if (Array.isArray(json)) {
    filmRoutes = json
      .filter((item): item is { nome: string } => typeof item.nome === 'string')
      .map((film) => `/film/${film.nome}`)
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

  app: {
  
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      
    }
  },

  ssr: true, 
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: filmRoutes
    }
  }

})
