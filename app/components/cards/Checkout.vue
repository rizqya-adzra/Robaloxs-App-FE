<template>
  <div class="sticky top-20 space-y-5 p-10 bg-tertiary border border-accent/50 rounded-3xl w-screen md:w-full lg:max-w-[500px]">
    <div class="space-y-5">
      <div class="flex justify-start items-center gap-4 w-[300px]">
        <div class="font-inter font-bold text-xl">
          {{ variant === 'summary' ? 'Ringkasan Produk' : 'Checkout' }}
        </div>
      </div>

      <div v-if="variant === 'checkout'" class="space-y-3">
        <div class="flex justify-between items-center gap-4">
          <p class="font-inter text-sm">Jumlah Robux</p>
          <p class="font-inter text-sm font-bold">
            <slot name="item-name">-</slot>
          </p>
        </div>
        <div class="flex justify-between items-center gap-4">
          <p class="font-inter text-sm">Metode Pembayaran</p>
          <p class="font-inter text-sm font-bold">
            <slot name="payment-method">-</slot>
          </p>
        </div>
        <div class="flex justify-between items-center gap-4">
          <p class="font-inter text-sm">No. Whatsapp</p>
          <p class="font-inter text-sm font-bold">
            <slot name="contact-info">-</slot>
          </p>
        </div>
        <div class="border-2 border-accent rounded-full"></div>
      </div>

      <div v-else-if="variant === 'summary'" class="space-y-4">
        <div class="space-y-3 font-inter">
          <slot name="products">
          </slot>
        </div>

        <div class="space-y-2 pt-2 font-inter">
          <div class="flex justify-between text-sm">
            <span class="text-gray-600">Metode Pembayaran</span>
            <span class="font-bold uppercase"><slot name="payment-method">QRIS</slot></span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-600">Subtotal</span>
            <span class="font-bold"><slot name="subtotal">Rp0</slot></span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-600">Biaya Admin</span>
            <span class="font-bold"><slot name="admin-fee">Rp0</slot></span>
          </div>
        </div>
        <div class="border-t border-gray-200 mt-2"></div>
      </div>

      <div v-else class="space-y-3 py-2">
        <div class="flex justify-between items-center">
          <p class="font-inter text-sm">Jumlah Barang</p>
          <p class="font-inter text-sm font-bold">
            <slot name="item-name">-</slot>
          </p>
        </div>
        <div class="border-2 border-accent rounded-full mt-4"></div>
      </div>
    </div>

    <div class="flex flex-1 items-center justify-between lg:flex-col lg:gap-2 lg:items-stretch">
      
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mb-3">
        <p class="font-inter text-xs text-gray-500 lg:text-sm lg:font-bold lg:text-black">
          {{ variant === 'checkout' ? 'Total Tagihan' : 'Total' }}
        </p>
        <p class="font-inter font-bold text-lg lg:text-2xl text-black">
          <slot name="total-price">-</slot>
        </p>
      </div>

      <div class="flex gap-2 lg:flex-col lg:w-full justify-end">
        
        <ButtonsPrimary v-if="variant === 'checkout'" variant="solid" color="gray">
          <span class="lg:hidden">+ Keranjang</span> 
          <span class="hidden lg:inline">Masukan Keranjang</span>
        </ButtonsPrimary>

        <ButtonsPrimary variant="solid" color="secondary" class="w-full">
          {{ variant === 'summary' ? 'Bayar Sekarang' : 'Beli Sekarang' }}
        </ButtonsPrimary>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String as () => 'checkout' | 'simple' | 'summary', 
    default: 'checkout'
  }
});
</script>