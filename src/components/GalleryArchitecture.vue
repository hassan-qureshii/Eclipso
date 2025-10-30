<template>
  <div>
    <Navbar />
  </div>

  <div class="min-h-screen p-6">
    <h1 class="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
      Architecture Gallery
    </h1>

    <!-- Masonry-style responsive grid -->
    <div
      class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
    >
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
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import { ref } from "vue";

// 🏛️ Import local architecture images
import img1 from "@/assets/architecture/arch1.png";
import img2 from "@/assets/architecture/arch2.png";
import img3 from "@/assets/architecture/arch3.png";
import img4 from "@/assets/architecture/arch4.png";
import img5 from "@/assets/architecture/arch5.png";
import img6 from "@/assets/architecture/arch6.png";
import img7 from "@/assets/architecture/arch7.png";
import img8 from "@/assets/architecture/arch8.png";
import img9 from "@/assets/architecture/arch9.png";
import img10 from "@/assets/architecture/arch10.png";
import img11 from "@/assets/architecture/arch11.png";
import img12 from "@/assets/architecture/arch12.png";

// 🏙️ Local Architecture Gallery
const images = ref([
  { url: img1, title: "Modern Skyscraper", description: "A sleek glass tower rising into the sky.", size: "h-[540px]" },
  { url: img2, title: "Historic Cathedral", description: "Intricate stone carvings and grand arches.", size: "h-[600px]" },
  { url: img3, title: "Minimalist Interior", description: "Clean lines and open spaces with natural light.", size: "h-[480px]" },
  { url: img4, title: "Brutalist Design", description: "Raw concrete structure with bold geometry.", size: "h-[500px]" },
  { url: img5, title: "Futuristic Dome", description: "Innovative modern architecture with curved glass.", size: "h-[560px]" },
  { url: img6, title: "Classic Bridge", description: "Elegant arch bridge spanning a peaceful river.", size: "h-[520px]" },
  { url: img7, title: "Urban Alley", description: "City architecture blending old and new designs.", size: "h-[600px]" },
  { url: img8, title: "Coastal Villa", description: "Luxury home overlooking the sea.", size: "h-[480px]" },
  { url: img9, title: "Cityscape at Dusk", description: "Buildings glowing under the evening sky.", size: "h-[540px]" },
  { url: img10, title: "Glass Pavilion", description: "Transparency and nature merging in one space.", size: "h-[580px]" },
  { url: img11, title: "Cultural Museum", description: "Modern cultural space inspired by local art.", size: "h-[500px]" },
  { url: img12, title: "Spiral Tower", description: "Architectural marvel twisting toward the clouds.", size: "h-[560px]" },
]);

const selectedImage = ref(null);
const openModal = (image) => (selectedImage.value = image);
const closeModal = () => (selectedImage.value = null);
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
