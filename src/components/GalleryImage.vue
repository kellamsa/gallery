<template>
  <img
    :alt="alt"
    :class="{ 'gallery-image': true }"
    :src="src"
    @mouseover="hovering = true"
    @mouseleave="hovering = false"
  />
</template>

<script setup>
import { ref } from 'vue';

const hovering = ref(false)

const props = defineProps({
  alt: {
    type: String
  },
  src: {
    type: String,
    required: true
  }
})
</script>
<style lang="scss" scoped>
  .gallery-image {
    width: auto;
    height: 200px;
    border-radius: 8px;
    cursor: pointer;
  }
</style>