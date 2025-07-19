<template>

    <div id="mouse-follower" ref="followerRef" :class="{ good: good, evil: evil, neutral: neutral }">
    <div id="discover_poster" ref="discoverPosterRef">Discover Poster</div>
    <div id="filter_instruction" ref="filterInstructionRef">
      <div class="neutral-text">Active</div>
      <div class="mini-switch">
        <div class="choseText">Good</div>
        <div class="switch simulated">
          <span class="slider_sm round_sim"></span>
        </div>
        <div class="choseText">Evil</div>
      </div>
      <div class="neutral-text">filter</div>
    </div>
  </div>

<Preload @done="handlePreloadDone" />

<div class="noise"></div>

  <transizione />

  <div class="filters" :ref="registerPulseRef" :class="[{ header_blend: headerBlend }]">
    <div :class="{ disabled: neutral }">
      <div class="choseText" :class="{ good: good }">Good</div>
      <label for="filter_an_goo" class="switch">
        <input type="checkbox" v-model="status" name="goodevilfilter" id="filter_an_goo" @change="goodevil" />
        <span class="slider round"></span>
      </label>
      <div class="choseText" :class="{ evil: evil }">Evil</div>
    </div>

    <div :class="{ disabled: good || evil }">
      <div class="choseText" :class="{ neutral: neutral }">Neutral</div>
      <label for="filter_an_neu" class="switch">
        <input type="checkbox" name="neutralfilter" id="filter_an_neu" v-model="neutral" @change="neutralchose" />
        <span class="slider round"></span>
      </label>
    </div>
  </div>

  <header id="header" ref="headerRef" :class="[{ header_blend: headerBlend }, { active: active }]">
    <div></div>
    <div class="logo" :ref="registerPulseRef" :class="{ active: active }">
    <NuxtLink class="link_nav" to="/">
       
      <svg  xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 149 96">
 
        <path class="st0" d="M164.2-376.7"/>
        <g>
          <path class="st0" d="M.3,49.9h9.8c5.5,0,7.2,3.4,7.2,8.7v27.6c0,5.6-1.9,9-7.2,9H.3v-45.4H.3ZM6.7,88.7h1.5c2,0,2.5-1.1,2.5-3.5v-25.6c0-2.6-.6-3.5-2.2-3.5h-1.8s0,32.6,0,32.6Z"/>
          <path class="st0" d="M29.4,86.8h-4.7l-.8,8.5h-5.7l5.2-45.4h7.6l5.5,45.4h-6.2l-.8-8.5h0ZM25.3,80h3.3l-1.7-16.8s-1.6,16.8-1.6,16.8Z"/>
          <path class="st0" d="M44,95.3h-6.4v-45.4h10.4c4.3,0,6.4,1.9,6.4,7v8.1c0,3.8-1.6,5.3-2.8,5.8,1.4.7,2.8,1.8,2.8,4.9v15.9c0,1.9.3,2.7.6,3.4v.3h-6.3c-.3-.5-.6-1.3-.6-3.7v-13.7c0-2-.3-2.9-2.4-2.9h-1.6v20.3h0ZM44,68.6h1.7c1.8,0,2.3-1.2,2.3-3.2v-6.3c0-2-.3-2.9-2.3-2.9h-1.7v12.5h0Z"/>
          <path class="st0" d="M63.2,95.3h-6.4v-45.4h6.4v18.2l5-18.2h6.2l-6,21.1,6.6,24.3h-6.6l-5.3-19.7v19.7h0Z"/>
          <path class="st0" d="M90.8,56.5h-8.2v11.9h6.4v6.9h-6.4v13.1h8.5v6.9h-14.9v-45.4h14.6v6.6Z"/>
          <path class="st0" d="M98.7,49.9l5.5,24.3v-24.3h5.8v45.4h-5.2l-6.1-26.1v26.1h-5.8v-45.4s5.8,0,5.8,0Z"/>
          <path class="st0" d="M121.6,49.5c5.3,0,7.3,2.5,7.3,7.9v7.4h-6.2v-6.5c0-1.5-.3-2.7-1.8-2.7s-1.9,1-1.9,3.2v.9c0,2.6.5,4,2.6,7l4.1,5.7c2.9,4,3.8,6.3,3.8,11.5v1.5c0,6.7-2.6,10.6-8.3,10.6h-1.2c-5.2,0-7.8-3-7.8-8.6v-9.1h6.3v7.9c0,2.1.7,3.2,2.1,3.2s2.1-1,2.1-3.9v-1c0-3.3-.3-4.3-2.6-7.6l-4.1-5.6c-2.7-3.8-3.5-6.7-3.5-11.2v-1.5c0-6.1,2.8-9.1,7.9-9.1h1.2Z"/>
          <path class="st0" d="M140.7,49.5c5.3,0,7.3,2.5,7.3,7.9v7.4h-6.2v-6.5c0-1.5-.3-2.7-1.8-2.7s-1.9,1-1.9,3.2v.9c0,2.6.5,4,2.6,7l4.1,5.7c2.9,4,3.8,6.3,3.8,11.5v1.5c0,6.7-2.6,10.6-8.3,10.6h-1.2c-5.2,0-7.8-3-7.8-8.6v-9.1h6.3v7.9c0,2.1.7,3.2,2.1,3.2s2.1-1,2.1-3.9v-1c0-3.3-.3-4.3-2.6-7.6l-4.1-5.6c-2.7-3.8-3.5-6.7-3.5-11.2v-1.5c0-6.1,2.8-9.1,7.9-9.1h1.2,0Z"/>
          <path class="st0" d="M19.2.5v38.4h7.8v7h-14.2V.5s6.4,0,6.4,0Z"/>
          <path class="st0" d="M35.3,45.9h-6.4V.5h6.4v45.4Z"/>
          <path class="st0" d="M43.8,46.5c-3.8,0-6.1-3.6-6.1-8.3V9.8C37.7,4.7,39.5,0,45.6,0h1.2c6.9,0,7.6,4.8,7.6,10.2v4.6h-6.2v-5.1c0-2-.5-3.1-2-3.1s-2,1-2,3.1v26.5c0,2.1.7,3.2,2.1,3.2s2.4-1.2,2.4-2.9v-11.3h-2.9v-7h9v27.6h-3.6c0-.2-.6-2.5-1.1-4.5-.5,1.5-2.6,5.1-5.8,5.1h-.5Z"/>
          <path class="st0" d="M93.3.5v6.6h-5.4v38.8h-6.4V7.1h-5.4V.5h17.2Z"/>
          <path class="st0" d="M97.3,45.3h-3.1v-21.9h3.1v21.9Z"/>
          <path class="st0" d="M101.3,23.4l2.6,11.8v-11.7h2.8v21.9h-2.5l-2.9-12.6v12.6h-2.8v-21.9h2.8Z"/>
          <path class="st0" d="M118.7,23.4v3.2h-2.6v18.7h-3.1v-18.7h-2.6v-3.2h8.3,0Z"/>
          <path class="st0" d="M122.6,45.3h-3.1v-21.9h3.1v8.8h2.1v-8.8h3.1v21.9h-3.1v-9.6h-2.1s0,9.6,0,9.6Z"/>
          <path class="st0" d="M136.1,23.4v3.2h-3.9v5.7h3.1v3.3h-3.1v6.3h4.1v3.3h-7.2v-21.9h7,0Z"/>
          <path class="st0" d="M64.1,35c-.9-.6-.9-1.4-.9-1.4-.4-1.3-.8-1.9-1.1-2.4,0,0-.3-.3-.4-.6-.1-.2,0-.3,0-.5.3-.5,1.4.3,1.5.9.2.7.4.8.5.7.4-.4.5-1.3.5-1.8-.2-2.5-.5-3.6.1-3.7.6,0,.6,2.4.8,3.3,0,.3.3.2.3,0,.4-3,.3-4,1-3.9.6.1,0,3.7,0,4.1,0,.3.2.3.3,0,.7-3.1.8-3.4,1.2-3.3.4.1-.2,2.7-.4,3.6,0,.3.1.3.3.2.2-.2.4-.9.7-1.7.2-.6.7-.2.6.1-.3,1-.9,3.2-.9,3.2,0,1-.6,2.3-.6,2.3-.1.2-.3.5-.5.7v10.6h6.7V.5h-6.8v7.7l-.6.5h1.9s-.6,6.4-3.1,11.9V.5h-7.6v45.5h6.7v-10.9Z"/>
        </g>
      </svg>
    </NuxtLink>
    </div>

    <div id="menu" :class="{ active: active }" :ref="registerPulseRef">
      <div id="text_menu">
        <div>menu</div>
        <div>close</div>
      </div>

      <div id="burger" :class="{ active: active }" @click="active = !active">
        <span></span>
        <span></span>
      </div>
    </div>
  </header>

  <div class="navigation" :class="{ active: active }">
    <carosellofilm_nav />
  </div>

  <div id="main">
    <!-- opzionale wrapper interno per .scroll-content -->
    <div class="scroll-content">
    <NuxtPage />
    </div>
  </div>
