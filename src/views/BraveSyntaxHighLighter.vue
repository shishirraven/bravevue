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
            <BraveSyntaxHighlighterDemo />
          </template>

          <!-- ================================================================ -->
          <!-- SETTINGS PANEL  -->
          <!-- ================================================================ -->

          <template #tab-head-filemanager>Code</template>
          <template #tab-panel-filemanager>
            <BrTaSyntaxHighlighter language="javascript">
              <template #title>BraveSyntaxHighlighterDemo.vue</template>
              <template #code>{{`<template><BraveSyntaxHighlighter
    copyText=" 📋 Copy Code"
    language="javascript"
    prisimClassName="dark:!bg-slate-900 bg-slate-50 rounded-lg  "
    class="!bg-slate-800 !rounded-lg"
    ref="codebox"
  >
    <template #header="{ copyToClipboard, copyText }">
      <div class="flex text-sm rounded-t-lg border-b border-slate-600">
        <div class="flex-1">
          <div
            class="dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light"
          >
            Add two numbers in Javascript
          </div>
        </div>
        <div
          @click="copyToClipboard()"
          class="mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"
        >
          
        </div>
      </div>
    </template>

    <template #default
      >\{\{\`let x = 5;
let y = 6;
let z = x + y;\`\}\}
</template>
  </BraveSyntaxHighlighter>
<script>
import { BraveSyntaxHighlighter } from "bravevue";
export default {
  components: { BraveSyntaxHighlighter },
};
</script>
`}} </template>
            </BrTaSyntaxHighlighter>
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
import PositionDialogExampleVue from "@/components/uiexamples/PositionDialogExample.vue";
import PositionDialogExampleOnClick from "@/components/uiexamples/PositionDialogExampleOnClick.vue";
import PositionDialogContextMenu from "@/components/uiexamples/PositionDialogContextMenu.vue";
import BraveSyntaxHighlighterDemo from "@/components/uiexamples/BraveSyntaxHighlighterDemo.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import { BraveGistEmbed, BraveTabs } from "bravevue";
import { useHead } from "@vueuse/head"

export default {
  mounted(){
    useHead({
            title: "Syntax Highlighter Component for Vue 3 | BraveVue Component Library ",
            meta: [
                {
                    name: "description",
                    content: "Brave Syntax Hilighter is a super easy to use syntax highlighter based on Prismjs javascript",
                },
                {
                    name: "keywords",
                    content: "Syntax highlighter, Vue 3, Javascript, Prismjs, BraveVue, Copy Code Button, Copy Code",
                },
                {
                    name: "author",
                    content: "Shishir Raven",
                },
            ],
        });
  },
  components: {
    BraveGistEmbed,
    PositionDialogExampleVue,
    BraveTabs,
    BrTaSyntaxHighlighter,
    BraveSyntaxHighlighterDemo,
    PositionDialogExampleOnClick,
    PositionDialogContextMenu,
  },
};
</script>