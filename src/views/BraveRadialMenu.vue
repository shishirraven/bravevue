<template>
  <main class="flex-1 p-4 lg:p-10 xl:p-16">
      <div
          class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block">
          <h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">
              On this page
          </h5>
          <div id="navigation">
              <ul class="navtext-slate-700 text-sm leading-6">
                
                  <li class>
                      <a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                          href="#introduction">Introduction</a>
                  </li>
                  <li class>
                      <a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                          href="#features">Features</a>
                  </li>
                  
                  <li class>
                      <a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                          href="#examples">Examples</a>
                      <ul class="nav">
                          <li class="ml-4">
                              <a class="group flex items-center py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                  href="#basic-example">
                                  <svg width="3" height="24" viewbox="0 -9 3 24"
                                      class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                                      <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5"
                                          stroke-linecap="round"></path>
                                  </svg>Basic Example</a>
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
          <h1 id="introduction"><i class="bi bi-brightness-low"></i> Brave Radial Menu</h1>
          <p>Radial Menu displays a list of items in a circular design with option to print text.</p>
          <img class="" src="@/assets/gif/radial_menu_vue.gif" alt="radial menu demo">


          <h2 id="features">Features</h2>
          <ul>
            <li>Style-less, Style as you like</li>
            <li>Customizable Radius of the Menu</li>
            <li>Customizable Radius of the Options and padding from perimeter</li>
            <li>Can use as Context Menu.</li>
          </ul>

          <h2 id="examples">Examples</h2>

        <h3 id="basic-example">Live Example</h3>
          <BrTaTabs class="not-prose" v-bind:tabs="['example','code']" initialTab="example">
              <template #tab-head-example>Basic Example</template>
              <template #tab-panel-example>
                  <BraveRadialMenu />
              </template>
              <template #tab-head-code>Source Code</template>
              <template #tab-panel-code>
                  <BrTaSyntaxHighlighter language="javascript">
                      <template #title>PositionDialog.vue</template>
                      <template #code>{{`<template>
  <BraveRadialMenu ref="BraveradialMenu2" class="shishir" :class="config.class" :radius="config.radius"
    :radius-icons="config.radiusIcons" :circle-padding="config.circlePadding" :visible="config.visible"
    :classBackdrop="config.classBackdrop" @show="config.visible=true" @hide="config.visible=false">

    <!-- CENTER MORE BUTTON -->
    <div @click.stop="$refs.BraveradialMenu2.hide()" title="More" class="overflow-clip  cursor-pointer z-50
           transition-all flex justify-center border
            border-slate-300 scale-125 hover:scale-150 items-center">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </div>

    <!-- ALL OTHER BUTTONS -->
    <a v-for="(item,index) in items" :key="index" :href="item.href" :title="item.title" class="overflow-clip p-3 transition-all flex justify-center  hover:scale-110
           items-center border-gray-100 borders">
      <img class="w-full h-full object-cover" :src="item.src" :alt="item.title" />
    </a>
  </BraveRadialMenu>

  <!-- CLICKABLE AREA ATO SHOW RADIAL MENU AS CONTEXT -->
  <div class="h-96 bg-white flex items-center justify-center " @click="$refs.BraveradialMenu2.show($event)">
    <div class="text-gray-500 text-lg font-bold">
      Click anywhere on the white area to show the radial menu
    </div>
  </div>

</template>
<script>
import { BraveRadialMenu } from "bravevue";
export default {
  name: "AppVue",
  data() {
    return {
      config: {
        radius: 150,
        radiusIcons: 30,
        circlePadding: 30,
        visible: false,
        classBackdrop: 'back-drop transition-all backdrop-blur-sm2',
        class: "border transition-all shadow white font-mono uppercase font-thin text-gray-900 text-sm bg-white/90 backdrop-blur"
      },
      items: [
        {
          "title": "Flooring",
          "src": '/assets/flooring.svg',
          "href": "http://www.iamshishir.com"
        },
        {
          "title": "Paint",
          "src": "/assets/paint.svg",
          "href": "http://www.iamshishir.com"
        },
        {
          "title": "Backsplash",
          "src": "/assets/backsplash.svg",
          "href": "http://www.iamshishir.com"
        },
        {
          "title": "Countertop",
          "src": "/assets/countertop-icon.svg",
          "href": "http://www.iamshishir.com"
        },
        {
          "title": "Cabinet",
          "src": "/assets/cabinet.svg",
          "href": "http://www.iamshishir.com"
        },
        {
          "title": "Hardware",
          "src": "/assets/knob.svg",
          "href": "http://www.iamshishir.com"
        },
        {
          "title": "Faucet",
          "src": "/assets/faucet.svg",
          "href": "http://www.iamshishir.com"
        },
        {
          "title": "Appliances",
          "src": "/assets/appliance.svg",
          "href": "http://www.iamshishir.com"
        }
      ],
    }
  },

  components: {
    BraveRadialMenu,
  }

}
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
                  <td class="py-4 px-6">radius</td>
                  <td class="py-4 px-6">Number</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                      <p>Outer Radius of the Radial Menu </p>
                      <p>
                        Example : <code class="text-blue-500" >150</code>
                      </p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">radiusIcons</td>
                  <td class="py-4 px-6">Number</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                      <p>Radius of the Individual Menu Items</p>
                      <p>
                        Example : <code class="text-blue-500" >35</code>
                      </p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">circlePadding</td>
                  <td class="py-4 px-6">Number</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                    <p>Padding between the Circumference of the Menu and Menu Items</p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">visible</td>
                  <td class="py-4 px-6">Boolean</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                    <p>Visiblity of the Menu</p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">classBackdrop</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                    <p>CSS Classes for the backdrop that convers the screen when menu is open</p>
                  </td>
              </tr>
              
              <tr>
                  <td class="py-4 px-6">class</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                    <p>CSS Classes that will be applied to the Menu</p>
                  </td>
              </tr>
          </table>
          </div>

          <!-- important note -->
          <div class="border p-3">
            <p><b>Important note:</b> for best results use monospaced font.</p>
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
                  <td class="py-4 px-6">default</td>
                  <td class="py-4 px-6">
                    No
                  </td>
                  <td class="py-4 px-6">
                    <p>
                        This slot is used to render the Menu Items. All the child items of this slot will be treated as menu items. 
                    </p>
                  </td>
              </tr>
          </table>
          </div>
      </div>
  </main>
</template>
<script>
import BraveRadialMenu from "@/components/uiexamples/BrRadialMenu.vue";
import BraveTabs from "@/components/uiexamples/BraveTabs.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import { BraveGistEmbed } from "bravevue";
import BrTaTabs from "@/components/brave_tailwind/BrTaTabs.vue";
import { useHead } from "@vueuse/head"

export default {
  mounted(){
    useHead({
            title: "Radial Menu Component for Vue 3 | Brave Components Library.",
            meta: [
                {
                    name: "description",
                    content: "Radial Menu displays a list of items in a circular menu design with option to print text.",
                },
                {
                    name: "keywords",
                    content: "Circular Context Menu, Stylish , Vue 3, Javascript ",
                },
                {
                    name: "author",
                    content: "Shishir Raven",
                },
            ],
        })
  },
  components: {
      BraveGistEmbed,
      BraveTabs,
      BrTaSyntaxHighlighter,
      BrTaTabs,
      BraveRadialMenu
  },
};
</script>
