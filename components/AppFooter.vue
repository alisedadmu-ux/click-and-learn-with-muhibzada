<template>
  <footer class="relative border-t border-glass-border mt-24 overflow-hidden">
    <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-48 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
    <div class="section-container py-14 relative">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-700 flex items-center justify-center shadow-glow-sm">
            <span class="text-white text-sm font-bold">SM</span>
          </div>
          <div>
            <p class="font-medium text-white font-display">Sekandar Mohibzada</p>
            <p class="text-surface-500 text-xs">Eng. Sekandar Mohibzada is an accomplished IT professional with over 15 years of experience across various domains of information technology. Oracle &amp; Microsoft certified with a Bachelor&#039;s in Computer Science, committed to making technology approachable for everyone.</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <a v-for="link in socialLinks" :key="link.label" :href="link.url" target="_blank" rel="noopener noreferrer" :aria-label="link.label" class="flex items-center justify-center w-10 h-10 rounded-xl glass glass-hover text-surface-400 hover:text-white transition-all duration-300">
            <span class="text-lg">{{ link.icon }}</span>
          </a>
        </div>
      </div>
      <div class="divider-line my-8" />
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-surface-500 text-xs font-mono">
        <p>&copy; {{ currentYear }} Sekandar Mohibzada. All rights reserved.</p>
        <p>Designed &amp; built with Nuxt · Tailwind · ❤️</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
const socialLinks = [
  { label: 'YouTube', url: 'https://youtube.com/@clickandlearnwithmuhibzada', icon: '▶️' },
  { label: 'Email', url: 'mailto:alisedadmu@gmail.com', icon: '✉️' },
]
</script>
