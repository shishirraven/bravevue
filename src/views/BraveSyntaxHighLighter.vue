<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="flex-1 lg:p-16">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl font-semibold mb-10">
          <i class="bi me-2 fs-4 bi-window-stack"></i> Brave Syntax Hightlighter
        </h1>
        <p>
          Brave Syntax Hilighter is a super easy to use syntax highlighter based on <a class="font-bold text-blue-500" href="https://prismjs.com/"> Prismjs javascript </a>
        </p>
        <p>
         
        </p>

        <h2 class="text-2xl font-semibold my-10">Examples</h2>

        <BraveTabs
          ref="bravetabref"
          class="text-black dark:text-white my-10"
          tabs-content-class="border  p-4 dark:bg-slate-800"
          tab-button-class="cursor-pointer rounded-t-lg mr-0 dark:bg-slate-900 bg-gray-50 hover:dark:bg-slate-800 hover:bg-gray-200"
          tab-button-active-class="shadow-inner-sm -mb-px border rounded-t-lg border-b-0 dark:bg-slate-800 bg-white "
          v-bind:tabs="['upload', 'filemanager']"
          initialTab="upload"
        >
          <!-- ================================================================ -->
          <!-- SETTINGS PANEL  -->
          <!-- ================================================================ -->
          <template #tab-head-upload>Demo for Javascript with Copy Button</template>
          <template #tab-panel-upload>
            <!-- <BraveSyntaxHighlighterDemo /> -->
          </template>

          <!-- ================================================================ -->
          <!-- SETTINGS PANEL  -->
          <!-- ================================================================ -->

          <template #tab-head-filemanager>Code</template>
          <template #tab-panel-filemanager>
            
          </template>
        </BraveTabs>

     


        <!-- ------------------------------------------------------------------ -->
        <!-- !!! ENDS CENTERED WITH SINGLE ACTION -->
        <!-- ------------------------------------------------------------------ -->
      </div>
      <hr />
    </div>
  </main>
</template>

<script>
import BraveSyntaxHighlighterDemo from "@/components/uiexamples/BraveSyntaxHighlighterDemo.vue";
//import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import {  BraveTabs } from "bravevue";
export default {
  components: {

    BraveTabs,
    //BrTaSyntaxHighlighter,
    // BraveSyntaxHighlighterDemo,
  },
};
</script>
