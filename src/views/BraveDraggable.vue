<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    
  <main class="flex-1 lg:p-16">

    <BraveDraggable 
    class=""
    :visible="config.visible"
    :position="config.position"
    :placement="config.placement"
    v-slot="{hide, onHandleMouseDown}"
    @placement-change="config.placement = $event,saveState()"
    @position-change="config.position = $event,saveState()"
    >  
    <div class="rounded-lg bg-white dark:bg-indigo-800 dark:text-white shadow-lg  border border-white lg:w-80"><!-- Body -->

        <div @mousedown="onHandleMouseDown" class="cursor-move bg-slate-100 dark:bg-indigo-900 px-5 py-2 rounded-t-lg 
        flex  gap-x-2">
            <!-- bootstrap move icon -->
            <i class="bi bi-arrows-move"></i>
            Demo Draggable Window
        </div>



        <div class="flex">
            
        <div class="p-5">
            <p class="text-gray-500 dark:text-white text-sm">
                Hey, I am a Brave Draggable. Try to use the Title bar in this window to drag me arround.
            </p>
        </div>
    </div>
    <!-- Buttons -->
    <div class="bg-slate-100 dark:bg-indigo-900 px-5 py-2 rounded-b-lg flex justify-end gap-x-2">
        <button type="button" @click="hide" class="text-gray-900 bg-white border border-gray-300 focus:outline-none
         hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1 dark:bg-indigo-900
          dark:text-white dark:border-indigo-100 dark:hover:bg-indigo-700 dark:hover:border-indigo-600
           dark:focus:ring-gray-700"> 
            Close Demo </button>
        </div>
    </div>

    </BraveDraggable>




    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl font-semibold mb-10">
          <i class="bi me-2 text-xl  bi-arrows-move md:text-4xl"></i> Draggable
        </h1>
        <div class="md:grid md:grid-cols-2 gap-4 prose dark:prose-invert">
          <div class="col-span-2 ">
            <p class="">
              Brave Draggable is a Vue component that helps you make any element draggable with mouse or touch. 
              </p>
              <p>
                The draggable element can be a div, a button, Image modeal or any other element. You can set any element as a handle to drag the element.
            
              </p>
            <p>
                Brave draggable has features such as setting bounds out of which the drag should happen, automatic docking and 
                snapping to the center of the screen with visual guide. 
            </p>
            <p>

            </p>
            <p>
              See the Demo at the Top Right Corner of the screen. 
            </p>
          </div>
        </div>

        

        <hr>

        <div class="prose dark:prose-invert">

        

        <h2 class="text-3xl font-semibold my-7">Features</h2>
        
        <ul class="my-10">
            <li>
                Unstyled and unopinionated. You can style it as you want.
            </li>
            <li>
                Atomatic Docking 
            </li>
            <li>
                Center Snapping
            </li>
       
        </ul>
    </div>
        <hr>
        <h2 class="text-3xl font-semibold my-7">How to Use</h2>
        <ol class="relative space-y-2 mb-16" style="counter-reset: step 0">
          <li
            class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5"
            style="counter-increment: step 1"
          >
            <div class="mb-6 col-span-2 xl:mb-0">
              <h4
                class="leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"
              >
                Install BraveVue 
              </h4>
              <div class="">
                <p>Install <code>`bravevue`</code> via npm</p>
              </div>
            </div>
            <div class="col-span-3">
                <BrTaSyntaxHighlighter>
                    <template #title>Terminal</template>
                    <template #code>{{`npm install bravevue`}} </template>
                </BrTaSyntaxHighlighter>
             </div>
          </li>

          <!-- ======================== -->
          <!-- SECOND SETEP -->
          <!-- ======================== -->

          <li
            class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5"
            style="counter-increment: step 1"
          >
            <div class="mb-6 col-span-2 xl:mb-0">
              <h4
                class="leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"
              >
                Import the Component
              </h4>
              <div class="">
                <p>Import <code>`BraveDraggable`</code> Component and add it to your components object.</p>
              </div>
            </div>
            <div class="col-span-3">

