<script setup>
let events = [
  { id: 1, title: 'Let’s Vibe with Taalpatar Shepai', img: '/src/assets/image/thumbnail.webp' },
  { id: 2, title: 'Let’s Vibe with Taalpatar Shepai', img: '/src/assets/image/thumbnail.webp' },
  { id: 3, title: 'Let’s Vibe with Taalpatar Shepai', img: '/src/assets/image/thumbnail.webp' },
  { id: 4, title: 'Let’s Vibe with Taalpatar Shepai', img: '/src/assets/image/thumbnail.webp' }
]
</script>
<template>
  <div class="py-10">
    <h3 class="font-black text-yellow-500 text-5xl text-center">Upcomming Event</h3>
    <div class="flex flex-wrap gap-5 justify-center py-8">
      <div v-for="event in events" :key="event.id" class="w-1/4">
        <div class="max-w-sm rounded overflow-hidden shadow-lg py-3 h-full">
          <div class="pb-3 rounded-xl bg-yellow-600">
            <img class="w-full rounded-md" :src="event.img" alt="Event" />
          </div>
          <div class="space-y-4 text-center py-2">
            <div class="font-bold text-xl mb-2">{{ event.title }}</div>
            <div>
              <a href="#" class="px-6 py-2 bg-yellow-400"> Sold Out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
