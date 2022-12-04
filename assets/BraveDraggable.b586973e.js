import{_ as h,j as m,k as x,l as f,e as y,y as v,c as k,b as d,w as a,d as e,t as l,h as t,g as b,r as c,o as w,p as _}from"./index.3224c9c7.js";const D=""+new URL("vue_draggable_demo.049e4fa8.gif",import.meta.url).href,T={components:{BraveGistEmbed:m,BraveSlider:x,BraveSyntaxHighlighter:f,BrTaSyntaxHighlighter:y,BraveDraggable:v},data(){return{config:{visible:!0,width:"200px",height:"100px",position:{top:"10px",right:"10px"},placement:"top-right"}}}},B={class:"flex-1 lg:p-16"},H=["onMousedown","onTouchstart","onTouchmove","onTouchend"],C=e("i",{class:"bi bi-arrows-move"},null,-1),S={class:"p-5"},I={class:"text-white text-sm"},O={class:"bg-indigo-900 px-5 py-2 rounded-b-lg flex justify-end gap-x-2"},j=["onClick"],N={class:"py-6"},M={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},E=e("h1",{class:"text-4xl font-semibold mb-10"},[e("i",{class:"bi me-2 text-xl bi-arrows-move md:text-4xl"}),t(" Draggable ")],-1),V={class:"md:grid md:grid-cols-2 gap-4 prose dark:prose-invert max-w-none"},W={class:"col-span-2"},P=e("p",{class:""}," Brave Draggable is a Vue component that helps you make any element draggable with mouse or touch. ",-1),U=e("p",null,[t(" It is a "),e("b",{class:"text-blue-500"},"Wrapper Component"),t(" that wraps the draggable element and provides the necessary events and methods to make it draggable. ")],-1),A=e("p",null," The draggable element can be a div, a button, Image modal or any other element. You can set any element as a handle to drag the element. ",-1),z=e("p",null,null,-1),R={class:"mt-10"},G=b('<div class=""><img class="border" src="'+D+'" alt="draggable demo"></div><hr><div class="prose dark:prose-invert"><h2 class="text-3xl font-semibold my-7">Features</h2><ul class="my-10"><li> \u{1F3A8} Unstyled and unopinionated. You can style it as you want. </li><li> \u{1F9ED} Automatic Docking </li><li> \u{1F9F2} Center Snapping with Visual Guide </li><li> \u261D Touch Support </li></ul></div><hr><h2 class="text-3xl font-semibold my-7">How to Use</h2>',5),L={class:"relative space-y-2 mb-16",style:{"counter-reset":"step 0"}},Y={class:"relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5",style:{"counter-increment":"step 1"}},q=e("div",{class:"mb-6 col-span-2 xl:mb-0"},[e("h4",{class:"leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"}," Install BraveVue "),e("div",{class:""},[e("p",null,[t("Install "),e("code",null,"`bravevue`"),t(" via npm")])])],-1),F={class:"col-span-3"},J={class:"relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5",style:{"counter-increment":"step 1"}},K=e("div",{class:"mb-6 col-span-2 xl:mb-0"},[e("h4",{class:"leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"}," Import the Component "),e("div",{class:""},[e("p",null,[t("Import "),e("code",null,"`BraveDraggable`"),t(" Component and add it to your components object.")])])],-1),Q={class:"col-span-3"},X={class:"relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5",style:{"counter-increment":"step 1"}},Z=e("div",{class:"mb-6 col-span-2 xl:mb-0"},[e("h4",{class:"leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"}," Add Component to your template "),e("div",{class:""},[e("p",{class:"text-sm"}," Place component in your template wherever you want the Slider to appear. ")])],-1),$={class:"col-span-5"},ee=e("div",{class:"prose dark:prose-invert max-w-none mt-10"},[e("h3",null,[e("span",{class:"text-blue-500"}," Note : "),t(" The element you choose for the handle in your UI, you need to add the following event listeners. ")]),e("ul",null,[e("li",null,'@mousedown="onHandleMouseDown"'),e("li",null,'@touchstart="onHandleMouseDown'),e("li",null,'@touchmove="onHandleTouchMove" '),e("li",null,'@touchend="onHandleTouchEnd"')])],-1),te=b('<hr class="my-5"><div class="prose dark:prose-invert max-w-none"><h2>Options</h2><div class="overflow-x-auto"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"><thead class="bg-gray-50 dark:bg-gray-700"><tr class="text-xs font-medium uppercase"><th scope="col" class="px-6 py-3"> Parameter </th><th scope="col" class="px-6 py-3"> Type </th><th scope="col" class="px-6 py-3"> Required </th><th scope="col" class="px-6 py-3"> Description </th></tr></thead><tbody><tr class="border-b dark:bg-gray-800 dark:border-gray-700"><td class="px-6 py-4 font-medium"><code class="text-blue-600 dark:text-blue-400">width</code></td><td class="px-6 py-4"> Number </td><td class="px-6 py-4"> Optional </td><td class="px-6 py-4"> Width of the Draggable Window </td></tr><tr class="border-b dark:bg-gray-800 dark:border-gray-700"><td class="px-6 py-4 font-medium"><code class="text-blue-600 dark:text-blue-400">height</code></td><td class="px-6 py-4"> Number </td><td class="px-6 py-4"> Optional </td><td class="px-6 py-4"> Height of the Draggable Window </td></tr><tr class="border-b dark:bg-gray-800 dark:border-gray-700"><td class="px-6 py-4 font-medium"><code class="text-blue-600 dark:text-blue-400">AutomaticDocking</code></td><td class="px-6 py-4"> Boolean </td><td class="px-6 py-4"> Optional </td><td class="px-6 py-4"> Weather to enable automatic docking or not. If enabled, the component will dock to the nearest edges. </td></tr><tr class="border-b dark:bg-gray-800 dark:border-gray-700"><td class="px-6 py-4 font-medium"><code class="text-blue-600 dark:text-blue-400">Placement</code></td><td class="px-6 py-4"> String </td><td class="px-6 py-4"> Optional </td><td class="px-6 py-4"> The placement of the component. Can be one of <code class="text-blue-600 dark:text-blue-400">top-left</code> or <code class="text-blue-600 dark:text-blue-400">top-center</code> or <code class="text-blue-600 dark:text-blue-400">top-right</code> or <code class="text-blue-600 dark:text-blue-400">bottom-left</code> or <code class="text-blue-600 dark:text-blue-400">bottom-center</code> or <code class="text-blue-600 dark:text-blue-400">bottom-right</code> or <code class="text-blue-600 dark:text-blue-400">left-top</code> or <code class="text-blue-600 dark:text-blue-400">left-center</code> or <code class="text-blue-600 dark:text-blue-400">left-bottom</code> or <code class="text-blue-600 dark:text-blue-400">right-top</code> or <code class="text-blue-600 dark:text-blue-400">right-center</code> or <code class="text-blue-600 dark:text-blue-400">right-bottom</code></td></tr><tr class="border-b dark:bg-gray-800 dark:border-gray-700"><td class="px-6 py-4 font-medium"><code class="text-blue-600 dark:text-blue-400">position</code></td><td class="px-6 py-4"> Object </td><td class="px-6 py-4"> Optional </td><td class="px-6 py-4"> Position of the component. <br><p>If placement is <code class="text-blue-600 dark:text-blue-400">top-left</code></p><code class="text-blue-600 dark:text-blue-400">position.top</code> - x position of the component. <br><code class="text-blue-600 dark:text-blue-400">position.left</code> - y position of the component. <br><p> Similarly for other placements. </p></td></tr><tr class="border-b dark:bg-gray-800 dark:border-gray-700"><td class="px-6 py-4 font-medium"><code class="text-blue-600 dark:text-blue-400">bounds</code></td><td class="px-6 py-4"> Object </td><td class="px-6 py-4"> Optional </td><td class="px-6 py-4"> Bounds of the component. <br> The component will not be draggable outside these bounds. <br><br><code class="text-blue-600 dark:text-blue-400">bounds.top</code> - x of the component. <br><code class="text-blue-600 dark:text-blue-400">bounds.left</code> - y of the component. <br><code class="text-blue-600 dark:text-blue-400">bounds.bottom</code> - x of the component. <br><code class="text-blue-600 dark:text-blue-400">bounds.right</code> - y of the component. <br></td></tr><tr class="border-b dark:bg-gray-800 dark:border-gray-700"><td class="px-6 py-4 font-medium"><code class="text-blue-600 dark:text-blue-400">snappingDistance</code></td><td class="px-6 py-4"> Number </td><td class="px-6 py-4"> Optional </td><td class="px-6 py-4"> Distance from the center of the screen to snap to horizontal or vertical center </td></tr></tbody></table></div></div><hr class="my-5">',3);function oe(re,r,se,ae,o,le){const p=c("BraveDraggable",!0),n=c("BrTaSyntaxHighlighter");return w(),k("main",B,[d(p,{class:"",automaticDocking:!1,rotatable:!0,width:o.config.width,"onUpdate:width":r[0]||(r[0]=s=>o.config.width=s),height:o.config.height,"onUpdate:height":r[1]||(r[1]=s=>o.config.height=s),reSizable:!0,visible:o.config.visible,position:o.config.position,placement:o.config.placement,onPlacementChange:r[2]||(r[2]=s=>o.config.placement=s),onPositionChange:r[3]||(r[3]=s=>o.config.position=s)},{default:a(({hide:s,onHandleMouseDown:i,onHandleTouchMove:g,onHandleTouchEnd:u})=>[e("div",{style:_({width:o.config.width,height:o.config.height}),class:"overflow-auto rounded-lg bg-indigo-800 text-white shadow-lg border border-white"},[e("div",{onMousedown:i,onTouchstart:i,onTouchmove:g,onTouchend:u,class:"cursor-move bg-indigo-900 px-5 py-2 rounded-t-lg flex gap-x-2"},[C,t(" Demo Draggable Window ")],40,H),e("div",S,[e("p",I,[e("pre",null,l(o.config),1),t(" Hey, I am a Brave Draggable. Try to use the Title bar in this window to drag me arround. ")])]),e("div",O,[e("button",{type:"button",onClick:s,class:"text-white-900 border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-3 py-1 bg-indigo-900 border-indigo-100 hover:bg-indigo-700 hover:border-indigo-600 focus:ring-gray-700"}," Close Demo ",8,j)])],4)]),_:1},8,["width","height","visible","position","placement"]),e("div",N,[e("div",M,[E,e("div",V,[e("div",W,[P,U,A,z,e("p",null,[e("div",R,[e("button",{type:"button",onClick:r[4]||(r[4]=s=>o.config.visible=!o.config.visible),class:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1 dark:bg-indigo-900 dark:text-white dark:border-indigo-100 dark:hover:bg-indigo-700 dark:hover:border-indigo-600 dark:focus:ring-gray-700"},l(o.config.visible?"Hide":"Show")+" live demo ",1)])])])]),G,e("ol",L,[e("li",Y,[q,e("div",F,[d(n,null,{title:a(()=>[t("Terminal")]),code:a(()=>[t(l("npm install bravevue"))]),_:1})])]),e("li",J,[K,e("div",Q,[d(n,{langauge:"javascript"},{title:a(()=>[t("app.vue")]),code:a(()=>[t(l(`<script>
import { BraveDraggable } from "bravevue";
import "../node_modules/bravevue/dist/style.css";
export default{
  components: {
    BraveDraggable
  }
}
<\/script>`),1)]),_:1})])]),e("li",X,[Z,e("div",$,[d(n,{langauge:"html"},{title:a(()=>[t("app.vue")]),code:a(()=>[t(l(`<template>
    <BraveDraggable 
        class=""
        :visible="config.visible"
        :position="config.position"
        :placement="config.placement"
        v-slot="{hide, onHandleMouseDown,onHandleTouchMove,onHandleTouchEnd}"
        @placement-change="config.placement = $event"
        @position-change="config.position = $event"
        >  
        <div class="rounded-lg bg-white dark:bg-indigo-800 dark:text-white shadow-lg  border border-white w-80"><!-- Body -->
            <!-- TITLE BAR -->
            <div @mousedown="onHandleMouseDown" 
                @touchstart="onHandleMouseDown"  
                @touchmove="onHandleTouchMove" 
                @touchend="onHandleTouchEnd"  
                class="cursor-move bg-slate-100 dark:bg-indigo-900 px-5 py-2 rounded-t-lg flex  gap-x-2">
                <!-- bootstrap move icon -->
                <i class="bi bi-arrows-move"></i>
                Demo Draggable Window
            </div>

            <!-- CONTENT -->
            <div class="p-5">
                <p class="text-gray-500 dark:text-white text-sm">
                    Hey, I am a Brave Draggable. Try to use the Title bar in this window to drag me arround.
                </p>
            </div>
            <!-- Buttons -->
            <div class="bg-slate-100 dark:bg-indigo-900 px-5 py-2 rounded-b-lg flex justify-end gap-x-2">
                <button type="button" @click="hide" class="text-gray-900 bg-white border border-gray-300 focus:outline-none
                hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1 dark:bg-indigo-900
                dark:text-white dark:border-indigo-100 dark:hover:bg-indigo-700 dark:hover:border-indigo-600
                dark:focus:ring-gray-700"> 
                    Close Demo </button>
            </div>
        </div>
    </BraveDraggable>
</template>
<script>
import { BraveDraggable } from "bravevue";
export default {
  components: { BraveDraggable },
  data(){
    return {
        config : {
                    visible: true,
                    position: {
                        top: '10px',
                        right: '10px'
                    },
                    placement: 'top-right'
                }
    }
  }
};
<\/script>
`),1)]),_:1}),ee])])])]),te])])}const ne=h(T,[["render",oe]]);export{ne as default};
