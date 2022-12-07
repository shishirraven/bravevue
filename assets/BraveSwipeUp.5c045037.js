import{_ as n,S as v,p as b,o,c as r,q as S,s as f,h as s,t as d,F as g,d as t,n as y,j as T,u as U,e as k,f as B,P as z,b as p,w as e,g as $,r as l}from"./index.53a5ff0d.js";const E={data(){return{swipeStatus:"Swipe Up Here to see the result",swipeStyle:{}}},directives:{"swipe-up":v},methods:{swipeup(){this.swipeStatus="Swiped Up \u{1F44D}",this.swipeStyle={shadow:"shadow-2xl",marginTop:"-10px"},setTimeout(()=>{this.swipeStatus="Swipe Up Here to see the result",this.swipeStyle={}},1200)}}},H=t("p",{class:"mb-10"},"Please swipeUp or drag Up with Mouse to see effect.",-1);function N(w,h,u,m,a,c){const i=b("swipe-up");return o(),r(g,null,[H,S((o(),r("div",{style:f(a.swipeStyle),class:"z-40 border p-10 transition-all dark:bg-slate-600"},[s(d(a.swipeStatus),1)],4)),[[i,c.swipeup]])],64)}const P=n(E,[["render",N]]),M={components:{BraveRadialMenu:y,BraveGistEmbed:T,BraveTabs:U,BrTaSyntaxHighlighter:k,BrTaTabs:B,PillsTab:z,SwipeUpExample:P}},V={class:"flex-1 p-4 lg:p-10 xl:p-16"},j=$('<div class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block"><h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100"> On this page </h5><div id="navigation"><ul class="navtext-slate-700 text-sm leading-6"><li class="mb-2"><a href="#introduction" class="text-slate-900 dark:text-slate-100"> Introduction </a></li><li class="mb-2"><a href="#live-example" class="text-slate-900 dark:text-slate-100"> Live example </a></li></ul></div></div>',1),C={class:"prose dark:prose-invert prose-slate"},D=t("h1",{id:"introduction"},[t("i",{class:"bi bi-chevron-double-up"}),s(" Touch Swipe Up")],-1),A=t("p",null,"You can easily record the Swipe Up Action Made on the Page. ",-1),F=t("code",{class:"text-blue-500"},'v-swipe-up="swipeup"',-1),L=t("h3",{id:"live-example"},"Live Example",-1),q=t("iframe",{src:"https://stackblitz.com/edit/vitejs-vite-lvkykx?embed=1&file=src/App.vue&hideNavigation=1&view=preview",style:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},allowfullscreen:"allowfullscreen",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,-1);function G(w,h,u,m,a,c){const i=l("SwipeUpExample"),x=l("BrTaSyntaxHighlighter"),_=l("BrTaTabs");return o(),r("main",V,[j,t("div",C,[D,A,F,L,p(_,{class:"not-prose",tabs:["example","code","stackblitz"],initialTab:"example"},{"tab-head-stackblitz":e(()=>[s("\u26A1StackBlitz")]),"tab-panel-stackblitz":e(()=>[q]),"tab-head-example":e(()=>[s("Basic Example")]),"tab-panel-example":e(()=>[p(i)]),"tab-head-code":e(()=>[s("Source Code")]),"tab-panel-code":e(()=>[p(x,{language:"javascript"},{title:e(()=>[s("BraveTabsExample.vue")]),code:e(()=>[s(d(`<template>
  <p class="mb-10">Please swipeUp or drag Up with Mouse to see effect.</p>
  <div
    :style="swipeStyle"
    class="z-40 border p-10 transition-all dark:bg-slate-600"
    v-swipe-up="swipeup"
  >
  {{ swipeStatus }}
  </div>
</template>
<script>
import { SwipeUp } from "bravevue";
export default {
  data() {
    return {
      swipeStatus: "Swipe Up Here to see the result",
      swipeStyle: {},
    };
  },
  directive: {
    "swipe-up": SwipeUp,
  },
  methods: {
    swipeup() {
      this.swipeStatus = "Swiped Up";
      this.swipeStyle = {
        shadow: "shadow-2xl",
        marginTop: "-10px",
      };
      setTimeout(() => {
        this.swipeStatus = "Swipe Up Here to see the result";
        this.swipeStyle = {};
      }, 1200);
    },
  },
};
<\/script>
`),1)]),_:1})]),_:1})])])}const O=n(M,[["render",G]]);export{O as default};
