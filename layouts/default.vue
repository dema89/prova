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
          <path class="st0" d="M.3,49.9h9.8c5.5,0,7.2,3.4,7.2,8.7v27.6c0,5.6-1.9,9-7.2,9H.3v-45.4H.3ZM6.7,88.7h1.5c2,0,2.5-1.1,2.5-3.5v-25.6c0-2.6-.6-3.5-2.2-3.5h-1.8s0,32.6,0,32.6Z"/>
          <path class="st0" d="M29.4,86.8h-4.7l-.8,8.5h-5.7l5.2-45.4h7.6l5.5,45.4h-6.2l-.8-8.5h0ZM25.3,80h3.3l-1.7-16.8s-1.6,16.8-1.6,16.8Z"/>
          <path class="st0" d="M44,95.3h-6.4v-45.4h10.4c4.3,0,6.4,1.9,6.4,7v8.1c0,3.8-1.6,5.3-2.8,5.8,1.4.7,2.8,1.8,2.8,4.9v15.9c0,1.9.3,2.7.6,3.4v.3h-6.3c-.3-.5-.6-1.3-.6-3.7v-13.7c0-2-.3-2.9-2.4-2.9h-1.6v20.3h0ZM44,68.6h1.7c1.8,0,2.3-1.2,2.3-3.2v-6.3c0-2-.3-2.9-2.3-2.9h-1.7v12.5h0Z"/>
          <path class="st0" d="M63.2,95.3h-6.4v-45.4h6.4v18.2l5-18.2h6.2l-6,21.1,6.6,24.3h-6.6l-5.3-19.7v19.7h0Z"/>
          <path class="st0" d="M90.8,56.5h-8.2v11.9h6.4v6.9h-6.4v13.1h8.5v6.9h-14.9v-45.4h14.6v6.6Z"/>
          <path class="st0" d="M98.7,49.9l5.5,24.3v-24.3h5.8v45.4h-5.2l-6.1-26.1v26.1h-5.8v-45.4s5.8,0,5.8,0Z"/>
          <path class="st0" d="M121.6,49.5c5.3,0,7.3,2.5,7.3,7.9v7.4h-6.2v-6.5c0-1.5-.3-2.7-1.8-2.7s-1.9,1-1.9,3.2v.9c0,2.6.5,4,2.6,7l4.1,5.7c2.9,4,3.8,6.3,3.8,11.5v1.5c0,6.7-2.6,10.6-8.3,10.6h-1.2c-5.2,0-7.8-3-7.8-8.6v-9.1h6.3v7.9c0,2.1.7,3.2,2.1,3.2s2.1-1,2.1-3.9v-1c0-3.3-.3-4.3-2.6-7.6l-4.1-5.6c-2.7-3.8-3.5-6.7-3.5-11.2v-1.5c0-6.1,2.8-9.1,7.9-9.1h1.2Z"/>
          <path class="st0" d="M140.7,49.5c5.3,0,7.3,2.5,7.3,7.9v7.4h-6.2v-6.5c0-1.5-.3-2.7-1.8-2.7s-1.9,1-1.9,3.2v.9c0,2.6.5,4,2.6,7l4.1,5.7c2.9,4,3.8,6.3,3.8,11.5v1.5c0,6.7-2.6,10.6-8.3,10.6h-1.2c-5.2,0-7.8-3-7.8-8.6v-9.1h6.3v7.9c0,2.1.7,3.2,2.1,3.2s2.1-1,2.1-3.9v-1c0-3.3-.3-4.3-2.6-7.6l-4.1-5.6c-2.7-3.8-3.5-6.7-3.5-11.2v-1.5c0-6.1,2.8-9.1,7.9-9.1h1.2,0Z"/>
          <path class="st0" d="M19.2.5v38.4h7.8v7h-14.2V.5s6.4,0,6.4,0Z"/>
          <path class="st0" d="M35.3,45.9h-6.4V.5h6.4v45.4Z"/>
          <path class="st0" d="M43.8,46.5c-3.8,0-6.1-3.6-6.1-8.3V9.8C37.7,4.7,39.5,0,45.6,0h1.2c6.9,0,7.6,4.8,7.6,10.2v4.6h-6.2v-5.1c0-2-.5-3.1-2-3.1s-2,1-2,3.1v26.5c0,2.1.7,3.2,2.1,3.2s2.4-1.2,2.4-2.9v-11.3h-2.9v-7h9v27.6h-3.6c0-.2-.6-2.5-1.1-4.5-.5,1.5-2.6,5.1-5.8,5.1h-.5Z"/>
          <path class="st0" d="M93.3.5v6.6h-5.4v38.8h-6.4V7.1h-5.4V.5h17.2Z"/>
          <path class="st0" d="M97.3,45.3h-3.1v-21.9h3.1v21.9Z"/>
          <path class="st0" d="M101.3,23.4l2.6,11.8v-11.7h2.8v21.9h-2.5l-2.9-12.6v12.6h-2.8v-21.9h2.8Z"/>
          <path class="st0" d="M118.7,23.4v3.2h-2.6v18.7h-3.1v-18.7h-2.6v-3.2h8.3,0Z"/>
          <path class="st0" d="M122.6,45.3h-3.1v-21.9h3.1v8.8h2.1v-8.8h3.1v21.9h-3.1v-9.6h-2.1s0,9.6,0,9.6Z"/>
          <path class="st0" d="M136.1,23.4v3.2h-3.9v5.7h3.1v3.3h-3.1v6.3h4.1v3.3h-7.2v-21.9h7,0Z"/>
          <path class="st0" d="M64.1,35c-.9-.6-.9-1.4-.9-1.4-.4-1.3-.8-1.9-1.1-2.4,0,0-.3-.3-.4-.6-.1-.2,0-.3,0-.5.3-.5,1.4.3,1.5.9.2.7.4.8.5.7.4-.4.5-1.3.5-1.8-.2-2.5-.5-3.6.1-3.7.6,0,.6,2.4.8,3.3,0,.3.3.2.3,0,.4-3,.3-4,1-3.9.6.1,0,3.7,0,4.1,0,.3.2.3.3,0,.7-3.1.8-3.4,1.2-3.3.4.1-.2,2.7-.4,3.6,0,.3.1.3.3.2.2-.2.4-.9.7-1.7.2-.6.7-.2.6.1-.3,1-.9,3.2-.9,3.2,0,1-.6,2.3-.6,2.3-.1.2-.3.5-.5.7v10.6h6.7V.5h-6.8v7.7l-.6.5h1.9s-.6,6.4-3.1,11.9V.5h-7.6v45.5h6.7v-10.9Z"/>
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
          <svg viewBox="0 0 828 260" fill="none">
            <path d="M0 2.75022H54.6255C85.3139 2.75022 94.7995 21.7213 94.7995 51.2938V205.238C94.7995 236.485 84.198 255.456 54.6255 255.456H0V2.24805V2.80601V2.75022ZM35.7102 219.132H44.0798C55.2392 219.132 58.0291 212.994 58.0291 199.603V56.8177C58.0291 42.3104 54.6813 37.2887 45.7537 37.2887H35.7102V219.076V219.132Z" fill="white"/>
            <path d="M162.258 208.526H136.034L131.57 255.954H99.7655L128.78 2.74609H171.186L201.874 255.954H167.28L162.816 208.526H162.258ZM139.437 170.64H157.85L148.365 76.9564L139.437 170.64Z" fill="white"/>
            <path d="M243.722 255.954H208.012V2.74609H265.985C289.978 2.74609 301.696 13.3476 301.696 41.8041V86.9999C301.696 108.203 292.768 116.572 286.072 119.362C293.884 123.268 301.696 129.406 301.696 146.703V235.365C301.696 245.966 303.369 250.43 305.043 254.336V256.01H269.891C268.217 253.22 266.543 248.756 266.543 235.365V158.978C266.543 147.819 264.869 142.797 253.152 142.797H244.224V256.01H243.666L243.722 255.954ZM243.722 107.031H253.208C263.251 107.031 266.041 100.335 266.041 89.176V54.0237C266.041 42.8643 264.367 37.8425 253.208 37.8425H243.722V107.533V106.975V107.031Z" fill="white"/>
            <path d="M350.797 255.954H315.087V2.74609H350.797V104.241L378.696 2.74609H413.29L379.812 120.422L416.638 255.954H379.812L350.239 146.089V255.954H350.797Z" fill="white"/>
            <path d="M504.686 39.5723H458.932V105.915H494.642V144.415H458.932V217.454H506.36V255.954H423.278V2.74609H504.686V39.5723Z" fill="white"/>
            <path d="M548.766 2.74609L579.454 138.278V2.74609H611.817V255.954H582.802L548.766 110.379V255.954H516.403V2.74609H548.766Z" fill="white"/>
            <path d="M676.486 0.514772C706.058 0.514772 717.217 14.4641 717.217 44.5946V85.8845H682.623V49.6163C682.623 41.2467 680.949 34.5511 672.58 34.5511C664.21 34.5511 661.978 40.1308 661.978 52.4062V57.4279C661.978 71.9352 664.768 79.7468 676.486 96.486L699.362 128.29C715.544 150.609 720.565 163.443 720.565 192.401V200.771C720.565 238.155 706.058 259.86 674.254 259.86H667.558C638.543 259.86 624.036 243.121 624.036 211.875V161.099H659.188V205.179C659.188 216.896 663.094 223.034 670.906 223.034C678.717 223.034 682.623 217.454 682.623 201.273V195.693C682.623 177.28 680.949 171.701 668.116 153.288L645.239 122.041C630.174 100.838 625.71 84.657 625.71 59.604V51.2345C625.71 17.1981 641.333 0.458984 669.79 0.458984H676.486V0.514772Z" fill="white"/>
            <path d="M783.002 0.514772C812.575 0.514772 823.734 14.4641 823.734 44.5946V85.8845H789.14V49.6163C789.14 41.2467 787.466 34.5511 779.097 34.5511C770.727 34.5511 768.495 40.1308 768.495 52.4062V57.4279C768.495 71.9352 771.285 79.7468 783.002 96.486L805.879 128.29C822.06 150.609 827.082 163.443 827.082 192.401V200.771C827.082 238.155 812.575 259.86 780.77 259.86H774.075C745.06 259.86 730.553 243.121 730.553 211.875V161.099H765.705V205.179C765.705 216.896 769.611 223.034 777.423 223.034C785.234 223.034 789.14 217.454 789.14 201.273V195.693C789.14 177.28 787.466 171.701 774.633 153.288L751.756 122.041C736.691 100.838 732.227 84.657 732.227 59.604V51.2345C732.227 17.1981 747.85 0.458984 776.307 0.458984H783.002V0.514772Z" fill="white"/>
          </svg>
        </div>
      </div>

      <div id="header_footer">
        <div><img alt="Studio K95 - Deisgn di comunicazione e grafica Catania" src="/img/k95_logo.png" loading="lazy" decoding="async"></div>
        <div><h3>A PROJECT BY <a target="_blank" href="https://www.k95.it">STUDIO K95</a></h3></div>
        <div><a target="_blank" href="https://www.instagram.com/k95.studio/@K95.studio">INSTAGRAM</a></div>
        <div><a target="_blank" href="https://www.linkedin.com/company/studio-k95">LINKEDIN</a></div>
        <div>@2025</div>
      </div>
    </footer>
  </div>

 
