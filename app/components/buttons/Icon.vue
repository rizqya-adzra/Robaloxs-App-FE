<template>
  <a :class="base">
    <Icon v-if="icon" :name="icon" size="28"/>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon?: string
}>()

const base = 'flex items-center justify-center w-10 h-10 rounded-full hover:bg-tertiary transition hover:cursor-pointer'
</script>
