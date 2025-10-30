<template>
  <div>
    <Navbar/>
  </div>

  <section class="bg-white py-16">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <!-- Title -->
      <h2 class="text-4xl font-semibold mb-12">
        <span class="border-b-2 border-green-500 pb-1">Our Services</span>
      </h2>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform duration-300"
        >
          <component
            :is="service.icon"
            class="w-12 h-12 mx-auto text-green-500 mb-4"
          />
          <h3 class="text-lg font-semibold text-gray-800 mb-2">
            {{ service.title }}
          </h3>
          <p class="text-gray-500 text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id doloribus debitis.
          </p>
          <span class="text-green-600 font-semibold block">${{ service.price }}</span>
        </div>
      </div>
    </div>
  </section>

  <div>
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import {
  Camera,
  Heart,
  PawPrint,
  User,
  Landmark,
  PlaySquare,
} from "lucide-vue-next";

const services = [
  {
    title: "Camera",
    icon: Camera,
    price: 29,
  },
  {
    title: "Wedding Photography",
    icon: Heart,
    price: 46,
  },
  {
    title: "Animal",
    icon: PawPrint,
    price: 24,
  },
  {
    title: "Portrait",
    icon: User,
    price: 40,
  },
  {
    title: "Travel",
    icon: Landmark,
    price: 35,
  },
  {
    title: "Video Editing",
    icon: PlaySquare,
    price: 15,
  },
];
</script>

<style scoped>
section {
  font-family: "Poppins", sans-serif;
}
</style>
