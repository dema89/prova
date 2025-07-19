import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Draggable from 'gsap/Draggable'
import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) return

  const mainEl = document.querySelector('#main')
  const contentEl = mainEl.querySelector('.scroll-content') || mainEl

  const lenis = new Lenis({
    wrapper: mainEl,
    content: contentEl,
    smooth: true,
    lerp: 0.05,
     gestureOrientation: 'vertical',
  normalizeWheel: true

  })

  gsap.registerPlugin(ScrollTrigger, Draggable)
  gsap.ScrollTrigger = ScrollTrigger

  // 🔧 ScrollTrigger + Lenis sync
  ScrollTrigger.scrollerProxy(mainEl, {
    scrollTop(value) {
      return arguments.length
        ? lenis.scrollTo(value, { immediate: true })
        : lenis.scroll
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
    },
    pinType: getComputedStyle(mainEl).transform !== 'none' ? 'transform' : 'fixed'
  })

  function raf(time) {
    lenis.raf(time)
    ScrollTrigger.update()
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  window.addEventListener('resize', () => {
    ScrollTrigger.refresh()
  })

  // Page transitions hook
  nuxtApp.hook('page:transition', () => lenis.scrollTo(0))
  nuxtApp.hook('page:transition:leave', () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  })
  nuxtApp.hook('page:transition:finish', () => {
    ScrollTrigger.refresh()
  })

  return {
    provide: { lenis, gsap, Draggable }
  }
})
