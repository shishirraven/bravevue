import{_ as n,B as d,r as c,o as b,c as g,a as v,w as o,b as t,t as r,d as e,e as _,f as y,g as k,h as w,i as l,j as S}from"./index.004bf236.js";const E={components:{BraveSyntaxHighlighter:d},props:{langauge:{type:String,default:"plaintext"}}},B={class:"flex text-sm rounded-t-lg border-b border-slate-600"},T={class:"flex-1"},C={class:"dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light"},$=["onClick"];function L(a,p,i,f,m,h){const s=c("BraveSyntaxHighlighter");return b(),g(s,{copyText:" \u{1F4CB} Copy Code",language:i.langauge,prisimClassName:"dark:!bg-slate-900 bg-slate-50 rounded-lg  ",class:"!bg-slate-800 !rounded-lg",ref:"codebox"},v({header:o(({copyToClipboard:u,copyText:x})=>[e("div",B,[e("div",T,[e("div",C,[_(a.$slots,"title")])]),e("div",{onClick:Z=>u(),class:"mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"},r(x),9,$)])]),_:2},[a.$slots.code()&&a.$slots.code()[0]&&a.$slots.code()[0].children?{name:"default",fn:o(()=>[t(r(a.$slots.code()[0].children),1)])}:void 0]),1032,["language"])}var N=n(E,[["render",L]]);const A={components:{BraveGistEmbed:y,BraveSlider:k,BraveSyntaxHighlighter:d,BrTaSyntaxHighlighter:N}},R={class:"flex-1 lg:p-16"},H={class:"py-6"},M={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},I=S('<h1 class="text-4xl font-semibold mb-10"><i class="bi me-2 text-xl bi-window-sidebar text-4xl"></i> Sidebar Layout </h1><div class="grid grid-cols-5 gap-4"><div class="col-span-2"><p class="pb-5"> Brave Sidebar Layout is a Vue component that allows you to create a sidebar layout with a sidebar and a content area. </p><p class="pb-5"> The sidebar of this page is a Live example of Sidebar Layout. </p></div></div><hr><h2 class="text-3xl font-semibold my-7">Features</h2><ul class="my-10"><li> 100% customizable, no dependency on any third-party CSS library. </li><li>Responsive.</li><li> Control Sidebar Width with Props. </li></ul><hr><h2 class="text-3xl font-semibold my-7">How to Use</h2>',7),D={class:"relative space-y-2 mb-16",style:{"counter-reset":"step 0"}},O={class:"relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5",style:{"counter-increment":"step 1"}},V=e("div",{class:"mb-6 col-span-2 xl:mb-0"},[e("h4",{class:"leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"}," Install BraveVue "),e("div",{class:""},[e("p",null,[t("Install "),e("code",null,"`bravevue`"),t(" via npm")])])],-1),j={class:"col-span-3"},P=t("Terminal"),U=t(r("npm install bravevue")),Y={class:"relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5",style:{"counter-increment":"step 1"}},W=e("div",{class:"mb-6 col-span-2 xl:mb-0"},[e("h4",{class:"leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"}," Import the Component "),e("div",{class:""},[e("p",null,[t("Import "),e("code",null,"`BraveSidebarLayout`"),t(" Component and add it to your components object.")])])],-1),z={class:"col-span-3"},F=t("app.vue"),G={class:"relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5",style:{"counter-increment":"step 1"}},q=e("div",{class:"mb-6 col-span-2 xl:mb-0"},[e("h4",{class:"leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"}," Add Component to your template "),e("div",{class:""},[e("p",{class:"text-sm"}," Place component in your template wherever you want the Slider to appear. ")])],-1),J={class:"col-span-5"},K=t("app.vue"),Q=e("hr",{class:"my-5"},null,-1);function X(a,p,i,f,m,h){const s=c("BrTaSyntaxHighlighter");return b(),w("main",R,[e("div",H,[e("div",M,[I,e("ol",D,[e("li",O,[V,e("div",j,[l(s,null,{title:o(()=>[P]),code:o(()=>[U]),_:1})])]),e("li",Y,[W,e("div",z,[l(s,{langauge:"javascript"},{title:o(()=>[F]),code:o(()=>[t(r(`<script>
import { BraveSidebarLayout } from "bravevue";
import "../node_modules/bravevue/dist/style.css";
export default{
  components: {
    BraveSidebarLayout
  }
}
<\/script>`),1)]),_:1})])]),e("li",G,[q,e("div",J,[l(s,{langauge:"html"},{title:o(()=>[K]),code:o(()=>[t(r(`<template>
<BraveSidebarLayout
    sidebar-class="  bg-slate-900 flex flex-col text-white "
    :sidebar-width="300"
  >
    <!-- SIDEBAR TEMPLATE -->
    <template v-slot:sidebar="{closeMenu,openMenu}">
        <div @click="closeMenu()" class="p-2 cursor-pointer text-2xl absolute right-0 top-0 md:hidden" >
            [ Close Sidebar ]
        </div>
        <!-- ADD YOU SIDEBAR HTML HERE  -->
        <div class="p-10 text-2xl mt-10">
          PLACE YOUR SIDEBAR CONTENT HERE
        </div>
    </template>
    <!-- MAIN CONTENT TEMPLATE -->
    <template v-slot:content="{closeMenu,openMenu}">
       <div class="p-2cursor-pointer text-2xl inline-block md:hidden" @click="openMenu()">
            <i class=" bi bi-three-dots-vertical"></i> [ Show Sidebar ]
        </div>
        <!-- ADDED ROUTERVIEW TO MAIN CONTENT AREA  -->
        <div class="p-10 text-2xl">PLACE YOUR CONTENT HERE</div>
        <router-view />
    </template>
  </BraveSidebarLayout>
</template>`),1)]),_:1})])])])]),Q])])}var te=n(A,[["render",X]]);export{te as default};
