import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import GalleryView from '@components/GalleryView.vue'

const routes = [
  { path: '/', component: GalleryView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')