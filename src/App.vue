<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="">
    <div class="">
      <header class="sticky top-0 py-5 bg-transparent">
        <div class="flex items-center justify-between" id="navbar">
          <div>
            <div class="">
              <img src="./assets/image/logo.png" alt="Site Logo" />
            </div>
          </div>
          <div class="flex items-start">
            <nav class="text-white flex flex-shrink-0 space-x-3">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About Us</router-link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  </div>

  <RouterView />
</template>
<style scoped>
#navbar {
  max-width: 1290px;
  margin: auto;
}

#nav a :hover {
  color: yellow;
}
</style>
