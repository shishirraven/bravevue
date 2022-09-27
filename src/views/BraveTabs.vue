<template>
  <main class="flex-1 lg:p-16">
      <div
          class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block">
          <h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">
              On this page
          </h5>
          <div id="navigation">
              <ul class="navtext-slate-700 text-sm leading-6">
                  <li class>
                      <a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                          href="#brave-select-diff">How is Brave Select Different</a>
                      <ul class="nav">
                          <li class="ml-4">
                              <a class="group flex items-center py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                  href="#object-for-options">
                                  <svg width="3" height="24" viewbox="0 -9 3 24"
                                      class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                      <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5"
                                          stroke-linecap="round"></path>
                                  </svg>Brave Select uses an Array of Objects for Options</a>
                          </li>
                          <li class="ml-4">
                              <a class="group flex items-center py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                  href="#super-flexible">
                                  <svg width="3" height="24" viewbox="0 -9 3 24"
                                      class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                      <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5"
                                          stroke-linecap="round"></path>
                                  </svg>Super flexible templates</a>
                          </li>
                          <li class="ml-4">
                              <a class="group flex items-center py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                  href="#live-example">
                                  <svg width="3" height="24" viewbox="0 -9 3 24"
                                      class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                      <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5"
                                          stroke-linecap="round"></path>
                                  </svg>Live Example</a>
                          </li>
                      </ul>
                  </li>
                  <li class>
                      <a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                          href="#props">Props</a>
                  </li>
                  <li class>
                      <a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                          href="#slots">Slots</a>
                  </li>
              </ul>
          </div>
      </div>
      <div class="prose dark:prose-invert prose-slate ">
          <h1 id="brave-tabs">Brave Tabs</h1>
          <p>Show Options from your Data and save the result through v-model. The following is an brave tabs in
              action.</p>

          <h2 id="brave-select-diff">How is Brave Select Different</h2>
          <h3 id="object-for-options">Brave Select uses an Array of Objects for Options</h3>
          <p>Brave Select is designed to loop an array of objects. which means you can use the objects properties on on the Selected Value and also the options.</p>
          <p>A common use case would be if you are using an icon along with the text. This would be helpful to show the icon along with the text.</p>

          <h3 id="super-flexible">Super flexible templates</h3>
          <p>You can customize the templates in whatever way you want and can use properties of the object how ever you like.</p>


        <h3 id="live-example">Live Example</h3>
          <BrTaTabs class="not-prose" v-bind:tabs="['example','code']" initialTab="example">
              <template #tab-head-example>Basic Example</template>
              <template #tab-panel-example>
                  <BraveTabs />
              </template>
              <template #tab-head-code>Source Code</template>
              <template #tab-panel-code>
                  <BrTaSyntaxHighlighter language="javascript">
                      <template #title>PositionDialog.vue</template>
                      <template #code>{{`
                      <template>
  <div class="py-3">
  v-model : \{\{count\}\}
<div class="flex items-center2">
  <BraveNumberInput v-model="count" class="flex items-center" inputClass="ring-offset-2 focus:ring-4 text-indigo-600 bg-indigo-100 z-10 relative h-14 w-14 rounded-full text-center">
  <template #minus-button="{decreaseNumber}">
    <button tabindex="-1" class=" 
     bg-indigo-400 hover:bg-indigo-500 rounded-l-full p-3 -mr-6 w-20  h-full" @click="decreaseNumber()">
       <!--minus icon  -->
       <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" 
       fill="currentColor" class="bi bi-dash-circle fill-white block mr-1" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg>
        
     </button>
  </template>
  <template #plus-button="{increaseNumber}">
    <button tabindex="-1" 
    class="bg-indigo-400 hover:bg-indigo-600    rounded-r-full h-full p-3 -ml-6 w-20 z-1" @click="increaseNumber()">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" 
    class="fill-white bi bi-plus-circle block float-right mr-1 " viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
    </button>
  </template>
</BraveNumberInput>
</div>
</div>
</template>
<script>

import {BraveNumberInput} from "bravevue";
export default{
  data: function() {
    return {
      count: 100
    }
  },
  components: {
    BraveNumberInput
  },
}
</script>`}}
                      </template>
                  </BrTaSyntaxHighlighter>
              </template>
          </BrTaTabs>

          <h2 id="props">
              Props
              <a href="#props" name="props" class="anchor">
                  <span class="anchor-target" id="props"></span>
                  <span class="glyphicon glyphicon-link"></span>
              </a>
          </h2>
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
                  <td class="py-4 px-6">tabs</td>
                  <td class="py-4 px-6">Array</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                      <p>Array of the name-slug of tabs to be displayed </p>
                      <p>
                        Example : <code class="text-blue-500" >['tab1','tab2']</code>
                      </p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">initialTab</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                      <p>Name of the tab that should be currently displayed.</p>
                      <p>
                        Example : <code class="text-blue-500" >initialTab="upload"</code>
                      </p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">tabButtonClass</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                    <p>CSS Classes that you need on the tab buttons</p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">tabButtonActiveClass</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                    <p>CSS Classs that you need on the tab button is active</p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">tabsContentClass</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                    <p>CSS Classes for the wrapper on the area where tab contents are displayed.</p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">tabsWrapperClass</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                    <p>Set the classes you need on the wrapper div in which all tab buttons are displayed.</p>
                  </td>
              </tr>
          </table>
          <h2 class="mt-30" id="slots">
              Slots
              <a href="#slots" name="slots" class="anchor">
                  <span class="anchor-target" id="slots"></span>
                  <span class="glyphicon glyphicon-link"></span>
              </a>
          </h2>
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
  </main>
</template>
<script>
import BraveTabs from "@/components/uiexamples/BraveTabs.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import { BraveGistEmbed } from "bravevue";
import BrTaTabs from "@/components/brave_tailwind/BrTaTabs.vue";
export default {
  components: {
      BraveGistEmbed,
      BraveTabs,
      BrTaSyntaxHighlighter,
      BrTaTabs,
  },
};
</script>
