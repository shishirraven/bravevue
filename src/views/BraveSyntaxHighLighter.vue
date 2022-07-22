<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="flex-1 lg:p-16">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl font-semibold mb-10"><i class="bi me-2 fs-4 bi-window-stack"></i> Position Dialog</h1>
        <p>
          It is a modal dialog which is positioned based on the click position.
        </p>
        <p>
          One of the Use case of Postion dialog is Help Box which open once your right click on the element. 
        </p>


        <h2 class="text-2xl font-semibold my-10">Examples</h2>


      <BraveTabs ref="bravetabref" 
        class="text-black dark:text-white my-10"
        tabs-content-class="border  p-4 dark:bg-slate-800"
        tab-button-class="cursor-pointer rounded-t-lg mr-0 dark:bg-slate-900 bg-gray-50 hover:dark:bg-slate-800 hover:bg-gray-200"
        tab-button-active-class="shadow-inner-sm -mb-px border rounded-t-lg border-b-0 dark:bg-slate-800 bg-white "
        v-bind:tabs="['upload','filemanager']" 
        initialTab="upload">
      <!-- ================================================================ -->
      <!-- SETTINGS PANEL  -->
      <!-- ================================================================ -->
      <template #tab-head-upload>Show Dialog on Hover</template>
      <template #tab-panel-upload>
        
        <PositionDialogExampleVue/>
      </template>


      <!-- ================================================================ -->
      <!-- SETTINGS PANEL  -->
      <!-- ================================================================ -->

      <template #tab-head-filemanager>Code</template>
      <template #tab-panel-filemanager>
    
      <BrTaSyntaxHighlighter language="javascript">
                    <template #title>PositionDialog.vue</template>
                    <template #code>{{`<template>
  <button
    type="button"
    @mouseover.stop="
      $refs.positionDialog2.show($event)
    "
    @mouseleave="$refs.positionDialog2.hide()"
    class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    <i
      class="bi me-2 fs-4 bi-info-circle text-xl m-0 p-0 leading-none block"
    ></i>
  </button>
  &lt;- Click here to see example.
  <BravePositionDialog
    ref="positionDialog2"
    style="max-width: 300px"
    class="rounded-lg bg-white dark:bg-slate-900 dark:text-white mx-5 max-w-xs shadow-2xl z-10"
  >
    <div class="m-5">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        You can add your project to your dashboard here.
      </h3>
      <p class="text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
        doloribus exercitationem dolores sint adipisci, soluta obcaecati
        accusamus, totam laborum deserunt cum in veniam eum delectus vero
        facilis. Harum, et tempora?
      </p>
    </div>
  </BravePositionDialog>
</template>
<script>
import { BravePositionDialog } from "bravevue";
export default {
  components: { BravePositionDialog },
};
</script>
`}} </template>
                </BrTaSyntaxHighlighter>
      </template>
</BraveTabs>


      <BraveTabs ref="bravetabref3" 
        class="text-black dark:text-white my-10"
        tabs-content-class="border  p-4 dark:bg-slate-800"
        tab-button-class="cursor-pointer rounded-t-lg mr-0 dark:bg-slate-900 bg-gray-50 hover:dark:bg-slate-800 hover:bg-gray-200"
        tab-button-active-class="shadow-inner-sm -mb-px border rounded-t-lg border-b-0 dark:bg-slate-800 bg-white "
        v-bind:tabs="['upload','filemanager']" 
        initialTab="upload">
      <!-- ================================================================ -->
      <!-- SETTINGS PANEL  -->
      <!-- ================================================================ -->
      <template #tab-head-upload>Show Dialog as Context Menu</template>
      <template #tab-panel-upload>

        <PositionDialogContextMenu/>
      </template>


      <!-- ================================================================ -->
      <!-- SETTINGS PANEL  -->
      <!-- ================================================================ -->

      <template #tab-head-filemanager>Code</template>
      <template #tab-panel-filemanager>
    
      <BrTaSyntaxHighlighter language="javascript">
                    <template #title>PositionDialogWithContextMenu.vue</template>
                    <template #code>{{`<template>
  <button
    type="button"
    @contextmenu.stop.prevent="
      $refs.positionDialog2.show({
        type: 'click',
        clientX: $event.clientX,
        clientY: $event.clientY,
      })
    "
    class="p-10  border-dashed border bg-slate-700 mr-5"> Right Click anywhere inside this Box.  </button>
   &lt;- Right Click on the box to see example 
  <BravePositionDialog
    :offset="0"
    ref="positionDialog2"
    class="rounded-lg bg-white dark:bg-slate-900 inline-block dark:text-white mx-5 shadow-2xl border z-10"
  >
    <div
      class="w-44 dark:bg-slate-900 border dark:border-slate-800 py-2 rounded-lg shadow-lg dark:text-slate-300 bg-white"
    >
      <div
        class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
      >
        <i class="bi mr-2 text-xl bi-delete"></i> Delete
      </div>
      <div
        class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
      >
        <i class="bi mr-2 text-xl bi-duplicate"></i> Duplicate
      </div>
      <div
        class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
      >
        <i class="bi mr-2 text-xl bi-move"></i> Move to Other
      </div>
    </div>
  </BravePositionDialog>
