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
          <h1 id="introduction"><i class="bi  bi-layout-sidebar-reverse   mr-3"></i> Brave Side Sheets</h1>
            <p>
                Brave Side Sheet opens a panel from the right side of the screen. 
            </p>
            <p>
                Bottom Sheets has a backdrop, and automaticaly closes when you click outside of it. You can style the bottom sheet with your own CSS classes.
            </p>
        <h3 id="live-example">Live Example</h3>
          <BrTaTabs class="not-prose" v-bind:tabs="['example','code']" initialTab="example">
              <template #tab-head-example>Basic Example</template>
              <template #tab-panel-example>
                <p>You will notice a panel from the right of the screen when you click the following button. </p>
                  <BraveSideSheet />
              </template>
              <template #tab-head-code>Source Code</template>
              <template #tab-panel-code>
                  <BrTaSyntaxHighlighter language="javascript">
                      <template #title>BraveTabsExample.vue</template>
                      <template #code>{{`<template>
  <!-- Buttons to change the Sheets State to closed,half,full -->
  <div class="mt-3 flex flex-col gap-2 lg:flex-row">
    <!-- <button @click="state = 'closed'" type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:flex-1 ">Close Bottom Sheet</button> -->
    <button
      @click="state = 'open'"
      type="button"
      class="rounded-lg bg-gradient-to-r from-teal-200 to-lime-200 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700 lg:flex-1"
    >
      Open Side Sheet
    </button>
  </div>

  <BraveSideSheet
    ref="workspaces"
    class="bg-slate-200 dark:bg-slate-900"
    v-model:state="stateWorkspace"
    sheet-width="375px"
    v-slot="{ close }"
  >
    <div class="h-screen w-96 bg-slate-900">
      <!-- Back Button -->
      <div
        @click="close(), (state = 'open')"
        class="flex cursor-pointer items-center gap-2 bg-slate-800 p-5 font-semibold text-slate-200"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
        <div>Settings</div>
      </div>
      <!-- /Back Button -->

      <!-- Workspace Settings -->
      <div class="p-8">Workspace</div>
    </div>
  </BraveSideSheet>

  <BraveSideSheet
    class="bg-slate-200 dark:bg-slate-900"
    v-model:state="state"
    sheet-width="375px"
    v-slot="{ close }"
  >
    <div class="h-screen w-96 bg-slate-900">
      <!-- Back Button -->
      <div
        @click="close()"
        class="flex cursor-pointer items-center gap-2 bg-slate-800 p-5 font-semibold text-slate-200"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
        <div>Settings</div>
      </div>
      <!-- /Back Button -->

      <!-- Profile Image and Icon -->
      <div class="flex flex-col items-center justify-center bg-slate-800 p-5">
        <img
          class="h-24 w-24"
          src="@/assets/images/shishir_profie.png"
          alt=""
        />
        <div class="mt-5 text-2xl font-semibold text-white">Shishir Raven</div>
        <div class="mt-1 text-sm text-slate-400">shishir.raven@gmail.com</div>
      </div>
      <!-- Profile Image and Icon -->

      <!-- Navigation Example  -->

      <div class="mt-5 bg-slate-900 py-10">
        <!-- workspaes -->
        <div
          @click="(stateWorkspace = 'open'), close()"
          class="flex cursor-pointer items-center gap-3 px-5 py-4 text-slate-100 hover:bg-gray-800"
        >
          <div class="text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-building h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"
              />
              <path
                d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"
              />
            </svg>
          </div>
          <div class="flex-grow font-semibold">Workspaces</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
        <!-- /Workspaces -->

        <!-- profile -->
        <div
          class="flex cursor-pointer items-center gap-3 px-5 py-4 text-slate-100 hover:bg-gray-800"
        >
          <div class="text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-person-circle h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>
          <div class="flex-grow font-semibold">Profile</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
        <!-- /profile -->
        <!-- profile -->
        <div
          class="flex cursor-pointer items-center gap-3 px-5 py-4 text-slate-100 hover:bg-gray-800"
        >
          <div class="text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-gear-fill h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
              />
            </svg>
          </div>
          <div class="flex-grow font-semibold">Preferences</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
        <!-- /profile -->
      </div>
    </div>
  </BraveSideSheet>
</template>
<script>
import { BraveSideSheet, SwipeUp, SwipeDown } from "bravevue";

export default {
  directives: { SwipeUp, SwipeDown },
  components: {
    BraveSideSheet,
  },
  data() {
    return {
      state: "closed",
      stateWorkspace: "closed",
    };
  },
};
</script>
`}}
                      </template>
                  </BrTaSyntaxHighlighter>
              </template>
          </BrTaTabs>

          <!-- explaining how it works -->

          <h2 id="features">Features</h2>
          <ul>
            <li>Easy to use. </li>
            <li>You can use multiple side sheet on your screen</li>
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
    <div class="absolute bottom-0 right-0 top-0 h-full w-36 rounded-l-2xl border-2 border-b-0 border-yellow-600 bg-slate-800 shadow-md">
    
    </div>

    <!-- Markers  -->
        <!-- Markers  -->
          <div class="absolute top-48 -right-40 flex items-center">
            <div class="2 h-4 w-4 rounded-full bg-green-500"></div>
            <div class="w-16 border-t-2 border-dotted border-green-500"></div>
            <div class="w-32 p-1 text-green-500">Side Sheet Component</div>
          </div>
    
  </div>
</div>

          <!-- DIAGRAM ENDS -->
      

            



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
                      <p>Thre are three possible states 'closed', 'open' </p>
                      <p>You can this to set the intial state or programatically update the state. </p>

                      <p>
                        Example : <code class="text-blue-500" >state="open"</code>
                      </p>
                  </td>
              </tr>
           
              <tr>
                  <td class="py-4 px-6">sheetWidth</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6">50%</td>
                  <td class="py-4 px-6">
                      <p>Width of your Side Sheet</p>
                      <p>
                        Example : You could use any CSS height value like <br/>   
                        <code class="text-blue-500" > 
                            360px;
                        </code>
                        , 
                        <code class="text-blue-500" > 
                            100%;
                        </code>
                        ,
                        <code class="text-blue-500" > 
                            100vw;
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
                    <p>Content of the Side Sheet. </p>
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
import PillsTab from "@/components/uiexamples/BraveTabs/PillsTab.vue";
import BraveSideSheet from "@/components/uiexamples/BraveSideSheet.vue";
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
   
    BraveGistEmbed,
    BrTaSyntaxHighlighter,
    BrTaTabs,
    PillsTab,
    BraveSideSheet
},
};
</script>
