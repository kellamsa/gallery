
<template>
  <div class="app-container">
    <nav class="nav">
      <RouterLink to="/" class="fancy">The Ena Stewart Collection</RouterLink>
      <div class="nav-right fancy">
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/shop">Shop</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
  <footer class="footer">
    Developed by Andrew Kellams
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

main {
  height: 100%;
  flex-grow: 1;
  padding: 0rem 2rem;
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
