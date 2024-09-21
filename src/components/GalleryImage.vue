<template>
  <img
    :alt="alt"
    :class="{ 'gallery-image': true, 'gallery-image--expanded': hovering }"
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
    transition: transform 0.3s ease;

    &--expanded {
      transform: scale(1.05);
    }
  }
</style>