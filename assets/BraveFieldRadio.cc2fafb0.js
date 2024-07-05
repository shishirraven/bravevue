import{_ as d,m as u,u as c,D as p,e as v,f as b,g as h,c as m,d as e,b as i,C as f,i as s,h as y,r as _,o as g}from"./index.340b03a8.js";const x=`<template>
  <div class="flex h-full flex-col">
    <div class="grow overflow-auto p-5">
      <h2 class="text-md mb-1">Select with Object</h2>
      <BraveField
        type="radio"
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
        type="radio"
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
<\/script>`,S=`<template>
  <div class="flex h-full flex-col">
    <div class="grow overflow-auto p-5">
      <h2 class="text-md mb-1">Select with Object</h2>
      <BraveField
        type="radio"
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
<\/script>`,w=`<template>
    <div class="flex h-full flex-col">
      <div class="grow overflow-auto p-5">
        <h2 class="text-md mb-1">Select with Object</h2>
        <BraveField
          type="radio"
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
  <\/script>`,F=`<template>
    <div class="flex h-full flex-col">
      <div class="grow overflow-auto p-5">
        <h2 class="text-md mb-1">Select with Object</h2>
        <BraveField
          type="radio"
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
  <\/script>`,j={data(){return{CustomLayout:u(f),codeSfcRadioSimpleArray:x,codeSfcRadioValueLabel:B,codeSfcRadioArrayOfObjects:S,codeSfcRadioArrayOfObjectsSingleValue:w,codeSfcRadioChooseValueAndLabelAttribute:F}},mounted(){c({title:"Form Field Component for Vue 3 | Brave Components Library.",meta:[{name:"description",content:"BraveField allows you to quickly build a HTML form currently it contains fields for text, textarea, select, radio and checkbox."},{name:"keywords",content:"Fields Builder,Form Field Compnent, Component, Vue3, BraveVue, Javascript, Radio, Select, Textarea, checkbox "},{name:"author",content:"Shishir Raven"}]})},methods:{handleError(l){console.log(l)}},components:{VueLive:p,BraveField:v,BrTaSyntaxHighlighter:b,BrTaTabs:h}},V={class:"flex-1 p-4 lg:p-10 lg:pt-16"},L={class:"prose prose-slate max-w-none dark:prose-invert"},R=e("h1",{id:"introduction"},[e("i",{class:"bi bi-ui-radios"}),s(" Radio")],-1),A=e("p",null," Uses native radio. You can build by passing options in following 3 Ways. ",-1),O=e("ol",null,[e("li",null,"Array of strings"),e("li",null,"Value / Label object"),e("li",null,"Array of objects")],-1),C=e("h2",null,"Array of strings",-1),T=e("p",null,"You can live edit the following code. ",-1),E={class:"md:h-96"},P=e("h2",null,"Value / Label object",-1),N={class:"md:h-96"},D=e("h2",null,"Array of Objects",-1),k={class:"md:h-96"},M=e("h3",null,"Array of Objects : How to return one value from the object",-1),I=e("p",null,[e("code",null,"option-value"),s(" is used to specify which attribute of the object to return as the value. ")],-1),G={class:"md:h-96"},H=e("p",null," Note: if option-value is not specified then the entire object is returned. ",-1),J=e("h3",null,"Select Label and Value Attribute",-1),U=e("p",null,[e("code",null,"option-value"),s(" is used to specify which attribute of the object to return as the value. ")],-1),Y=e("p",null,[e("code",null,"option-label"),s(" is used to specify which attribute of the object to return as the label. ")],-1),q={class:"md:h-96"},W=y("<p> Note: if option-value is not specified then the entire object is returned. </p><h2>Props</h2><ul><li><strong>modelValue</strong>: The value of the selected radio button. This can be a string or object. <ul><li>Type: String, Object</li><li>Default: &#39;&#39;</li></ul></li><li><strong>options</strong>: The list of options to be rendered as radio buttons. <ul><li>Type: Array, Object</li><li>Default: []</li></ul></li><li><strong>optionLabel</strong>: The name of the option property used for the radio button label. <ul><li>Type: String</li><li>Default: &#39;label&#39;</li></ul></li><li><strong>optionValue</strong>: The name of the option property used for the radio button value. <ul><li>Type: String</li><li>Default: null</li></ul></li></ul>",3);function z(l,n,K,Q,o,a){const r=_("VueLive");return g(),m("main",V,[e("div",L,[R,A,O,C,T,e("div",E,[i(r,{layout:o.CustomLayout,editorProps:{lineNumbers:!0},code:o.codeSfcRadioSimpleArray,components:{BraveField:l.BraveField},onError:n[0]||(n[0]=t=>a.handleError(t))},null,8,["layout","code","components"])]),P,e("div",N,[i(r,{layout:o.CustomLayout,editorProps:{lineNumbers:!0},code:o.codeSfcRadioValueLabel,components:{BraveField:l.BraveField},onError:n[1]||(n[1]=t=>a.handleError(t))},null,8,["layout","code","components"])]),D,e("div",k,[i(r,{layout:o.CustomLayout,editorProps:{lineNumbers:!0},code:o.codeSfcRadioArrayOfObjects,components:{BraveField:l.BraveField},onError:n[2]||(n[2]=t=>a.handleError(t))},null,8,["layout","code","components"])]),M,I,e("div",G,[i(r,{layout:o.CustomLayout,editorProps:{lineNumbers:!0},code:o.codeSfcRadioArrayOfObjectsSingleValue,components:{BraveField:l.BraveField},onError:n[3]||(n[3]=t=>a.handleError(t))},null,8,["layout","code","components"])]),H,J,U,Y,e("div",q,[i(r,{layout:o.CustomLayout,editorProps:{lineNumbers:!0},code:o.codeSfcRadioChooseValueAndLabelAttribute,components:{BraveField:l.BraveField},onError:n[4]||(n[4]=t=>a.handleError(t))},null,8,["layout","code","components"])]),W])])}const Z=d(j,[["render",z]]);export{Z as default};
