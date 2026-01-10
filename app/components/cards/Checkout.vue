<template>
  <div class="sticky top-20 space-y-5 p-10 bg-tertiary border-2 border-accent/50 rounded-3xl w-screen md:w-full lg:max-w-[500px]">
    <div class="space-y-5">
      <div class="flex justify-start items-center gap-4 w-[300px]">
        <div class="font-inter font-bold text-xl">              
          Checkout        
        </div>
      </div>
      <div class="space-y-3">
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
    </div>
    <div class="flex flex-1 items-center justify-between lg:flex-col lg:gap-2 lg:items-stretch">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mb-3">  
        <p class="font-inter text-xs text-gray-500 lg:text-sm lg:font-bold lg:text-black">Total Tagihan</p>
        <p class="font-inter font-bold text-lg lg:text-xl text-primary">
          <slot name="total-price">-</slot>
        </p>
      </div>
      <div class="flex gap-2 lg:flex-col lg:w-full justify-end">
        <ButtonsPrimary variant="solid" color="gray">
          <span class="lg:hidden">+ Keranjang</span> <span class="hidden lg:inline">Masukan Keranjang</span> 
        </ButtonsPrimary>
        <ButtonsPrimary variant="solid" color="secondary">
          Beli Sekarang
        </ButtonsPrimary>
      </div>
    </div>
  </div>
</template>