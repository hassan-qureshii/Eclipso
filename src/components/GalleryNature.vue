<template>
  <div>
    <Navbar />
  </div>

  <div class="min-h-screen p-6 ">
    <h1 class="text-4xl md:text-5xl font-bold text-center mb-10 text-green-800">
      Nature Gallery
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
          :class="image.size"
          class="w-full object-cover rounded-xl group-hover:opacity-80 transition"
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
          class="max-w-3xl w-full rounded-lg shadow-2xl border-4 border-white"
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

// ✅ Local image imports
import nature1 from '@/assets/nature/nature1.jpg'
import nature2 from '@/assets/nature/nature2.jpg'
import nature3 from '@/assets/nature/nature3.jpg'
import nature4 from '@/assets/nature/nature4.jpg'
import nature5 from '@/assets/nature/nature5.jpg'
import nature6 from '@/assets/nature/nature6.jpg'
import nature7 from '@/assets/nature/nature7.jpg'
import nature8 from '@/assets/nature/nature8.jpg'
import nature9 from '@/assets/nature/nature9.jpg'
import nature10 from '@/assets/nature/nature10.png'
import nature11 from '@/assets/nature/nature11.png'
import nature12 from '@/assets/nature/nature12.png'

import { ref } from 'vue'

// ✅ Use your local images
const images = ref([
  { url: nature1, title: 'Misty Forest', description: 'A quiet foggy forest.', size: 'h-64' },
  { url: nature2, title: 'Mountain Stream', description: 'A cool stream flowing through rocks.', size: 'h-80' },
  { url: nature3, title: 'Blue Sky', description: 'Clear sky over green hills.', size: 'h-56' },
  { url: nature4, title: 'Waterfall Bliss', description: 'A majestic waterfall deep in the woods.', size: 'h-96' },
  { url: nature5, title: 'Sunlit Path', description: 'Golden sunlight filtering through trees.', size: 'h-72' },
  { url: nature6, title: 'Serene Lake', description: 'A peaceful lake reflecting mountains.', size: 'h-80' },
  { url: nature7, title: 'Leafy Greens', description: 'Close-up of vibrant forest foliage.', size: 'h-64' },
  { url: nature8, title: 'Hidden Falls', description: 'A hidden waterfall oasis.', size: 'h-72' },
  { url: nature9, title: 'Forest Trail', description: 'A narrow trail through tall trees.', size: 'h-80' },
  { url: nature10, title: 'Golden Sunset', description: 'Warm sunlight over green meadows.', size: 'h-64' },
  { url: nature11, title: 'Snowy Pines', description: 'Frost-covered pines in winter.', size: 'h-72' },
  { url: nature12, title: 'Tranquil Valley', description: 'A green valley surrounded by hills.', size: 'h-80' }
])

const selectedImage = ref(null)

const openModal = (image) => {
  selectedImage.value = image
}

const closeModal = () => {
  selectedImage.value = null
}
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
