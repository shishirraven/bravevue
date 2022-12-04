import{_ as c,m as f,r as l,o as p,c as d,d as e,b as i,w as t,F as v,n as y,j as S,e as B,f as _,P as k,g as m,h as s,t as q}from"./index.2fad9f7c.js";const w={components:{BraveBottomSheet:f},data(){return{state:"closed"}}},T={class:"flex lg:flex-row flex-col gap-2 mt-3"},C=e("div",{class:"mb-3 flex justify-center"},[e("div",{class:"h-1 w-16 rounded-full bg-slate-500"})],-1),P=e("div",{class:"p-5"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto eaque possimus, sit fugiat distinctio mollitia reiciendis incidunt corporis accusantium, consequuntur quos non ipsa dolorum sapiente debitis obcaecati asperiores cum. ",-1);function $(u,a,h,x,o,b){const r=l("BraveBottomSheet",!0);return p(),d(v,null,[e("div",T,[e("button",{onClick:a[0]||(a[0]=n=>o.state="half"),type:"button",class:"text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:flex-1"},"Half Open Bottom Sheet"),e("button",{onClick:a[1]||(a[1]=n=>o.state="full"),class:"text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:flex-1"},"Open Bottom Sheet to Full Height")]),i(r,{class:"bg-slate-200 border border-slate-600 dark:bg-slate-900 rounded-t-3xl pt-2",state:o.state,"sheet-close":"10%","sheet-half-open":"50%","sheet-full-open":"90%"},{default:t(()=>[C,P]),_:1},8,["state"])],64)}const H=c(w,[["render",$]]),E={components:{BraveRadialMenu:y,BraveGistEmbed:S,BrTaSyntaxHighlighter:B,BrTaTabs:_,PillsTab:k,BraveBottomSheet:H}},L={class:"flex-1 p-4 lg:p-10 xl:p-16"},N=m('<div class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block"><h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100"> On this page </h5><div id="navigation"><ul class="navtext-slate-700 text-sm leading-6"><li class="mb-2"><a href="#introduction" class="text-slate-900 dark:text-slate-100"> Introduction </a></li><li class="mb-2"><a href="#live-example" class="text-slate-900 dark:text-slate-100"> Live example </a></li><li class="mb-2"><a href="#tailwindcss-styled-pills-example" class="text-slate-900 dark:text-slate-100"> Pills Styled example with Tailwind CSS </a></li><li class><a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="#props">Props</a></li><li class><a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="#slots">Slots</a></li></ul></div></div>',1),G={class:"prose dark:prose-invert prose-slate"},R=e("h1",{id:"introduction"},[e("i",{class:"bi bi-layer-forward mr-3"}),s(" Brave Bottom Sheets")],-1),V=e("p",null," Bottom sheets are surfaces containing supplementary content that are anchored to the bottom of the screen. ",-1),Y=e("p",null," Bottom Sheets has a backdrop, and automaticaly closes when you click outside of it. You can style the bottom sheet with your own CSS classes. ",-1),A=e("h3",{id:"live-example"},"Live Example",-1),D=e("p",null,"Please check the bottom of this Screen to see the Bottom Sheets.",-1),F=m('<h2 id="props"> Props <a href="#props" name="props" class="anchor"><span class="anchor-target" id="props"></span><span class="glyphicon glyphicon-link"></span></a></h2><table><thead class="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400"><tr><th scope="col" class="py-3 px-6">Prop</th><th scope="col" class="py-3 px-6">Type</th><th scope="col" class="py-3 px-6">Default</th><th scope="col" class="py-3 px-6">Description</th></tr></thead><tr><td class="py-4 px-6">state</td><td class="py-4 px-6">String</td><td class="py-4 px-6">closed</td><td class="py-4 px-6"><p>Thre are three possible states &#39;closed&#39;, &#39;half&#39; and full. </p><p>You can this to set the intial state or programatically update the state. </p><p> Example : <code class="text-blue-500">state=&quot;half&quot;</code></p></td></tr><tr><td class="py-4 px-6">closeHeight</td><td class="py-4 px-6">String</td><td class="py-4 px-6">10%</td><td class="py-4 px-6"><p>Height you desire when the Bottom Sheet is in Closed States</p><p> Example : You could use any CSS height value like <br><code class="text-blue-500"> 10% </code> , <code class="text-blue-500"> 100px </code> , <code class="text-blue-500"> 10rem </code> , <code class="text-blue-500"> 10vh </code> , etc. </p></td></tr><tr><td class="py-4 px-6">halfHeight</td><td class="py-4 px-6">String</td><td class="py-4 px-6">50%</td><td class="py-4 px-6"><p>Height you desire when the Bottom Sheet is in Half States</p><p> Example : You could use any CSS height value like <br><code class="text-blue-500"> 10% </code> , <code class="text-blue-500"> 100px </code> , <code class="text-blue-500"> 10rem </code> , <code class="text-blue-500"> 10vh </code> , etc. </p></td></tr><tr><td class="py-4 px-6">fullHeight</td><td class="py-4 px-6">String</td><td class="py-4 px-6">90%</td><td class="py-4 px-6"><p>Height you desire when the Bottom Sheet is in <b>Full States</b></p><p> Example : You could use any CSS height value like <br><code class="text-blue-500"> 10% </code> , <code class="text-blue-500"> 100px </code> , <code class="text-blue-500"> 10rem </code> , <code class="text-blue-500"> 10vh </code> , etc. </p></td></tr></table><h2 class="mt-30" id="slots"> Slots <a href="#slots" name="slots" class="anchor"><span class="anchor-target" id="slots"></span><span class="glyphicon glyphicon-link"></span></a></h2><table class="mb-28"><tr><td class="py-4 px-6"><strong>Name </strong></td><td class="py-4 px-6"><strong>Scoped </strong></td><td class="py-4 px-6"><strong>Description </strong></td></tr><tr><td class="py-4 px-6">default</td><td class="py-4 px-6"> No </td><td class="py-4 px-6"><p>Content of the Bottom Sheet. </p></td></tr></table>',4);function j(u,a,h,x,o,b){const r=l("BraveBottomSheet",!0),n=l("BrTaSyntaxHighlighter"),g=l("BrTaTabs");return p(),d("main",L,[N,e("div",G,[R,V,Y,A,i(g,{class:"not-prose",tabs:["example","code"],initialTab:"example"},{"tab-head-example":t(()=>[s("Basic Example")]),"tab-panel-example":t(()=>[D,i(r)]),"tab-head-code":t(()=>[s("Source Code")]),"tab-panel-code":t(()=>[i(n,{language:"javascript"},{title:t(()=>[s("BraveTabsExample.vue")]),code:t(()=>[s(q(`<template>
  <BraveTabs ref="bravetabref" class="text-black dark:text-white my-10" tabs-wrapper-class="flex items-center"
    tabs-content-class="border  p-10 dark:bg-slate-800"
    tab-button-class="px-4 py-2 mr-px cursor-pointer rounded-t-lg mr-0 dark:bg-slate-900 bg-gray-50 hover:dark:bg-slate-800 hover:bg-gray-200"
    tab-button-active-class="px-4 py-2 mr-px shadow-inner-sm -mb-px border rounded-t-lg border-b-0 dark:bg-slate-800 bg-white "
    v-bind:tabs="['mobile','appliances','computers','gaming']" initialTab="mobile">
    <template #before-tab>
      <div class="px-2"><img class="h-7 w-auto" src="@/assets/images/logo.svg" alt="BraveVue" /></div>
    </template>
    <template #after-tab>
      <div class="px-2 grow text-right">
        <div class="inline-block">Help</div>
      </div>
    </template>
    <!-- ================================================================ -->
    <!-- SETTINGS PANEL  -->
    <!-- ================================================================ -->
    <template #tab-head-mobile>Mobile</template>
    <template #tab-panel-mobile>
      <h1 class="text-3xl mb-5">Content for mobile Panel</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae
        maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
    </template>

    <!-- Appliance Panel -->

    <template #tab-head-appliances>Appliances</template>
    <template #tab-panel-appliances>
      <h1 class="text-3xl mb-5">Content for Appliances Panel</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae
        maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
    </template>

    <!-- Computer Panel -->

    <template #tab-head-computers>\u{1F4BB} Computers</template>
    <template #tab-panel-computers>
      <h1 class="text-3xl mb-5">Content for Computers Panel</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae
        maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
    </template>

    <!-- Gaming Panel -->

    <template #tab-head-gaming> Gaming</template>
    <template #tab-panel-gaming>
      <h1 class="text-3xl mb-5">Content for Gaming Panel</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae
        maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
    </template>
  </BraveTabs>
</template>
<script>
import { BraveTabs } from "bravevue";
export default {
  components: { BraveTabs },
};
<\/script>
`),1)]),_:1})]),_:1}),F])])}const I=c(E,[["render",j]]);export{I as default};
