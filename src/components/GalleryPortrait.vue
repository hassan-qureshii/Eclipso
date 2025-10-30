<template>
  <div>
    <Navbar />
  </div>

  <div class="min-h-screen p-6">
    <h1 class="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
      Portrait Gallery
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

// 🖼️ Import all local images from src/assets
import portrait1 from '@/assets/portraits/portrait1.png'
import portrait2 from '@/assets/portraits/portrait2.png'
import portrait3 from '@/assets/portraits/portrait3.png'
import portrait4 from '@/assets/portraits/portrait4.png'
import portrait5 from '@/assets/portraits/portrait5.png'
import portrait6 from '@/assets/portraits/portrait6.png'
import portrait7 from '@/assets/portraits/portrait7.png'
import portrait8 from '@/assets/portraits/portrait8.png'
import portrait9 from '@/assets/portraits/portrait9.png'
import portrait10 from '@/assets/portraits/portrait10.png'
import portrait11 from '@/assets/portraits/portrait11.png'
import portrait12 from '@/assets/portraits/portrait12.png'

// 🖼️ Image data with descriptive titles and details
const images = ref([
  { url: portrait1, title: 'Golden Hour Glow', description: 'A warm portrait bathed in sunset light.', size: 'h-[520px]' },
  { url: portrait2, title: 'Studio Elegance', description: 'Elegant studio portrait with soft lighting.', size: 'h-[580px]' },
  { url: portrait3, title: 'Vintage Charm', description: 'Classic monochrome portrait with timeless appeal.', size: 'h-[500px]' },
  { url: portrait4, title: 'Natural Light Beauty', description: 'Soft outdoor light highlighting natural features.', size: 'h-[600px]' },
  { url: portrait5, title: 'Dreamy Focus', description: 'Gentle tones and blurred background for a dreamy look.', size: 'h-[540px]' },
  { url: portrait6, title: 'Urban Style', description: 'Contemporary portrait set against a modern backdrop.', size: 'h-[560px]' },
  { url: portrait7, title: 'Candid Smile', description: 'A spontaneous moment of genuine happiness.', size: 'h-[480px]' },
  { url: portrait8, title: 'Soft Expression', description: 'Close-up with expressive eyes and gentle tones.', size: 'h-[520px]' },
  { url: portrait9, title: 'Bold Contrast', description: 'Strong light and shadow play for a striking effect.', size: 'h-[580px]' },
  { url: portrait10, title: 'Serene Gaze', description: 'Calm and introspective mood captured perfectly.', size: 'h-[500px]' },
  { url: portrait11, title: 'Black & White Drama', description: 'Classic black-and-white portrait with emotion.', size: 'h-[600px]' },
  { url: portrait12, title: 'Artistic Silhouette', description: 'Creative lighting capturing an elegant outline.', size: 'h-[540px]' }
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
