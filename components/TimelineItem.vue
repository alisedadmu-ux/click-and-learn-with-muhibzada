<template>
  <div class="relative group">
    <div class="absolute left-[-30px] sm:left-[-38px] top-1 w-9 h-9 rounded-full bg-surface-900 border-2 border-accent/50 flex items-center justify-center group-hover:border-accent group-hover:shadow-glow-sm transition-all duration-500 z-10">
      <span class="text-base">{{ icon }}</span>
    </div>
    <div class="reveal card-surface hover:border-accent/30 !p-6">
      <div class="flex items-center gap-3 mb-2">
        <span class="px-3 py-1 rounded-lg bg-accent/10 text-accent text-xs font-medium font-mono">{{ date }}</span>
        <h3 class="font-display text-lg font-semibold text-white">{{ title }}</h3>
      </div>
      <p class="text-surface-400 text-sm leading-relaxed">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  date: string
  icon: string
}>()
</script>
