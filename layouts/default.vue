<template>

    <div id="mouse-follower" ref="followerRef">
    <div id="discover_poster" ref="discoverPosterRef">Discover Poster</div>
    <div id="filter_instruction" ref="filterInstructionRef">
      <div class="neutral-text"><span>Active</span> <span>the Good / Evil</span> filter</div>
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

  <header id="header" ref="headerRef" :class="[{ header_blend: headerBlend }, { active: active }, navClass]">
    <div></div>
    <div class="logo" :ref="registerPulseRef" :class="{ active: active }">
    <NuxtLink class="link_nav" to="/"  data-title="Home">
       
      <svg  xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 149 96">
 
       <path class="st0" d="M164.2-376.7"/>
  <g>
    <path class="st0" d="M1.5,49.9h9.6c5.4,0,7.1,3.3,7.1,8.6v27.2c0,5.5-1.9,8.9-7.1,8.9H1.5v-44.7h0ZM7.8,88.1h1.5c2,0,2.5-1.1,2.5-3.4v-25.2c0-2.6-.6-3.4-2.2-3.4h-1.8s0,32.1,0,32.1Z"/>
    <path class="st0" d="M30.2,86.2h-4.6l-.8,8.4h-5.6l5.1-44.7h7.5l5.4,44.7h-6.1l-.8-8.4h0ZM26.1,79.5h3.2l-1.7-16.5s-1.6,16.5-1.6,16.5Z"/>
    <path class="st0" d="M44.5,94.6h-6.3v-44.7h10.2c4.2,0,6.3,1.9,6.3,6.9v8c0,3.7-1.6,5.2-2.8,5.7,1.4.7,2.8,1.8,2.8,4.8v15.6c0,1.9.3,2.7.6,3.3v.3h-6.2c-.3-.5-.6-1.3-.6-3.6v-13.5c0-2-.3-2.9-2.4-2.9h-1.6v20h0ZM44.5,68.3h1.7c1.8,0,2.3-1.2,2.3-3.1v-6.2c0-2-.3-2.9-2.3-2.9h-1.7v12.3h0Z"/>
    <path class="st0" d="M63.4,94.6h-6.3v-44.7h6.3v17.9l4.9-17.9h6.1l-5.9,20.8,6.5,23.9h-6.5l-5.2-19.4v19.4h0Z"/>
    <path class="st0" d="M109.4,56.4h-8.1v11.7h6.3v6.8h-6.3v12.9h8.4v6.8h-14.7v-44.7h14.4v6.5Z"/>
    <path class="st0" d="M81.9,49.9l5.4,23.9v-23.9h5.7v44.7h-5.1l-6-25.7v25.7h-5.7v-44.7s5.7,0,5.7,0Z"/>
    <path class="st0" d="M120.9,49.5c5.2,0,7.2,2.5,7.2,7.8v7.3h-6.1v-6.4c0-1.5-.3-2.7-1.8-2.7s-1.9,1-1.9,3.1v.9c0,2.6.5,3.9,2.6,6.9l4,5.6c2.9,3.9,3.7,6.2,3.7,11.3v1.5c0,6.6-2.6,10.4-8.2,10.4h-1.2c-5.1,0-7.7-3-7.7-8.5v-9h6.2v7.8c0,2.1.7,3.1,2.1,3.1s2.1-1,2.1-3.8v-1c0-3.2-.3-4.2-2.6-7.5l-4-5.5c-2.7-3.7-3.4-6.6-3.4-11v-1.5c0-6,2.8-8.7,7.8-8.7h1.2v-.3Z"/>
    <path class="st0" d="M139.7,49.5c5.2,0,7.2,2.5,7.2,7.8v7.3h-6.1v-6.4c0-1.5-.3-2.7-1.8-2.7s-1.9,1-1.9,3.1v.9c0,2.6.5,3.9,2.6,6.9l4,5.6c2.9,3.9,3.7,6.2,3.7,11.3v1.5c0,6.6-2.6,10.4-8.2,10.4h-1.2c-5.1,0-7.7-3-7.7-8.5v-9h6.2v7.8c0,2.1.7,3.1,2.1,3.1s2.1-1,2.1-3.8v-1c0-3.2-.3-4.2-2.6-7.5l-4-5.5c-2.7-3.7-3.4-6.6-3.4-11v-1.5c0-6,2.8-8.7,7.8-8.7h1.2v-.3Z"/>
    <path class="st0" d="M20.1,1.1v37.8h7.7v6.9h-14V1.1s6.3,0,6.3,0Z"/>
    <path class="st0" d="M36,45.8h-6.3V1.1h6.3v44.7Z"/>
    <path class="st0" d="M44.3,46.4c-3.7,0-6-3.5-6-8.2V10.3c0-5,1.8-9.6,7.8-9.6h1.2c6.8,0,7.5,4.7,7.5,10v4.5h-6.1v-5c0-2-.5-3.1-2-3.1s-2,1-2,3.1v26.1c0,2.1.7,3.1,2.1,3.1s2.4-1.2,2.4-2.9v-11.1h-2.9v-6.9h8.9v27.2h-3.5c0-.2-.6-2.5-1.1-4.4-.5,1.5-2.6,5-5.7,5h-.5Z"/>
    <path class="st0" d="M93.1,1.1v6.5h-5.3v38.2h-6.3V7.6h-5.3V1.1h16.9Z"/>
    <path class="st0" d="M97,45.2h-3.1v-21.6h3.1v21.6Z"/>
    <path class="st0" d="M100.9,23.7l2.6,11.6v-11.5h2.8v21.6h-2.5l-2.9-12.4v12.4h-2.8v-21.6h2.8Z"/>
    <path class="st0" d="M118.1,23.7v3.1h-2.6v18.4h-3.1v-18.4h-2.6v-3.1h8.2,0Z"/>
    <path class="st0" d="M121.9,45.2h-3.1v-21.6h3.1v8.7h2.1v-8.7h3.1v21.6h-3.1v-9.4h-2.1s0,9.4,0,9.4Z"/>
    <path class="st0" d="M135.2,23.7v3.1h-3.8v5.6h3.1v3.2h-3.1v6.2h4v3.2h-7.1v-21.6h6.9,0Z"/>
    <path class="st0" d="M67,1.1v7.6l-.6.5h1.9s-.6,6.3-3.1,11.7h0V1.1h-7.5v44.7h6.6c0-3.2,0-8.1,0-9.8h0v-.2h0l-.2-.2c-.4-.5-.7-1.1-1-1.7-.2-.3-.3-.6-.6-.9-.2-.3-.4-.5-.7-.8l-.3-.3s0,0-.2-.2c0,0-.2-.3-.3-.4,0-.4.4-.5.7-.4.2,0,.4,0,.6.3.4.3.6.9,1,1.2,0-.2,0-.4-.2-.6,0-.5-.7-4.4-.6-4.8,0,0,0-.2,0-.3h0v.2c0,.5.3,1,.4,1.5,0,.4.2.8.3,1.1,0,0,.2.4.2.5h0c0-.5,0-2.5.2-3.3,0-.5,0-1.2.4-1.5h0c.4-.3.5.5.6.8,0,.7,0,3,0,3.3v.5h0v-.2c0-.2,0-.5.2-.7,0-.5.7-2.2.9-2.6,0-.2.2-.4.3-.6,0-.2.3-.4.5-.4.3,0,.3.4.2.7v.5c0,.2,0,.5,0,.7,0,.5-.5,2.3-.6,2.7v.3h0c.2,0,1.2-1.8,1.5-2.1,0,0,0,0,0-.2h0c0,0,.4-.3.5,0,0,0,0,0,0,.2h0v.2h0v.2h0v.2h0c0,.4-.3.7-.5,1-.2.4-.4.8-.5,1.2,0,.2,0,.4-.2.7v.8c0,.5,0,1-.3,1.5,0,.4-.3.7-.5,1,0,.4-.3,6.6,0,10.6h7.4V1.1h-7.5.8Z"/>
  </g>
      </svg>
    </NuxtLink>
    </div>

    <div id="cont_menu" :class="navClass">
      <a role="button" id="menu" :class="{ active: active }" :ref="registerPulseRef" @click="active = !active">
        <div id="text_menu">
          <div>menu</div>
          <div>close</div>
        </div>

        <div id="burger" :class="{ active: active }">
          <span></span>
          <span></span>
        </div>
      </a>
    </div>
    
  </header>

  <div class="navigation" :class="{ active: active }">
    <carosellofilm_nav />
  </div>

  <div id="main" class="lenis" :class="{ active: active }">
    <!-- opzionale wrapper interno per .scroll-content -->
    <div class="scroll-content">
      <NuxtPage />
    </div>

    <footer id="footer">
      <div id="footer_centro">
        <div>
          <svg viewBox="0 0 445 258" fill="none" >
            <path d="M35.3456 3.37695V215.672H78.4904V254.391H0V3.37695H35.4009H35.3456Z" fill="white"/>
            <path d="M124.346 254.391H88.9447V3.37695H124.346V254.391Z" fill="white"/>
            <path d="M171.362 257.706C150.343 257.706 137.621 237.793 137.621 211.796V54.7597C137.621 26.5496 147.577 0.607422 181.319 0.607422H187.957C226.123 0.607422 229.995 27.1581 229.995 56.9722V82.4166H195.7V54.2065C195.7 43.1438 192.935 37.0593 184.638 37.0593C177.447 37.0593 173.575 42.5906 173.575 54.2065V200.733C173.575 212.349 177.447 218.433 185.191 218.433C194.041 218.433 198.466 211.796 198.466 202.392V139.943H182.425V101.223H232.208V253.834H212.295C212.295 252.728 208.976 240.006 206.21 228.943C203.444 237.24 191.828 257.153 174.128 257.153H171.916L171.362 257.706Z" fill="white"/>
            <path d="M445 3.37695V39.8841H415.13V254.391H379.73V39.8841H349.86V3.37695H444.945H445Z" fill="white"/>
            <path d="M283.428 194.597C278.671 191.278 278.284 187.019 278.284 187.019C275.795 180.049 273.693 176.233 272.144 173.965C272.089 173.854 270.595 172.14 269.876 170.923C269.323 170.038 269.378 169.484 269.876 168.378C271.37 165.336 277.399 170.148 278.395 173.633C279.39 177.284 280.497 178.003 281.216 177.284C283.483 175.126 284.203 169.982 283.981 167.438C282.709 153.72 281.105 147.414 284.59 147.248C287.632 147.082 287.964 160.247 289.07 165.778C289.402 167.383 290.73 166.719 290.785 166.166C292.776 149.35 292.278 143.764 296.095 144.538C299.248 145.146 295.818 165.115 295.597 166.995C295.376 168.876 296.814 168.489 297.035 167.383C300.741 150.291 301.239 148.355 303.728 149.295C305.83 150.125 302.567 164.119 301.682 168.987C301.35 170.646 302.401 170.812 303.175 170.148C304.447 169.042 305.222 164.949 306.992 160.966C308.375 157.924 311.085 159.805 310.532 161.685C308.928 167.051 305.443 179.386 305.443 179.386C305.222 184.862 302.346 192.163 302.346 192.163C301.682 193.546 300.741 194.929 299.414 196.035V254.889H336.308L336.087 3.43227H298.474V46.0239L295.155 48.7896H305.664C305.664 48.7896 302.346 84.1905 288.517 114.558V3.37695H246.479V254.834H283.373V194.652L283.428 194.597Z" fill="white"/>
          </svg>
        </div>

        <div><p>This is an independent, non-commercial artistic project created as a fan tribute to the history of horror cinema. The characters and visual elements were entirely generated using Artificial Intelligence and are original creations, not reproductions of actors, scenes, or official materials from the films. This work is not associated with, endorsed by, or licensed by any copyright or trademark holders. It is intended solely as an artistic homage.</p></div>
        
        <div>
          <svg viewBox="0 0 252 133" fill="none">
            <path d="M18.5646 131.766H0V0.675781H18.5646V131.766Z" fill="white"/>
            <path d="M42.519 0.675781L58.0894 71.2813V1.27464H74.8574V132.365H59.8859L42.519 56.9686V132.365H25.751V1.27464H42.519V0.675781Z" fill="white"/>
            <path d="M146.661 0.675781V19.8393H131.09V131.766H112.526V19.8393H96.9553V0.675781H146.661Z" fill="white"/>
            <path d="M170.016 131.766H151.451V0.675781H170.016V53.3754H182.592V0.675781H201.157V131.766H182.592V74.2756H170.016C170.016 74.2756 170.016 131.766 170.016 131.706V131.766Z" fill="white"/>
            <path d="M250.802 0.679599V19.8431H227.447V53.9781H246.011V73.7404H227.447V111.469H252V131.231H208.882V0.140625H250.802V0.739487V0.679599Z" fill="white"/>
            </svg>
        </div>

        <div>
            <div>
              <h3>project partners</h3>
              <ul id="partner">
                <li><img alt="Kartì - Tipografia Modica" src="/img/karti.png"></li>
                <li><img alt="Studio Irregolare - Agenzia di comunicazione Catania" src="/img/irregolare.png"></li>
                <li><img alt="Adaptive - AI Design Research by Studio K95" src="/img/adaptive.png"></li>
              </ul>
            </div>
        </div>

        <div>
         <svg version="1.1" viewBox="0 0 828 260" fill="#fff">
 
  
  <path class="st0" d="M0,2.8h54.6c30.7,0,40.2,19,40.2,48.5v153.9c0,31.2-10.6,50.2-40.2,50.2H0V2.2v.6h0ZM35.7,219.1h8.4c11.2,0,13.9-6.1,13.9-19.5V56.8c0-14.5-3.3-19.5-12.3-19.5h-10v181.8h0Z"/>
  <path class="st0" d="M162.3,208.5h-26.2l-4.5,47.4h-31.8L128.8,2.7h42.4l30.7,253.2h-34.6l-4.5-47.4h-.6ZM139.4,170.6h18.4l-9.5-93.7-8.9,93.7Z"/>
  <path class="st0" d="M243.7,256h-35.7V2.7h58c24,0,35.7,10.6,35.7,39.1v45.2c0,21.2-8.9,29.6-15.6,32.4,7.8,3.9,15.6,10,15.6,27.3v88.7c0,10.6,1.7,15.1,3.3,19v1.7h-35.2c-1.7-2.8-3.3-7.3-3.3-20.6v-76.4c0-11.2-1.7-16.2-13.4-16.2h-8.9v113.2h-.6,0ZM243.7,107h9.5c10,0,12.8-6.7,12.8-17.9v-35.2c0-11.2-1.7-16.2-12.8-16.2h-9.5v69.7-.6h0Z"/>
  <path class="st0" d="M350.8,256h-35.7V2.7h35.7v101.5L378.7,2.7h34.6l-33.5,117.7,36.8,135.5h-36.8l-29.6-109.9v109.9h.6Z"/>
  <path class="st0" d="M613.1,39.6h-45.8v66.3h35.7v38.5h-35.7v73h47.4v38.5h-83.1V2.7h81.4v36.8Z"/>
  <path class="st0" d="M676.5.5c29.6,0,40.7,13.9,40.7,44.1v41.3h-34.6v-36.3c0-8.4-1.7-15.1-10-15.1s-10.6,5.6-10.6,17.9v5c0,14.5,2.8,22.3,14.5,39.1l22.9,31.8c16.2,22.3,21.2,35.2,21.2,64.1v8.4c0,37.4-14.5,59.1-46.3,59.1h-6.7c-29,0-43.5-16.7-43.5-48v-50.8h35.2v44.1c0,11.7,3.9,17.9,11.7,17.9s11.7-5.6,11.7-21.8v-5.6c0-18.4-1.7-24-14.5-42.4l-22.9-31.2c-15.1-21.2-19.5-37.4-19.5-62.4v-8.4c0-34,15.6-50.8,44.1-50.8h6.7Z"/>
  <path class="st0" d="M783,.5c29.6,0,40.7,13.9,40.7,44.1v41.3h-34.6v-36.3c0-8.4-1.7-15.1-10-15.1s-10.6,5.6-10.6,17.9v5c0,14.5,2.8,22.3,14.5,39.1l22.9,31.8c16.2,22.3,21.2,35.2,21.2,64.1v8.4c0,37.4-14.5,59.1-46.3,59.1h-6.7c-29,0-43.5-16.7-43.5-48v-50.8h35.2v44.1c0,11.7,3.9,17.9,11.7,17.9s11.7-5.6,11.7-21.8v-5.6c0-18.4-1.7-24-14.5-42.4l-22.9-31.2c-15.1-21.2-19.5-37.4-19.5-62.4v-8.4c0-34,15.6-50.8,44.1-50.8h6.7Z"/>
  <path class="st0" d="M458,2.7l30.7,135.5V2.7h32.4v253.2h-29l-34-145.6v145.6h-32.4V2.7h32.4Z"/>
