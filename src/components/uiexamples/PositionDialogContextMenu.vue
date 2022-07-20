<template>
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
