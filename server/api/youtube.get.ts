export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const apiKey = config.youtubeApiKey
  const channelId = config.youtubeChannelId

  if (!apiKey || !channelId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'YouTube API configuration is missing on the server.'
    })
  }

  try {
    let pageToken = ''
    const allItems: any[] = []

    do {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&order=date&type=video&key=${apiKey}${pageToken ? `&pageToken=${pageToken}` : ''}`
      const response: any = await $fetch(url)

      if (response?.items) {
        allItems.push(...response.items)
      }

      pageToken = response?.nextPageToken || ''
    } while (pageToken)

    return { items: allItems }
  } catch (err: any) {
    console.error('YouTube API error:', err)
    throw createError({
      statusCode: 500,
      statusMessage: err?.message || 'Failed to fetch YouTube videos.'
    })
  }
})