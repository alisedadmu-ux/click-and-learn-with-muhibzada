<template>
  <div
    class="reveal group relative perspective-1000"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <div ref="tiltRef" class="gradient-border-animated relative rounded-3xl transition-all duration-500 will-change-transform" :style="{ transform }">
      <div class="relative overflow-hidden rounded-3xl glass-strong">
        <!-- Cover -->
        <div class="relative aspect-[16/10] overflow-hidden" :style="{ background: gradient }">
          <div class="absolute inset-0 opacity-[0.18]" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0); background-size: 22px 22px;" />
          <div class="absolute inset-0 bg-gradient-to-t from-surface-950/90 via-surface-950/10 to-transparent" />
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-7xl drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] select-none transition-transform duration-700 group-hover:scale-110">{{ glyph }}</span>
          </div>

          <!-- Shine sweep -->
          <div class="pointer-events-none absolute -inset-y-2 -left-1/2 w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.6s_ease]" />

          <!-- Badges -->
          <div class="absolute top-4 left-4 flex gap-2">
            <span
              v-if="featured"
              class="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-white text-surface-950 shadow-glow-sm"
            >✦ Featured</span>
          </div>
          <span
            class="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-medium backdrop-blur-md"
            :class="status === 'live'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              : status === 'development'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              : 'bg-white/10 text-surface-300 border border-white/15'"
          >
            {{ status === 'live' ? '● Live' : status === 'development' ? '◐ In Development' : '○ Archived' }}
          </span>

          <!-- Hover actions -->
          <div class="absolute bottom-4 right-4 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <a v-if="demoUrl" :href="demoUrl" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-accent transition-colors duration-300" aria-label="Live demo">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
            <a v-if="githubUrl" :href="githubUrl" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-accent transition-colors duration-300" aria-label="View on GitHub">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        <!-- Body -->
        <div class="p-6">
          <div class="flex items-start justify-between gap-4">
            <h3 class="font-display text-xl font-semibold text-white group-hover:text-accent-200 transition-colors duration-300">{{ title }}</h3>
          </div>
          <p class="text-surface-400 text-sm leading-relaxed mt-2 mb-4 line-clamp-2">{{ description }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in techStack" :key="tech" class="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-white/5 text-surface-400 border border-white/5">{{ tech }}</span>
          </div>
          <div class="mt-5 flex gap-3">
            <a v-if="demoUrl" :href="demoUrl" target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent/90 hover:bg-accent text-white text-sm font-medium transition-all duration-300">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Live Demo
            </a>
            <a v-if="githubUrl" :href="githubUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass glass-hover text-white text-sm font-medium transition-all duration-300">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  glyph: string
  gradient: string
  techStack: string[]
  demoUrl?: string
  githubUrl?: string
  status: 'live' | 'development' | 'archived'
  featured?: boolean
}>()

const { tiltRef, onMouseMove, onMouseLeave, transform } = use3DTilt(7)
</script>
