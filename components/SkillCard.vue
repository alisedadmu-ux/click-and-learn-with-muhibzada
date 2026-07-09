<template>
  <div
    ref="tiltRef"
    class="reveal glass rounded-2xl p-6 group cursor-default transition-all duration-500 hover:bg-glass-light hover:shadow-card-hover"
    :style="{ transform }"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-lg group-hover:bg-accent/20 transition-colors duration-300">
        {{ icon }}
      </div>
      <h3 class="font-display text-lg font-semibold text-white">{{ title }}</h3>
    </div>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="skill in skills"
        :key="skill"
        class="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-surface-300 border border-white/5 group-hover:bg-accent/10 group-hover:border-accent/20 group-hover:text-accent-200 transition-all duration-300"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  icon: string
  skills: string[]
}>()

const { tiltRef, onMouseMove, onMouseLeave, transform } = use3DTilt(5)
</script>