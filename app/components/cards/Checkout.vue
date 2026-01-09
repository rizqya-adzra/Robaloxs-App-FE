<template>
  <div 
    class="
      bg-tertiary border-accent/50 z-50
      
      /* Mobile Style */
      fixed bottom-0 left-0 w-full 
      border-t-2 p-4 
      flex flex-row items-center justify-between gap-4
      shadow-[0_-4px_15px_rgba(0,0,0,0.1)]

      /* Desktop Style */
      lg:static lg:sticky lg:top-20 lg:w-auto lg:max-w-[500px]
      lg:border-2 lg:rounded-3xl lg:p-10
      lg:block lg:space-y-5 lg:shadow-none
    "
  >

    <div class="hidden lg:block space-y-5">
      <div class="flex justify-start items-center gap-4 w-[300px]">
        <div class="font-inter font-bold text-xl">              
          Checkout        
        </div>
      </div>

      <div class="space-y-3">
        <div class="flex justify-between items-center gap-4">  
          <p class="font-inter text-sm">Jumlah Robux</p>
          <p class="font-inter text-sm font-bold">
            <slot name="item-name">100 Robux</slot>
          </p>
        </div>

        <div class="flex justify-between items-center gap-4">  
          <p class="font-inter text-sm">Metode Pembayaran</p>
          <p class="font-inter text-sm font-bold">
            <slot name="payment-method">QRIS</slot>
          </p>
        </div>

        <div class="flex justify-between items-center gap-4">  
          <p class="font-inter text-sm">No. Whatsapp</p>
          <p class="font-inter text-sm font-bold">
            <slot name="contact-info">0882-9962-1867</slot>
          </p>
        </div>
        
        <div class="border-2 border-accent rounded-full"></div>
      </div>
    </div>

    <div class="flex flex-1 items-center justify-between lg:flex-col lg:gap-2 lg:items-stretch">
      
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mb-3">  
        <p class="font-inter text-xs text-gray-500 lg:text-sm lg:font-bold lg:text-black">Total Tagihan</p>
        <p class="font-inter font-bold text-lg lg:text-xl text-primary">
          <slot name="total-price">Rp10.000</slot>
        </p>
      </div>

      <div class="flex gap-2 lg:flex-col w-1/2 lg:w-full justify-end">
        <ButtonsPrimary variant="solid" color="gray" class="flex-1 lg:w-full text-xs px-2 whitespace-nowrap">
          <span class="lg:hidden">+ Keranjang</span> <span class="hidden lg:inline">Masukan Keranjang</span> 
        </ButtonsPrimary>

        <ButtonsPrimary variant="solid" color="secondary" class="flex-[2] lg:w-full text-xs px-2">
          Beli Sekarang
        </ButtonsPrimary>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
// Tidak perlu props karena kita pakai slot
</script>