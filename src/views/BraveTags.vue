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
                  <li class>
                      <a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                          href="#props">Props</a>
                  </li>
              </ul>
          </div>
      </div>
      <div class="prose dark:prose-invert prose-slate  ">
          <h1 id="introduction"><i class="bi bi-tags"></i> Brave Tags</h1>
            <p>BraveTag is a Vue3 Component that allows user to create text Tags.</p>
        <h3 id="live-example">Live Example</h3>
          <BrTaTabs class="not-prose" v-bind:tabs="['example','code','stackblitz']" initialTab="example">
              <template #tab-head-example>Basic Example</template>
              <template #tab-panel-example>
                  <BraveTags/>
              </template>
              <template #tab-head-code>Source Code</template>
              <template #tab-panel-code>
                  <BrTaSyntaxHighlighter language="javascript">
                      <template #title>BraveTabsExample.vue</template>
                      <template #code>{{`<template>
    <BraveTags placeholder="Shishir" v-model="tags" class="flex flex-wrap gap-2"
        class-delete-icon="h-5 rounded hover:bg-red-600 w-5 cursor-pointer" :UseTwoBackspaceDelete="true"
        before-delete-tag-class="pl-4 pr-2  py-1 rounded bg-red-100 dark:bg-red-900 flex items-center gap-2"
        tag-class="pl-4 pr-2  py-1 rounded bg-slate-100 dark:bg-slate-900 flex items-center gap-2"
        input-class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</template>
<script>
import { BraveTags } from "bravevue"
export default {
    components: {
        BraveTags
    },

    data() {
        return {
            tags: ["bravevue", "braveTags", "Vue3", "Vite"]
        }
    },

}
</script>     `}}
                      </template>
                  </BrTaSyntaxHighlighter>
              </template>


              <template #tab-head-stackblitz>⚡StackBlitz</template>
              <template #tab-panel-stackblitz>
                <!-- tailwind iframe full width and height -->
                <iframe src="https://stackblitz.com/edit/vitejs-vite-7k5zpc?embed=1&file=index.html&hideExplorer=1&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" allowfullscreen="allowfullscreen" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
              </template>

          </BrTaTabs>

          <h2 id="props">
              Props
              <a href="#props" name="props" class="anchor">
                  <span class="anchor-target" id="props"></span>
                  <span class="glyphicon glyphicon-link"></span>
              </a>
          </h2>
          <div class="overflow-auto w-full">
          <table>
              <thead class="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400">
                  <tr>
                      <th scope="col" class="py-3 px-6">Prop</th>
                      <th scope="col" class="py-3 px-6">Type</th>
                      <th scope="col" class="py-3 px-6">Default</th>
                      <th scope="col" class="py-3 px-6">Description</th>
                  </tr>
              </thead>
              <tr>
                  <td class="py-4 px-6">v-model</td>
                  <td class="py-4 px-6">String Array</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                      <p>Array of of tag Names</p>
                      <p>
                        Example v-model variable should contain a String array similar to this.  : <code class="text-blue-500" >['VueJS','Vite']</code>
                      </p>
                  </td>
              </tr>
              
              <tr>
                  <td class="py-4 px-6">UseTwoBackspaceDelete</td>
                  <td class="py-4 px-6">Boolean</td>
                  <td class="py-4 px-6">true</td>
                  <td class="py-4 px-6">
                      <p>If you want to delete previous tag on two Backspaces rather than one. </p>
                      <p>
                        Example: <code class="text-blue-500" >:UseTwoBackspaceDelete="true"</code>
                      </p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">class</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                      <p>Class to style the outer most UL element of Tags component</p>
                      <p>
                        Example : <code class="text-blue-500" >flex flex-wrap gap-2</code>
                      </p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">class-delete-icon</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                    <p>Classes you want on Cross Icon on each tag</p>
                    
                    Example : <code class="text-blue-500" >h-5 rounded hover:bg-red-600 w-5 cursor-pointer</code>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">before-delete-tag-class</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                    <p>The Classes mentioned here are applied to the tag which is about to be deleted when 1 backspace is pressed. </p>
                    
                    Example : <code class="text-blue-500" >before-delete-tag-class="pl-4 pr-2  py-1 rounded bg-red-100 dark:bg-red-900 flex items-center gap-2"</code>
                </td>
            </tr>
              <tr>
                  <td class="py-4 px-6">tag-class</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                      <p>CSS Class to be applied on the tag</p>
                    
                    Example : <code class="text-blue-500" >tag-class="pl-4 pr-2  py-1 rounded bg-slate-100 dark:bg-slate-900 flex items-center gap-2"</code>
                </td>
            </tr>
            <tr>
                <td class="py-4 px-6">tabsContentClass</td>
                <td class="py-4 px-6">String</td>
                <td class="py-4 px-6"></td>
                <td class="py-4 px-6">
                    <p>CSS Classes for the wrapper on the area where tab contents are displayed.</p>
                    Example : <code class="text-blue-500" >input-class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></code>
                  </td>
              </tr>
          </table>
        </div>
          <h2 class="mt-30" id="slots">
              Slots
              <a href="#slots" name="slots" class="anchor">
                  <span class="anchor-target" id="slots"></span>
                  <span class="glyphicon glyphicon-link"></span>
              </a>
          </h2>
          <div class="overflow-auto w-full">
          <table>
              <tr>
                  <td class="py-4 px-6">
                      <strong>Name </strong>
                  </td>
                  <td class="py-4 px-6">
                      <strong>Scoped </strong>
                  </td>
                  <td class="py-4 px-6">
                      <strong>Description </strong>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">after-tab</td>
                  <td class="py-4 px-6">
                    No
                  </td>
                  <td class="py-4 px-6">
                    <p>Slot to add content after the tab buttons</p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">before-tab</td>
                  <td class="py-4 px-6">
                    No
                </td>
                  <td class="py-4 px-6">
                    
                    <p>Slot to add content before the tab buttons </p>
                  </td>
              </tr>
          </table>
          </div>
      </div>
  </main>
</template>
<script>
import BraveTags from "@/components/uiexamples/BraveTags.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import BrTaTabs from "@/components/brave_tailwind/BrTaTabs.vue";
import { useHead } from "@vueuse/head"
useHead({
            title: "Tags Input Component for Vue 3 | Brave Vue",
            meta: [
                {
                    name: "description",
                    content: "Tags Input Component for Vue 3 is a Styleless component by BraveVue Component Library.",
                },
                {
                    name: "keywords",
                    content: "tag, tags, tagging, , javascript, component, web, BraveTags, VueJS 3",
                },
                {
                    name: "author",
                    content: "Shishir Raven",
                },
            ],
        });
export default {
    
  components: {
    BraveTags,
    BrTaSyntaxHighlighter,
    BrTaTabs,
},
};
</script>
