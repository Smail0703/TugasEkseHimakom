<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <Navbar />
    
    <main class="flex-grow">
      <slot />
    </main>
    
    <Footer />
  </div>
</template>