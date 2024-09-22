
<template>
  <div class="app-container">
    <nav class="nav">
      <RouterLink to="/" class="fancy">The Ena Stewart Collection</RouterLink>
      <div class="nav-right fancy">
        <RouterLink to="/gallery">Gallery</RouterLink>
      </div>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}

.nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  font-size: 2rem;
  background-color: white;
}

.nav-right {
  display: flex;
  gap: 1rem;
}

.footer {
  display: flex;
  justify-content: end;
  background-color: white;
  padding: 2rem;
}

</style>
