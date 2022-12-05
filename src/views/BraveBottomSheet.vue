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
          <h1 id="introduction"><i class="bi bi-layer-forward mr-3"></i> Brave Bottom Sheets</h1>
            <p>
                Bottom sheets are surfaces containing supplementary content that are anchored to the bottom of the screen.
            </p>
            <p>
                Bottom Sheets has a backdrop, and automaticaly closes when you click outside of it. You can style the bottom sheet with your own CSS classes.
            </p>
        <h3 id="live-example">Live Example</h3>
          <BrTaTabs class="not-prose" v-bind:tabs="['example','code']" initialTab="example">
              <template #tab-head-example>Basic Example</template>
              <template #tab-panel-example>
                <p>Please check the bottom of this Screen to see the Bottom Sheets.</p>
                  <BraveBottomSheet />
              </template>
              <template #tab-head-code>Source Code</template>
              <template #tab-panel-code>
                  <BrTaSyntaxHighlighter language="javascript">
                      <template #title>BraveTabsExample.vue</template>
                      <template #code>{{`<template>
    <!-- Buttons to change the Sheets State to closed,half,full -->
    <div class="flex lg:flex-row flex-col gap-2 mt-3">
<!-- <button @click="state = 'closed'" type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:flex-1 ">Close Bottom Sheet</button> -->
<button @click="state = 'half'" type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:flex-1 ">Half Open Bottom Sheet</button>
<button @click="state = 'full'" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:flex-1 ">Open Bottom Sheet to Full Height</button>
        
    </div>
    <BraveBottomSheet
      class="bg-slate-200 border border-slate-600 dark:bg-slate-900 rounded-t-3xl pt-2"
      :state="state"
      sheet-close="10%"
      sheet-half-open="50%"
      sheet-full-open="90%"
    >
      <div class="mb-3 flex justify-center">
        <div class="h-1 w-16 rounded-full bg-slate-500"></div>
      </div>
      <div class="p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto eaque possimus, sit fugiat distinctio mollitia reiciendis incidunt corporis accusantium, consequuntur quos non ipsa dolorum sapiente debitis obcaecati asperiores cum.
      </div>
    </BraveBottomSheet>
  </template>
  <script>
  import { BraveBottomSheet } from 'bravevue';
  export default {
    components: {
      BraveBottomSheet,
    },
    data() {
      return {
        state: "closed",
      };
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
          <table class=" ">
              <thead class="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400">
                  <tr>
                      <th scope="col" class="py-3 px-6">Prop</th>
                      <th scope="col" class="py-3 px-6">Type</th>
                      <th scope="col" class="py-3 px-6">Default</th>
                      <th scope="col" class="py-3 px-6">Description</th>
                  </tr>
              </thead>
              <tr>
                  <td class="py-4 px-6">state</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6">closed</td>
                  <td class="py-4 px-6">
                      <p>Thre are three possible states 'closed', 'half' and full. </p>
                      <p>You can this to set the intial state or programatically update the state. </p>

                      <p>
                        Example : <code class="text-blue-500" >state="half"</code>
                      </p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">closeHeight</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6">10%</td>
                  <td class="py-4 px-6">
                      <p>Height you desire when the Bottom Sheet is in Closed States</p>
                      <p>
                        Example : You could use any CSS height value like <br/>   
                        <code class="text-blue-500" > 
                            10%
                        </code>
                        , 
                        <code class="text-blue-500" > 
                            100px
                        </code>
                        ,
                        <code class="text-blue-500" > 
                            10rem
                        </code>

                        , 
                        <code class="text-blue-500" > 
                            10vh
                        </code>
                             , etc.
                      </p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">halfHeight</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6">50%</td>
                  <td class="py-4 px-6">
                      <p>Height you desire when the Bottom Sheet is in Half States</p>
                      <p>
                        Example : You could use any CSS height value like <br/>   
                        <code class="text-blue-500" > 
                            10%
                        </code>
                        , 
                        <code class="text-blue-500" > 
                            100px
                        </code>
                        ,
                        <code class="text-blue-500" > 
                            10rem
                        </code>

                        , 
                        <code class="text-blue-500" > 
                            10vh
                        </code>
                             , etc.
                      </p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">fullHeight</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6">90%</td>
                  <td class="py-4 px-6">
                      <p>Height you desire when the Bottom Sheet is in <b>Full States</b></p>
                      <p>
                        Example : You could use any CSS height value like <br/>   
                        <code class="text-blue-500" > 
                            10%
                        </code>
                        , 
                        <code class="text-blue-500" > 
                            100px
                        </code>
                        ,
                        <code class="text-blue-500" > 
                            10rem
                        </code>

                        , 
                        <code class="text-blue-500" > 
                            10vh
                        </code>
                             , etc.
                      </p>
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
          <table class="mb-28">
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
                  <td class="py-4 px-6">default</td>
                  <td class="py-4 px-6">
                    No
                  </td>
                  <td class="py-4 px-6">
                    <p>Content of the Bottom Sheet. </p>
                  </td>
              </tr>
                        </table>
                        </div>
      </div>
  </main>
</template>
<script>
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import { BraveGistEmbed } from "bravevue";
import BrTaTabs from "@/components/brave_tailwind/BrTaTabs.vue";
import BraveRadialMenu from "@/components/uiexamples/BrRadialMenu.vue";
import PillsTab from "@/components/uiexamples/BraveTabs/PillsTab.vue";
import BraveBottomSheet from "@/components/uiexamples/BraveBottomSheet.vue";
export default {
  components: {
    BraveRadialMenu,
    BraveGistEmbed,
    BrTaSyntaxHighlighter,
    BrTaTabs,
    PillsTab,
    BraveBottomSheet
},
};
</script>
