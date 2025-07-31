<template>
    <div id="page">
  <div class="not-found">
    <h1>404</h1>
    <p>Page not found: {{ $route.fullPath }}</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
  </div>
</template>

<script setup>
</script>