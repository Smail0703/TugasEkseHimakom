<script setup lang="ts">
const { profile } = useProfile()
</script>

<template>
  <section class="py-16 bg-blue-50/50 dark:bg-gray-800/30 border-t border-gray-200 dark:border-gray-800 mt-12">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-6">Mari Berdiskusi!</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
        Mari berdiskusi lebih lanjut! Jika Anda tertarik untuk berkolaborasi atau ingin berbagi pandangan tentang dunia IT, silakan sapa saya melalui kontak di bawah ini.
      </p>
      
      <div class="flex justify-center gap-4 flex-wrap">
        <a :href="'mailto:' + profile.contacts.email" class="flex items-center gap-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700 font-medium">
          <span>✉️</span> Email
        </a>
        <a :href="profile.contacts.linkedin" target="_blank" class="flex items-center gap-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700 font-medium">
          <span>💼</span> LinkedIn
        </a>
        <a :href="profile.contacts.github" target="_blank" class="flex items-center gap-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700 font-medium">
          <span>💻</span> GitHub
        </a>
      </div>
    </div>
  </section>
</template>