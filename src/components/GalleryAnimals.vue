<template>
  <div>
    <Navbar />
  </div>

  <div class="min-h-screen p-6 bg-white">
    <h1 class="text-4xl md:text-5xl font-bold text-center mb-10 text-green-800">
      Animals Gallery
    </h1>

    <!-- Masonry-style responsive grid -->
    <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="break-inside-avoid overflow-hidden rounded-xl shadow-lg hover:scale-[1.03] transform transition duration-500 cursor-pointer group"
        @click="openModal(image)"
      >
        <img
          :src="image.url"
          :alt="image.title"
          class="w-full h-auto object-cover rounded-xl group-hover:opacity-80 transition"
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

import animal1 from '@/assets/animal/animal1.png'
import animal2 from '@/assets/animal/animal2.png'
import animal3 from '@/assets/animal/animal3.png'
import animal4 from '@/assets/animal/animal4.png'
import animal5 from '@/assets/animal/animal5.png'
import animal6 from '@/assets/animal/animal6.png'
import animal7 from '@/assets/animal/animal7.png'
import animal8 from '@/assets/animal/animal8.png'
import animal9 from '@/assets/animal/animal9.png'
import animal10 from '@/assets/animal/animal10.png'
import animal11 from '@/assets/animal/animal11.png'
import animal12 from '@/assets/animal/animal12.png'
import animal13 from '@/assets/animal/animal13.png'

// 🦓 Gallery data
const images = ref([
  { url: animal1, title: 'Majestic Lion', description: 'The king of the savannah resting under the sun.' },
  { url: animal2, title: 'Gentle Elephant', description: 'A calm giant walking through the grasslands.' },
  { url: animal3, title: 'Curious Fox', description: 'A red fox peeking curiously through the forest.' },
  { url: animal4, title: 'Playful Dolphins', description: 'Dolphins leaping joyfully in the ocean.' },
  { url: animal5, title: 'Snowy Owl', description: 'A white owl gazing through the winter woods.' },
  { url: animal6, title: 'Colorful Parrot', description: 'A bright macaw displaying its vibrant feathers.' },
  { url: animal7, title: 'Wild Horse', description: 'Freedom in motion on the open plains.' },
  { url: animal8, title: 'Curious Cat', description: 'A house cat exploring the garden.' },
  { url: animal9, title: 'Grazing Deer', description: 'A serene scene of deer feeding in a meadow.' },
  { url: animal10, title: 'Mighty Eagle', description: 'An eagle soaring high with wings wide open.' },
  { url: animal11, title: 'Friendly Dog', description: 'A loyal companion waiting for playtime.' },
  { url: animal12, title: 'Panda Eating Bamboo', description: 'A peaceful panda enjoying its meal.' },
  // 🆕 Added one more animal
  { url: animal13, title: 'Golden Tiger', description: 'A rare golden tiger resting in the shade of the jungle.' }
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

/* Masonry layout fix for Chrome/Safari */
.break-inside-avoid {
  break-inside: avoid;
}
</style>
