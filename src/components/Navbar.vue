<template>
  <header class="flex justify-between items-center px-8 pb-4 pt-8 font-poppins relative">
    <!-- Logo -->
    <h1 class="text-3xl font-semibold text-emerald-600">
      <router-link to="/">Eclipso</router-link>
    </h1>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex gap-6 text-base uppercase tracking-wider relative">
      <router-link to="/" class="text-emerald-500 font-medium hover:text-emerald-600">Home</router-link>
      <router-link to="/services" class="hover:text-emerald-500">Services</router-link>
      <router-link to="/about" class="hover:text-emerald-500">About</router-link>
      <router-link to="/contact" class="hover:text-emerald-500">Contact</router-link>

      <!-- 🖼️ Gallery Dropdown -->
      <div class="relative group">
        <button class="hover:text-emerald-500 focus:outline-none uppercase">Gallery</button>
        <div
          class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50"
        >
          <router-link
            v-for="link in galleryLinks"
            :key="link.path"
            :to="link.path"
            class="block px-4 py-2 hover:bg-emerald-100 text-gray-700"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Social Icons -->
    <div class="hidden md:flex gap-4 text-gray-600 text-xl">
      <FaceSmileIcon class="w-6 h-6 hover:text-emerald-500 transition" />
      <ChatBubbleOvalLeftEllipsisIcon class="w-6 h-6 hover:text-emerald-500 transition" />
      <CameraIcon class="w-6 h-6 hover:text-emerald-500 transition" />
      <PlayCircleIcon class="w-6 h-6 hover:text-emerald-500 transition" />
    </div>

    <!-- Mobile Menu Button -->
    <button
      @click="toggleMenu"
      class="md:hidden text-gray-700 text-2xl focus:outline-none"
    >
      <Bars3Icon v-if="!isOpen" class="w-8 h-8" />
      <XMarkIcon v-else class="w-8 h-8" />
    </button>

    <!-- Mobile Dropdown (Slide-in Drawer Style) -->
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        class="fixed top-0 right-0 h-[400px] sm:h-full w-[40%] sm:w-[70%] md:hidden bg-white shadow-2xl flex flex-col items-start py-6 px-8 space-y-5 z-50 rounded-l-3xl border-l border-emerald-100 overflow-y-auto"
      >
        <!-- Close Button -->
        <button
          @click="toggleMenu"
          class="absolute top-5 right-5 text-gray-600 hover:text-emerald-500 transition"
        >
          <XMarkIcon class="w-8 h-8" />
        </button>

        <!-- Links -->
        <router-link to="/" class="hover:text-emerald-500 text-lg" @click="toggleMenu">Home</router-link>
        <router-link to="/services" class="hover:text-emerald-500 text-lg" @click="toggleMenu">Services</router-link>
        <router-link to="/about" class="hover:text-emerald-500 text-lg" @click="toggleMenu">About</router-link>
        <router-link to="/contact" class="hover:text-emerald-500 text-lg" @click="toggleMenu">Contact</router-link>

        <!-- 📸 Gallery Section -->
        <div class="w-full">
          <h3 class="font-semibold text-gray-700 mt-2 mb-2 uppercase tracking-wider">Gallery</h3>
          <div class="flex flex-col space-y-2 pl-2">
            <router-link
              v-for="link in galleryLinks"
              :key="link.path"
              :to="link.path"
              class="hover:text-emerald-500 text-base"
              @click="toggleMenu"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>

        <!-- Social Icons -->
        <div class="flex gap-5 text-gray-600 text-xl pt-6">
          <FaceSmileIcon class="w-6 h-6 hover:text-emerald-500 transition-transform transform hover:scale-110" />
          <ChatBubbleOvalLeftEllipsisIcon class="w-6 h-6 hover:text-emerald-500 transition-transform transform hover:scale-110" />
          <CameraIcon class="w-6 h-6 hover:text-emerald-500 transition-transform transform hover:scale-110" />
          <PlayCircleIcon class="w-6 h-6 hover:text-emerald-500 transition-transform transform hover:scale-110" />
        </div>
      </div>
    </transition>
  </header>

  <hr class="mx-auto my-8 border-0 h-0.5 rounded-full bg-gradient-to-r from-gray-200 via-gray-200 to-gray-200" />
</template>

<script setup>
import { ref } from 'vue'
import {
  Bars3Icon,
  XMarkIcon,
  FaceSmileIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CameraIcon,
  PlayCircleIcon,
} from '@heroicons/vue/24/solid'

const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)

const galleryLinks = [
  { name: 'Portrait', path: '/gallery/portrait' },
  { name: 'People', path: '/gallery/people' },
  { name: 'Nature', path: '/gallery/nature' },
  { name: 'Animals', path: '/gallery/animals' },
  { name: 'Travel', path: '/gallery/travel' },
  { name: 'Architecture', path: '/gallery/architecture' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

/* Fade animation for dropdowns */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide-fade for mobile drawer */
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