</template>
<script>
import { BravePositionDialog } from "bravevue";
export default {
  components: { BravePositionDialog },
};
</script>
`}} </template>
                </BrTaSyntaxHighlighter>
      </template>
</BraveTabs>

      <BraveTabs ref="bravetabref2" 
        class="text-black dark:text-white my-10"
        tabs-content-class="border  p-4 dark:bg-slate-800"
        tab-button-class="cursor-pointer rounded-t-lg mr-0 dark:bg-slate-900 bg-gray-50 hover:dark:bg-slate-800 hover:bg-gray-200"
        tab-button-active-class="shadow-inner-sm -mb-px border rounded-t-lg border-b-0 dark:bg-slate-800 bg-white "
        v-bind:tabs="['upload','filemanager']" 
        initialTab="upload">
      <!-- ================================================================ -->
      <!-- SETTINGS PANEL  -->
      <!-- ================================================================ -->
      <template #tab-head-upload>Show Dialog on Click</template>
      <template #tab-panel-upload>
        
        <PositionDialogExampleOnClick/>
      </template>


      <!-- ================================================================ -->
      <!-- SETTINGS PANEL  -->
      <!-- ================================================================ -->

      <template #tab-head-filemanager>Code</template>
      <template #tab-panel-filemanager>
    
      <BrTaSyntaxHighlighter language="javascript">
                    <template #title>PositionDialog.vue</template>
                    <template #code>{{`<template>
  <button
    type="button"
    @click.stop="$refs.bravedialog.show($event)"
    class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    <i class="bi me-2 fs-4 bi-window-stack"></i> Open Position Dialog
  </button>
  &lt;- Click here to see example.
  <BravePositionDialog
    ref="bravedialog"
    style="max-width: 500px"
    class="rounded-lg bg-white dark:bg-slate-800 dark:text-white mx-5 lg:w-1/2 shadow-2xl z-10"
  >
    <div class="flex justify-between items-center2">
      <div class="inline-block m-5 my-10">
        <div
          class="h-14 w-14 rounded-full bg-green-200 flex justify-center content-center"
        >
          <i class="bi bi-plus text-green-500 m-auto text-2xl"></i>
        </div>
      </div>
      <div class="my-10">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          You can add your project to your dashboard here.
        </h3>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          doloribus exercitationem dolores sint adipisci, soluta obcaecati
          accusamus,
        </p>
      </div>
      <div class="">
        <button
          @click="$refs.bravedialog.hide()"
          class="m-2 text-2xl hover:text-red-600 hover:scale-150"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
    </div>
  </BravePositionDialog>
</template>
<script>
import { BravePositionDialog } from "bravevue";
export default {
  components: { BravePositionDialog },
};
</script>
`}} </template>
                </BrTaSyntaxHighlighter>
      </template>
</BraveTabs>








    

    <!-- ------------------------------------------------------------------ -->
    <!-- !!! ENDS CENTERED WITH SINGLE ACTION -->
    <!-- ------------------------------------------------------------------ -->
      </div>
      <hr />
    </div>
  </main>
</template>

<script>
import PositionDialogExampleVue from "@/components/uiexamples/PositionDialogExample.vue";
import PositionDialogExampleOnClick from "@/components/uiexamples/PositionDialogExampleOnClick.vue";
import PositionDialogContextMenu from "@/components/uiexamples/PositionDialogContextMenu.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import { BraveGistEmbed,BraveTabs } from "bravevue";
export default {
  components: {  BraveGistEmbed, PositionDialogExampleVue,BraveTabs ,BrTaSyntaxHighlighter,PositionDialogExampleOnClick,PositionDialogContextMenu},  
};
</script>
