<template>
  <div
    class="home-container"
  >
    <img
      class="featured-image"
      alt="featured image"
      src="/src/assets/images/art-1.png"
    />
    <div class="fancy" style="font-size: 2rem; padding: 2rem;">
      Interior designer and decorator by day artist by night! Follow your art!
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.home-container {
  display: flex;
  height: 100%;
  padding-bottom: 2rem;
}

.featured-image {
  width: auto;
  height: 100%;
  max-height: 100%;
}
</style>