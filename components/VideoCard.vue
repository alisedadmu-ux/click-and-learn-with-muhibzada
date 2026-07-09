<template>
  <a
    :href="'https://www.youtube.com/watch?v=' + video.youtubeId"
    target="_blank"
    rel="noopener noreferrer"
    class="video-card group block"
  >
    <div class="video-thumbnail-wrapper">
      <img
        :src="video.thumbnail"
        :alt="video.title"
        loading="lazy"
        class="video-thumbnail"
      />
      <div class="video-overlay">
        <span class="play-button">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </span>
      </div>
      <span v-if="video.category" class="video-tag">{{ video.category }}</span>
    </div>
    <div class="video-info">
      <h3 class="video-title">{{ video.title }}</h3>
      <p v-if="video.publishedAt" class="video-date">{{ formattedDate }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
interface Video {
  id: string
  title: string
  youtubeId: string
  category: string
  thumbnail: string
  publishedAt: string
}

const props = defineProps<{
  video: Video
}>()

const formattedDate = computed(() => {
  if (!props.video.publishedAt) return ''
  const d = new Date(props.video.publishedAt)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
})
</script>

<style scoped>
.video-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.video-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
  border-color: rgba(129, 140, 248, 0.4);
}

.video-thumbnail-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: #0f172a;
  overflow: hidden;
}

.video-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.video-card:hover .video-thumbnail {
  transform: scale(1.06);
}

.video-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(2, 6, 23, 0.35);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-card:hover .video-overlay {
  opacity: 1;
}

.play-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 9999px;
  background: #ef4444;
  color: #fff;
  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.45);
  transform: scale(0.85);
  transition: transform 0.3s ease;
}

.video-card:hover .play-button {
  transform: scale(1);
}

.video-tag {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  display: inline-block;
  background: rgba(0, 180, 216, 0.15);
  color: #00b4d8;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  backdrop-filter: blur(4px);
}

.video-info {
  padding: 1.25rem;
}

.video-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  line-height: 1.5;
  color: #f1f5f9;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.video-card:hover .video-title {
  color: #fff;
}

.video-date {
  font-size: 0.8rem;
  color: #94a3b8;
  margin: 0;
}
</style>
