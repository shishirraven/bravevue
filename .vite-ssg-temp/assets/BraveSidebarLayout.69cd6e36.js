import { _ as _export_sfc, e as BraveGistEmbed, f as BraveSlider, g as BraveSyntaxHighlighter, b as BrTaSyntaxHighlighter } from "../main.mjs";
import { useHead } from "@vueuse/head";
import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "uuid";
import "vue-router";
import "vuedraggable";
import "vite-ssg";
const _sfc_main = {
  mounted() {
    useHead({
      title: "Sidebar Component for Vue 3 | Brave Components Library.",
      meta: [
        {
          name: "description",
          content: "Brave Sidebar Layout is a Vue component that allows you to create a sidebar layout with a sidebar and a content area."
        },
        {
          name: "keywords",
          content: "Sidebar, Responsive, Headless, Vue3, Component, Headless, Styleless "
        },
        {
          name: "author",
          content: "Shishir Raven"
        }
      ]
    });
  },
  components: { BraveGistEmbed, BraveSlider, BraveSyntaxHighlighter, BrTaSyntaxHighlighter }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BrTaSyntaxHighlighter = resolveComponent("BrTaSyntaxHighlighter");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 lg:p-16" }, _attrs))}><div class="py-6"><div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"><h1 class="text-4xl font-semibold mb-10"><i class="bi me-2 text-xl bi-window-sidebar text-4xl"></i> Sidebar Layout </h1><div class="md:grid md:grid-cols-5 gap-4"><div class="col-span-2"><p class="pb-5"> Brave Sidebar Layout is a Vue component that allows you to create a sidebar layout with a sidebar and a content area. </p><p class="pb-5"> The sidebar of this page is a Live example of Sidebar Layout. </p></div><div class="col-span-3 md:pl-3 -mx-4 pb-3"><div class="aspect-w-16 aspect-h-9"><iframe class="" src="https://www.youtube.com/embed/KPPZEVCb4Fo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div></div><hr><h2 class="text-3xl font-semibold my-7">Features</h2><ul class="my-10"><li> 100% customizable, no dependency on any third-party CSS library. </li><li>Responsive.</li><li> Control Sidebar Width with Props. </li></ul><hr><h2 class="text-3xl font-semibold my-7">How to Use</h2><ol class="relative space-y-2 mb-16" style="${ssrRenderStyle({ "counter-reset": "step 0" })}"><li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5" style="${ssrRenderStyle({ "counter-increment": "step 1" })}"><div class="mb-6 col-span-2 xl:mb-0"><h4 class="leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"> Install BraveVue </h4><div class=""><p>Install <code>\`bravevue\`</code> via npm</p></div></div><div class="col-span-3">`);
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
  _push(`</div></li><li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5" style="${ssrRenderStyle({ "counter-increment": "step 1" })}"><div class="mb-6 col-span-2 xl:mb-0"><h4 class="leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"> Import the Component </h4><div class=""><p>Import <code>\`BraveSidebarLayout\`</code> Component and add it to your components object.</p></div></div><div class="col-span-3">`);
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
import { BraveSidebarLayout } from "bravevue";
import "../node_modules/bravevue/dist/style.css";
export default{
  components: {
    BraveSidebarLayout
  }
}
<\/script>`)}`);
      } else {
        return [
          createTextVNode(toDisplayString(`<script>
import { BraveSidebarLayout } from "bravevue";
import "../node_modules/bravevue/dist/style.css";
export default{
  components: {
    BraveSidebarLayout
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
</template>`)}`);
      } else {
        return [
          createTextVNode(toDisplayString(`<template>
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
</template>`), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></li></ol></div><hr class="my-5"></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/BraveSidebarLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BraveSidebarLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BraveSidebarLayout as default
};
