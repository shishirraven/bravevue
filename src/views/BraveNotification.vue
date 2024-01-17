<template>
  <main class="flex-1 p-4 lg:p-10 lg:pt-16">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1 id="introduction"><i class="bi bi-bell"></i> Brave Notification</h1>

  <p>
    The Brave Notification component is a Vue.js notification component with customizable appearance and animations.
    It provides a sleek and user-friendly way to display growl notifications with an optional progress bar indicating the remaining time for the notification to disappear.
  </p>

  <h2>Usage</h2>
  <p>
    To use the Brave Notification component, import it into your Vue.js project and include it in your template. Customize the appearance, corner position, and display time as needed.
  </p>
  <pre><code>
    &lt;brave-growl display-time="2000" corner="top-right"&gt;
      &lt;div&gt;Your notification message&lt;/div&gt;
    &lt;/brave-growl&gt;
  </code></pre>

  <h2>Props</h2>
  <ul>
    <li><code>display-time</code> (Number): Time in milliseconds for how long the notification should be displayed.</li>
    <li><code>corner</code> (String): Corner position for the notification (e.g., "top-left", "top-right", "bottom-left", "bottom-right").</li>
  </ul>

  <h2>Methods</h2>
  <ul>
    <li><code>show()</code>: Manually triggers the display of the growl notification.</li>
    <li><code>close()</code>: Closes the growl notification.</li>
  </ul>

  <h2>Animations</h2>
  <p>
    The component features slide-in and slide-out animations based on the specified corner. If the location is top-left or top-right, it uses slide up for entry and slide down for exit. If the location is bottom-left or bottom-right, it uses slide down for entry and slide up for exit.
  </p>

  <h2>Progress Bar</h2>
  <p>
    The component includes a progress bar at the bottom, indicating the time left for the notification to automatically disappear. The progress bar dynamically updates its width as the notification countdown progresses.
  </p>
      <p>You can live edit the following code. </p>
      <div class="md:h-96">
        <VueLive
          :layout="CustomLayout"
          :editorProps="{ lineNumbers: true }"
          :code="BraveNoificationExample"
          :components="{ BraveNotification }"
          @error="(e) => handleError(e)"
        />
      </div>

      
    </div>
  </main>
</template>
<script>
import { VueLive } from "vue-live";
// import the css separately for easier SSR
import "vue-live/style.css";
import "prismjs/themes/prism-tomorrow.css";
import { markRaw } from "vue";
import CustomLayout from "@/components/VueLiveLayout.vue";
import BraveNoificationExample from "@/components/uiexamples/BraveNoificationExample.vue?raw";
import BraveField from "@/components/uiexamples/BraveField.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import BraveNotification from 'bravevue';
import BrTaTabs from "@/components/brave_tailwind/BrTaTabs.vue";
import { useHead } from "@vueuse/head";
import BraveGist from "./BraveGist.vue";

export default {
  data() {
    return {
      CustomLayout: markRaw(CustomLayout),
      BraveNoificationExample
    };
  },
  mounted() {
    useHead({
      title: "Form Field Component for Vue 3 | Brave Components Library.",
      meta: [
        {
          name: "description",
          content:
            "BraveField allows you to quickly build a HTML form currently it contains fields for text, textarea, select, radio and checkbox.",
        },
        {
          name: "keywords",
          content:
            "Fields Builder,Form Field Compnent, Component, Vue3, BraveVue, Javascript, Radio, Select, Textarea, checkbox ",
        },
        {
          name: "author",
          content: "Shishir Raven",
        },
      ],
    });
  },
  methods: {
    handleError(err) {
      console.log(err);
    },
  },
  components: {
    VueLive,
    BraveField,
    BrTaSyntaxHighlighter,
    BrTaTabs,
  },
};
</script>
