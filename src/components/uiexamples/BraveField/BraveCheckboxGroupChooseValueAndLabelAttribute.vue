<template>
    <div class="flex h-full flex-col">
      <div class="grow overflow-auto p-5">
        <h2 class="text-md mb-1">Select with Object</h2>
        <BraveField
          type="checkboxGroup"
          option-value="code"
          option-label="name"
          :options=" [
              {
                  name: 'Product 1',
                  price: 20.99,
                  brand: 'Brand A',
                  code: 'PRD-001'
              },
              {
                  name: 'Product 2',
                  price: 10.99,
                  brand: 'Brand B',
                  code: 'PRD-002'
              },
              {
                  name: 'Product 3',
                  price: 5.99,
                  brand: 'Brand C',
                  code: 'PRD-003'
              },
              {
                  name: 'Product 4',
                  price: 50.99,
                  brand: 'Brand D',
                  code: 'PRD-004'
              }
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
        value: ["in"],
      };
    },
  };
  </script>