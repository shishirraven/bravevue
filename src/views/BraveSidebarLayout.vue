<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="flex-1 lg:p-16">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl font-semibold mb-10">
          <i class="bi me-2 text-xl bi-window-sidebar text-4xl"></i> Sidebar Layout
        </h1>
        <div class="grid grid-cols-5 gap-4">
          <div class="col-span-2 ">
            <p class="pb-5">
              Brave Sidebar Layout is a Vue component that allows you to create
              a sidebar layout with a sidebar and a content area.
            </p>
            <p class="pb-5">
                The sidebar of this page is a Live example of Sidebar Layout.
            </p>
          </div>
        </div>

        

        <hr>


        <h2 class="text-3xl font-semibold my-7">Features</h2>
        
        <ul class="my-10">
            <li>
                100% customizable, no dependency on any third-party CSS library.
            </li>
            <li>Responsive.</li>
            <li>
            Control Sidebar Width with Props. 
            </li>
       
        </ul>
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
                    <template #code>{{`npm install bravevue13`}} </template>
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
                <p>Import <code>`BraveSidebarLayout`</code> Component and add it to your components object.</p>
              </div>
            </div>
            <div class="col-span-3">

<BrTaSyntaxHighlighter langauge="javascript">
<template #title>app.vue</template>
<template #code>{{`<script>
import { BraveSidebarLayout } from "bravevue";
export default{
  components: {
    BraveSidebarLayout
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
<template #code>{{`<BraveSidebarLayout
    sidebar-class="  bg-slate-900 flex flex-col text-white "
    :sidebar-width="300"
  >
    <!-- SIDEBAR TEMPLATE -->
    <template v-slot:sidebar="{closeMenu,openMenu}">
        <div @click="closeMenu()" class="p-2 cursor-pointer text-2xl absolute right-0 top-0 md:hidden" >
            <i class=" bi bi-x-circle"></i>
        </div>
        <-- ADD YOU SIDEBAR HTML HERE  -->
    </template>
    <!-- MAIN CONTENT TEMPLATE -->
    <template v-slot:content="{closeMenu,openMenu}">
       <div class="p-2cursor-pointer text-2xl inline-block md:hidden" @click="openMenu()">
            <i class=" bi bi-three-dots-vertical"></i>
        </div>
        <-- ADDED ROUTERVIEW TO MAIN CONTENT AREA  -->
        <router-view />
    </template>
  </BraveSidebarLayout>`}}</template>
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
    </div>
  </main>
</template>

<script>
import BraveSlider from "@/components/uiexamples/BraveSlider.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import { BraveGistEmbed, BraveSyntaxHighlighter } from "bravevue";
export default {
  components: { BraveGistEmbed, BraveSlider, BraveSyntaxHighlighter,BrTaSyntaxHighlighter },
};
</script>