</template>


<style>
#footer
{
background: var(--black);
padding:0px 60px;
padding-bottom: 30px;
line-height:140%;
display: flex;
flex-direction:column;
justify-content: space-between;
font-size:0.9rem;
gap:50px;
color:var(--white);
}

#footer h3
{
text-transform: uppercase;
font-size:0.7rem;
line-height:140%;
}

#header_footer
{
border-top:1px solid rgba(255, 255, 255, 0.4);
padding-top:10px;
margin-top: 30px;
font-size:0.7rem;
}

#header_footer, 
#footer_centro
{
width:100%;
display: flex;
}

#footer_centro
{
padding-top:160px;
flex-wrap: wrap;
}

#header_footer img
{
width:70px;
}

#header_footer a
{
color:var(--white);
}

#header_footer a
{
text-decoration: underline;
}

#header_footer div:first-child
{
width:33vw
}

#header_footer div:nth-child(2)
{
width:27vw;
}

#header_footer div:nth-child(3),
#header_footer div:nth-child(4)
{
width:13vw;
}

#header_footer div:last-child
{
width:7vw;
text-align: right;
}

#footer_centro div:first-child
{
width:35%
}

#footer_centro div:nth-child(2)
{
width:51%;
}

#footer_centro div:nth-child(3)
{
width:14%;
}

