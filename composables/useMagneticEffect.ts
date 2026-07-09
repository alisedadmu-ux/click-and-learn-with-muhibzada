import { ref } from 'vue'

export function useMagneticEffect() {
  const magnetRef = ref<HTMLElement | null>(null)
  const isHovering = ref(false)

  function onMouseMove(e: MouseEvent) {
    if (!magnetRef.value) return
    const rect = magnetRef.value.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) * 0.3
    const deltaY = (e.clientY - centerY) * 0.3

    magnetRef.value.style.transform = `translate(${deltaX}px, ${deltaY}px)`
  }

  function onMouseLeave() {
    if (!magnetRef.value) return
    magnetRef.value.style.transform = 'translate(0, 0)'
    isHovering.value = false
  }

  function onMouseEnter() {
    isHovering.value = true
  }

  return {
    magnetRef,
    isHovering,
    onMouseMove,
    onMouseLeave,
    onMouseEnter,
  }
}