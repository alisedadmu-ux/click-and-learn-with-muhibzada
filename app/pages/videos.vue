<template>
  <div class="section-padding">
    <div class="section-container">
      <!-- Intro -->
      <div class="text-center mb-16 reveal">
        <span class="section-label justify-center">Videos</span>
        <h1 class="font-display text-display-sm sm:text-display-md md:text-display-lg text-balance max-w-4xl mx-auto">Tutorials &amp; <span class="gradient-text">lessons</span></h1>
        <p class="text-surface-400 mt-5 max-w-2xl mx-auto">Every video from Click &amp; Learn with Muhibzada — free, friendly tutorials on Word, Excel, Windows and more, published right from the channel.</p>
      </div>

      <!-- Channel CTA -->
      <div class="reveal card-surface flex flex-col sm:flex-row items-center justify-between gap-6 !p-8 sm:!p-10 mb-12">
        <div class="text-center sm:text-left">
          <div class="text-4xl mb-3">📺</div>
          <h3 class="font-display text-xl font-semibold text-white">Click &amp; Learn with Muhibzada</h3>
          <p class="text-surface-400 text-sm mt-1 max-w-md">Master Word, Excel, Windows and more with free, high-quality video tutorials.</p>
        </div>
        <a href="https://youtube.com/@clickandlearnwithmuhibzada" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-500/10 text-red-300 border border-red-500/20 hover:bg-red-500/20 transition-all duration-300 font-medium text-sm">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          Visit YouTube Channel
        </a>
      </div>

      <!-- Loading -->
      <div v-if="status === 'pending'" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        <div v-for="n in 6" :key="n" class="animate-pulse">
          <div class="aspect-video rounded-2xl bg-white/5" />
          <div class="mt-4 h-4 w-3/4 rounded bg-white/5" />
          <div class="mt-2 h-3 w-1/3 rounded bg-white/5" />
        </div>
      </div>

      <!-- Error -->
      <div v-else-if="status === 'error'" class="reveal card-surface text-center !p-12">
        <div class="text-4xl mb-4">⚠️</div>
        <h3 class="font-display text-xl font-semibold text-white mb-2">Couldn't load videos</h3>
        <p class="text-surface-400 max-w-md mx-auto mb-6">{{ error?.message || 'Something went wrong while fetching the channel videos.' }}</p>
        <button @click="refresh()" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white text-sm font-medium hover:shadow-glow-lg transition-all duration-300">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
          Try Again
        </button>
      </div>

      <!-- Videos -->
      <template v-else-if="videos.length">
        <!-- Category tabs -->
        <div class="flex flex-wrap items-center justify-center gap-3 mb-10 reveal">
          <button
            v-for="cat in CATEGORIES"
            :key="cat"
            type="button"
            @click="activeCategory = cat"
            class="relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border"
            :class="activeCategory === cat
              ? 'bg-accent text-white border-accent shadow-glow-sm'
              : 'bg-white/5 text-surface-400 border-glass-border hover:text-white hover:bg-white/10'"
          >
            {{ cat }}
            <span
              class="ml-2 text-xs px-1.5 py-0.5 rounded-md"
              :class="activeCategory === cat ? 'bg-white/20 text-white' : 'bg-white/5 text-surface-500'"
            >{{ categoryCounts[cat] }}</span>
          </button>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 reveal">
          <p class="text-surface-400 text-sm">{{ videos.length }} videos published</p>
          <div class="relative w-full sm:w-72">
            <svg class="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
            <input
              v-model="query"
              type="text"
              placeholder="Search videos..."
              class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-glass-border text-white placeholder-surface-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-300 text-sm"
            />
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <VideoCard v-for="video in filteredVideos" :key="video.id" :video="video" />
        </div>

        <p v-if="!filteredVideos.length" class="text-center text-surface-400 py-16">
          {{ query ? `No videos match "${query}".` : `No videos in ${activeCategory}.` }}
        </p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
interface RawVideo {
  id?: { videoId?: string }
  snippet?: {
    title?: string
    description?: string
    publishedAt?: string
    thumbnails?: { high?: { url: string }, medium?: { url: string }, default?: { url: string } }
  }
}

interface Video {
  id: string
  title: string
  youtubeId: string
  category: string
  categories: string[]
  thumbnail: string
  publishedAt: string
}

const CATEGORIES = ['All', 'Windows', 'Word', 'Excel', 'Shorts'] as const
type Category = typeof CATEGORIES[number]

function categorize(title: string, description: string): string[] {
  const text = `${title} ${description}`.toLowerCase()
  const matched: string[] = []
  if (/\bwindows\b/.test(text)) matched.push('Windows')
  if (/\bword\b/.test(text)) matched.push('Word')
  if (/\bexcel\b/.test(text)) matched.push('Excel')
  if (/(^|\s)#?shorts?(\s|,|$|#)/.test(text) || text.includes('short video')) matched.push('Shorts')
  return matched
}

useHead({
  title: 'Videos',
  meta: [{ name: 'description', content: 'Watch free tutorials and lessons from Click & Learn with Muhibzada — videos on Word, Excel, Windows and more, straight from the YouTube channel.' }]
})

useScrollReveal()

const { data, status, error, refresh } = await useFetch<{ items: RawVideo[] }>('/api/youtube')

const videos = computed<Video[]>(() => {
  const items = data.value?.items ?? []
  return items
    .filter((item) => item.id?.videoId && item.snippet)
    .map((item) => {
      const youtubeId = item.id!.videoId!
      const thumbs = item.snippet!.thumbnails
      const title = item.snippet!.title || 'Untitled'
      const description = item.snippet!.description || ''
      const cats = categorize(title, description)
      return {
        id: youtubeId,
        youtubeId,
        title,
        categories: cats,
        category: cats[0] || 'Tutorial',
        thumbnail: thumbs?.high?.url || thumbs?.medium?.url || thumbs?.default?.url || `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
        publishedAt: item.snippet!.publishedAt || '',
      }
    })
})

const query = ref('')
const activeCategory = ref<Category>('All')

const categoryCounts = computed<Record<string, number>>(() => {
  const counts: Record<string, number> = { All: videos.value.length }
  for (const cat of CATEGORIES) {
    if (cat === 'All') continue
    counts[cat] = videos.value.filter((v) => v.categories.includes(cat)).length
  }
  return counts
})

const filteredVideos = computed(() => {
  const q = query.value.trim().toLowerCase()
  return videos.value.filter((v) => {
    const matchCat = activeCategory.value === 'All' || v.categories.includes(activeCategory.value)
    const matchQuery = !q || v.title.toLowerCase().includes(q)
    return matchCat && matchQuery
  })
})
</script>
