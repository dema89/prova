<template>
  <section :id="'carousel2'" class="carous carous_nav_comp" ref="containerR" @mousemove="handleMouseMove">
    <div id="navigation_total">
      <div>
        <NuxtLink class="link_nav" to="/" data-title="Home">
          <div class="word">GO TO Home</div>
          <div class="word">GO TO Home</div>
        </NuxtLink>
      </div>
    </div>

    <div id="cont_slider_nav">
      <div class="title_others">
        <div class="split_2 default attivo" :ref="titleSchede('other')">
          [ <span>Hover on</span> <span>Posters</span> ]
        </div>

        <div
          v-for="(title, index) in movies"
          :key="title.id"
          :ref="titleSchede(title.nome)"
          v-html="'[ ' + title.titolo + ' ]'"
          class="split_2"
          :class="title.nome"
        ></div>
      </div>

      <div class="carousel-container sl">
        <div @mouseleave="reseTileposter">
          <div class="carousel" ref="carouselR" @mouseleave="attivaTitolo('other')">
            <div class="carousel-spacer"></div>

            <div
              v-for="(movie, index) in movies"
              :key="movie.id"
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
                <img loading="lazy" decoding="async"  :alt="movie.nome" :src="`/img/${movie.prev}`" />
                <img loading="lazy" decoding="async"  :alt="movie.nome" :src="`/img/${movie.prev2}`" class="poster_sovrapposto" />
              </div>
            </div>

            <div class="carousel-spacer"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCarouselController } from '@/composables/carosello_poster_film.js'

const carouselId = 'carousel2'

const containerR = ref(null)
const carouselR = ref(null)
const schedeRefs = ref([])
const movieRefsLink = ref({})
const singleTitle = ref({})
const srcFilm = ref('')

const good = inject('good')
const evil = inject('evil')
const neutral = inject('neutral')

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
  mobileHighlightIndex,
  draggedOnce,
  resetToFirstPoster
} = useCarouselController({
  containerR,
  carouselR,
  schedeRefs,
  movieRefsLink,
  singleTitle,
  srcFilm,
  carouselId
})

defineExpose({
  resetToFirstPoster
})
</script>