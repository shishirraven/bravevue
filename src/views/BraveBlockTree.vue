<template>
  <main class="flex-1 p-4 lg:p-10 xl:p-16">
    <div
      class="fixed top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] z-20 hidden w-[19.5rem] overflow-y-auto py-10 px-8 xl:block"
    >
      <h5
        class="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100"
      >
        On this page
      </h5>
      <div id="navigation">
        <ul class="navtext-slate-700 text-sm leading-6">
          <li class="mb-2">
            <a href="#introduction" class="text-slate-900 dark:text-slate-100">
              Introduction
            </a>
          </li>
          <!-- live example -->
          <li class="mb-2">
            <a href="#live-example" class="text-slate-900 dark:text-slate-100">
              Live example
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="prose prose-slate dark:prose-invert">
      <!-- =============================================== -->
      <!-- PAGE BEGINS -->
      <!-- =============================================== -->

     
      <BrTaTabs
        class=""
        v-bind:tabs="['example', 'code', 'stackblitz']"
        initialTab="example"
      >
        <template #tab-head-example>Basic Example</template>
        <template #tab-panel-example>
          <BraveTreeWithTextNodes />
        </template>
        <template #tab-head-code>Source Code</template>
        <template #tab-panel-code>
          <BrTaSyntaxHighlighter language="javascript">
            <template #title>BraveTree.vue</template>
            <template #code
              >{{`<template>
  <div class="mb-3 text-xl">Demo for Nested Elements</div>
  <div class="text-lg">Preview</div>
  <div contenteditable="true" class="prose p-10 dark:prose-invert">
    <!-- RICHTEXT TOOLBAR -->
    <ToolbarLink contenteditable="false" ref="linkToolBar" />
    <ToolBarRich
      contenteditable="false"
      @show-link-toolbar="$refs.linkToolBar.showToolBar()"
    />
    <ToolbarPreviewLink
      contenteditable="false"
      @show-link-toolbar="$refs.linkToolBar.showToolBar()"
    />
    <BraveBlockTree ref="rootElmt" v-model="seedData"></BraveBlockTree>
  </div>
  <div class="text-lg">Component Tree JSON</div>
  <code>
    <pre class="wrap w-full overflow-auto rounded bg-slate-900 p-2">\{\{
      seedData
    \}\}</pre>
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
          component: "BraveBlockText",
          data: {
            selfData: {
              content: "New.",
              class: "text-lg",
              tag: "div",
            },
            childData: {},
          },
        },
        {
          component: "BraveBlockElement",
          data: {
            selfData: {
              class: "border-red-600 border-2 border-dashed p-5 my-2  ",
            },
            childData: [
              {
                component: "BraveBlockText",
                data: {
                  selfData: {
                    content: "Some Starting text.",
                    class: "text-lg",
                    tag: "div",
                  },
                  childData: {},
                },
              },
              {
                component: "BraveBlockText",
                data: {
                  selfData: {
                    content: "Some Starting text.",
                    class: "text-lg",
                    tag: "div",
                  },
                  childData: {},
                },
              },
              {
                component: "BraveBlockElement",
                data: {
                  selfData: {
                    class: "border-green-500 border-2 border-dashed p-5 m-2 ",
                  },
                  childData: [],
                },
              },

              {
                component: "BraveBlockElement",
                data: {
                  selfData: {
                    class: "border-yellow-500 border-2 border-dashed p-5 my-2 ",
                  },
                  childData: [],
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

              `}}
            </template>
          </BrTaSyntaxHighlighter>
        </template>

        <template #tab-head-stackblitz>⚡StackBlitz</template>
        <template #tab-panel-stackblitz>
          <!-- tailwind iframe full width and height -->
          <iframe
            src="https://stackblitz.com/edit/vitejs-vite-gtpsbt?embed=1&file=src/components/BraveField.vue&view=preview"
            style="
              width: 100%;
              height: 500px;
              border: 0;
              border-radius: 4px;
              overflow: hidden;
            "
            allowfullscreen="allowfullscreen"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </template>
      </BrTaTabs>


      <h1 id="introduction"><i class="bi bi-list-nested"></i> Brave Block Tree</h1>
      <p>
        The <code>BraveBlockTree</code> component is a tree view component that
        displays a tree of component nodes. It is a wrapper around the
        <code>BrTree</code> component.
      </p>

      
      <h3 id="live-example">Live Example</h3>
      <h2>Role of Brave Block Tree</h2>
      <ul>
        <li>Components are stored as a JSON Tree. </li>
        <li>Components in JSON Tree are also called Blocks</li>
        <li>Each Block is loaded dynamically from the JSON TREE</li>
        <li>Rendering Block Tree is primary responsiblity.</li>
        <li>Provides Tree Manipulation <b>Events</b> to children such as
          <ul>
            <li>delete-block</li>
            <li>insert-sibling</li>
            <li>replace-block</li>
            <li>move-content-to-row-above : functionality for text blocks to merge text content on delete</li>
            <li>move-content-to-row-above : functionality for text blocks to merge text content on delete</li>
          </ul>
        </li>
        <li><b class="text-blue-600">Get HTML</b>
          <p>
            You can extract the HTML from the Block Tree by using this method. 
          </p>
          <div class="font-bold my-2">Example from Parent</div>
          <BrTaSyntaxHighlighter language="javascript">
            <template #title>Parent Component</template>
            <template #code
              >{{
                ` this.TreeHtml= this.$refs.rootElmt.getHTML();`
              }}
              </template>
          </BrTaSyntaxHighlighter>
          </li>

      </ul>


      <h3 id="live-example">Live Example</h3>
      <BrTaTabs
        class="not-prose"
        v-bind:tabs="['example', 'code', 'stackblitz']"
        initialTab="example"
      >
        <template #tab-head-example>Basic Example</template>
        <template #tab-panel-example>
          <SimpleBraveTreeExample />
        </template>
        <template #tab-head-code>Source Code</template>
        <template #tab-panel-code>
          <BrTaSyntaxHighlighter language="javascript">
            <template #title>BraveTree.vue</template>
            <template #code
              >{{`<template>
  <div class="mb-3 text-xl">Demo for Nested Elements</div>

  <div class="text-lg">Preview</div>
  <BraveBlockTree ref="rootElmt" v-model="seedData"></BraveBlockTree>
  <div class="text-lg">Component Tree JSON</div>
  <code>
    <pre class="wrap w-full overflow-auto rounded bg-slate-900 p-2">\{\{
      seedData
    \}\}</pre>
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

              `}}
            </template>
          </BrTaSyntaxHighlighter>
        </template>

        <template #tab-head-stackblitz>⚡StackBlitz</template>
        <template #tab-panel-stackblitz>
          <!-- tailwind iframe full width and height -->
          <iframe
            src="https://stackblitz.com/edit/vitejs-vite-gtpsbt?embed=1&file=src/components/BraveField.vue&view=preview"
            style="
              width: 100%;
              height: 500px;
              border: 0;
              border-radius: 4px;
              overflow: hidden;
            "
            allowfullscreen="allowfullscreen"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </template>
      </BrTaTabs>

    </div>
  </main>
</template>
<script>
import BraveField from "@/components/uiexamples/BraveField.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import BrTaTabs from "@/components/brave_tailwind/BrTaTabs.vue";
import SimpleBraveTreeExample from "@/components/uiexamples/Blocks/BlockTree/SimpleBraveTreeExample.vue";
import BraveTreeWithTextNodes from "@/components/uiexamples/Blocks/BlockTree/BraveTreeWithTextNodes.vue";
import { useHead } from "@vueuse/head"

export default {
  mounted(){
    useHead({
            title: "Block Tree Component for Vue 3 | Brave Components Library.",
            meta: [
                {
                    name: "description",
                    content: "Block Tree Component is a Vue 3 component library for building a Block Editor.",
                },
                {
                    name: "keywords",
                    content: "Block Tree, Block Editor",
                },
                {
                    name: "author",
                    content: "Shishir Raven",
                },
            ],
        })
  },
  components: {
    BraveField,
    BrTaSyntaxHighlighter,
    BrTaTabs,
    SimpleBraveTreeExample,
    BraveTreeWithTextNodes
},
};
</script>
