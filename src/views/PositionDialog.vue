<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="flex-1 lg:p-16">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl font-semibold mb-10"><i class="bi me-2 fs-4 bi-window-stack"></i> Position Dialog</h1>
        <p>Show Dialogs at the position where the user clicks.</p>

        <PositionDialogExampleVue/>
    
        <BraveGistEmbed
          class="my-10"
          url="https://gist.github.com/shishirraven/162063a800edb7e3c3020a2b6c8afe4d"
        />

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
import { BraveGistEmbed } from "bravevue";
export default {
  components: {  BraveGistEmbed, PositionDialogExampleVue },
};
</script>
