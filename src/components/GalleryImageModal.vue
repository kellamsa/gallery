<template>
  <BaseModal
    @close="closeImageModal"
  >
    <div
      class="modal-image"  
      :style="{ 'background-image': `url(${activeImage})` }"
      @mouseover="hovering = true"
      @mouseleave="hovering = false"
      @click="closeImageModal()"
    >
      <div class="modal-image-footer">
        <div>The Yellow Flower</div>
        <div>A yellow flower</div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup>
import BaseModal from '@components/BaseModal.vue'

const props = defineProps({
  activeImage: {
    type: String
  }
})

const emits = defineEmits(['close'])

function closeImageModal() {
  emits('close')
}
</script>

<style lang="scss" scoped>
.modal-image {
  position: relative;
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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