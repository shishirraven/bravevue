import{B as i}from"./BraveField.32c11ef2.js";import{_ as c,e as b,f as u,c as n,d as r,b as l,w as e,g as p,h as a,r as t,o as g,t as m}from"./index.5f778231.js";const v={components:{BraveField:i,BrTaSyntaxHighlighter:b,BrTaTabs:u}},h={class:"flex-1 p-4 lg:p-10 xl:p-16"},x=p('<div class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block"><h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100"> On this page </h5><div id="navigation"><ul class="navtext-slate-700 text-sm leading-6"><li class="mb-2"><a href="#introduction" class="text-slate-900 dark:text-slate-100"> Introduction </a></li><li class="mb-2"><a href="#live-example" class="text-slate-900 dark:text-slate-100"> Live example </a></li></ul></div></div>',1),f={class:"prose dark:prose-invert prose-slate"},y=r("h1",{id:"introduction"},[r("i",{class:"bi bi-ui-checks"}),a(" Brave Field")],-1),k=r("p",null,"BraveField allows you to quickly build a HTML form currently it contains fields for text, textarea, select, radio and checkbox. ",-1),B=r("h3",{id:"live-example"},"Live Example",-1),_=r("iframe",{src:"https://stackblitz.com/edit/vitejs-vite-gtpsbt?embed=1&file=src/components/BraveField.vue&view=preview",style:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},allowfullscreen:"allowfullscreen",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,-1);function w(F,T,V,S,z,E){const s=t("BraveField",!0),d=t("BrTaSyntaxHighlighter"),o=t("BrTaTabs");return g(),n("main",h,[x,r("div",f,[y,k,B,l(o,{class:"not-prose",tabs:["example","code","stackblitz"],initialTab:"example"},{"tab-head-example":e(()=>[a("Basic Example")]),"tab-panel-example":e(()=>[l(s)]),"tab-head-code":e(()=>[a("Source Code")]),"tab-panel-code":e(()=>[l(d,{language:"javascript"},{title:e(()=>[a("BraveTabsExample.vue")]),code:e(()=>[a(m(`<template>
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
`),1)]),_:1})]),"tab-head-stackblitz":e(()=>[a("\u26A1StackBlitz")]),"tab-panel-stackblitz":e(()=>[_]),_:1})])])}const N=c(v,[["render",w]]);export{N as default};
