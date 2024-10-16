
<template>
  <div class="app-container">
    <nav class="nav">
      <RouterLink to="/">Ena Stewart</RouterLink>
      <div class="nav-right">
        <RouterLink to="/">
          <button class="nav-button" style="gap: 0.2rem">
            <BrushIcon style="width: 2rem; height: 2rem; fill: black;" />
            <span class="nav-text">Gallery</span>
          </button>
        </RouterLink> |
        <RouterLink to="/archive">
          <button class="nav-button" style="gap: 0.2rem">
            <PhotoAlbumIcon style="width: 2rem; height: 2rem; fill: black;" />
            <span class="nav-text">Archive</span>
          </button>
        </RouterLink> |
        <RouterLink to="/about">
          <button class="nav-button" style="gap: 0.2rem">
            <PersonIcon style="width: 2rem; height: 2rem; fill: black;" />
            <span class="nav-text">About</span>
          </button>
        </RouterLink>
      </div>
      <button
        class="nav-right-mobile"
        @click="showMenu = !showMenu"
      >
        <MenuIcon style="width: 2rem; height: 2rem; fill: black;" />
      </button>
    </nav>
    <main>
      <RouterView />
      <div
        v-if="showMenu"
        class="menu-overlay"
      >
        <div class="menu" :class="{ 'menu-active': showMenu }">
          <RouterLink to="/" @click="showMenu = false">
            <button class="nav-button" style="gap: 0.2rem">
              <BrushIcon style="width: 2rem; height: 2rem; fill: black;" />
              <span class="nav-text">Gallery</span>
            </button>
          </RouterLink>
          <RouterLink to="/archive" @click="showMenu = false">
            <button class="nav-button" style="gap: 0.2rem">
              <PhotoAlbumIcon style="width: 2rem; height: 2rem; fill: black;" />
              <span class="nav-text">Archive</span>
            </button>
          </RouterLink>
          <RouterLink to="/about" @click="showMenu = false">
            <button class="nav-button" style="gap: 0.2rem">
              <PersonIcon style="width: 2rem; height: 2rem; fill: black;" />
              <span class="nav-text">About</span>
            </button>
          </RouterLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import BrushIcon from '@components/BrushIcon.vue'
import PhotoAlbumIcon from '@components/PhotoAlbumIcon.vue';
import PersonIcon from '@components/PersonIcon.vue'
import MenuIcon from '@components/MenuIcon.vue'
import { ref } from 'vue';

const showMenu = ref(false)

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

.nav-button {
  display: flex;
  align-items: center;
  border: none;
  background: rgba(0, 0, 0, 0);
  padding: none;
}

.nav-right {
  display: flex;
  gap: 1rem;
}

.nav-right-mobile {
  display: none;
  background: rgba(0, 0, 0, 0);
  border: none;
}

.footer {
  display: flex;
  justify-content: end;
  background-color: white;
  padding: 2rem;
}

.menu-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
}

.menu {
  display: flex;
  font-size: 2rem;
  flex-direction: column;
  gap: 1rem;
  width: 0px;
  height: 100%;
  background-color: white;
  transition: width 0.3s ease;
  margin-left: auto;
}

.menu-active {
  width: 400px;
  transition: width 0.3s ease;
}

@media screen and (max-width: 1000px) {
  .nav-right-mobile {
    display: flex;
    align-items: center;
  }

  .nav-right {
    display: none;
  }
}

</style>
