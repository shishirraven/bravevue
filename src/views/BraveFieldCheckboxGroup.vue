<template>
  <main class="flex-1 p-4 lg:p-10 lg:pt-16">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1 id="introduction"><i class="bi bi-ui-checks"></i> Checkbox Group</h1>

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
          :code="codeSfcCheckboxGroupSimpleArray"
          :components="{ BraveField }"
          @error="(e) => handleError(e)"
        />
      </div>

      <h2>Value / Label object</h2>

      <div class="md:h-96">
        <VueLive
          :layout="CustomLayout"
          :editorProps="{ lineNumbers: true }"
          :code="codeSfcCheckboxGroupValueLabel"
          :components="{ BraveField }"
          @error="(e) => handleError(e)"
        />
      </div>

      <h2>Array of Objects</h2>

      <div class="md:h-96">
        <VueLive
          :layout="CustomLayout"
          :editorProps="{ lineNumbers: true }"
          :code="codeSfcCheckboxGroupArrayOfObjects"
          :components="{ BraveField }"
          @error="(e) => handleError(e)"
        />
      </div>
      <h3>Array of Objects : How to return one value from the object</h3>

      <p>
        <code>option-value</code> is used to specify which attribute of the
        object to return as the value.
      </p>

      <div class="md:h-96">
        <VueLive
          :layout="CustomLayout"
          :editorProps="{ lineNumbers: true }"
          :code="codeSfcCheckboxGroupArrayOfObjectsSingleValue"
          :components="{ BraveField }"
          @error="(e) => handleError(e)"
        />
      </div>

      <p>
        Note: if option-value is not specified then the entire object is
        returned.
      </p>

      <h3>Select Label and Value Attribute</h3>

      <p>
        <code>option-value</code> is used to specify which attribute of the
        object to return as the value.
      </p>
      <p>
        <code>option-label</code> is used to specify which attribute of the
        object to return as the label.
      </p>

      <div class="md:h-96">
        <VueLive
          :layout="CustomLayout"
          :editorProps="{ lineNumbers: true }"
          :code="codeSfcCheckboxGroupChooseValueAndLabelAttribute"
          :components="{ BraveField }"
          @error="(e) => handleError(e)"
        />
      </div>

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
import codeSfcCheckboxGroupSimpleArray from "@/components/uiexamples/BraveField/BraveCheckboxGroupSimpleArray.vue?raw";
import codeSfcCheckboxGroupValueLabel from "@/components/uiexamples/BraveField/BraveCheckboxGroupValueLabel.vue?raw";
import codeSfcCheckboxGroupArrayOfObjects from "@/components/uiexamples/BraveField/BraveCheckboxGroupArrayOfObjects.vue?raw";
import codeSfcCheckboxGroupArrayOfObjectsSingleValue from "@/components/uiexamples/BraveField/BraveCheckboxGroupArrayOfObjectsSelectSingleValue.vue?raw";
import codeSfcCheckboxGroupChooseValueAndLabelAttribute from "@/components/uiexamples/BraveField/BraveCheckboxGroupChooseValueAndLabelAttribute.vue?raw";
import BraveField from "@/components/uiexamples/BraveField.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import BrTaTabs from "@/components/brave_tailwind/BrTaTabs.vue";
import { useHead } from "@vueuse/head";

export default {
  data() {
    return {
      CustomLayout: markRaw(CustomLayout),
      codeSfcCheckboxGroupSimpleArray,
      codeSfcCheckboxGroupValueLabel,
      codeSfcCheckboxGroupArrayOfObjects,
      codeSfcCheckboxGroupArrayOfObjectsSingleValue,
      codeSfcCheckboxGroupChooseValueAndLabelAttribute,
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
