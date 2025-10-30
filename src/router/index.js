import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'
import GalleryNature from '../components/GalleryNature.vue'
import GalleryPortrait from '../components/GalleryPortrait.vue'
import GalleryPeople from '../components/GalleryPeople.vue'
import GalleryArchitecture from '../components/GalleryArchitecture.vue'
import GalleryAnimals from '../components/GalleryAnimals.vue'
import GalleryTravel from '../components/GalleryTravel.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/gallery/nature', component: GalleryNature },
  { path: '/gallery/portrait', component: GalleryPortrait },
  { path: '/gallery/architecture', component: GalleryArchitecture },
  { path: '/gallery/people', component: GalleryPeople },
  { path: '/gallery/animals', component: GalleryAnimals },
  { path: '/gallery/travel', component: GalleryTravel },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
