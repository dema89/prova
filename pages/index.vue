<template>

  <div id="hero">

    <h1 class="split-text" :ref="addSplitRef">
      <div>
        <div>Light</div> 
        <div class="small">in the</div> 
      </div>

      <div class="block">Darkness</div>
    </h1>

    <div id="firma">A project by <a href="k95.it" target="_blank">Studio K95</a></div>

    <div id="filtro" :class="{ good: good, evil: evil, neutral:neutral }">
      <div>
        <div></div>
      </div>
    </div>

    <div id="cont_tv">
      <img id="tv" src="/img/tv.png">

      <video loop muted autoplay>
        <source src="/img/video/red.mp4" type="video/mp4">
      </video>

      <video loop muted autoplay>
        <source src="/img/video/azzurro.mp4" type="video/mp4">
      </video>
    </div>
  </div>

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

          <h2 class="about-title" :ref="addSplitRef">
            Light in the Darkness is a visual exploration of moral ambiguity, set within the haunting atmosphere of horror cinema. The project presents the eternal conflict between good and evil, not as separate entities but as coexisting forces.
          </h2>

          <div class="about-image">
            <canvas id="image-canvas" class="element_filter"></canvas>
          </div>

          <div class="about-columns">
            <div class="column">
              <p>Ten posters, ten narratives. At the center, two characters: one representing light, the other shadow. There are no clear boundaries. Both exist in the same space, within the same visual form.</p>
              <p>It is the viewer who chooses what to see,
                which side to bring forward. Light in the Darkness does not offer answers. It invites a deeper gaze into the image and into oneself.</p>
            </div>
            <div class="column">
              <p>The concept is simple but unsettling: good and evil are not alternating forces, they are simultaneous. They are layered, present at once, and the idea of separating them is as fragile as a reflection.</p>
              <p>Horror is not only an aesthetic here. It is the perfect setting for this tension to unfold, where light is rare and every choice reveals something uncomfortable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- --- DOG SECTION --- -->
      <div id="dog_section">
        <div class="dog-image"> 
            <img src="/img/dog_red.png" alt="Cane rosso" class="dog-red element_filter" />
            <img src="/img/dog_ciano.png" alt="Cane ciano" class="dog-cyan element_filter" />  
        </div>

        <div :class="['drag-ball', 'mobile-only', { good: good, evil: evil, neutral: neutral }]">
          <span class="drag-label">drag me</span>
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
            <div class="story-media element_filter">
              <img src="/img/film_red.jpg" alt="Le Manoir du Diable" />
              <img class="box_img_blend" src="/img/film_cyan.jpg" alt="Le Manoir du Diable" />
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
            <div class="story-media element_filter">
              <img src="/img/dracula_red.jpg" alt="Dracula" />
              <img class="box_img_blend" src="/img/dracula_cyan.jpg" alt="Dracula" />
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
            <div class="story-media element_filter">
            
              <img src="/img/twin_red.jpg" alt="11 September 2001" />
              <img class="box_img_blend" src="/img/twin_cyan.jpg" alt="11 September 2001" />

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
            <div class="story-media element_filter">

              <img src="/img/tv_red.jpg" alt="Future of horror film" />
              <img class="box_img_blend" src="/img/tv_cyan.jpg" alt="Future of horror film" />
           
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

        <div class="figure-container">
          <div class="text-layer">
            <h2 :ref="addSplitRef" class="anatomy">ANATOMY</h2>
            <h2 :ref="addSplitRef" class="of-a">OF A</h2>
            <h2 :ref="addSplitRef" class="murder">MURDER</h2>
          </div>

          <img src="/img/omino.svg" class="figure" />
        </div>

        <div class="final-content">
          <img src="/img/bg-photo.jpg" class="bg" />
          <h2 class="ispiration-text">ISPIRATION</h2>
          <img src="/img/saul.png" class="saul" />
          <div class="saul_text">
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
          <p>L’approccio di Saul Bass alle intro cinematografiche ha ispirato il mio progetto, guidandomi nella creazione di un linguaggio visivo che fonde grafica e cinema. La sua capacità di sintetizzare l’essenza di un film in pochi elementi mi ha influenzato, spingendomi a usare forme e colori per evocare atmosfere potenti, rendendo la semplicità uno strumento narrativo d’impatto.</p>
        </div>    

        <div class="image">
          <img alt="Stefan Segmanster" src="/public/img/stefan.jpg">
        </div>
      </div>

      <div class="book-container">
        <img src="/img/cane.png" alt="cover of Made You Look" class="book book-black" />
        <img src="/img/cane_rosso.png" alt="cover of Made You Look" class="book book-red" />
      </div>
    </section>

    <!-- SEZIONE FILM -->
    <section id="home_posters" >

      <div id="index_film">
        <div>
          <h2 :ref="addSplitRef">10 posters tribute</h2>
          <h2 class="mob" :ref="addSplitRef">to horror film</h2>
          <p>L’approccio di Saul Bass alle intro cinematografiche ha ispirato il mio progetto, guidandomi nella creazione di un linguaggio visivo che fonde grafica e cinema. La sua capacità di sintetizzare l’essenza di un film in pochi elementi mi ha influenzato, spingendomi a usare forme e colori per evocare atmosfere potenti, rendendo la semplicità uno strumento narrativo d’impatto.</p>
        </div>
        <div>
          <h2 id="titolo_secondario_film" class="right" :ref="addSplitRef">to horror film</h2>
        </div>
      </div>


      <div id="cont_schede">
        
        <div v-for="(movie, index) in movies" :key="movie.id" :ref="addSchedaRef" class="scheda click_poster">

          <NuxtLink :href="`/${movie.nome}`" @click="clickmenu(index)" :ref="addlink">
          <div class="immagine_film">
            <img :src="movie.cover" :alt="movie.nome" :ref="el => addImageRef(index, el)">
            <img :src="movie.cover2" :alt="movie.nome" :ref="el => addImageRef(index, el)">
          </div>

           <div class="data_film">
              <div>
              <h3 v-html="movie.titolo"></h3>

              <div class="info_secondarie">
               
                <h4>DIRECTOR: {{ movie.regista }} / Year: {{ movie.anno }} <br> Product House: {{ movie.casa }}</h4>
              
              </div>
              
            </div>
          </div>
          </NuxtLink>
        </div>

        <div></div>

      </div>
    </section>
    
    <div class="space"></div>

  </div>

