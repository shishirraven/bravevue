<template>
  <p class="mb-10">Please swipeUp or drag Up with Mouse to see effect.</p>
  <div
    :style="swipeStyle"
    class="z-40 border p-10 transition-all dark:bg-slate-600"
    v-swipe-up="swipeup"
  >
    {{ swipeStatus }}
  </div>
</template>
<script>
import { SwipeUp } from "bravevue";
export default {
  data() {
    return {
      swipeStatus: "Swipe Up Here to see the result",
      swipeStyle: {},
    };
  },
  directives: {
    "swipe-up": SwipeUp,
  },
  methods: {
    swipeup() {
      this.swipeStatus = "Swiped Up 👍";
      this.swipeStyle = {
        shadow: "shadow-2xl",
        marginTop: "-10px",
      };
      setTimeout(() => {
        this.swipeStatus = "Swipe Up Here to see the result";
        this.swipeStyle = {};
      }, 1200);
    },
  },
};
</script>
