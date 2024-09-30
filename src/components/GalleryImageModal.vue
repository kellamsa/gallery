<template>
  <BaseModal
    @close="closeImageModal"
  >
    <div style="height: 100%;">
      <img
        style="object-fit: contain"
        :src="activeImage"
      />
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

function closeImageModal() {
  $emit('close')
}
</script>