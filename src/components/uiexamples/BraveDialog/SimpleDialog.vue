<template>
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
