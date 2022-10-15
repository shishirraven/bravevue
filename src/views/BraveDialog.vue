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
                        <ul class="my-1">
                            <li class="mb-2 ml-3">
                                <a href="#live-example-simple" class="text-slate-900 dark:text-slate-100">
                                    - Simple Dialog
                                </a>
                            </li>
                            <li class="mb-2 ml-3">
                                <a href="#live-example-confirmation-dialog" class="text-slate-900 dark:text-slate-100">
                                    - Confirmation Dialog
                                </a>
                            </li>
                            <li class="mb-2 ml-3">
                                <a href="#live-example-info-box" class="text-slate-900 dark:text-slate-100">
                                    - Info Dialog
                                </a>
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
      <div class="prose dark:prose-invert prose-slate  ">
          <h1 id="introduction"><i class="bi bi-window"></i> Brave Dialog</h1>
            <p>Brave Dialogs can be used to create Modals, Use it for Info Boxes, Confirm Dialogs, Settings Panel, Dialog forms. Etc. </p>
        <h2 id="live-example">Live Examples </h2>
        <h3 id="live-example-simple">Simple Example</h3>
          <BrTaTabs class="not-prose" v-bind:tabs="['example','code','stackblitz']" initialTab="example">
            
              <template #tab-head-stackblitz>⚡StackBlitz</template>
              <template #tab-panel-stackblitz>
                <!-- tailwind iframe full width and height -->
                <iframe src="https://stackblitz.com/edit/vitejs-vite-sjfycx?embed=1&file=src/components/BraveDialog.vue&hideExplorer=1&hideNavigation=1&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" allowfullscreen="allowfullscreen" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
              </template>
              <template #tab-head-example>Basic Example</template>
              <template #tab-panel-example>
                  <SimpleDialog />
              </template>
              <template #tab-head-code>Source Code</template>
              <template #tab-panel-code>
                  <BrTaSyntaxHighlighter language="javascript">
                      <template #title>  BraveDialog.vue</template>
                      <template #code>{{`<template>
  <BraveDialog
    ref="bravedialog1"
    class="
      fixed
      bottom-0
      left-0
      right-0
      top-0
      flex
      justify-center
      bg-black/80
      z-50
    "
    dialogclasses="fixed lg:w-1/2 lg:m-auto m-3  max-w-96  
   dark:text-white rounded"
    :visibility="false"
  >
    <div class="text-right">
      <button
        @click="$refs.bravedialog1.hide()"
        type="button"
        class="
          rounded-full
          bg-gradient-to-br
          from-purple-600
          to-blue-500
          text-center text-sm
          font-medium
          text-white
          hover:bg-gradient-to-bl
          focus:ring-4 focus:ring-blue-300
          dark:focus:ring-blue-800
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-x-circle"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
    <div
      class="
        h-72
        rounded-2xl
        bg-white
        p-5
        shadow-lg
        flex
        items-center
        justify-center
        dark:bg-slate-900
      "
    >
      <div class="text-slate-300 dark:text-slate-700 text-3xl">
        Placeholder for your HTML Content
      </div>
    </div>
  </BraveDialog>
  <button
    @click="$refs.bravedialog1.show()"
    class="
      group
      relative
      mb-2
      mr-2
      inline-flex
      items-center
      justify-center
      overflow-hidden
      rounded-lg
      bg-gradient-to-br
      from-green-400
      to-blue-600
      p-0.5
      text-sm
      font-medium
      text-gray-900
      hover:text-white
      focus:outline-none focus:ring-4 focus:ring-green-200
      group-hover:from-green-400 group-hover:to-blue-600
      dark:text-white dark:focus:ring-green-800
    "
  >
    <span
      class="
        relative
        rounded-md
        bg-white
        px-5
        py-2.5
        transition-all
        duration-75
        ease-in
        group-hover:bg-opacity-0
        dark:bg-gray-900
      "
    >
      Basic Demo
    </span>
  </button>