<BrTaSyntaxHighlighter langauge="javascript">
<template #title>app.vue</template>
<template #code>{{`<script>
import { BraveDraggable } from "bravevue";
import "../node_modules/bravevue/dist/style.css";
export default{
  components: {
    BraveDraggable
  }
}
</script>`}}</template>
</BrTaSyntaxHighlighter>

            </div>
          </li>

          <!-- ======================== -->
          <!-- THIRD STEP -->
          <!-- ======================== -->

          <li
            class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5"
            style="counter-increment: step 1"
          >
            <div class="mb-6 col-span-2 xl:mb-0">
              <h4
                class="leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"
              >
                Add Component to your template
              </h4>
              <div class="">
                <p class="text-sm">
                  Place component in your template wherever you want the Slider
                  to appear.
                </p>
              </div>
            </div>
            <div class="col-span-5">
            
<BrTaSyntaxHighlighter langauge="html">
<template #title>app.vue</template>
<template #code>{{`    <BraveDraggable 
    class=""
    :visible="config.visible"
    :position="config.position"
    :placement="config.placement"
    v-slot="{hide, onHandleMouseDown}"
    @placement-change="config.placement = $event,saveState()"
    @position-change="config.position = $event,saveState()"
    >  
    <div class="rounded-lg bg-white dark:bg-indigo-800 dark:text-white shadow-lg  border border-white lg:w-80"><!-- Body -->
        <div @mousedown="onHandleMouseDown" class="cursor-move bg-slate-100 dark:bg-indigo-900 px-5 py-2 rounded-t-lg 
        flex  gap-x-2">
            <!-- bootstrap move icon -->
            <i class="bi bi-arrows-move"></i>
            Demo Draggable Window
        </div>
        <div class="flex">
        <div class="p-5">
            <p class="text-gray-500 dark:text-white text-sm">
                Hey, I am a Brave Draggable. Try to use the Title bar in this window to drag me arround.
            </p>
        </div>
    </div>
    <!-- Buttons -->
    <div class="bg-slate-100 dark:bg-indigo-900 px-5 py-2 rounded-b-lg flex justify-end gap-x-2">
        <button type="button" @click="hide" class="text-gray-900 bg-white border border-gray-300 focus:outline-none
         hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1 dark:bg-indigo-900
          dark:text-white dark:border-indigo-100 dark:hover:bg-indigo-700 dark:hover:border-indigo-600
           dark:focus:ring-gray-700"> 
            Close Demo </button>
        </div>
    </div>

    </BraveDraggable>`}}</template>
</BrTaSyntaxHighlighter>  
            </div>
          </li>

          
        </ol>

        <!-- <BraveGistEmbed
          class="my-10"
          url="https://gist.github.com/shishirraven/3985c05c81ab898a5c476e792eb6298e"
        /> -->

        <!-- ------------------------------------------------------------------ -->
        <!-- !!! ENDS CENTERED WITH SINGLE ACTION -->
        <!-- ------------------------------------------------------------------ -->
      </div>
      <hr class="my-5" />
      <div class="prose dark:prose-invert max-w-none">
            <h2>Options</h2>

          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr class="text-xs font-medium uppercase">
              <th scope="col" class="px-6 py-3">
                  Parameter
              </th>
              <th scope="col" class="px-6 py-3">
                  Type
              </th>
              <th scope="col" class="px-6 py-3">
                  Required
              </th>
              <th scope="col" class="px-6 py-3">
                  Description
              </th>
          </tr>
      </thead>
      <tbody>

        

            
        
            
        <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">width</code>
              </td>
              <td class="px-6 py-4">
                  Number
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                    Width of the Draggable Window
                </td>
            </tr>

          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">height</code>
              </td>
              <td class="px-6 py-4">
                    Number
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                    Height of the Draggable Window
                        
                </td>
            </tr>
          
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">AutomaticDocking</code>
              </td>
              <td class="px-6 py-4">
                  Boolean
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                    Weather to enable automatic docking or not. If enabled, the component will dock to the nearest edges.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">Placement</code>
              </td>
              <td class="px-6 py-4">
                  String
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                        The placement of the component. Can be one of 
                <code class="text-blue-600 dark:text-blue-400">top-left</code> or 
                <code class="text-blue-600 dark:text-blue-400">top-center</code> or 
                <code class="text-blue-600 dark:text-blue-400">top-right</code> or
                <code class="text-blue-600 dark:text-blue-400">bottom-left</code> or
                <code class="text-blue-600 dark:text-blue-400">bottom-center</code> or
                <code class="text-blue-600 dark:text-blue-400">bottom-right</code> or
                <code class="text-blue-600 dark:text-blue-400">left-top</code> or
                <code class="text-blue-600 dark:text-blue-400">left-center</code> or
                <code class="text-blue-600 dark:text-blue-400">left-bottom</code> or
                <code class="text-blue-600 dark:text-blue-400">right-top</code> or
                <code class="text-blue-600 dark:text-blue-400">right-center</code> or
                <code class="text-blue-600 dark:text-blue-400">right-bottom</code>


                </td>
            </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">position</code>
              </td>
              <td class="px-6 py-4">
                Object
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                        Position of the component. <br>
                        <p>If placement is <code class="text-blue-600 dark:text-blue-400">top-left</code></p>
                        <code class="text-blue-600 dark:text-blue-400">position.top</code> - x position of the component. <br>
                        <code class="text-blue-600 dark:text-blue-400">position.left</code> - y position of the component. <br>

                        <p>
                            Similarly for other placements.
                        </p>
                
              </td>
            </tr>

            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">bounds</code>
              </td>
              <td class="px-6 py-4">
                  Object
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                        Bounds of the component. <br> The component will not be draggable outside these bounds. <br>
                        <br>
                        <code class="text-blue-600 dark:text-blue-400">bounds.top</code> - x  of the component. <br>
                        <code class="text-blue-600 dark:text-blue-400">bounds.left</code> - y  of the component. <br>
                        <code class="text-blue-600 dark:text-blue-400">bounds.bottom</code> - x  of the component. <br>
                        <code class="text-blue-600 dark:text-blue-400">bounds.right</code> - y  of the component. <br>
                </td>
            </tr>
            
        <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">snappingDistance</code>
              </td>
              <td class="px-6 py-4">
                  Number
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                    Distance from the center of the screen to snap to horizontal or vertical center
                </td>
            </tr>
            
        </tbody>
    </table>
</div>
      <hr class="my-5" />
    </div>
  </main>
</template>

<script>
import BraveSlider from "@/components/uiexamples/BraveSlider.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import { BraveGistEmbed, BraveSyntaxHighlighter, BraveDraggable } from "bravevue";
export default {
  components: { BraveGistEmbed, BraveSlider, BraveSyntaxHighlighter,BrTaSyntaxHighlighter, BraveDraggable },
  data(){
    return {
        config : {
                    visible: true,
                    position: {
                        top: '10px',
                        right: '10px'
                    },
                    placement: 'top-right'
                }
    }
  }
};
</script>
