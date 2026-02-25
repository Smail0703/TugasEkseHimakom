<script setup lang="ts">
const { profile } = useProfile()
</script>

<template>
  <section class="py-12 border-t border-gray-200 dark:border-gray-800">
    <h2 class="text-3xl font-bold text-center mb-8">Keahlian & Minat</h2>
    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      
      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 class="font-semibold text-xl mb-4 text-blue-600 dark:text-blue-400">Kemampuan Teknis</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in profile.skills" :key="skill" class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-4 py-2 rounded-lg text-sm font-medium">
            {{ skill }}
          </span>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 class="font-semibold text-xl mb-4 text-emerald-600 dark:text-emerald-400">Minat & Fokus</h3>
        <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
          <li v-for="interest in profile.interests" :key="interest">{{ interest }}</li>
        </ul>
      </div>

    </div>
  </section>
</template>