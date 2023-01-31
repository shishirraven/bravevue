import { _ as _export_sfc, l as BraveTags$2, b as BrTaSyntaxHighlighter, c as BrTaTabs } from "../main.mjs";
import { resolveComponent, mergeProps, useSSRContext, withCtx, createTextVNode, createVNode, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { useHead } from "@vueuse/head";
import "uuid";
import "vue-router";
import "vuedraggable";
import "vite-ssg";
const _sfc_main$1 = {
  components: {
    BraveTags: BraveTags$2
  },
  data() {
    return {
      tags: ["bravevue", "braveTags", "Vue3", "Vite"]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveTags = resolveComponent("BraveTags", true);
  _push(ssrRenderComponent(_component_BraveTags, mergeProps({
    placeholder: "Type and Press Enter",
    modelValue: $data.tags,
    "onUpdate:modelValue": ($event) => $data.tags = $event,
    class: "flex flex-wrap gap-2",
    "class-delete-icon": "h-5 rounded hover:bg-red-600 w-5 cursor-pointer",
    UseTwoBackspaceDelete: true,
    "before-delete-tag-class": "pl-4 pr-2  py-1 rounded bg-red-100 dark:bg-red-900 flex items-center gap-2",
    "tag-class": "pl-4 pr-2  py-1 rounded bg-slate-100 dark:bg-slate-900 flex items-center gap-2",
    "input-class": "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  }, _attrs), null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/BraveTags.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BraveTags$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
useHead({
  title: "Tags Input Component for Vue 3 | Brave Vue",
  meta: [
    {
      name: "description",
      content: "Tags Input Component for Vue 3 is a Styleless component by BraveVue Component Library."
    },
    {
      name: "keywords",
      content: "tag, tags, tagging, , javascript, component, web, BraveTags, VueJS 3"
    },
    {
      name: "author",
      content: "Shishir Raven"
    }
  ]
});
const _sfc_main = {
  components: {
    BraveTags: BraveTags$1,
    BrTaSyntaxHighlighter,
    BrTaTabs
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BrTaTabs = resolveComponent("BrTaTabs");
  const _component_BraveTags = resolveComponent("BraveTags", true);
  const _component_BrTaSyntaxHighlighter = resolveComponent("BrTaSyntaxHighlighter");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 p-4 lg:p-10 xl:p-16" }, _attrs))}><div class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block"><h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100"> On this page </h5><div id="navigation"><ul class="navtext-slate-700 text-sm leading-6"><li class="mb-2"><a href="#introduction" class="text-slate-900 dark:text-slate-100"> Introduction </a></li><li class="mb-2"><a href="#live-example" class="text-slate-900 dark:text-slate-100"> Live example </a></li><li class><a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="#props">Props</a></li></ul></div></div><div class="prose dark:prose-invert prose-slate"><h1 id="introduction"><i class="bi bi-tags"></i> Brave Tags</h1><p>BraveTag is a Vue3 Component that allows user to create text Tags.</p><h3 id="live-example">Live Example</h3>`);
  _push(ssrRenderComponent(_component_BrTaTabs, {
    class: "not-prose",
    tabs: ["example", "code", "stackblitz"],
    initialTab: "example"
  }, {
    "tab-head-example": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Basic Example`);
      } else {
        return [
          createTextVNode("Basic Example")
        ];
      }
    }),
    "tab-panel-example": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BraveTags, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BraveTags)
        ];
      }
    }),
    "tab-head-code": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Source Code`);
      } else {
        return [
          createTextVNode("Source Code")
        ];
      }
    }),
    "tab-panel-code": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BrTaSyntaxHighlighter, { language: "javascript" }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`BraveTabsExample.vue`);
            } else {
              return [
                createTextVNode("BraveTabsExample.vue")
              ];
            }
          }),
          code: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(`<template>
    <BraveTags placeholder="Shishir" v-model="tags" class="flex flex-wrap gap-2"
        class-delete-icon="h-5 rounded hover:bg-red-600 w-5 cursor-pointer" :UseTwoBackspaceDelete="true"
        before-delete-tag-class="pl-4 pr-2  py-1 rounded bg-red-100 dark:bg-red-900 flex items-center gap-2"
        tag-class="pl-4 pr-2  py-1 rounded bg-slate-100 dark:bg-slate-900 flex items-center gap-2"
        input-class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</template>
<script>
import { BraveTags } from "bravevue"
export default {
    components: {
        BraveTags
    },

    data() {
        return {
            tags: ["bravevue", "braveTags", "Vue3", "Vite"]
        }
    },

}
<\/script>     `)}`);
            } else {
              return [
                createTextVNode(toDisplayString(`<template>
    <BraveTags placeholder="Shishir" v-model="tags" class="flex flex-wrap gap-2"
        class-delete-icon="h-5 rounded hover:bg-red-600 w-5 cursor-pointer" :UseTwoBackspaceDelete="true"
        before-delete-tag-class="pl-4 pr-2  py-1 rounded bg-red-100 dark:bg-red-900 flex items-center gap-2"
        tag-class="pl-4 pr-2  py-1 rounded bg-slate-100 dark:bg-slate-900 flex items-center gap-2"
        input-class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</template>
<script>
import { BraveTags } from "bravevue"
export default {
    components: {
        BraveTags
    },

    data() {
        return {
            tags: ["bravevue", "braveTags", "Vue3", "Vite"]
        }
    },

}
<\/script>     `), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BrTaSyntaxHighlighter, { language: "javascript" }, {
            title: withCtx(() => [
              createTextVNode("BraveTabsExample.vue")
            ]),
            code: withCtx(() => [
              createTextVNode(toDisplayString(`<template>
    <BraveTags placeholder="Shishir" v-model="tags" class="flex flex-wrap gap-2"
        class-delete-icon="h-5 rounded hover:bg-red-600 w-5 cursor-pointer" :UseTwoBackspaceDelete="true"
        before-delete-tag-class="pl-4 pr-2  py-1 rounded bg-red-100 dark:bg-red-900 flex items-center gap-2"
        tag-class="pl-4 pr-2  py-1 rounded bg-slate-100 dark:bg-slate-900 flex items-center gap-2"
        input-class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</template>
<script>
import { BraveTags } from "bravevue"
export default {
    components: {
        BraveTags
    },

    data() {
        return {
            tags: ["bravevue", "braveTags", "Vue3", "Vite"]
        }
    },

}
<\/script>     `), 1)
            ]),
            _: 1
          })
        ];
      }
    }),
    "tab-head-stackblitz": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u26A1StackBlitz`);
      } else {
        return [
          createTextVNode("\u26A1StackBlitz")
        ];
      }
    }),
    "tab-panel-stackblitz": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<iframe src="https://stackblitz.com/edit/vitejs-vite-7k5zpc?embed=1&amp;file=index.html&amp;hideExplorer=1&amp;view=preview" style="${ssrRenderStyle({ "width": "100%", "height": "500px", "border": "0", "border-radius": "4px", "overflow": "hidden" })}" allowfullscreen="allowfullscreen" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"${_scopeId}></iframe>`);
      } else {
        return [
          createVNode("iframe", {
            src: "https://stackblitz.com/edit/vitejs-vite-7k5zpc?embed=1&file=index.html&hideExplorer=1&view=preview",
            style: { "width": "100%", "height": "500px", "border": "0", "border-radius": "4px", "overflow": "hidden" },
            allowfullscreen: "allowfullscreen",
            sandbox: "allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="props"> Props <a href="#props" name="props" class="anchor"><span class="anchor-target" id="props"></span><span class="glyphicon glyphicon-link"></span></a></h2><div class="overflow-auto w-full"><table><thead class="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400"><tr><th scope="col" class="py-3 px-6">Prop</th><th scope="col" class="py-3 px-6">Type</th><th scope="col" class="py-3 px-6">Default</th><th scope="col" class="py-3 px-6">Description</th></tr></thead><tr><td class="py-4 px-6">v-model</td><td class="py-4 px-6">String Array</td><td class="py-4 px-6"></td><td class="py-4 px-6"><p>Array of of tag Names</p><p> Example v-model variable should contain a String array similar to this. : <code class="text-blue-500">[&#39;VueJS&#39;,&#39;Vite&#39;]</code></p></td></tr><tr><td class="py-4 px-6">UseTwoBackspaceDelete</td><td class="py-4 px-6">Boolean</td><td class="py-4 px-6">true</td><td class="py-4 px-6"><p>If you want to delete previous tag on two Backspaces rather than one. </p><p> Example: <code class="text-blue-500">:UseTwoBackspaceDelete=&quot;true&quot;</code></p></td></tr><tr><td class="py-4 px-6">class</td><td class="py-4 px-6">String</td><td class="py-4 px-6"></td><td class="py-4 px-6"><p>Class to style the outer most UL element of Tags component</p><p> Example : <code class="text-blue-500">flex flex-wrap gap-2</code></p></td></tr><tr><td class="py-4 px-6">class-delete-icon</td><td class="py-4 px-6">String</td><td class="py-4 px-6"></td><td class="py-4 px-6"><p>Classes you want on Cross Icon on each tag</p> Example : <code class="text-blue-500">h-5 rounded hover:bg-red-600 w-5 cursor-pointer</code></td></tr><tr><td class="py-4 px-6">before-delete-tag-class</td><td class="py-4 px-6">String</td><td class="py-4 px-6"></td><td class="py-4 px-6"><p>The Classes mentioned here are applied to the tag which is about to be deleted when 1 backspace is pressed. </p> Example : <code class="text-blue-500">before-delete-tag-class=&quot;pl-4 pr-2 py-1 rounded bg-red-100 dark:bg-red-900 flex items-center gap-2&quot;</code></td></tr><tr><td class="py-4 px-6">tag-class</td><td class="py-4 px-6">String</td><td class="py-4 px-6"></td><td class="py-4 px-6"><p>CSS Class to be applied on the tag</p> Example : <code class="text-blue-500">tag-class=&quot;pl-4 pr-2 py-1 rounded bg-slate-100 dark:bg-slate-900 flex items-center gap-2&quot;</code></td></tr><tr><td class="py-4 px-6">tabsContentClass</td><td class="py-4 px-6">String</td><td class="py-4 px-6"></td><td class="py-4 px-6"><p>CSS Classes for the wrapper on the area where tab contents are displayed.</p> Example : <code class="text-blue-500">input-class=&quot;bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500&quot; /&gt;</code></td></tr></table></div><h2 class="mt-30" id="slots"> Slots <a href="#slots" name="slots" class="anchor"><span class="anchor-target" id="slots"></span><span class="glyphicon glyphicon-link"></span></a></h2><div class="overflow-auto w-full"><table><tr><td class="py-4 px-6"><strong>Name </strong></td><td class="py-4 px-6"><strong>Scoped </strong></td><td class="py-4 px-6"><strong>Description </strong></td></tr><tr><td class="py-4 px-6">after-tab</td><td class="py-4 px-6"> No </td><td class="py-4 px-6"><p>Slot to add content after the tab buttons</p></td></tr><tr><td class="py-4 px-6">before-tab</td><td class="py-4 px-6"> No </td><td class="py-4 px-6"><p>Slot to add content before the tab buttons </p></td></tr></table></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/BraveTags.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BraveTags = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BraveTags as default
};
