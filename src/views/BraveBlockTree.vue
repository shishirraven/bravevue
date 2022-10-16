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
            <template #title>BraveTabsExample.vue</template>
            <template #code
              >{{`<template>
                <div class="dark:text-slate-200">
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Text Field</h2>
                    <BraveField
                      type="text"
                      v-model="textValue"
                      placeholder="Enter a Value"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Textarea</h2>
                    <BraveField
                      type="textarea"
                      v-model="textValue"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Text Array</h2>
                    <BraveField
                      type="select"
                      :options="['Orange', 'Grapes', 'Apple', 'Banana']"
                      v-model="selectValue1"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Object</h2>
                    <BraveField
                      type="select"
                      :options="{
                        mercury: 'Mercury',
                        venus: 'Venus',
                        earth: 'Earth',
                        mars: 'Mars',
                        jupiter: 'Jupiter',
                        saturn: 'Saturn',
                        uranus: 'Uranus',
                        neptune: 'Neptune',
                      }"
                      v-model="selectValue2"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select Array of Objects</h2>
                    <BraveField
                      type="select"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Radio</h2>
                    <BraveField
                      type="radio"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Checkbox</h2>
                    <BraveField
                      type="checkbox"
                      v-model="booleanVal"
                      class="border"
                    />
                  </div>
                </div>
              </template>

              <script>
                import { BraveField } from "bravevue";
                export default {
                  components: { BraveField },
                  name: "BraveFieldDemo",
                  data() {
                    return {
                      booleanVal: false,
                      textValue: "Default Value",
                      selectValue1: "Pizza",
                      selectValue2: "venus",
                      selectValue3: "gr", // Greece
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
            <template #title>BraveTabsExample.vue</template>
            <template #code
              >{{`<template>
                <div class="dark:text-slate-200">
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Text Field</h2>
                    <BraveField
                      type="text"
                      v-model="textValue"
                      placeholder="Enter a Value"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Textarea</h2>
                    <BraveField
                      type="textarea"
                      v-model="textValue"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Text Array</h2>
                    <BraveField
                      type="select"
                      :options="['Orange', 'Grapes', 'Apple', 'Banana']"
                      v-model="selectValue1"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Object</h2>
                    <BraveField
                      type="select"
                      :options="{
                        mercury: 'Mercury',
                        venus: 'Venus',
                        earth: 'Earth',
                        mars: 'Mars',
                        jupiter: 'Jupiter',
                        saturn: 'Saturn',
                        uranus: 'Uranus',
                        neptune: 'Neptune',
                      }"
                      v-model="selectValue2"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select Array of Objects</h2>
                    <BraveField
                      type="select"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Radio</h2>
                    <BraveField
                      type="radio"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Checkbox</h2>
                    <BraveField
                      type="checkbox"
                      v-model="booleanVal"
                      class="border"
                    />
                  </div>
                </div>
              </template>

              <script>
                import { BraveField } from "bravevue";
                export default {
                  components: { BraveField },
                  name: "BraveFieldDemo",
                  data() {
                    return {
                      booleanVal: false,
                      textValue: "Default Value",
                      selectValue1: "Pizza",
                      selectValue2: "venus",
                      selectValue3: "gr",
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
export default {
  components: {
    BraveField,
    BrTaSyntaxHighlighter,
    BrTaTabs,
    SimpleBraveTreeExample,
    BraveTreeWithTextNodes
},
};
</script>
