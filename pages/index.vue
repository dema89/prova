<template>

  <section id="hero">
    <h1 :ref="addHeroSplitRef"  class="split-text hero_title">
      <div :ref="addHerDou">
        <div>Light</div>
        <div class="small">in the</div>
      </div>
      <div :ref="addHerDou" class="block">Darkness</div>
    </h1>

    <div id="firma" :ref="addHeroSplitRef" class="split-text">
      A project by <a href="k95.it" target="_blank">Studio K95</a>
    </div>

    <div id="filtro" :class="themeClass">
      <div><div></div></div>
    </div>

    <div id="cont_tv">
      <picture>
        <source srcset="/img/webp/tv.webp" type="image/webp">
        <source srcset="/img/tv.png" type="image/png">
        <img id="tv" src="/img/tv.png" alt="TV horror" width="1920" height="1080" fetchpriority="high" decoding="async" />
      </picture>
      
      <video poster="/img/preview.jpg" autoplay muted loop playsinline loading="lazy">
         <source src="/img/video/hero_rossa.webm" type="video/webm" />
        <source src="/img/video/hero_rossa.mp4" type="video/mp4" />
         <source src="/img/video/hero_rossa.ogv" type="video/ogg" />
      </video>

      <video autoplay muted loop playsinline loading="lazy">
        <source src="/img/video/hero_azzurra.webm" type="video/webm" />
        <source src="/img/video/hero_azzurra.mp4" type="video/mp4" />
         <source src="/img/video/hero_azzurra.ogv" type="video/ogg" />
      </video>
    </div>
  </section>


  <div>
    <!-- SECTION ABOUT -->
    <section id="about_cont">

      <div id="used-filter-labels">
        <div>
        <span class="left">USED GOOD / EVIL FILTER</span>
        <span class="right">USED GOOD / EVIL FILTER</span>
        </div>
      </div>

      <div id="about">
        <div class="about-container">

          <h2 class="about-title split-words-only" :ref="addSplitRef">
            Light in the Darkness is a visual exploration of moral ambiguity, set within the haunting atmosphere of horror cinema.
          </h2>

          <div class="about-image" :class="{ good: good, evil: evil, neutral:neutral }">
            <canvas id="image-canvas"  class="element_filter"></canvas>
          </div>

          <div class="about-columns">
           
              <h3>The project presents the eternal conflict between good and evil, not as separate entities but as coexisting forces. Ten posters, ten narratives.</h3>
        

            <div class="column">
              <p>At the center, two characters: one representing light, the other shadow. There are no clear boundaries. Both exist in the same space, within the same visual form.</p>
              <p>It is the viewer who chooses what to see, which side to bring forward. Light in the Darkness does not offer answers. It invites a deeper gaze into the image and into oneself.
               The concept is simple but unsettling: good and evil are not alternating forces, they are simultaneous. They are layered, present at once, and the idea of separating them is as fragile as a reflection.</p>
               <p>Horror is not only an aesthetic here. It is the perfect setting for this tension to unfold, where light is rare and every choice reveals something uncomfortable.</p>
              
            </div>
          </div>
        </div>
      </div>

      <!-- --- DOG SECTION --- -->
      <div id="dog_section">
        <div class="dog-image" ref="dogRef"> 

          <picture>
            <source srcset="/img/webp/dog_red.webp" type="image/webp">
            <source srcset="/img/dog_red.png" type="image/png">
            <img class="dog-red element_filter" src="/img/dog_red.png" alt="Cane rosso" width="906" height="1086" loading="lazy" decoding="async" />
          </picture>

          <picture>
            <source srcset="/img/webp/dog_ciano.webp" type="image/webp">
            <source srcset="/img/dog_ciano.png" type="image/png">
            <img class="dog-cyan element_filter" src="/img/dog_ciano.png" alt="Cane ciano" width="906" height="1086" loading="lazy" decoding="async" />
          </picture>

        </div>

        <div
        ref="dragBallRef"
        :class="['drag-ball', 'mobile-only', { good: good, evil: evil, neutral: neutral }]">
          <span ref="dragLabelRef" class="drag-label">drag me</span>
        </div>
      </div>
    </section>
    
    <!-- STORY SECTION -->
    <section id="story-section">
      <div>
        <h2 class="story-title" :ref="addSplitRef">STORY</h2>
      </div>

      <div id="story-cont">
        <div id="knife-pin">
          <div id="knife-wrapper">
            <canvas id="knife-canvas" ref="knifeCanvas"></canvas>
          </div>  
        </div>

        <section class="story-intro">
          <h3 class="intro-left" :ref="addSplitRef">FROM SHADOWS<br>OF THE PAST</h3>
          <h3 class="intro-right " :ref="addSplitRef" >A JOURNEY THROUGH<br>HORROR CINEMA<br>HISTORY</h3>
        </section>

        <div class="story-blocks">
          
          <div class="story-block" data-index="1">
            <div class="story-media element_filter" :class="{ good: good, evil: evil, neutral:neutral }">
               <picture>
                <source srcset="/img/webp/film_red.webp" type="image/webp">
                <source srcset="/img/film_red.jpg" type="image/jpeg">
                <img src="/img/film_red.jpg" alt="Le Manoir du Diable" loading="lazy" decoding="async" />
              </picture>

              <picture>
                <source srcset="/img/webp/film_cyan.webp" type="image/webp">
                <source srcset="/img/film_cyan.jpg" type="image/jpeg">
                <img class="box_img_blend" src="/img/film_cyan.jpg" alt="Le Manoir du Diable" loading="lazy" decoding="async" />
              </picture>

            </div>

            <div class="story-inner">
              <div class="story-left">
                <span class="story-number">01</span>
              </div>
              <div class="story-right">
                <h3 class="story-title">INTRODUCTION</h3>
                <p class="story-description">
                  The horror genre has deep roots in the history of cinema, beginning with pioneering works that shaped the collective imagination. One of the first significant examples is the French short film "Le Manoir du Diable", created in 1896 by Georges Méliès.
                </p>
                <p class="story-description">
                  This three-minute film is not only considered the first horror movie in history but also introduced fantastic and supernatural elements that would characterize the genre for decades to come. Méliès' mastery of special effects, such as editing and superimpositions, revolutionized the way stories were told on the big screen.
                </p>
              </div>
            </div>
          </div>

       
          <div class="story-block" data-index="2">
            <div class="story-media element_filter" :class="{ good: good, evil: evil, neutral:neutral }">
              <picture>
                <source srcset="/img/webp/dracula_red.webp" type="image/webp">
                <source srcset="/img/dracula_red.jpg" type="image/jpeg">
                <img src="/img/dracula_red.jpg" alt="Dracula" decoding="async" />
              </picture>

              <picture>
                <source srcset="/img/webp/dracula_cyan.webp" type="image/webp">
                <source srcset="/img/dracula_cyan.jpg" type="image/jpeg">
                <img class="box_img_blend" src="/img/dracula_cyan.jpg" alt="Dracula" decoding="async" />
              </picture>
            </div>

            <div class="story-inner">
              <div class="story-left">
                <span class="story-number">02</span>
              </div>
              <div class="story-right">
                <h3 class="story-title">EVOLUTION</h3>
                <p>
                  Over the decades, horror has continuously evolved, reshaping itself with every era.
                </p>
                <p>
                  In the silent film age of the 1920s and 1930s, icons like Dracula and Frankenstein emerged from the shadows, bringing tales of monsters and otherworldly creatures to the silver screen.
                </p>

                <p>
                  These early masterpieces mirrored the deepest social and cultural fears of their time, daring to push the limits of imagination and what could be shown to an audience.
                </p>
              </div>
            </div>
          </div>


          <div class="story-block" data-index="3">
            <div class="story-media element_filter" :class="{ good: good, evil: evil, neutral:neutral }">
            
                <picture>
                <source srcset="/img/webp/twin_red.webp" type="image/webp">
                <source srcset="/img/twin_red.jpg" type="image/jpeg">
                <img src="/img/twin_red.jpg" alt="11 September 2001" loading="lazy" decoding="async" />
              </picture>

              <picture>
                <source srcset="/img/webp/twin_cyan.webp" type="image/webp">
                <source srcset="/img/twin_cyan.jpg" type="image/jpeg">
                <img class="box_img_blend" src="/img/twin_cyan.jpg" alt="11 September 2001" loading="lazy" decoding="async" />
              </picture>


            </div>

            <div class="story-inner">
              <div class="story-left">
                <span class="story-number">03</span>
              </div>
              <div class="story-right">
                <h3 class="story-title">Real Human Evil</h3>
                <p>
                  After 9/11, the collective perception of fear changed dramatically, influencing horror cinema as well.