</svg>

        </div>
      </div>

      <div id="header_footer">
        <div><img alt="Studio K95 - Deisgn di comunicazione e grafica Catania" src="/img/k95_logo.png" loading="lazy" decoding="async"></div>
        <div><NuxtLink class="link_nav" to="/PRIVACY" data-title="Privacy">PRIVACY & COOKIES POLICY</NuxtLink></DIV>
        <div><a target="_blank" href="https://www.instagram.com/k95.studio/@K95.studio">INSTAGRAM</a></div>
        <div><a target="_blank" href="https://www.linkedin.com/company/studio-k95">LINKEDIN</a></div>
        <div>@2025</div>
      </div>
    </footer>
  </div>

 
</template>



<script setup>
useHead({
  link: [
    { rel: 'preload', as: 'font', href: '/fonts/drukbold.woff2', type: 'font/woff2', crossorigin: '' },
    { rel: 'preload', as: 'font', href: '/fonts/adaptive.woff2', type: 'font/woff2', crossorigin: '' }
  ]
})

const route = useRoute()
const navClass = computed(() => route.meta.navClass || '')

const { $gsap, $lenis } = useNuxtApp()

// === Sizes centralizzate ===
const SIZE = { base: 20, link: 40, poster: 300 }

// Reactive states
const good = ref(false)
const evil = ref(false)
const status = ref(false)
const neutral = ref(true)

