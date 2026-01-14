<template>
  <div class="flex flex-col items-center justify-center px-5 py-6 bg-white border border-accent/50 rounded-3xl text-center">
    <div class="mb-3">
      <img 
        :src="props.imageUrl" 
        :alt="props.title"
        class="w-14 h-14 object-contain rounded-xl"
        :class="{
          'grayscale opacity-50': props.variant === 'inactive', 
          'filter-none': props.variant === 'active'
        }"/>
    </div>
    <h3 class="text-lg font-bold text-black mb-1">
      {{ props.title }}
    </h3>
    <p class="text-gray-400 text-xs leading-tight px-2">
      {{ props.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
export interface BadgeProps {
  title: string;
  description: string;
  imageUrl: string;
  variant?: 'active' | 'inactive'; 
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'active',
});
</script>