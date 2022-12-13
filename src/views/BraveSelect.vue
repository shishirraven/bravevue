<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="flex-1 lg:p-16">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl font-semibold mb-10"><i class="bi me-2 text-xl bi-menu-button-wide"></i> Brave Select</h1>
        <p>Show Options from your Data and save the result through v-model.</p>
        <div class="mt-5">
            <BraveSelect /> &lt;-- Example
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
          url="https://gist.github.com/shishirraven/b6061b96eb6301c7aa014b902fb8b36c"
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
import BraveSelect from "@/components/uiexamples/BraveSelect.vue";
import { BraveGistEmbed } from "bravevue";
import { useHead } from "@vueuse/head"

export default {
  mounted(){
    useHead({
            title: "Select Input Component for Vue 3 | Brave Components Library.",
            meta: [
                {
                    name: "description",
                    content: "Select Input Component with which you can use your own templates and have full control of the styling.",
                },
                {
                    name: "keywords",
                    content: "Select, Input Component, Component, Advance Select Component, Vue 3, Javascript ",
                },
                {
                    name: "author",
                    content: "Shishir Raven",
                },
            ],
        })
  },
  components: {  BraveGistEmbed, BraveSelect },
};
</script>
