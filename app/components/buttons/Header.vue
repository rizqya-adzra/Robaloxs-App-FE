<template>
    <div class="relative">
      <button @click="toggle" class="flex items-center gap-2 font-semibold">
      {{ label }}
      <Icon v-if="variant === 'dropdown'" name="mdi:chevron-down" class="transition-transform" :class="{ 'rotate-180': open }" />
      </button>
      <div v-if="isActive" class="h-1 w-full bg-secondary rounded-full mt-2"/>        
      <div v-if="variant === 'dropdown' && open" class="absolute left-0 mt-4 w-56 bg-white rounded-xl shadow-lg border p-3 space-y-2 z-50">
        <NuxtLink v-for="item in items" key="item.to" :to="item.to" class="block px-4 py-2 rounded-lg hover:bg-gray-100" @click="open = false">
          {{ item.label }}
        </NuxtLink>
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

const toggle = () => {
  if (props.variant === 'dropdown') {
    open.value = !open.value
  }
}
</script>