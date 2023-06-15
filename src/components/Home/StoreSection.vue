<script setup>
let thsirts = [
  {
    id: 1,
    title: 'Let’s Vibe with Taalpatar Shepai',
    img: '/src/assets/image/aurthohin-official-hoodie-back.png',
    price: 900
  },
  {
    id: 2,
    title: 'Let’s Vibe with Taalpatar Shepai',
    img: '/src/assets/image/aurthohin-official-hoodie-back.png',
    price: 900
  },
  {
    id: 3,
    title: 'Let’s Vibe with Taalpatar Shepai',
    img: '/src/assets/image/aurthohin-official-hoodie-back.png',
    price: 900
  }
]
</script>
<template>
  <section class="py-10">
    <div>
      <h3 class="font-black text-yellow-500 text-5xl text-center">Merchandising</h3>
      <div class="flex flex-wrap gap-5 justify-center py-8">
        <div v-for="event in thsirts" :key="event.id" class="w-1/4">
          <a href="#">
            <div class="max-w-sm rounded-xl overflow-hidden shadow-lg py-3 h-full bg-thumb">
              <div class="pb-3 rounded-xl">
                <img class="w-full rounded-md" :src="event.img" alt="Event" />
              </div>
              <hr class="font-thin text-yellow-500" />
              <div class="space-y-4 text-center py-2">
                <div class="font-bold text-xl mb-2">{{ event.title }}</div>
                <div>
                  <p class="font-bold text-xl text-yellow-500">
                    <span>৳</span>
                    {{ event.price }}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
