<template>
  <div class="transition_loader" :class="{ active: $isActive, prep_transition: $isprep_transition }">

    <div class="text_loading left"><div>Loading</div></div>

    <div class="text_loading"><div>{{ nextTitle }}</div></div>

    <div class="fondo_columns" :class="{ column_hide: $hide }" >
    <div
        v-for="(delay, index) in delays"
        :key="index"
        class="column"
       :style="{ transitionDelay: `${delay}ms` }"
    ></div>
  </div>
  </div>  
</template>

<script setup>
const delays = ref([])

onMounted(async () => 
{
delays.value = Array.from({ length: 10 }, () => Math.floor(Math.random() * 700))
});

const { $isActive } = useNuxtApp();
const { $hide } = useNuxtApp();
const { $isprep_transition } = useNuxtApp();
const nextTitle = useState('next-title');
</script>
