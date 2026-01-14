<template>
  <div class="mx-auto md:max-w-[650px] lg:max-w-[1050px] py-10 lg:py-20 font-inter px-5 xl:px-0">
    
    <div class="flex flex-col lg:flex-row justify-center items-start gap-3">
      
      <div class="w-full lg:w-1/3 lg:sticky lg:top-24 flex flex-col justify-center items-center bg-gradient-to-b from-secondary/50 to-[40%] to-tertiary border border-accent/50 rounded-3xl px-6 py-8 lg:px-8 lg:py-12 gap-5 h-auto">
        <img :src="main" alt="" class="w-20 rounded-full">
        <div class="-space-y-2 text-center">
          <p class="font-bold text-xl mt-6 mb-2 text-black">Es Teh Panas</p>
          <p class="text-gray-500 text-sm">@estehmanispanas</p>
        </div>
        <p class="text-gray-600 text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime </p>
        <div class="border border-accent w-full rounded-full"></div>
        <div class="flex justify-between items-center w-full">
          <p class="text-sm text-gray-500">Bergabung pada</p>
          <p class="text-sm font-bold text-gray-500">20/09/2025</p>
        </div>
        <ButtonsPrimary variant="solid" color="secondary" class="w-full">Edit Profile</ButtonsPrimary>
      </div>

      <div class="flex flex-col gap-5 w-full lg:w-2/3">
        
        <div class="flex flex-col justify-center items-start bg-tertiary rounded-3xl px-6 py-8 lg:px-10 lg:py-12 gap-5 border border-accent/50 w-full h-auto">
          <p class="font-bold text-xl lg:text-2xl">Peringkat <span class="font-normal text-sm lg:text-base"> (minggu ini) </span>dan Badges</p>
          
          <div class="flex flex-col md:flex-row justify-between w-full gap-3"> 
            
            <div class="rounded-3xl p-5 bg-gradient-to-r from-primary to-secondary flex flex-col justify-center items-center gap-2 text-white w-full lg:w-auto lg:flex-1">
              <p class="text-xs uppercase tracking-wide">peringkat</p>
              <p class="font-bold text-5xl lg:text-6xl italic">1</p>
            </div>
            
            <div class="rounded-3xl p-5 bg-white border border-accent/50 flex justify-center items-center gap-4 w-full lg:w-auto lg:flex-[1.5]">
              <img :src="main" alt="" class="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-contain">
              <div class="flex flex-col">
                <p class="text-xs lg:text-sm text-gray-500">Es teh manis</p>
                <p class="font-bold text-sm lg:text-base">@esteh_manis</p>
              </div>
            </div>
            
            <div class="rounded-3xl p-5 bg-gradient-to-r from-white to-secondary border flex flex-col justify-center items-center gap-1 w-full lg:w-auto lg:flex-[1.5]">
              <p class="text-xs text-gray-500 text-center">bulan ini kamu topup:</p>
              <p class="font-bold text-2xl lg:text-3xl italic text-gray-800">Rp808.000</p>
            </div>
          </div>

          <div class="border border-accent w-full rounded-full my-2"></div>
          
          <div class="w-full overflow-x-auto pb-2">
             <div class="flex justify-start items-start gap-2 w-max">
              <BadgesDefault title="Badge 1" description="Deskripsi badge 1" :imageUrl="main" variant="active" />
              <BadgesDefault title="Badge 1" description="Deskripsi badge 1" :imageUrl="main" variant="active" />
              <BadgesDefault title="Badge 1" description="Deskripsi badge 1" :imageUrl="main" variant="active" />
              <BadgesDefault title="Badge 1" description="Deskripsi badge 1" :imageUrl="main" variant="active" />
            </div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row bg-tertiary rounded-3xl p-6 lg:p-10 gap-8 border border-accent/50 w-full h-auto"> 
            
            <div class="w-full lg:w-[35%] flex flex-col justify-between gap-6">
                <div>
                    <h2 class="font-bold text-xl lg:text-2xl mb-4 text-black">Data Pribadi</h2>
                    <p class="text-sm text-gray-500 leading-relaxed">
                      Data pribadi hanya bisa dilihat oleh Anda dan hanya digunakan untuk keperluan Pesanan dan Pembayaran.
                    </p>
                </div>
                <ButtonsPrimary variant="solid" color="secondary" class="w-full">Edit Data</ButtonsPrimary>
            </div>

            <div class="hidden lg:block w-[2px] bg-accent/50 mx-2 rounded-full h-auto self-stretch"></div>
            
            <div class="block lg:hidden w-full h-[1px] bg-accent/50"></div>

            <div class="w-full lg:w-[65%] flex flex-col gap-4 justify-center">
                
                <div class="flex flex-col lg:grid lg:grid-cols-[140px_1fr] items-start lg:items-center gap-2 lg:gap-4">
                    <label class="text-sm font-bold text-gray-800">Nama Lengkap</label>
                    <div class="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg px-4 py-3 w-full truncate">
                        Rizqya Adzra Zahira Sudrajat
                    </div>
                </div>

                <div class="flex flex-col lg:grid lg:grid-cols-[140px_1fr] items-start lg:items-center gap-2 lg:gap-4">
                    <label class="text-sm font-bold text-gray-800">Username Roblox</label>
                    <div class="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg px-4 py-3 w-full truncate">
                        @estehmanispanas
                    </div>
                </div>

                <div class="flex flex-col lg:grid lg:grid-cols-[140px_1fr] items-start lg:items-center gap-2 lg:gap-4">
                    <label class="text-sm font-bold text-gray-800">No. Whatsapp</label>
                    <div class="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg px-4 py-3 w-full truncate">
                        088xxxxxxx
                    </div>
                </div>

                <div class="flex flex-col lg:grid lg:grid-cols-[140px_1fr] items-start lg:items-center gap-2 lg:gap-4">
                    <label class="text-sm font-bold text-gray-800">Email</label>
                    <div class="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg px-4 py-3 w-full truncate">
                        rizqyaadzra68@gmail.com
                    </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import main from '@/assets/images/gradient.png';
</script>