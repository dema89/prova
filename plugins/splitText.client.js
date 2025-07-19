import SplitType from 'split-type'

export default defineNuxtPlugin((nuxtApp) => {
  // Split animazione su scroll
  nuxtApp.provide('splitTextAnimation', async (elements) => {
    if (!Array.isArray(elements)) return;

    for (const el of elements) {
      if (!(el instanceof HTMLElement)) continue;

      await nextTick();

      new SplitType(el, { types: 'words, chars' });
      el.style.opacity = '1';
      el.style.visibility = 'visible';

      const chars = el.querySelectorAll('.char');
      if (!chars.length) continue; // 🛡️ protezione

      nuxtApp.$gsap.from(chars, {
        scrollTrigger: {
          trigger: el,
          scroller: '#main',
          start: '0% 80%',
          toggleActions: 'play none none none',
        },
        y: '120%',
        opacity: 0,
        duration: 1,
        stagger: { amount: 0.5 },
        ease: 'power3.out',
      });
    }
  });

  // Split animazione immediata (senza scrollTrigger)
  nuxtApp.provide('splitTextAnimationImmediate', async (elements) => {
    if (!Array.isArray(elements)) return;

    for (const el of elements) {
      if (!(el instanceof HTMLElement)) continue;

      await nextTick();

      new SplitType(el, { types: 'words, chars' });
      el.style.opacity = '1';
      el.style.visibility = 'visible';

      const chars = el.querySelectorAll('.char');
      if (!chars.length) continue;

      nuxtApp.$gsap.from(chars, {
        y: '120%',
        opacity: 0,
        duration: 1,
        stagger: { amount: 0.5 },
        ease: 'power3.out',
      });
    }
  });
});
