import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  const observer = ref<IntersectionObserver | null>(null)

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.value?.observe(el)
    })
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return {
    observe: (el: Element) => observer.value?.observe(el),
  }
}