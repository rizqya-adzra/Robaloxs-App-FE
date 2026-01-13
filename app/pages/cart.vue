<template>
  <div class="mx-auto max-w-[1050px] py-20 font-inter">
    <p class="font-inter font-bold text-4xl mb-5 text-center lg:text-start"><span class="text-primary">Keranjang</span> Anda</p>
    <div class="flex justify-center items-start">
      <div class="flex flex-col lg:flex-row justify-between items-start gap-5">
        <div>
          <div class="w-screen md:max-w-[650px] space-y-3">
            <div class="bg-tertiary rounded-3xl p-6 flex items-center border border-accent/50 cursor-pointer" @click="toggleSelectAll" :class="isAllSelected ? 'border-black' : ''">
              <div class="flex justify-center items-start gap-4 select-none">
                <div class="">
                  <Icon 
                    :name="isAllSelected ? 'mdi:check-circle' : 'mdi:circle-outline'" 
                    size="28"
                    class="transition-colors duration-200"
                    :class="isAllSelected ? 'text-black' : 'text-gray-400 hover:text-black'"
                  />
                </div>
                <span class="font-bold text-lg text-black">
                  Pilih Semua 
                  <span class="text-gray-500 font-normal">({{ cartItems.length }})</span>
                </span>
              </div>
            </div>

            <div v-for="item in cartItems" :key="item.id" class="bg-tertiary rounded-3xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between border border-accent/50 gap-4" :class="item.selected ? 'border-black' : ''">
              
              <div class="flex items-center w-full justify-center md:justify-start md:w-auto">
                  <div 
                    class="mr-4 flex-shrink-0 cursor-pointer flex items-center"
                    @click="toggleItemSelection(item.id)"
                  >
                    <Icon 
                      :name="item.selected ? 'mdi:check-circle' : 'mdi:circle-outline'" 
                      size="28"
                      class="transition-colors duration-200"
                      :class="item.selected ? 'text-black' : 'text-gray-400 hover:text-black'"
                    />
                  </div>
                <div class="p-4">
                  <img :src="item.image" alt="" class="w-12 h-12 object-contain rounded-lg" /> 
                </div>
                <div class="select-none text-center md:text-left">
                  <h3 class="font-bold text-lg text-black leading-tight">{{ item.variant }}</h3>
                  <p class="text-gray-600 text-sm mt-1">{{ item.title }}</p>
                </div>
              </div>

              <div class="flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
                <span class="font-bold text-lg text-black">{{ formatRupiah(item.price) }}</span>
                
                <div class="flex items-center gap-4 text-gray-500">
                  <button @click="removeItem(item.id)" class="hover:text-red-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>

                  <div class="flex items-center border border-gray-400 rounded-full px-1 bg-white">
                    <button 
                      @click="decrementQty(item.id)" 
                      class="w-8 h-8 flex items-center justify-center text-lg font-medium text-gray-600 hover:text-black disabled:opacity-30"
                      :disabled="item.quantity <= 1"
                    >
                      &minus;
                    </button>
                    <span class="w-8 text-center text-black text-sm font-semibold select-none">{{ item.quantity }}</span>
                    <button 
                      @click="incrementQty(item.id)" 
                      class="w-8 h-8 flex items-center justify-center text-lg font-medium text-gray-600 hover:text-black"
                    >
                      &#43;
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <CardsCheckout variant="simple">
          <template #total-price>
            {{ formatRupiah(cartItems.filter(i => i.selected).reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)) }}
          </template>
        </CardsCheckout>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import robux from "~/assets/images/robux.png"
import main from "~/assets/images/image.png"
import gradient from "~/assets/images/gradient.png"
import { ref, computed } from 'vue';

interface CartItem {
  id: number;
  title: string;
  variant: string;
  price: number;
  quantity: number;
  selected: boolean;
  image?: string;
}

const cartItems = ref<CartItem[]>([
  {
    id: 1,
    title: 'Top-up Robux via Login',
    variant: '100 Robux',
    price: 10000,
    quantity: 1,
    selected: false,
    image: robux,
  },
  {
    id: 2,
    title: 'Top-up Robux via Login',
    variant: '15000 Robux',
    price: 2100000,
    quantity: 1,
    selected: false,
    image: main,
  },
  {
    id: 3,
    title: 'BloxFruits',
    variant: 'Dark Blade',
    price: 119000,
    quantity: 1,
    selected: false,
    image: gradient,
  }
]);

const formatRupiah = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

const isAllSelected = computed(() => {
  return cartItems.value.length > 0 && cartItems.value.every((item) => item.selected);
});

const toggleSelectAll = () => {
  const newState = !isAllSelected.value;
  cartItems.value.forEach((item) => item.selected = newState);
};

const toggleItemSelection = (id: number) => {
  const item = cartItems.value.find((i) => i.id === id);
  if (item) item.selected = !item.selected;
};

const incrementQty = (id: number) => {
  const item = cartItems.value.find((i) => i.id === id);
  if (item) item.quantity++;
};

const decrementQty = (id: number) => {
  const item = cartItems.value.find((i) => i.id === id);
  if (item && item.quantity > 1) item.quantity--;
};

const removeItem = (id: number) => {
  cartItems.value = cartItems.value.filter((i) => i.id !== id);
};
</script>