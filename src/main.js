import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@components/HomeView.vue'
import AboutView from '@components/AboutView.vue'
import GalleryView from '@components/GalleryView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/gallery', component: GalleryView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')