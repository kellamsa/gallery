<template>
  <div
    class="home-container"
  >
    <div class="featured-image">
      <img
        alt="featured image"
        src="/src/assets/images/art-4.jpg"
      />
      <div style="position: absolute; left: 0; bottom: 0; padding: 1rem;">
        <button class="fancy">
          View the Collection
        </button>
      </div>
    </div>
    <div class="fancy" style="font-size: 2rem; padding: 2rem;">
      Interior designer and decorator by day artist by night! Follow your art!
    </div>
  </div>
  <div
    class="home-container"
  >
    Another test
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.home-container {
  padding-bottom: 2rem;
  min-height: 100vh;
}

.featured-image {
  position: relative;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  button {
    background-color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  button:hover {
    transition: background-color 0.2s ease-in;
    background-color: lavender;
  }
}
</style>