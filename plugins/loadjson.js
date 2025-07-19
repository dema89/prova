export default defineNuxtPlugin(async (nuxtApp) => {
  try {
    let data

    if (process.server) {
      // Import diretto del file statico
      data = await import('~/public/data/data.json').then(m => m.default)
    } else {
      // In client possiamo usare fetch normalmente
      const response = await fetch('/data/data.json')
      if (!response.ok) {
        console.error('Failed to fetch data:', response.statusText)
        return
      }
      data = await response.json()
    }

    nuxtApp.provide('movies', data)
  } catch (error) {
    console.error('Errore durante il caricamento dei dati:', error)
  }
})