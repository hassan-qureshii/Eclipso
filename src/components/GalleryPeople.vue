<template>
  <div>
    <Navbar />
  </div>

  <div class="min-h-screen p-6">
    <h1 class="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
      People Gallery
    </h1>

    <!-- Masonry Layout -->
    <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative overflow-hidden rounded-xl shadow-lg hover:scale-[1.03] transform transition duration-500 cursor-pointer group break-inside-avoid"
        @click="openModal(image)"
      >
        <img
          :src="image.url"
          :alt="image.title"
          class="w-full h-[420px] object-cover object-center rounded-xl group-hover:opacity-80 transition"
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
          class="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-white object-contain"
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

// Import local images
import img1 from '@/assets/people/people1.png'
import img2 from '@/assets/people/people2.png'
import img3 from '@/assets/people/people3.png'
import img4 from '@/assets/people/people4.png'
import img5 from '@/assets/people/people5.png'
import img6 from '@/assets/people/people6.png'
import img7 from '@/assets/people/people7.png'
import img8 from '@/assets/people/people8.png'
import img9 from '@/assets/people/people9.png'
import img10 from '@/assets/people/people10.png'
import img11 from '@/assets/people/people11.png'
import img12 from '@/assets/people/people12.png'

// Consistent portrait style
const images = ref([
  { url: img1, title: 'Smiling Woman', description: 'A joyful smile captured naturally.' },
  { url: img2, title: 'Man in Thought', description: 'Deep contemplation under soft light.' },
  { url: img3, title: 'Young Girl', description: 'Innocent expression with natural background.' },
  { url: img4, title: 'Portrait of Elder', description: 'Wisdom and life reflected in the eyes.' },
  { url: img5, title: 'Fashion Model', description: 'Elegant pose with artistic lighting.' },
  { url: img6, title: 'Smiling Man', description: 'Candid smile in natural environment.' },
  { url: img7, title: 'Child Playing', description: 'Joyful moments of childhood.' },
  { url: img8, title: 'Young Woman', description: 'Gentle expression in soft light.' },
  { url: img9, title: 'Thinking Woman', description: 'Deep in thought in a cozy environment.' },
  { url: img10, title: 'Smiling Child', description: 'Joyful expression in a playful moment.' },
  { url: img11, title: 'Professional Woman', description: 'Confident and professional portrait.' },
  { url: img12, title: 'Smiling Teen', description: 'Youthful energy and happiness.' }
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

.break-inside-avoid {
  break-inside: avoid;
}
</style>
