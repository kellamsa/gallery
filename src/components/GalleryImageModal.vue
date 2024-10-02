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
      <div style="padding: 2rem; position: absolute; bottom: 0; right: 0;">
        <InfoIcon style="fill: white; height: 50px; width: 50px;" />
      </div>
    </div>
  </BaseModal>
</template>

<script setup>
import BaseModal from '@components/BaseModal.vue'
import InfoIcon from '@components/InfoIcon.vue'

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