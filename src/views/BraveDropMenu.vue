<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="flex-1 lg:p-16">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl font-semibold mb-10"><i class="bi me-2 text-xl bi-menu-button-wide"></i> Brave Drop Menu</h1>
        <p>Show Menus for Navigation or any purpose, you can control the clicks of each option as you want. </p>
        <p> You have full control of style and functionality.</p>
        <div class="mt-5">
            <BraveDropMenu />
        </div>
    
        <BraveGistEmbed
          class="my-10"
          url="https://gist.github.com/shishirraven/9a1d9d9f654c7c0ee1c5de5c07ebe5c1"
        />

    <!-- ------------------------------------------------------------------ -->
    <!-- !!! ENDS CENTERED WITH SINGLE ACTION -->
    <!-- ------------------------------------------------------------------ -->
      </div>
      <hr />
    </div>
  </main>
</template>

<script>
import BraveDropMenu from "@/components/uiexamples/BraveDropMenu.vue";
import { BraveGistEmbed } from "bravevue";
import { useHead } from "@vueuse/head"

export default {
  mounted(){
    useHead({
            title: "DropMenu for Vue 3 | Brave Components Library.",
            meta: [
                {
                    name: "description",
                    content: "Show Menus for Navigation or any purpose, you can control the clicks of each option as you want. Full Control over Style",
                },
                {
                    name: "keywords",
                    content: "Drop Menu, Component, Vue3, BraveVue, Javascript",
                },
                {
                    name: "author",
                    content: "Shishir Raven",
                },
            ],
        })
  },
  components: {  BraveGistEmbed, BraveDropMenu },
};
</script>
