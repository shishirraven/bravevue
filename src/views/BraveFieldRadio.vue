<template>
  <main class="flex-1 p-4 lg:p-10 lg:pt-16">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1 id="introduction"><i class="bi bi-ui-radios"></i> Radio</h1>

      <p>
        Uses native radio. You can build by passing options in following 3 Ways.
      </p>
      <ol>
        <li>Array of strings</li>
        <li>Value / Label object</li>
        <li>Array of objects</li>
      </ol>

      <h2>Array of strings</h2>

      <div class="md:h-96">
        <VueLive
          :layout="CustomLayout"
          :editorProps="{ lineNumbers: true }"
          :code="codeSfcRadioSimpleArray"
          :components="{ BraveField }"
          @error="(e) => handleError(e)"
        />
      </div>

      <h2>Value / Label object</h2>

      <div class="md:h-96">
        <VueLive
          :layout="CustomLayout"
          :editorProps="{ lineNumbers: true }"
          :code="codeSfcRadioValueLabel"
          :components="{ BraveField }"
          @error="(e) => handleError(e)"
        />
      </div>

      <h2>Array of Objects</h2>

      <div class="md:h-96">
        <VueLive
          :layout="CustomLayout"
          :editorProps="{ lineNumbers: true }"
          :code="codeSfcRadioArrayOfObjects"
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
          :code="codeSfcRadioArrayOfObjectsSingleValue"
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
          :code="codeSfcRadioChooseValueAndLabelAttribute"
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
          <strong>modelValue</strong>: The value of the selected radio button.
          This can be a string or object.
          <ul>
            <li>Type: String, Object</li>
            <li>Default: ''</li>
          </ul>
        </li>
        <li>
          <strong>options</strong>: The list of options to be rendered as radio
          buttons.
          <ul>
            <li>Type: Array, Object</li>
            <li>Default: []</li>
          </ul>
        </li>
        <li>
          <strong>optionLabel</strong>: The name of the option property used for
          the radio button label.
          <ul>
            <li>Type: String</li>
            <li>Default: 'label'</li>
          </ul>
        </li>
        <li>
          <strong>optionValue</strong>: The name of the option property used for
          the radio button value.
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
import codeSfcRadioSimpleArray from "@/components/uiexamples/BraveField/BraveRadioSimpleArray.vue?raw";
import codeSfcRadioValueLabel from "@/components/uiexamples/BraveField/BraveRadioValueLabel.vue?raw";
import codeSfcRadioArrayOfObjects from "@/components/uiexamples/BraveField/BraveRadioArrayOfObjects.vue?raw";
import codeSfcRadioArrayOfObjectsSingleValue from "@/components/uiexamples/BraveField/BraveRadioArrayOfObjectsSelectSingleValue.vue?raw";
import codeSfcRadioChooseValueAndLabelAttribute from "@/components/uiexamples/BraveField/BraveRadioChooseValueAndLabelAttribute.vue?raw";
import BraveField from "@/components/uiexamples/BraveField.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import BrTaTabs from "@/components/brave_tailwind/BrTaTabs.vue";
import { useHead } from "@vueuse/head";

export default {
  data() {
    return {
      CustomLayout: markRaw(CustomLayout),
      codeSfcRadioSimpleArray,
      codeSfcRadioValueLabel,
      codeSfcRadioArrayOfObjects,
      codeSfcRadioArrayOfObjectsSingleValue,
      codeSfcRadioChooseValueAndLabelAttribute,
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
