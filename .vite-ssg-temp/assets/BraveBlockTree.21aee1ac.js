import { B as BraveField } from "./BraveField.8845a3fb.js";
import { _ as _export_sfc, B as BraveBlockTree$1, a as BraveBlockElement, b as BrTaSyntaxHighlighter, c as BrTaTabs } from "../main.mjs";
import { resolveComponent, useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useHead } from "@vueuse/head";
import "uuid";
import "vue-router";
import "vuedraggable";
import "vite-ssg";
const _sfc_main$2 = {
  components: { BraveBlockTree: BraveBlockTree$1, BraveBlockElement },
  methods: {
    getHTML() {
      this.TreeHtml = this.$refs.rootElmt.getHTML();
    }
  },
  data() {
    return {
      TreeHtml: "",
      seedData: [
        {
          component: "BraveBlockElement",
          data: {
            selfData: {
              class: "border-red-600 border-2 border-dashed p-5 my-2 flex flex-divide "
            },
            childData: [
              {
                component: "BraveBlockElement",
                data: {
                  selfData: {
                    class: "border-green-500 border-2 border-dashed p-5 my-2 "
                  },
                  childData: {}
                }
              },
              {
                component: "BraveBlockElement",
                data: {
                  selfData: {
                    class: "border-yellow-500 border-2 border-dashed p-5 my-2 "
                  },
                  childData: {}
                }
              }
            ]
          }
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveBlockTree = resolveComponent("BraveBlockTree");
  _push(`<!--[--><div class="text-xl mb-3">Demo for Nested Elements</div><div class="text-lg">Preview</div>`);
  _push(ssrRenderComponent(_component_BraveBlockTree, {
    ref: "rootElmt",
    modelValue: $data.seedData,
    "onUpdate:modelValue": ($event) => $data.seedData = $event
  }, null, _parent));
  _push(`<div class="text-lg">Component Tree JSON</div><code><pre class="bg-slate-900 p-2 rounded w-full overflow-auto wrap">${ssrInterpolate($data.seedData)}</pre></code><div class="text-lg my-5">HTML Output Generated from Tree</div><button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"><span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"> Generate HTML </span></button><textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="" id="" cols="10" rows="5">${ssrInterpolate($data.TreeHtml)}</textarea><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/Blocks/BlockTree/SimpleBraveTreeExample.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SimpleBraveTreeExample = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: { BraveBlockTree: BraveBlockTree$1, BraveBlockElement },
  methods: {
    getHTML() {
      this.TreeHtml = this.$refs.rootElmt.getHTML();
    }
  },
  data() {
    return {
      TreeHtml: "",
      seedData: [
        {
          component: "BraveBlockText",
          data: {
            selfData: {
              content: "New.",
              class: "text-lg",
              tag: "div"
            },
            childData: {}
          }
        },
        {
          component: "BraveBlockElement",
          data: {
            selfData: {
              class: "border-red-600 border-2 border-dashed p-5 my-2  "
            },
            childData: [
              {
                component: "BraveBlockText",
                data: {
                  selfData: {
                    content: "Some Starting text.",
                    class: "text-lg",
                    tag: "div"
                  },
                  childData: {}
                }
              },
              {
                component: "BraveBlockText",
                data: {
                  selfData: {
                    content: "Some Starting text.",
                    class: "text-lg",
                    tag: "div"
                  },
                  childData: {}
                }
              },
              {
                component: "BraveBlockElement",
                data: {
                  selfData: {
                    class: "border-green-500 border-2 border-dashed p-5 m-2 "
                  },
                  childData: []
                }
              },
              {
                component: "BraveBlockElement",
                data: {
                  selfData: {
                    class: "border-yellow-500 border-2 border-dashed p-5 my-2 "
                  },
                  childData: []
                }
              }
            ]
          }
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ToolbarLink = resolveComponent("ToolbarLink");
  const _component_ToolBarRich = resolveComponent("ToolBarRich");
  const _component_ToolbarPreviewLink = resolveComponent("ToolbarPreviewLink");
  const _component_BraveBlockTree = resolveComponent("BraveBlockTree");
  _push(`<!--[--><div class="text-xl mb-3">Demo for Nested Elements</div><div class="text-lg">Preview</div><div contenteditable="true" class="prose dark:prose-invert p-10">`);
  _push(ssrRenderComponent(_component_ToolbarLink, {
    contenteditable: "false",
    ref: "linkToolBar"
  }, null, _parent));
  _push(ssrRenderComponent(_component_ToolBarRich, {
    contenteditable: "false",
    onShowLinkToolbar: ($event) => _ctx.$refs.linkToolBar.showToolBar()
  }, null, _parent));
  _push(ssrRenderComponent(_component_ToolbarPreviewLink, {
    contenteditable: "false",
    onShowLinkToolbar: ($event) => _ctx.$refs.linkToolBar.showToolBar()
  }, null, _parent));
  _push(ssrRenderComponent(_component_BraveBlockTree, {
    ref: "rootElmt",
    modelValue: $data.seedData,
    "onUpdate:modelValue": ($event) => $data.seedData = $event
  }, null, _parent));
  _push(`</div><div class="text-lg">Component Tree JSON</div><code><pre class="bg-slate-900 p-2 rounded w-full overflow-auto wrap">${ssrInterpolate($data.seedData)}</pre></code><div class="text-lg my-5">HTML Output Generated from Tree</div><button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"><span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"> Generate HTML </span></button><textarea class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="" id="" cols="10" rows="5">${ssrInterpolate($data.TreeHtml)}</textarea><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/Blocks/BlockTree/BraveTreeWithTextNodes.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BraveTreeWithTextNodes = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  mounted() {
    useHead({
      title: "Block Tree Component for Vue 3 | Brave Components Library.",
      meta: [
        {
          name: "description",
          content: "Block Tree Component is a Vue 3 component library for building a Block Editor."
        },
        {
          name: "keywords",
          content: "Block Tree, Block Editor"
        },
        {
          name: "author",
          content: "Shishir Raven"
        }
      ]
    });
  },
  components: {
    BraveField,
    BrTaSyntaxHighlighter,
    BrTaTabs,
    SimpleBraveTreeExample,
    BraveTreeWithTextNodes
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BrTaTabs = resolveComponent("BrTaTabs");
  const _component_BraveTreeWithTextNodes = resolveComponent("BraveTreeWithTextNodes");
  const _component_BrTaSyntaxHighlighter = resolveComponent("BrTaSyntaxHighlighter");
  const _component_SimpleBraveTreeExample = resolveComponent("SimpleBraveTreeExample");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 p-4 lg:p-10 xl:p-16" }, _attrs))}><div class="fixed top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] z-20 hidden w-[19.5rem] overflow-y-auto py-10 px-8 xl:block"><h5 class="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100"> On this page </h5><div id="navigation"><ul class="navtext-slate-700 text-sm leading-6"><li class="mb-2"><a href="#introduction" class="text-slate-900 dark:text-slate-100"> Introduction </a></li><li class="mb-2"><a href="#live-example" class="text-slate-900 dark:text-slate-100"> Live example </a></li></ul></div></div><div class="prose prose-slate dark:prose-invert">`);
  _push(ssrRenderComponent(_component_BrTaTabs, {
    class: "",
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
        _push2(ssrRenderComponent(_component_BraveTreeWithTextNodes, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BraveTreeWithTextNodes)
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
                <div class="dark:text-slate-200">
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Text Field</h2>
                    <BraveField
                      type="text"
                      v-model="textValue"
                      placeholder="Enter a Value"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Textarea</h2>
                    <BraveField
                      type="textarea"
                      v-model="textValue"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Text Array</h2>
                    <BraveField
                      type="select"
                      :options="['Orange', 'Grapes', 'Apple', 'Banana']"
                      v-model="selectValue1"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Object</h2>
                    <BraveField
                      type="select"
                      :options="{
                        mercury: 'Mercury',
                        venus: 'Venus',
                        earth: 'Earth',
                        mars: 'Mars',
                        jupiter: 'Jupiter',
                        saturn: 'Saturn',
                        uranus: 'Uranus',
                        neptune: 'Neptune',
                      }"
                      v-model="selectValue2"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select Array of Objects</h2>
                    <BraveField
                      type="select"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Radio</h2>
                    <BraveField
                      type="radio"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Checkbox</h2>
                    <BraveField
                      type="checkbox"
                      v-model="booleanVal"
                      class="border"
                    />
                  </div>
                </div>
              </template>

              <script>
                import { BraveField } from "bravevue";
                export default {
                  components: { BraveField },
                  name: "BraveFieldDemo",
                  data() {
                    return {
                      booleanVal: false,
                      textValue: "Default Value",
                      selectValue1: "Pizza",
                      selectValue2: "venus",
                      selectValue3: "gr", // Greece
                    };
                  },
                };
              <\/script>
              `)}`);
            } else {
              return [
                createTextVNode(toDisplayString(`<template>
                <div class="dark:text-slate-200">
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Text Field</h2>
                    <BraveField
                      type="text"
                      v-model="textValue"
                      placeholder="Enter a Value"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Textarea</h2>
                    <BraveField
                      type="textarea"
                      v-model="textValue"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Text Array</h2>
                    <BraveField
                      type="select"
                      :options="['Orange', 'Grapes', 'Apple', 'Banana']"
                      v-model="selectValue1"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Object</h2>
                    <BraveField
                      type="select"
                      :options="{
                        mercury: 'Mercury',
                        venus: 'Venus',
                        earth: 'Earth',
                        mars: 'Mars',
                        jupiter: 'Jupiter',
                        saturn: 'Saturn',
                        uranus: 'Uranus',
                        neptune: 'Neptune',
                      }"
                      v-model="selectValue2"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select Array of Objects</h2>
                    <BraveField
                      type="select"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Radio</h2>
                    <BraveField
                      type="radio"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Checkbox</h2>
                    <BraveField
                      type="checkbox"
                      v-model="booleanVal"
                      class="border"
                    />
                  </div>
                </div>
              </template>

              <script>
                import { BraveField } from "bravevue";
                export default {
                  components: { BraveField },
                  name: "BraveFieldDemo",
                  data() {
                    return {
                      booleanVal: false,
                      textValue: "Default Value",
                      selectValue1: "Pizza",
                      selectValue2: "venus",
                      selectValue3: "gr", // Greece
                    };
                  },
                };
              <\/script>
              `), 1)
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
                <div class="dark:text-slate-200">
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Text Field</h2>
                    <BraveField
                      type="text"
                      v-model="textValue"
                      placeholder="Enter a Value"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Textarea</h2>
                    <BraveField
                      type="textarea"
                      v-model="textValue"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Text Array</h2>
                    <BraveField
                      type="select"
                      :options="['Orange', 'Grapes', 'Apple', 'Banana']"
                      v-model="selectValue1"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Object</h2>
                    <BraveField
                      type="select"
                      :options="{
                        mercury: 'Mercury',
                        venus: 'Venus',
                        earth: 'Earth',
                        mars: 'Mars',
                        jupiter: 'Jupiter',
                        saturn: 'Saturn',
                        uranus: 'Uranus',
                        neptune: 'Neptune',
                      }"
                      v-model="selectValue2"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select Array of Objects</h2>
                    <BraveField
                      type="select"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Radio</h2>
                    <BraveField
                      type="radio"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Checkbox</h2>
                    <BraveField
                      type="checkbox"
                      v-model="booleanVal"
                      class="border"
                    />
                  </div>
                </div>
              </template>

              <script>
                import { BraveField } from "bravevue";
                export default {
                  components: { BraveField },
                  name: "BraveFieldDemo",
                  data() {
                    return {
                      booleanVal: false,
                      textValue: "Default Value",
                      selectValue1: "Pizza",
                      selectValue2: "venus",
                      selectValue3: "gr", // Greece
                    };
                  },
                };
              <\/script>
              `), 1)
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
        _push2(`<iframe src="https://stackblitz.com/edit/vitejs-vite-gtpsbt?embed=1&amp;file=src/components/BraveField.vue&amp;view=preview" style="${ssrRenderStyle({ "width": "100%", "height": "500px", "border": "0", "border-radius": "4px", "overflow": "hidden" })}" allowfullscreen="allowfullscreen" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"${_scopeId}></iframe>`);
      } else {
        return [
          createVNode("iframe", {
            src: "https://stackblitz.com/edit/vitejs-vite-gtpsbt?embed=1&file=src/components/BraveField.vue&view=preview",
            style: { "width": "100%", "height": "500px", "border": "0", "border-radius": "4px", "overflow": "hidden" },
            allowfullscreen: "allowfullscreen",
            sandbox: "allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h1 id="introduction"><i class="bi bi-list-nested"></i> Brave Block Tree</h1><p> The <code>BraveBlockTree</code> component is a tree view component that displays a tree of component nodes. It is a wrapper around the <code>BrTree</code> component. </p><h3 id="live-example">Live Example</h3><h2>Role of Brave Block Tree</h2><ul><li>Components are stored as a JSON Tree. </li><li>Components in JSON Tree are also called Blocks</li><li>Each Block is loaded dynamically from the JSON TREE</li><li>Rendering Block Tree is primary responsiblity.</li><li>Provides Tree Manipulation <b>Events</b> to children such as <ul><li>delete-block</li><li>insert-sibling</li><li>replace-block</li><li>move-content-to-row-above : functionality for text blocks to merge text content on delete</li><li>move-content-to-row-above : functionality for text blocks to merge text content on delete</li></ul></li><li><b class="text-blue-600">Get HTML</b><p> You can extract the HTML from the Block Tree by using this method. </p><div class="font-bold my-2">Example from Parent</div>`);
  _push(ssrRenderComponent(_component_BrTaSyntaxHighlighter, { language: "javascript" }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Parent Component`);
      } else {
        return [
          createTextVNode("Parent Component")
        ];
      }
    }),
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(` this.TreeHtml= this.$refs.rootElmt.getHTML();`)}`);
      } else {
        return [
          createTextVNode(toDisplayString(` this.TreeHtml= this.$refs.rootElmt.getHTML();`), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><h3 id="live-example">Live Example</h3>`);
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
        _push2(ssrRenderComponent(_component_SimpleBraveTreeExample, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SimpleBraveTreeExample)
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
                <div class="dark:text-slate-200">
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Text Field</h2>
                    <BraveField
                      type="text"
                      v-model="textValue"
                      placeholder="Enter a Value"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Textarea</h2>
                    <BraveField
                      type="textarea"
                      v-model="textValue"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Text Array</h2>
                    <BraveField
                      type="select"
                      :options="['Orange', 'Grapes', 'Apple', 'Banana']"
                      v-model="selectValue1"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Object</h2>
                    <BraveField
                      type="select"
                      :options="{
                        mercury: 'Mercury',
                        venus: 'Venus',
                        earth: 'Earth',
                        mars: 'Mars',
                        jupiter: 'Jupiter',
                        saturn: 'Saturn',
                        uranus: 'Uranus',
                        neptune: 'Neptune',
                      }"
                      v-model="selectValue2"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select Array of Objects</h2>
                    <BraveField
                      type="select"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Radio</h2>
                    <BraveField
                      type="radio"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Checkbox</h2>
                    <BraveField
                      type="checkbox"
                      v-model="booleanVal"
                      class="border"
                    />
                  </div>
                </div>
              </template>

              <script>
                import { BraveField } from "bravevue";
                export default {
                  components: { BraveField },
                  name: "BraveFieldDemo",
                  data() {
                    return {
                      booleanVal: false,
                      textValue: "Default Value",
                      selectValue1: "Pizza",
                      selectValue2: "venus",
                      selectValue3: "gr",
                    };
                  },
                };
              <\/script>
              `)}`);
            } else {
              return [
                createTextVNode(toDisplayString(`<template>
                <div class="dark:text-slate-200">
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Text Field</h2>
                    <BraveField
                      type="text"
                      v-model="textValue"
                      placeholder="Enter a Value"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Textarea</h2>
                    <BraveField
                      type="textarea"
                      v-model="textValue"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Text Array</h2>
                    <BraveField
                      type="select"
                      :options="['Orange', 'Grapes', 'Apple', 'Banana']"
                      v-model="selectValue1"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Object</h2>
                    <BraveField
                      type="select"
                      :options="{
                        mercury: 'Mercury',
                        venus: 'Venus',
                        earth: 'Earth',
                        mars: 'Mars',
                        jupiter: 'Jupiter',
                        saturn: 'Saturn',
                        uranus: 'Uranus',
                        neptune: 'Neptune',
                      }"
                      v-model="selectValue2"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select Array of Objects</h2>
                    <BraveField
                      type="select"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Radio</h2>
                    <BraveField
                      type="radio"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Checkbox</h2>
                    <BraveField
                      type="checkbox"
                      v-model="booleanVal"
                      class="border"
                    />
                  </div>
                </div>
              </template>

              <script>
                import { BraveField } from "bravevue";
                export default {
                  components: { BraveField },
                  name: "BraveFieldDemo",
                  data() {
                    return {
                      booleanVal: false,
                      textValue: "Default Value",
                      selectValue1: "Pizza",
                      selectValue2: "venus",
                      selectValue3: "gr",
                    };
                  },
                };
              <\/script>
              `), 1)
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
                <div class="dark:text-slate-200">
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Text Field</h2>
                    <BraveField
                      type="text"
                      v-model="textValue"
                      placeholder="Enter a Value"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>
                  <div class="mb-4">
                    <h2 class="text-md mb-1">Textarea</h2>
                    <BraveField
                      type="textarea"
                      v-model="textValue"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Text Array</h2>
                    <BraveField
                      type="select"
                      :options="['Orange', 'Grapes', 'Apple', 'Banana']"
                      v-model="selectValue1"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select with Object</h2>
                    <BraveField
                      type="select"
                      :options="{
                        mercury: 'Mercury',
                        venus: 'Venus',
                        earth: 'Earth',
                        mars: 'Mars',
                        jupiter: 'Jupiter',
                        saturn: 'Saturn',
                        uranus: 'Uranus',
                        neptune: 'Neptune',
                      }"
                      v-model="selectValue2"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Select Array of Objects</h2>
                    <BraveField
                      type="select"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      placeholder="This is my first field. "
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Radio</h2>
                    <BraveField
                      type="radio"
                      :options="[
                        {
                          label: 'France',
                          value: 'fr',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Germany',
                          value: 'de',
                          attrs: { disabled: true },
                        },
                        {
                          label: 'Spain',
                          value: 'es',
                          attrs: { disabled: true },
                        },
                        { label: 'Italy', value: 'ie' },
                        {
                          label: 'Greece',
                          value: 'gr',
                          attrs: { disabled: true },
                        },
                      ]"
                      v-model="selectValue3"
                      class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                  </div>

                  <div class="mb-4">
                    <h2 class="text-md mb-1">Checkbox</h2>
                    <BraveField
                      type="checkbox"
                      v-model="booleanVal"
                      class="border"
                    />
                  </div>
                </div>
              </template>

              <script>
                import { BraveField } from "bravevue";
                export default {
                  components: { BraveField },
                  name: "BraveFieldDemo",
                  data() {
                    return {
                      booleanVal: false,
                      textValue: "Default Value",
                      selectValue1: "Pizza",
                      selectValue2: "venus",
                      selectValue3: "gr",
                    };
                  },
                };
              <\/script>
              `), 1)
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
        _push2(`<iframe src="https://stackblitz.com/edit/vitejs-vite-gtpsbt?embed=1&amp;file=src/components/BraveField.vue&amp;view=preview" style="${ssrRenderStyle({ "width": "100%", "height": "500px", "border": "0", "border-radius": "4px", "overflow": "hidden" })}" allowfullscreen="allowfullscreen" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"${_scopeId}></iframe>`);
      } else {
        return [
          createVNode("iframe", {
            src: "https://stackblitz.com/edit/vitejs-vite-gtpsbt?embed=1&file=src/components/BraveField.vue&view=preview",
            style: { "width": "100%", "height": "500px", "border": "0", "border-radius": "4px", "overflow": "hidden" },
            allowfullscreen: "allowfullscreen",
            sandbox: "allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/BraveBlockTree.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BraveBlockTree = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BraveBlockTree as default
};
