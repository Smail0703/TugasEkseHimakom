<script setup lang="ts">
const { profile } = useProfile()
</script>

<template>
  <section class="py-12 border-t border-gray-200 dark:border-gray-800">
    <div class="max-w-4xl mx-auto px-4 text-center md:text-left md:flex gap-12 items-center">
      
      <div class="w-32 h-32 md:w-40 md:h-40 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto md:mx-0 shrink-0 mb-6 md:mb-0 overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
        <img 
          src="/images/FotoProfil.jpg" 
          alt="Foto Profil"
          class="w-full h-full object-cover"
        />
      </div>
      
      <div>
        <h2 class="text-3xl font-bold mb-4">Tentang Saya</h2>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          {{ profile.bio }}
        </p>
      </div>
    </div>
  </section>
</template>