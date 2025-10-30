<template>
  <section class="relative overflow-hidden p-4 md:p-8">
    <!-- Carousel Wrapper -->
    <div
      ref="carousel"
      class="flex transition-transform duration-700 ease-in-out gap-6 md:flex-row flex-col md:gap-6"
      :style="{
        transform: isMobile
          ? 'none'
          : `translateX(-${activeIndex * (100 / visibleCards)}%)`,
      }"
    >
      <!-- Each Slide -->
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="min-w-full md:min-w-[50%] lg:min-w-[33.333%] relative group overflow-hidden rounded-xl shadow-lg"
      >
        <img
          :src="card.image"
          :alt="card.title"
          class="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black/50 flex flex-col justify-center items-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4"
        >
          <h2
            class="text-white text-xl md:text-2xl font-semibold mb-3 text-center animate-fadeInUp"
          >
            {{ card.title }}
          </h2>

          <router-link
            :to="`/gallery/${card.title.toLowerCase()}`"
            class="border border-white text-white px-4 py-2 uppercase tracking-wider hover:bg-white hover:text-black transition mt-2"
          >
            More Photos
          </router-link>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      @click="prevSlide"
      class="hidden md:flex absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 md:p-3 hover:bg-black/70 transition"
    >
      <ChevronLeftIcon class="w-5 md:w-7 h-5 md:h-7" />
    </button>
    <button
      @click="nextSlide"
      class="hidden md:flex absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 md:p-3 hover:bg-black/70 transition"
    >
      <ChevronRightIcon class="w-5 md:w-7 h-5 md:h-7" />
    </button>

    <!-- Dots -->
    <div class="hidden md:flex justify-center gap-2 mt-4">
      <button
        v-for="(dot, i) in Math.ceil(totalSlides / visibleCards)"
        :key="i"
        @click="goToSlide(i)"
        class="w-3 h-3 rounded-full"
        :class="{
          'bg-emerald-500': i === Math.floor(activeIndex / visibleCards),
          'bg-gray-300': i !== Math.floor(activeIndex / visibleCards),
        }"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";

// ✅ Proper image imports (Vercel safe)
import nature from "@/assets/nature/nature.png";
import portrait from "@/assets/portraits/portrait.png";
import people from "@/assets/people/people.png";
import animals from "@/assets/animals.png";
import travel from "@/assets/travel/travel.png";
import architecture from "@/assets/architecture/architecture.png";

const activeIndex = ref(0);
const visibleCards = 3;
const isMobile = ref(false);

const cards = [
  { title: "Nature", image: nature },
  { title: "Portrait", image: portrait },
  { title: "People", image: people },
  { title: "Animals", image: animals },
  { title: "Travel", image: travel },
  { title: "Architecture", image: architecture },
];

const totalSlides = computed(() => cards.length);

function nextSlide() {
  if (activeIndex.value < totalSlides.value - visibleCards) activeIndex.value++;
  else activeIndex.value = 0;
}

function prevSlide() {
  if (activeIndex.value > 0) activeIndex.value--;
  else activeIndex.value = totalSlides.value - visibleCards;
}

function goToSlide(index) {
  activeIndex.value = index * visibleCards;
}

// ✅ Detect mobile screen (and clean up on unmount)
onMounted(() => {
  const checkScreen = () => (isMobile.value = window.innerWidth <= 768);
  checkScreen();
  window.addEventListener("resize", checkScreen);

  // Remove listener when component unmounts
  onBeforeUnmount(() => {
    window.removeEventListener("resize", checkScreen);
  });
});
</script>

<style scoped>
/* Smooth fade-in animation for text */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-in-out;
}

/* Always show overlay on mobile */
@media (max-width: 768px) {
  .group-hover\:opacity-100 {
    opacity: 1 !important;
  }
  .flex {
    flex-direction: column;
  }
}
</style>