</template>
<script>
import { BraveDialog } from 'bravevue';
export default {
  components: { BraveDialog },
};
</script>
`}}
                      </template>
                  </BrTaSyntaxHighlighter>
              </template>
          </BrTaTabs>

          <h3 id="live-example-confirmation-dialog">Confirmation Dialog</h3>
          <BrTaTabs class="not-prose" v-bind:tabs="['example','code','stackblitz']" initialTab="example">
            
              <template #tab-head-stackblitz>⚡StackBlitz</template>
              <template #tab-panel-stackblitz>
                <iframe src="https://stackblitz.com/edit/vitejs-vite-sggzxj?embed=1&file=src/components/BraveDialog.vue&hideExplorer=1&hideNavigation=1&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" allowfullscreen="allowfullscreen" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
              </template>
              <template #tab-head-example>Basic Example</template>
              <template #tab-panel-example>
                  <ConfirmationDialog />
              </template>
              <template #tab-head-code>Source Code</template>
              <template #tab-panel-code>
                  <BrTaSyntaxHighlighter language="javascript">
                      <template #title>  BraveDialog.vue</template>
                      <template #code>{{`<template>
    <button
      @click="$refs.bravedialog2.show()"
      class="
        relative
        inline-flex
        items-center
        justify-center
        p-0.5
        mb-2
        mr-2
        overflow-hidden
        text-sm
        font-medium
        text-gray-900
        rounded-lg
        group
        bg-gradient-to-br
        from-green-400
        to-blue-600
        group-hover:from-green-400 group-hover:to-blue-600
        hover:text-white
        dark:text-white
        focus:ring-4 focus:outline-none focus:ring-green-200
        dark:focus:ring-green-800
      "
    >
      <span
        class="
          relative
          px-5
          py-2.5
          transition-all
          ease-in
          duration-75
          bg-white
          dark:bg-gray-900
          rounded-md
          group-hover:bg-opacity-0
        "
      >
        Info Dialog Demo
      </span>
    </button>
  
    <BraveDialog
      ref="bravedialog2"
      class="
        bg-black/80
        backdrop-blur-sm
        dark:bg-black/80
        justify-center
        flex
        fixed
        bottom-0
        left-0
        right-0
        top-0
      "
      dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
      :visibility="false"
    >
      <div class="text-center">
        <div class="inline-block mt-5">
          <div
            class="
              h-14
              w-14
              p-0
              rounded-full
              bg-green-200
              flex
              items-center
              justify-center
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-check2 text-green-900"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
        </div>
        <div class="p-5">
          <h1 class="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
            Payment Successful
          </h1>
          <p class="text-gray-500 text-sm dark:text-gray-400">
            Thank you for your payment. We will be in touch with you soon.
          </p>
        </div>
        <div class="mx-5 mb-5">
          <button
            @click="$refs.bravedialog2.hide()"
            type="button"
            class="
              text-white
              bg-blue-700
              border border-gray-300
              focus:outline-none
              hover:bg-blue-800
              focus:ring-4 focus:ring-gray-200
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2
              dark:bg-gray-700
              dark:text-white
              dark:border-gray-600
              dark:hover:bg-gray-600
              dark:hover:border-gray-600
              dark:focus:ring-gray-700
              min-w-full
            "
          >
            Go back to the Dashboard
          </button>
        </div>
      </div>
    </BraveDialog>
  
    <BraveDialog
      ref="bravedialog"
      class="
        bg-black/80
        backdrop-blur-sm
        dark:bg-black/80
        justify-center
        flex
        fixed
        bottom-0
        left-0
        right-0
        top-0
      "
      dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
      :visibility="false"
    >
      <!-- Body -->
      <div class="flex flex-1">
        <div class="pl-5 pt-5">
          <div
            class="
              h-10
              w-10
              rounded-full
              bg-red-200
              flex
              justify-center
              content-center
            "
          >
            <i class="bi bi-exclamation-circle text-red-500 m-auto text-xl"></i>
          </div>
        </div>
        <div class="p-5">
          <h1 class="text-xl font-semibold dark:text-white text-gray-900 mb-2">
            Deactivate Acccount
          </h1>
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            Are you sure you want to deactivate your account? All your data will
            be permanently removed. This action cannot be undone
          </p>
        </div>
      </div>
      <!-- Buttons -->
      <div
        class="
          bg-slate-100
          dark:bg-slate-900
          px-5
          py-2
          rounded-b-lg
          flex
          justify-end
          gap-x-2
        "
      >
        <button
          @click="$refs.bravedialog.hide()"
          type="button"
          class="
            text-gray-900
            bg-white
            border border-gray-300
            focus:outline-none
            hover:bg-gray-100
            focus:ring-4 focus:ring-gray-200
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2
            dark:bg-gray-800
            dark:text-white
            dark:border-gray-600
            dark:hover:bg-gray-700
            dark:hover:border-gray-600
            dark:focus:ring-gray-700
          "
        >
          Cancel
        </button>
  
        <button
          @click="$refs.bravedialog.hide()"
          type="button"
          class="
            focus:outline-none
            text-white
            bg-red-700
            hover:bg-red-800
            focus:ring-4 focus:ring-red-300
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2
            dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
          "
        >
          Deactivate
        </button>
      </div>
    </BraveDialog>
  </template>
  <script>
  import { BraveDialog } from 'bravevue';
  export default {
    components: { BraveDialog },
  };
  </script>
  `}}
                      </template>
                  </BrTaSyntaxHighlighter>
              </template>
          </BrTaTabs>



          
          <h3 id="live-example-info-box">Info Box Example</h3>
          <BrTaTabs class="not-prose" v-bind:tabs="['example','code','stackblitz']" initialTab="example">
            
              <template #tab-head-stackblitz>⚡StackBlitz</template>
              <template #tab-panel-stackblitz>
                <iframe src="https://stackblitz.com/edit/vitejs-vite-bbw79y?embed=1&file=src/components/BraveDialog.vue&hideExplorer=1&hideNavigation=1&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" allowfullscreen="allowfullscreen" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
              </template>
              <template #tab-head-example>Info Box Example </template>
              <template #tab-panel-example>
                  <InfoDialog />
              </template>
              <template #tab-head-code>Source Code</template>
              <template #tab-panel-code>
                  <BrTaSyntaxHighlighter language="javascript">
                      <template #title>  BraveDialog.vue</template>
                      <template #code>{{`<template>
  <button
    @click="$refs.bravedialog2.show()"
    class="
      relative
      inline-flex
      items-center
      justify-center
      p-0.5
      mb-2
      mr-2
      overflow-hidden
      text-sm
      font-medium
      text-gray-900
      rounded-lg
      group
      bg-gradient-to-br
      from-green-400
      to-blue-600
      group-hover:from-green-400 group-hover:to-blue-600
      hover:text-white
      dark:text-white
      focus:ring-4 focus:outline-none focus:ring-green-200
      dark:focus:ring-green-800
    "
  >
    <span
      class="
        relative
        px-5
        py-2.5
        transition-all
        ease-in
        duration-75
        bg-white
        dark:bg-gray-900
        rounded-md
        group-hover:bg-opacity-0
      "
    >
      Basic Demo
    </span>
  </button>

  <BraveDialog
    ref="bravedialog2"
    class="
      bg-black/80
      backdrop-blur-sm
      dark:bg-black/80
      justify-center
      flex
      fixed
      bottom-0
      left-0
      right-0
      top-0
    "
    dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
    :visibility="false"
  >
    <div class="text-center">
      <div class="inline-block mt-5">
        <div
          class="
            h-14
            w-14
            p-0
            rounded-full
            bg-green-200
            flex
            items-center
            justify-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-check2 text-green-900"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
      </div>
      <div class="p-5">
        <h1 class="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
          Payment Successful
        </h1>
        <p class="text-gray-500 text-sm dark:text-gray-400">
          Thank you for your payment. We will be in touch with you soon.
        </p>
      </div>
      <div class="mx-5 mb-5">
        <button
          @click="$refs.bravedialog2.hide()"
          type="button"
          class="
            text-white
            bg-blue-700
            border border-gray-300
            focus:outline-none
            hover:bg-blue-800
            focus:ring-4 focus:ring-gray-200
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2
            dark:bg-gray-700
            dark:text-white
            dark:border-gray-600
            dark:hover:bg-gray-600
            dark:hover:border-gray-600
            dark:focus:ring-gray-700
            min-w-full
          "
        >
          Go back to the Dashboard
        </button>
      </div>
    </div>
  </BraveDialog>

  <BraveDialog
    ref="bravedialog"
    class="
      bg-black/80
      backdrop-blur-sm
      dark:bg-black/80
      justify-center
      flex
      fixed
      bottom-0
      left-0
      right-0
      top-0
    "
    dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
    :visibility="false"
  >
    <!-- Body -->
    <div class="flex flex-1">
      <div class="pl-5 pt-5">
        <div
          class="
            h-10
            w-10
            rounded-full
            bg-red-200
            flex
            justify-center
            content-center
          "
        >
          <i class="bi bi-exclamation-circle text-red-500 m-auto text-xl"></i>
        </div>
      </div>
      <div class="p-5">
        <h1 class="text-xl font-semibold dark:text-white text-gray-900 mb-2">
          Deactivate Acccount
        </h1>
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          Are you sure you want to deactivate your account? All your data will
          be permanently removed. This action cannot be undone
        </p>
      </div>
    </div>
    <!-- Buttons -->
    <div
      class="
        bg-slate-100
        dark:bg-slate-900
        px-5
        py-2
        rounded-b-lg
        flex
        justify-end
        gap-x-2
      "
    >
      <button
        @click="$refs.bravedialog.hide()"
        type="button"
        class="
          text-gray-900
          bg-white
          border border-gray-300
          focus:outline-none
          hover:bg-gray-100
          focus:ring-4 focus:ring-gray-200
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2
          dark:bg-gray-800
          dark:text-white
          dark:border-gray-600
          dark:hover:bg-gray-700
          dark:hover:border-gray-600
          dark:focus:ring-gray-700
        "
      >
        Cancel
      </button>

      <button
        @click="$refs.bravedialog.hide()"
        type="button"
        class="
          focus:outline-none
          text-white
          bg-red-700
          hover:bg-red-800
          focus:ring-4 focus:ring-red-300
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2
          dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
        "
      >
        Deactivate
      </button>
    </div>
  </BraveDialog>
