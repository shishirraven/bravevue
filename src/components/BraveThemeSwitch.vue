<template>
  <div class="fixed top-0 right-0 m-3">
    <label
      for="default-toggle"
      class="inline-flex relative items-center cursor-pointer"
    >
      <input
        type="checkbox"
        v-model="themeMode"
        value=""
        id="default-toggle"
        class="sr-only peer"
      />
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Light</span
      >
      <div
        class="
          px-1
          ml-2
          w-13
          text-sm
          h-6
          flex
          justify-between
          items-center
          bg-blue-400
          peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
          dark:peer-focus:ring-zinc-800
          rounded-full
          peer
          dark:bg-gray-700
          relative
          peer-checked:after:left-6
          after:transition-all
          peer-checked:after:border-white
          after:content-['']
          after:absolute
          after:top-[2px]
          after:left-[2px]
          after:bg-white
          after:border-gray-300
          after:border
          after:rounded-full
          after:h-5
          after:w-5
          after:transition-all
          dark:border-gray-600
          peer-checked:bg-zinc-600
        "
      >
        <div>🌞</div>
        <div>🌙</div>
      </div>
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Dark</span
      >
    </label>
  </div>
</template>
<script>
import { BraveDropMenu } from 'bravevue';
export default {
  components: { BraveDropMenu },
  created() {
    this.applyByStorage();
  },
  data() {
    return {
      themeMode: true,
    };
  },
  watch: {
    themeMode(val) {
      if (val == true) {
        return this.switchToDark(true);
      } else {
        return this.switchToLight(true);
      }
    },
  },
  methods: {
    switchToLight(updateStore) {
      if (updateStore != undefined && updateStore) {
        localStorage.theme = 'light';
      }
      this.iconClass = 'bi bi-brightness-high-fill text-blue-500';
      this.mode = 'light';
      document.documentElement.classList.remove('dark');
    },
    switchToDark(updateStore) {
      if (updateStore != undefined && updateStore) {
        localStorage.theme = 'dark';
      }
      this.mode = 'dark';
      this.iconClass = 'bi bi-moon-stars-fill text-yellow-500';
      document.documentElement.classList.add('dark');
    },
    switchToSystem() {
      localStorage.removeItem('theme');
      this.iconClass = 'bi bi-display text-grey-300';
      this.applyByStorage();
      this.mode = 'system';
    },
    applyByStorage() {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        this.switchToDark(false);
        this.themeMode = true;
      } else {
        this.switchToLight(false);
        this.themeMode = false;
      }
      if (!('theme' in localStorage)) {
        this.mode = 'system';
      }
    },
  },
};
</script>
