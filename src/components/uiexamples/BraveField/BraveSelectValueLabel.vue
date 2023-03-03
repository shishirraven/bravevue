<template>
  <div class="flex h-full flex-col">
    <div class="grow overflow-auto p-5">
      <h2 class="text-md mb-1">Select with Object</h2>
      <BraveField
        type="select"
        :options="{
          mercury: 'Mercury',
          venus: 'Venus',
          earth: 'Earth',
          mars: 'Mars',
          jupiter: 'Jupiter',
          saturn: 'Saturn',
          uranus: 'Uranus',
          neptune: 'Neptune',
        }"
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
      value: "mercury",
    };
  },
};
</script>