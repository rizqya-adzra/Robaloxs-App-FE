<template>
  <div class="mx-auto max-w-[1050px] mt-10 mb-20 font-inter">
    <div class="py-10 px-10 md:px-20">
      <p class="font-inter font-bold text-3xl text-center mb-6">Cari Server Disini</p>
      <InputsSearchBar v-model="searchQuery" placeholder="Cari Server..." @submit="performSearch" />
    </div>
    <div class="mt-10 px-10 md:px-14 lg:px-0">
      <div class="flex justify-between items-center">
        <p class="font-bold text-xl ml-3">List Semua Server</p>
        <div class="flex gap-2 items-center">
          <ButtonsFilter class="hidden md:flex">no filter</ButtonsFilter>
          <ButtonsIcon icon="mdi:filter-outline" />
        </div>
      </div>
      <div class="flex gap-2 md:hidden mt-2 ml-3">
        <ButtonsFilter>no filter</ButtonsFilter>
      </div>
      <div class="flex justify-center flex-wrap gap-5 mt-6">
        <CardsServer :variant="1" :image="example" />
        <CardsServer :variant="1" :image="example" />
        <CardsServer :variant="1" :image="example" />
        <CardsServer :variant="1" :image="example" />
        <CardsServer :variant="1" :image="example" />
        <CardsServer :variant="1" :image="example" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import example from "~/assets/images/image.png"
</script>