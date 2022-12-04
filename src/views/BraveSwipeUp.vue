<template>
    <main class="flex-1 p-4 lg:p-10 xl:p-16">
        <div
            class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block">
            <h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">
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
                      <!-- tailwindCSS styled pills example -->
                     
                </ul>
            </div>
        </div>
        <div class="prose dark:prose-invert prose-slate  ">
            <h1 id="introduction"><i class="bi bi-chevron-double-up"></i> Touch Swipe Up</h1>
              <p>You can easily record the Swipe Up Action Made on the Page. </p>
              <code class="text-blue-500">v-swipe-up="swipeup"</code>
          <h3 id="live-example">Live Example</h3>
            <BrTaTabs class="not-prose" v-bind:tabs="['example','code','stackblitz']" initialTab="example">
              
              <template #tab-head-stackblitz>⚡StackBlitz</template>
              <template #tab-panel-stackblitz>
                <iframe src="https://stackblitz.com/edit/vitejs-vite-lvkykx?embed=1&file=src/App.vue&hideNavigation=1&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" allowfullscreen="allowfullscreen" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
              </template>
              
              <template #tab-head-example>Basic Example</template>
                <template #tab-panel-example>
                    <SwipeUpExample />
                </template>
                <template #tab-head-code>Source Code</template>
                <template #tab-panel-code>
                    <BrTaSyntaxHighlighter language="javascript">
                        <template #title>BraveTabsExample.vue</template>
                        <template #code>{{`<template>
  <p class="mb-10">Please swipeUp or drag Up with Mouse to see effect.</p>
  <div
    :style="swipeStyle"
    class="z-40 border p-10 transition-all dark:bg-slate-600"
    v-swipe-up="swipeup"
  >
  \{\{ swipeStatus \}\}
  </div>
</template>
<script>
import { SwipeUp } from "bravevue";
export default {
  data() {
    return {
      swipeStatus: "Swipe Up Here to see the result",
      swipeStyle: {},
    };
  },
  directive: {
    "swipe-up": SwipeUp,
  },
  methods: {
    swipeup() {
      this.swipeStatus = "Swiped Up";
      this.swipeStyle = {
        shadow: "shadow-2xl",
        marginTop: "-10px",
      };
      setTimeout(() => {
        this.swipeStatus = "Swipe Up Here to see the result";
        this.swipeStyle = {};
      }, 1200);
    },
  },
};
</script>
`}}
                        </template>
                    </BrTaSyntaxHighlighter>
                </template>
            </BrTaTabs>

        </div>
    </main>
  </template>
  <script>
  
    import BraveTabs from "@/components/uiexamples/BraveTabs.vue";
    import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
    import { BraveGistEmbed } from "bravevue";
    import BrTaTabs from "@/components/brave_tailwind/BrTaTabs.vue";
    import BraveRadialMenu from "@/components/uiexamples/BrRadialMenu.vue";
    import PillsTab from "@/components/uiexamples/BraveTabs/PillsTab.vue";
    import SwipeUpExample from "@/components/uiexamples/SwipeUpDirective/SwipeUpExample.vue";

    export default {
        components: {
        BraveRadialMenu,
        BraveGistEmbed,
        BraveTabs,
        BrTaSyntaxHighlighter,
        BrTaTabs,
        PillsTab,
        SwipeUpExample
    },
  };
  </script>
  