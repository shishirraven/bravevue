<template>
  <div style="position: relative;" class="p-7">
    <div
      
      ref="object1"
      style="width: 200px; height: 50px; background-color: #ccc;"
      @click="selectedObject = 'object1'"
    >
      <p style="padding: 20px;">Object 1 - Click me</p>
    </div>

    <div
      ref="object2"
      style="width: 200px; height: 50px; background-color: #ccc; margin-top: 50px;"
      @click="selectedObject = 'object2'"
    >
      <p style="padding: 20px;">Object 2 - click me</p>
    </div>

    <brave-context-bar
      v-if="selectedObject"
      :position-top="objectPosition.top"
      :position-left="objectPosition.left"
      context-ob-width="200"
      context-ob-height="50"
      space-between="10"
      style="z-index: 10000;"
      class="shadow-lg border bg-white p-5 rounded-lg"
    >
      <div >
        {{ selectedObject }} is selected
      </div>
    </brave-context-bar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selectedObject: null,
      objectPosition: {
        top: null,
        left: null,
      },
    };
  },
  mounted() {
    // on page scroll or resize, get the position of the selected object
    window.addEventListener('scroll', this.getObjectPosition);
    window.addEventListener('resize', this.getObjectPosition);
  },
  beforeDestroy() {
    // remove the event listeners
    window.removeEventListener('scroll', this.getObjectPosition);
    window.removeEventListener('resize', this.getObjectPosition);
  },
  methods: {
    getObjectPosition() {
      const selectedObject = this.$refs[this.selectedObject];
      const rect = selectedObject.getBoundingClientRect();

      this.objectPosition.top = rect.top ;
      this.objectPosition.left = rect.left ;
    },
  },
  watch: {
    selectedObject() {
      this.getObjectPosition();
    },
  },
};
</script>
