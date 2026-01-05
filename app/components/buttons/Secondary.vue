<template>
  <button :class="[base, variantClasses]">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'solid' | 'gradient' 
}>(), {
  variant: 'solid'
})  

const base = 'font-inter rounded px-6 py-3 md:px-20 transition-all duration-300 ease-out'

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'gradient':
      return 'bg-gradient-to-r from-tertiary to-secondary bg-[length:200%_100%] bg-left hover:bg-right transition-[background-position] duration-300 ease-out'

    case 'solid':
    default:
      return 'bg-gradient-to-r from-tertiary from-50% to-secondary bg-[length:200%_100%] bg-left hover:bg-right text-gray-700 hover:text-black'
  }
})
</script>