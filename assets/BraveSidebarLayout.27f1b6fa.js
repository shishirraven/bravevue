import{_ as l,j as i,k as n,l as c,e as d,c as b,d as e,b as r,w as o,h as t,r as p,o as f,t as s}from"./index.53a5ff0d.js";const m={components:{BraveGistEmbed:i,BraveSlider:n,BraveSyntaxHighlighter:c,BrTaSyntaxHighlighter:d}},u={class:"flex-1 lg:p-16"},h={class:"py-6"},x={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},v=e("h1",{class:"text-4xl font-semibold mb-10"},[e("i",{class:"bi me-2 text-xl bi-window-sidebar text-4xl"}),t(" Sidebar Layout ")],-1),g=e("div",{class:"md:grid md:grid-cols-5 gap-4"},[e("div",{class:"col-span-2"},[e("p",{class:"pb-5"}," Brave Sidebar Layout is a Vue component that allows you to create a sidebar layout with a sidebar and a content area. "),e("p",{class:"pb-5"}," The sidebar of this page is a Live example of Sidebar Layout. ")]),e("div",{class:"col-span-3 md:pl-3 -mx-4 pb-3"},[e("div",{class:"aspect-w-16 aspect-h-9"},[e("iframe",{class:"",src:"https://www.youtube.com/embed/KPPZEVCb4Fo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])])],-1),_=e("hr",null,null,-1),y=e("h2",{class:"text-3xl font-semibold my-7"},"Features",-1),w=e("ul",{class:"my-10"},[e("li",null," 100% customizable, no dependency on any third-party CSS library. "),e("li",null,"Responsive."),e("li",null," Control Sidebar Width with Props. ")],-1),k=e("hr",null,null,-1),E=e("h2",{class:"text-3xl font-semibold my-7"},"How to Use",-1),S={class:"relative space-y-2 mb-16",style:{"counter-reset":"step 0"}},T={class:"relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5",style:{"counter-increment":"step 1"}},B=e("div",{class:"mb-6 col-span-2 xl:mb-0"},[e("h4",{class:"leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"}," Install BraveVue "),e("div",{class:""},[e("p",null,[t("Install "),e("code",null,"`bravevue`"),t(" via npm")])])],-1),C={class:"col-span-3"},L={class:"relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5",style:{"counter-increment":"step 1"}},A=e("div",{class:"mb-6 col-span-2 xl:mb-0"},[e("h4",{class:"leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"}," Import the Component "),e("div",{class:""},[e("p",null,[t("Import "),e("code",null,"`BraveSidebarLayout`"),t(" Component and add it to your components object.")])])],-1),N={class:"col-span-3"},R={class:"relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5",style:{"counter-increment":"step 1"}},M=e("div",{class:"mb-6 col-span-2 xl:mb-0"},[e("h4",{class:"leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"}," Add Component to your template "),e("div",{class:""},[e("p",{class:"text-sm"}," Place component in your template wherever you want the Slider to appear. ")])],-1),I={class:"col-span-5"},D=e("hr",{class:"my-5"},null,-1);function H(O,P,V,j,U,Y){const a=p("BrTaSyntaxHighlighter");return f(),b("main",u,[e("div",h,[e("div",x,[v,g,_,y,w,k,E,e("ol",S,[e("li",T,[B,e("div",C,[r(a,null,{title:o(()=>[t("Terminal")]),code:o(()=>[t(s("npm install bravevue"))]),_:1})])]),e("li",L,[A,e("div",N,[r(a,{langauge:"javascript"},{title:o(()=>[t("app.vue")]),code:o(()=>[t(s(`<script>
import { BraveSidebarLayout } from "bravevue";
import "../node_modules/bravevue/dist/style.css";
export default{
  components: {
    BraveSidebarLayout
  }
}
<\/script>`),1)]),_:1})])]),e("li",R,[M,e("div",I,[r(a,{langauge:"html"},{title:o(()=>[t("app.vue")]),code:o(()=>[t(s(`<template>
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
</template>`),1)]),_:1})])])])]),D])])}const F=l(m,[["render",H]]);export{F as default};