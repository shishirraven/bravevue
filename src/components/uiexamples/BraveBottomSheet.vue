<template>
    <!-- Buttons to change the Sheets State to closed,half,full -->
    <div class="flex lg:flex-row flex-col gap-2 mt-3">
<!-- <button @click="state = 'closed'" type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:flex-1 ">Close Bottom Sheet</button> -->
<button @click="state = 'half'" type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:flex-1 ">Half Open Bottom Sheet</button>
<button @click="state = 'full'" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:flex-1 ">Open Bottom Sheet to Full Height</button>
        
    </div>
    <BraveBottomSheet
      class="bg-slate-200 border border-slate-600 dark:bg-slate-900 rounded-t-3xl "
      v-model:state="state"
      closeHeight="10%"
      halfHeight="50%"
      fullHeight="90%"
      backDropOpacity="60%"
      backdropZIndex="2000"
      backDropColor="#000"
      zIndex="2001"
      v-slot="{up,down}"
    >
      <!-- DRAGGABLE HANDLE -->
      <div  
        v-SwipeUp="up"
        v-SwipeDown="down" 
        style="touch-action: none;"
        class="p-4 flex justify-center touch-none cursor-ns-resize">
        <div class="h-1 w-16 rounded-full bg-slate-500" ></div>
      </div>
      <!-- x-----x -->

      <div class="px-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto eaque possimus, sit fugiat distinctio mollitia reiciendis incidunt corporis accusantium, consequuntur quos non ipsa dolorum sapiente debitis obcaecati asperiores cum.
      </div>
    </BraveBottomSheet>
  </template>
  <script>
  import { BraveBottomSheet,SwipeUp, SwipeDown } from 'bravevue';

  export default {

    directives: { SwipeUp, SwipeDown },
    components: {
      BraveBottomSheet,
    },
    data() {
      return {
        state: "closed",
      };
    },
  };
  </script>