#footer_centro div:nth-child(4)
{
width:52%;
display: flex;
align-items: flex-end;
}

#footer_centro div:last-child
{
width:48%;
margin-top:160px;
}

#footer_centro div:last-child svg
{
width:100%;
}

#footer_centro p
{
margin-top:0px;
width:clamp(100px, var(--col-9), 600px);
}

#footer_centro div:first-child svg
{
width:clamp(100px, var(--col-7), 9999px);
}

#footer_centro div:nth-child(3) svg
{
width:clamp(100px, var(--col-4), 9999px);
}

#partner
{
display: flex;
gap:40px;
align-items: center;
margin-top: 20px;
}

#partner img
{
height:6dvh;
}

/* Tablet verticale (es. iPad portrait) */
@media only screen and (max-width: 920px) 
{
  	
  #footer
  {
  padding-bottom:150px;
  }

  #footer_centro
  {
  row-gap: 40px; 
  }  
  
  #footer_centro div:first-child
    {
    width:60%;
    padding-right:30px;
    }

    #footer_centro div:first-child svg,
    #footer_centro div:nth-child(2),
    #footer_centro div:nth-child(4),
    #footer_centro div:last-child
    {
    width:100%;
    }

    #footer_centro div:nth-child(3)
    {
    display: flex;
 
    align-items: flex-end;
    }

    #footer_centro div:nth-child(3) svg
    {
    width:65%;
    margin-bottom:8px;
    }

    #footer_centro div:nth-child(3)
    {
    width:40%;
    order:2;
    }

    #footer_centro div:nth-child(2)
    {
    order:4;
    }

    #footer_centro div:nth-child(4)
    {
    order:5;
    }

    #footer_centro div:last-child
    {
    margin:0px;
    order:3;
    }

    #footer_centro p 
    {
    width: clamp(300px, 100%, 500px);
    }

    #header_footer div:first-child
    {
    width:20%;
    }

    #header_footer
    {
    justify-content: space-between;
    flex-wrap: wrap;
  
    }

}

@media only screen and (max-width: 576px) 
{
   #header_footer
    {
    justify-content: space-between;
    flex-wrap: wrap;
    gap:10%;
    }

    #header_footer>div
    {
    width:25% !important;
    margin-bottom:20px;
    }

  #header_footer>div:nth-child(2)
  {
  width:63% !important;
  }

  #footer
  {
  padding-left:30px;
  padding-right:30px;
  font-size:1rem;
  }

  #footer_centro 
  {
  padding-top: 120px;
  }

   #footer_centro
  {
  row-gap: 30px; 
  }  
  
}


</style>

<script setup>
useHead({
  link: [
    { rel: 'preload', as: 'font', href: '/fonts/drukbold.woff', type: 'font/woff', crossorigin: '' },
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
