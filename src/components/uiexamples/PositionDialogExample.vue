<template>
  <button
    type="button"
    @mouseover.stop="
      $refs.positionDialog2.show({
        type: 'click',
        clientX: $event.clientX,
        clientY: $event.clientY,
      })
    "
    @mouseleave="$refs.positionDialog2.hide()"
    class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    <i
      class="bi me-2 fs-4 bi-info-circle text-xl m-0 p-0 leading-none block"
    ></i>
  </button>
  &lt;- Hover on this Icon to see example.
  <BravePositionDialog
    ref="positionDialog2"
    style="max-width: 300px"
    class="rounded-lg bg-white dark:bg-slate-900 dark:text-white mx-5 max-w-xs shadow-2xl border z-10"
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
