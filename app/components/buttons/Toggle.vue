<template>
  <div :class="[base, size, variant, color]">
    <button class="btn" @click="decrease">
      <Icon name="mdi:minus"/>
    </button>
    <span class="value">
     {{modelValue}}
    </span>
    <button class="btn" @click="increase">
      <Icon name="mdi:plus"/>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: number
  size?: 'lg' | 'md' | 'sm'
  variant?: 'outlined' | 'filled'
  color?: 'primary' | 'secondary' | 'black'
  min?: number
  max?: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const base = 'font-inter flex items-center justify-between rounded-full border transition-all duration-200 select-none w-28 h-8 px-4'

const variant = computed(() => {
  if (props.variant === 'filled') {
    return 'bg-emerald-300'
  }
  return 'bg-transparent'
})

const color = computed(() => {
  if (props.color === 'primary') return 'border-emerald-300 text-black'
  if (props.color === 'secondary') return 'border-violet-400 text-black'
  if (props.color === 'black') return 'border-gray-400 text-black'
  return ''
})

const increase = () => {
  if (props.max !== undefined && props.modelValue >= props.max) return
  emit('update:modelValue', props.modelValue + 1)
}

const decrease = () => {
  if (props.modelValue <= props.min) return
  emit('update:modelValue', props.modelValue - 1)
}
</script>