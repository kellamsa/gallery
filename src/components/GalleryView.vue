<template>
  <div class="gallery">
    <template v-for="(src, index) in imageSources">
      <GalleryImage
        alt="art image"
        :src="src"
        @click="openImageModal(src)"
        :style="{ 'grid-area': imageDimensions(index) }"
        class="gallery-image"
      >
      </GalleryImage>
    </template>
  </div>
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

const imageDimensions = (index) => {
  const indexToDimensions = {
    0: '1 / 1 / 3 / 3',
    1: '1 / 3 / 1 / 3',
    2: '1 / 4 / 1 / 4',
    4: '2 / 3 / 2 / 5',
    5: '2 / 5 / 5 / 6'
  }

  if (indexToDimensions) return indexToDimensions[index]

  return { row: '', column: '' }
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
  display: grid;
  gap: 0.5rem;
  row-gap: 0.5rem;
  grid-template-rows: 200px 200px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 1rem 0.5rem;
}
</style>