The genre shifted away from monsters and the supernatural, embracing more realistic and disturbing themes.
                
                </p>
                <p>
                  Films like The Purge and Saw explored social brutality and moral dilemmas in a world of constant insecurity.
                </p>

                <p>
                  Horror became a mirror of modern anxieties, confronting real human fears with powerful social commentary.
                </p>
              </div>
            </div>
          </div>

        
          <div class="story-block" data-index="4">
            <div class="story-media element_filter" :class="{ good: good, evil: evil, neutral:neutral }">
              
              
              <picture>
                <source srcset="/img/webp/tv_red.webp" type="image/webp">
                <source srcset="/img/tv_red.jpg" type="image/jpeg">
                <img src="/img/tv_red.jpg" alt="Future of horror film" decoding="async" />
              </picture>

              <picture>
                <source srcset="/img/webp/tv_cyan.webp" type="image/webp">
                <source srcset="/img/tv_cyan.jpg" type="image/jpeg">
                <img class="box_img_blend" src="/img/tv_cyan.jpg" alt="Future of horror film" decoding="async" />
              </picture>
           
           
            </div>

            <div class="story-inner">
              <div class="story-left">
                <span class="story-number">04</span>
              </div>
              <div class="story-right">
                <h3 class="story-title">Future</h3>
                <p>
               After September 11, 2001, reality began to surpass fiction. War, terrorism, and social instability became part of our everyday lives. In a world where horror is broadcast live, the genre was forced to adapt.

                </p>
                <p class="story-description">
