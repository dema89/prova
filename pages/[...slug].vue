<template>
    <div id="page">
      <div class="not-found">

      <div id="image_404" :class="themeClass">
        <picture>
          <source srcset="/img/webp/404_blu.webp" type="image/webp">
          <source srcset="/img/404_blu.jpg" type="image/jpeg">
          <img src="/img/404_blu.jpg" alt="404 error" width="1920" height="1080" fetchpriority="high" decoding="async" />
        </picture>

        <picture>
          <source srcset="/img/webp/404_red.webp" type="image/webp">
          <source srcset="/img/404_red.jpg" type="image/jpeg">
          <img src="/img/404_red.jpg" alt="404 error" width="1920" height="1080" fetchpriority="high" decoding="async" />
        </picture>
      </div>

      <div id="data-404">
       
          <p>Horror not found</p>
        
          <NuxtLink id="link_404" data-title="Home" class="click_poster" to="/">Go back Home</NuxtLink>
        
      </div>

      <h1 id="h1_404">404</h1>

      <div id="mex_404">
        <p>This isn’t the show you wanted to watch… but the remote doesn’t work anymore.</p>
        <p>You switched channels and tuned into a forbidden broadcast, the one that never airs… for a reason.
        Stay if you like, but be aware: the characters in this show might notice you’re watching. And trust me… they don’t like uninvited guests.</p>
      </div>
    </div>
  </div>
</template>

<style>
.not-found
{
width:100%;
height: 100dvh;
overflow: hidden;
position: fixed;
min-height:750px;
}

#data-404
{
position: absolute;
z-index:2;
width:100%;
color:#fff;
display: flex;
justify-content: space-between;
align-items: center;
padding:0px 30px;
top:50%;
transform: translateY(-50%);
}

#data-404>div
{
position: absolute;
left:30px;
}

#link_404
{
color:#fff;
text-transform: uppercase;
font-size:.8rem;
padding:15px 30px;
border: 1px solid #fff;
border-radius: 500px;
display: inline-block;
}

#data-404 p
{
font-size:1.3rem;
margin-top: 0px;
margin-bottom: 5px;
}

#h1_404
{
font-size:8rem;
line-height: 80%;
font-family: 'druk', sans-serif;
position: absolute;
z-index:3;
color:var(--white);
left:0px;
right:0px;
margin: auto;
top:40px;
text-align: center;
}

#image_404.evil::before,
#image_404.good::before
{
content:"";
display: block;
width: 100%;
height: 100%;
position: absolute;
background:var(--red);
z-index:3;
mix-blend-mode:darken;
}

#image_404.good::before
{
background:var(--blu);
}

#image_404
{
width:100%;
height: 100%;
position: absolute;
top:0px;
left:0px;
z-index:1;
}

#image_404 img
{
width:100%;
height: 100%;
position: absolute;
display: block;
object-fit: cover;
z-index:1;
}

#image_404 img:last-child
{
z-index:2;
mix-blend-mode:darken;
}

#mex_404
{
padding:0px 60px;
max-width:700px;
width:100%;
text-align: center;
font-size:0.9rem;
line-height:130%;
color:var(--white);
position: absolute;
z-index:22;
left:50%;
transform: translateX(-50%);
bottom:40px;
}

#mex_404 p
{
margin: 0px;
}

/* Tablet verticale (es. iPad portrait) */
@media only screen and (max-width: 920px) and (orientation: portrait) 
{
  #mex_404
  {
  bottom:15dvh;
  }

}

/* Smartphone medio/grande */
@media only screen and (max-width: 576px) 
{

  #h1_404
  {
  top:15dvh;
  }

  #mex_404
  {
  display: none;
  }

  #data-404
  {
  position: absolute;
  z-index:2;
  color:#fff;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  display:block;
  align-items: center;
  padding:0px 30px;
  text-align: center;
  }

  #link_404
  {
  margin-top:10px;
  }

}





</style>
<script setup>

definePageMeta({
  navClass: 'no_blend'
})

const good = inject('good');
const evil = inject('evil');
const neutral = inject('neutral');
const themeClass = computed(() => ({ good: good.value, evil: evil.value, neutral: neutral.value }));
</script>