</template>

<script setup>
useHead({
  link: [
    // Preload immagine LCP (TV)
    {
      rel: 'preload',
      as: 'image',
      href: '/img/webp/tv.webp',
      imagesrcset: '/img/webp/tv.webp',
      type: 'image/webp'
    },
    // Preload poster video (opzionale se vuoi il poster come LCP)
    {
      rel: 'preload',
      as: 'image',
      href: '/img/video/poster.jpg',
      type: 'image/jpeg'
    },
    // Preload del file video
    {
      rel: 'preload',
      as: 'video',
      href: '/img/video/red.mp4',
      type: 'video/mp4'
    }
  ]
})

const { $gsap, $lenis } = useNuxtApp()

// Reactive states
const good = ref(false)
const evil = ref(false)
const status = ref(true)
const neutral = ref(true)

const active = useState('active', () => false)
const preloadCompleted = useState('preload-completed', () => false)

const headerBlend = ref(false)
const isDesktop = ref(true)
let wasDesktop = true
let windowHeight = 0
let baseSize = 20
let hasMouseMoved = false
let prevStatus = null

// Refs
const followerRef = ref(null)
const filterInstructionRef = ref(null)
const discoverPosterRef = ref(null)
const headerRef = ref(null)
const pulseLinksRef = ref([])

