<template>
  <main class="flex-1 p-4 lg:p-10 xl:p-16 mb-28">
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
                    
                    <li class="mb-2">
                        <a href="#features" class="text-slate-900 dark:text-slate-100">
                            Features
                        </a>
                    </li>

                    <li class="mb-2">
                        <a href="#design_concept" class="text-slate-900 dark:text-slate-100">
                            Design concept
                        </a>
                    </li>

                    <li class="mb-2">
                        <a href="#styling_bottomsheet" class="text-slate-900 dark:text-slate-100">
                            Styling Bottom Sheet
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#creating_bottom_sheet_handle" class="text-slate-900 dark:text-slate-100">
                            Creating BottomSheet Handle
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
      class="bg-slate-200 border border-slate-600 dark:bg-slate-900 rounded-t-3xl "
      :state="state"
      sheet-close="10%"
      sheet-half-open="50%"
      sheet-full-open="90%"
      v-slot="{up,down}"
      
    >
      <!-- DRAGGABLE HANDLE -->
      <div  
        v-SwipeUp="up"
        v-SwipeDown="down" 
        style="touch-action: none;"
        class="p-4 flex justify-center touch-none cursor-ns-resize">
        <div class="h-1 w-16 rounded-full bg-slate-500" ></div>
      </div>
      <!-- x-----x -->

      <div class="px-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto eaque possimus, sit fugiat distinctio mollitia reiciendis incidunt corporis accusantium, consequuntur quos non ipsa dolorum sapiente debitis obcaecati asperiores cum.
      </div>
    </BraveBottomSheet>
  </template>
  <script>
  import { BraveBottomSheet,SwipeUp, SwipeDown } from 'bravevue';
  export default {
    directives: { SwipeUp, SwipeDown },
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

          <!-- explaining how it works -->

          <h2 id="features">Features</h2>
          <ul>
            <li>Works with both Touch and Mouse</li>
            <li>Style as you like</li>
          </ul>

          <h2 id="design_concept">Design Concept</h2>
          <!-- DIAGRAM -->

          <div class="border-slate-800 bg-slate-900 p-10">
  <div class="overflow-y-cli relative mr-36 h-72 overflow-x-visible rounded border-2 border-yellow-300 bg-slate-900">
    <!-- Header -->
    <div class="flex border-b-2 border-yellow-500 p-2">
      <div class="mr-2 h-3 w-3 rounded-full border-2 border-yellow-500"></div>
      <div class="mr-2 h-3 w-3 rounded-full border-2 border-yellow-500"></div>
      <div class="mr-2 h-3 w-3 rounded-full border-2 border-yellow-500"></div>
    </div>
    <!-- Bottom Bar -->
    <div class="absolute bottom-0 right-0 left-0 h-44 rounded-t-2xl border-2 border-b-0 border-yellow-600 bg-slate-800 shadow-md">
      <div class="flex cursor-ns-resize touch-none justify-center p-4">
        <div class="relative h-3 w-16 rounded-full bg-slate-500">
          <div class="absolute -top-4 left-10  flex items-center">
            <div class="2 h-4 w-4 rounded-full bg-green-500 opacity-50"></div>
            <div class="flex-1 w-11 border-t-2 border-dotted border-green-500"></div>
            <div class="w-32 px-2 py-1 text-green-200 rounded-lg shadow-lg bg-green-900">Bottom Sheet Handle</div>
          </div>
      
        </div>
      </div>
    </div>

    <!-- Markers  -->
        <!-- Markers  -->
          <div class="absolute top-48 -right-40 flex items-center">
            <div class="2 h-4 w-4 rounded-full bg-green-500"></div>
            <div class="w-16 border-t-2 border-dotted border-green-500"></div>
            <div class="w-32 p-1 text-green-500">Bottom Sheet Component</div>
          </div>
    
  </div>
</div>

          <!-- DIAGRAM ENDS -->
          <p>
            Brave Bottom Sheets are designed to allow maximum Styling Possible. 
          </p>
          <p>Not only you can style the content that you put Inside the Component using Slots. But you can completely Deisgn.</p>
          <ul>
            <li>BottomSheet Container</li>
            <li>BottomSheet Handle</li>
          </ul>

          <h2 id="styling_bottomsheet">How to Style BottomSheet</h2>
          <p>
            You can Style the BottomSheet Container using any CSS Classes. In our examples we have used Tailwind CSS to demonstrate the usage. 
          </p>
          <p>
            Out of the box the Bottom Sheet does not have a default Style. Apart from the ones which are required for the Component to work.
          </p>

          <p>
            To Style theBottomSheet Container you can directly add the class to the Component just as you would do to any HTML element.
            
        </p>
        Like class="your classes..."
          <p>
           
            Here is an example of how you can add Classes. 
          </p>

            <BrTaSyntaxHighlighter language="html">
                <template #title>Styling the BottomSheet container with CSS Classes</template>
                <template #code>{{`<BraveBottomSheet
 class="bg-slate-200 
        border
        border-slate-600 
        dark:bg-slate-900 
        rounded-t-
        3xl 
        ">`}}</template>
            </BrTaSyntaxHighlighter>
            <p>In the above example we have used Tailwind CSS to do the following</p>
            <ul>
                <li>Add Background Color</li>
                <li>Make the top Corners Rounded</li>
                <li>Add Padding</li>
                <li>Add Borders</li>
            </ul>

            <p>You may choose to use a Styling of your own choice.</p>
    

            <h2  id="creating_bottom_sheet_handle">Creating BottomSheet Handle</h2>

            <h3>What is a Handle?</h3>
            <p>
                Handle is the Area where you can drag the BottomSheet to open and close it.
            </p>
            <p>
                By default there is no BottomSheet Handle. You have to create it yourself. 
           
                Don't worry it is very easy to do.
            </p>
            <p>
                You can create the Handle using any HTML Element.
           
                In our examples we have used a simple Div Element.
            </p>
            <p>
                Here is an example of how you can create a BottomSheet Handle.
            </p>

            <BrTaSyntaxHighlighter language="html">
                <template #title>Creating a Handle</template>
                <template #code>{{`   <!-- DRAGGABLE HANDLE -->
      <div  
        v-SwipeUp="up"
        v-SwipeDown="down" 
        style="touch-action: none;"
        class="p-4 flex justify-center touch-none cursor-ns-resize">
        <div class="h-1 w-16 rounded-full bg-slate-500" ></div>
      </div>
      <!-- x-----x -->`}}</template>
            </BrTaSyntaxHighlighter>

            <p>
                In the above example we have used a simple Div Element to create the Handle.
            </p>

            <p>
                In this example you need to notice that there are two custom directives are used. 
            </p>
            <ul>
                <li> v-SwipeUp="up"</li>
                 <li>v-SwipeDown="down" </li>
            </ul>
            <p>Both these directives are to record Swipe Up and Swipe Down Actions. </p>

            <p>
                The functions `up` and `down` are passed to the Slot with v-slot as shown below. 
            </p>
            <BrTaSyntaxHighlighter language="html">
                <template #title>using v-slot to get Swipe Actions</template>
                <template #code>{{`<BraveBottomSheet
v-slot="{up,down}" >`}}</template>
            </BrTaSyntaxHighlighter>

         
            <p>
                We also need to apply <code class="text-blue-500">style="touch-action: none;"</code> to the Handle Element. 
            </p>
            <p>
                This is to prevent the Browser from handling the Swipe Actions.
            </p>


            
            



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
          <table >
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


                    <h2>Planned Improvements</h2>
                    <ul>
                        <li><b>Covert the state into a v-model:state.</b>
                        <p>
                            This will allow the state to be updated programatically and also allow the user to update the
                             state by from inside of the BottomSheet.
                        </p>
                    </li>
                    </ul>
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
import { useHead } from "@vueuse/head"
useHead({
            title: "Bottom Sheet for Vue 3 | Brave Vue",
            meta: [
                {
                    name: "description",
                    content: "BraveVue Bottom Sheet for Vue 3. A Bottom Sheet Headless Component for Vue 3",
                },
            ],
        });

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
