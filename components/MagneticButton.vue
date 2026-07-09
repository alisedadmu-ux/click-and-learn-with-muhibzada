<template>
  <component
    :is="isLink ? 'NuxtLink' : 'button'"
    :to="to || undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :type="isLink ? undefined : 'button'"
    :disabled="disabled || undefined"
    :class="classes"
    ref="magnetRef"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    @mouseenter="onMouseEnter"
    @click="onClick"
  >
    <span v-if="variant === 'primary'" class="btn-primary-inner group-hover:opacity-100 opacity-0" />
    <span class="relative z-10 flex items-center gap-2">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  to?: string
  external?: boolean
}>()

const emit = defineEmits<{ click: [] }>()

const isLink = computed(() => !!props.to)

const classes = computed(() => [
  'magnetic-btn group relative font-medium text-sm transition-all duration-300',
  props.variant === 'primary' ? 'btn-primary' : 'btn-ghost',
  props.size === 'sm' ? 'px-4 py-2 text-xs' : props.size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-3',
  props.disabled ? 'opacity-50 pointer-events-none' : 'cursor-pointer',
])

function onClick() {
  if (!isLink.value) emit('click')
}

const { magnetRef, onMouseMove, onMouseLeave, onMouseEnter } = useMagneticEffect()
</script>
