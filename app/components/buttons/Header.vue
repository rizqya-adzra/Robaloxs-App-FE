<template>
  <div 
    class="relative h-full flex items-center" @mouseenter="onHover(true)" @mouseleave="onHover(false)">   
    <button class="flex items-center gap-2 font-semibold h-full">
      {{ label }}
      <Icon v-if="variant === 'dropdown'" name="mdi:chevron-down" class="transition-transform duration-300" :class="{ 'rotate-180': open }" />
    </button>
    <div v-if="isActive" class="absolute bottom-0 h-1 w-full bg-secondary rounded-full" />
    <div v-if="variant === 'dropdown' && open" class="absolute top-full left-0 pt-4 w-56 z-50">
      <div class="bg-white rounded-xl shadow-lg border p-3 space-y-2">
        <NuxtLink v-for="item in items" :key="item.to" :to="item.to" class="block px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors" @click="open = false">
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from '#app'

const route = useRoute()

const props = defineProps<{
  label: string
  to?: string
  variant?: 'default' | 'dropdown'
  items?: { label: string; to: string }[]
}>()

const open = ref(false)

const isActive = computed(() => {
  if (!props.to) return false
  return route.path.startsWith(props.to)
})

const onHover = (state: boolean) => {
  if (props.variant === 'dropdown') {
    open.value = state
  }
}
</script>