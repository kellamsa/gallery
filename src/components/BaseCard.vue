<template>
  <div>
    
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  text: {
    type: String
  },
  weak: {
    type: Boolean
  }
})

</script>

<style scoped lang="scss">
button {
  height: 30px;

  &:hover {
    background-color: lightsalmon;
  }
}

.weak {
  background-color: transparent;
  border: none;

  &:hover {
    background-color: transparent
  }
}
</style>