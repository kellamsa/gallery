<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <slot></slot>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits([''])

function closeModal() {
  $emit('close')
}

const props = defineProps({
  width: {
    type: String
  },
  open: {
    type: Boolean
  },
})
</script>

<style scoped>
.modal-overlay {
  width: fit-content;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
}
</style>