export default defineNuxtPlugin((nuxtApp) => {
  const isActive = useState('transition-active', () => false)
  const hide = useState('hide', () => false) 
  const isprep_transition = useState('isprep_transition', () => false) 
  const active = useState('active', () => false)
  const nextTitle = useState('next-title', () => '')

  const { $lenis } = useNuxtApp();
  let isFirstLoad = true

  nuxtApp.provide('isActive', isActive)
  nuxtApp.provide('hide', hide)
  nuxtApp.provide('isprep_transition', isprep_transition)

  function toggleMainDisable(active) {
  const main = document.querySelector('#main')
  if (main) {
    main.classList.toggle('active', active)
  }
}

  nuxtApp.hook('app:mounted', () => {
    const router = useRouter()

    document.addEventListener('click', (event) => {
      const link = event.target.closest('a')
      if (!link) return

      const targetHref = link.getAttribute('href')
      if (!targetHref || targetHref.startsWith('http')) return

      // ✅ Legge il titolo se presente come data-title
      const dataTitle = link.getAttribute('data-title')
      if (dataTitle) {
        nextTitle.value = dataTitle
      }

      const resolved = router.resolve(targetHref)
      const current = router.currentRoute.value

      const isSameRoute =
        resolved.path === current.path &&
        JSON.stringify(resolved.query) === JSON.stringify(current.query) &&
        JSON.stringify(resolved.params) === JSON.stringify(current.params)

      if (isSameRoute) {
        active.value = false
      }
    })
  })

  nuxtApp.$router.beforeEach((to, from, next) => {
    if (isFirstLoad) {
      isFirstLoad = false
      return next()
    }

    const sameRoute =
      to.path === from.path &&
      JSON.stringify(to.params) === JSON.stringify(from.params) &&
      JSON.stringify(to.query) === JSON.stringify(from.query)

    if (sameRoute) return next(false)

    // ✅ Se nextTitle non è stato già impostato dal click, usa fallback
    if (!nextTitle.value) {
      nextTitle.value = to.meta?.titolo || to.name || to.path
    }

    isActive.value = true
    toggleMainDisable(true)

     setTimeout(() => {
    active.value = false
     },1500)

    setTimeout(() => {

          next()   
           isprep_transition.value = true

        setTimeout(() => {
       
            hide.value = true
        }, 200);
    }, 3000)
  
  })

  nuxtApp.hook('page:finish', () => {
    
    if ($lenis) {
     $lenis.scrollTo(0, { immediate: true })
    }

    // ✅ Reset titolo al termine della transizione (opzionale)
    setTimeout(() => {
     
      isActive.value = false
      toggleMainDisable(false)
      isprep_transition.value = false
       hide.value = false
      window.dispatchEvent(new CustomEvent('transition:end'))
      nextTitle.value = ''
      
    }, 1500)
  })
})