Today, it’s not monsters or ghosts that frighten us most—but humanity, power, and uncertainty. Horror cinema now contends with a world already terrifying, seeking new ways to express modern fear. The future of horror is no longer just entertainment—it’s a haunting mirror of our time.onnect us all.
                </p>
              </div>
            </div>
          </div>
        </div>         
      </div>
    </section>

   <!-- SEZIONE ISPIRAZIONE -->
    <section id="ispiration-section">
      <div class="pin-wrapper">

        <div ref="figureContainerRef" class="figure-container">
          <div ref="textLayerRef" class="text-layer">
            <h2 :ref="addSplitRef" class="anatomy">ANATOMY</h2>
            <h2 :ref="addSplitRef" class="of-a">OF A</h2>
            <h2 :ref="addSplitRef" class="murder">MURDER</h2>
          </div>

          <img ref="figureRef" src="/img/omino.svg" class="figure" alt="Saul Bass inspiration" />
        </div>

        <div class="final-content">

          
           <picture>
                <source srcset="/img/webp/bg-photo.webp" type="image/webp">
                <source srcset="/img/bg-photo.jpg" type="image/jpeg">
                <img ref="bgRef" class="bg" src="/img/bg-photo.jpg" alt="fondo" loading="lazy" decoding="async" />
          </picture>

          <h2 ref="insTextRef" class="ispiration-text">INSPIRATION</h2>

          <picture>
              <source srcset="/img/webp/saul.webp" type="image/webp">
              <source srcset="/img/saul.png" type="image/png">
              <img ref="saulRef" class="saul" src="/img/saul.png" alt="Saul Bass" loading="lazy" decoding="async" />
          </picture>
          
          <div ref="saulTextRef" class="saul_text">
            <h3>Saul Bass</h3>
            <p>Saul Bass’s approach to cinematic intros inspired my project, guiding me in the creation of a visual language that merges graphic design and film. His ability to distill a film’s essence into just a few elements deeply influenced me, pushing me to use shapes and colors to evoke powerful atmospheres and to turn simplicity into a compelling storytelling tool.</p>
          </div>
        </div>

      </div>
    </section>  

    <section id="stefan">
      <div class="info_stefan">
        <div class="text">
          <h2 :ref="addSplitRef">Stefan Segmanster</h2>
          <p>Stefan Sagmeister’s experimental approach, evident in the Mountains of Madness album cover for H.P. Zinker (1994) and later in his book Made You Look (2001), has profoundly influenced this project. His use of colored filters to hide and reveal overlapping images inspired me to explore a layered visual language, expanding the concept with a second filter and sharper color contrasts. This technique allowed me to play with perception and duality, leveraging digital interaction to capture the unsettling ambiguity that defines horror films.</p>
        </div>    

        <div class="image">
          <picture>
                <source srcset="/img/webp/stefan.webp" type="image/webp">
                <source srcset="/img/stefan.jpg" type="image/jpeg">
                <img alt="Stefan Segmanster" src="/img/stefan.jpg" loading="lazy" decoding="async" />
          </picture>

        </div>
      </div>

      <div class="book-container">

        <picture>
          <source srcset="/img/webp/cane.webp" type="image/webp">
          <source srcset="/img/cane.png" type="image/png">
          <img ref="bookBlackRef"  alt="cover of Made You Look" class="book book-black" src="/img/cane.png" loading="lazy" decoding="async" />
        </picture>

        <picture>
          <source srcset="/img/webp/cane_rosso.webp" type="image/webp">
          <source srcset="/img/cane_rosso.png" type="image/jpeg">
          <img ref="bookRedRef" alt="cover of Made You Look" class="book book-red" src="/img/cane_rosso.png" loading="lazy" decoding="async" />
        </picture>

      </div>
    </section>

     <section id="exhibition" ref="clipSectionRef">
      
      <div id="testi_exhibition">

        <h2 ref="exhiTextRef">
          <span class="small">the</span> Exhibitions
        </h2>

        <div id="exhibition_p"><p>We are planning a series of free, non-commercial exhibitions to present the project in 2026. If you are interested in hosting an exhibition at your venue, feel free to contact us at <span v-html="emailLink"></span></p></div>
        
      </div>
      
      <div class="clip-bg">
        <video autoplay muted loop playsinline loading="lazy">
          <source src="/img/video/exibition.webm" type="video/webm" />
          <source src="/img/video/exibition.mp4" type="video/mp4" />
          <source src="/img/video/exibition.ogv" type="video/ogg" />
        </video>
      </div>

    </section>

    <!-- SEZIONE FILM -->
    <section id="home_posters" >

      <div id="index_film">
        <div>
          <h2 :ref="addSplitRef">10 posters tribute</h2>
          <h2 class="mob" :ref="addSplitRef">to horror film</h2>
          <p>This series of 10 posters expands the visual narrative of Light in the Darkness, turning it into a gallery of layered subjects that explore the fragile boundary between perception and reality. Each poster is the result of a dialogue between human creativity and AI-generated imagery, merging technology and design to reinterpret the unsettling language of horror cinema.
          </p>
          <p>
          The project exists in two dimensions: a printed version, where the images come alive through colored filters applied to custom-made glasses, and a digital version, brought to life through this website. 
          </p> 
        </div>
        <div id="title_h2_scroll">
          <h2 id="titolo_secondario_film" class="right" :ref="addSplitRef">to horror film</h2>
          <p> Both formats share the same intent, not to provide answers, but to create an interactive experience where the viewer decides what to reveal and what to hide.</p>
          <p>This is a fan-made project, with no commercial purpose, born purely out of passion for the genre and visual experimentation. Every image is a story layered in color and meaning, designed to challenge perception and to honor the cinematic atmospheres that continue to shape our imagination.</p>
        </div>
      </div>

      <div id="cont_schede">
        
        <div v-for="(movie, index) in movies" :key="movie.id" :ref="addSchedaRef" class="scheda sl">
          <NuxtLink :href="`/film/${movie.nome}`" class="link_poster click_poster" @click="clickmenu(index)" :ref="addLink"><span>VIEW POSTER</span></NuxtLink>
          
          <div>  
            <div class="immagine_film" :data-color-good="movie.datacolor" :data-color-evil="movie.datacolor2" :class="{ good: good, evil: evil, neutral:neutral }">
              <img :src="`/img/${movie.cover}`" :alt="movie.nome" :ref="el => addImageRef(index, el)">
              <img :src="`/img/${movie.cover2}`" :alt="movie.nome" :ref="el => addImageRef(index, el)">
            </div>

            <div class="data_film">
              <div>
                  <h3 v-html="movie.titolo"></h3>
                  <div class="info_secondarie">
                    <h4>DIRECTOR: {{ movie.regista }} / Year: {{ movie.anno }} <br> Product House: {{ movie.casa }}</h4>                  
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>

      </div>
    </section>
  </div>
