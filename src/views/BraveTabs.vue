<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="flex-1 lg:p-16">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl font-semibold mb-10 
        ">
          <i class="bi bi-segmented-nav
           bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"></i> 
          Brave Tabs
        </h1>
        <p>Show Options from your Data and save the result through v-model.</p>
        <p class="my-4">The following is an brave tabs in action.</p>
        
        <div class="mt-5">
            <BraveTabs /> 
        </div>

        <hr class="my-10"/>
        <h2 class="text-2xl font-semibold mb-5">How is Brave Select Different</h2>
        <h3 class="text-xl font-semibold mb-2">Brave Select uses an Array of Objects for Options</h3>
        
        <p>Brave Select is designed to loop an array of objects. which means
          you can use the objects properties on on the Selected Value and also
          the options. 
        </p>
        <p>
          A common use case would be if you are using an icon along with the text. 
          This would be helpful to show the icon along with the text. 
        </p>
        <p>
          
        </p>
        <h3 class="text-xl font-semibold mt-7 mb-2">Super flexible templates</h3>
        <p>You can customize the templates in whatever way you want and can use properties of the 
          object how ever you like. 
        </p>
        
        <BraveGistEmbed
          class="my-10"
          url="https://gist.github.com/shishirraven/8be46fba84e17f67ef571c6d15896f03"
        />

    <!-- ------------------------------------------------------------------ -->
    <!-- !!! ENDS CENTERED WITH SINGLE ACTION -->
    <!-- ------------------------------------------------------------------ -->
      </div>
      <hr class="my-5" />



    </div>
  </main>
</template>

<script>
import BraveTabs from "@/components/uiexamples/BraveTabs.vue";
import { BraveGistEmbed } from "bravevue";
export default {
  components: {  BraveGistEmbed, BraveTabs },
};
</script>
