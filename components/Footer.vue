<script setup lang="ts">
const year = new Date().getFullYear()
const { profile } = useProfile()
</script>

<template>
  <footer class="py-8 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 mt-auto">
    <p>&copy; {{ year }} {{ profile.name }}. Dibangun dengan Nuxt 3 & Tailwind CSS.</p>
  </footer>
</template>