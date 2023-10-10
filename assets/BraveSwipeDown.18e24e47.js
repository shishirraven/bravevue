import{_ as c,A as S,D as _,o as n,c as r,E as b,J as f,h as s,t as d,F as g,d as t,u as D,G as y,x as T,K as B,e as k,f as E,P as z,b as o,w as e,g as $,r as l}from"./index.869beb83.js";const H={data(){return{swipeStatus:"Swipe Down Here to see the result",swipeStyle:{}}},directives:{"swipe-down":S},methods:{swipedown(){this.swipeStatus="Swiped Down \u{1F44D}",this.swipeStyle={shadow:"shadow-2xl",marginTop:"40px"},setTimeout(()=>{this.swipeStatus="Swipe Down Here to see the result",this.swipeStyle={}},1200)}}},M=t("p",{class:""},"Please swipeDown or drag Down with Mouse to see effect.",-1);function P(w,h,u,m,a,p){const i=_("swipe-down");return n(),r(g,null,[M,b((n(),r("div",{style:f(a.swipeStyle),class:"z-40 border p-10 transition-all dark:bg-slate-600"},[s(d(a.swipeStatus),1)],4)),[[i,p.swipedown]])],64)}const V=c(H,[["render",P]]),N={mounted(){D({title:"Swipe Down Directive for Vue 3 | BraveVue Component Library ",meta:[{name:"description",content:"You can easily record the Swipe Down Action Made on the Page and call a method"},{name:"keywords",content:"Swipe Down, Directive, Swipe Down Guesture, Touch Enabled, Mouse Enabled"},{name:"author",content:"Shishir Raven"}]})},components:{BraveRadialMenu:y,BraveGistEmbed:T,BraveTabs:B,BrTaSyntaxHighlighter:k,BrTaTabs:E,PillsTab:z,SwipeDownExample:V}},A={class:"flex-1 p-4 lg:p-10 xl:p-16"},C=$('<div class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block"><h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100"> On this page </h5><div id="navigation"><ul class="navtext-slate-700 text-sm leading-6"><li class="mb-2"><a href="#introduction" class="text-slate-900 dark:text-slate-100"> Introduction </a></li><li class="mb-2"><a href="#live-example" class="text-slate-900 dark:text-slate-100"> Live example </a></li></ul></div></div>',1),G={class:"prose dark:prose-invert prose-slate"},L=t("h1",{id:"introduction"},[t("i",{class:"bi bi-chevron-double-up"}),s(" Touch Swipe Down")],-1),j=t("p",null,"You can easily record the Swipe Up Action Made on the Page. ",-1),F=t("code",{class:"text-blue-500"},'v-swipe-down="swipeup"',-1),R=t("h3",{id:"live-example"},"Live Example",-1),Y=t("iframe",{src:"https://stackblitz.com/edit/vitejs-vite-byazdn?embed=1&file=src/App.vue&hideNavigation=1&view=preview",style:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},allowfullscreen:"allowfullscreen",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,-1);function I(w,h,u,m,a,p){const i=l("SwipeDownExample"),x=l("BrTaSyntaxHighlighter"),v=l("BrTaTabs");return n(),r("main",A,[C,t("div",G,[L,j,F,R,o(v,{class:"not-prose",tabs:["example","code","stackblitz"],initialTab:"example"},{"tab-head-stackblitz":e(()=>[s("\u26A1StackBlitz")]),"tab-panel-stackblitz":e(()=>[Y]),"tab-head-example":e(()=>[s("Basic Example")]),"tab-panel-example":e(()=>[o(i)]),"tab-head-code":e(()=>[s("Source Code")]),"tab-panel-code":e(()=>[o(x,{language:"javascript"},{title:e(()=>[s("BraveTabsExample.vue")]),code:e(()=>[s(d(`<template>
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
`),1)]),_:1})]),_:1})])])}const K=c(N,[["render",I]]);export{K as default};
