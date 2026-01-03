<template>
  <button :class="[base, size, variant, color]">
    <Icon v-if="icon" :name="icon" :class="iconSize"/>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'active' | 'inactive'
  size?: 'lg' | 'md' | 'sm'
  color?: 'secondary' | 'primary' | 'black'
  icon?: string
}>()

const base = 'font-inter flex items-center justify-center rounded-full transition-all duration-200'

const size = computed(() => {
  if (props.size === 'lg') return 'w-20 h-20'
  if (props.size === 'md') return 'w-14 h-14'
  if (props.size === 'sm') return 'w-10 h-10'
  return ''
})

const iconSize = computed(() => {
  if (props.size === 'lg') return 'text-4xl'
  if (props.size === 'md') return 'text-3xl'
  if (props.size === 'sm') return 'text-2xl'
  return ''
})

const variant = computed(() => {
  if (props.variant === 'active') {
    return 'bg-emerald-300'
  }
  return 'bg-transparent border-2'
})

const color = computed(() => {
  switch (props.color) {
    case 'primary':
      if (props.variant === 'inactive') {
        return 'border-primary text-primary hover:bg-primary hover:text-white'
      }
      return 'bg-primary hover:bg-primary/80 text-white'
    case 'secondary':
      if (props.variant === 'inactive') {
        return 'border-secondary text-black hover:bg-secondary'
      }
      return 'bg-secondary hover:bg-secondary/80 text-black'
    case 'black':
      if (props.variant === 'inactive') {
        return 'border-black text-black hover:bg-black hover:text-white'
      }
      return 'bg-black hover:bg-black/80 text-black hover:text-white'
    default:
      return ''
  }
})
</script>
