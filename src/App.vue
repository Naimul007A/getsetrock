<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderArea from './components/HeaderArea.vue'
import FooterArea from './components/FooterArea.vue'
</script>

<template>
  <header-area />
  <RouterView />
  <footer-area />
</template>
<style scoped></style>
