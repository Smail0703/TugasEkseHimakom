<script setup lang="ts">
const { profile } = useProfile()
</script>

<template>
  <section class="py-20 flex flex-col items-center text-center">
    <div class="animate-fade-in-up">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-4">
        Halo, saya <span class="text-blue-600 dark:text-blue-400">{{ profile.name }}</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        {{ profile.role }} di {{ profile.institution }}.
      </p>
      <NuxtLink to="/portofolio" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 shadow-lg hover:shadow-xl">
        Lihat Karya Saya
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>