</template>
<script>
import { BraveDialog } from 'bravevue';
export default {
  components: { BraveDialog },
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
                  <td class="py-4 px-6">visibility</td>
                  <td class="py-4 px-6">Boolean</td>
                  <td class="py-4 px-6">false</td>
                  <td class="py-4 px-6">
                      <p>Array of the name-slug of tabs to be displayed </p>
                      <p>
                        Example : <code class="text-blue-500" > :visibility="true" </code>
                      </p>
                  </td>
              </tr>

              <tr>
                  <td class="py-4 px-6">dialogwidth</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6">auto</td>
                  <td class="py-4 px-6">
                      <p>Width of the Dialog you want to keep, you can also set this through a CSS Class using dialogclasses prop</p>
                      <p>
                        Example : <code class="text-blue-500" > dialogwidth="auto" </code>
                      </p>
                  </td>
              </tr>

              <tr>
                  <td class="py-4 px-6">hideOnBackdrop</td>
                  <td class="py-4 px-6">Boolean</td>
                  <td class="py-4 px-6">true</td>
                  <td class="py-4 px-6">
                      <p>If you want the dialog to hide when user clicks outside the dialog set it to true, else false</p>
                      <p>
                        Example : <code class="text-blue-500" > :hideOnBackdrop="false" </code>
                      </p>
                  </td>
              </tr>

              <tr>
                  <td class="py-4 px-6">dialogclasses</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                      <p>Pass Classes to style your dialog</p>
                  </td>
              </tr>
              <tr>
                  <td class="py-4 px-6">class</td>
                  <td class="py-4 px-6">String</td>
                  <td class="py-4 px-6"></td>
                  <td class="py-4 px-6">
                    <p>will set the Classes on the backdrop</p>
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
                  <td class="py-4 px-6">default slot </td>
                  <td class="py-4 px-6">
                    Yes
                  </td>
                  <td class="py-4 px-6">
                    <p>default slot</p>
                    
                    <p><b>Scoped function</b> hide() is passed to this scoped slot to allow use add @click="hide()" anywhere on there default slot template to hide the dialog. </p>
                  </td>
              </tr>
          </table>
      </div>
  </main>
</template>
<script>
import BraveTabs from "@/components/uiexamples/BraveTabs.vue";
import SimpleDialog from "@/components/uiexamples/BraveDialog/SimpleDialog.vue";
import ConfirmationDialog from "@/components/uiexamples/BraveDialog/ConfirmationDialog.vue";
import InfoDialog from "@/components/uiexamples/BraveDialog/InfoDialog.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import BrTaTabs from "@/components/brave_tailwind/BrTaTabs.vue";
import PillsTab from "@/components/uiexamples/BraveTabs/PillsTab.vue";
export default {
  components: {
    SimpleDialog,
    ConfirmationDialog,
    InfoDialog,
    BraveTabs,
    BrTaSyntaxHighlighter,
    BrTaTabs,
    PillsTab
},
};
</script>
