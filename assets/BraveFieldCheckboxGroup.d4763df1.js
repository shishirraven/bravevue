import{D as i,C as c}from"./VueLiveLayout.280eb2a5.js";import{B as d}from"./BraveField.3e2bbb0f.js";import{_ as p,m as b,u as h,e as v,f as m,c as f,d as e,b as s,h as u,g as y,r as x,o as _}from"./index.940d2670.js";const g=`<template>
  <div class="flex h-full flex-col">
    <div class="grow overflow-auto p-5">
      <h2 class="text-md mb-1">Select with Object</h2>
      <BraveField
        type="checkboxGroup"
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
      value: ["Mercury"],
    };
  },
};
<\/script>`,C=`<template>
  <div class="flex h-full flex-col">
    <div class="grow overflow-auto p-5">
      <h2 class="text-md mb-1">Select with Object</h2>
      <BraveField
        type="checkboxGroup"
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
      value: ["mercury"],
    };
  },
};
<\/script>`,k=`<template>
  <div class="flex h-full flex-col">
    <div class="grow overflow-auto p-5">
      <h2 class="text-md mb-1">Select with Object</h2>
      <BraveField
        type="checkboxGroup"
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
      value: [{ label: 'India', value: 'in' }],
    };
  },
};
<\/script>`,B=`<template>
    <div class="flex h-full flex-col">
      <div class="grow overflow-auto p-5">
        <h2 class="text-md mb-1">Select with Object</h2>
        <BraveField
          type="checkboxGroup"
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
        value: ["in"],
      };
    },
  };
  <\/script>`,S=`<template>
    <div class="flex h-full flex-col">
      <div class="grow overflow-auto p-5">
        <h2 class="text-md mb-1">Select with Object</h2>
        <BraveField
          type="checkboxGroup"
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
        value: ["in"],
      };
    },
  };
  <\/script>`,G={data(){return{CustomLayout:b(c),codeSfcCheckboxGroupSimpleArray:g,codeSfcCheckboxGroupValueLabel:C,codeSfcCheckboxGroupArrayOfObjects:k,codeSfcCheckboxGroupArrayOfObjectsSingleValue:B,codeSfcCheckboxGroupChooseValueAndLabelAttribute:S}},mounted(){h({title:"Form Field Component for Vue 3 | Brave Components Library.",meta:[{name:"description",content:"BraveField allows you to quickly build a HTML form currently it contains fields for text, textarea, select, CheckboxGroup and checkbox."},{name:"keywords",content:"Fields Builder,Form Field Compnent, Component, Vue3, BraveVue, Javascript, CheckboxGroup, Select, Textarea, checkbox "},{name:"author",content:"Shishir Raven"}]})},methods:{handleError(l){console.log(l)}},components:{VueLive:i,BraveField:d,BrTaSyntaxHighlighter:v,BrTaTabs:m}},w={class:"flex-1 p-4 lg:p-10 lg:pt-16"},F={class:"prose prose-slate max-w-none dark:prose-invert"},j=e("h1",{id:"introduction"},[e("i",{class:"bi bi-ui-checks"}),u(" Checkbox Group")],-1),V=e("p",null," Uses native checkbox. You can build by passing options in following 3 Ways. ",-1),L=e("ol",null,[e("li",null,"Array of strings"),e("li",null,"Value / Label object"),e("li",null,"Array of objects")],-1),A=e("h2",null,"Array of strings",-1),O=e("p",null,"You can live edit the following code. ",-1),T={class:"md:h-96"},E=e("h2",null,"Value / Label object",-1),P={class:"md:h-96"},N=e("h2",null,"Array of Objects",-1),D={class:"md:h-96"},M=e("h3",null,"Array of Objects : How to return one value from the object",-1),R=e("p",null,[e("code",null,"option-value"),u(" is used to specify which attribute of the object to return as the value. ")],-1),I={class:"md:h-96"},H=e("p",null," Note: if option-value is not specified then the entire object is returned. ",-1),J=e("h3",null,"Select Label and Value Attribute",-1),U=e("p",null,[e("code",null,"option-value"),u(" is used to specify which attribute of the object to return as the value. ")],-1),Y=e("p",null,[e("code",null,"option-label"),u(" is used to specify which attribute of the object to return as the label. ")],-1),q={class:"md:h-96"},W=y("<p> Note: if option-value is not specified then the entire object is returned. </p><h2>Props</h2><ul><li><strong>modelValue</strong>: The value of the selected CheckboxGroup button. This can be a string or object. <ul><li>Type: String, Object</li><li>Default: &#39;&#39;</li></ul></li><li><strong>options</strong>: The list of options to be rendered as CheckboxGroup buttons. <ul><li>Type: Array, Object</li><li>Default: []</li></ul></li><li><strong>optionLabel</strong>: The name of the option property used for the CheckboxGroup button label. <ul><li>Type: String</li><li>Default: &#39;label&#39;</li></ul></li><li><strong>optionValue</strong>: The name of the option property used for the CheckboxGroup button value. <ul><li>Type: String</li><li>Default: null</li></ul></li></ul>",3);function z(l,n,K,Q,o,r){const a=x("VueLive");return _(),f("main",w,[e("div",F,[j,V,L,A,O,e("div",T,[s(a,{layout:o.CustomLayout,editorProps:{lineNumbers:!0},code:o.codeSfcCheckboxGroupSimpleArray,components:{BraveField:l.BraveField},onError:n[0]||(n[0]=t=>r.handleError(t))},null,8,["layout","code","components"])]),E,e("div",P,[s(a,{layout:o.CustomLayout,editorProps:{lineNumbers:!0},code:o.codeSfcCheckboxGroupValueLabel,components:{BraveField:l.BraveField},onError:n[1]||(n[1]=t=>r.handleError(t))},null,8,["layout","code","components"])]),N,e("div",D,[s(a,{layout:o.CustomLayout,editorProps:{lineNumbers:!0},code:o.codeSfcCheckboxGroupArrayOfObjects,components:{BraveField:l.BraveField},onError:n[2]||(n[2]=t=>r.handleError(t))},null,8,["layout","code","components"])]),M,R,e("div",I,[s(a,{layout:o.CustomLayout,editorProps:{lineNumbers:!0},code:o.codeSfcCheckboxGroupArrayOfObjectsSingleValue,components:{BraveField:l.BraveField},onError:n[3]||(n[3]=t=>r.handleError(t))},null,8,["layout","code","components"])]),H,J,U,Y,e("div",q,[s(a,{layout:o.CustomLayout,editorProps:{lineNumbers:!0},code:o.codeSfcCheckboxGroupChooseValueAndLabelAttribute,components:{BraveField:l.BraveField},onError:n[4]||(n[4]=t=>r.handleError(t))},null,8,["layout","code","components"])]),W])])}const ee=p(G,[["render",z]]);export{ee as default};
