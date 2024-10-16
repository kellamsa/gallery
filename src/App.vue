
<template>
  <div class="app-container">
    <nav class="nav">
      <RouterLink to="/">Ena Stewart</RouterLink>
      <div class="nav-right">
        <RouterLink to="/">
          <div class="flex align-center" style="gap: 0.2rem">
            <BrushIcon style="width: 2rem; height: 2rem; fill: black;" />
            <span class="nav-text">Gallery</span>
          </div>
        </RouterLink> |
        <RouterLink to="/archive">
          <div class="flex align-center" style="gap: 0.2rem">
            <PhotoAlbumIcon style="width: 2rem; height: 2rem; fill: black;" />
            <span class="nav-text">Archive</span>
          </div>
        </RouterLink> |
        <RouterLink to="/about">
          <div class="flex align-center" style="gap: 0.2rem">
            <PersonIcon style="width: 2rem; height: 2rem; fill: black;" />
            <span class="nav-text">About</span>
          </div>
        </RouterLink>
      </div>
      <div
        class="nav-right-mobile"
        style="z-index: 1001"
        @click="showMenu = !showMenu"
      >
        <MenuIcon style="width: 2rem; height: 2rem; fill: black;" />
      </div>
    </nav>
    <main>
      <RouterView />
      <div
        v-if="showMenu"
        class="menu-overlay"
      >
        <div class="menu" :class="{ 'menu-active': showMenu }">
          <RouterLink to="/">
            <div class="flex align-center" style="gap: 0.2rem">
              <BrushIcon style="width: 2rem; height: 2rem; fill: black;" />
              <span class="nav-text">Gallery</span>
            </div>
          </RouterLink>
          <RouterLink to="/archive">
            <div class="flex align-center" style="gap: 0.2rem">
              <PhotoAlbumIcon style="width: 2rem; height: 2rem; fill: black;" />
              <span class="nav-text">Archive</span>
            </div>
          </RouterLink>
          <RouterLink to="/about">
            <div class="flex align-center" style="gap: 0.2rem">
              <PersonIcon style="width: 2rem; height: 2rem; fill: black;" />
              <span class="nav-text">About</span>
            </div>
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

.nav-right {
  display: flex;
  gap: 1rem;
}

.nav-right-mobile {
  display: none;
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
