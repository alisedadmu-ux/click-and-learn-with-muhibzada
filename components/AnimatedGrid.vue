<template>
  <div class="fixed inset-0 pointer-events-none z-[1]" aria-hidden="true">
    <div
      class="absolute inset-0 transition-transform duration-700 ease-out"
      :style="{ transform: `translate3d(${offset.x * 18}px, ${offset.y * 18}px, 0)`, maskImage: 'radial-gradient(circle at 50% 35%, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at 50% 35%, black, transparent 80%)' }"
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" stroke-width="0.6" />
          </pattern>
          <linearGradient id="grid-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="white" stop-opacity="0.06" />
            <stop offset="100%" stop-color="white" stop-opacity="0.01" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const offset = ref({ x: 0, y: 0 })

function onMove(e: MouseEvent) {
  const cx = window.innerWidth / 2
  const cy = window.innerHeight / 2
  offset.value = { x: (e.clientX - cx) / cx, y: (e.clientY - cy) / cy }
}

onMounted(() => window.addEventListener('mousemove', onMove, { passive: true }))
onUnmounted(() => window.removeEventListener('mousemove', onMove))
</script>
