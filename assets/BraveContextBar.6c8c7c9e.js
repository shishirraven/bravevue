import{_ as a,m as d,u as l,D as p,e as h,f as u,g as b,c as v,d as t,b as m,C as x,i as g,h as f,r as B,o as j}from"./index.c2747784.js";const r=`<template>
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
<\/script>
`;console.log(r,"codeSfcBraveContextBar");const C={data(){return{CustomLayout:d(x),codeSfcBraveContextBar:r}},mounted(){l({title:"Brave Context Bar.",meta:[{name:"description",content:"BraveField allows you to quickly build a HTML form currently it contains fields for text, textarea, select, CheckboxGroup and checkbox."},{name:"keywords",content:"Fields Builder,Form Field Compnent, Component, Vue3, BraveVue, Javascript, CheckboxGroup, Select, Textarea, checkbox "},{name:"author",content:"Shishir Raven"}]})},methods:{handleError(e){console.log(e)}},components:{VueLive:p,BraveField:h,BrTaSyntaxHighlighter:u,BrTaTabs:b}},w={class:"flex-1 p-4 lg:p-10 lg:pt-16"},y={class:"prose prose-slate max-w-none dark:prose-invert"},_=t("h1",{id:"introduction"},[t("i",{class:"bi bi-ui-checks"}),g(" Brave Context Bar")],-1),O=t("p",null,"The Vue Context Bar Component is a component that provides a context bar, which is a bar related to the object which is selected on the page just above to object or below the object if there is no space available at the top.",-1),T=t("h2",null,"Live Example",-1),k=t("p",null,"You can live edit the following code. ",-1),V={class:"md:h-96"},S=f(`<h2>Installation</h2><p>You can install the Vue Context Bar Component using npm:</p><pre><code>npm install bravevue --save</code></pre><h2>Usage</h2><p>To use the Vue Context Bar Component in your VueJS project, first import the component:</p><pre><code> import { BraveContextBar } from &quot;bravevue&quot;;</code></pre><p>Then, register the component in your VueJS application:</p><pre><code>export default {
components: {
  BraveContextBar,
},
};</code></pre><p>Finally, use the component in your VueJS application:</p><pre><code>&lt;brave-context-bar
:positionTop=&quot;&#39;50&#39;&quot;
:positionLeft=&quot;&#39;10&#39;&quot;
:contextObWidth=&quot;&#39;200&#39;&quot;
:contextObHeight=&quot;&#39;50&#39;&quot;
:spaceBetween=&quot;&#39;10&#39;&quot;
&gt;
&lt;p&gt;This is the content of the context bar.&lt;/p&gt;
&lt;/brave-context-bar&gt;</code></pre><h2>Props</h2><p>The Vue Context Bar Component accepts the following props:</p><table><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>positionTop</td><td>String</td><td>&#39;50&#39;</td><td>The top position of the object.</td></tr><tr><td>positionLeft</td><td>String</td><td>&#39;10&#39;</td><td>The left position of the object.</td></tr><tr><td>contextObWidth</td><td>String</td><td>&#39;200&#39;</td><td>The width of the object.</td></tr><tr><td>contextObHeight</td><td>String</td><td>&#39;50&#39;</td><td>The height of the object.</td></tr><tr><td>spaceBetween</td><td>String</td><td>&#39;10&#39;</td><td>The space between the context bar and the object.</td></tr></tbody></table><h2>Slots</h2><p>The Vue Context Bar Component provides one default slot where you can add your content.</p>`,15);function L(e,o,P,q,n,i){const c=B("VueLive");return j(),v("main",w,[t("div",y,[_,O,T,k,t("div",V,[m(c,{layout:n.CustomLayout,editorProps:{lineNumbers:!0},code:n.codeSfcBraveContextBar,components:{BraveContextBar:e.BraveContextBar,BraveDraggable:e.BraveDraggable},onError:o[0]||(o[0]=s=>i.handleError(s))},null,8,["layout","code","components"])]),S])])}const D=a(C,[["render",L]]);export{D as default};
