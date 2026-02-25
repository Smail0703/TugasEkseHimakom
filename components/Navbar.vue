<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
// Catatan: Jika ingin fitur dark mode toggle aktif, install: npm i @vueuse/core
const isDark = ref(false)
const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>

<template>
  <nav class="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <NuxtLink to="/" class="font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400">Portofolio</NuxtLink>
        <div class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="hover:text-blue-600 transition">Beranda</NuxtLink>
          <NuxtLink to="/penugasan" class="hover:text-blue-600 transition">Penugasan</NuxtLink>
          <NuxtLink to="/portofolio" class="hover:text-blue-600 transition">Portofolio</NuxtLink>
        </div>
        <button @click="toggleDark" class="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition">
          <span v-if="!isDark">🌙</span>
          <span v-else>☀️</span>
        </button>
      </div>
    </div>
  </nav>
</template>