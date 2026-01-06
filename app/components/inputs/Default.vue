<template>
  <div class="w-full space-y-2">
    <div v-if="label" class="flex items-center justify-between">
      <label class="text-sm font-semibold text-black/70">
        {{ label }}
      </label>

      <slot name="action" />
    </div>

    <input
      :type="type"
      :placeholder="placeholder"
      :class="[
        base,
        variant,
        color
      ]"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  type?: string
  placeholder?: string
  label?: string
  variant?: 'default' | 'focus'
  color?: 'primary' | 'secondary' | 'black'
}>()

const base = 'font-inter w-full rounded-lg bg-white outline-none transition-all duration-200 placeholder:text-accent/70 text-black h-12 px-5'

const variant = computed(() =>
  props.variant === 'focus' ? 'border-4' : 'border-2'
)

const color = computed(() => {
  if (props.color === 'primary') {
    return 'border-primary/50 focus:shadow-[inset_0_0_0_2px_#0300B8]'
  }
  if (props.color === 'secondary') {
    return 'border-secondary/50 focus:shadow-[inset_0_0_0_2px_#4AF5C5]'
  }
  if (props.color === 'black') {
    return 'border-accent/70 focus:shadow-[inset_0_0_0_2px_black]'
  }
  return ''
})
</script>
