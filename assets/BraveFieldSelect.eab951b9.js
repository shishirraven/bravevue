import{_ as u,m as c,u as d,D as p,e as v,f as m,g as h,c as b,d as e,b as s,C as f,i,h as y,r as S,o as g}from"./index.068162cb.js";const _=`<template>
  <div class="flex h-full flex-col">
    <div class="grow overflow-auto p-5">
      <h2 class="text-md mb-1">Select with Object</h2>
      <BraveField
        type="select"
        :options="[
          'Mercury',
          'Venus',
          'Earth',
          'Mars',
          'Jupiter',
          'Saturn',
          'Uranus',
          'Neptune',
        ]"
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
      value: "Mercury",
    };
  },
};
<\/script>`,B=`<template>
  <div class="flex h-full flex-col">
    <div class="grow overflow-auto p-5">
      <h2 class="text-md mb-1">Select with Object</h2>
      <BraveField
        type="select"
        :options="{
          mercury: 'Mercury',
          venus: 'Venus',
          earth: 'Earth',
          mars: 'Mars',
          jupiter: 'Jupiter',
          saturn: 'Saturn',
          uranus: 'Uranus',
          neptune: 'Neptune',
        }"
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
      value: "mercury",
    };
  },
};
<\/script>`,w=`<template>
  <div class="flex h-full flex-col">
    <div class="grow overflow-auto p-5">
      <h2 class="text-md mb-1">Select with Object</h2>
      <BraveField
        type="select"
        :options="[
          { label: 'India', value: 'in' },
          { label: 'France', value: 'fr' },
          { label: 'Germany', value: 'de' },
          { label: 'Spain', value: 'es' },
          { label: 'Italy', value: 'ie' },
          { label: 'Greece', value: 'gr' },
        ]"
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
      value: { label: 'India', value: 'in' },
    };
  },
};
<\/script>`,x=`<template>
    <div class="flex h-full flex-col">
      <div class="grow overflow-auto p-5">
        <h2 class="text-md mb-1">Select with Object</h2>
        <BraveField
          type="select"
          option-value="value"
          :options="[
            { label: 'India', value: 'in' },
            { label: 'France', value: 'fr' },
            { label: 'Germany', value: 'de' },
            { label: 'Spain', value: 'es' },
            { label: 'Italy', value: 'ie' },
            { label: 'Greece', value: 'gr' },
          ]"
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
        value: "in",
      };
    },
  };
  <\/script>`,j=`<template>
    <div class="flex h-full flex-col">
      <div class="grow overflow-auto p-5">
        <h2 class="text-md mb-1">Select with Object</h2>
        <BraveField
          type="select"
          option-value="code"
          option-label="name"
          :options=" [
              {
                  name: 'Product 1',
                  price: 20.99,
                  brand: 'Brand A',
                  code: 'PRD-001'
              },
              {
                  name: 'Product 2',
                  price: 10.99,
                  brand: 'Brand B',
                  code: 'PRD-002'
              },
              {
                  name: 'Product 3',
                  price: 5.99,
                  brand: 'Brand C',
                  code: 'PRD-003'
              },
              {
                  name: 'Product 4',
                  price: 50.99,
                  brand: 'Brand D',
                  code: 'PRD-004'
              }
          ]"
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
        value: "in",
      };
    },
  };
  <\/script>`,F={data(){return{CustomLayout:c(f),codeSfcSelectSimpleArray:_,codeSfcSelectValueLabel:B,codeSfcSelectArrayOfObjects:w,codeSfcSelectArrayOfObjectsSingleValue:x,codeSfcSelectChooseValueAndLabelAttribute:j}},mounted(){d({title:"Form Field Select Component for Vue 3 | Brave Components Library.",meta:[{name:"description",content:"BraveField type select allows you to build a select field with options from an array of strings or an array of objects."},{name:"keywords",content:"vue3, vue3 components, vue3 form, vue3 form field, vue3 select, vue3 select field, vue3 select component, vue3 select field component, vue3"},{name:"author",content:"Shishir Raven"}]})},methods:{handleError(o){console.log(o)}},components:{VueLive:p,BraveField:v,BrTaSyntaxHighlighter:m,BrTaTabs:h}},V={class:"flex-1 p-4 lg:p-10 lg:pt-16"},L={class:"prose prose-slate max-w-none dark:prose-invert"},A=e("h1",{id:"introduction"},[e("i",{class:"bi bi-menu-button-wide"}),i(" Select Native")],-1),O=e("p",null," Uses native select. You can build by passing options in following 3 Ways. ",-1),C=e("ol",null,[e("li",null,"Array of strings"),e("li",null,"Value / Label object"),e("li",null,"Array of objects")],-1),E=e("h2",null,"Array of strings",-1),N=e("p",null,"You can live edit the following code. ",-1),P={class:"md:h-96"},T=e("h2",null,"Value / Label object",-1),D={class:"md:h-96"},R=e("h2",null,"Array of Objects",-1),k={class:"md:h-96"},I=e("h3",null,"Array of Objects : How to return one value from the object",-1),M=e("p",null,[e("code",null,"option-value"),i(" is used to specify which attribute of the object to return as the value. ")],-1),G={class:"md:h-96"},H=e("p",null," Note: if option-value is not specified then the entire object is returned. ",-1),U=e("h3",null,"Select Label and Value Attribute",-1),J=e("p",null,[e("code",null,"option-value"),i(" is used to specify which attribute of the object to return as the value. ")],-1),Y=e("p",null,[e("code",null,"option-label"),i(" is used to specify which attribute of the object to return as the label. ")],-1),W={class:"md:h-96"},q=y("<p> Note: if option-value is not specified then the entire object is returned. </p><h2>Props</h2><ul><li><strong>modelValue</strong>: The value of the selected Option. This can be a string or object. <ul><li>Type: String, Object</li><li>Default: &#39;&#39;</li></ul></li><li><strong>options</strong>: The list of options to be rendered as select options <ul><li>Type: Array, Object</li><li>Default: []</li></ul></li><li><strong>optionLabel</strong>: The name of the option property used for the select option. <ul><li>Type: String</li><li>Default: &#39;label&#39;</li></ul></li><li><strong>optionValue</strong>: The name of the option property used for the select option value. <ul><li>Type: String</li><li>Default: null</li></ul></li></ul>",3);function z(o,n,K,Q,t,r){const a=S("VueLive");return g(),b("main",V,[e("div",L,[A,O,C,E,N,e("div",P,[s(a,{layout:t.CustomLayout,editorProps:{lineNumbers:!0},code:t.codeSfcSelectSimpleArray,components:{BraveField:o.BraveField},onError:n[0]||(n[0]=l=>r.handleError(l))},null,8,["layout","code","components"])]),T,e("div",D,[s(a,{layout:t.CustomLayout,editorProps:{lineNumbers:!0},code:t.codeSfcSelectValueLabel,components:{BraveField:o.BraveField},onError:n[1]||(n[1]=l=>r.handleError(l))},null,8,["layout","code","components"])]),R,e("div",k,[s(a,{layout:t.CustomLayout,editorProps:{lineNumbers:!0},code:t.codeSfcSelectArrayOfObjects,components:{BraveField:o.BraveField},onError:n[2]||(n[2]=l=>r.handleError(l))},null,8,["layout","code","components"])]),I,M,e("div",G,[s(a,{layout:t.CustomLayout,editorProps:{lineNumbers:!0},code:t.codeSfcSelectArrayOfObjectsSingleValue,components:{BraveField:o.BraveField},onError:n[3]||(n[3]=l=>r.handleError(l))},null,8,["layout","code","components"])]),H,U,J,Y,e("div",W,[s(a,{layout:t.CustomLayout,editorProps:{lineNumbers:!0},code:t.codeSfcSelectChooseValueAndLabelAttribute,components:{BraveField:o.BraveField},onError:n[4]||(n[4]=l=>r.handleError(l))},null,8,["layout","code","components"])]),q])])}const Z=u(F,[["render",z]]);export{Z as default};
