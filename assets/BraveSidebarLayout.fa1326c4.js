import{_ as l,B as i,a as n,b as c,c as d,r as b,o as p,d as f,e,f as s,w as o,g as t,t as r}from"./index.a7cb9956.js";const m={components:{BraveGistEmbed:i,BraveSlider:n,BraveSyntaxHighlighter:c,BrTaSyntaxHighlighter:d}},h={class:"flex-1 lg:p-16"},u={class:"py-6"},x={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},_=e("h1",{class:"text-4xl font-semibold mb-10"},[e("i",{class:"bi me-2 text-xl bi-window-sidebar text-4xl"}),t(" Sidebar Layout ")],-1),v=e("div",{class:"md:grid md:grid-cols-5 gap-4"},[e("div",{class:"col-span-2"},[e("p",{class:"pb-5"}," Brave Sidebar Layout is a Vue component that allows you to create a sidebar layout with a sidebar and a content area. "),e("p",{class:"pb-5"}," The sidebar of this page is a Live example of Sidebar Layout. ")]),e("div",{class:"col-span-3 md:pl-3 -mx-4 pb-3"},[e("div",{class:"aspect-w-16 aspect-h-9"},[e("iframe",{class:"",src:"https://www.youtube.com/embed/KPPZEVCb4Fo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])])],-1),g=e("hr",null,null,-1),y=e("h2",{class:"text-3xl font-semibold my-7"},"Features",-1),w=e("ul",{class:"my-10"},[e("li",null," 100% customizable, no dependency on any third-party CSS library. "),e("li",null,"Responsive."),e("li",null," Control Sidebar Width with Props. ")],-1),k=e("hr",null,null,-1),E=e("h2",{class:"text-3xl font-semibold my-7"},"How to Use",-1),S={class:"relative space-y-2 mb-16",style:{"counter-reset":"step 0"}},T={class:"relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5",style:{"counter-increment":"step 1"}},B=e("div",{class:"mb-6 col-span-2 xl:mb-0"},[e("h4",{class:"leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"}," Install BraveVue "),e("div",{class:""},[e("p",null,[t("Install "),e("code",null,"`bravevue`"),t(" via npm")])])],-1),C={class:"col-span-3"},L=t("Terminal"),A=t(r("npm install bravevue")),N={class:"relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5",style:{"counter-increment":"step 1"}},R=e("div",{class:"mb-6 col-span-2 xl:mb-0"},[e("h4",{class:"leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"}," Import the Component "),e("div",{class:""},[e("p",null,[t("Import "),e("code",null,"`BraveSidebarLayout`"),t(" Component and add it to your components object.")])])],-1),M={class:"col-span-3"},I=t("app.vue"),D={class:"relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5",style:{"counter-increment":"step 1"}},H=e("div",{class:"mb-6 col-span-2 xl:mb-0"},[e("h4",{class:"leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"}," Add Component to your template "),e("div",{class:""},[e("p",{class:"text-sm"}," Place component in your template wherever you want the Slider to appear. ")])],-1),O={class:"col-span-5"},P=t("app.vue"),V=e("hr",{class:"my-5"},null,-1);function j(U,Y,$,F,W,z){const a=b("BrTaSyntaxHighlighter");return p(),f("main",h,[e("div",u,[e("div",x,[_,v,g,y,w,k,E,e("ol",S,[e("li",T,[B,e("div",C,[s(a,null,{title:o(()=>[L]),code:o(()=>[A]),_:1})])]),e("li",N,[R,e("div",M,[s(a,{langauge:"javascript"},{title:o(()=>[I]),code:o(()=>[t(r(`<script>
import { BraveSidebarLayout } from "bravevue";
import "../node_modules/bravevue/dist/style.css";
export default{
  components: {
    BraveSidebarLayout
  }
}
<\/script>`),1)]),_:1})])]),e("li",D,[H,e("div",O,[s(a,{langauge:"html"},{title:o(()=>[P]),code:o(()=>[t(r(`<template>
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
</template>`),1)]),_:1})])])])]),V])])}var K=l(m,[["render",j]]);export{K as default};
