import { _ as _export_sfc, e as BraveGistEmbed, f as BraveSlider, g as BraveSyntaxHighlighter, b as BrTaSyntaxHighlighter, m as BraveDraggable$1 } from "../main.mjs";
import { useHead } from "@vueuse/head";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "uuid";
import "vue-router";
import "vuedraggable";
import "vite-ssg";
const _imports_0 = "/assets/vue_draggable_demo.049e4fa8.gif";
const _sfc_main = {
  mounted() {
    useHead({
      title: "Draggable Component for Vue 3 | Brave Components Library.",
      meta: [
        {
          name: "description",
          content: "Brave Draggable is a Vue component that helps you make any element draggable with mouse or touch."
        },
        {
          name: "keywords",
          content: "Draggable, Dockable, Rotatable, Resizable"
        },
        {
          name: "author",
          content: "Shishir Raven"
        }
      ]
    });
  },
  components: { BraveGistEmbed, BraveSlider, BraveSyntaxHighlighter, BrTaSyntaxHighlighter, BraveDraggable: BraveDraggable$1 },
  data() {
    return {
      config: {
        selected: false,
        visible: true,
        width: "200px",
        height: "100px",
        position: {
          top: "10px",
          right: "10px"
        },
        placement: "top-right"
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveDraggable = resolveComponent("BraveDraggable", true);
  const _component_BrTaSyntaxHighlighter = resolveComponent("BrTaSyntaxHighlighter");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 lg:p-16" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BraveDraggable, {
    class: "",
    automaticDocking: false,
    rotatable: true,
    selected: $data.config.selected,
    width: $data.config.width,
    "onUpdate:width": ($event) => $data.config.width = $event,
    height: $data.config.height,
    "onUpdate:height": ($event) => $data.config.height = $event,
    reSizable: true,
    visible: $data.config.visible,
    position: $data.config.position,
    placement: $data.config.placement,
    onPlacementChange: ($event) => $data.config.placement = $event,
    onPositionChange: ($event) => $data.config.position = $event
  }, {
    default: withCtx(({ hide, onHandleMouseDown, onHandleTouchMove, onHandleTouchEnd }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ width: $data.config.width, height: $data.config.height })}" class="overflow-auto rounded-lg bg-indigo-800 text-white shadow-lg border border-white h-screen flex flex-col"${_scopeId}><div class="cursor-move bg-indigo-900 px-5 py-2 rounded-t-lg flex gap-x-2"${_scopeId}><i class="bi bi-arrows-move"${_scopeId}></i> Demo Draggable Window </div><div class="p-5 grow overflow-auto"${_scopeId}><p class="text-white text-sm"${_scopeId}><pre${_scopeId}>${ssrInterpolate($data.config)}</pre> Hey, I am a Brave Draggable3. Try to use the Title bar in this window to drag me arround. </p></div><div class="bg-indigo-900 px-5 py-2 rounded-b-lg flex justify-end gap-x-2"${_scopeId}><button type="button" class="text-white-900 border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-3 py-1 bg-indigo-900 border-indigo-100 hover:bg-indigo-700 hover:border-indigo-600 focus:ring-gray-700"${_scopeId}> Close Demo </button></div></div>`);
      } else {
        return [
          createVNode("div", {
            onClick: ($event) => $data.config.selected = false,
            style: { width: $data.config.width, height: $data.config.height },
            class: "overflow-auto rounded-lg bg-indigo-800 text-white shadow-lg border border-white h-screen flex flex-col"
          }, [
            createVNode("div", {
              onMousedown: onHandleMouseDown,
              onTouchstart: onHandleMouseDown,
              onTouchmove: onHandleTouchMove,
              onTouchend: onHandleTouchEnd,
              class: "cursor-move bg-indigo-900 px-5 py-2 rounded-t-lg flex gap-x-2"
            }, [
              createVNode("i", { class: "bi bi-arrows-move" }),
              createTextVNode(" Demo Draggable Window ")
            ], 40, ["onMousedown", "onTouchstart", "onTouchmove", "onTouchend"]),
            createVNode("div", { class: "p-5 grow overflow-auto" }, [
              createVNode("p", { class: "text-white text-sm" }, [
                createVNode("pre", null, toDisplayString($data.config), 1),
                createTextVNode(" Hey, I am a Brave Draggable3. Try to use the Title bar in this window to drag me arround. ")
              ])
            ]),
            createVNode("div", { class: "bg-indigo-900 px-5 py-2 rounded-b-lg flex justify-end gap-x-2" }, [
              createVNode("button", {
                type: "button",
                onClick: hide,
                class: "text-white-900 border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-3 py-1 bg-indigo-900 border-indigo-100 hover:bg-indigo-700 hover:border-indigo-600 focus:ring-gray-700"
              }, " Close Demo ", 8, ["onClick"])
            ])
          ], 12, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="py-6"><div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"><h1 class="text-4xl font-semibold mb-10"><i class="bi me-2 text-xl bi-arrows-move md:text-4xl"></i> Draggable </h1><div class="md:grid md:grid-cols-2 gap-4 prose dark:prose-invert max-w-none"><div class="col-span-2"><p class=""> Brave Draggable is a Vue component that helps you make any element draggable with mouse or touch. </p><p> It is a <b class="text-blue-500">Wrapper Component</b> that wraps the draggable element and provides the necessary events and methods to make it draggable. </p><p> The draggable element can be a div, a button, Image modal or any other element. You can set any element as a handle to drag the element. </p><p></p><p><div class="mt-10"><button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1 dark:bg-indigo-900 dark:text-white dark:border-indigo-100 dark:hover:bg-indigo-700 dark:hover:border-indigo-600 dark:focus:ring-gray-700">${ssrInterpolate($data.config.visible ? "Hide" : "Show")} live demo </button></div></p></div></div><div class=""><img class="border"${ssrRenderAttr("src", _imports_0)} alt="draggable demo"></div><hr><div class="prose dark:prose-invert"><h2 class="text-3xl font-semibold my-7">Features</h2><ul class="my-10"><li> \u{1F3A8} Unstyled and unopinionated. You can style it as you want. </li><li> \u{1F9ED} Automatic Docking </li><li> \u{1F9F2} Center Snapping with Visual Guide </li><li> \u261D Touch Support </li></ul></div><hr><h2 class="text-3xl font-semibold my-7">How to Use</h2><ol class="relative space-y-2 mb-16" style="${ssrRenderStyle({ "counter-reset": "step 0" })}"><li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5" style="${ssrRenderStyle({ "counter-increment": "step 1" })}"><div class="mb-6 col-span-2 xl:mb-0"><h4 class="leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"> Install BraveVue </h4><div class=""><p>Install <code>\`bravevue\`</code> via npm</p></div></div><div class="col-span-3">`);
  _push(ssrRenderComponent(_component_BrTaSyntaxHighlighter, null, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Terminal`);
      } else {
        return [
          createTextVNode("Terminal")
        ];
      }
    }),
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(`npm install bravevue`)}`);
      } else {
        return [
          createTextVNode(toDisplayString(`npm install bravevue`))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></li><li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5" style="${ssrRenderStyle({ "counter-increment": "step 1" })}"><div class="mb-6 col-span-2 xl:mb-0"><h4 class="leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"> Import the Component </h4><div class=""><p>Import <code>\`BraveDraggable\`</code> Component and add it to your components object.</p></div></div><div class="col-span-3">`);
  _push(ssrRenderComponent(_component_BrTaSyntaxHighlighter, { langauge: "javascript" }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`app.vue`);
      } else {
        return [
          createTextVNode("app.vue")
        ];
      }
    }),
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(`<script>
import { BraveDraggable } from "bravevue";
import "../node_modules/bravevue/dist/style.css";
export default{
  components: {
    BraveDraggable
  }
}
<\/script>`)}`);
      } else {
        return [
          createTextVNode(toDisplayString(`<script>
import { BraveDraggable } from "bravevue";
import "../node_modules/bravevue/dist/style.css";
export default{
  components: {
    BraveDraggable
  }
}
<\/script>`), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></li><li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5" style="${ssrRenderStyle({ "counter-increment": "step 1" })}"><div class="mb-6 col-span-2 xl:mb-0"><h4 class="leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"> Add Component to your template </h4><div class=""><p class="text-sm"> Place component in your template wherever you want the Slider to appear. </p></div></div><div class="col-span-5">`);
  _push(ssrRenderComponent(_component_BrTaSyntaxHighlighter, { langauge: "html" }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`app.vue`);
      } else {
        return [
          createTextVNode("app.vue")
        ];
      }
    }),
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(`<template>
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
`)}`);
      } else {
        return [
          createTextVNode(toDisplayString(`<template>
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
`), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="prose dark:prose-invert max-w-none mt-10"><h3><span class="text-blue-500"> Note : </span> The element you choose for the handle in your UI, you need to add the following event listeners. </h3><ul><li>@mousedown=&quot;onHandleMouseDown&quot;</li><li>@touchstart=&quot;onHandleMouseDown</li><li>@touchmove=&quot;onHandleTouchMove&quot; </li><li>@touchend=&quot;onHandleTouchEnd&quot;</li></ul></div></div></li></ol></div><hr class="my-5"><div class="prose dark:prose-invert max-w-none"><h2>Options</h2><div class="overflow-x-auto"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"><thead class="bg-gray-50 dark:bg-gray-700"><tr class="text-xs font-medium uppercase"><th scope="col" class="px-6 py-3"> Parameter </th><th scope="col" class="px-6 py-3"> Type </th><th scope="col" class="px-6 py-3"> Required </th><th scope="col" class="px-6 py-3"> Description </th></tr></thead><tbody><tr class="border-b dark:bg-gray-800 dark:border-gray-700"><td class="px-6 py-4 font-medium"><code class="text-blue-600 dark:text-blue-400">width</code></td><td class="px-6 py-4"> Number </td><td class="px-6 py-4"> Optional </td><td class="px-6 py-4"> Width of the Draggable Window </td></tr><tr class="border-b dark:bg-gray-800 dark:border-gray-700"><td class="px-6 py-4 font-medium"><code class="text-blue-600 dark:text-blue-400">height</code></td><td class="px-6 py-4"> Number </td><td class="px-6 py-4"> Optional </td><td class="px-6 py-4"> Height of the Draggable Window </td></tr><tr class="border-b dark:bg-gray-800 dark:border-gray-700"><td class="px-6 py-4 font-medium"><code class="text-blue-600 dark:text-blue-400">AutomaticDocking</code></td><td class="px-6 py-4"> Boolean </td><td class="px-6 py-4"> Optional </td><td class="px-6 py-4"> Weather to enable automatic docking or not. If enabled, the component will dock to the nearest edges. </td></tr><tr class="border-b dark:bg-gray-800 dark:border-gray-700"><td class="px-6 py-4 font-medium"><code class="text-blue-600 dark:text-blue-400">Placement</code></td><td class="px-6 py-4"> String </td><td class="px-6 py-4"> Optional </td><td class="px-6 py-4"> The placement of the component. Can be one of <code class="text-blue-600 dark:text-blue-400">top-left</code> or <code class="text-blue-600 dark:text-blue-400">top-center</code> or <code class="text-blue-600 dark:text-blue-400">top-right</code> or <code class="text-blue-600 dark:text-blue-400">bottom-left</code> or <code class="text-blue-600 dark:text-blue-400">bottom-center</code> or <code class="text-blue-600 dark:text-blue-400">bottom-right</code> or <code class="text-blue-600 dark:text-blue-400">left-top</code> or <code class="text-blue-600 dark:text-blue-400">left-center</code> or <code class="text-blue-600 dark:text-blue-400">left-bottom</code> or <code class="text-blue-600 dark:text-blue-400">right-top</code> or <code class="text-blue-600 dark:text-blue-400">right-center</code> or <code class="text-blue-600 dark:text-blue-400">right-bottom</code></td></tr><tr class="border-b dark:bg-gray-800 dark:border-gray-700"><td class="px-6 py-4 font-medium"><code class="text-blue-600 dark:text-blue-400">position</code></td><td class="px-6 py-4"> Object </td><td class="px-6 py-4"> Optional </td><td class="px-6 py-4"> Position of the component. <br><p>If placement is <code class="text-blue-600 dark:text-blue-400">top-left</code></p><code class="text-blue-600 dark:text-blue-400">position.top</code> - x position of the component. <br><code class="text-blue-600 dark:text-blue-400">position.left</code> - y position of the component. <br><p> Similarly for other placements. </p></td></tr><tr class="border-b dark:bg-gray-800 dark:border-gray-700"><td class="px-6 py-4 font-medium"><code class="text-blue-600 dark:text-blue-400">bounds</code></td><td class="px-6 py-4"> Object </td><td class="px-6 py-4"> Optional </td><td class="px-6 py-4"> Bounds of the component. <br> The component will not be draggable outside these bounds. <br><br><code class="text-blue-600 dark:text-blue-400">bounds.top</code> - x of the component. <br><code class="text-blue-600 dark:text-blue-400">bounds.left</code> - y of the component. <br><code class="text-blue-600 dark:text-blue-400">bounds.bottom</code> - x of the component. <br><code class="text-blue-600 dark:text-blue-400">bounds.right</code> - y of the component. <br></td></tr><tr class="border-b dark:bg-gray-800 dark:border-gray-700"><td class="px-6 py-4 font-medium"><code class="text-blue-600 dark:text-blue-400">snappingDistance</code></td><td class="px-6 py-4"> Number </td><td class="px-6 py-4"> Optional </td><td class="px-6 py-4"> Distance from the center of the screen to snap to horizontal or vertical center </td></tr></tbody></table></div></div><hr class="my-5"></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/BraveDraggable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BraveDraggable = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BraveDraggable as default
};
