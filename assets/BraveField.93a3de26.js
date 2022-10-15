import{_ as u,h as f,r as i,o as c,d as b,e,f as t,c as x,i as h,w as d,j as v,g as o,t as k}from"./index.1de8cfe5.js";const V={components:{BraveField:f},name:"BraveFieldDemo",data(){return{booleanVal:!1,textValue:"Default Value",selectValue1:"Pizza",selectValue2:"venus",selectValue3:"gr"}}},_={class:"dark:text-slate-200"},w={class:"mb-4"},B=e("h2",{class:"text-md mb-1"},"Text Field",-1),F={class:"mb-4"},T=e("h2",{class:"text-md mb-1"},"Textarea",-1),S={class:"mb-4"},z=e("h2",{class:"text-md mb-1"},"Select with Text Array",-1),G={class:"mb-4"},j=e("h2",{class:"text-md mb-1"},"Select with Object",-1),U={class:"mb-4"},E=e("h2",{class:"text-md mb-1"},"Select Array of Objects",-1),O={class:"mb-4"},A=e("h2",{class:"text-md mb-1"},"Radio",-1),C={class:"mb-4"},N=e("h2",{class:"text-md mb-1"},"Checkbox",-1);function D(n,a,g,m,r,p){const s=i("BraveField",!0);return c(),b("div",_,[e("div",w,[B,t(s,{type:"text",modelValue:r.textValue,"onUpdate:modelValue":a[0]||(a[0]=l=>r.textValue=l),placeholder:"Enter a Value",class:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"},null,8,["modelValue"])]),e("div",F,[T,t(s,{type:"textarea",modelValue:r.textValue,"onUpdate:modelValue":a[1]||(a[1]=l=>r.textValue=l),placeholder:"This is my first field. ",class:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"},null,8,["modelValue"])]),e("div",S,[z,t(s,{type:"select",options:["Orange","Grapes","Apple","Banana"],modelValue:r.selectValue1,"onUpdate:modelValue":a[2]||(a[2]=l=>r.selectValue1=l),placeholder:"This is my first field. ",class:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"},null,8,["modelValue"])]),e("div",G,[j,t(s,{type:"select",options:{mercury:"Mercury",venus:"Venus",earth:"Earth",mars:"Mars",jupiter:"Jupiter",saturn:"Saturn",uranus:"Uranus",neptune:"Neptune"},modelValue:r.selectValue2,"onUpdate:modelValue":a[3]||(a[3]=l=>r.selectValue2=l),placeholder:"This is my first field. ",class:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"},null,8,["modelValue"])]),e("div",U,[E,t(s,{type:"select",options:[{label:"France",value:"fr",attrs:{disabled:!0}},{label:"Germany",value:"de",attrs:{disabled:!0}},{label:"Spain",value:"es",attrs:{disabled:!0}},{label:"Italy",value:"ie"},{label:"Greece",value:"gr",attrs:{disabled:!0}}],modelValue:r.selectValue3,"onUpdate:modelValue":a[4]||(a[4]=l=>r.selectValue3=l),placeholder:"This is my first field. ",class:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"},null,8,["modelValue"])]),e("div",O,[A,t(s,{type:"radio",wrapperClass:"mb-2",options:[{label:"France",value:"fr",attrs:{disabled:!0}},{label:"Germany",value:"de",attrs:{disabled:!0}},{label:"Spain",value:"es",attrs:{disabled:!0}},{label:"Italy",value:"ie"},{label:"Greece",value:"gr",attrs:{disabled:!0}}],modelValue:r.selectValue3,"onUpdate:modelValue":a[5]||(a[5]=l=>r.selectValue3=l),class:"h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"},null,8,["modelValue"])]),e("div",C,[N,t(s,{type:"checkbox",modelValue:r.booleanVal,"onUpdate:modelValue":a[6]||(a[6]=l=>r.booleanVal=l),class:"border"},null,8,["modelValue"])])])}const I=u(V,[["render",D]]),M={components:{BraveField:I,BrTaSyntaxHighlighter:x,BrTaTabs:h}},$={class:"flex-1 p-4 lg:p-10 xl:p-16"},H=v('<div class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block"><h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100"> On this page </h5><div id="navigation"><ul class="navtext-slate-700 text-sm leading-6"><li class="mb-2"><a href="#introduction" class="text-slate-900 dark:text-slate-100"> Introduction </a></li><li class="mb-2"><a href="#live-example" class="text-slate-900 dark:text-slate-100"> Live example </a></li></ul></div></div>',1),L={class:"prose dark:prose-invert prose-slate"},J=e("h1",{id:"introduction"},[e("i",{class:"bi bi-ui-checks"}),o(" Brave Field")],-1),P=e("p",null,"BraveField allows you to quickly build a HTML form currently it contains fields for text, textarea, select, radio and checkbox. ",-1),R=e("h3",{id:"live-example"},"Live Example",-1),q=e("iframe",{src:"https://stackblitz.com/edit/vitejs-vite-gtpsbt?embed=1&file=src/components/BraveField.vue&view=preview",style:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},allowfullscreen:"allowfullscreen",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,-1);function K(n,a,g,m,r,p){const s=i("BraveField",!0),l=i("BrTaSyntaxHighlighter"),y=i("BrTaTabs");return c(),b("main",$,[H,e("div",L,[J,P,R,t(y,{class:"not-prose",tabs:["example","code","stackblitz"],initialTab:"example"},{"tab-head-example":d(()=>[o("Basic Example")]),"tab-panel-example":d(()=>[t(s)]),"tab-head-code":d(()=>[o("Source Code")]),"tab-panel-code":d(()=>[t(l,{language:"javascript"},{title:d(()=>[o("BraveTabsExample.vue")]),code:d(()=>[o(k(`<template>
  <div class="dark:text-slate-200">
    <div class="mb-4">
      <h2 class="text-md mb-1">Text Field</h2>
      <BraveField
        type="text"
        v-model="textValue"
        placeholder="Enter a Value"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
    </div>
    <div class="mb-4">
      <h2 class="text-md mb-1">Textarea</h2>
      <BraveField
        type="textarea"
        v-model="textValue"
        placeholder="This is my first field. "
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
    </div>

    <div class="mb-4">
      <h2 class="text-md mb-1">Select with Text Array</h2>
      <BraveField
        type="select"
        :options="['Orange', 'Grapes', 'Apple', 'Banana']"
        v-model="selectValue1"
        placeholder="This is my first field. "
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
    </div>

    <div class="mb-4">
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
        v-model="selectValue2"
        placeholder="This is my first field. "
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
    </div>

    <div class="mb-4">
      <h2 class="text-md mb-1">Select Array of Objects</h2>
      <BraveField
        type="select"
        :options="[
          { label: 'France', value: 'fr', attrs: { disabled: true } },
          { label: 'Germany', value: 'de', attrs: { disabled: true } },
          { label: 'Spain', value: 'es', attrs: { disabled: true } },
          { label: 'Italy', value: 'ie' },
          { label: 'Greece', value: 'gr', attrs: { disabled: true } },
        ]"
        v-model="selectValue3"
        placeholder="This is my first field. "
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
    </div>

    <div class="mb-4">
      <h2 class="text-md mb-1">Radio</h2>
      <BraveField
        type="radio"
        :options="[
          { label: 'France', value: 'fr', attrs: { disabled: true } },
          { label: 'Germany', value: 'de', attrs: { disabled: true } },
          { label: 'Spain', value: 'es', attrs: { disabled: true } },
          { label: 'Italy', value: 'ie' },
          { label: 'Greece', value: 'gr', attrs: { disabled: true } },
        ]"
        v-model="selectValue3"
        class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
    </div>

    <div class="mb-4">
      <h2 class="text-md mb-1">Checkbox</h2>
      <BraveField type="checkbox" v-model="booleanVal" class="border" />
    </div>
  </div>
</template>

<script>
import { BraveField } from "bravevue";
export default {
  components: { BraveField },
  name: "BraveFieldDemo",
  data() {
    return {
      booleanVal: false,
      textValue: "Default Value",
      selectValue1: "Pizza",
      selectValue2: "venus",
      selectValue3: "gr",
    };
  },
};
<\/script>
`),1)]),_:1})]),"tab-head-stackblitz":d(()=>[o("\u26A1StackBlitz")]),"tab-panel-stackblitz":d(()=>[q]),_:1})])])}const W=u(M,[["render",K]]);export{W as default};
