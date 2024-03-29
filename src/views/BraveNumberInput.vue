<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="flex-1 lg:p-16 p-5">
    <div
      class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block">
      <h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">On this page
      </h5>
      <div id="navigation">
              <ul class="navtext-slate-700 text-sm leading-6">
                  <li>
                    
                    <a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                          href="#brave-number-input">Introduction</a>
                  </li>
                  <li>
                    
                    <a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                          href="#live-example">Live Example</a>
                  </li>
                  <li>
                    
                    <a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                          href="#keyboard-navigation">Keyboard Navigation</a>
                  </li>
                  <li>
                    
                    <a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                          href="#props">Props</a>
                  </li>

                  <li>
                    
                    <a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                          href="#slots">Slots</a>
                  </li>

              </ul>
          </div>
      
    </div>
    <div class="prose dark:prose-invert prose-slate">
      <h1 id="brave-number-input">Brave Number Input
      </h1>
      <p>
        BraveVue’s NumericInput lets the user edit and submit specific numeric
        values by typing or by using the spin buttons.
      </p>
      <p>
        You can optionally configure with maximum, minimum and step value of the
        Number Input.
      </p>
      <p>
        `NumericInput` has a default range from 1 to 100, which can be changed
        by setting the min and max props. The default step increment is 1, and
        can be changed via the step prop (decimal values allowed).
      </p>
      <p>
        The component `number-input` is
        <a target="_blank" href="https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/">WAI-ARIA
        </a>
        compliant, allowing for keyboard control, and supports both horizontal
        (default) and vertical layout.
      </p>
      <h2 id="live-example">Live Example</h2>

      <BrTaTabs v-bind:tabs="['example','code']" initialTab="example">
        <template #tab-head-example>Basic Example</template>
        <template #tab-panel-example>
          <BNI_basic />
        </template>
        <template #tab-head-code>Source Code</template>
        <template #tab-panel-code>
          <BrTaSyntaxHighlighter language="javascript">
            <template #title>PositionDialog.vue</template>
            <template #code>{{`<template>
  <div class="py-3">
  v-model : \\{\\{count\\}\\}
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
</script>
            `}}
            </template>
          </BrTaSyntaxHighlighter>
        </template>
      </BrTaTabs>


      <h2 id="keyboard-navigation">Keyboard navigation
      </h2>
      <p>
        The following keyboard controls are available when the `Brave Number Input` button is
        focused.
      </p>
      <div class="overflow-auto w-full">
      <table>
        <thead class="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400 ">
          <tr>
            <th scope="col" class="py-3 px-6">Key
            </th>
            <th scope="col" class="py-3 px-6">Key Name
            </th>
            <th scope="col" class="py-3 px-6">Action
            </th>
          </tr>
        </thead>
        <tbody class="bg-slate-50 border-b dark:bg-slate-800 dark:border-slate-700">
          <tr>
            <td class="py-4 px-6">
              <kbd
                class="inline-flex items-center mr-1 px-1  text-slate-800 bg-slate-100 border border-slate-200 rounded-lg dark:bg-slate-600 dark:text-slate-100 dark:border-slate-500">
                <i class="bi bi-arrow-up-square">
                </i>
                <span class="sr-only">Arrow key up
                </span>
              </kbd>
            </td>
            <td class="py-4 px-6">Arrow key up
            </td>
            <td class="py-4 px-6">Increment the value
            </td>
          </tr>
          <tr>
            <td class="py-4 px-6">
              <kbd
                class="inline-flex items-center mr-1 px-1  text-slate-800 bg-slate-100 border border-slate-200 rounded-lg dark:bg-slate-600 dark:text-slate-100 dark:border-slate-500">
                <i class="bi bi-arrow-down-square">
                </i>
                <span class="sr-only">Arrow Down
                </span>
              </kbd>
            </td>
            <td class="py-4 px-6">Arrow key down
            </td>
            <td class="py-4 px-6">Decrement the value
            </td>
          </tr>
          <tr>
            <td class="py-4 px-6">
              <kbd class="px-2 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 border
                         border-slate-200 rounded-lg dark:bg-slate-600 dark:text-slate-100
                          dark:border-slate-500">PgUp
              </kbd>
            <td class="py-4 px-6">Page up key
            </td>
            </td>
            <td class="py-4 px-6">Increases the value by the `largeStep` prop value
            </td>
          </tr>
          <tr>
            <td class="py-4 px-6">
              <kbd class="px-2 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 border
                         border-slate-200 rounded-lg dark:bg-slate-600 dark:text-slate-100
                          dark:border-slate-500">PgDown
              </kbd>
            <td class="py-4 px-6">Page Down
            </td>
            </td>
            <td class="py-4 px-6">Decrease the value by the `largeStep` prop value
            </td>
          </tr>
          <tr>
            <td class="py-4 px-6">
              <kbd class="px-2 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 border
                         border-slate-200 rounded-lg dark:bg-slate-600 dark:text-slate-100
                          dark:border-slate-500">End
              </kbd>
            <td class="py-4 px-6">Home
            </td>
            </td>
            <td class="py-4 px-6">Set the value to the minimum
            </td>
          </tr>
          <tr>
            <td class="py-4 px-6">
              <kbd class="px-2 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 border
                         border-slate-200 rounded-lg dark:bg-slate-600 dark:text-slate-100
                          dark:border-slate-500">End
              </kbd>
            <td class="py-4 px-6">End
            </td>
            </td>
            <td class="py-4 px-6">Set the value to the maxium
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <h2 id="props">Props
      </h2>
      <div class="overflow-auto w-full">
      <table>
        <thead class="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400 ">
          <tr>
            <th scope="col" class="py-3 px-6">Prop
            </th>
            <th scope="col" class="py-3 px-6">Type
            </th>
            <th scope="col" class="py-3 px-6">Default
            </th>
            <th scope="col" class="py-3 px-6">Description
            </th>
          </tr>
        </thead>
        <tr>
          <td class="py-4 px-6">
            placeholder
          </td>
          <td class="py-4 px-6">String
          </td>
          <td class="py-4 px-6">--
          </td>
          <td class="py-4 px-6">
            Use the placeholder prop to show a string when the `NumberInput` has
            no value (i.e. placeholder="--").
          </td>
        </tr>
        <tr>
          <td class="py-4 px-6">
            v-model
          </td>
          <td class="py-4 px-6">Number
          </td>
          <td class="py-4 px-6">
          </td>
          <td class="py-4 px-6">
            The v-model always returns the value as a number. The v-model can be
            null if no initial value is set.
          </td>
        </tr>
        <tr>
          <td class="py-4 px-6">
            max
          </td>
          <td class="py-4 px-6">Number
          </td>
          <td class="py-4 px-6">100
          </td>
          <td class="py-4 px-6">
            The maximum value that can be selected. Must be greater than the
            `min` prop.. Negative numbers are allowed
          </td>
        </tr>
        <tr>
          <td class="py-4 px-6">
            min
          </td>
          <td class="py-4 px-6">Number
          </td>
          <td class="py-4 px-6">0
          </td>
          <td class="py-4 px-6">
            The minimum value that can be selected. Negative numbers are allowed
          </td>
        </tr>
        <tr>
          <td class="py-4 px-6">
            disabled
          </td>
          <td class="py-4 px-6">Boolean
          </td>
          <td class="py-4 px-6">false
          </td>
          <td class="py-4 px-6">Component appears as disabled.
          </td>
        </tr>
        <tr>
          <td class="py-4 px-6">
            formatter-fn
          </td>
          <td class="py-4 px-6">
          </td>
          <td class="py-4 px-6">
          </td>
          <td class="py-4 px-6">
            A reference to a method to format the displayed value. It is passed
            a single argument which is the current value
          </td>
        </tr>
        <tr>
          <td class="py-4 px-6">
            label-decrement
          </td>
          <td class="py-4 px-6">
          </td>
          <td class="py-4 px-6">
          </td>
          <td class="py-4 px-6">
          </td>
        </tr>
        <tr>
          <td class="py-4 px-6">
            label-increment
          </td>
          <td class="py-4 px-6">
          </td>
          <td class="py-4 px-6">
          </td>
          <td class="py-4 px-6">
          </td>
        </tr>
        <tr>
          <td class="py-4 px-6">
            name
          </td>
          <td class="py-4 px-6">String
          </td>
          <td class="py-4 px-6">
          </td>
          <td class="py-4 px-6">Sets the value of the `name` attribute on the form control
          </td>
        </tr>
        <tr>
          <td class="py-4 px-6">
            wrap
          </td>
          <td class="py-4 px-6">Boolean
          </td>
          <td class="py-4 px-6">false
          </td>
          <td class="py-4 px-6">
            When set, allows the value to wrap around when reaching the minimum
            or maximum value
          </td>
        </tr>
      </table>
      </div>
      <h2 class="mt-30">Slots
      </h2>
      <div class="overflow-auto w-full">
      <table>
        <tr>
          <td class="py-4 px-6">
            <strong>Name
            </strong>
          </td>
          <td class="py-4 px-6">
            <strong>Scoped
            </strong>
          </td>
          <td class="py-4 px-6">
            <strong>Description
            </strong>
          </td>
        </tr>
        <tr>
          <td class="py-4 px-6">minus-button
          </td>
          <td class="py-4 px-6">decreaseNumber function that will decrease the number
          </td>
          <td class="py-4 px-6">Custom button to place in the decrement button
          </td>
        </tr>
        <tr>
          <td class="py-4 px-6">plus-button
          </td>
          <td class="py-4 px-6">increaseNumber function that will increase the number
          </td>
          <td class="py-4 px-6">Custom content to place in the increment button
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
import BNI_basic from "@/components/uiexamples/BraveNumberInput/BNI_basic.vue";
import { useHead } from "@vueuse/head"

export default {
  mounted(){
    useHead({
            title: "Number Input Component for Vue 3 | Brave Components Library.",
            meta: [
                {
                    name: "description",
                    content: "BraveVue’s NumericInput lets the user edit and submit specific numeric values by typing or by using the spin buttons.",
                },
                {
                    name: "keywords",
                    content: " WAI-ARIA compliant, Stylish , Keyboard Contro, Number Input, Number Spinner, Spin Button, Vue 3, Javascript ",
                },
                {
                    name: "author",
                    content: "Shishir Raven",
                },
            ],
        })
  },
  components: { BraveGistEmbed, BraveTabs, BrTaSyntaxHighlighter, BrTaTabs, BNI_basic },
};
</script>