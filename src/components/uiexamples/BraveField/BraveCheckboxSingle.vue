<template>
  <div class="flex h-full flex-col">
    <div class="grow overflow-auto p-5">
      <BraveField
        type="checkbox"
        label="Do you want to Newsletters"
        :true-value="{ newsletter: 'yes' }"
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
      value: null,
    };
  },
};
</script>
