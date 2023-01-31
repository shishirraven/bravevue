import { _ as _export_sfc, n as BraveNumberInput$1, e as BraveGistEmbed, k as BraveTabs, b as BrTaSyntaxHighlighter, c as BrTaTabs } from "../main.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, useSSRContext, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@vueuse/head";
import "uuid";
import "vue-router";
import "vuedraggable";
import "vite-ssg";
const _sfc_main$1 = {
  data: function() {
    return {
      count: 100
    };
  },
  components: {
    BraveNumberInput: BraveNumberInput$1
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveNumberInput = resolveComponent("BraveNumberInput");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-3" }, _attrs))}> v-model : ${ssrInterpolate(_ctx.count)} <div class="flex items-center2">`);
  _push(ssrRenderComponent(_component_BraveNumberInput, {
    modelValue: _ctx.count,
    "onUpdate:modelValue": ($event) => _ctx.count = $event,
    class: "flex items-center",
    inputClass: "ring-offset-2 focus:ring-4 text-indigo-600 bg-indigo-100 z-10 relative h-14 w-14 rounded-full text-center"
  }, {
    "minus-button": withCtx(({ decreaseNumber }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button tabindex="-1" class="bg-indigo-400 hover:bg-indigo-500 rounded-l-full p-3 -mr-6 w-20 h-full"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash-circle fill-white block mr-1" viewBox="0 0 16 16"${_scopeId}><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"${_scopeId}></path><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"${_scopeId}></path></svg></button>`);
      } else {
        return [
          createVNode("button", {
            tabindex: "-1",
            class: "bg-indigo-400 hover:bg-indigo-500 rounded-l-full p-3 -mr-6 w-20 h-full",
            onClick: ($event) => decreaseNumber()
          }, [
            (openBlock(), createBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "30",
              height: "30",
              fill: "currentColor",
              class: "bi bi-dash-circle fill-white block mr-1",
              viewBox: "0 0 16 16"
            }, [
              createVNode("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
              createVNode("path", { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" })
            ]))
          ], 8, ["onClick"])
        ];
      }
    }),
    "plus-button": withCtx(({ increaseNumber }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button tabindex="-1" class="bg-indigo-400 hover:bg-indigo-600 rounded-r-full h-full p-3 -ml-6 w-20 z-1"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="fill-white bi bi-plus-circle block float-right mr-1" viewBox="0 0 16 16"${_scopeId}><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"${_scopeId}></path><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"${_scopeId}></path></svg></button>`);
      } else {
        return [
          createVNode("button", {
            tabindex: "-1",
            class: "bg-indigo-400 hover:bg-indigo-600 rounded-r-full h-full p-3 -ml-6 w-20 z-1",
            onClick: ($event) => increaseNumber()
          }, [
            (openBlock(), createBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "30",
              height: "30",
              fill: "currentColor",
              class: "fill-white bi bi-plus-circle block float-right mr-1",
              viewBox: "0 0 16 16"
            }, [
              createVNode("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
              createVNode("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" })
            ]))
          ], 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/BraveNumberInput/BNI_basic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BNI_basic = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  mounted() {
    useHead({
      title: "Number Input Component for Vue 3 | Brave Components Library.",
      meta: [
        {
          name: "description",
          content: "BraveVue\u2019s NumericInput lets the user edit and submit specific numeric values by typing or by using the spin buttons."
        },
        {
          name: "keywords",
          content: " WAI-ARIA compliant, Stylish , Keyboard Contro, Number Input, Number Spinner, Spin Button, Vue 3, Javascript "
        },
        {
          name: "author",
          content: "Shishir Raven"
        }
      ]
    });
  },
  components: { BraveGistEmbed, BraveTabs, BrTaSyntaxHighlighter, BrTaTabs, BNI_basic }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BrTaTabs = resolveComponent("BrTaTabs");
  const _component_BNI_basic = resolveComponent("BNI_basic");
  const _component_BrTaSyntaxHighlighter = resolveComponent("BrTaSyntaxHighlighter");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 lg:p-16 p-5" }, _attrs))}><div class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block"><h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">On this page </h5><div id="navigation"><ul class="navtext-slate-700 text-sm leading-6"><li><a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="#brave-number-input">Introduction</a></li><li><a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="#live-example">Live Example</a></li><li><a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="#keyboard-navigation">Keyboard Navigation</a></li><li><a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="#props">Props</a></li><li><a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="#slots">Slots</a></li></ul></div></div><div class="prose dark:prose-invert prose-slate"><h1 id="brave-number-input">Brave Number Input </h1><p> BraveVue\u2019s NumericInput lets the user edit and submit specific numeric values by typing or by using the spin buttons. </p><p> You can optionally configure with maximum, minimum and step value of the Number Input. </p><p> \`NumericInput\` has a default range from 1 to 100, which can be changed by setting the min and max props. The default step increment is 1, and can be changed via the step prop (decimal values allowed). </p><p> The component \`number-input\` is <a target="_blank" href="https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/">WAI-ARIA </a> compliant, allowing for keyboard control, and supports both horizontal (default) and vertical layout. </p><h2 id="live-example">Live Example</h2>`);
  _push(ssrRenderComponent(_component_BrTaTabs, {
    tabs: ["example", "code"],
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
        _push2(ssrRenderComponent(_component_BNI_basic, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BNI_basic)
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
              _push3(`PositionDialog.vue`);
            } else {
              return [
                createTextVNode("PositionDialog.vue")
              ];
            }
          }),
          code: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(`<template>
              <button type="button" @mouseover.stop="
                  $refs.positionDialog2.show($event)
                " @mouseleave="$refs.positionDialog2.hide()"
                class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <i class="bi me-2 fs-4 bi-info-circle text-xl m-0 p-0 leading-none block"></i>
              </button>
              <- Click here to see example.
              <BravePositionDialog ref="positionDialog2" style="max-width: 300px"
                class="rounded-lg bg-white dark:bg-slate-900 dark:text-white mx-5 max-w-xs shadow-2xl z-10">
                <div class="m-5">
                  <div class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    You can add your project to your dashboard here.
                  </div>
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
                    doloribus exercitationem dolores sint adipisci, soluta obcaecati
                    accusamus, totam laborum deserunt cum in veniam eum delectus vero
                    facilis. Harum, et tempora?
                  </p>
                </div>
              </BravePositionDialog>
            </template>
            <script>
              import { BravePositionDialog } from "bravevue";
            export default {
              components: { BravePositionDialog },
            };
            <\/script>
            `)}`);
            } else {
              return [
                createTextVNode(toDisplayString(`<template>
              <button type="button" @mouseover.stop="
                  $refs.positionDialog2.show($event)
                " @mouseleave="$refs.positionDialog2.hide()"
                class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <i class="bi me-2 fs-4 bi-info-circle text-xl m-0 p-0 leading-none block"></i>
              </button>
              <- Click here to see example.
              <BravePositionDialog ref="positionDialog2" style="max-width: 300px"
                class="rounded-lg bg-white dark:bg-slate-900 dark:text-white mx-5 max-w-xs shadow-2xl z-10">
                <div class="m-5">
                  <div class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    You can add your project to your dashboard here.
                  </div>
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
                    doloribus exercitationem dolores sint adipisci, soluta obcaecati
                    accusamus, totam laborum deserunt cum in veniam eum delectus vero
                    facilis. Harum, et tempora?
                  </p>
                </div>
              </BravePositionDialog>
            </template>
            <script>
              import { BravePositionDialog } from "bravevue";
            export default {
              components: { BravePositionDialog },
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
              createTextVNode("PositionDialog.vue")
            ]),
            code: withCtx(() => [
              createTextVNode(toDisplayString(`<template>
              <button type="button" @mouseover.stop="
                  $refs.positionDialog2.show($event)
                " @mouseleave="$refs.positionDialog2.hide()"
                class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <i class="bi me-2 fs-4 bi-info-circle text-xl m-0 p-0 leading-none block"></i>
              </button>
              <- Click here to see example.
              <BravePositionDialog ref="positionDialog2" style="max-width: 300px"
                class="rounded-lg bg-white dark:bg-slate-900 dark:text-white mx-5 max-w-xs shadow-2xl z-10">
                <div class="m-5">
                  <div class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    You can add your project to your dashboard here.
                  </div>
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
                    doloribus exercitationem dolores sint adipisci, soluta obcaecati
                    accusamus, totam laborum deserunt cum in veniam eum delectus vero
                    facilis. Harum, et tempora?
                  </p>
                </div>
              </BravePositionDialog>
            </template>
            <script>
              import { BravePositionDialog } from "bravevue";
            export default {
              components: { BravePositionDialog },
            };
            <\/script>
            `), 1)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="keyboard-navigation">Keyboard navigation </h2><p> The following keyboard controls are available when the \`Brave Number Input\` button is focused. </p><div class="overflow-auto w-full"><table><thead class="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400"><tr><th scope="col" class="py-3 px-6">Key </th><th scope="col" class="py-3 px-6">Key Name </th><th scope="col" class="py-3 px-6">Action </th></tr></thead><tbody class="bg-slate-50 border-b dark:bg-slate-800 dark:border-slate-700"><tr><td class="py-4 px-6"><kbd class="inline-flex items-center mr-1 px-1 text-slate-800 bg-slate-100 border border-slate-200 rounded-lg dark:bg-slate-600 dark:text-slate-100 dark:border-slate-500"><i class="bi bi-arrow-up-square"></i><span class="sr-only">Arrow key up </span></kbd></td><td class="py-4 px-6">Arrow key up </td><td class="py-4 px-6">Increment the value </td></tr><tr><td class="py-4 px-6"><kbd class="inline-flex items-center mr-1 px-1 text-slate-800 bg-slate-100 border border-slate-200 rounded-lg dark:bg-slate-600 dark:text-slate-100 dark:border-slate-500"><i class="bi bi-arrow-down-square"></i><span class="sr-only">Arrow Down </span></kbd></td><td class="py-4 px-6">Arrow key down </td><td class="py-4 px-6">Decrement the value </td></tr><tr><td class="py-4 px-6"><kbd class="px-2 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-200 rounded-lg dark:bg-slate-600 dark:text-slate-100 dark:border-slate-500">PgUp </kbd><td class="py-4 px-6">Page up key </td></td><td class="py-4 px-6">Increases the value by the \`largeStep\` prop value </td></tr><tr><td class="py-4 px-6"><kbd class="px-2 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-200 rounded-lg dark:bg-slate-600 dark:text-slate-100 dark:border-slate-500">PgDown </kbd><td class="py-4 px-6">Page Down </td></td><td class="py-4 px-6">Decrease the value by the \`largeStep\` prop value </td></tr><tr><td class="py-4 px-6"><kbd class="px-2 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-200 rounded-lg dark:bg-slate-600 dark:text-slate-100 dark:border-slate-500">End </kbd><td class="py-4 px-6">Home </td></td><td class="py-4 px-6">Set the value to the minimum </td></tr><tr><td class="py-4 px-6"><kbd class="px-2 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-200 rounded-lg dark:bg-slate-600 dark:text-slate-100 dark:border-slate-500">End </kbd><td class="py-4 px-6">End </td></td><td class="py-4 px-6">Set the value to the maxium </td></tr></tbody></table></div><h2 id="props">Props </h2><div class="overflow-auto w-full"><table><thead class="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400"><tr><th scope="col" class="py-3 px-6">Prop </th><th scope="col" class="py-3 px-6">Type </th><th scope="col" class="py-3 px-6">Default </th><th scope="col" class="py-3 px-6">Description </th></tr></thead><tr><td class="py-4 px-6"> placeholder </td><td class="py-4 px-6">String </td><td class="py-4 px-6">-- </td><td class="py-4 px-6"> Use the placeholder prop to show a string when the \`NumberInput\` has no value (i.e. placeholder=&quot;--&quot;). </td></tr><tr><td class="py-4 px-6"> v-model </td><td class="py-4 px-6">Number </td><td class="py-4 px-6"></td><td class="py-4 px-6"> The v-model always returns the value as a number. The v-model can be null if no initial value is set. </td></tr><tr><td class="py-4 px-6"> max </td><td class="py-4 px-6">Number </td><td class="py-4 px-6">100 </td><td class="py-4 px-6"> The maximum value that can be selected. Must be greater than the \`min\` prop.. Negative numbers are allowed </td></tr><tr><td class="py-4 px-6"> min </td><td class="py-4 px-6">Number </td><td class="py-4 px-6">0 </td><td class="py-4 px-6"> The minimum value that can be selected. Negative numbers are allowed </td></tr><tr><td class="py-4 px-6"> disabled </td><td class="py-4 px-6">Boolean </td><td class="py-4 px-6">false </td><td class="py-4 px-6">Component appears as disabled. </td></tr><tr><td class="py-4 px-6"> formatter-fn </td><td class="py-4 px-6"></td><td class="py-4 px-6"></td><td class="py-4 px-6"> A reference to a method to format the displayed value. It is passed a single argument which is the current value </td></tr><tr><td class="py-4 px-6"> label-decrement </td><td class="py-4 px-6"></td><td class="py-4 px-6"></td><td class="py-4 px-6"></td></tr><tr><td class="py-4 px-6"> label-increment </td><td class="py-4 px-6"></td><td class="py-4 px-6"></td><td class="py-4 px-6"></td></tr><tr><td class="py-4 px-6"> name </td><td class="py-4 px-6">String </td><td class="py-4 px-6"></td><td class="py-4 px-6">Sets the value of the \`name\` attribute on the form control </td></tr><tr><td class="py-4 px-6"> wrap </td><td class="py-4 px-6">Boolean </td><td class="py-4 px-6">false </td><td class="py-4 px-6"> When set, allows the value to wrap around when reaching the minimum or maximum value </td></tr></table></div><h2 class="mt-30">Slots </h2><div class="overflow-auto w-full"><table><tr><td class="py-4 px-6"><strong>Name </strong></td><td class="py-4 px-6"><strong>Scoped </strong></td><td class="py-4 px-6"><strong>Description </strong></td></tr><tr><td class="py-4 px-6">minus-button </td><td class="py-4 px-6">decreaseNumber function that will decrease the number </td><td class="py-4 px-6">Custom button to place in the decrement button </td></tr><tr><td class="py-4 px-6">plus-button </td><td class="py-4 px-6">increaseNumber function that will increase the number </td><td class="py-4 px-6">Custom content to place in the increment button </td></tr></table></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/BraveNumberInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BraveNumberInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BraveNumberInput as default
};
