<template>
  <div>
    <Navbar />
  </div>

  <div class="min-h-screen p-6">
    <h1 class="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
      Travel Gallery
    </h1>

    <!-- Masonry-style responsive grid -->
    <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative overflow-hidden rounded-xl shadow-lg hover:scale-[1.03] transform transition duration-500 cursor-pointer group"
        @click="openModal(image)"
      >
        <img
          :src="image.url"
          :alt="image.title"
          class="w-full h-[280px] object-cover rounded-xl group-hover:opacity-80 transition"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white text-center p-4"
        >
          <h2 class="text-lg font-semibold">{{ image.title }}</h2>
          <p class="text-sm">{{ image.description }}</p>
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <transition name="fade">
      <div
        v-if="selectedImage"
        class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
        @click="closeModal"
      >
        <img
          :src="selectedImage.url"
          class="max-h-[90vh] rounded-lg shadow-2xl border-4 border-white object-contain"
          alt="selected"
        />
      </div>
    </transition>
  </div>

  <div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import { ref } from 'vue'

// 🏞️ Import all local travel images
import img1 from '@/assets/travel/travel1.png'
import img2 from '@/assets/travel/travel2.png'
import img3 from '@/assets/travel/travel3.png'
import img4 from '@/assets/travel/travel4.png'
import img5 from '@/assets/travel/travel5.png'
import img6 from '@/assets/travel/travel6.png'
import img7 from '@/assets/travel/travel7.png'
import img8 from '@/assets/travel/travel8.png'
import img9 from '@/assets/travel/travel9.png'
import img10 from '@/assets/travel/travel10.png'
import img11 from '@/assets/travel/travel11.png'
import img12 from '@/assets/travel/travel12.png'

// 🧭 All images displayed in landscape orientation
const images = ref([
  { url: img1, title: 'Beach Paradise', description: 'Golden sand and turquoise waters.' },
  { url: img2, title: 'Mountain Peaks', description: 'Snow-capped peaks under clear skies.' },
  { url: img3, title: 'Desert Dunes', description: 'Golden dunes glowing in sunset light.' },
  { url: img4, title: 'City Skyline', description: 'Modern city lights shining at night.' },
  { url: img5, title: 'Tropical Forest', description: 'Lush green nature and misty air.' },
  { url: img6, title: 'Snowy Village', description: 'Peaceful village blanketed in snow.' },
  { url: img7, title: 'Coastal Cliffs', description: 'Rugged cliffs above the deep sea.' },
  { url: img8, title: 'Countryside Road', description: 'Serene road through green hills.' },
  { url: img9, title: 'Ancient Mosque', description: 'Historic Mosque surrounded by trees.' },
  { url: img10, title: 'Lake Reflection', description: 'Still waters mirroring the mountains.' },
  { url: img11, title: 'Countryside Cottage', description: 'Cozy home surrounded by flowers.' },
  { url: img12, title: 'Sunset Horizon', description: 'Golden glow at day’s peaceful end.' }
])

const selectedImage = ref(null)
const openModal = (image) => (selectedImage.value = image)
const closeModal = () => (selectedImage.value = null)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
