<template>
  <main class="flex-1 p-4 lg:p-10 lg:pt-16">
    <div class="prose prose-slate max-w-none dark:prose-invert">
     
      <h1 id="introduction"><i class="bi bi-ui-checks"></i> Brave Context Bar</h1>

      <p>The Vue Context Bar Component is a component that provides a context bar, which is a bar related to the object which is selected on the page just above to object or below the object if there is no space available at the top.</p>


      <h2>Live Example</h2>

<p>You can live edit the following code. </p>
<div class="md:h-96">
  <VueLive
    :layout="CustomLayout"
    :editorProps="{ lineNumbers: true }"
    :code="codeSfcBraveContextBar"
    :components="{ BraveContextBar, BraveDraggable }"
    @error="(e) => handleError(e)"
  />
</div>

      <h2>Installation</h2>

<p>You can install the Vue Context Bar Component using npm:</p>

<pre><code>npm install bravevue --save</code></pre>

<h2>Usage</h2>

<p>To use the Vue Context Bar Component in your VueJS project, first import the component:</p>

<pre><code> import { BraveContextBar } from "bravevue";</code></pre>

<p>Then, register the component in your VueJS application:</p>

<pre><code>export default {
components: {
  BraveContextBar,
},
};</code></pre>

<p>Finally, use the component in your VueJS application:</p>

<pre><code>&lt;brave-context-bar
:positionTop="'50'"
:positionLeft="'10'"
:contextObWidth="'200'"
:contextObHeight="'50'"
:spaceBetween="'10'"
&gt;
&lt;p&gt;This is the content of the context bar.&lt;/p&gt;
&lt;/brave-context-bar&gt;</code></pre>

<h2>Props</h2>

<p>The Vue Context Bar Component accepts the following props:</p>

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>positionTop</td>
      <td>String</td>
      <td>'50'</td>
      <td>The top position of the object.</td>
    </tr>
    <tr>
      <td>positionLeft</td>
      <td>String</td>
      <td>'10'</td>
      <td>The left position of the object.</td>
    </tr>
    <tr>
      <td>contextObWidth</td>
      <td>String</td>
      <td>'200'</td>
      <td>The width of the object.</td>
    </tr>
    <tr>
      <td>contextObHeight</td>
      <td>String</td>
      <td>'50'</td>
      <td>The height of the object.</td>
    </tr>
    <tr>
      <td>spaceBetween</td>
      <td>String</td>
      <td>'10'</td>
      <td>The space between the context bar and the object.</td>
    </tr>
  </tbody>
</table>

<h2>Slots</h2>

<p>The Vue Context Bar Component provides one default slot where you can add your content.</p>

      



      
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
import codeSfcBraveContextBar from "@/components/uiexamples/codeSfcBraveContextBar.vue?raw";
import codeSfcCheckboxSingle from "@/components/uiexamples/BraveField/BraveCheckboxSingle.vue?raw";
import BraveField from "@/components/uiexamples/BraveField.vue";
import BrTaSyntaxHighlighter from "@/components/BrTaSyntaxHighlighter.vue";
import BrTaTabs from "@/components/brave_tailwind/BrTaTabs.vue";
import { useHead } from "@vueuse/head";

console.log(codeSfcBraveContextBar,"codeSfcBraveContextBar");


export default {
  data() {
    return {
      CustomLayout: markRaw(CustomLayout),
      codeSfcBraveContextBar
    };
  },
  mounted() {
    useHead({
      title: "Brave Context Bar.",
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
