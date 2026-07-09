import { ref, onMounted, type Ref } from 'vue'

export function useAnimatedCounter(target: number, duration = 2000) {
  const count = ref(0)
  const elementRef = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null
  let animated = false

  function animate() {
    if (animated) return
    animated = true
    const startTime = performance.now()

    function update(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      count.value = Math.floor(eased * target)

      if (progress < 1) {
        requestAnimationFrame(update)
      } else {
        count.value = target
      }
    }

    requestAnimationFrame(update)
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate()
          observer?.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  return { count, elementRef }
}