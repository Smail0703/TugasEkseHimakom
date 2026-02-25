<script setup lang="ts">
const { projects } = useProjects()
useHead({ title: 'Portofolio | Portofolio' })
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
    <div class="mb-10 text-center">
      <h1 class="text-4xl font-bold mb-4">Portofolio & Organisasi</h1>
      <p class="text-gray-600 dark:text-gray-300">Rekam jejak proyek kolaboratif dan pengalaman organisasi.</p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>