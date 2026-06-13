<template>
  <div class="home-container">
    <div class="hero-section">
      <h1 class="main-title">Click & Learn with Muhibzada</h1>
    </div>

    <div class="tabs-container">
      <button 
        v-for="category in categories" 
        :key="category"
        :class="['tab-btn', { active: activeCategory === category }]"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <div class="search-wrapper">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search lessons (e.g. Lesson 1, Excel...)" 
        />
      </div>
    </div>

    <div v-if="pending" class="status-message">
      <div class="spinner"></div>
      <p>Loading latest lessons from YouTube...</p>
    </div>

    <div v-else-if="error" class="status-message error-text">
      <p>Unable to load videos. Please check your API key configurations.</p>
    </div>

    <div v-else class="video-grid">
      <div 
        v-for="video in filteredVideos" 
        :key="video.id" 
        class="video-card"
      >
        <div class="video-thumbnail-wrapper">
          <iframe
            :src="'https://www.youtube.com/embed/' + video.youtubeId"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-info">
          <h3>{{ video.title }}</h3>
          <span class="video-tag">{{ video.category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 1. PASTE YOUR PRIVATE GOOGLE DETAILS HERE
const YOUTUBE_API_KEY = 'AIzaSyCnyKk9Rdo2Nm9lTOup5H0VjqRb_QijBS8'
const YOUTUBE_CHANNEL_ID = 'UCiskzzqhqQ_pyw91CYZt8ow' // e.g., UCxxxxxxxxxxxxxxxxx

// UI State Configurations
const categories = ['All Uploads', 'Word', 'Excel', 'Shorts', 'Windows']
const activeCategory = ref('All Uploads')
const searchQuery = ref('')

// Build the request URL directly in the frontend
const apiFetchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&maxResults=20&order=date&type=video&key=${YOUTUBE_API_KEY}`

// Fetch live videos from Google directly onto the client viewport
const { data: rawVideos, pending, error } = await useFetch(apiFetchUrl)

// Process YouTube API Data structures into layout properties
const videos = computed(() => {
  if (!rawVideos.value || !rawVideos.value.items) return []
  
  return rawVideos.value.items.map(item => {
    const titleText = item.snippet.title
    let calculatedCategory = 'Windows' // Default fallback tag

    // Smart Tag Auto-Sorter Engine
    if (titleText.toLowerCase().includes('word')) calculatedCategory = 'Word'
    else if (titleText.toLowerCase().includes('excel')) calculatedCategory = 'Excel'
    else if (item.snippet.description.includes('#shorts') || titleText.toLowerCase().includes('shorts')) calculatedCategory = 'Shorts'

    return {
      id: item.id.videoId,
      title: titleText,
      youtubeId: item.id.videoId,
      category: calculatedCategory
    }
  })
})

// Client search and tag array matching algorithm
const filteredVideos = computed(() => {
  return videos.value.filter(video => {
    const matchesCategory = activeCategory.value === 'All Uploads' || video.category === activeCategory.value
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})
</script>

<style scoped>
.home-container {
  background-color: #0b1329; 
  color: #ffffff;
  min-height: 100vh;
  padding: 2rem;
  font-family: system-ui, -apple-system, sans-serif;
}

.hero-section {
  text-align: center;
  margin-bottom: 2.5rem;
}

.main-title {
  color: #00b4d8;
  font-size: 2.2rem;
  font-weight: 700;
}

.tabs-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.tab-btn {
  background: rgba(255, 255, 255, 0.08);
  color: #94a3b8;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.tab-btn.active {
  background: #00b4d8;
  color: #0b1329;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(0, 180, 216, 0.3);
}

.search-wrapper {
  max-width: 500px;
  margin: 0 auto 3rem auto;
}

.search-box {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.5rem 1rem;
}

.search-icon {
  margin-right: 0.75rem;
  opacity: 0.6;
}

.search-box input {
  background: transparent;
  border: none;
  color: white;
  width: 100%;
  font-size: 1rem;
  outline: none;
}

.search-box input::placeholder {
  color: #64748b;
}

.status-message {
  text-align: center;
  padding: 3rem;
  color: #94a3b8;
}

.error-text {
  color: #ef4444;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255,255,255,0.1);
  border-top-color: #00b4d8;
  border-radius: 50%;
  margin: 0 auto 1rem auto;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.video-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.video-thumbnail-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%; 
}

.video-thumbnail-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-info {
  padding: 1.25rem;
}

.video-info h3 {
  font-size: 1rem;
  margin: 0 0 0.75rem 0;
  line-height: 1.5;
  color: #f1f5f9;
}

.video-tag {
  display: inline-block;
  background: rgba(0, 180, 216, 0.15);
  color: #00b4d8;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
}
</style>