// Provide
provide('good', good)
provide('evil', evil)
provide('neutral', neutral)

// === Register dynamic elements ===
function registerPulseRef(el) {
  if (el && !pulseLinksRef.value.includes(el)) {
    pulseLinksRef.value.push(el)
  }
}

// === Follower control ===
function resetFollower() {
  if (!followerRef.value) return
  $gsap.set(followerRef.value, {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    opacity: 0.9,
    width: baseSize,
    height: baseSize,
    scale: 1,
    transform: 'translate(-50%, -50%)',
    force3D: true
  })
}

function resizeFollower(size) {
  if (!followerRef.value || baseSize === size) return
  baseSize = size
  $gsap.to(followerRef.value, {
    width: size,
    height: size,
    duration: 0.4,
    ease: 'power2.out',
  })
}

function moveFollower(x, y) {
  $gsap.to(followerRef.value, {
    x,
    y,
    duration: 0.6,
    ease: 'power3.out',
  })
}

function updateFollowerState(elements) {
  const isPoster = elements.some(el => el.classList?.contains('click_poster') || el.closest('.carousel-container'))
  const isFilter = elements.some(el => el.classList?.contains('element_filter'))
  const isLink = elements.some(el => el.tagName === 'A' || pulseLinksRef.value.includes(el))

  const isInteractive = isPoster || isFilter || isLink
  followerRef.value.classList.toggle('blend-active', isInteractive)

  if (isPoster) {
    resizeFollower(200)
    discoverPosterRef.value?.classList?.add('attivo')
    filterInstructionRef.value?.classList?.remove('attivo')
  } else if (isFilter) {
    resizeFollower(300)
    filterInstructionRef.value?.classList?.add('attivo')
    discoverPosterRef.value?.classList?.remove('attivo')
  } else if (isLink) {
    resizeFollower(40)
    discoverPosterRef.value?.classList?.remove('attivo')
    filterInstructionRef.value?.classList?.remove('attivo')
  } else {
    resizeFollower(20)
    discoverPosterRef.value?.classList?.remove('attivo')
    filterInstructionRef.value?.classList?.remove('attivo')
  }
}

// === Preload ===
function handlePreloadDone() {
  preloadCompleted.value = true
  // Rimuovi questo blocco per evitare attesa dopo preload
  // if (!hasMouseMoved && isDesktop.value && followerRef.value) {
  //   resetFollower()
  // }
}

// === Filters ===
function goodevil() {
  neutral.value = false
  if (status.value) {
    good.value = false
    evil.value = true
  } else {
    good.value = true
    evil.value = false
  }
}

function neutralchose() {
  if (!neutral.value) {
    if (prevStatus === 'good') {
      good.value = true
    } else {
      evil.value = true
    }
  } else {
    prevStatus = good.value ? 'good' : 'evil'
    good.value = false
    evil.value = false
  }
}

// === Event Handlers ===
function updateVH() {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

function handleNavClose() {
  active.value = false
}

function handleMouseMove(e) {
  if (!isDesktop.value) return

  hasMouseMoved = true
  moveFollower(e.clientX, e.clientY)

  // Solo dopo il preload aggiorna stato follower
  if (!preloadCompleted.value) return

  const elements = document.elementsFromPoint(e.clientX, e.clientY)
  updateFollowerState(elements)
}

// === Watchers ===
watch(active, (val) => {
  val ? $lenis?.stop() : $lenis?.start()
})

// === Mounted ===
onMounted(() => {
  if (typeof window === 'undefined') return

  wasDesktop = window.innerWidth >= 1024
  isDesktop.value = wasDesktop
  windowHeight = window.innerHeight

  updateVH()

  if (process.client) {
    window.addEventListener('resize', updateVH)
    window.addEventListener('nav:close', handleNavClose)
    document.addEventListener('mousemove', handleMouseMove)
  }

  resetFollower()

  let resizeTimeout2 = null

  window.addEventListener('resize', () => {
    const nowDesktop = window.innerWidth >= 1024
    windowHeight = window.innerHeight

    clearTimeout(resizeTimeout2)
    resizeTimeout2 = setTimeout(() => {
      $gsap.ScrollTrigger?.refresh()
    }, 250)

    if (!wasDesktop && nowDesktop && followerRef.value) {
      resetFollower()
    }

    isDesktop.value = nowDesktop
    wasDesktop = nowDesktop
  })

  $gsap.ticker.add(() => {
    if (!preloadCompleted.value) return
    const scrollTop = $lenis?.targetScroll ?? 0
    headerBlend.value = isDesktop.value
      ? scrollTop > windowHeight
      : scrollTop > 200
  })
})

// === Cleanup ===
onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', updateVH)
    window.removeEventListener('nav:close', handleNavClose)
    document.removeEventListener('mousemove', handleMouseMove)
  }
})
</script>


