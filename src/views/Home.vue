<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="flex-1 lg:p-16">
    <div class="py-6">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1
          class="mb-2 text-4xl font-semibold text-gray-900 dark:text-gray-100"
        >
          BraveVue
        </h1>

        <div class="mb-10 dark:text-slate-400">
          Headless UI Library for Vue js (Vue 3)
        </div>
        <p>BraveVue is a headless UI Library for Vue js applications.</p>
        <p>Components are designed to be minimilistic and non-bloated.</p>
        <p>
          BraveVue can work with any of the Popular CSS Frameworks(Tailwind,
          Bootstrap ...) and Custom CSS.
        </p>
        

        <h1 class="my-5 text-xl">Installation</h1>

        <BrTaSyntaxHighlighter language="javascript">
          <template #title>Console</template>
          <template #code>{{ `npm i bravevue` }} </template>
        </BrTaSyntaxHighlighter>

        <h2 class="my-5 text-xl dark:text-slate-300">
          The bravevue package ships with a Vue plugin and a default
          configuration for easy setup:
        </h2>

        <BrTaSyntaxHighlighter language="javascript">
          <template #title>main.js</template>
          <template #code
            >{{
              `const { createApp } = require('vue');
import App from "./App.vue";
import bravevue from 'bravevue'
createApp(App).use(bravevue).mount("#app");`
            }}
          </template>
        </BrTaSyntaxHighlighter>
      </div>
    </div>
  </main>
</template>
<script>
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
export default {
  components: { BrTaSyntaxHighlighter },
};
</script>
