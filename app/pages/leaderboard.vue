<template>
  <div class="mx-auto max-w-[1050px] py-20 font-inter">
    <p class="font-inter font-bold text-4xl mb-5 text-center"><span class="text-primary">Leaderboard</span> minggu ini!</p>
    <div class="flex justify-center items-center md:gap-4 lg:gap-10 mt-20 flex-wrap">
      <div class="flex flex-col justify-center items-center gap-4 py-7 px-10 bg-tertiary rounded-3xl">
        <img :src="gradient" alt="" class="w-32 h-32 object-fill rounded-full" />
        <div class="text-center">
          <p class="font-bold">Es Teh Panas</p>
          <p class="text-sm text-black/50">Rp8.250.000</p>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center gap-4 py-7 px-10 bg-gradient-to-br from-tertiary to-secondary/30  rounded-3xl">
        <img :src="gradient" alt="" class="w-32 h-32 object-fill rounded-full" />
        <div class="text-center">
          <p class="font-bold">Es Teh Panas</p>
          <p class="text-sm text-black/50">Rp8.250.000</p>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center gap-4 py-7 px-10 bg-tertiary rounded-3xl">
        <img :src="gradient" alt="" class="w-32 h-32 object-fill rounded-full" />
        <div class="text-center">
          <p class="font-bold">Es Teh Panas</p>
          <p class="text-sm text-black/50">Rp8.250.000</p>
        </div>
      </div>
    </div>
    <div class="mt-20 space-y-4 md:px-20 lg:px-0">
      <div class="flex justify-between items-center gap-6 bg-tertiary border border-accent/50 rounded-3xl p-5 hover:ring-1 ring-accent duration-300 transition-all">
        <div class="flex items-center gap-8">
          <div class="bg-accent/50 rounded-full w-10 h-10 flex justify-center items-center">
            <p class="font-bold">4</p>
          </div>
          <div class="flex gap-3 items-center">
            <img :src="gradient" alt="" class="w-10 h-10 object-fill rounded-full" />
            <p class="font-bold">yah juara paporit</p>
          </div>
        </div>
        <p>Rp800.000</p>
      </div>
      <div class="flex justify-between items-center gap-6 bg-tertiary border border-accent/50 rounded-3xl p-5 hover:ring-1 ring-accent duration-300 transition-all">
        <div class="flex items-center gap-8">
          <div class="bg-accent/50 rounded-full w-10 h-10 flex justify-center items-center">
            <p class="font-bold">5</p>
          </div>
          <div class="flex gap-3 items-center">
            <img :src="gradient" alt="" class="w-10 h-10 object-fill rounded-full" />
            <p class="font-bold">yah juara paporit</p>
          </div>
        </div>
        <p>Rp800.000</p>
      </div>
      <div class="flex justify-between items-center gap-6 bg-tertiary border border-accent/50 rounded-3xl p-5 hover:ring-1 ring-accent duration-300 transition-all">
        <div class="flex items-center gap-8">
          <div class="bg-accent/50 rounded-full w-10 h-10 flex justify-center items-center">
            <p class="font-bold">6</p>
          </div>
          <div class="flex gap-3 items-center">
            <img :src="gradient" alt="" class="w-10 h-10 object-fill rounded-full" />
            <p class="font-bold">yah juara paporit</p>
          </div>
        </div>
        <p>Rp800.000</p>
      </div>
      <div class="flex justify-between items-center gap-6 bg-tertiary border border-accent/50 rounded-3xl p-5 hover:ring-1 ring-accent duration-300 transition-all">
        <div class="flex items-center gap-8">
          <div class="bg-accent/50 rounded-full w-10 h-10 flex justify-center items-center">
            <p class="font-bold">7</p>
          </div>
          <div class="flex gap-3 items-center">
            <img :src="gradient" alt="" class="w-10 h-10 object-fill rounded-full" />
            <p class="font-bold">yah juara paporit</p>
          </div>
        </div>
        <p>Rp800.000</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import gradient from "~/assets/images/gradient.png"
</script>

<style>

</style>