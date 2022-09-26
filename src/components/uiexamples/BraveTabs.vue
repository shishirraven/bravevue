<template>
      <BraveTabs ref="bravetabref" 
        class="text-black dark:text-white my-10"
        tabs-wrapper-class="flex items-center"
        tabs-content-class="border  p-10 dark:bg-slate-800"
        tab-button-class="cursor-pointer rounded-t-lg mr-0 dark:bg-slate-900 bg-gray-50 hover:dark:bg-slate-800 hover:bg-gray-200"
        tab-button-active-class="shadow-inner-sm -mb-px border rounded-t-lg border-b-0 dark:bg-slate-800 bg-white "
        v-bind:tabs="['upload','filemanager']" 
        initialTab="upload">
        <template #before-tab> <div class="px-2"><img class="h-7 w-auto" src="@/assets/images/logo.svg" alt="BraveVue" /></div> </template>
        <template #after-tab><div class="px-2 grow text-right"><div class="inline-block">Help</div></div></template>
      <!-- ================================================================ -->
      <!-- SETTINGS PANEL  -->
      <!-- ================================================================ -->
      <template #tab-head-upload>Upload</template>
      <template #tab-panel-upload>
        <h1 class="text-3xl mb-5">Content for Upload Panel</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
      </template>


      <!-- ================================================================ -->
      <!-- SETTINGS PANEL  -->
      <!-- ================================================================ -->

      <template #tab-head-filemanager>File Manager</template>
      <template #tab-panel-filemanager>
         <h1 class="text-3xl mb-5">File Manager Content</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
    
      </template>
</BraveTabs>
</template>
<script>
import { BraveTabs } from "bravevue";
export default {
  components: { BraveTabs },
};
</script>
