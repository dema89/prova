import SplitType from 'split-type'
import { useRoute } from 'vue-router'
import { ref, reactive, onMounted, nextTick, watch } from 'vue'
import { useEventListener } from '@vueuse/core'

export function useCarouselController({ containerR, carouselR, schedeRefs, movieRefsLink, singleTitle, srcFilm, carouselId }) {
  const { $gsap, $Draggable, $movies } = useNuxtApp()

  const isMobile = ref(false)
  const movies = ref([])
  const splitTitlesMap = reactive({})
  const activePosterIndex = ref(-1)
  const hoveredPosterIndex = ref(null)
  const currentPagePosterIndex = ref(-1)
  const mobileHighlightIndex = ref(-1)
  const draggedOnce = ref(false)

  const route = useRoute()

  let maxScroll = 0
  let draggableInstance = null
  let oldKey = 'other'
  const animationQueue = []
  let is_animate = false
  const margin = 60
  let resizeTimeout = null
  let hoverTimeout = null

  /** Utility */
  const isTouchDevice = () =>
    'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0

  /** Determina se usare mobile mode */
  const setMobile = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    const isLandscapeTablet = isTouchDevice() && width >= 1024 && width <= 1366 && width > height
    isMobile.value = width <= 1280 || isLandscapeTablet
  }

  /** Aggiorna maxScroll */
  const updateMaxScroll = () => {
    if (!containerR.value || !carouselR.value) return
    const { paddingLeft, paddingRight } = getComputedStyle(carouselR.value)
    maxScroll = carouselR.value.scrollWidth - containerR.value.clientWidth +
      parseFloat(paddingLeft) + parseFloat(paddingRight)
  }

  /** Animazione carosello con mouse */
  const quickScroll = ref(null)
  const handleMouseMove = (event) => {
    if (!containerR.value || !carouselR.value || isMobile.value) return

    if (!quickScroll.value) {
      quickScroll.value = $gsap.quickTo(carouselR.value, 'x', { duration: 1.8, ease: 'power3.out' })
    }

    const containerWidth = containerR.value.clientWidth
    const mouseX = Math.min(Math.max(event.clientX, margin), containerWidth - margin)
    const mousePercent = (mouseX - margin) / (containerWidth - margin * 2)
    const scrollPosition = -mousePercent * maxScroll
    quickScroll.value(Math.max(Math.min(scrollPosition, 0), -maxScroll))
  }

  /** Aggiunge ref scheda */
  const addSchedaRef = (el) => {
    if (el && !el.classList.contains('carousel-spacer') && !schedeRefs.value.includes(el)) {
      schedeRefs.value.push(el)
    }
  }

  const setRef = (key) => (el) => el && (movieRefsLink.value[key] = el)
  const titleSchede = (key) => (el) => el && (singleTitle.value[key] = el)

  /** Ferma animazioni titoli */
  const stopCurrentTitleAnimations = () => {
    for (const k in splitTitlesMap) {
      const chars = splitTitlesMap[k]?.chars
      if (chars?.length) $gsap.killTweensOf(chars)
    }
    is_animate = false
  }

  /** Gestione titolo attivo */
  const attivaTitolo = (key) => {
    clearTimeout(hoverTimeout)
    hoverTimeout = setTimeout(() => {
      if (key === oldKey) return
      animationQueue.length = 0
      animationQueue.push(key)
      stopCurrentTitleAnimations()
      processAnimationQueue()
    }, 50)
  }

  const processAnimationQueue = () => {
    if (is_animate || !animationQueue.length) return
    runTitoloAnimation(animationQueue.shift())
  }

  const runTitoloAnimation = (key) => {
    if (is_animate) return
    stopCurrentTitleAnimations()

    const currentChars = splitTitlesMap[key]?.chars || []
    const isVisible = currentChars.some(c => $gsap.getProperty(c, 'y') === 0)
    if (key === oldKey && isVisible) return

    is_animate = true

    // Nasconde tutti gli altri
    Object.keys(splitTitlesMap).forEach((k) => {
      if (k !== key) {
        const chars = splitTitlesMap[k]?.chars
        if (chars?.length) {
          $gsap.to(chars, { y: '120%', duration: 0.3, stagger: { amount: 0.15, from: 'center' } })
        }
      }
    })

    // Mostra titolo selezionato
    if (!currentChars.length) {
      is_animate = false
      processAnimationQueue()
      return
    }

    $gsap.to(currentChars, {
      y: 0,
      duration: 0.4,
      stagger: { amount: 0.2, from: 'center' },
      onComplete: () => {
        oldKey = key
        is_animate = false
        processAnimationQueue()
      }
    })
  }

  /** SplitType iniziale */
  const initializeSplit = async () => {
    await nextTick()
    for (const key in singleTitle.value) {
      const el = singleTitle.value[key]
      if (!(el instanceof HTMLElement)) continue
      splitTitlesMap[key]?.destroy?.()

      try {
        splitTitlesMap[key] = new SplitType(el, { types: 'words, chars' })
        const chars = splitTitlesMap[key].chars
        $gsap.set(chars, { y: key === 'other' && !isMobile.value ? 0 : '120%' })
      } catch (err) {
        console.warn(`SplitType failed for key "${key}"`, err)
      }
    }
  }

  /** Allinea poster */
  const snapToClosestPoster = () => {
    if (!carouselR.value || !schedeRefs.value.length) return
    const containerWidth = containerR.value.clientWidth
    const currentX = $gsap.getProperty(carouselR.value, 'x') || 0
    const centerX = containerWidth / 2

    let closestIndex = -1
    let closestDistance = Infinity

    schedeRefs.value.forEach((el, index) => {
      const elCenter = el.offsetLeft + currentX + el.offsetWidth / 2
      const distance = Math.abs(elCenter - centerX)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    if (closestIndex !== -1) {
      const el = schedeRefs.value[closestIndex]
      const shift = el.offsetLeft + el.offsetWidth / 2 - centerX
      $gsap.to(carouselR.value, { x: -shift, duration: 0.6, ease: 'power3.out' })

      if (movies.value[closestIndex]) {
        activePosterIndex.value = closestIndex
        attivaTitolo(movies.value[closestIndex].nome)
      }
    }
  }

  /** Draggable */
  const initializeDraggable = () => {
    if (!isMobile.value) {
      draggableInstance?.kill?.()
      draggableInstance = null
      return
    }

    nextTick(() => {
      if (!carouselR.value) return
      $gsap.set(carouselR.value, { x: 0 })

      draggableInstance = $Draggable.create(carouselR.value, {
        type: 'x',
        bounds: { minX: -maxScroll, maxX: 0 },
        inertia: true,
        onPress: () => {
          if (!draggedOnce.value) {
            draggedOnce.value = true
            mobileHighlightIndex.value = -1
          }
        },
        onDragEnd: snapToClosestPoster
      })[0]
    })
  }

  /** Reset al primo poster (solo mobile + drag) */
const resetToFirstPoster = () => {
  if (!isMobile.value || !carouselR.value || !schedeRefs.value.length) return

  // Prendi il primo poster
  const firstPoster = schedeRefs.value[0]
  const containerWidth = containerR.value.clientWidth
  const shift = firstPoster.offsetLeft + firstPoster.offsetWidth / 2 - containerWidth / 2

  // Centra il primo poster
  $gsap.set(carouselR.value, { x: -shift })

  activePosterIndex.value = 0
  mobileHighlightIndex.value = 0
  draggedOnce.value = false
  attivaTitolo(movies.value[0]?.nome || 'other')
}

  /** Gestione hover */
  const setHoveredPoster = (index) => { hoveredPosterIndex.value = index }
  const resetHoveredPoster = () => { hoveredPosterIndex.value = null }
  const reseTileposter = () => {
    hoveredPosterIndex.value = null
    attivaTitolo('other')
  }

  /** Lifecycle */
  onMounted(async () => {
    movies.value = $movies
    setMobile()

    await nextTick()
    await initializeSplit()
    updateMaxScroll()
    initializeDraggable()
    attivaTitolo('other')
    snapToClosestPoster()

    const current = route.params.nome
    if (current) {
      const index = movies.value.findIndex(m => m.nome === current)
      if (index !== -1) {
        currentPagePosterIndex.value = index
        activePosterIndex.value = index === 0 && movies.value.length > 1 ? 1 : index
      }
    }

    if (carouselId === 'carousel2' && isMobile.value && !draggedOnce.value) {
      resetToFirstPoster()
    }

    useEventListener(window, 'resize', () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(async () => {
        const wasMobile = isMobile.value
        setMobile()

        if (wasMobile && !isMobile.value) {
          draggableInstance?.kill?.()
          draggedOnce.value = false
          if (carouselId === 'carousel2') {
            resetToFirstPoster()
          } else {
            mobileHighlightIndex.value = -1
            activePosterIndex.value = -1
          }
          hoveredPosterIndex.value = null
          $gsap.set(carouselR.value, { x: 0 })
          attivaTitolo('other')
        }

        await initializeSplit()
        updateMaxScroll()
        initializeDraggable()
        snapToClosestPoster()
      }, 400)
    })
  })

  /** Watch su route */
  watch(() => route.params.nome, (newNome) => {
    const index = movies.value.findIndex(movie => movie.nome === newNome)
    if (index !== -1) {
      currentPagePosterIndex.value = index
      activePosterIndex.value = index === 0 && movies.value.length > 1 ? 1 : index
      attivaTitolo(movies.value[activePosterIndex.value].nome)
    } else {
      activePosterIndex.value = -1
      currentPagePosterIndex.value = -1
      attivaTitolo('other')
    }
  })

  return {
    isMobile,
    movies,
    handleMouseMove,
    addSchedaRef,
    setRef,
    titleSchede,
    attivaTitolo,
    reseTileposter,
    activePosterIndex,
    hoveredPosterIndex,
    currentPagePosterIndex,
    snapToClosestPoster,
    setHoveredPoster,
    resetHoveredPoster,
    draggedOnce,
    mobileHighlightIndex,
    resetToFirstPoster
  }
}
