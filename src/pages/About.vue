<template>
  <div>
    <Navbar />

    <section class="font-poppins text-gray-800 bg-white py-20 px-6">
      <!-- Heading -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-semibold mb-2">About Us</h2>
        <div class="w-20 h-1 bg-emerald-500 mx-auto"></div>
      </div>

      <!-- Mission Section -->
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-20">
        <!-- Image -->
        <div class="flex justify-center">
          <img
            :src="missionImage"
            alt="Our Mission"
            class="w-150 h-auto object-contain rounded-lg shadow-md"
          />
        </div>

        <!-- Text -->
        <div>
          <h3 class="text-2xl font-semibold mb-4">Our Mission</h3>
          <p class="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            vel tenetur explicabo necessitatibus, ad soluta consectetur illo qui
            voluptatem. Quis soluta maiores cum. Iste modi voluptatem in
            reprehenderit fugiat suscipit dolorum harum, porro voluptate quis?
            Alias perspiciatis dicta deleniti repellendus unde laborum quo nam.
          </p>
        </div>
      </div>

      <!-- Team Section -->
      <div class="max-w-5xl mx-auto text-center md:mt-50">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div
            v-for="(member, index) in team"
            :key="index"
            class="flex flex-col items-center"
          >
            <img
              :src="member.image"
              :alt="member.name"
              class="w-50 h-50 object-cover rounded-full mb-5 shadow-md"
            />
            <h4 class="text-lg font-semibold mb-2">{{ member.name }}</h4>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed max-w-xs">
              {{ member.bio }}
            </p>
            <div class="flex gap-4">
              <a
                v-for="(icon, i) in member.social"
                :key="i"
                :href="icon.link"
                class="text-emerald-500 hover:text-emerald-600 transition-colors"
              >
                <component :is="icon.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div>
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { TwitterIcon, FacebookIcon, InstagramIcon } from "lucide-vue-next";

// Import images
import missionImage from "../assets/portraits/portrait.png";
import jeanImage from "../assets/jean.jpg";
import claireImage from "../assets/claire.jpg";
import johnImage from "../assets/john.jpg";

// Team data
const team = [
  {
    name: "Jean Smith",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis abcorum non ea.",
    image: jeanImage,
    social: [
      { icon: TwitterIcon, link: "#" },
      { icon: FacebookIcon, link: "#" },
      { icon: InstagramIcon, link: "#" },
    ],
  },
  {
    name: "Claire Smith",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis abcorum non ea.",
    image: claireImage,
    social: [
      { icon: TwitterIcon, link: "#" },
      { icon: FacebookIcon, link: "#" },
      { icon: InstagramIcon, link: "#" },
    ],
  },
  {
    name: "John Smith",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis abcorum non ea.",
    image: johnImage,
    social: [
      { icon: TwitterIcon, link: "#" },
      { icon: FacebookIcon, link: "#" },
      { icon: InstagramIcon, link: "#" },
    ],
  },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
