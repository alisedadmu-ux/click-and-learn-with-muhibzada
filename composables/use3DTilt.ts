import { ref } from 'vue'

export function use3DTilt(maxTilt = 10) {
  const tiltRef = ref<HTMLElement | null>(null)
  const transform = ref('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')

  function onMouseMove(e: MouseEvent) {
    if (!tiltRef.value) return
    const rect = tiltRef.value.getBoundingClientRect()
    const deltaX = (e.clientX - (rect.left + rect.width / 2)) / rect.width
    const deltaY = (e.clientY - (rect.top + rect.height / 2)) / rect.height
    const rotateX = (-deltaY * maxTilt).toFixed(2)
    const rotateY = (deltaX * maxTilt).toFixed(2)
    transform.value = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  function onMouseLeave() {
    transform.value = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return { tiltRef, onMouseMove, onMouseLeave, transform }
}
