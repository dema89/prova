<template>
  <div>
    <h1 class="title">Pagina About</h1>
    <NuxtLink to="/">Torna alla Home</NuxtLink>
    
  </div>
</template>

<script setup>

  const { $splitType } = useNuxtApp();

onMounted(async () => {


  // Usa SplitType
  const text = $splitType('.split', { types: 'words, chars' });
});


</script>