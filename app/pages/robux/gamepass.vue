<template>
  <div class="mx-auto max-w-[1050px] py-20">
    <p class="font-inter font-bold text-4xl mb-5">Beli Robux Via <span class="text-primary">Gamepass</span></p>
    <div class="flex justify-center items-start">
      <div class="flex justify-between items-start gap-5">
        <div class="space-y-5">
          <CardsDefault step="1">
            <template #title>
              Masukan Username Roblox
            </template>
            <template #inputs>
              <div class="space-y-5">
                <div class="flex justify-start items-center gap-4">
                  <InputsDefault placeholder="username" variant="default" color="black" />
                  <ButtonsPrimary variant="solid" color="black">Cari</ButtonsPrimary>
                </div>
                <div class="flex gap-3 items-center">
                  <img :src="gradient" alt="" class="w-14 rounded-lg">
                  <div>
                    <p class="font-inter text-sm text-black/50">Username ditemukan!</p>
                    <p class="font-inter font-bold text-lg">luxciya (User ID: 8674786144)</p>
                  </div>
                </div>
              </div>
            </template>
          </CardsDefault>
          <CardsDefault step="2">
            <template #title>
              Pilih Gameplace
            </template>
            <template #inputs>
              <div class="space-y-5">
                <ButtonsPrimary variant="solid" color="black">Cari Gameplace</ButtonsPrimary>
                <div class="space-y-4">
                  <button class="flex w-full justify-start items-center gap-3 bg-white rounded-xl px-5 py-3 focus:bg-black focus:text-white hover:shadow-[inset_0_0_0_3px_#CFCFCF] transition-all duration-300">
                    <img :src="gradient" alt="" class="w-14 rounded-lg">
                    <p class="font-inter font-bold">Tempat luxqya_ra</p>
                  </button>
                </div>
              </div>
            </template>
          </CardsDefault>
          <CardsDefault step="3">
            <template #title>
              Pilih Jumlah Robux 
            </template>
            <template #inputs>
              <div class="space-y-5">
                <div class="flex justify-start items-center gap-4">  
                  <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />        
                  <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />        
                  <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />        
                </div>
                <div class="flex justify-start items-center gap-4">  
                  <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />        
                  <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />        
                  <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />        
                </div>
                <div class="flex justify-start items-center gap-4">  
                  <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />        
                  <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />        
                  <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />        
                </div>
                <div class="flex justify-start items-center gap-4">  
                  <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />        
                  <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />        
                  <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />        
                </div>
                <div class="flex justify-start items-center gap-4">  
                  <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />        
                  <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />        
                  <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />        
                </div>
              </div>
            </template>
          </CardsDefault>
          <CardsDefault step="4">
            <template #title>
              Pilih Gamepass
            </template>
            <template #inputs>
              <div class="space-y-5">
                <p class="font-inter">Ikuti instruksi dibawah ini, atur harga  R$ menjadi ... R$</p>
                <div class="w-full max-w-[850px] bg-[#121212] text-white rounded-lg overflow-hidden flex font-inter border border-gray-800 shadow-2xl">
                  <div class="w-[220px] shrink-0 border-r border-gray-700/50 p-5 flex flex-col gap-6">                 
                    <div>
                      <h3 class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Pass</h3>
                      <p class="text-sm font-medium text-gray-300">SHIROBLOX</p>
                      <div class="h-[1px] bg-gray-700/50 w-full mt-3"></div>
                    </div>
                    <div>
                      <h3 class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Detail</h3>
                      <ul class="space-y-1 text-sm">
                        <li class="px-2 py-1.5 text-gray-400 cursor-pointer hover:text-white">Basic Settings</li>
                        <li class="px-2 py-1.5 bg-[#1e1e1e] text-white font-medium rounded cursor-pointer">Sale</li> <li class="px-2 py-1.5 text-gray-400 flex items-center gap-1 cursor-pointer hover:text-white">
                          Advertise 
                          <IconExternal />
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Related Links</h3>
                      <ul class="space-y-1 text-sm">
                        <li class="px-2 py-1.5 text-gray-400 flex items-center gap-1 cursor-pointer hover:text-white">
                          My Inventory
                          <IconExternal />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex-1 p-8 bg-[#121212]">                   
                    <h1 class="text-4xl font-serif text-white mb-6 tracking-wide">Sales</h1>
                    <div class="text-xs text-gray-400 space-y-1 mb-4">
                      <p>Total sales: 0</p>
                      <p>Sold in last 7 days: 0</p>
                    </div>
                    <div class="flex items-center gap-3 mb-4">
                      <div class="w-12 h-6 bg-gray-500 rounded-full p-1 cursor-pointer flex items-center transition-all duration-300">
                        <div class="w-4 h-4 bg-white rounded-full shadow-md transform translate-x-6"></div> 
                      </div>
                      <span class="text-sm font-bold text-white">Item for Sale</span>
                    </div>
                    <div class="mb-3">
                      <div class="relative w-full max-w-[350px]">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <IconRobux class="w-4 h-4 text-white" />
                        </div>
                        <input 
                          type="text" 
                          value="1429"
                          class="bg-[#2b2b2b] border border-gray-600 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 p-2.5 placeholder-gray-400" 
                        />
                      </div>
                    </div>
                    <div class="flex items-center mb-5">
                      <input id="regional" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2">
                      <label for="regional" class="ml-2 text-sm font-medium text-gray-300">Enable Regional Pricing</label>
                    </div>

                    <div class="bg-[#fdf6b2] border border-[#fce96b] text-[#723b13] px-4 py-3 rounded-md mb-6 max-w-[350px] flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-sm font-medium">Wajib matikan regional pricing agar dapat diproses!</span>
                    </div>
                    <div class="max-w-[500px]">
                      <div class="flex justify-between items-center text-sm text-gray-300 mb-2">
                        <span>Creator earnings (70%)</span>
                        <div class="flex items-center gap-1">
                          <IconRobux class="w-4 h-4" />
                          <span class="text-white">1000</span>
                        </div>
                      </div>
                      <div class="border-b border-gray-700 mb-6"></div>
                      
                      <div class="flex gap-3">
                        <button class="px-4 py-2 text-sm font-medium text-white border border-gray-500 rounded hover:bg-gray-800 transition">
                          CANCEL
                        </button>
                        <button class="px-4 py-2 text-sm font-medium text-white bg-[#8b23a7] rounded hover:bg-[#7a1e94] transition shadow-lg">
                          SAVE CHANGES
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </CardsDefault>
          <CardsDefault step="5">
            <template #title>
              Pilih Metode Pembayaran
            </template>
            <template #inputs>
              <div class="space-y-5">
                <div class="space-y-3">
                  <p class="font-inter font-bold">QRIS & E-Wallet</p>
                  <div class="border-2 border/50 w-[30%] rounded-full"></div>
                  <div class="flex justify-start items-center gap-4">  
                    <CheckboxesDefault :image="qris" modelValue="" value="100" qty="QRIS" price="Tanpa biaya tambahan" />        
                    <CheckboxesDefault :image="gopay" modelValue="" value="100" qty="Gopay" price="Tanpa biaya tambahan" />              
                  </div>
                </div>
                <div class="space-y-3">
                  <p class="font-inter font-bold">Bank Transfer</p>
                  <div class="border-2 border/50 w-[30%] rounded-full"></div>
                  <div class="flex justify-start items-center gap-4">  
                    <CheckboxesDefault :image="bca" modelValue="" value="100" qty="BCA" price="Tanpa biaya tambahan" />        
                    <CheckboxesDefault :image="bni" modelValue="" value="100" qty="BNI" price="Tanpa biaya tambahan" />             
                  </div>
                  <div class="flex justify-start items-center gap-4">  
                    <CheckboxesDefault :image="mandiri" modelValue="" value="100" qty="Mandiri" price="Tanpa biaya tambahan" />        
                    <CheckboxesDefault :image="cimb_niaga" modelValue="" value="100" qty="CIMB Niaga" price="Tanpa biaya tambahan" />              
                  </div>
                  <div class="flex justify-start items-center gap-4">  
                    <CheckboxesDefault :image="bri" modelValue="" value="100" qty="BRI" price="Tanpa biaya tambahan" />                  
                  </div>
                </div>
              </div>
            </template>
          </CardsDefault>
          <CardsDefault step="6">
            <template #title>
              Masukan Nomor Whatsapp & Email
            </template>
            <template #inputs>
              <div class="flex justify-start items-center gap-4">
                <InputsDefault placeholder="cth: 08xxxxxxx" variant="default" color="black" />
                <InputsDefault placeholder="email cth: robaloxs@gmail.com" variant="default" color="black" />
              </div>
            </template>
            <template #description>
              No Whatsapp wajib di cantumkan agar admin bisa menghubungi untuk konfirmasi pesanan atau jika ada kendala.
            </template>
          </CardsDefault>
        </div>
        <div class="sticky top-20 space-y-5 p-10 bg-tertiary border-2 border-accent/50 rounded-3xl max-w-[500px]">   
          <div class="flex justify-start items-center gap-4 w-[300px]">
            <div class="font-inter font-bold text-xl">              
              Checkout        
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex justify-between items-center gap-4">  
              <p class="font-inter text-sm">Jumlah Robux</p>
              <p class="font-inter text-sm font-bold">100 Robux</p>
            </div>
            <div class="flex justify-between items-center gap-4">  
              <p class="font-inter text-sm">Metode Pembayaran</p>
              <p class="font-inter text-sm font-bold">QRIS</p>
            </div>
            <div class="flex justify-between items-center gap-4">  
              <p class="font-inter text-sm">No. Whatsapp</p>
              <p class="font-inter text-sm font-bold">0882-9962-1867</p>
            </div>
            <div class="border-2 border-accent rounded-full"></div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex justify-between items-center gap-4 mb-3">  
              <p class="font-inter text-sm font-bold">Total</p>
              <p class="font-inter font-bold text-xl">Rp10.000</p>
            </div>
            <ButtonsPrimary variant="solid" color="secondary">Beli Sekarang</ButtonsPrimary>
            <ButtonsPrimary variant="solid" color="gray">Masukan Keranjang</ButtonsPrimary>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import robux from "~/assets/images/robux.png"
import gradient from "~/assets/images/gradient.png"
import bca from "~/assets/images/payment/bca.png"
import bni from "~/assets/images/payment/bni.png"
import bri from "~/assets/images/payment/bri.png"
import cimb_niaga from "~/assets/images/payment/cimb_niaga.png"
import gopay from "~/assets/images/payment/gopay.png"
import mandiri from "~/assets/images/payment/mandiri.png"
import qris from "~/assets/images/payment/qris.png"
</script>