</template>

<script setup>
import SplitType from 'split-type';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



import { ref, computed, onMounted, nextTick, watch } from 'vue';

const {
  $splitTextAnimation,
  $splitTextAnimationImmediate,
  $gsap,
  $Draggable,
  $movies,
  $lenis
} = useNuxtApp();

const preloadCompleted = useState('preload-completed');

const good = inject('good');
const evil = inject('evil');
const neutral = inject('neutral');
const themeClass = computed(() => ({ good: good.value, evil: evil.value, neutral: neutral.value }));
const emailLink = `<a href="mailto:${'webservices' + '@' + 'k95.it'}">webservices@k95.it</a>`;

const movies = ref([]);
const loadMovies = async () => {
  movies.value = $movies;
};

// ✅ Refs
const heroRefs = ref([]);
const dogRef = ref([]);
const splitRefs = ref([]);
const schedeRefs = ref([]);
const linkRefs = ref([]);
const imageRefsByScheda = ref([]);
const her_dou = ref([]);
const dragBallRef = ref(null);
const dragLabelRef = ref(null);
const knifeCanvas = ref(null);
const figureRef = ref(null);
const bgRef = ref(null);
const saulRef = ref(null);
const insTextRef = ref(null);
const saulTextRef = ref(null);
const figureContainerRef = ref(null);
const textLayerRef = ref(null);
const bookBlackRef = ref(null);
const bookRedRef = ref(null);
const exhiTextRef = ref(null);
const clipSectionRef = ref(null);

