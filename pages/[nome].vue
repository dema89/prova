<template>
  <div id="page">
    <section id="cont_schede" class="schede_page" ref="heroRef">
      <div class="scheda fix page">
        <div class="immagine_film_page"  :class="{ good: good, evil: evil, neutral:neutral }">
           <h1 id="titolo_p_film" v-html="movieDetails.titolo"  class="split-text" :ref="addHeroSplitRef"></h1>
          
           <a href="#" id="scroll_down" ref="scrollDownRef">
            <svg width="10" height="27" viewBox="0 0 10 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M3.92449 -4.83788e-08L3.86728 19.3292L-1.14844e-06 19.3732L4.81693 27L10 19.3181L5.85812 19.3402L5.91533 0.0110229L3.92449 -4.83788e-08Z"
                fill="white" />
            </svg>
          </a>
          <img id="cover_img" fetchpriority="high" :src="movieDetails.cover" />
           <img id="cover_img_blend" fetchpriority="high" :src="movieDetails.cover2" />
         
        </div>
      </div>
    </section>

    <section class="text_film" ref="textFilmRef">
      <div id="data_poster">
        <div>
          <div>
            <h2 :ref="addSplitRef">{{ movieDetails.sottotitolo }}</h2>
            <div v-html="movieDetails.descrizione_1"></div>
          </div>
          
          <ul>
            <li><label>Director</label> {{ movieDetails.regista }}</li>
            <li><label>Year</label> {{ movieDetails.anno }}</li>
            <li><label>Product house</label> {{ movieDetails.casa }}</li>
          </ul>
        </div>
      </div>

     <div id="cont_poster" class="element_filter" ref="container" @mouseenter="onMouseEnterHandler" @mouseleave="onMouseLeaveHandler" @mousemove="onMouseMoveHandler">
        <div id="cont_poster_full" ref="posterWrapper" class="immagine_film" data-color-good="yellow" data-color-evil="magenta">
          <img :alt="movieDetails.titolo" loading="lazy" :src="movieDetails.poster" />
          <img :alt="movieDetails.titolo" loading="lazy" :src="movieDetails.poster2" />
        </div>
        <div id="light-spot" ref="lightSpot"></div>
      </div>
    </section>
  

    <Carosellofilm />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch, onUnmounted, inject, computed } from 'vue'
import { useRoute, useHead } from '#app'

const { $gsap, $movies, $splitTextAnimation, $splitTextAnimationImmediate, $lenis } = useNuxtApp()
const { params } = useRoute()

const preloadCompleted = useState('preload-completed')
const transitionActive = useState('transition-active')
const showScrollDown = ref(false)

const movies = ref([])
const movieDetails = ref({})
const nome = params.nome

const good = inject('good')
const evil = inject('evil')
const neutral = inject('neutral')

const container = ref()
const lightSpot = ref()
const posterWrapper = ref()
const scrollDownRef = ref(null)
const textFilmRef = ref(null)
const splitRefs = ref([])
const heroRefs = ref([])


const addSplitRef = (el) => el && !splitRefs.value.includes(el) && splitRefs.value.push(el)
const addHeroSplitRef = (el) => el && !heroRefs.value.includes(el) && heroRefs.value.push(el)

const stripHtml = (htmlString) => {
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = htmlString || ''
  return tempDiv.textContent || tempDiv.innerText || ''
}

import { useSeoMeta } from '~/composables/useCustomSeoMeta'

watchEffect(() => {
  if (movieDetails.value?.titolo) {
    useSeoMeta({
      title: `${stripHtml(movieDetails.value.titolo)} - Light in the Darkness`,
      description: movieDetails.value.descrizione_short || 'A tribute poster inspired by horror cinema.',
      url: `https://yourwebsite.com/${movieDetails.value.nome}`,
      image: movieDetails.value.poster || 'https://yourwebsite.com/img/share-image-default.jpg',
      type: 'article',
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "VisualArtwork",
        "name": stripHtml(movieDetails.value.titolo),
        "creator": {
          "@type": "Organization",
          "name": "Studio K95"
        },
        "genre": "Horror",
        "image": movieDetails.value.poster || '',
        "url": `https://yourwebsite.com/${movieDetails.value.nome}`,
        "description": movieDetails.value.descrizione_short || 'A tribute poster inspired by horror cinema.'
      }
    })
  }
})

const mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition(event) {
    this.x = event.clientX - this._x
    this.y = (event.clientY - this._y) * -1
  },
  setOrigin(el) {
    const rect = el.getBoundingClientRect()
    this._x = rect.left + rect.width / 2
    this._y = rect.top + rect.height / 2
  }
}

let counter = 0
const updateRate = 10
const isTimeToUpdate = () => counter++ % updateRate === 0

const updateTransformStyle = (x, y) => {
  if (!posterWrapper.value || !lightSpot.value) return

  posterWrapper.value.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
  posterWrapper.value.style.boxShadow = `${-y * 20}px ${-x * 20}px 80px 5px rgba(255, 0, 0, 0.3)`

  const lightX = Math.min(Math.max(50 + y * 50, 10), 90)
  const lightY = Math.min(Math.max(50 - x * 50, 10), 90)
  lightSpot.value.style.left = `${lightX}%`
  lightSpot.value.style.top = `${lightY}%`
  lightSpot.value.style.opacity = 1
}

const update = (event) => {
  mouse.updatePosition(event)
  const x = (mouse.y / container.value.offsetHeight / 2).toFixed(2)
  const y = (mouse.x / container.value.offsetWidth / 2).toFixed(2)
  updateTransformStyle(x, y)
}

const onMouseEnterHandler = (event) => {
  mouse.setOrigin(container.value)
  update(event)
}

const onMouseLeaveHandler = () => {
  if (posterWrapper.value) {
    posterWrapper.value.style.transform = ''
    posterWrapper.value.style.boxShadow = ''
  }
  if (lightSpot.value) lightSpot.value.style.opacity = 0
}

const onMouseMoveHandler = (event) => {
  if (isTimeToUpdate()) update(event)
}

const scrollToTextFilm = () => {
  if (textFilmRef.value && $lenis) {
    $lenis.scrollTo(textFilmRef.value, {
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    })
  }
}

let scrollTriggers = []

const initScrollAnimations = () => {
  if (!$gsap) return

  scrollTriggers.push(
    $gsap.ScrollTrigger.create({
      trigger: "#page",
      scroller: "#main",
      start: "10% top",
      end: "bottom top",
      scrub: true,
      onEnter: () => $gsap.to(scrollDownRef.value, { opacity: 0, duration: 1, filter: "blur(10px)" }),
      onLeaveBack: () => $gsap.to(scrollDownRef.value, { opacity: 1, duration: 1, filter: "blur(0px)" })
    }),

    $gsap.to(".immagine_film_page img", {
      y: "100px",
      scrollTrigger: {
        trigger: "#page",
        start: "top top",
        end: "40% top",
        scroller: '#main',
        scrub: 1,
      },
    }),

    $gsap.fromTo("#titolo_p_film",
      { opacity: 1, filter: "blur(0px)" },
      {
        opacity: 0,
        filter: "blur(100px)",
        scrollTrigger: {
          trigger: "#page",
          start: "10% top",
          end: "bottom top",
          scroller: '#main',
          scrub: 1,
        },
      }
    )
  )
}

const tryShowScrollDown = () => {
  if (preloadCompleted.value && !transitionActive.value) showScrollDown.value = true
}

watch([preloadCompleted, transitionActive], tryShowScrollDown, { immediate: true })

watch([preloadCompleted, transitionActive], async ([preload, transizione]) => {
  if (preload && !transizione && heroRefs.value.length) {
    await nextTick()

    const scrollTop = Math.round(window.scrollY || window.pageYOffset || document.documentElement.scrollTop)
    if (scrollTop > 100 && $lenis) {
      await $lenis.scrollTo(0, { immediate: true })
      await nextTick()
    }

    if ($gsap && $gsap.ScrollTrigger) {
      $gsap.ScrollTrigger.refresh()
    }

    $splitTextAnimationImmediate([...heroRefs.value])
  }
}, { immediate: true })


onMounted(() => {
  if (process.client) {
    movies.value = $movies
    movieDetails.value = movies.value.find((m) => m.nome === nome) || {}

    mouse.setOrigin(container.value)

    watch(showScrollDown, (val) => {
      if (val && scrollDownRef.value) {
        $gsap.to(scrollDownRef.value, { opacity: 1, duration: 0.5, ease: "power2.out" })
      }
    })

    initScrollAnimations()

    nextTick(() => {
      $splitTextAnimation(splitRefs.value)
    })
  }
})

onUnmounted(() => {
  scrollTriggers.forEach(t => t.scrollTrigger?.kill())
  scrollTriggers = []
})
</script>
