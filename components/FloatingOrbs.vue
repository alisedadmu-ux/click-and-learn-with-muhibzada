<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    <div
      v-for="(orb, i) in orbs"
      :key="i"
      class="gradient-orb"
      :style="{
        width: orb.size, height: orb.size,
        top: orb.top, left: orb.left, right: orb.right, bottom: orb.bottom,
        background: orb.bg,
        animation: `aurora ${orb.dur}s ease-in-out infinite`,
        animationDelay: orb.delay,
        transform: `translate3d(${offset.x * orb.depth}px, ${offset.y * orb.depth}px, 0) scale(${orb.scale})`,
        opacity: orb.opacity
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const offset = ref({ x: 0, y: 0 })

const orbs = [
  { size: '42rem', top: '-12rem', left: '-10rem', right: '', bottom: '', bg: 'radial-gradient(circle, rgba(99,102,241,0.22), transparent 70%)', dur: 16, delay: '0s', depth: 0.04, scale: 1, opacity: 0.9 },
  { size: '34rem', top: '30%', left: '', right: '-12rem', bottom: '', bg: 'radial-gradient(circle, rgba(139,92,246,0.20), transparent 70%)', dur: 19, delay: '-4s', depth: 0.06, scale: 1, opacity: 0.85 },
  { size: '28rem', top: '', left: '25%', right: '', bottom: '-12rem', bg: 'radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)', dur: 22, delay: '-8s', depth: 0.03, scale: 1, opacity: 0.8 },
  { size: '20rem', top: '18%', left: '', right: '20%', bottom: '', bg: 'radial-gradient(circle, rgba(168,85,247,0.16), transparent 70%)', dur: 14, delay: '-2s', depth: 0.08, scale: 1, opacity: 0.7 },
]

function onMove(e: MouseEvent) {
  const cx = window.innerWidth / 2
  const cy = window.innerHeight / 2
  offset.value = { x: (e.clientX - cx) / cx, y: (e.clientY - cy) / cy }
}

onMounted(() => window.addEventListener('mousemove', onMove, { passive: true }))
onUnmounted(() => window.removeEventListener('mousemove', onMove))
</script>
