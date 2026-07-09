<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'bg-surface-950/80 backdrop-blur-xl border-b border-glass-border' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div class="w-8 h-8 rounded-xl bg-accent flex items-center justify-center text-white text-sm font-bold group-hover:shadow-glow-sm transition-all duration-300">SM</div>
          <span class="font-display font-semibold text-sm text-white hidden sm:block">Sekandar<span class="text-accent">.</span>Mohibzada</span>
        </NuxtLink>
        <nav class="hidden md:flex items-center gap-1">
          <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path"
            class="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
            :class="isActive(link.path) ? 'text-white bg-white/5' : 'text-surface-400 hover:text-white hover:bg-white/5'">
            {{ link.label }}
            <span v-if="isActive(link.path)" class="absolute -bottom-px left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" />
          </NuxtLink>
          <a href="#contact" class="ml-4 px-5 py-2 rounded-xl bg-accent text-white text-sm font-medium hover:shadow-glow-lg transition-all duration-300">Let's Talk</a>
        </nav>
        <button class="md:hidden relative w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
          <div class="w-5 flex flex-col gap-1.5">
            <span class="block h-0.5 bg-white rounded-full transition-all duration-300" :class="mobileOpen ? 'rotate-45 translate-y-[6px]' : ''" />
            <span class="block h-0.5 bg-white rounded-full transition-all duration-300" :class="mobileOpen ? 'opacity-0' : ''" />
            <span class="block h-0.5 bg-white rounded-full transition-all duration-300" :class="mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''" />
          </div>
        </button>
      </div>
    </div>
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
      <div v-if="mobileOpen" class="md:hidden border-t border-glass-border bg-surface-950/95 backdrop-blur-xl">
        <div class="px-4 py-4 space-y-1">
          <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" class="block px-4 py-3 rounded-xl text-sm font-medium text-surface-400 hover:text-white hover:bg-white/5 transition-all duration-300" :class="{ 'text-white bg-white/5': isActive(link.path) }" @click="mobileOpen = false">{{ link.label }}</NuxtLink>
          <a href="#contact" class="block px-4 py-3 rounded-xl bg-accent text-white text-sm font-medium text-center mt-3" @click="mobileOpen = false">Let's Talk</a>
        </div>
      </div>
    </Transition>
    <div class="absolute bottom-0 left-0 h-px bg-gradient-to-r from-accent via-accent-400 to-purple-500 transition-all duration-150" :style="{ width: progress + '%' }" />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const mobileOpen = ref(false)
const progress = ref(0)

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/videos', label: 'Videos' },
  { path: '/contact', label: 'Contact' },
]

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

function handleScroll() {
  scrolled.value = window.scrollY > 20
  const h = document.documentElement
  const max = h.scrollHeight - h.clientHeight
  progress.value = max > 0 ? (window.scrollY / max) * 100 : 0
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>