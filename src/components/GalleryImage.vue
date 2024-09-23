<template>
  <div class="gallery-image-container">
    <div
      class="gallery-image"  
      :style="{ 'background-image': `url(${src})`, 'background-size': 'cover' }"
      @mouseover="hovering = true"
      @mouseleave="hovering = false"
    >
    </div>
  </div>
  <!-- <img
    :alt="alt"
    :class="{ 'gallery-image': true }"
    :src="src"
    @mouseover="hovering = true"
    @mouseleave="hovering = false"
  /> -->
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
    cursor: pointer;
    object-fit: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 8px
  }
</style>