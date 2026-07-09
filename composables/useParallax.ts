import { ref, onMounted, onUnmounted } from 'vue'
import { useMousePosition } from './useMousePosition'

export function useParallax(factor = 0.05) {
  const { x, y } = useMousePosition()
  const elementRef = ref<HTMLElement | null>(null)
  const transform = ref({ x: 0, y: 0 })

  function update() {
    if (!elementRef.value) return
    const rect = elementRef.value.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (x.value - centerX) * factor
    const deltaY = (y.value - centerY) * factor

    transform.value = { x: deltaX, y: deltaY }
    elementRef.value.style.transform = `translate(${deltaX}px, ${deltaY}px)`
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { elementRef, transform }
}