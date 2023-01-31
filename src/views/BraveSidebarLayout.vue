<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="flex-1 lg:p-16">
    <div class="py-6">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 class="mb-10 text-4xl font-semibold">
          <i class="bi me-2 bi-window-sidebar text-xl text-4xl"></i> Sidebar
          Layout
        </h1>
        <div class="gap-4 md:grid md:grid-cols-5">
          <div class="col-span-2">
            <p class="pb-5">
              Brave Sidebar Layout is a Vue component that allows you to create
              a sidebar layout with a sidebar and a content area.
            </p>
            <p class="pb-5">
              The sidebar of this page is a Live example of Sidebar Layout.
            </p>
          </div>
          <div class="col-span-3 -mx-4 pb-3 md:pl-3">
            <div class="aspect-w-16 aspect-h-9">
              <iframe
                class=""
                src="https://www.youtube.com/embed/KPPZEVCb4Fo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <hr />

        <h2 class="my-7 text-3xl font-semibold">Features</h2>

        <ul class="my-10">
          <li>
            100% customizable, no dependency on any third-party CSS library.
          </li>
          <li>Responsive.</li>
          <li>Control Sidebar Width with Props.</li>
        </ul>
        <hr />
        <h2 class="my-7 text-3xl font-semibold">How to Use</h2>
        <ol class="relative mb-16 space-y-2" style="counter-reset: step 0">
          <li
            class="dark:before:highlight-white/5 relative grid-cols-5 gap-16 pl-10 pb-8 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-md before:text-[0.625rem] before:font-bold before:text-slate-700 before:shadow-sm before:ring-1 before:ring-slate-900/5 before:content-[counter(step)] after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:shadow-none dark:before:ring-0 dark:after:bg-slate-200/5 xl:grid"
            style="counter-increment: step 1"
          >
            <div class="col-span-2 mb-6 xl:mb-0">
              <h4
                class="mb-2 font-semibold leading-6 text-slate-900 dark:text-slate-200"
              >
                Install BraveVue
              </h4>
              <div class="">
                <p>Install <code>`bravevue`</code> via npm</p>
              </div>
            </div>
            <div class="col-span-3">
              <BrTaSyntaxHighlighter>
                <template #title>Terminal</template>
                <template #code>{{ `npm install bravevue` }} </template>
              </BrTaSyntaxHighlighter>
            </div>
          </li>

          <!-- ======================== -->
          <!-- SECOND SETEP -->
          <!-- ======================== -->

          <li
            class="dark:before:highlight-white/5 relative grid-cols-5 gap-16 pl-10 pb-8 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-md before:text-[0.625rem] before:font-bold before:text-slate-700 before:shadow-sm before:ring-1 before:ring-slate-900/5 before:content-[counter(step)] after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:shadow-none dark:before:ring-0 dark:after:bg-slate-200/5 xl:grid"
            style="counter-increment: step 1"
          >
            <div class="col-span-2 mb-6 xl:mb-0">
              <h4
                class="mb-2 font-semibold leading-6 text-slate-900 dark:text-slate-200"
              >
                Import the Component
              </h4>
              <div class="">
                <p>
                  Import <code>`BraveSidebarLayout`</code> Component and add it
                  to your components object.
                </p>
              </div>
            </div>
            <div class="col-span-3">
              <BrTaSyntaxHighlighter langauge="javascript">
                <template #title>app.vue</template>
                <template #code
                  >{{`
                  <script>
                    import { BraveSidebarLayout } from "bravevue";
                    import "../node_modules/bravevue/dist/style.css";
                    export default {
                      components: {
                        BraveSidebarLayout,
                      },
                    };
                  </script>
                  `}}</template
                >
              </BrTaSyntaxHighlighter>
            </div>
          </li>

          <!-- ======================== -->
          <!-- THIRD STEP -->
          <!-- ======================== -->

          <li
            class="dark:before:highlight-white/5 relative grid-cols-5 gap-16 pl-10 pb-8 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-md before:text-[0.625rem] before:font-bold before:text-slate-700 before:shadow-sm before:ring-1 before:ring-slate-900/5 before:content-[counter(step)] after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:shadow-none dark:before:ring-0 dark:after:bg-slate-200/5 xl:grid"
            style="counter-increment: step 1"
          >
            <div class="col-span-2 mb-6 xl:mb-0">
              <h4
                class="mb-2 font-semibold leading-6 text-slate-900 dark:text-slate-200"
              >
                Add Component to your template
              </h4>
              <div class="">
                <p class="text-sm">
                  Place component in your template wherever you want the Slider
                  to appear.
                </p>
              </div>
            </div>
            <div class="col-span-5">
              <BrTaSyntaxHighlighter langauge="html">
                <template #title>app.vue</template>
                <template #code
                  >{{`<template>
                    <BraveSidebarLayout
                      sidebar-class="  bg-slate-900 flex flex-col text-white "
                      :sidebar-width="300"
                    >
                      <!-- SIDEBAR TEMPLATE -->
                      <template v-slot:sidebar="{ closeMenu, openMenu }">
                        <div
                          @click="closeMenu()"
                          class="absolute right-0 top-0 cursor-pointer p-2 text-2xl md:hidden"
                        >
                          [ Close Sidebar ]
                        </div>
                        <!-- ADD YOU SIDEBAR HTML HERE  -->
                        <div class="mt-10 p-10 text-2xl">
                          PLACE YOUR SIDEBAR CONTENT HERE
                        </div>
                      </template>
                      <!-- MAIN CONTENT TEMPLATE -->
                      <template v-slot:content="{ closeMenu, openMenu }">
                        <div
                          class="p-2cursor-pointer inline-block text-2xl md:hidden"
                          @click="openMenu()"
                        >
                          <i class="bi bi-three-dots-vertical"></i> [ Show
                          Sidebar ]
                        </div>
                        <!-- ADDED ROUTERVIEW TO MAIN CONTENT AREA  -->
                        <div class="p-10 text-2xl">PLACE YOUR CONTENT HERE</div>
                        <router-view />
                      </template>
                    </BraveSidebarLayout> </template
                  >`}}</template
                >
              </BrTaSyntaxHighlighter>
            </div>
          </li>
        </ol>

        <!-- <BraveGistEmbed
          class="my-10"
          url="https://gist.github.com/shishirraven/3985c05c81ab898a5c476e792eb6298e"
        /> -->

        <!-- ------------------------------------------------------------------ -->
        <!-- !!! ENDS CENTERED WITH SINGLE ACTION -->
        <!-- ------------------------------------------------------------------ -->
      </div>
      <hr class="my-5" />
      <h2 class="mt-30" id="slots">
        Slots
        <a href="#slots" name="slots" class="anchor"
          ><span class="anchor-target" id="slots"></span
          ><span class="glyphicon glyphicon-link"></span
        ></a>
      </h2>
      <table>
        <tbody>
          <tr>
            <td class="py-4 px-6"><strong>Name </strong></td>
            <td class="py-4 px-6"><strong>Scoped </strong></td>
            <td class="py-4 px-6"><strong>Description </strong></td>
          </tr>
          <tr>
            <td class="py-4 px-6">Content</td>
            <td class="py-4 px-6">Yes</td>
            <td class="py-4 px-6">
              <p>Content Slot</p>
              <p>
                Here is where you page content will go. 

                <br />
                <b>Scoped function</b> closeMenu() - close the sidebar
                <br />
                <b>Scoped function</b> openMenu() - open the sidebar
                <br />
                <b>Scoped function</b> panelState() - returns the current state
                of the sidebar
                <br />
              </p>
            </td>
          </tr>
          <tr>
            <td class="py-4 px-6">sidebar</td>
            <td class="py-4 px-6">Yes</td>
            <td class="py-4 px-6">
              <p>Sidebar Slot</p>
              <p>
                Here is where you Sidebar Content will go.

                <br />
                <br />
                <b>Scoped function</b> closeMenu() - close the sidebar
                <br />
                <b>Scoped function</b> openMenu() - open the sidebar
                <br />
                <b>Scoped function</b> panelState() - returns the current state
                of the sidebar
                <br />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import BraveSlider from "@/components/uiexamples/BraveSlider.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import { BraveGistEmbed, BraveSyntaxHighlighter } from "bravevue";
import { useHead } from "@vueuse/head";

export default {
  mounted() {
    useHead({
      title: "Sidebar Component for Vue 3 | Brave Components Library.",
      meta: [
        {
          name: "description",
          content:
            "Brave Sidebar Layout is a Vue component that allows you to create a sidebar layout with a sidebar and a content area.",
        },
        {
          name: "keywords",
          content:
            "Sidebar, Responsive, Headless, Vue3, Component, Headless, Styleless ",
        },
        {
          name: "author",
          content: "Shishir Raven",
        },
      ],
    });
  },
  components: {
    BraveGistEmbed,
    BraveSlider,
    BraveSyntaxHighlighter,
    BrTaSyntaxHighlighter,
  },
};
</script>
