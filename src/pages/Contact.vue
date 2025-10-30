<template>
  <div>
    <Navbar />
  </div>

  <section class="bg-white py-16">
    <div class="max-w-3xl mx-auto px-6 md:px-12 space-y-10">
      <!-- Contact Form First -->
      <div class="w-full mx-auto">
        <h2 class="text-4xl font-semibold text-center mb-10">
          <span class="border-b-2 border-green-500 pb-1">Contact Us</span>
        </h2>

        <form @submit.prevent="submitForm" class="space-y-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label class="text-sm text-gray-600 mb-1 block">First Name</label>
              <input
                v-model="form.firstName"
                type="text"
                placeholder="John"
                class="w-full border-b-2 border-gray-400 rounded-xl px-3 py-2 text-gray-700 focus:border-green-500  transition"
                required
              />
            </div>
            <div>
              <label class="text-sm text-gray-600 mb-1 block">Last Name</label>
              <input
                v-model="form.lastName"
                type="text"
                placeholder="Doe"
                class="w-full border-b-2 border-gray-400 rounded-xl px-3 py-2 text-gray-700 focus:border-green-500  transition"
                required
              />
            </div>
          </div>

          <div>
            <label class="text-sm text-gray-600 mb-1 block">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="you@example.com"
              class="w-full border-b-2 border-gray-400 rounded-xl px-3 py-2 text-gray-700 focus:border-green-500  transition"
              required
            />
          </div>

          <div>
            <label class="text-sm text-gray-600 mb-1 block">Subject</label>
            <input
              v-model="form.subject"
              type="text"
              placeholder="Enter your subject"
              class="w-full border-b-2 border-gray-400 rounded-xl px-3 py-2 text-gray-700 focus:border-green-500  transition"
              required
            />
          </div>

          <div>
            <label class="text-sm text-gray-600 mb-1 block">Message</label>
            <textarea
              v-model="form.message"
              rows="3"
              placeholder="Write your message here..."
              class="w-full border-b-2 border-gray-400 rounded-xl px-3 py-2 text-gray-700 focus:border-green-500  transition resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="bg-[#059669] text-white font-medium px-6 py-2 rounded-md shadow hover:bg-[#059668] hover:shadow-lg transition duration-200 w-full"
          >
            Send Message
          </button>
        </form>
      </div>

      <!-- Contact Info Below the Form -->
      <div class="text-center space-y-6 text-gray-700 mt-12">
        <div>
          <h3 class="font-semibold text-gray-800 text-lg mb-1">Address</h3>
          <p>Islamabad , Pakistan</p>
        </div>
        <div>
          <h3 class="font-semibold text-gray-800 text-lg mb-1">Phone</h3>
          <a href="tel:+923068868886" class="text-[#059669] hover:underline">
            +92 306 8868886
          </a>
        </div>
        <div>
          <h3 class="font-semibold text-gray-800 text-lg mb-1">Email Address</h3>
          <a href="mailto:hassanqureshi8886@gmail.com" class="text-[#059669] hover:underline">
            hassanqureshi8886@gmail.com
          </a>
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
import { reactive } from "vue";

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
});

function submitForm() {
  alert("✅ Message sent successfully!");
  console.log("Form submitted:", form);
}
</script>

<style scoped>
section {
  font-family: "Poppins", sans-serif;
}
input,
textarea {
  outline: none;
  transition: all 0.2s ease;
}
</style>
