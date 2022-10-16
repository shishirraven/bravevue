<template>
  <div class="text-xl mb-3">Demo for Nested Elements</div>

  <div class="text-lg">Preview</div>
  <BraveBlockTree ref="rootElmt"  v-model="seedData"></BraveBlockTree>
  <div class="text-lg">Component Tree JSON</div>
  <code>
    <pre class="bg-slate-900 p-2 rounded w-full overflow-auto wrap">{{seedData}}</pre>
  </code>
  
  <div class="text-lg my-5">HTML Output Generated from Tree</div>
  <button @click="getHTML()" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">

  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Generate HTML
  </span>
</button>
  <textarea 
  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  name="" id="" cols="10" rows="5" :value="TreeHtml"></textarea>
</template>
<script>
import { BraveBlockTree, BraveBlockElement } from "bravevue";
export default {
  components: { BraveBlockTree, BraveBlockElement },
  methods: {
    getHTML() {
      this.TreeHtml= this.$refs.rootElmt.getHTML();
    },
  },
  data() {
    return {
      TreeHtml:"",
      seedData: [
        {
          component: "BraveBlockElement",
          data: {
            selfData: {
              class: "border-red-600 border-2 border-dashed p-5 my-2 flex flex-divide ",
            },
            childData: [
              {
                component: "BraveBlockElement",
                data: {
                  selfData: {
                    class: "border-green-500 border-2 border-dashed p-5 my-2 ",
                  },
                  childData: {},
                },
              },
              {
                component: "BraveBlockElement",
                data: {
                  selfData: {
                    class: "border-yellow-500 border-2 border-dashed p-5 my-2 ",
                  },
                  childData: {},
                },
              },
            ],
          },
        },
      ],
    };
  },
};
</script>
