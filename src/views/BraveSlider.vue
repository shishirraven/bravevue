<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    
  <main class="flex-1 lg:p-16">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl font-semibold mb-10"><i class="bi me-2 text-xl bi-menu-button-wide"></i> Brave Slider </h1>
        <p>BraveSlider is a responsive slider that you can use to slide any HTML Content or Images. </p>
        <p class="my-5">The following is a Simple Example. </p>
        
        <BraveSlider />

        
        <p class="my-5">Here is how the Slider looks in smaller Size</p>
        <div class="max-w-xl">
          <BraveSlider />
        </div>

        
        <BraveGistEmbed
          class="my-10"
          url="https://gist.github.com/shishirraven/3985c05c81ab898a5c476e792eb6298e"
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
import BraveSlider from "@/components/uiexamples/BraveSlider.vue";
import { BraveGistEmbed } from "bravevue";
export default {
  components: {  BraveGistEmbed, BraveSlider },
};
</script>
