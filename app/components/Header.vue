<template>
  <nav class="flex gap-10 items-center justify-between w-full px-10 py-3 bg-white">
    <p class="font-inter font-bold text-lg">ROBALOXS</p>
    <div class="flex gap-8">
      <ButtonsHeader label="Home" />
      <ButtonsHeader
        label="Robux"
        variant="dropdown"
        :active="activeMenu === 'robux'"
        :items="[
          { label: 'Robux Via Login', value: 'login' },
          { label: 'Robux Via Gamepass', value: 'gamepass' },
          { label: 'Robux Via Gift Card', value: 'giftcard' },
        ]"
      />
      <ButtonsHeader label="List Item" />
      <ButtonsHeader label="Pesanan" />
    </div>
    <div class="flex items-center gap-5">
      <ButtonsIcon icon="mdi:trophy"/>
      <ButtonsIcon icon="mdi:cart"/>
      <ButtonsPrimary variant="solid" color="secondary" icon="mdi:arrow-right-circle-outline">Login</ButtonsPrimary>
    </div>
  </nav>
</template>

<script setup lang="ts">
const activeMenu = ref('robux')
</script>