<template>
    <div class="dark:text-slate-200">
      <div class="mb-4">
        <h2 class="text-md mb-1">Text Field</h2>
        <BraveField
          type="text"
          v-model="textValue"
          placeholder="Enter a Value"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
      </div>
      <div class="mb-4">
        <h2 class="text-md mb-1">Textarea</h2>
        <BraveField
          type="textarea"
          v-model="textValue"
          placeholder="This is my first field. "
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
      </div>
  
      <div class="mb-4">
        <h2 class="text-md mb-1">Select with Text Array</h2>
        <BraveField
          type="select"
          :options="['Orange', 'Grapes', 'Apple', 'Banana']"
          v-model="selectValue1"
          placeholder="This is my first field. "
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
      </div>
  
      <div class="mb-4">
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
          v-model="selectValue2"
          placeholder="This is my first field. "
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
      </div>
  
      <div class="mb-4">
        <h2 class="text-md mb-1">Select Array of Objects</h2>
        <BraveField
          type="select"
          :options="[
            { label: 'France', value: 'fr', attrs: { disabled: true } },
            { label: 'Germany', value: 'de', attrs: { disabled: true } },
            { label: 'Spain', value: 'es', attrs: { disabled: true } },
            { label: 'Italy', value: 'ie' },
            { label: 'Greece', value: 'gr', attrs: { disabled: true } },
          ]"
          v-model="selectValue3"
          placeholder="This is my first field. "
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
      </div>
  
      <div class="mb-4">
        <h2 class="text-md mb-1">Radio</h2>
        <BraveField
          type="radio"
          :options="[
            { label: 'France', value: 'fr', attrs: { disabled: true } },
            { label: 'Germany', value: 'de', attrs: { disabled: true } },
            { label: 'Spain', value: 'es', attrs: { disabled: true } },
            { label: 'Italy', value: 'ie' },
            { label: 'Greece', value: 'gr', attrs: { disabled: true } },
          ]"
          v-model="selectValue3"
          class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
      </div>
  
      <div class="mb-4">
        <h2 class="text-md mb-1">Checkbox</h2>
        <BraveField type="checkbox" v-model="booleanVal" class="border" />
      </div>
    </div>
  </template>
  <script>

  export default {

    name: "BraveFieldDemo",
    data() {
      return {
        booleanVal: false,
        textValue: "Default Value",
        selectValue1: "Pizza",
        selectValue2: "venus",
        selectValue3: "gr",
      };
    },
  };
  </script>
  