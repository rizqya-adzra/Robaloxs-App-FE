<template>
  <div class="mx-auto max-w-[1050px] py-20">
    <p class="font-inter font-bold text-4xl mb-5 text-center lg:text-start">Beli Robux Via <span class="text-primary">Login</span></p>
    <div class="flex justify-center items-start">
      <div class="flex flex-col lg:flex-row justify-between items-start gap-5">
        <div class="space-y-5">
          <CardsDefault step="1">
            <template #title>
              Masukan Username & Password Roblox
            </template>
            <template #inputs>
              <div class="flex justify-start items-center gap-4">
                <InputsDefault placeholder="username" variant="default" color="black" />
                <InputsDefault placeholder="password" variant="default" color="black" />
              </div>
            </template>
            <template #description>
              Pastikan Username dan Password in game anda sudah sesuai dengan yang dicantumkan agar tidak terjadi kegagalan atau error di saat transaksi.
            </template>
          </CardsDefault>
          <CardsDefault step="2">
            <template #title>
              Pilih Jumlah Gift Card Robux 
            </template>
            <template #inputs>
              <div class="flex flex-wrap justify-center items-center gap-4">
                <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />
                <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />
                <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />
                <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />
                <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />
                <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />
                <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />
                <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />
                <CheckboxesDefault :image="robux" modelValue="" value="100" qty="100 Robux" price="Rp10.000" />
                </div>
            </template>
          </CardsDefault>
          <CardsDefault step="3">
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
          <CardsDefault step="4">
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
        <div class="sticky top-20 space-y-5 p-10 bg-tertiary border-2 border-accent/50 rounded-3xl w-screen md:w-full lg:max-w-[500px]">   
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
import bca from "~/assets/images/payment/bca.png"
import bni from "~/assets/images/payment/bni.png"
import bri from "~/assets/images/payment/bri.png"
import cimb_niaga from "~/assets/images/payment/cimb_niaga.png"
import gopay from "~/assets/images/payment/gopay.png"
import mandiri from "~/assets/images/payment/mandiri.png"
import qris from "~/assets/images/payment/qris.png"
</script>