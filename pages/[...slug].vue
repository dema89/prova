<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page not found: {{ $route.fullPath }}</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch, watchEffect, onUnmounted, inject } from 'vue'
import { useRoute } from '#app'

const { $gsap, $movies, $splitTextAnimation, $splitTextAnimationImmediate, $lenis } = useNuxtApp()
const { params } = useRoute()

definePageMeta({
  layout: false // se vuoi una pagina senza layout
})
</script>