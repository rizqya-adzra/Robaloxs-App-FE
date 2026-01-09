<template>
  <div :class="[base, isActive ? focus : defaultClass]" @click="select">
    <Icon class="hidden md:block" :name="isActive ? 'mdi:radiobox-marked' : 'mdi:radiobox-blank'" size="12" />
    <img :src="image" alt="Robux" class="w-6" />
    <div class="flex flex-col items-start justify-center">
      <p class="font-inter text-sm font-bold">
        {{ qty }}
      </p>
      <p class="font-inter text-xs text-black/50">
        {{ price }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  value: string
  qty?: string
  price?: string
  image?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const base = 'font-inter flex bg-white py-3 px-4 w-max justify-center gap-5 items-center rounded-lg cursor-pointer transition-all duration-300'

const focus = 'shadow-[inset_0_0_0_2px_black]'
const defaultClass = 'shadow-[inset_0_0_0_2px_transparent]'

const isActive = computed(() => props.modelValue === props.value)

const select = () => {
  emit('update:modelValue', props.value)
}
</script>
