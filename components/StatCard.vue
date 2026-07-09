<template>
  <div
    ref="elementRef"
    class="reveal relative overflow-hidden rounded-3xl glass p-8 text-center group hover:border-accent/30 transition-all duration-500"
  >
    <div class="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-colors duration-500" />
    <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-500">{{ icon }}</div>
    <div class="text-4xl sm:text-5xl font-display font-bold gradient-text mb-2 tabular-nums">
      {{ count }}{{ suffix }}
    </div>
    <div class="text-surface-400 text-sm font-medium">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  target: number
  label: string
  icon: string
  suffix?: string
}>()

const { count, elementRef } = useAnimatedCounter(props.target)
</script>
