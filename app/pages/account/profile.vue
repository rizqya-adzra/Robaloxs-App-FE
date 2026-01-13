<template>
  <div class="mx-auto max-w-[1050px] py-20 font-inter">
    <div class="flex justify-center items-start gap-5">
      <div class="flex flex-col justify-center items-center bg-tertiary border border-accent/50 rounded-3xl px-10 py-12 h-[500px] w-1/2 gap-5">
        <img :src="main" alt="" class="w-20 rounded-full">
        <div class="-space-y-2 text-center">
          <p class="font-bold text-xl mt-6 mb-2 text-black">Es Teh Panas</p>
          <p class="text-gray-500 text-sm">@estehmanispanas</p>
        </div>
        <p class="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime </p>
        <div class="border-2 border-accent w-full rounded-full"></div>
        <div class="flex justify-between items-center w-full">
          <p class="text-sm text-gray-500">Bergabung pada</p>
          <p class="text-sm font-bold text-gray-500">20/09/2025</p>
        </div>
        <ButtonsPrimary variant="solid" color="secondary" class="w-full">Edit Profile</ButtonsPrimary>
      </div>
      <div class="flex flex-col justify-center items-start bg-tertiary border border-accent/50 rounded-3xl px-10 py-12 h-[500px] w-full gap-5">
        <p class="font-bold text-2xl">Peringkat <span class="font-normal"> (minggu ini) </span>dan Badges</p>
        <div class="border-2 border-accent w-full rounded-full"></div>
        <BadgesDefault />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import main from '@/assets/images/image.png';
</script>