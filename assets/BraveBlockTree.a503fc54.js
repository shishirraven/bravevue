import{B as _}from"./BraveField.5781a76f.js";import{_ as p,B as k,a as y,r as s,o as v,c as h,b as l,d as e,t as n,F as B,e as w,f as V,w as r,g as T,h as a}from"./index.2fad9f7c.js";const S={components:{BraveBlockTree:k,BraveBlockElement:y},methods:{getHTML(){this.TreeHtml=this.$refs.rootElmt.getHTML()}},data(){return{TreeHtml:"",seedData:[{component:"BraveBlockElement",data:{selfData:{class:"border-red-600 border-2 border-dashed p-5 my-2 flex flex-divide "},childData:[{component:"BraveBlockElement",data:{selfData:{class:"border-green-500 border-2 border-dashed p-5 my-2 "},childData:{}}},{component:"BraveBlockElement",data:{selfData:{class:"border-yellow-500 border-2 border-dashed p-5 my-2 "},childData:{}}}]}}]}}},D=e("div",{class:"text-xl mb-3"},"Demo for Nested Elements",-1),E=e("div",{class:"text-lg"},"Preview",-1),$=e("div",{class:"text-lg"},"Component Tree JSON",-1),F={class:"bg-slate-900 p-2 rounded w-full overflow-auto wrap"},H=e("div",{class:"text-lg my-5"},"HTML Output Generated from Tree",-1),L=e("span",{class:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"}," Generate HTML ",-1),M=[L],N=["value"];function G(c,t,f,x,o,b){const i=s("BraveBlockTree");return v(),h(B,null,[D,E,l(i,{ref:"rootElmt",modelValue:o.seedData,"onUpdate:modelValue":t[0]||(t[0]=d=>o.seedData=d)},null,8,["modelValue"]),$,e("code",null,[e("pre",F,n(o.seedData),1)]),H,e("button",{onClick:t[1]||(t[1]=d=>b.getHTML()),class:"relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"},M),e("textarea",{class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",name:"",id:"",cols:"10",rows:"5",value:o.TreeHtml},null,8,N)],64)}const z=p(S,[["render",G]]),O={components:{BraveBlockTree:k,BraveBlockElement:y},methods:{getHTML(){this.TreeHtml=this.$refs.rootElmt.getHTML()}},data(){return{TreeHtml:"",seedData:[{component:"BraveBlockText",data:{selfData:{content:"New.",class:"text-lg",tag:"div"},childData:{}}},{component:"BraveBlockElement",data:{selfData:{class:"border-red-600 border-2 border-dashed p-5 my-2  "},childData:[{component:"BraveBlockText",data:{selfData:{content:"Some Starting text.",class:"text-lg",tag:"div"},childData:{}}},{component:"BraveBlockText",data:{selfData:{content:"Some Starting text.",class:"text-lg",tag:"div"},childData:{}}},{component:"BraveBlockElement",data:{selfData:{class:"border-green-500 border-2 border-dashed p-5 m-2 "},childData:[]}},{component:"BraveBlockElement",data:{selfData:{class:"border-yellow-500 border-2 border-dashed p-5 my-2 "},childData:[]}}]}}]}}},j=e("div",{class:"text-xl mb-3"},"Demo for Nested Elements",-1),C=e("div",{class:"text-lg"},"Preview",-1),P={contenteditable:"true",class:"prose dark:prose-invert p-10"},J=e("div",{class:"text-lg"},"Component Tree JSON",-1),R={class:"bg-slate-900 p-2 rounded w-full overflow-auto wrap"},A=e("div",{class:"text-lg my-5"},"HTML Output Generated from Tree",-1),I=e("span",{class:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"}," Generate HTML ",-1),U=[I],W=["value"];function Y(c,t,f,x,o,b){const i=s("ToolbarLink"),d=s("ToolBarRich"),u=s("ToolbarPreviewLink"),g=s("BraveBlockTree");return v(),h(B,null,[j,C,e("div",P,[l(i,{contenteditable:"false",ref:"linkToolBar"},null,512),l(d,{contenteditable:"false",onShowLinkToolbar:t[0]||(t[0]=m=>c.$refs.linkToolBar.showToolBar())}),l(u,{contenteditable:"false",onShowLinkToolbar:t[1]||(t[1]=m=>c.$refs.linkToolBar.showToolBar())}),l(g,{ref:"rootElmt",modelValue:o.seedData,"onUpdate:modelValue":t[2]||(t[2]=m=>o.seedData=m)},null,8,["modelValue"])]),J,e("code",null,[e("pre",R,n(o.seedData),1)]),A,e("button",{onClick:t[3]||(t[3]=m=>b.getHTML()),class:"relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"},U),e("textarea",{class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",name:"",id:"",cols:"10",rows:"5",value:o.TreeHtml},null,8,W)],64)}const q=p(O,[["render",Y]]),K={components:{BraveField:_,BrTaSyntaxHighlighter:w,BrTaTabs:V,SimpleBraveTreeExample:z,BraveTreeWithTextNodes:q}},Q={class:"flex-1 p-4 lg:p-10 xl:p-16"},X=T('<div class="fixed top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] z-20 hidden w-[19.5rem] overflow-y-auto py-10 px-8 xl:block"><h5 class="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100"> On this page </h5><div id="navigation"><ul class="navtext-slate-700 text-sm leading-6"><li class="mb-2"><a href="#introduction" class="text-slate-900 dark:text-slate-100"> Introduction </a></li><li class="mb-2"><a href="#live-example" class="text-slate-900 dark:text-slate-100"> Live example </a></li></ul></div></div>',1),Z={class:"prose prose-slate dark:prose-invert"},ee=e("iframe",{src:"https://stackblitz.com/edit/vitejs-vite-gtpsbt?embed=1&file=src/components/BraveField.vue&view=preview",style:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},allowfullscreen:"allowfullscreen",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,-1),re=e("h1",{id:"introduction"},[e("i",{class:"bi bi-list-nested"}),a(" Brave Block Tree")],-1),ae=e("p",null,[a(" The "),e("code",null,"BraveBlockTree"),a(" component is a tree view component that displays a tree of component nodes. It is a wrapper around the "),e("code",null,"BrTree"),a(" component. ")],-1),te=e("h3",{id:"live-example"},"Live Example",-1),le=e("h2",null,"Role of Brave Block Tree",-1),oe=T("<li>Components are stored as a JSON Tree. </li><li>Components in JSON Tree are also called Blocks</li><li>Each Block is loaded dynamically from the JSON TREE</li><li>Rendering Block Tree is primary responsiblity.</li><li>Provides Tree Manipulation <b>Events</b> to children such as <ul><li>delete-block</li><li>insert-sibling</li><li>replace-block</li><li>move-content-to-row-above : functionality for text blocks to merge text content on delete</li><li>move-content-to-row-above : functionality for text blocks to merge text content on delete</li></ul></li>",5),se=e("b",{class:"text-blue-600"},"Get HTML",-1),de=e("p",null," You can extract the HTML from the Block Tree by using this method. ",-1),ie=e("div",{class:"font-bold my-2"},"Example from Parent",-1),ne=e("h3",{id:"live-example"},"Live Example",-1),ce=e("iframe",{src:"https://stackblitz.com/edit/vitejs-vite-gtpsbt?embed=1&file=src/components/BraveField.vue&view=preview",style:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},allowfullscreen:"allowfullscreen",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,-1);function be(c,t,f,x,o,b){const i=s("BraveTreeWithTextNodes"),d=s("BrTaSyntaxHighlighter"),u=s("BrTaTabs"),g=s("SimpleBraveTreeExample");return v(),h("main",Q,[X,e("div",Z,[l(u,{class:"",tabs:["example","code","stackblitz"],initialTab:"example"},{"tab-head-example":r(()=>[a("Basic Example")]),"tab-panel-example":r(()=>[l(i)]),"tab-head-code":r(()=>[a("Source Code")]),"tab-panel-code":r(()=>[l(d,{language:"javascript"},{title:r(()=>[a("BraveTabsExample.vue")]),code:r(()=>[a(n(`<template>
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
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
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
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Checkbox</h2>
                    <BraveField
                      type="checkbox"
                      v-model="booleanVal"
                      class="border"
                    />
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
                      selectValue3: "gr", // Greece
                    };
                  },
                };
              <\/script>
              `),1)]),_:1})]),"tab-head-stackblitz":r(()=>[a("\u26A1StackBlitz")]),"tab-panel-stackblitz":r(()=>[ee]),_:1}),re,ae,te,le,e("ul",null,[oe,e("li",null,[se,de,ie,l(d,{language:"javascript"},{title:r(()=>[a("Parent Component")]),code:r(()=>[a(n(" this.TreeHtml= this.$refs.rootElmt.getHTML();"),1)]),_:1})])]),ne,l(u,{class:"not-prose",tabs:["example","code","stackblitz"],initialTab:"example"},{"tab-head-example":r(()=>[a("Basic Example")]),"tab-panel-example":r(()=>[l(g)]),"tab-head-code":r(()=>[a("Source Code")]),"tab-panel-code":r(()=>[l(d,{language:"javascript"},{title:r(()=>[a("BraveTabsExample.vue")]),code:r(()=>[a(n(`<template>
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
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
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
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Checkbox</h2>
                    <BraveField
                      type="checkbox"
                      v-model="booleanVal"
                      class="border"
                    />
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
              `),1)]),_:1})]),"tab-head-stackblitz":r(()=>[a("\u26A1StackBlitz")]),"tab-panel-stackblitz":r(()=>[ce]),_:1})])])}const ge=p(K,[["render",be]]);export{ge as default};
