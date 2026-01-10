<template>
  <div class="mx-auto max-w-[1050px] mt-10 mb-20 font-inter">
    <div class="flex flex-col py-20 px-10 md:px-20 mx-5 md:mx-16 lg:mx-0 bg-accent rounded-xl flex-wrap">
      <p class="font-inter font-bold text-3xl text-center mb-6">Cari Item BloxFruit Disini</p>
      <InputsSearchBar v-model="searchQuery" placeholder="Cari Server..." @submit="performSearch" />
    </div>
    <div class="mt-10 px-5 md:px-14 lg:px-0">
      <div class="flex justify-between items-center mb-6">
        <p class="font-bold text-xl ml-3">List Semua Server</p>
        <div class="flex gap-2 items-center">
          <ButtonsFilter class="">no filter</ButtonsFilter>
          <ButtonsIcon icon="mdi:filter-outline" />
        </div>
      </div>
      <div class="flex justify-center lg:justify-start flex-wrap gap-5">
        <CardsServer :variant="2" :image="example" />
        <CardsServer :variant="2" :image="example" />
        <CardsServer :variant="2" :image="example" />
        <CardsServer :variant="2" :image="example" />
        <CardsServer :variant="2" :image="example" />
        <CardsServer :variant="2" :image="example" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import example from "~/assets/images/image.png"

</script>

<style>

</style>