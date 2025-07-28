<template>
  <section :id="'carousel1'" class="carous" ref="containerR" @mousemove="handleMouseMove" >
    <div class="carousel-container">
      <div @mouseleave="reseTileposter">
        <div class="carousel sl" ref="carouselR" @mouseleave="attivaTitolo('other')">

          <div class="carousel-spacer"></div>

          <div
            v-for="(movie, index) in movies"
            class="cont_poster_car"
             :class="{

  highlight:
  isMobile
    ? index === (draggedOnce ? activePosterIndex : 0)
    : index === activePosterIndex || index === hoveredPosterIndex,

dimmed:
  isMobile
    ? index !== (draggedOnce ? activePosterIndex : 0)
    : (hoveredPosterIndex !== null && index !== hoveredPosterIndex) ||
      (hoveredPosterIndex === null &&
       activePosterIndex !== -1 &&
       index !== activePosterIndex),

  // Marker per targeting CSS (non visivo)
  'is-current-page': index === currentPagePosterIndex
}"
            :key="movie.id"
            :ref="addSchedaRef"
            @mouseover="!isMobile && (setHoveredPoster(index), attivaTitolo(movie.nome))"
            @touchstart="isMobile && attivaTitolo(movie.nome)"
          >
            <NuxtLink
              :ref="setRef(movie.nome)"
              :href="`/film/${movie.nome}`"
              class="click_poster"
              :data-title="movie.titolo.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()"
            >
              <span>VIEW POSTER</span>
            </NuxtLink>
            <div class="immagine_film" :class="movie.datacolor, movie.datacolor2,  { good: good, evil: evil, neutral: neutral }" :data-color-good="movie.datacolor" :data-color-evil="movie.datacolor2">
                 <img loading="lazy" decoding="async"  :alt="movie.nome"  v-if="movie?.poster" :src="`/img/${movie.prev}`" />
                <img loading="lazy" decoding="async"  :alt="movie.nome"  v-if="movie?.poster2" :src="`/img/${movie.prev2}`" class="poster_sovrapposto" />
            </div>
          </div>

          <div class="carousel-spacer"></div>
        </div>
      </div>
    </div>

    <div class="title_others">
      <div class="split_2 default attivo" :ref="titleSchede('other')">
        <span>ALL</span><span>Posters</span>
      </div>

      <div
        v-for="(title, index) in movies"
        :key="title.id"
        :ref="titleSchede(title.nome)"
        v-html="title.titolo"
        class="split_2"
        :class="title.nome"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { useCarouselController } from '@/composables/carosello_poster_film.js'

const containerR = ref(null)
const carouselR = ref(null)
const schedeRefs = ref([])
const movieRefsLink = ref({})
const singleTitle = ref([])
const srcFilm = ref('')

const good = inject('good')
const evil = inject('evil')
const neutral = inject('neutral')

// ✅ IMPORTANTE: mobileHighlightIndex ora incluso nel composable
const {
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
  setHoveredPoster,
  resetHoveredPoster,
  draggedOnce,
  mobileHighlightIndex
} = useCarouselController({
  containerR,
  carouselR,
  schedeRefs,
  movieRefsLink,
  singleTitle,
  srcFilm,
  carouselId: 'carousel1'
})
</script>
