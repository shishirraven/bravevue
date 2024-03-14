<template>
  <main class="flex-1 p-4 lg:p-10 lg:pt-16">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1 id="introduction">
        <i class="bi bi-file-richtext"></i> Brave Rich Tool Bar
      </h1>

     
      <h2>Live Example</h2>
      <h2>Example code with BraveContentEditor</h2>

      <h3 id="live-example">Live Example</h3>
          <BrTaTabs class="not-prose" v-bind:tabs="['example','code']" initialTab="example">
              <template #tab-head-example>Basic Example</template>
              <template #tab-panel-example>
                <div class="flex gap-7">
          <div class="flex-grow">
            <div>Editable content (Hilight text to see toolbar)</div>

            <ToolbarLink contenteditable="false" ref="linkToolBar" />
            <ToolBarRich
              contenteditable="false"
              @show-link-toolbar="$refs.linkToolBar.showToolBar()"
            />
            <ToolbarPreviewLink
              contenteditable="false"
              @show-link-toolbar="$refs.linkToolBar.showToolBar()"
            /><BraveContentEditable
              tag="div"
              class="border-gray-10 max-h-36 overflow-auto border dark:bg-slate-900 bg-slate-100 rounded px-5"
              ref="editable"
              contenteditable="true"
              v-model="htmlContent"
              :noNL="false"
              :noHTML="false"
            />
          </div>

          <div class="flex-grow">
            <div>Preview (Rendered HTML)</div>
            <div class="dark:bg-slate-900 dark:text-slate-100 p-5 rounded bg-slate-100 " v-html="htmlContent"></div>
          </div>
        </div>
              </template>
              <template #tab-head-code>Source Code</template>
              <template #tab-panel-code>
                  <BrTaSyntaxHighlighter language="javascript">
                      <template #title>BraveTabsExample.vue</template>
                      <template #code>{{`<template><div class="flex gap-7">
          <div class="flex-grow">
            <div>Editable content (Hilight text to see toolbar)</div>

            <ToolbarLink contenteditable="false" ref="linkToolBar" />
            <ToolBarRich
              contenteditable="false"
              @show-link-toolbar="$refs.linkToolBar.showToolBar()"
            />
            <ToolbarPreviewLink
              contenteditable="false"
              @show-link-toolbar="$refs.linkToolBar.showToolBar()"
            /><BraveContentEditable
              tag="div"
              class="border-gray-10 max-h-36 overflow-auto border dark:bg-slate-900 bg-slate-100 rounded px-5"
              ref="editable"
              contenteditable="true"
              v-model="htmlContent"
              :noNL="false"
              :noHTML="false"
            />
          </div>

          <div class="flex-grow">
            <div>Preview (Rendered HTML)</div>
            <div class="dark:bg-slate-900 dark:text-slate-100 p-5 rounded bg-slate-100 " v-html="htmlContent"></div>
          </div>
        </div>
        
        
        
        </template><script>
import {
  ToolBarRich,
  ToolbarPreviewLink,
  ToolbarLink,

} from "bravevue";


export default {
  data() {
    return {
      htmlContent: "<p>Hey, I am a brave content editable</p>",
    };
  },
  components: {
    ToolbarLink,
    ToolbarPreviewLink,
    ToolBarRich,
  },
};
</script>`}}
                      </template>
                  </BrTaSyntaxHighlighter>
              </template>
              
          </BrTaTabs>

    
    </div>
  </main>
</template>
<script>
import { VueLive } from "vue-live";
// import the css separately for easier SSR
import "vue-live/style.css";
import "prismjs/themes/prism-tomorrow.css";
import { markRaw } from "vue";
import CustomLayout from "@/components/VueLiveLayout.vue";
import BraveNoificationExample from "@/components/uiexamples/BraveRichTextBarExample.vue?raw";
import BraveField from "@/components/uiexamples/BraveField.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import {
  ToolBarRich,
  ToolbarPreviewLink,
  ToolbarLink,
  BraveContentEditable,
} from "bravevue";
import BrTaTabs from "@/components/brave_tailwind/BrTaTabs.vue";
import { useHead } from "@vueuse/head";
import BraveGist from "./BraveGist.vue";

export default {
  data() {
    return {
      CustomLayout: markRaw(CustomLayout),
      BraveNoificationExample,
      htmlContent: "<p>Hey, I am a brave content editable</p>",
    };
  },
  mounted() {
    useHead({
      title: "Form Field Component for Vue 3 | Brave Components Library.",
      meta: [
        {
          name: "description",
          content:
            "BraveField allows you to quickly build a HTML form currently it contains fields for text, textarea, select, radio and checkbox.",
        },
        {
          name: "keywords",
          content:
            "Fields Builder,Form Field Compnent, Component, Vue3, BraveVue, Javascript, Radio, Select, Textarea, checkbox ",
        },
        {
          name: "author",
          content: "Shishir Raven",
        },
      ],
    });
  },
  methods: {
    handleError(err) {
      console.log(err);
    },
  },
  components: {
    VueLive,
    BraveField,
    BrTaSyntaxHighlighter,
    BrTaTabs,
    ToolbarLink,
    ToolbarPreviewLink,
    ToolBarRich,
  },
};
</script>
