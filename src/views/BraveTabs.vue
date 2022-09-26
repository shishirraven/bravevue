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
                      <template #code>{{`<template>
      <BraveTabs ref="bravetabref" 
        class="text-black dark:text-white my-10"
        tabs-wrapper-class="flex items-center"
        tabs-content-class="border  p-10 dark:bg-slate-800"
        tab-button-class="cursor-pointer rounded-t-lg mr-0 dark:bg-slate-900 bg-gray-50 hover:dark:bg-slate-800 hover:bg-gray-200"
        tab-button-active-class="shadow-inner-sm -mb-px border rounded-t-lg border-b-0 dark:bg-slate-800 bg-white "
        v-bind:tabs="['upload','filemanager']" 
        initialTab="upload">
        <template #before-tab> <div class="px-2"><img class="h-7 w-auto" src="@/assets/images/logo.svg" alt="BraveVue" /></div> </template>
        <template #after-tab><div class="px-2 grow text-right"><div class="inline-block">Help</div></div></template>
      <!-- ================================================================ -->
      <!-- SETTINGS PANEL  -->
      <!-- ================================================================ -->
      <template #tab-head-upload>Upload</template>
      <template #tab-panel-upload>
        <h1 class="text-3xl mb-5">Content for Upload Panel</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
      </template>


      <!-- ================================================================ -->
      <!-- SETTINGS PANEL  -->
      <!-- ================================================================ -->

      <template #tab-head-filemanager>File Manager</template>
      <template #tab-panel-filemanager>
         <h1 class="text-3xl mb-5">File Manager Content</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
    
      </template>
</BraveTabs>
</template>
<script>
import { BraveTabs } from "bravevue";
export default {
  components: { BraveTabs },
};
</script>
`}}
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
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">tabButtonActiveClass</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">tabsContentClass</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">tabsWrapperClass</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
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
                  </td>
                  <td class="py-4 px-6">
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">before-tab</td>
                  <td class="py-4 px-6">
                  </td>
                  <td class="py-4 px-6">
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
