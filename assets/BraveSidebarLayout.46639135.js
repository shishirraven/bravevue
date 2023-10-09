import{_ as l,u as n,x as i,y as c,z as d,e as b,c as p,d as e,b as s,w as o,h as t,g as f,r as m,o as u,t as r}from"./index.f6e566c6.js";const h={mounted(){n({title:"Sidebar Component for Vue 3 | Brave Components Library.",meta:[{name:"description",content:"Brave Sidebar Layout is a Vue component that allows you to create a sidebar layout with a sidebar and a content area."},{name:"keywords",content:"Sidebar, Responsive, Headless, Vue3, Component, Headless, Styleless "},{name:"author",content:"Shishir Raven"}]})},components:{BraveGistEmbed:i,BraveSlider:c,BraveSyntaxHighlighter:d,BrTaSyntaxHighlighter:b}},x={class:"flex-1 lg:p-16"},g={class:"py-6"},y={class:"mx-auto max-w-7xl px-4 sm:px-6 md:px-8"},v=e("h1",{class:"mb-10 text-4xl font-semibold"},[e("i",{class:"bi me-2 bi-window-sidebar text-xl text-4xl"}),t(" Sidebar Layout ")],-1),_=e("div",{class:"gap-4 md:grid md:grid-cols-5"},[e("div",{class:"col-span-2"},[e("p",{class:"pb-5"}," Brave Sidebar Layout is a Vue component that allows you to create a sidebar layout with a sidebar and a content area. "),e("p",{class:"pb-5"}," The sidebar of this page is a Live example of Sidebar Layout. ")]),e("div",{class:"col-span-3 -mx-4 pb-3 md:pl-3"},[e("div",{class:"aspect-w-16 aspect-h-9"},[e("iframe",{class:"",src:"https://www.youtube.com/embed/KPPZEVCb4Fo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])])],-1),S=e("hr",null,null,-1),w=e("h2",{class:"my-7 text-3xl font-semibold"},"Features",-1),k=e("ul",{class:"my-10"},[e("li",null," 100% customizable, no dependency on any third-party CSS library. "),e("li",null,"Responsive."),e("li",null,"Control Sidebar Width with Props.")],-1),E=e("hr",null,null,-1),B=e("h2",{class:"my-7 text-3xl font-semibold"},"How to Use",-1),T={class:"relative mb-16 space-y-2",style:{"counter-reset":"step 0"}},C={class:"dark:before:highlight-white/5 relative grid-cols-5 gap-16 pl-10 pb-8 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-md before:text-[0.625rem] before:font-bold before:text-slate-700 before:shadow-sm before:ring-1 before:ring-slate-900/5 before:content-[counter(step)] after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:shadow-none dark:before:ring-0 dark:after:bg-slate-200/5 xl:grid",style:{"counter-increment":"step 1"}},L=e("div",{class:"col-span-2 mb-6 xl:mb-0"},[e("h4",{class:"mb-2 font-semibold leading-6 text-slate-900 dark:text-slate-200"}," Install BraveVue "),e("div",{class:""},[e("p",null,[t("Install "),e("code",null,"`bravevue`"),t(" via npm")])])],-1),M={class:"col-span-3"},N={class:"dark:before:highlight-white/5 relative grid-cols-5 gap-16 pl-10 pb-8 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-md before:text-[0.625rem] before:font-bold before:text-slate-700 before:shadow-sm before:ring-1 before:ring-slate-900/5 before:content-[counter(step)] after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:shadow-none dark:before:ring-0 dark:after:bg-slate-200/5 xl:grid",style:{"counter-increment":"step 1"}},A=e("div",{class:"col-span-2 mb-6 xl:mb-0"},[e("h4",{class:"mb-2 font-semibold leading-6 text-slate-900 dark:text-slate-200"}," Import the Component "),e("div",{class:""},[e("p",null,[t(" Import "),e("code",null,"`BraveSidebarLayout`"),t(" Component and add it to your components object. ")])])],-1),H={class:"col-span-3"},R={class:"dark:before:highlight-white/5 relative grid-cols-5 gap-16 pl-10 pb-8 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-md before:text-[0.625rem] before:font-bold before:text-slate-700 before:shadow-sm before:ring-1 before:ring-slate-900/5 before:content-[counter(step)] after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:shadow-none dark:before:ring-0 dark:after:bg-slate-200/5 xl:grid",style:{"counter-increment":"step 1"}},V=e("div",{class:"col-span-2 mb-6 xl:mb-0"},[e("h4",{class:"mb-2 font-semibold leading-6 text-slate-900 dark:text-slate-200"}," Add Component to your template "),e("div",{class:""},[e("p",{class:"text-sm"}," Place component in your template wherever you want the Slider to appear. ")])],-1),D={class:"col-span-5"},I=f('<hr class="my-5"><h2 class="mt-30" id="slots"> Slots <a href="#slots" name="slots" class="anchor"><span class="anchor-target" id="slots"></span><span class="glyphicon glyphicon-link"></span></a></h2><table><tbody><tr><td class="py-4 px-6"><strong>Name </strong></td><td class="py-4 px-6"><strong>Scoped </strong></td><td class="py-4 px-6"><strong>Description </strong></td></tr><tr><td class="py-4 px-6">Content</td><td class="py-4 px-6">Yes</td><td class="py-4 px-6"><p>Content Slot</p><p> Here is where you page content will go. <br><b>Scoped function</b> closeMenu() - close the sidebar <br><b>Scoped function</b> openMenu() - open the sidebar <br><b>Scoped function</b> panelState() - returns the current state of the sidebar <br></p></td></tr><tr><td class="py-4 px-6">sidebar</td><td class="py-4 px-6">Yes</td><td class="py-4 px-6"><p>Sidebar Slot</p><p> Here is where you Sidebar Content will go. <br><br><b>Scoped function</b> closeMenu() - close the sidebar <br><b>Scoped function</b> openMenu() - open the sidebar <br><b>Scoped function</b> panelState() - returns the current state of the sidebar <br></p></td></tr></tbody></table>',3);function O(P,Y,j,U,$,z){const a=m("BrTaSyntaxHighlighter");return u(),p("main",x,[e("div",g,[e("div",y,[v,_,S,w,k,E,B,e("ol",T,[e("li",C,[L,e("div",M,[s(a,null,{title:o(()=>[t("Terminal")]),code:o(()=>[t(r("npm install bravevue"))]),_:1})])]),e("li",N,[A,e("div",H,[s(a,{langauge:"javascript"},{title:o(()=>[t("app.vue")]),code:o(()=>[t(r(`
                  <script>
                    import { BraveSidebarLayout } from "bravevue";
                    import "../node_modules/bravevue/dist/style.css";
                    export default {
                      components: {
                        BraveSidebarLayout,
                      },
                    };
                  <\/script>
                  `),1)]),_:1})])]),e("li",R,[V,e("div",D,[s(a,{langauge:"html"},{title:o(()=>[t("app.vue")]),code:o(()=>[t(r(`<template>
                    <BraveSidebarLayout
                      sidebar-class="  bg-slate-900 flex flex-col text-white "
                      :sidebar-width="300"
                    >
                      <!-- SIDEBAR TEMPLATE -->
                      <template v-slot:sidebar="{ closeMenu, openMenu }">
                        <div
                          @click="closeMenu()"
                          class="absolute right-0 top-0 cursor-pointer p-2 text-2xl md:hidden"
                        >
                          [ Close Sidebar ]
                        </div>
                        <!-- ADD YOU SIDEBAR HTML HERE  -->
                        <div class="mt-10 p-10 text-2xl">
                          PLACE YOUR SIDEBAR CONTENT HERE
                        </div>
                      </template>
                      <!-- MAIN CONTENT TEMPLATE -->
                      <template v-slot:content="{ closeMenu, openMenu }">
                        <div
                          class="p-2cursor-pointer inline-block text-2xl md:hidden"
                          @click="openMenu()"
                        >
                          <i class="bi bi-three-dots-vertical"></i> [ Show
                          Sidebar ]
                        </div>
                        <!-- ADDED ROUTERVIEW TO MAIN CONTENT AREA  -->
                        <div class="p-10 text-2xl">PLACE YOUR CONTENT HERE</div>
                        <router-view />
                      </template>
                    </BraveSidebarLayout> </template
                  >`),1)]),_:1})])])])]),I])])}const W=l(h,[["render",O]]);export{W as default};
