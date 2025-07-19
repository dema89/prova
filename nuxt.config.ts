export default defineNuxtConfig({
  css: ['~/assets/styles/main.css'],
  vite: {
    build: {
      cssCodeSplit: false // Combina tutto il CSS in un unico file
    }
  },

  app: {
   /*baseURL: '/test/',*/
    head: {
      title: 'Light in the Darkness - A project by Studio K95',
      
      meta: [{ name: 'description', content: 'Animazioni immersive per un progetto horror' }],
    },

    
    // Aggiungi il percorso base per il router
    
  },

  compatibilityDate: '2024-11-22',
});




