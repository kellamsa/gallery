<template>
  <div
    class="gallery-image"  
    :style="{ 'background-image': `url(${src})` }"
    @mouseover="hovering = true"
    @mouseleave="hovering = false"
    @click="$emit('click')"
  >
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { art } from '../data'

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
    position: relative;
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: auto;
    border-radius: 8px
  }

  .gallery-image-description {

  }
</style>