const active = useState('active', () => false)
const preloadCompleted = useState('preload-completed', () => false)

const headerBlend = ref(false)
const isDesktop = ref(true)
let wasDesktop = true
let windowHeight = 0
let baseSize = SIZE.base
let hasMouseMoved = false
let prevStatus = null

const followerRef = ref(null)
const filterInstructionRef = ref(null)
const discoverPosterRef = ref(null)
const headerRef = ref(null)
const pulseLinksRef = ref([])

provide('good', good)
provide('evil', evil)
provide('neutral', neutral)

function registerPulseRef(el) {
  if (el && !pulseLinksRef.value.includes(el)) {
    pulseLinksRef.value.push(el)
  }
}

function resetFollower() {
  if (!followerRef.value) return
  $gsap.set(followerRef.value, {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    opacity: 0.9,
    width: SIZE.base,
    height: SIZE.base,
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
    duration: 0.8,
    ease: 'power2.out',
  })
}

function updateFollowerState(elements) {
  const follower = followerRef.value
  if (!follower) return


  follower.className = 'mouse-follower-base'


  if (good.value) {
    follower.classList.add('good')
  } else if (evil.value) {
    follower.classList.add('evil')
  } else {
    follower.classList.add('neutral')
  }

  let isPoster = false
  let goodClass = null
  let evilClass = null

  for (const el of elements) {
    const posterEl = el.closest?.('.immagine_film')
    if (posterEl) {
      isPoster = true
      goodClass = posterEl.dataset.colorGood || null
      evilClass = posterEl.dataset.colorEvil || null
      break
    }
    const posterFullEl = el.closest?.('#cont_poster_full')
    if (posterFullEl) {
      isPoster = true
      goodClass = posterFullEl.dataset.colorGood || null
      evilClass = posterFullEl.dataset.colorEvil || null
      break
    }
  }

  if (isPoster) {
    if (good.value && goodClass) follower.classList.add(goodClass)
    else if (evil.value && evilClass) follower.classList.add(evilClass)
  }


  const insideSlider = elements.some(el => el.closest?.('.sl'))
  const isFilter = elements.some(el => el.classList?.contains('element_filter'))
  const insideHeader = elements.some(el => el.closest?.('header'))
  const insideLogoOrMenu = elements.some(el => el.closest?.('.logo') || el.closest?.('#menu') || el.closest?.('.filters'))

 
  const onNuxtLink = elements.some(el => el.closest?.('a, .nuxt-link, .link_nav'))

 
  if (insideHeader && !insideLogoOrMenu && !isPoster && !isFilter) {
    follower.classList.remove('blend-active')
    resizeFollower(SIZE.base)
    discoverPosterRef.value?.classList.remove('attivo')
    filterInstructionRef.value?.classList.remove('attivo')
    return
  }

  if (insideSlider || isPoster) {
    follower.classList.add('blend-active')
    resizeFollower(SIZE.poster)
    if (isPoster) {
      discoverPosterRef.value?.classList.add('attivo')
      filterInstructionRef.value?.classList.remove('attivo')
    }
  } else if (isFilter) {
    follower.classList.add('blend-active')
    resizeFollower(SIZE.poster)
    filterInstructionRef.value?.classList.add('attivo')
    discoverPosterRef.value?.classList.remove('attivo')
  } else if (insideLogoOrMenu || onNuxtLink) {
    // Burger/Logo/Menu **e** NuxtLink: stesso comportamento
    follower.classList.add('blend-active')
    resizeFollower(SIZE.link)
    discoverPosterRef.value?.classList.remove('attivo')
    filterInstructionRef.value?.classList.remove('attivo')
  } else {
    follower.classList.remove('blend-active')
    resizeFollower(SIZE.base)
    discoverPosterRef.value?.classList.remove('attivo')
    filterInstructionRef.value?.classList.remove('attivo')
  }
}

