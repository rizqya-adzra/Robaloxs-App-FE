<template>
  <div class="flex justify-start items-center p-5 w-screen h-screen">
    <img src="@/assets/images/gradient.png" alt="" class="hidden md:flex lg:hidden absolute inset-0 w-screen h-screen">
    <div class="hidden lg:flex relative w-[1330px]">
      <img src="@/assets/images/gradient.png" alt="" class="w-[100%] h-[100%]">
      <div class="absolute inset-0 p-10 md:p-16 flex flex-col justify-between z-10 text-white"> 
        <div class="flex items-center gap-6">
          <h1 class="font-inter font-bold text-3xl tracking-wide">ROBALOXS</h1>
          <div class="h-[1px] w-32 md:w-64 bg-white/50"></div> 
        </div>
        <div class="max-w-md">
          <p class="font-inter text-lg leading-relaxed font-medium">
            Nikmati pengalaman top up Robux instan dengan harga bersahabat dan proses super aman. 
            Layanan cepat 24/7, hanya di sini!
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col bg-white backdrop-blur-md rounded-3xl py-20 lg:w-[1200px] px-10 md:px-32 lg:px-64 mx-auto gap-5 md:gap-10">
      <div class="space-y-2">
        <p class="font-inter text-4xl">Login Sekarang.</p>
        <p class="font-inter text-sm text-black/50">Login ke akunmu agar bisa menang banyak diskon</p>
      </div>
      <div class="flex flex-col gap-3">
        <InputsDefault placeholder="Masukan Email" type="Email" label="Email" variant="default" color="black" />
        <InputsDefault placeholder="Masukan Password" type="Password" action="Forgot Password?" label="Password" variant="default" color="black" />
      </div>
      <div class="flex flex-col gap-8 text-center">
        <div class="flex flex-col gap-3">
          <ButtonsPrimary variant="solid" color="black" class="rounded-lg">Masuk</ButtonsPrimary>
          <p class="font-inter text-sm text-black/70">Belum punya akun? <a href="register" class="font-bold underline">Daftar</a></p>
        </div>
        <div class="space-y-4">
          <div class="border-2 border-tertiary rounded-full"></div>
          <div class="flex justify-evenly px-16">
            <a href="/" class="font-inter font-bold hover:text-black/60 text-sm text-accent transition-all duration-300">Terms of Service</a>
            <p href="/" class="font-inter font-bold text-accent transition-all duration-300">-</p>
            <a href="/" class="font-inter font-bold hover:text-black/60 text-sm text-accent transition-all duration-300">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'guest'
})
</script>