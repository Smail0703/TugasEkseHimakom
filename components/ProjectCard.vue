<script setup lang="ts">
import type { Project } from '~/types/project'
defineProps<{ project: Project }>()
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-1 hover:shadow-lg transition duration-300">
    <div class="p-6">
      <h3 class="text-xl font-bold mb-1">{{ project.title }}</h3>
      <p class="text-sm text-blue-600 dark:text-blue-400 mb-4">{{ project.role }}</p>
      <p class="text-gray-600 dark:text-gray-300 mb-6 text-sm line-clamp-3">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in project.techStack" :key="tech" class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>