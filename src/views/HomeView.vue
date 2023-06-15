<script setup>
import HeroSection from '../components/HeroSection.vue'
import UpEvent from '../components/Home/UpEvent.vue'
import StoreSection from '../components/Home/StoreSection.vue'
</script>
<template>
  <title>Home | Get Set Rock</title>
  <hero-section />
  <section id="main" class="bg-black text-white">
    <div class="w-mainwidth mx-auto">
      <up-event />
      <store-section />
    </div>
  </section>
</template>
