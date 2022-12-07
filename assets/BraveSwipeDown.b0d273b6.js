import{_ as d,m as v,p as b,o as n,c as p,q as S,u as f,h as s,t as c,F as g,d as t,s as D,j as y,v as T,e as B,f as k,P as z,b as o,w as e,g as $,r as l}from"./index.fe325488.js";const E={data(){return{swipeStatus:"Swipe Down Here to see the result",swipeStyle:{}}},directives:{"swipe-down":v},methods:{swipedown(){this.swipeStatus="Swiped Down \u{1F44D}",this.swipeStyle={shadow:"shadow-2xl",marginTop:"40px"},setTimeout(()=>{this.swipeStatus="Swipe Down Here to see the result",this.swipeStyle={}},1200)}}},H=t("p",{class:""},"Please swipeDown or drag Down with Mouse to see effect.",-1);function N(w,h,m,u,a,r){const i=b("swipe-down");return n(),p(g,null,[H,S((n(),p("div",{style:f(a.swipeStyle),class:"z-40 border p-10 transition-all dark:bg-slate-600"},[s(c(a.swipeStatus),1)],4)),[[i,r.swipedown]])],64)}const P=d(E,[["render",N]]),M={components:{BraveRadialMenu:D,BraveGistEmbed:y,BraveTabs:T,BrTaSyntaxHighlighter:B,BrTaTabs:k,PillsTab:z,SwipeDownExample:P}},V={class:"flex-1 p-4 lg:p-10 xl:p-16"},j=$('<div class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block"><h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100"> On this page </h5><div id="navigation"><ul class="navtext-slate-700 text-sm leading-6"><li class="mb-2"><a href="#introduction" class="text-slate-900 dark:text-slate-100"> Introduction </a></li><li class="mb-2"><a href="#live-example" class="text-slate-900 dark:text-slate-100"> Live example </a></li></ul></div></div>',1),C={class:"prose dark:prose-invert prose-slate"},A=t("h1",{id:"introduction"},[t("i",{class:"bi bi-chevron-double-up"}),s(" Touch Swipe Down")],-1),F=t("p",null,"You can easily record the Swipe Up Action Made on the Page. ",-1),L=t("code",{class:"text-blue-500"},'v-swipe-down="swipeup"',-1),q=t("h3",{id:"live-example"},"Live Example",-1),G=t("iframe",{src:"https://stackblitz.com/edit/vitejs-vite-byazdn?embed=1&file=src/App.vue&hideNavigation=1&view=preview",style:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},allowfullscreen:"allowfullscreen",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,-1);function I(w,h,m,u,a,r){const i=l("SwipeDownExample"),x=l("BrTaSyntaxHighlighter"),_=l("BrTaTabs");return n(),p("main",V,[j,t("div",C,[A,F,L,q,o(_,{class:"not-prose",tabs:["example","code","stackblitz"],initialTab:"example"},{"tab-head-stackblitz":e(()=>[s("\u26A1StackBlitz")]),"tab-panel-stackblitz":e(()=>[G]),"tab-head-example":e(()=>[s("Basic Example")]),"tab-panel-example":e(()=>[o(i)]),"tab-head-code":e(()=>[s("Source Code")]),"tab-panel-code":e(()=>[o(x,{language:"javascript"},{title:e(()=>[s("BraveTabsExample.vue")]),code:e(()=>[s(c(`<template>
  <p class="">Please swipeDown or drag Down with Mouse to see effect.</p>
  <div
    :style="swipeStyle"
    class="z-40 border p-10 transition-all dark:bg-slate-600"
    v-swipe-down="swipedown"
  >
    {{ swipeStatus }}
  </div>
</template>
<script>
import { SwipeDown } from "bravevue";
export default {
  data() {
    return {
      swipeStatus: "Swipe Down Here to see the result",
      swipeStyle: {},
    };
  },
  directives: {
    "swipe-down": SwipeDown,
  },
  methods: {
    swipedown() {
      this.swipeStatus = "Swiped Down \u{1F44D}";
      this.swipeStyle = {
        shadow: "shadow-2xl",
        marginTop: "40px",
      };
      setTimeout(() => {
        this.swipeStatus = "Swipe Down Here to see the result";
        this.swipeStyle = {};
      }, 1200);
    },
  },
};
<\/script>
`),1)]),_:1})]),_:1})])])}const R=d(M,[["render",I]]);export{R as default};
