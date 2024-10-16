<template>
  <BaseModal
    @close="closeImageModal"
  > 
    <div style="display: flex; height: 100%;">
      <img
        class="modal-image"  
        :src="activeImage"
        @mouseover="hovering = true"
        @mouseleave="hovering = false"
        @click="closeImageModal()"
      />
      <div
        v-if="showInfo"
        style="height: 100%; position: absolute; left: 0; bottom: 0; width: 100%; display: flex; flex-direction: column; gap: 1rem; align-items: center; justify-content: center; background: rgba(0, 0, 0, 0.5);"
        @click="showInfo = false"
      >
        <div style="font-size: 3rem; color: white;">
          {{ artData.title }}
        </div>
        <div style="font-size: 2rem; color: white;">
          {{ artData.dimensions }}
        </div>
      </div>
      <button @click="showInfo = !showInfo" style="padding: 1rem; position: absolute; bottom: 0; right: 0; cursor: pointer; background: rgba(0, 0, 0, 0); border: none">
        <InfoIcon style="fill: white; height: 50px; width: 50px;" />
      </button>
    </div>
  </BaseModal>
</template>

<script setup>
import BaseModal from '@components/BaseModal.vue'
import InfoIcon from '@components/InfoIcon.vue'
import { art } from '../data'
import { computed, ref } from 'vue';


const props = defineProps({
  activeImage: {
    type: String
  }
})

const showInfo = ref(false)

const emits = defineEmits(['close'])

function closeImageModal() {
  emits('close')
}

const imageIndex = computed(() => {
  const match = props.activeImage.match(/-(\d+)\.[^.]+$/);

  if (!match) return -1
  
  return match[1]
})

const artData = computed(() => {
  if (imageIndex.value < 0) return {}

  return art[imageIndex.value]
})
</script>

<style lang="scss" scoped>
.modal-image {
  position: relative;
  cursor: pointer;
  object-fit: contain;
  width: auto;
  height: 100%;
}

.modal-image-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>