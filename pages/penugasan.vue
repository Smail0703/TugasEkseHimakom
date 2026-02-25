<script setup lang="ts">
useHead({ title: 'Penugasan | Portofolio' })
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
    <div class="mb-12 text-center">
      <h1 class="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">
        Penugasan <span class="text-blue-600 dark:text-blue-400">Terstruktur</span>
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Kumpulan hasil karya dan dokumentasi dari tugas-tugas akademis terpilih.
      </p>
    </div>
    
    <div class="space-y-8">
      
      <div class="group bg-white dark:bg-gray-800 rounded-2xl p-6 md:flex gap-6 items-start border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
        <div class="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-4 rounded-xl shrink-0 hidden md:flex items-center justify-center group-hover:scale-105 transition text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        
        <div class="w-full">
          <div class="flex items-center justify-between mb-2">
             <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Penugasan 2 - Dokumen TOR</h2>
             <span class="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">PDF</span>
          </div>
          <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Menyusun kerangka acuan kerja formal untuk kegiatan kemahasiswaan dengan pedoman tata bahasa yang baku (KBBI dan EYD).
          </p>
          
          <div class="flex flex-wrap gap-3">
            <a href="/files/Format TOR Pergerakan.pdf" download class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg transition duration-300 text-sm shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
              Download Template
            </a>
            <a href="/files/TOR LKMM-TH.pdf" target="_blank" class="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-2.5 px-5 rounded-lg transition duration-300 text-sm border border-gray-300 dark:border-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 5 8.268 7.943 9.542 12-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              Lihat Tugas
            </a>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <div class="mb-6">
            <div class="flex items-center justify-between mb-2">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Penugasan 3 - Infografis AI</h2>
                <span class="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">Image</span>
            </div>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Visualisasi analisis dampak disrupsi kecerdasan buatan terhadap pekerjaan level junior.
            </p>
        </div>
        
        <div class="bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6 group">
          <img 
            src="/images/Infografis.png" 
            alt="Preview Infografis Dampak AI" 
            class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        </div>

        <div>
          <a href="/images/Infografis.jpg" download="Infografis_Dampak_AI.jpg" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 w-full justify-center md:w-auto rounded-lg transition duration-300 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            Download Infografis Resolusi Penuh
          </a>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
        <div class="flex items-center gap-4 mb-6">
          <div class="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl shrink-0">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
             <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Penugasan 4 - Video Implementasi</h2>
             <p class="text-gray-600 dark:text-gray-300 text-sm">Penjelasan Mengenai diri sendiri</p>
          </div>
        </div>
        
        <div class="rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 bg-black relative group">
          <iframe 
            class="w-full aspect-video focus:outline-none" 
            src="https://www.youtube.com/embed/KO9Hr5np0HQ?si=qD04LPFrhQxLdvrf" 
            title="Video Penugasan 4" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        
        <div class="mt-4 flex justify-end">
           <a href="/videos/presentasi.mp4" download class="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm transition">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
             Unduh File Video (.mp4)
           </a>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Animasi fade-in yang lebih halus */
.animate-fade-in {
  animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>