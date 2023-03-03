<template>
  <main class="flex-1 p-4 lg:p-10 lg:pt-16">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1 id="introduction"><i class="bi bi-ui-checks"></i> Checkbox</h1>

      <p>
        Uses native checkbox. You can build by passing options in following 3 Ways.
      </p>
      <ol>
        <li>Array of strings</li>
        <li>Value / Label object</li>
        <li>Array of objects</li>
      </ol>

      <h2>Array of strings</h2>

      <p>You can live edit the following code. </p>
      <div class="md:h-96">
        <VueLive
          :layout="CustomLayout"
          :editorProps="{ lineNumbers: true }"
          :code="codeSfcCheckboxSingle"
          :components="{ BraveField }"
          @error="(e) => handleError(e)"
        />
      </div>

      <h3>Array of Objects : How to return one value from the object</h3>

      <p>
        Note: if option-value is not specified then the entire object is
        returned.
      </p>

      <h2>Props</h2>
      <ul>
        <li>
          <strong>modelValue</strong>: The value of the selected CheckboxGroup button.
          This can be a string or object.
          <ul>
            <li>Type: String, Object</li>
            <li>Default: ''</li>
          </ul>
        </li>
        <li>
          <strong>options</strong>: The list of options to be rendered as CheckboxGroup
          buttons.
          <ul>
            <li>Type: Array, Object</li>
            <li>Default: []</li>
          </ul>
        </li>
        <li>
          <strong>optionLabel</strong>: The name of the option property used for
          the CheckboxGroup button label.
          <ul>
            <li>Type: String</li>
            <li>Default: 'label'</li>
          </ul>
        </li>
        <li>
          <strong>optionValue</strong>: The name of the option property used for
          the CheckboxGroup button value.
          <ul>
            <li>Type: String</li>
            <li>Default: null</li>
          </ul>
        </li>
      </ul>
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
import codeSfcCheckboxSingle from "@/components/uiexamples/BraveField/BraveCheckboxSingle.vue?raw";
import BraveField from "@/components/uiexamples/BraveField.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import BrTaTabs from "@/components/brave_tailwind/BrTaTabs.vue";
import { useHead } from "@vueuse/head";

export default {
  data() {
    return {
      CustomLayout: markRaw(CustomLayout),
      codeSfcCheckboxSingle
    };
  },
  mounted() {
    useHead({
      title: "Form Field Component for Vue 3 | Brave Components Library.",
      meta: [
        {
          name: "description",
          content:
            "BraveField allows you to quickly build a HTML form currently it contains fields for text, textarea, select, CheckboxGroup and checkbox.",
        },
        {
          name: "keywords",
          content:
            "Fields Builder,Form Field Compnent, Component, Vue3, BraveVue, Javascript, CheckboxGroup, Select, Textarea, checkbox ",
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
