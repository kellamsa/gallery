<template>
    <div class="gallery">
      <template v-for="(src, index) in imageSources">
        <GalleryImage
          alt="art image"
          :src="src"
          @click="openImageModal(src)"
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
  
  onMounted(() => {
    imageSources.value = artOrder.map((order) => {
      if (!art[order].archived) return null
  
      return `/src/assets/images/${art[order].filename}`
    }).filter((art) => art)
  
    const openImageModal = () => {
    
    }
  })
  </script>
  
  
  <style lang="scss" scoped>
  .gallery {
    display: grid;
    gap: 1rem;
    grid-auto-rows: 400px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  @media screen and (max-width: 1100px) {
    .gallery {
    display: grid;
    gap: 1rem;
    grid-auto-rows: 400px;
    grid-template-columns: 1fr 1fr 1fr;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
  }
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