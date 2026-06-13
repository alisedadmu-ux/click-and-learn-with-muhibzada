<template>
  <div class="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-900">
    <header class="sticky top-0 z-40 backdrop-blur-md bg-slate-900/70 border-b border-slate-800">
      <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div class="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
          Click & Learn with Muhibzada
        </div>
      </div>
    </header>

    <main class="max-w-5xl mx-auto px-6 py-12 space-y-12">
      
      <div class="space-y-6">
        <div class="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
          <button 
            v-for="tab in mainTabs" 
            :key="tab"
            @click="activeTab = tab"
            :class="[
              'px-5 py-2.5 text-sm font-medium rounded-lg transition-all',
              activeTab === tab 
                ? 'bg-teal-400 text-slate-900 font-semibold shadow-lg shadow-teal-400/20' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            ]"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <div v-if="['All Uploads', 'Word', 'Excel', 'Shorts', 'Windows'].includes(activeTab)" class="space-y-8">
        <div class="relative max-w-md">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search lessons (e.g. Lesson 1, Excel...)" 
            class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
          />
          <span class="absolute left-4 top-3.5 text-slate-500 text-sm">🔍</span>
        </div>

        <div v-if="loading" class="text-center py-16 text-slate-400 space-y-3">
          <div class="animate-spin text-2xl">⏳</div>
          <p class="text-sm">Connecting to YouTube Channel Feed...</p>
        </div>

        <div v-else-if="errorMessage" class="text-center py-12 text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-xl p-6">
          <p class="font-semibold">YouTube Connection Notice:</p>
          <p class="text-sm text-slate-400 mt-1">{{ errorMessage }}</p>
        </div>

        <div v-else class="grid md:grid-cols-2 gap-6">
          <div 
            v-for="video in filteredVideos" 
            :key="video.id"
            class="group rounded-2xl border border-slate-800 bg-slate-900/50 p-4 hover:border-slate-700/80 transition-all space-y-4"
          >
            <div class="aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
              <iframe 
                class="w-full h-full"
                :src="`https://www.youtube.com/embed/${video.id}`" 
                frameborder="0" 
                allowfullscreen
              ></iframe>
            </div>
            <div class="space-y-1">
              <h3 class="text-base font-bold text-slate-100 group-hover:text-teal-400 transition-colors line-clamp-2">
                {{ video.title }}
              </h3>
            </div>
          </div>
        </div>

        <div v-if="!loading && !errorMessage && filteredVideos.length === 0" class="text-center py-12 text-slate-500 text-sm">
          No video lessons match your search parameters. Try another term!
        </div>
      </div>

      <div v-if="activeTab === 'About'" class="max-w-3xl bg-slate-900/40 border border-slate-800 rounded-2xl p-8 space-y-6">
        <h2 class="text-2xl font-bold text-teal-400">About Muhibzada</h2>
        <p class="text-slate-300 leading-relaxed">
          Welcome to my educational platform! I am dedicated to creating clear, step-by-step video tutorials helping students and professionals master essential computer skills. 
        </p>
        <p class="text-slate-300 leading-relaxed">
          Whether you are looking to master Microsoft Word document design, unlock powerful formulas inside Microsoft Excel, learn shortcuts, or navigate Windows systems smoothly, my channel provides simple guidelines tailored for all skill levels.
        </p>
        <div class="grid grid-cols-2 gap-4 pt-4">
          <div class="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
            <div class="text-2xl font-bold text-teal-400">50+</div>
            <div class="text-xs text-slate-400 mt-1">Video Lessons</div>
          </div>
          <div class="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
            <div class="text-2xl font-bold text-cyan-400">Free</div>
            <div class="text-xs text-slate-400 mt-1">Accessible Education</div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'Contact'" class="max-w-xl bg-slate-900/40 border border-slate-800 rounded-2xl p-8 space-y-6">
        <h2 class="text-2xl font-bold text-teal-400">Get In Touch</h2>
        <p class="text-slate-400 text-sm">
          Have a specific request for an upcoming technology lesson or training workshop? Feel free to reach out through any of the channels below:
        </p>
        
        <div class="space-y-4 pt-2">
          <div class="flex items-center gap-4 p-4 bg-slate-950 rounded-xl border border-slate-800">
            <span class="text-xl">📧</span>
            <div>
              <div class="text-xs text-slate-500 font-medium">Email Address</div>
              <a href="mailto:yourdad@email.com" class="text-sm text-slate-200 hover:text-teal-400 transition-colors">yourdad@email.com</a>
            </div>
          </div>

          <div class="flex items-center gap-4 p-4 bg-slate-950 rounded-xl border border-slate-800">
            <span class="text-xl">📺</span>
            <div>
              <div class="text-xs text-slate-500 font-medium">Official Channel</div>
              <a href="https://www.youtube.com/channel/UCXyHnIAs-xS68wO9AAt8oUA" target="_blank" class="text-sm text-slate-200 hover:text-teal-400 transition-colors">Click & Learn on YouTube</a>
            </div>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// 1. PLACE YOUR REAL GOOGLE API KEY INSIDE THESE QUOTES BELOW:
const YOUTUBE_API_KEY = 'AIzaSyCnyKk9Rdo2Nm9lTOup5H0VjqRb_QijBS8' 

// Your dad's channel identifier
const CHANNEL_ID = 'UCiskzzqhqQ_pyw91CYZt8ow' 

// Combined navigation tabs configuration
const mainTabs = ['All Uploads', 'Word', 'Excel', 'Shorts', 'Windows', 'About', 'Contact']
const activeTab = ref('All Uploads')

const searchQuery = ref('')
const allVideos = ref([])
const loading = ref(true)
const errorMessage = ref('')

onMounted(async () => {
  try {
    let fetchedVideos = []
    let nextPageToken = ''
    
    for (let i = 0; i < 2; i++) {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&order=date&type=video&key=${YOUTUBE_API_KEY}&pageToken=${nextPageToken}`
      const res = await fetch(url)
      
      if (!res.ok) {
        const errData = await res.json()
        throw new Error(errData.error?.message || 'API processing fault')
      }
      
      const data = await res.json()
      
      if (data.items) {
        const parsed = data.items.map(item => {
          const videoId = item.id?.videoId || item.id || item.snippet?.resourceId?.videoId
          return {
            id: videoId, 
            title: item.snippet?.title || 'Untitled Lesson',
            description: item.snippet?.description || ''
          }
        }).filter(item => item.id && typeof item.id === 'string')
        
        fetchedVideos = [...fetchedVideos, ...parsed]
      }
      
      nextPageToken = data.nextPageToken || ''
      if (!nextPageToken) break
    }

    allVideos.value = fetchedVideos
  } catch (error) {
    console.error('Error establishing automatic YouTube connection sync:', error)
    errorMessage.value = error.message || 'Could not verify database feed parameters.'
  } finally {
    loading.value = false
  }
})

const filteredVideos = computed(() => {
  return allVideos.value.filter(video => {
    const text = (video.title + ' ' + video.description).toLowerCase()
    const matchSearch = text.includes(searchQuery.value.toLowerCase())
    
    if (activeTab.value === 'All Uploads') return matchSearch
    if (activeTab.value === 'Word') return matchSearch && text.includes('word')
    if (activeTab.value === 'Excel') return matchSearch && text.includes('excel')
    if (activeTab.value === 'Windows') return matchSearch && text.includes('windows')
    if (activeTab.value === 'Shorts') {
      return matchSearch && (text.includes('short') || text.includes('#shorts'))
    }
    return false
  })
})
</script>