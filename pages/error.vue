<template>
  <div class="error-page">
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})
</script>