<script setup lang="ts">
import type { Assignment } from '~/types/project'
defineProps<{ assignment: Assignment }>()
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition duration-300">
    <h3 class="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">{{ assignment.title }}</h3>
    <div class="mb-3">
      <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tujuan</span>
      <p class="text-sm mt-1">{{ assignment.purpose }}</p>
    </div>
    <div>
      <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Hasil</span>
      <p class="text-sm mt-1 font-medium">{{ assignment.result }}</p>
    </div>
  </div>
</template>