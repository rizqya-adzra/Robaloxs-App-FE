<template>
  <div :class="[base, isActive ? focus : defaultClass]" @click="select">
    <Icon :name="isActive ? 'mdi:radiobox-marked' : 'mdi:radiobox-blank'" size="20" />
    <img src="@/assets/images/robux.png" alt="Robux" class="w-8" />
    <div class="flex flex-col items-start justify-center">
      <p class="font-inter font-bold">
        {{ qty }}
      </p>
      <p class="font-inter text-black/50">
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
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const base = 'font-inter flex bg-white py-3 px-6 w-max justify-center gap-5 items-center rounded-xl cursor-pointer transition-all duration-300'

const focus = 'shadow-[inset_0_0_0_2px_black]'
const defaultClass = 'shadow-[inset_0_0_0_2px_transparent]'

const isActive = computed(() => props.modelValue === props.value)

const select = () => {
  emit('update:modelValue', props.value)
}
</script>
