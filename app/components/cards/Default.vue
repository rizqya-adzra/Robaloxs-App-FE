<template>
  <div class="space-y-5 p-10 bg-tertiary border-2 border-accent/50 rounded-3xl max-w-[650px]">
    
    <div class="flex justify-start items-center gap-4">
      <div class="flex justify-center items-center bg-secondary rounded-full w-10 h-10 shrink-0">
        <p class="font-inter font-bold text-xl">{{ step }}</p>
      </div>
      <div class="font-inter font-bold text-xl">
        <slot name="title">
          Masukan Username & Password Roblox
        </slot>
      </div>
    </div>

    <div class="flex justify-start items-center gap-4">
      <slot name="inputs"></slot>
    </div>

    <div class="font-inter whitespace-normal text-sm text-black/50">
      <slot name="description">
        Pastikan Username dan Password in game anda sudah sesuai dengan yang dicantumkan agar tidak terjadi kegagalan atau error di saat transaksi.
      </slot>
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