// === Preload ===
function handlePreloadDone() {
  preloadCompleted.value = true
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
    if (prevStatus === 'good') good.value = true
    else evil.value = true
  } else {
    prevStatus = good.value ? 'good' : 'evil'
    good.value = false
    evil.value = false
  }
}

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

  if (!preloadCompleted.value) return
  const elements = document.elementsFromPoint(e.clientX, e.clientY)
  updateFollowerState(elements)
}

watch(active, (val) => {
  val ? $lenis?.stop() : $lenis?.start()

  if (val && window.innerWidth <= 1280) {
    const navComp = document.querySelector('.carous_nav_comp')
    if (navComp && navComp.__vueParentComponent) {
      navComp.__vueParentComponent.exposed?.resetToFirstPoster?.()
    }
  }
})

function fadeInLazyImages() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]')
  lazyImages.forEach((img) => {
    if (img.closest('#ispiration-section')) return
    if (!img.complete) $gsap.set(img, { opacity: 0 })
    img.addEventListener('load', () => {
      $gsap.to(img, { opacity: 1, duration: 0.6, ease: 'power2.out' })
    })
  })
}

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
  fadeInLazyImages()

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
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', updateVH)
    window.removeEventListener('nav:close', handleNavClose)
    document.removeEventListener('mousemove', handleMouseMove)
  }
})
</script>
