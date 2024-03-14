import{_ as v,B as k,a as B,r as s,o as g,c as h,b as a,d as e,t as i,F as T,u as y,e as _,f as D,g as E,w as t,h as w,i as o}from"./index.57ef8c11.js";const H={components:{BraveBlockTree:k,BraveBlockElement:B},methods:{getHTML(){this.TreeHtml=this.$refs.rootElmt.getHTML()}},data(){return{TreeHtml:"",seedData:[{component:"BraveBlockElement",data:{selfData:{class:"border-red-600 border-2 border-dashed p-5 my-2 flex flex-divide "},childData:[{component:"BraveBlockElement",data:{selfData:{class:"border-green-500 border-2 border-dashed p-5 my-2 "},childData:{}}},{component:"BraveBlockElement",data:{selfData:{class:"border-yellow-500 border-2 border-dashed p-5 my-2 "},childData:{}}}]}}]}}},$=e("div",{class:"mb-3 text-xl"},"Demo for Nested Elements",-1),L=e("div",{class:"text-lg"},"Preview",-1),S=e("div",{class:"text-lg"},"Component Tree JSON",-1),M={class:"wrap w-full overflow-auto rounded bg-slate-900 p-2"},N=e("div",{class:"my-5 text-lg"},"HTML Output Generated from Tree",-1),C=e("span",{class:"relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"}," Generate HTML ",-1),O=[C],V=["value"];function z(c,r,f,x,l,m){const d=s("BraveBlockTree");return g(),h(T,null,[$,L,a(d,{ref:"rootElmt",modelValue:l.seedData,"onUpdate:modelValue":r[0]||(r[0]=n=>l.seedData=n)},null,8,["modelValue"]),S,e("code",null,[e("pre",M,i(l.seedData),1)]),N,e("button",{onClick:r[1]||(r[1]=n=>m.getHTML()),class:"group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400"},O),e("textarea",{class:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",name:"",id:"",cols:"10",rows:"5",value:l.TreeHtml},null,8,V)],64)}const P=v(H,[["render",z]]),j={components:{BraveBlockTree:k,BraveBlockElement:B},methods:{getHTML(){this.TreeHtml=this.$refs.rootElmt.getHTML()}},data(){return{TreeHtml:"",seedData:[{component:"BraveBlockText",data:{selfData:{content:"New.",class:"text-lg",tag:"div"},childData:{}}},{component:"BraveBlockElement",data:{selfData:{class:"border-red-600 border-2 border-dashed p-5 my-2  "},childData:[{component:"BraveBlockText",data:{selfData:{content:"Some Starting text.",class:"text-lg",tag:"div"},childData:{}}},{component:"BraveBlockText",data:{selfData:{content:"Some Starting text.",class:"text-lg",tag:"div"},childData:{}}},{component:"BraveBlockElement",data:{selfData:{class:"border-green-500 border-2 border-dashed p-5 m-2 "},childData:[]}},{component:"BraveBlockElement",data:{selfData:{class:"border-yellow-500 border-2 border-dashed p-5 my-2 "},childData:[]}}]}}]}}},G=e("div",{class:"mb-3 text-xl"},"Demo for Nested Elements",-1),R=e("div",{class:"text-lg"},"Preview",-1),J={contenteditable:"true",class:"prose p-10 dark:prose-invert"},F=e("div",{class:"text-lg"},"Component Tree JSON",-1),I={class:"wrap w-full overflow-auto rounded bg-slate-900 p-2"},W=e("div",{class:"my-5 text-lg"},"HTML Output Generated from Tree",-1),U=e("span",{class:"relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"}," Generate HTML ",-1),A=[U],X=["value"];function Y(c,r,f,x,l,m){const d=s("ToolbarLink"),n=s("ToolBarRich"),p=s("ToolbarPreviewLink"),b=s("BraveBlockTree");return g(),h(T,null,[G,R,e("div",J,[a(d,{contenteditable:"false",ref:"linkToolBar"},null,512),a(n,{contenteditable:"false",onShowLinkToolbar:r[0]||(r[0]=u=>c.$refs.linkToolBar.showToolBar())}),a(p,{contenteditable:"false",onShowLinkToolbar:r[1]||(r[1]=u=>c.$refs.linkToolBar.showToolBar())}),a(b,{ref:"rootElmt",modelValue:l.seedData,"onUpdate:modelValue":r[2]||(r[2]=u=>l.seedData=u)},null,8,["modelValue"])]),F,e("code",null,[e("pre",I,i(l.seedData),1)]),W,e("button",{onClick:r[3]||(r[3]=u=>m.getHTML()),class:"group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400"},A),e("textarea",{class:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",name:"",id:"",cols:"10",rows:"5",value:l.TreeHtml},null,8,X)],64)}const q=v(j,[["render",Y]]),K={mounted(){y({title:"Block Tree Component for Vue 3 | Brave Components Library.",meta:[{name:"description",content:"Block Tree Component is a Vue 3 component library for building a Block Editor."},{name:"keywords",content:"Block Tree, Block Editor"},{name:"author",content:"Shishir Raven"}]})},components:{BraveField:_,BrTaSyntaxHighlighter:D,BrTaTabs:E,SimpleBraveTreeExample:P,BraveTreeWithTextNodes:q}},Q={class:"flex-1 p-4 lg:p-10 xl:p-16"},Z=w('<div class="fixed top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] z-20 hidden w-[19.5rem] overflow-y-auto py-10 px-8 xl:block"><h5 class="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100"> On this page </h5><div id="navigation"><ul class="navtext-slate-700 text-sm leading-6"><li class="mb-2"><a href="#introduction" class="text-slate-900 dark:text-slate-100"> Introduction </a></li><li class="mb-2"><a href="#live-example" class="text-slate-900 dark:text-slate-100"> Live example </a></li></ul></div></div>',1),ee={class:"prose prose-slate dark:prose-invert"},te=e("iframe",{src:"https://stackblitz.com/edit/vitejs-vite-gtpsbt?embed=1&file=src/components/BraveField.vue&view=preview",style:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},allowfullscreen:"allowfullscreen",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,-1),oe=e("h1",{id:"introduction"},[e("i",{class:"bi bi-list-nested"}),o(" Brave Block Tree")],-1),re=e("p",null,[o(" The "),e("code",null,"BraveBlockTree"),o(" component is a tree view component that displays a tree of component nodes. It is a wrapper around the "),e("code",null,"BrTree"),o(" component. ")],-1),ae=e("h3",{id:"live-example"},"Live Example",-1),le=e("h2",null,"Role of Brave Block Tree",-1),se=w("<li>Components are stored as a JSON Tree. </li><li>Components in JSON Tree are also called Blocks</li><li>Each Block is loaded dynamically from the JSON TREE</li><li>Rendering Block Tree is primary responsiblity.</li><li>Provides Tree Manipulation <b>Events</b> to children such as <ul><li>delete-block</li><li>insert-sibling</li><li>replace-block</li><li>move-content-to-row-above : functionality for text blocks to merge text content on delete</li><li>move-content-to-row-above : functionality for text blocks to merge text content on delete</li></ul></li>",5),ne=e("b",{class:"text-blue-600"},"Get HTML",-1),de=e("p",null," You can extract the HTML from the Block Tree by using this method. ",-1),ie=e("div",{class:"font-bold my-2"},"Example from Parent",-1),ce=e("h3",{id:"live-example"},"Live Example",-1),me=e("iframe",{src:"https://stackblitz.com/edit/vitejs-vite-gtpsbt?embed=1&file=src/components/BraveField.vue&view=preview",style:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},allowfullscreen:"allowfullscreen",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,-1);function pe(c,r,f,x,l,m){const d=s("BraveTreeWithTextNodes"),n=s("BrTaSyntaxHighlighter"),p=s("BrTaTabs"),b=s("SimpleBraveTreeExample");return g(),h("main",Q,[Z,e("div",ee,[a(p,{class:"",tabs:["example","code","stackblitz"],initialTab:"example"},{"tab-head-example":t(()=>[o("Basic Example")]),"tab-panel-example":t(()=>[a(d)]),"tab-head-code":t(()=>[o("Source Code")]),"tab-panel-code":t(()=>[a(n,{language:"javascript"},{title:t(()=>[o("BraveTree.vue")]),code:t(()=>[o(i(`<template>
  <div class="mb-3 text-xl">Demo for Nested Elements</div>
  <div class="text-lg">Preview</div>
  <div contenteditable="true" class="prose p-10 dark:prose-invert">
    <!-- RICHTEXT TOOLBAR -->
    <ToolbarLink contenteditable="false" ref="linkToolBar" />
    <ToolBarRich
      contenteditable="false"
      @show-link-toolbar="$refs.linkToolBar.showToolBar()"
    />
    <ToolbarPreviewLink
      contenteditable="false"
      @show-link-toolbar="$refs.linkToolBar.showToolBar()"
    />
    <BraveBlockTree ref="rootElmt" v-model="seedData"></BraveBlockTree>
  </div>
  <div class="text-lg">Component Tree JSON</div>
  <code>
    <pre class="wrap w-full overflow-auto rounded bg-slate-900 p-2">{{
      seedData
    }}</pre>
  </code>

  <div class="my-5 text-lg">HTML Output Generated from Tree</div>
  <button
    @click="getHTML()"
    class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400"
  >
    <span
      class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
    >
      Generate HTML
    </span>
  </button>
  <textarea
    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    name=""
    id=""
    cols="10"
    rows="5"
    :value="TreeHtml"
  ></textarea>
</template>
<script>
import { BraveBlockTree, BraveBlockElement } from "bravevue";
export default {
  components: { BraveBlockTree, BraveBlockElement },
  methods: {
    getHTML() {
      this.TreeHtml = this.$refs.rootElmt.getHTML();
    },
  },
  data() {
    return {
      TreeHtml: "",
      seedData: [
        {
          component: "BraveBlockText",
          data: {
            selfData: {
              content: "New.",
              class: "text-lg",
              tag: "div",
            },
            childData: {},
          },
        },
        {
          component: "BraveBlockElement",
          data: {
            selfData: {
              class: "border-red-600 border-2 border-dashed p-5 my-2  ",
            },
            childData: [
              {
                component: "BraveBlockText",
                data: {
                  selfData: {
                    content: "Some Starting text.",
                    class: "text-lg",
                    tag: "div",
                  },
                  childData: {},
                },
              },
              {
                component: "BraveBlockText",
                data: {
                  selfData: {
                    content: "Some Starting text.",
                    class: "text-lg",
                    tag: "div",
                  },
                  childData: {},
                },
              },
              {
                component: "BraveBlockElement",
                data: {
                  selfData: {
                    class: "border-green-500 border-2 border-dashed p-5 m-2 ",
                  },
                  childData: [],
                },
              },

              {
                component: "BraveBlockElement",
                data: {
                  selfData: {
                    class: "border-yellow-500 border-2 border-dashed p-5 my-2 ",
                  },
                  childData: [],
                },
              },
            ],
          },
        },
      ],
    };
  },
};
<\/script>

              `),1)]),_:1})]),"tab-head-stackblitz":t(()=>[o("\u26A1StackBlitz")]),"tab-panel-stackblitz":t(()=>[te]),_:1}),oe,re,ae,le,e("ul",null,[se,e("li",null,[ne,de,ie,a(n,{language:"javascript"},{title:t(()=>[o("Parent Component")]),code:t(()=>[o(i(" this.TreeHtml= this.$refs.rootElmt.getHTML();"),1)]),_:1})])]),ce,a(p,{class:"not-prose",tabs:["example","code","stackblitz"],initialTab:"example"},{"tab-head-example":t(()=>[o("Basic Example")]),"tab-panel-example":t(()=>[a(b)]),"tab-head-code":t(()=>[o("Source Code")]),"tab-panel-code":t(()=>[a(n,{language:"javascript"},{title:t(()=>[o("BraveTree.vue")]),code:t(()=>[o(i(`<template>
  <div class="mb-3 text-xl">Demo for Nested Elements</div>

  <div class="text-lg">Preview</div>
  <BraveBlockTree ref="rootElmt" v-model="seedData"></BraveBlockTree>
  <div class="text-lg">Component Tree JSON</div>
  <code>
    <pre class="wrap w-full overflow-auto rounded bg-slate-900 p-2">{{
      seedData
    }}</pre>
  </code>

  <div class="my-5 text-lg">HTML Output Generated from Tree</div>
  <button
    @click="getHTML()"
    class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400"
  >
    <span
      class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
    >
      Generate HTML
    </span>
  </button>
  <textarea
    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    name=""
    id=""
    cols="10"
    rows="5"
    :value="TreeHtml"
  ></textarea>
</template>
<script>
import { BraveBlockTree, BraveBlockElement } from "bravevue";
export default {
  components: { BraveBlockTree, BraveBlockElement },
  methods: {
    getHTML() {
      this.TreeHtml = this.$refs.rootElmt.getHTML();
    },
  },
  data() {
    return {
      TreeHtml: "",
      seedData: [
        {
          component: "BraveBlockElement",
          data: {
            selfData: {
              class:
                "border-red-600 border-2 border-dashed p-5 my-2 flex flex-divide ",
            },
            childData: [
              {
                component: "BraveBlockElement",
                data: {
                  selfData: {
                    class: "border-green-500 border-2 border-dashed p-5 my-2 ",
                  },
                  childData: {},
                },
              },
              {
                component: "BraveBlockElement",
                data: {
                  selfData: {
                    class: "border-yellow-500 border-2 border-dashed p-5 my-2 ",
                  },
                  childData: {},
                },
              },
            ],
          },
        },
      ],
    };
  },
};
<\/script>

              `),1)]),_:1})]),"tab-head-stackblitz":t(()=>[o("\u26A1StackBlitz")]),"tab-panel-stackblitz":t(()=>[me]),_:1})])])}const be=v(K,[["render",pe]]);export{be as default};
