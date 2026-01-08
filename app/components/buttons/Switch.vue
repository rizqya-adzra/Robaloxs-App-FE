<template>
  <div class="flex items-center gap-2 cursor-pointer select-none" @click="toggle">
    
    <div 
      class="w-20 h-10 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out border-2"
      :class="modelValue ? 'bg-green-100 border-green-500' : 'bg-blue-100 border-blue-400'"
    >
      <div 
        class="w-8 h-8 rounded-full shadow-md transform transition-all duration-300 ease-in-out flex items-center justify-center"
        :class="modelValue ? 'translate-x-10 bg-green-500 text-white' : 'translate-x-0 bg-white text-blue-500'"
      >
        
        <Icon 
          v-if="!modelValue" 
          name="mdi:email" 
          class="w-5 h-5 animate-fade-in" 
        />

        <Icon 
          v-else 
          name="mdi:whatsapp" 
          class="w-5 h-5 animate-fade-in" 
        />

      </div>
    </div>

    <div v-if="label" class="font-inter text-sm text-gray-700">
      {{ label }}
    </div>

  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue?: boolean
  label?: string     
}>()

const emit = defineEmits(['update:modelValue'])

const toggle = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}
</style>