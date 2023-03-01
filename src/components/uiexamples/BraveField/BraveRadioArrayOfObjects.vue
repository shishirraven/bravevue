<template>
  <div class="flex h-full flex-col">
    <div class="grow overflow-auto p-5">
      <h2 class="text-md mb-1">Select with Object</h2>
      <BraveField
        type="radio"
        :options="[
          { label: 'India', value: 'in' },
          { label: 'France', value: 'fr' },
          { label: 'Germany', value: 'de' },
          { label: 'Spain', value: 'es' },
          { label: 'Italy', value: 'ie' },
          { label: 'Greece', value: 'gr' },
        ]"
        v-model="value"
      />
    </div>
    <div class="rounded-bl-xl bg-neutral-200 p-5">
      {{ value }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: { label: 'India', value: 'in' },
    };
  },
};
</script>