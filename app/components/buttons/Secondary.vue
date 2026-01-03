<template>
  <button :class="[base, variant]">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'solid' | 'gradient' 
}>()  

const base = 'font-inter font-bold rounded bg-tertiary px-20 py-2 hover:bg-secondary transitions-all duration-300'
</script>
