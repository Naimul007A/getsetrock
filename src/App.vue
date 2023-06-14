<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
let scrollPosition = ref(false)
document.addEventListener('scroll', function () {
  let bodyposition = document.body.getBoundingClientRect().top
  if (bodyposition < -50) {
    scrollPosition.value = true
  } else {
    scrollPosition.value = false
  }
})
</script>

<template>
  <header :class="{ 'bg-black': scrollPosition }" class="fixed top-0 left-0 w-full py-4">
    <div class="px-5 flex items-center justify-between w-[1320px] mx-auto">
      <div id="NabBrand">
        <img src="@/assets/image/logo.png" alt="" />
      </div>
      <div id="navbar">
        <nav class="flex gap-5 font-medium items-center text-white">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About Us</router-link>
          <router-link to="/about">Verify Ticket</router-link>
          <router-link to="/about">Contact Us</router-link>
          <router-link
            class="px-7 py-2 items-center rounded hover:bg-yellow-600 hover:text-black ring-2 ring-yellow-500 ring-offset-1"
            to="/about"
            >Account</router-link
          >
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>
<style scoped>
nav a:hover {
  color: #ffd300 !important;
}
</style>
