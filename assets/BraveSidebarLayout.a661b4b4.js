import{_ as l,u as i,j as n,k as c,l as d,e as b,c as p,d as e,b as s,w as a,h as t,r as f,o as m,t as r}from"./index.031baf26.js";const u={mounted(){i({title:"Sidebar Component for Vue 3 | Brave Components Library.",meta:[{name:"description",content:"Brave Sidebar Layout is a Vue component that allows you to create a sidebar layout with a sidebar and a content area."},{name:"keywords",content:"Sidebar, Responsive, Headless, Vue3, Component, Headless, Styleless "},{name:"author",content:"Shishir Raven"}]})},components:{BraveGistEmbed:n,BraveSlider:c,BraveSyntaxHighlighter:d,BrTaSyntaxHighlighter:b}},h={class:"flex-1 lg:p-16"},x={class:"py-6"},v={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},g=e("h1",{class:"text-4xl font-semibold mb-10"},[e("i",{class:"bi me-2 text-xl bi-window-sidebar text-4xl"}),t(" Sidebar Layout ")],-1),_=e("div",{class:"md:grid md:grid-cols-5 gap-4"},[e("div",{class:"col-span-2"},[e("p",{class:"pb-5"}," Brave Sidebar Layout is a Vue component that allows you to create a sidebar layout with a sidebar and a content area. "),e("p",{class:"pb-5"}," The sidebar of this page is a Live example of Sidebar Layout. ")]),e("div",{class:"col-span-3 md:pl-3 -mx-4 pb-3"},[e("div",{class:"aspect-w-16 aspect-h-9"},[e("iframe",{class:"",src:"https://www.youtube.com/embed/KPPZEVCb4Fo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])])],-1),y=e("hr",null,null,-1),w=e("h2",{class:"text-3xl font-semibold my-7"},"Features",-1),S=e("ul",{class:"my-10"},[e("li",null," 100% customizable, no dependency on any third-party CSS library. "),e("li",null,"Responsive."),e("li",null," Control Sidebar Width with Props. ")],-1),k=e("hr",null,null,-1),E=e("h2",{class:"text-3xl font-semibold my-7"},"How to Use",-1),B={class:"relative space-y-2 mb-16",style:{"counter-reset":"step 0"}},T={class:"relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5",style:{"counter-increment":"step 1"}},C=e("div",{class:"mb-6 col-span-2 xl:mb-0"},[e("h4",{class:"leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"}," Install BraveVue "),e("div",{class:""},[e("p",null,[t("Install "),e("code",null,"`bravevue`"),t(" via npm")])])],-1),L={class:"col-span-3"},A={class:"relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5",style:{"counter-increment":"step 1"}},R=e("div",{class:"mb-6 col-span-2 xl:mb-0"},[e("h4",{class:"leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"}," Import the Component "),e("div",{class:""},[e("p",null,[t("Import "),e("code",null,"`BraveSidebarLayout`"),t(" Component and add it to your components object.")])])],-1),N={class:"col-span-3"},H={class:"relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5",style:{"counter-increment":"step 1"}},M=e("div",{class:"mb-6 col-span-2 xl:mb-0"},[e("h4",{class:"leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"}," Add Component to your template "),e("div",{class:""},[e("p",{class:"text-sm"}," Place component in your template wherever you want the Slider to appear. ")])],-1),I={class:"col-span-5"},V=e("hr",{class:"my-5"},null,-1);function D(O,P,j,U,Y,$){const o=f("BrTaSyntaxHighlighter");return m(),p("main",h,[e("div",x,[e("div",v,[g,_,y,w,S,k,E,e("ol",B,[e("li",T,[C,e("div",L,[s(o,null,{title:a(()=>[t("Terminal")]),code:a(()=>[t(r("npm install bravevue"))]),_:1})])]),e("li",A,[R,e("div",N,[s(o,{langauge:"javascript"},{title:a(()=>[t("app.vue")]),code:a(()=>[t(r(`<script>
import { BraveSidebarLayout } from "bravevue";
import "../node_modules/bravevue/dist/style.css";
export default{
  components: {
    BraveSidebarLayout
  }
}
<\/script>`),1)]),_:1})])]),e("li",H,[M,e("div",I,[s(o,{langauge:"html"},{title:a(()=>[t("app.vue")]),code:a(()=>[t(r(`<template>
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
</template>`),1)]),_:1})])])])]),V])])}const W=l(u,[["render",D]]);export{W as default};