// ✅ Funzioni ref generiche
function createRefCollector(targetArray) {
  return (el) => {
    if (el && !targetArray.value.includes(el)) {
      targetArray.value.push(el);
    }
  };
}

const addHeroSplitRef = createRefCollector(heroRefs);
const addSplitRef = createRefCollector(splitRefs);
const addSchedaRef = createRefCollector(schedeRefs);
const addLink = createRefCollector(linkRefs);
const addHerDou = createRefCollector(her_dou);

let scrollTimelines = []

const addImageRef = (index, el) => {
  if (!el) return;
  if (!imageRefsByScheda.value[index]) {
    imageRefsByScheda.value[index] = [];
  }
  if (!imageRefsByScheda.value[index].includes(el)) {
    imageRefsByScheda.value[index].push(el);
  }
};

import { useCustomSeoMeta } from '~/composables/useCustomSeoMeta';

useCustomSeoMeta({
  title: 'Light in the Darkness - A Visual Exploration of Horror Cinema',
  description: 'An immersive visual project exploring the eternal conflict between good and evil in horror cinema through ten unique posters.',
  url: 'https://yourwebsite.com',
  image: 'https://yourwebsite.com/img/cover_sito_meta.jpg',
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Light in the Darkness",
    "description": "An immersive visual project exploring the eternal conflict between good and evil in horror cinema through ten unique posters.",
    "author": {
      "@type": "Organization",
      "name": "Studio K95"
    },
    "image": "https://yourwebsite.com/img/cover_sito_meta.jpg",
    "url": "https://yourwebsite.com"
  }
});

useHead({
  link: [
    { rel: 'preload', as: 'image', href: '/img/webp/tv.webp', imagesrcset: '/img/webp/tv.webp', type: 'image/webp' },
    { rel: 'preload', as: 'image', href: '/img/preview.jpg', type: 'image/jpeg' }
  ]
});

function initHeroSplitOnPreload() {
  if (preloadCompleted.value) {
    window.addEventListener('transition:end', () => {
      if (heroRefs.value.length) {
        $splitTextAnimationImmediate([...heroRefs.value]);
      }
    }, { once: true });
  } else {
    watch(preloadCompleted, (val) => {
      if (val && heroRefs.value.length) {
        $splitTextAnimationImmediate([...heroRefs.value]);
      }
    });
  }
}

