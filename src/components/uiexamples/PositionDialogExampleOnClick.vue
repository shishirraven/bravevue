<template>
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
    class="rounded-lg bg-white dark:bg-slate-800 dark:text-white mx-5 lg:w-1/2 shadow-2xl z-10 border"
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
