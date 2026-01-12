<template>
  <div class="space-y-5 p-10 bg-tertiary border border-accent/50 rounded-3xl w-screen md:max-w-[650px]">
    
    <div class="flex justify-between items-center gap-4">
      <div class="flex gap-4 items-center">
        <div class="flex justify-center items-center bg-secondary rounded-full w-10 h-10 shrink-0">
          <p class="font-inter font-bold text-xl">{{ step }}</p>
        </div>
        <div class="font-inter font-bold text-xl">
          <slot name="title">
            Masukan Username & Password Roblox
          </slot>
        </div>
      </div>
      <div>
        <slot name="toggle"></slot>
      </div>
    </div>

    <div>
      <slot name="inputs"></slot>
    </div>

    <div class="font-inter whitespace-normal text-sm text-black/50">
      <slot name="description"></slot>
    </div>

  </div>
</template>

<script setup>
defineProps({
  step: {
    type: [String, Number],
    default: 1
  }
})
</script>