// ✅ Inizializzazione di tutte le sezioni
async function initAllSections(base) {
  $splitTextAnimation(splitRefs.value);
  pinKnifeScroll();
  initKnifeScene(knifeCanvas.value, base);
  initSnakeShaderEffect(base);
  animateDogScroll();
  initDogSectionDrag({ dragEl: dragBallRef.value, labelEl: dragLabelRef.value });
  initStorySection(); // <--- ✅ qui
  initInspirationSection();
  initStefanSection();
  initHomePostersSection();
  initClipSection();
  exhibition();
  hero_p();
}

/******** 01 - coltello 3D *********/

function pinKnifeScroll() {
  $gsap.to('#knife-wrapper', {
    scrollTrigger: {
      trigger: '#story-cont',
      scroller: '#main',
      start: 'top top',
      end: 'bottom top',
      pin: '#knife-pin',
      scrub: true,
      anticipatePin: 1,
    },
  });
}

function initKnifeScene(canvas, base) {
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  const light = new THREE.DirectionalLight(0xffffff, 1);

  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  camera.position.z = 5;
  light.position.set(0, 1, 2);
  scene.add(light);

  let knifeModel = null;
  const loader = new GLTFLoader();
  loader.load(`${base}models/coltello.gltf`, (gltf) => {
    knifeModel = gltf.scene;
    knifeModel.scale.set(8, 8, 8);

    const box = new THREE.Box3().setFromObject(knifeModel);
    const center = new THREE.Vector3();
    box.getCenter(center);
    knifeModel.position.sub(center);

    scene.add(knifeModel);
  });

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();

  $gsap.to({}, {
    scrollTrigger: {
      trigger: '#story-cont',
      scroller: '#main',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        if (knifeModel) knifeModel.rotation.y = self.progress * Math.PI * 2;
      }
    }
  });
}

function initSnakeShaderEffect(base, canvasId = 'image-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) throw new Error(`Canvas not found: #${canvasId}`);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;

  const vertexShader = `
    uniform float u_scroll;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec3 pos = position;
      float wave = sin(uv.y * 4.0 + u_scroll) * 0.01;
      pos.x += wave;
      gl_Position = vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform sampler2D u_texture;
    varying vec2 vUv;
    void main() {
      gl_FragColor = texture2D(u_texture, vUv);
    }
  `;

  const uniforms = { u_texture: { value: null }, u_scroll: { value: 0.0 } };

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    transparent: true
  });

  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  scene.add(mesh);

  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(`${base}img/famiglia.jpg`, (texture) => {
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.wrapS = THREE.MirroredRepeatWrapping;
    texture.wrapT = THREE.MirroredRepeatWrapping;
    uniforms.u_texture.value = texture;

    const rect = canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);

    const planeWidth = 2 * 0.95;
    const planeHeight = 2 * 0.95;
    const newGeometry = new THREE.PlaneGeometry(planeWidth, planeHeight, 100, 100);
    mesh.geometry.dispose();
    mesh.geometry = newGeometry;

    renderLoop();
  });

  let lastScroll = $lenis.scroll;
  let smoothedSpeed = 0;
  const damping = 0.1;

  function renderLoop() {
    const currentScroll = $lenis.scroll;
    const delta = currentScroll - lastScroll;
    lastScroll = currentScroll;

    smoothedSpeed += (delta - smoothedSpeed) * damping;
    uniforms.u_scroll.value += smoothedSpeed * 0.01;

    renderer.render(scene, camera);
    requestAnimationFrame(renderLoop);
  }
}
/******** END - Immagine intro ondulata *********/

/******** 02 - Hero titotlo  *********/
function hero_p() {
  nextTick(() => {
    her_dou.value.forEach((el) => {
      const split = new SplitType(el, { types: 'words, chars' })

      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: '#hero',
          scroller: '#main',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      tl.fromTo(
        split.chars,
        {
          opacity: 1,
          filter: "blur(0px)"
        },
        {
          opacity: 0,
          filter: "blur(5px)",
          ease: 'power2.out',
          stagger: { amount: 0.5 }
        }
      )

      scrollTimelines.push(tl)
    })
  })
}

