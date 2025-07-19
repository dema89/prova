<template>
  <div id="page">
    <section id="cont_schede" class="schede_page" ref="heroRef">
      <div class="scheda fix page">
        <div class="immagine_film_page">
          <img id="cover_img" fetchpriority="high" :src="movieDetails.cover" />
           <img id="cover_img_blend" fetchpriority="high" :src="movieDetails.cover2" />
          <h1 id="titolo_p_film" v-html="movieDetails.titolo" class="split"></h1>
          <a href="#" id="scroll_down">
            <svg width="10" height="27" viewBox="0 0 10 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M3.92449 -4.83788e-08L3.86728 19.3292L-1.14844e-06 19.3732L4.81693 27L10 19.3181L5.85812 19.3402L5.91533 0.0110229L3.92449 -4.83788e-08Z"
                fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <section class="text_film">
      <div id="data_poster">
        <div>
          <h2 :ref="setRef('sottotitolo')">{{ movieDetails.sottotitolo }}</h2>
          <ul>
            <li><label>Director</label> {{ movieDetails.regista }}</li>
            <li><label>Year</label> {{ movieDetails.anno }}</li>
            <li><label>Product house</label> {{ movieDetails.casa }}</li>
            <li>
              <NuxtLink href="/">Home</NuxtLink>
            </li>
          </ul>
        </div>
        <div v-html="movieDetails.descrizione_1"></div>
      </div>

      <div id="cont_poster" ref="container" @mouseenter="onMouseEnterHandler" @mouseleave="onMouseLeaveHandler" @mousemove="onMouseMoveHandler">
        <img width="512" height="725" :alt="movieDetails.titolo" loading="lazy" ref="inner" :src="movieDetails.poster" />
        <div id="light-spot" ref="lightSpot"></div>
      </div>
    </section>

    <Carosellofilm />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import SplitType from "split-type";

const { $gsap, $splitTextAnimation, $movies } = useNuxtApp();
const { params } = useRoute();

const movies = ref([]);
const movieDetails = ref({});
const movieRefs = ref({});

const container = ref();
const inner = ref();
const lightSpot = ref();

const nome = params.nome;

// Raccolta dinamica degli elementi da animare
const setRef = (key) => {
  return (el) => {
    if (el) {
      movieRefs.value[key] = el;
    }
  };
};

// Mouse effect per effetto 3D sul poster
const mouse = ref({
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition(event) {
    const e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
  },
  setOrigin(el) {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    this._x = rect.left + rect.width / 2;
    this._y = rect.top + rect.height / 2;
  },
});

let counter = 0;
const updateRate = 10;
const isTimeToUpdate = () => counter++ % updateRate === 0;

const updateTransformStyle = (x, y) => {
  if (!inner.value || !lightSpot.value) return;

  const style = `rotateX(${x}deg) rotateY(${y}deg)`;
  inner.value.style.transform = style;

  const lightX = Math.min(Math.max(50 + y * 50, 10), 90);
  const lightY = Math.min(Math.max(50 - x * 50, 10), 90);

  lightSpot.value.style.left = `${lightX}%`;
  lightSpot.value.style.top = `${lightY}%`;
  lightSpot.value.style.opacity = 1;

  inner.value.style.boxShadow = `${-y * 20}px ${-x * 20}px 80px 5px rgba(255, 0, 0, 0.3)`;
};

const update = (event) => {
  mouse.value.updatePosition(event);
  const x = (mouse.value.y / inner.value.offsetHeight / 2).toFixed(2);
  const y = (mouse.value.x / inner.value.offsetWidth / 2).toFixed(2);
  updateTransformStyle(x, y);
};

const onMouseEnterHandler = (event) => {
  mouse.value.setOrigin(container.value);
  update(event);
};

const onMouseLeaveHandler = () => {
  if (inner.value && lightSpot.value) {
    inner.value.style.transform = "";
    lightSpot.value.style.opacity = 0;
  }
};

const onMouseMoveHandler = (event) => {
  if (isTimeToUpdate()) {
    update(event);
  }
};

// OnMounted
onMounted(async () => {
  mouse.value.setOrigin(container.value);
  movies.value = $movies;

  // Trova dettagli film
  const movie = movies.value.find((movie) => movie.nome === nome);
  movieDetails.value = movie;

  // Scroll animazioni
  $gsap.to("#scroll_down", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#page",
      start: "top top",
      end: "20% top",
      scrub: 1,
    },
  });

  $gsap.to(".immagine_film_page img", {
    y: "100px",
    scrollTrigger: {
      trigger: "#page",
      start: "top top",
      end: "40% top",
      scrub: 1,
    },
  });

  nextTick(() => {
    // H1 con SplitType (manuale, non incluso nel plugin)
    new SplitType("#titolo_p_film", { types: "words, chars" });

    $gsap.to("#titolo_p_film .char", {
      y: 0,
      duration: 0.5,
      stagger: { amount: 0.5 },
    });

    $gsap.to("#titolo_p_film .char", {
      opacity: 0,
      filter: "blur(10px)",
      stagger: { amount: 0.5 },
      scrollTrigger: {
        trigger: "#page",
        start: "5% top",
        end: "30% top",
        scrub: 1,
      },
    });

    /* Split text */
    $splitTextAnimation(Object.values(movieRefs.value));
  });
});
</script>
