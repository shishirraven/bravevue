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
                    <li class="mb-2">
                        <a href="#tailwindcss-styled-pills-example" class="text-slate-900 dark:text-slate-100">
                            Pills Styled example with Tailwind CSS
                        </a>
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
      <div class="prose dark:prose-invert prose-slate  ">
          <h1 id="introduction"><i class="bi bi-segmented-nav"></i> Brave Tabs</h1>
            <p>Tabs make it easy to explore and switch between different views.</p>
            <p>Brave Tabs is a Vue 3 component that allows you to create tabs with a simple and easy to use API.</p>
        <h3 id="live-example">Live Example</h3>
          <BrTaTabs class="not-prose" v-bind:tabs="['example','code']" initialTab="example">
              <template #tab-head-example>Basic Example</template>
              <template #tab-panel-example>
                  <BraveTabs />
              </template>
              <template #tab-head-code>Source Code</template>
              <template #tab-panel-code>
                  <BrTaSyntaxHighlighter language="javascript">
                      <template #title>BraveTabsExample.vue</template>
                      <template #code>{{`<template>
  <BraveTabs ref="bravetabref" class="text-black dark:text-white my-10" tabs-wrapper-class="flex items-center"
    tabs-content-class="border  p-10 dark:bg-slate-800"
    tab-button-class="px-4 py-2 mr-px cursor-pointer rounded-t-lg mr-0 dark:bg-slate-900 bg-gray-50 hover:dark:bg-slate-800 hover:bg-gray-200"
    tab-button-active-class="px-4 py-2 mr-px shadow-inner-sm -mb-px border rounded-t-lg border-b-0 dark:bg-slate-800 bg-white "
    v-bind:tabs="['mobile','appliances','computers','gaming']" initialTab="mobile">
    <template #before-tab>
      <div class="px-2"><img class="h-7 w-auto" src="@/assets/images/logo.svg" alt="BraveVue" /></div>
    </template>
    <template #after-tab>
      <div class="px-2 grow text-right">
        <div class="inline-block">Help</div>
      </div>
    </template>
    <!-- ================================================================ -->
    <!-- SETTINGS PANEL  -->
    <!-- ================================================================ -->
    <template #tab-head-mobile>Mobile</template>
    <template #tab-panel-mobile>
      <h1 class="text-3xl mb-5">Content for mobile Panel</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae
        maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
    </template>

    <!-- Appliance Panel -->

    <template #tab-head-appliances>Appliances</template>
    <template #tab-panel-appliances>
      <h1 class="text-3xl mb-5">Content for Appliances Panel</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae
        maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
    </template>

    <!-- Computer Panel -->

    <template #tab-head-computers>💻 Computers</template>
    <template #tab-panel-computers>
      <h1 class="text-3xl mb-5">Content for Computers Panel</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae
        maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
    </template>

    <!-- Gaming Panel -->

    <template #tab-head-gaming> Gaming</template>
    <template #tab-panel-gaming>
      <h1 class="text-3xl mb-5">Content for Gaming Panel</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae
        maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
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


          <h3 id="tailwindcss-styled-pills-example">Pills Tab Style with Tailwind CSS</h3>
          <BrTaTabs class="not-prose" v-bind:tabs="['example','code','stackblitz']" initialTab="example">
           
            <template #after-tab>
                <div class="text-right grow ">
                  
                </div>
              </template>


              <template #tab-head-stackblitz>⚡StackBlitz</template>
              <template #tab-panel-stackblitz>
                <!-- tailwind iframe full width and height -->
                <iframe src="https://stackblitz.com/edit/vitejs-vite-truwea?embed=1&file=src/components/HorizontalPillTabs.vue&hideNavigation=1&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" allowfullscreen="allowfullscreen" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
              </template>


              <template #tab-head-example>Pills Styled Example</template>
              <template #tab-panel-example>
                  <PillsTab />
              </template>
              <template #tab-head-code>Source Code</template>
              <template #tab-panel-code>
                  <BrTaSyntaxHighlighter language="javascript">
                      <template #title>PositionDialog.vue</template>
                      <template #code>{{`<template>
    <BraveTabs ref="bravetabref" class="overflow-hidden dark:bg-slate-900 p-5"
        tabsWrapperClass="flex mx-auto max-w-min bg-slate-200 dark:bg-slate-800 p-1 rounded-xl"
        tab-button-class="rounded-xl px-10 sm:px-10 py-2 dark:text-slate-400 whitespace-nowrap cursor-pointer text-center duration-200"
        tab-button-active-class="px-10 sm:px-10 rounded-xl bg-slate-900 dark:bg-slate-900 text-white whitespace-nowrap py-2 cursor-pointer text-center duration-200 shadow-md"
        tabs-content-class="mt-5 rounded-lg border dark:border-slate-800 py-7 px-7 dark:text-white"
        v-bind:tabs="['a', 'b', 'c']" initialTab="a">


        <!-- ================================================================ -->
        <!-- TAB-A: HEAD & CONTENT PANEL  -->
        <!-- ================================================================ -->

        <!-- TAB-A: HEAD PANEL  -->
        <template #tab-head-a>
            <span class="uppercase">Mobile</span>
        </template>

        <!-- TAB-A: CONTENT PANEL  -->
        <template #tab-panel-a>
            <div class="text-2xl font-bold mb-5 text-center uppercase">
                Mobile Tab Panel
            </div>
            <div class="columns-1 sm:columns-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa
                itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis
                dolorum autem sapiente similique non, architecto porro maxime blanditiis
                obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione
                ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id
                adipisci pariatur! Sapiente, dolore?
            </div>
        </template>

        <!-- ================================================================ -->
        <!-- TAB-B: HEAD & CONTENT PANEL  -->
        <!-- ================================================================ -->

        <!-- TAB-B: HEAD PANEL  -->
        <template #tab-head-b>
            <span class="uppercase">Tv</span>
        </template>

        <!-- TAB-B: CONTENT PANEL  -->
        <template #tab-panel-b>
            <div class="text-2xl font-bold mb-5 text-center uppercase">
                Tv Tab Panel
            </div>
            <div class="columns-1 sm:columns-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa
                itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis
                dolorum autem sapiente similique non, architecto porro maxime blanditiis
                obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione
                ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id
                adipisci pariatur! Sapiente, dolore?
            </div>
        </template>

        <!-- ================================================================ -->
        <!-- TAB-C: HEAD & CONTENT PANEL  -->
        <!-- ================================================================ -->

        <!-- TAB-C: HEAD PANEL  -->
        <template #tab-head-c>
            <span class="uppercase">Appliances</span>
        </template>

        <!-- TAB-C: CONTENT PANEL  -->
        <template #tab-panel-c>
            <div class="text-2xl font-bold mb-5 text-center uppercase">
                Appliances Tab Panel
            </div>
            <div class="columns-1 sm:columns-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa
                itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis
                dolorum autem sapiente similique non, architecto porro maxime blanditiis
                obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione
                ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id
                adipisci pariatur! Sapiente, dolore?
            </div>
        </template>
    </BraveTabs>
</template>
  
<script>
import { BraveTabs } from 'bravevue';
export default {
    components: {
        BraveTabs,
    },
};
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
import BraveTabs from "@/components/uiexamples/BraveTabs.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import { BraveGistEmbed } from "bravevue";
import BrTaTabs from "@/components/brave_tailwind/BrTaTabs.vue";
import BraveRadialMenu from "@/components/uiexamples/BrRadialMenu.vue";
import PillsTab from "@/components/uiexamples/BraveTabs/PillsTab.vue";
import { useHead } from "@vueuse/head"

export default {
    mounted(){
        useHead({
            title: "Tags Input Component for Vue 3 | BraveVue Component Library ",
            meta: [
                {
                    name: "description",
                    content: "Tabs by BraveVue Component Library make it easy to explore and switch between different views",
                },
                {
                    name: "keywords",
                    content: "tab, tabs, tabbed, styless, headless, bravevue, vue 3, javascript",
                },
                {
                    name: "author",
                    content: "Shishir Raven",
                },
            ],
        });
    },
  components: {
    BraveRadialMenu,
    BraveGistEmbed,
    BraveTabs,
    BrTaSyntaxHighlighter,
    BrTaTabs,
    PillsTab
},
};
</script>