/******** END Hero titotlo  *********/

/******** 03 - DOG SECTION  *********/

function initDogSectionDrag({ dragEl, labelEl }) {
  const isMobile = window.matchMedia('(pointer: coarse)').matches;
  if (!isMobile || !dragEl || !labelEl) return;

  $Draggable.create(dragEl, {
    type: 'x,y',
    bounds: '#dog_section',
    inertia: true,
    edgeResistance: 0.65,

    onPress() {
      $gsap.to(labelEl, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
      });

      $gsap.to(dragEl, {
        scale: 1.5,
        duration: 0.5,
        ease: 'power3.out'
      });
    },

    onRelease() {
      $gsap.to(labelEl, {
        opacity: 1,
        duration: 0.3,
        delay: 0.5,
        ease: 'power2.out'
      });

      $gsap.to(dragEl, {
        scale: 1,
        duration: 0.5,
        ease: 'power3.inOut'
      });
    }
  });
}

function animateDogScroll() {
  

    $gsap.to(dogRef.value, {
      scale:1.1,
      ease: 'power2.Out',
      scrollTrigger: {
        trigger: '#dog_section',
        scroller: '#main',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

}
/******** END - DOG SECTION *********/

/******** 04 - STORY SECTION *********/
function initStorySection() {
  $gsap.utils.toArray('.story-block').forEach((block) => {
    $gsap.from(block, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: block,
        scroller: '#main',
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
        once: true,
      }
    });
  });

  $gsap.to('#used-filter-labels>div', {
    scrollTrigger: {
      trigger: '#about_cont',
      scroller: '#main',
      start: 'top top',
      end: 'bottom top',
      pin: '#used-filter-labels',
      scrub: true,
    }
  });
}

/******** END - STORY SECTION *********/

/******** 05 - INSPIRATION + OMINO Seciton *********/

function initInspirationSection() {
  const timeline = $gsap.timeline({
    scrollTrigger: {
      trigger: '#ispiration-section',
      scroller: '#main',
      start: 'top top',
   
    end:"+=12000",
      scrub: true,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        if (saulTextRef.value) {
          $gsap.to(saulTextRef.value, {
            opacity: self.progress >= 0.75 ? 1 : 0,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
      }
    }
  });

  timeline.to(figureRef.value, {
    rotation: 360,
    scale: 10,
    x: '-55vw',
    y: '20vw',
    
    ease: 'power2.out'
  }, 0);

  timeline.to(figureContainerRef.value, {
    backgroundColor: '#222222',
    duration: 0.2,
    ease: 'power2.out'
  }, 0.3);

  timeline.to(textLayerRef.value, {
    opacity: 0,
    duration: 0.2,
    ease: 'power2.out'
  }, 0.3);

  timeline.to(bgRef.value, 
  {
    opacity: 1,
    scale: 1.03,
    ease: 'power2.out'
  }, 0.9);

  timeline.to(saulRef.value, 
  {
    opacity: 1,
    scale: 1.1,
    ease: 'power2.out'
  }, 0.9);

  nextTick(() => 
  {
    if (insTextRef.value) {
      const split = new SplitType(insTextRef.value, { types: 'words, chars' });

      $gsap.set(split.chars, {
        y: '120%',
        opacity: 0
      });

      timeline.to(split.chars, {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        stagger: { amount: 0.5 },
        ease: 'power3.out'
      }, 0.7);
    }
  });
}
/******** END - INSPIRATION + OMINO Seciton *********/

/******** 06 - Stefan *********/

function initStefanSection() 
{
  $gsap.set(bookBlackRef.value, { x: '-10vw' });
  $gsap.set(bookRedRef.value, { x: '10vw' });

  const bookTimeline = $gsap.timeline({
    scrollTrigger: {
      trigger: '#stefan',
      scroller: '#main',
      start: '-20% top',
      end: '+=50%',
      scrub: true,
    }
  });

  bookTimeline.to(bookBlackRef.value, {
    x: '0vw',
    ease: 'power2.out'
  }, 0);

  bookTimeline.to(bookRedRef.value, {
    x: '0vw',
    ease: 'power2.out'
  }, 0);
}

/******** 07 - Poster schede section *********/function initHomePostersSection() {
  // Anima il titolo H2 durante lo scroll della sezione
  $gsap.to('#title_h2_scroll', {
    y: '-30%',
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#index_film',
      scroller: '#main',
      start: 'top bottom',
      end: 'bottom+=20% top',
      scrub: true,
    },
  });

  const setupAnimations = () => {
    const total = schedeRefs.value.length;
    if (!total) return;

    const baseStep = 8; // % per ogni blocco
    let perc = 0;

    schedeRefs.value.forEach((block, index) => {
      // Anima y, perspective, rotateX
      $gsap.to(block, {
        y: 0,
        perspective: '0px',
        rotateX: '0deg',
        scrollTrigger: {
          trigger: '#home_posters',
          scroller: '#main',
          start: `${perc}% top`,
          end: `${perc + baseStep}% top`,
          scrub: 1,
        },
      });

      // Anima scala al passaggio
      $gsap.to(block, {
        scale: 0.8,
        scrollTrigger: {
          trigger: '#home_posters',
          scroller: '#main',
          start: `${perc}% top`,
          end: index === total - 1 ? 'bottom bottom' : `${perc + baseStep * 2}% top`,
          scrub: 1,
        },
      });

      // Anima immagini interne alla scheda
      const images = imageRefsByScheda.value[index] || [];
      images.forEach((img) => {
        $gsap.to(img, {
          scale: 1,
          scrollTrigger: {
            trigger: '#home_posters',
            scroller: '#main',
            start: `${perc}% top`,
            end: `${perc + baseStep + 2}% top`,
            scrub: 1,
          },
        });
      });

      perc += baseStep;
    });
  };

  setupAnimations();
}
/******** END - Poster schede section *********/

/******** 08 - Exhibition SECTION  *********/

/* Parte polygono */
function initClipSection() 
{
  if (!clipSectionRef.value) return;

  const bg = clipSectionRef.value.querySelector('.clip-bg');
  const img = bg.querySelector('video');

  // Stato iniziale
  $gsap.set(bg, {
    clipPath: "polygon(18% 15%, 80% 0%, 100% 100%, 0% 100%)"
  });

  // Timeline per entrata e uscita solo via clip-path
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: clipSectionRef.value,
      scroller: "#main",
      start: "top bottom",
      end: "bottom+=30% top",
      scrub: true
    }
  });

  // Entrata: trapezio stretto -> rettangolo
  tl.to(bg, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power2.out",
    duration: 0.6
  });

  // Uscita: rettangolo -> trapezio stretto (inverso)
  tl.to(bg, {
    clipPath: "polygon(20% 0%, 84% 17%, 80% 100%, 17% 90%)",
    ease: "power2.in",
    duration: 0.8
  });

  // Movimento verticale (parallax)
  $gsap.fromTo(
    img,
    { y: "0%" },
    {
      y: "10%",
      ease: "none",
      scrollTrigger: {
        trigger: clipSectionRef.value,
        scroller: "#main",
        start: "top bottom",
        end: "bottom+=40% top",
        scrub: true
      }
    }
  );
}

/* Parte titolo */
function exhibition() {
  nextTick(() => {
    if (exhiTextRef.value) {
      const split_t = new SplitType(exhiTextRef.value, { types: 'words, chars' });

      $gsap.fromTo(
        split_t.chars,
        {
          y: '120%',
        
        },
        {
          y: '0%',
          ease: 'power2.out',
          stagger: { amount: 0.5 },
          scrollTrigger: {
            trigger: '#exhibition',
            scroller: '#main',
            start: 'top+=-40% top',
            end: 'top top',
            
            scrub: true
          }
        }
      );
    }
  });
}

/******** END Exhibition SECTION  *********/
onMounted(async () => {
  const base = useRuntimeConfig().app.baseURL || '/';
  initHeroSplitOnPreload();
  await loadMovies();
  await nextTick();

  setTimeout(() => {
    initAllSections(base);
  }, 3000);
});

onUnmounted(() => {
  scrollTimelines.forEach(t => t.kill())
  scrollTimelines = []
})
</script>