</template>

<style>



@media (min-width: 768px) and (max-width: 1200px) and (orientation: landscape)
{
  .info_stefan
  {
    position: absolute;
    top:50%;
    transform:translateY(-50%);
  }

  .info_stefan .image
  {
  display:none;
  }

  .book-container 
  {
  position: absolute;
  top: 50%;
  left: auto;
  right:12%;
  width: 30%;
  transform: translate(0%, -50%) rotate(0deg);
  pointer-events: none;
  }
}




@media (max-width:920px) {}

@media (max-width:560px) {}

</style>

<script setup>

import SplitType from "split-type";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const movies = ref([]);
const schedeRefs = ref([]);
const linkRefs = ref([]);

/* Splite text config */
const { $splitTextAnimation } = useNuxtApp();
const splitRefs = ref([]);
const addSplitRef = (el) => {
  if (el) splitRefs.value.push(el);
};


const addSchedaRef = (el) => { if (el) schedeRefs.value.push(el); };
const addlink = (el) => { if (el) linkRefs.value.push(el); };

const { $gsap, $Draggable } = useNuxtApp();
const { $movies } = useNuxtApp();

const good = inject('good');
const evil = inject('evil');
const neutral = inject('neutral');

const knifeCanvas = ref(null);


/* Raccoglie le immagini di ogni scheda poster*/
const imageRefsByScheda = ref([]);
const addImageRef = (index, el) => {
  if (!el) return;
  if (!imageRefsByScheda.value[index]) {
    imageRefsByScheda.value[index] = [];
  }
  imageRefsByScheda.value[index].push(el);
};
/* ---------------------------------------- */

const loadMovies = async () => 
{
movies.value = $movies;
};

const setupAnimations = () => 
{
  let perc = 0;
  let ded = 11;
  let baseTop = 0;

  const createTimeline = (trigger, start, end) => 
  {
    return $gsap.timeline({
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub: 1,
      },
    });
  };

  schedeRefs.value.forEach((block, index) => 
  {
    const schedeShow = createTimeline('#home_posters', `${perc}% top`, `${perc + 8}% top`);
    schedeShow.to(block, { y: 0, perspective: '0px', rotateX: '0deg' });

    const scaleValue = Math.max(0.3, 1 - ded / 10); 

    const schedeShowZoom = createTimeline('#home_posters', `${perc}% top`, '100% top');
    schedeShowZoom.to(block, { scale: scaleValue});
  
    const images = imageRefsByScheda.value[index] || [];
    images.forEach((img) => {
      const schedeImmagine = createTimeline('#home_posters', `${perc}% top`, `${perc + 10}% top`);
      schedeImmagine.to(img, { scale: 1 });
    });

    perc += 8;
    ded -= 1;
  });
};

