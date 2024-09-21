<template>
  <template v-for="src in imageSources">
    <GalleryImage
      alt="art image"
      :src="src"
      @click="openImageModal(src)"
    >
    </GalleryImage>
  </template>
  <BaseModal
    v-if="imageModalOpen"
    @close="closeImageModal"
  />
</template>

<script setup>
import GalleryImage from '@components/GalleryImage.vue'
import BaseModal from '@components/BaseModal.vue'
import { onMounted, ref } from 'vue';

let imageSources = ref([])
let imageModalOpen = ref(false)

const openImageModal = () => {

}

const closeImageModal = () => {

}

onMounted(() => {
  const images = import.meta.glob('../assets/images/art-*.png')

  for (const path in images) {
    images[path]().then((module) => {
      imageSources.value.push(module.default) // Add the image path to the array
    })
  }

  const openImageModal = () => {
  
  }
})
</script>


<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  grid-column: center-start;
  gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>