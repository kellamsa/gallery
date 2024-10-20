
<template>
  <div class="app-container">
    <nav class="nav">
      Ena Stewart
      <div
        style="display: flex; align-items: center;"
      >
        <button
          class="nav-right__button"
          @click="showMenu = !showMenu"
        >
          <MenuIcon style="width: 2rem; height: 2rem; fill: black;" />
        </button>
      </div>
    </nav>
    <main>
      <RouterView />
      <div
        v-if="showMenu"
        class="menu-overlay"
      >
        <div class="menu" :class="{ 'menu-active': showMenu }">
          <div
            style="display: flex; align-items: center; justify-content: flex-end; height: 3rem;"
          >
            <button
              class="nav-right__button"
              @click="showMenu = !showMenu"
            >
              <CloseIcon style="width: 2rem; height: 2rem; fill: black;" />
            </button>
          </div>
          <RouterLink to="/" @click="showMenu = false">
            <nav class="nav-button" style="gap: 0.2rem">
              <BrushIcon style="width: 2rem; height: 2rem; fill: black;" />
              <span class="nav-text">Gallery</span>
              <ChevronRight style="margin-left: auto; width: 2rem; height: 2rem; fill: black;" />
            </nav>
          </RouterLink>
          <RouterLink to="/archive" @click="showMenu = false">
            <nav class="nav-button" style="gap: 0.2rem">
              <PhotoAlbumIcon style="width: 2rem; height: 2rem; fill: black;" />
              <span class="nav-text">Archive</span>
              <ChevronRight style="margin-left: auto; width: 2rem; height: 2rem; fill: black;" />
            </nav>
          </RouterLink>
          <RouterLink to="/about" @click="showMenu = false">
            <nav class="nav-button" style="gap: 0.2rem">
              <PersonIcon style="width: 2rem; height: 2rem; fill: black;" />
              <span class="nav-text">About</span>
              <ChevronRight style="margin-left: auto; width: 2rem; height: 2rem; fill: black;" />
            </nav>
          </RouterLink>
          <div class="menu__contact">
            <a href="https://www.instagram.com/enastewartart" target="_blank" class="flex align-center" style="gap: 0.5rem">
              <InstagramIcon style="fill: black;"/>
              <span>Visit me on <span style="font-weight: 500; text-decoration:underline">Instagram</span></span>
            </a>
            <div>
              or email me directly 
            </div>
            <div class="flex align-center" style="gap: 0.5rem; font-weight: 500;">
              <MailIcon style="fill: red;"/>
              enakaren@gmail.com
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import BrushIcon from '@components/BrushIcon.vue'
import PhotoAlbumIcon from '@components/PhotoAlbumIcon.vue'
import PersonIcon from '@components/PersonIcon.vue'
import MenuIcon from '@components/MenuIcon.vue'
import CloseIcon from '@components/CloseIcon.vue'
import { ref } from 'vue';
import ChevronRight from './components/ChevronRight.vue'
import InstagramIcon from '@components/InstagramIcon.vue'
import MailIcon from '@components/MailIcon.vue'

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
  padding: 0;
  cursor: pointer;
}

.nav--active {
  color: #007BFF;
  fill: #007BFF;
}

.nav--active .nav-text {
  text-decoration-line: underline;
  text-underline-offset: 4px;
}

.nav-right {
  display: flex;
}

.nav-right-mobile {
  display: none;
}

.nav-right__button {
  background: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
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
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  position: relative;
  padding: 0.5rem 2rem;
  font-size: 2rem;
  flex-direction: column;
  gap: 1.5rem;
  width: 0px;
  height: 100%;
  background-color: white;
  transition: width 0.3s ease;
  margin-left: auto;
}

.menu__contact {
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  padding-bottom: 2rem;
  max-width: 800px;
  margin: 0 auto;
  gap: 0.75rem; 
  font-weight: 500;
  margin-top: auto;
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