onMounted(async () => 
{
  let knifeModel = null;
  
  /* Splite text */
  $splitTextAnimation(splitRefs.value);

  await loadMovies();

  nextTick(() => 
  {
    setupAnimations();
    
    
    /******** 01 - COLTELLO *********/
  
    // COLTELLO BLOCCATO ALLO SCROLL
    $gsap.to('#knife-wrapper', 
    {
      scrollTrigger: {
        trigger: '#story-cont',
        start: 'top top',
        end: 'bottom top',
        pin: '#knife-pin',
        scrub: true,
        anticipatePin: 1,
      }
    });

    // COLTELLO 3D CANVAS
    const canvas = knifeCanvas.value;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      35,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100
    );

    camera.position.z = 5;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 2);
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load('/models/coltello.gltf', (gltf) => 
    {
      knifeModel = gltf.scene;
      knifeModel.scale.set(8, 8, 8);

      const box = new THREE.Box3().setFromObject(knifeModel);
      const center = new THREE.Vector3();
      box.getCenter(center);
      knifeModel.position.sub(center);

      scene.add(knifeModel);
    });

    const animate = () => 
    {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // COLTELLO ROTATE Y
    $gsap.to({}, 
    {
      scrollTrigger: {
        trigger: '#story-cont',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          if (knifeModel) {
            const progress = self.progress;
            knifeModel.rotation.y = progress * Math.PI * 2;
          }
        }
      }
    });

    const resizeRenderer = () => 
    {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    let resizeTimeout;
    window.addEventListener('resize', () => 
    {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeRenderer, 2000);
    });



    /******** 03 - Immagine intro ondulata *********/

    const snakeCanvas = document.getElementById('image-canvas');
    if (!snakeCanvas) throw new Error('Canvas not found');

    const snakeRenderer = new THREE.WebGLRenderer({ canvas: snakeCanvas, alpha: true, antialias: true });
    const snakeScene = new THREE.Scene();
    const snakeCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    snakeCamera.position.z = 1;

    // === SHADERS ===
    const vertexShader = `
    uniform float u_scroll;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec3 pos = position;

      // Movimento serpente orizzontale continuo
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

  const uniforms = {
    u_texture: { value: null },
    u_scroll: { value: 0.0 }
  };

  const geometry = new THREE.PlaneGeometry(2, 2); // sostituito dopo
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    transparent: true
  });
  const mesh = new THREE.Mesh(geometry, material);
  snakeScene.add(mesh);

  // === CARICAMENTO TEXTURE + SCALING ===
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load('/img/famiglia.jpg', (texture) => {
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.wrapS = THREE.MirroredRepeatWrapping;
    texture.wrapT = THREE.MirroredRepeatWrapping;
    uniforms.u_texture.value = texture;

    const rect = snakeCanvas.getBoundingClientRect();
    const canvasWidth = rect.width;
    const canvasHeight = rect.height;
    snakeRenderer.setSize(canvasWidth, canvasHeight, false);

    const imageAspect = texture.image.width / texture.image.height;
    const canvasAspect = canvasWidth / canvasHeight;

    // Calcolo larghezza del piano come 90% del canvas (in world units da -1 a +1 → totale 2)
    const planeWidth = 2 * 0.95;
    const planeHeight = 2 * 0.95;

    const newGeometry = new THREE.PlaneGeometry(
      planeWidth,
      planeHeight,
      100,
      100
    );

    mesh.geometry.dispose();
    mesh.geometry = newGeometry;

    snakeRender();
  });

  // === RESIZE RESPONSIVO ===
  window.addEventListener('resize', () => {
    const rect = snakeCanvas.getBoundingClientRect();
    snakeRenderer.setSize(rect.width, rect.height, false);
    snakeCamera.left = -1;
    snakeCamera.right = 1;
    snakeCamera.top = 1;
    snakeCamera.bottom = -1;
    snakeCamera.updateProjectionMatrix();
  });

  // === ANIMAZIONE CONTINUA BASATA SU VELOCITÀ DELLO SCROLL ===
  let lastScroll = window.scrollY;
  let smoothedScroll = 0;
  const damping = 0.1;

  function snakeRender() 
  {
    const currentScroll = window.scrollY;
    const delta = Math.abs(currentScroll - lastScroll);
    lastScroll = currentScroll;

    smoothedScroll += (delta - smoothedScroll) * damping;

    // INCREMENTA u_scroll SEMPRE IN AVANTI (non si inverte mai)
    uniforms.u_scroll.value += smoothedScroll * 0.01;

    snakeRenderer.render(snakeScene, snakeCamera);
    requestAnimationFrame(snakeRender);
  }

  /******** 04 - DOG SECTION MOUSE FOLLOWER *********/
  const isMobile = window.matchMedia("(pointer: coarse)").matches;
  const dogSection = document.getElementById("about_cont");
  const dogImg = document.querySelector(".dog-image img");

  if(isMobile) 
  {
    
    const ball = document.querySelector(".drag-ball");
    const label = ball.querySelector(".drag-label");

    $Draggable.create(ball, 
    {
      type: "x,y",
      bounds: "#dog_section",
      inertia: true,
      edgeResistance: 0.65,
      
      onPress() 
      {
        $gsap.to(label, 
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out"
        });
        
        $gsap.to(ball, 
        {
          scale:1.5,
          duration: 0.5,
          ease: "power3.out"
        });
      },
      
      onRelease() 
      {
        $gsap.to(label, 
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          delay: 0.5
        });
        
        $gsap.to(ball, 
        {
          scale:1,
          duration: 0.5,
          ease: "power3.inOut"
        });
      }
    });
  }

  /******** 05 - STORY SECTION *********/
  $gsap.utils.toArray('.story-block').forEach((block) => 
  {
      $gsap.fromTo(block,
      { 
      scale: 0.9, y: "35%"
      },
      {
        scale: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: 
        {
          trigger: block,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        }
      });
    });
  });

  // filtri bloccati allo scroll
  $gsap.to('#used-filter-labels>div', 
  {
    scrollTrigger: 
    {
    trigger: '#about_cont',
    start: 'top top',
    end: 'bottom top',
    pin: '#used-filter-labels',
    scrub: true,
    anticipatePin: 1,
    }
  });

  /******** 06 - ISPIRATION Seciton *********/
  const figure = document.querySelector('.figure');
  const bg = document.querySelector('.bg');
  const saul = document.querySelector('.saul');
  const ins_text = document.querySelector('.ispiration-text');
  const saul_text = document.querySelector('.saul_text');
  const figure_container = document.querySelector('.figure-container');
  const text_layer = document.querySelector('.text-layer');

  const tl = $gsap.timeline(
  {
    scrollTrigger: 
    {
      trigger: '#ispiration-section',
      start: 'top top',
      end: '+=800%',
      scrub: true,
      pin: true,
      
      onUpdate: (self) => 
      {
        if (self.progress >= 0.75) 
        {
          $gsap.to(saul_text, 
          {
            opacity: 1,
            duration: 1.5,
            ease: "power2.out"
          });
        } else {
          $gsap.to(saul_text, 
          {
            opacity: 0,
            duration: 1.5,
            ease: "power2.out"
          });
        }
      }
    }
  });

  tl.to(figure, 
  {
    rotation: 360,
    scale: 10, // abbastanza grande da oscurare tutto
    x:"-55vw",
    y:"20vw",
    ease: "power2.out"
  }, 0)

  tl.to(figure_container, 
  {
    backgroundColor:'#000',
    duration:0.2,
    ease: "power2.out"
  }, 0.3)

  tl.to(text_layer, 
  {
    opacity:0,
    duration:0.2,
    ease: "power2.out"
  }, 0.3)
  
  // Fase 2 – sfondo (400% → 500%)
  tl.to(bg, 
  {
    opacity: 1,
    scale: 1.03,
    ease: "power2.out"
  }, 0.7); // 1 = fine del 500% scroll

  tl.to(saul, 
  {
    opacity: 1,
    scale: 1.1,
    ease: "power2.out"
  }, 0.7);

  new SplitType(ins_text, { types: 'words, chars' });

  // Imposta opacità 0 e posizione iniziale dei caratteri
  $gsap.set(ins_text.querySelectorAll('.char'), 
  {
    y: '120%',
    opacity: 0
  });

  tl.to(ins_text.querySelectorAll('.char'), 
  {
    y: "0%",
    opacity: 1,
    duration: 0.8,
    stagger: { amount: 0.5 },
    ease: 'power3.out'
  }, 0.7);

  const bookBlack = document.querySelector('.book-black');
  const bookRed = document.querySelector('.book-red');

  const bookTimeline = $gsap.timeline(
  {
    scrollTrigger: {
      trigger: '#stefan',
      start: 'top top',
      end: '+=200%',
      scrub: true,
      pin: true,
    }
  });

  // Stati iniziali
  $gsap.set(bookBlack, { x: '-10vw' });
  $gsap.set(bookRed, { x: '10vw' });

  // Animazione durante lo scroll
  bookTimeline.to(bookBlack, { x: '0vw', ease: 'power2.out' }, 0);
  bookTimeline.to(bookRed, { x: '0vw', ease: 'power2.out' }, 0);

  /******** 07 - Testi Index Schede Film *********/
  $gsap.to('#titolo_secondario_film', 
  {
    y: "-30%",
    ease: "power2.out",
    scrollTrigger: 
    {
      trigger: '#index_film',
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  });



/***************** END *****************/
});




</script>