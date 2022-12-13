<template>
  <main class="flex-1 lg:p-16">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl font-semibold mb-10">
          <i class="bi me-2 bi-github"></i>
          Brave Gist Embed
        </h1>
        <p>
          You can use this Component to embed Github Gist, right now it solves
          the problem which one faces while using the script tag embed code
          given by Gist.
        </p>

        <h2 class="text-2xl mt-7 mb-4">Example</h2>
        <p>The following is an Embed by BraveGistEmbed component</p>
        <BraveGistEmbed
          class="my-10"
          url="https://gist.github.com/shishirraven/de437adec76659671c4b6d2d45630375"
        />

        <h2 class="text-2xl mt-7 mb-4">Full Example Code</h2>
        <BraveGistEmbed
          class="my-10"
          url="https://gist.github.com/shishirraven/4d1768257ce8b3d34a8e4a092a6fcc45"
        />
      </div>
      <hr />
      

      
    </div>
  </main>
</template>

<script>
import { BraveGistEmbed } from "bravevue";
import { useHead } from "@vueuse/head"

export default {
  mounted(){
    useHead({
            title: "Gist Embed Component for Vue 3 | Brave Components Library.",
            meta: [
                {
                    name: "description",
                    content: "use this Component to embed Github Gist, right now it solves the problem which one faces while using the script tag embed code given by Gist.",
                },
                {
                    name: "keywords",
                    content: "Gist Embed Component, Component, Vue3, BraveVue, Javascript ",
                },
                {
                    name: "author",
                    content: "Shishir Raven",
                },
            ],
        })
  },
  components: { BraveGistEmbed },
};
</script>
