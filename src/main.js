import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import GalleryView from '@components/GalleryView.vue'
import AboutView from '@components/AboutView.vue'
import ArchiveView from '@components/ArchiveView.vue'

const routes = [
  { path: '/', component: GalleryView },
  { path: '/archive', component: ArchiveView },
  { path: '/about', component: AboutView }
]

const router = createRouter({
  history: createMemoryHistory(),
  linkActiveClass: 'nav--active',
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')