<template>
  <button
    @click="$refs.bravedialog.show()"
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
      Confirm Dialog Demo
    </span>
  </button>

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
