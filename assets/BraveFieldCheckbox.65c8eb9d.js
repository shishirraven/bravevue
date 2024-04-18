import{_ as i,m as a,u,D as c,e as d,f as p,g as h,c as b,d as e,b as f,C as m,i as v,h as g,r as x,o as y}from"./index.5c07aa75.js";const _=`<template>
  <div class="flex h-full flex-col">
    <div class="grow overflow-auto p-5">
      <BraveField
        type="checkbox"
        label="Do you want to Newsletters"
        :true-value="{ newsletter: 'yes' }"
        v-model="value"
      />
    </div>
    <div class="rounded-bl-xl bg-neutral-200 p-5">
      {{ value }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: null,
    };
  },
};
<\/script>
`,k={data(){return{CustomLayout:a(m),codeSfcCheckboxSingle:_}},mounted(){u({title:"Form Field Component for Vue 3 | Brave Components Library.",meta:[{name:"description",content:"BraveField allows you to quickly build a HTML form currently it contains fields for text, textarea, select, CheckboxGroup and checkbox."},{name:"keywords",content:"Fields Builder,Form Field Compnent, Component, Vue3, BraveVue, Javascript, CheckboxGroup, Select, Textarea, checkbox "},{name:"author",content:"Shishir Raven"}]})},methods:{handleError(o){console.log(o)}},components:{VueLive:c,BraveField:d,BrTaSyntaxHighlighter:p,BrTaTabs:h}},C={class:"flex-1 p-4 lg:p-10 lg:pt-16"},T={class:"prose prose-slate max-w-none dark:prose-invert"},B=e("h1",{id:"introduction"},[e("i",{class:"bi bi-ui-checks"}),v(" Checkbox")],-1),V=e("p",null," Uses native checkbox. You can build by passing options in following 3 Ways. ",-1),w=e("ol",null,[e("li",null,"Array of strings"),e("li",null,"Value / Label object"),e("li",null,"Array of objects")],-1),F=e("h2",null,"Array of strings",-1),S=e("p",null,"You can live edit the following code. ",-1),L={class:"md:h-96"},j=g("<h3>Array of Objects : How to return one value from the object</h3><p> Note: if option-value is not specified then the entire object is returned. </p><h2>Props</h2><ul><li><strong>modelValue</strong>: The value of the selected CheckboxGroup button. This can be a string or object. <ul><li>Type: String, Object</li><li>Default: &#39;&#39;</li></ul></li><li><strong>options</strong>: The list of options to be rendered as CheckboxGroup buttons. <ul><li>Type: Array, Object</li><li>Default: []</li></ul></li><li><strong>optionLabel</strong>: The name of the option property used for the CheckboxGroup button label. <ul><li>Type: String</li><li>Default: &#39;label&#39;</li></ul></li><li><strong>optionValue</strong>: The name of the option property used for the CheckboxGroup button value. <ul><li>Type: String</li><li>Default: null</li></ul></li></ul>",4);function D(o,t,N,G,n,l){const r=x("VueLive");return y(),b("main",C,[e("div",T,[B,V,w,F,S,e("div",L,[f(r,{layout:n.CustomLayout,editorProps:{lineNumbers:!0},code:n.codeSfcCheckboxSingle,components:{BraveField:o.BraveField},onError:t[0]||(t[0]=s=>l.handleError(s))},null,8,["layout","code","components"])]),j])])}const E=i(k,[["render",D]]);export{E as default};
