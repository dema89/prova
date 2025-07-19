export default defineNuxtPlugin(async (nuxtApp) => {
  try {
    // Percorso assoluto basato su baseURL di Nuxt (es. '/prova/')
    const config = useRuntimeConfig()
    const base = config.app.baseURL || '/'
    const response = await fetch(`${base}data/data.json`)

    if (!response.ok) {
      console.error('Failed to fetch data:', response.statusText)
      return
    }

    const data = await response.json()
    nuxtApp.provide('movies', data)
  } catch (error) {
    console.error('Errore durante il caricamento dei dati:', error)
  }
})