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
  <GalleryImageModal
    v-if="imageModalOpen"
    :activeImage="activeImage"
    @close="closeImageModal"
  />
</template>

<script setup>
import GalleryImage from '@components/GalleryImage.vue'
import GalleryImageModal from '@components/GalleryImageModal.vue'
import { onMounted, ref } from 'vue';
import { art, artOrder } from '../data'

const imageSources = ref([])
const imageModalOpen = ref(false)
const activeImage = ref(null)

const openImageModal = (src) => {
  activeImage.value = src
  imageModalOpen.value = true
}

const closeImageModal = () => {
  imageModalOpen.value = false
}

const imageDimensions = (index) => {
  const indexToDimensions = {
    0: '1 / 1 / 3 / 3',
    1: '1 / 3 / 1 / 3',
    2: '1 / 4 / 1 / 4',
    4: '2 / 3 / 2 / 5',
    5: '2 / 5 / 3 / 6'
  }

  if (indexToDimensions) return indexToDimensions[index]

  return { row: '', column: '' }
}

onMounted(() => {
  imageSources.value = artOrder.map((order) => {
    return `/src/assets/images/${art[order].filename}`
  })

  const openImageModal = () => {
  
  }
})
</script>


<style lang="scss" scoped>
.gallery {
  display: grid;
  gap: 1rem;
  grid-template-rows: 200px 200px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media screen and (max-width: 720px) {
  .gallery {
    display: flex;
    flex-wrap: wrap;
  }

  .gallery-image {
    height: 400px;
    width: 100%;
  }
}
</style>