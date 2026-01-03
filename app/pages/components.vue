<template>
  <div>
    <Header />
  </div>
  <div class="flex gap-10 mt-4">
    <div class="flex flex-col items-start gap-3">
      <ButtonsPrimary color="secondary" variant="solid" icon="mdi:arrow-right-circle-outline">Solid Secondary</ButtonsPrimary>
      <ButtonsPrimary color="secondary" variant="solid">Solid Secondary</ButtonsPrimary>
      <ButtonsPrimary color="secondary" variant="outlined" icon="mdi:arrow-right-circle-outline">Outlined Secondary</ButtonsPrimary>
      <ButtonsPrimary color="secondary" variant="outlined">Outlined Secondary</ButtonsPrimary>
      <ButtonsPrimary color="black" variant="solid" icon="mdi:arrow-right-circle-outline">Solid Black</ButtonsPrimary>
      <ButtonsPrimary color="black" variant="solid">Solid Black</ButtonsPrimary>
      <ButtonsPrimary color="black" variant="outlined" icon="mdi:arrow-right-circle-outline">Outlined Black</ButtonsPrimary>
      <ButtonsPrimary color="black" variant="outlined">Solid Black</ButtonsPrimary>
    </div>
    <div class="flex flex-col gap-6 items-center">
      <ButtonsMini variant="inactive" color="primary" size="lg" icon="mdi:arrow-left" />
      <ButtonsMini variant="active" color="primary" size="lg" icon="mdi:arrow-right" />
      <ButtonsMini variant="inactive" color="secondary" size="md" icon="mdi:arrow-left" />
      <ButtonsMini variant="active" color="secondary" size="md" icon="mdi:arrow-right" />
      <ButtonsMini variant="inactive" color="black" size="sm" icon="mdi:arrow-left" />
      <ButtonsMini variant="active" color="black" size="sm" icon="mdi:arrow-right" />
    </div>
    <div class="flex flex-col gap-6 items-center">
      <ButtonsIcon icon="mdi:arrow-left" />
      <ButtonsIcon icon="mdi:arrow-right" />
      <ButtonsIcon icon="mdi:arrow-left" />
      <ButtonsIcon icon="mdi:arrow-right" />
      <ButtonsIcon icon="mdi:arrow-left" />
      <ButtonsIcon icon="mdi:arrow-right" />
    </div>
    <div class="flex flex-col gap-6 items-center">
      <InputsDefault placeholder="Primary" variant="default" color="primary" />
      <InputsDefault placeholder="Secondary" variant="default" color="secondary" />
      <InputsDefault placeholder="Black" variant="default" color="black" />
      <InputsDefault placeholder="Labeled" label="Labeled" type="Labeled" variant="default" color="primary" />
      <InputsDefault placeholder="Labeled" label="Labeled" type="Labeled" variant="default" color="secondary" />
      <InputsDefault placeholder="Labeled" label="Labeled" type="Labeled" variant="default" color="black" />
    </div>
    <div class="flex flex-col gap-6 items-center">
      <ButtonsToggle  v-model="qty" size="sm" variant="outlined" color="black"/>
    </div>
  </div>
  <div class="flex gap-3 bg-tertiary p-3 w-max my-4">
    <CheckboxesDefault v-model="selected" value="200" qty="200 Robux" price="Rp30.000" />
    <CheckboxesDefault v-model="selected" value="500" qty="500 Robux" price="Rp45.000" />
  </div>
</template>

<script setup>
  const selected = ref('')
</script>