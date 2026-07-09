<template>
  <div class="min-h-screen flex items-center justify-center bg-surface-950">
    <div class="text-center max-w-md mx-auto px-4">
      <div class="text-6xl mb-6">⚠️</div>
      <h1 class="font-display text-3xl font-bold text-white mb-4">
        {{ error?.statusCode === 404 ? 'Page Not Found' : 'Something went wrong' }}
      </h1>
      <p class="text-surface-400 mb-8">
        {{ error?.statusCode === 404 ? 'The page you\'re looking for doesn\'t exist.' : 'An unexpected error occurred. Please try again.' }}
      </p>
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-accent text-white font-medium hover:shadow-glow-lg transition-all duration-300"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
        Back Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error?: { statusCode?: number }
}>()
</script>
