<template>
  <div class="py-3">
  v-model : {{count}}
<div class="flex items-center2">
  <BraveNumberInput v-model="count" class="flex items-center" inputClass="ring-offset-2 focus:ring-4 text-indigo-600 bg-indigo-100 z-10 relative h-14 w-14 rounded-full text-center">
  <template #minus-button="{decreaseNumber}">
    <button tabindex="-1" class=" 
     bg-indigo-400 hover:bg-indigo-500 rounded-l-full p-3 -mr-6 w-20  h-full" @click="decreaseNumber()">
       <!--minus icon  -->
       <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" 
       fill="currentColor" class="bi bi-dash-circle fill-white block mr-1" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg>
        
     </button>
  </template>
  <template #plus-button="{increaseNumber}">
    <button tabindex="-1" 
    class="bg-indigo-400 hover:bg-indigo-600    rounded-r-full h-full p-3 -ml-6 w-20 z-1" @click="increaseNumber()">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" 
    class="fill-white bi bi-plus-circle block float-right mr-1 " viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
    </button>
  </template>
</BraveNumberInput>
</div>
</div>
</template>
<script>

import {BraveNumberInput} from "bravevue";
export default{
  data: function() {
    return {
      count: 100
    }
  },
  components: {
    BraveNumberInput
  },
}
</script>