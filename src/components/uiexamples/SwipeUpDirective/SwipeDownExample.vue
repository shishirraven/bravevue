<template>
  <p class="">Please swipeDown or drag Down with Mouse to see effect.</p>
  <div
    :style="swipeStyle"
    class="z-40 border p-10 transition-all dark:bg-slate-600"
    v-swipe-down="swipedown"
  >
    {{ swipeStatus }}
  </div>
</template>
<script>
import { SwipeDown } from "bravevue";
export default {
  data() {
    return {
      swipeStatus: "Swipe Down Here to see the result",
      swipeStyle: {},
    };
  },
  directives: {
    "swipe-down": SwipeDown,
  },
  methods: {
    swipedown() {
      this.swipeStatus = "Swiped Down 👍";
      this.swipeStyle = {
        shadow: "shadow-2xl",
        marginTop: "40px",
      };
      setTimeout(() => {
        this.swipeStatus = "Swipe Down Here to see the result";
        this.swipeStyle = {};
      }, 1200);
    },
  },
};
</script>
