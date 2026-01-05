<template>
  <nav class="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
    <div class="px-6 h-[70px] flex items-center justify-between max-w-7xl mx-auto">
      <div class="flex-shrink-0">
        <p class="font-inter font-bold text-2xl tracking-tight text-black">
          ROBALOXS
        </p>
      </div>
      <div class="hidden lg:flex items-center gap-8">
        <ButtonsHeader label="Home" to="login" />
        <ButtonsHeader label="Robux" variant="dropdown" :active="activeMenu === 'robux'"
          :items="[
            { label: 'Robux Via Login', to: 'login' },
            { label: 'Robux Via Gamepass', to: 'gamepass' },
            { label: 'Robux Via Gift Card', to: 'giftcard' },
          ]"/>
        <ButtonsHeader label="List Item" />
        <ButtonsHeader label="Pesanan" />       
        <div class="pl-4 flex items-center gap-4 border-l border-gray-200">
          <ButtonsIcon icon="mdi:trophy-outline" size="24" class="text-black cursor-pointer"/>
          <ButtonsIcon icon="mdi:cart-outline" size="24" class="text-black cursor-pointer"/>
          <ButtonsPrimary variant="solid" color="secondary" icon="mdi:arrow-right-circle-outline">Login</ButtonsPrimary>
        </div>
      </div>
      <div class="lg:hidden flex items-center justify-end w-full">
        <div class="flex items-center gap-5 mr-[60px] transition-all duration-300" :class="isOpen ? 'opacity-0 translate-x-10' : 'opacity-100'">
          <Icon name="mdi:seal-variant" size="26" class="text-black" />
          <Icon name="mdi:cart-outline" size="26" class="text-black" />
        </div>
      </div>
    </div>
  </nav>
  <div class="fixed top-[11px] right-6 z-50 lg:hidden">
    <div
      :class="[
        'bg-white shadow-xl border border-gray-100 backdrop-blur-md',
        'transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)', 
        isOpen
          ? 'rounded-3xl h-[450px] w-[85vw] bg-opacity-95'
          : 'rounded-xl h-[48px] w-[48px] bg-opacity-100'
      ]"
      class="origin-top-right overflow-hidden relative">
      <button class="absolute top-0 right-0 w-[48px] h-[48px] flex items-center justify-center z-20" @click="isOpen = !isOpen">
        <Icon :name="isOpen ? 'mdi:close' : 'mdi:menu'" size="28" class="text-black transition-transform duration-300" :class="isOpen ? 'rotate-90' : 'rotate-0'"/>
      </button>
      <div class="px-6 pt-16 flex flex-col gap-4 h-full" :class="isOpen ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'">
        <p class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Menu</p>
        <a href="#" class="text-2xl font-bold text-black hover:text-gray-600">Home</a>
        <a href="#" class="text-2xl font-bold text-black hover:text-gray-600">Robux</a>
        <a href="#" class="text-2xl font-bold text-black hover:text-gray-600">List Item</a>
        <a href="#" class="text-2xl font-bold text-black hover:text-gray-600">Pesanan</a>
        <div class="h-px w-full bg-gray-200 my-2"></div>
        <a href="#" class="bg-black hover:bg-gray-800 text-white py-4 rounded-2xl text-center font-bold text-lg flex justify-center items-center gap-2">
          Login Sekarang <Icon name="mdi:arrow-right" />
        </a>
      </div>
    </div>
  </div>
  <div v-if="isOpen" class="fixed inset-0 bg-black/20 z-30 lg:hidden backdrop-blur-sm transition-opacity" @click="isOpen = false"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>