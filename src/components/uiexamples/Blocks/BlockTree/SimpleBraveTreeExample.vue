<template>
  <div class="mb-3 text-xl">Demo for Nested Elements</div>

  <div class="text-lg">Preview</div>
  <BraveBlockTree ref="rootElmt" v-model="seedData"></BraveBlockTree>
  <div class="text-lg">Component Tree JSON</div>
  <code>
    <pre class="wrap w-full overflow-auto rounded bg-slate-900 p-2">{{
      seedData
    }}</pre>
  </code>

  <div class="my-5 text-lg">HTML Output Generated from Tree</div>
  <button
    @click="getHTML()"
    class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400"
  >
    <span
      class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
    >
      Generate HTML
    </span>
  </button>
  <textarea
    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    name=""
    id=""
    cols="10"
    rows="5"
    :value="TreeHtml"
  ></textarea>
</template>
<script>
import { BraveBlockTree, BraveBlockElement } from "bravevue";
export default {
  components: { BraveBlockTree, BraveBlockElement },
  methods: {
    getHTML() {
      this.TreeHtml = this.$refs.rootElmt.getHTML();
    },
  },
  data() {
    return {
      TreeHtml: "",
      seedData: [
        {
          component: "BraveBlockElement",
          data: {
            selfData: {
              class:
                "border-red-600 border-2 border-dashed p-5 my-2 flex flex-divide ",
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
