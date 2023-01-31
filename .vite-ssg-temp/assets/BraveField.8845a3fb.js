import { _ as _export_sfc, d as BraveField$1 } from "../main.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  components: { BraveField: BraveField$1 },
  name: "BraveFieldDemo",
  data() {
    return {
      booleanVal: false,
      textValue: "Default Value",
      selectValue1: "Pizza",
      selectValue2: "venus",
      selectValue3: "gr"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = resolveComponent("client-only");
  const _component_BraveField = resolveComponent("BraveField", true);
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:text-slate-200" }, _attrs))}><div class="mb-4"><h2 class="text-md mb-1">Text Field</h2>`);
  _push(ssrRenderComponent(_component_client_only, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BraveField, {
          type: "text",
          modelValue: $data.textValue,
          "onUpdate:modelValue": ($event) => $data.textValue = $event,
          placeholder: "Enter a Value",
          class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BraveField, {
            type: "text",
            modelValue: $data.textValue,
            "onUpdate:modelValue": ($event) => $data.textValue = $event,
            placeholder: "Enter a Value",
            class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4"><h2 class="text-md mb-1">Textarea</h2>`);
  _push(ssrRenderComponent(_component_client_only, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BraveField, {
          type: "textarea",
          modelValue: $data.textValue,
          "onUpdate:modelValue": ($event) => $data.textValue = $event,
          placeholder: "This is my first field. ",
          class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BraveField, {
            type: "textarea",
            modelValue: $data.textValue,
            "onUpdate:modelValue": ($event) => $data.textValue = $event,
            placeholder: "This is my first field. ",
            class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4"><h2 class="text-md mb-1">Select with Text Array</h2>`);
  _push(ssrRenderComponent(_component_client_only, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BraveField, {
          type: "select",
          options: ["Orange", "Grapes", "Apple", "Banana"],
          modelValue: $data.selectValue1,
          "onUpdate:modelValue": ($event) => $data.selectValue1 = $event,
          placeholder: "This is my first field. ",
          class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BraveField, {
            type: "select",
            options: ["Orange", "Grapes", "Apple", "Banana"],
            modelValue: $data.selectValue1,
            "onUpdate:modelValue": ($event) => $data.selectValue1 = $event,
            placeholder: "This is my first field. ",
            class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4"><h2 class="text-md mb-1">Select with Object</h2>`);
  _push(ssrRenderComponent(_component_client_only, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BraveField, {
          type: "select",
          options: {
            mercury: "Mercury",
            venus: "Venus",
            earth: "Earth",
            mars: "Mars",
            jupiter: "Jupiter",
            saturn: "Saturn",
            uranus: "Uranus",
            neptune: "Neptune"
          },
          modelValue: $data.selectValue2,
          "onUpdate:modelValue": ($event) => $data.selectValue2 = $event,
          placeholder: "This is my first field. ",
          class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BraveField, {
            type: "select",
            options: {
              mercury: "Mercury",
              venus: "Venus",
              earth: "Earth",
              mars: "Mars",
              jupiter: "Jupiter",
              saturn: "Saturn",
              uranus: "Uranus",
              neptune: "Neptune"
            },
            modelValue: $data.selectValue2,
            "onUpdate:modelValue": ($event) => $data.selectValue2 = $event,
            placeholder: "This is my first field. ",
            class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4"><h2 class="text-md mb-1">Select Array of Objects</h2>`);
  _push(ssrRenderComponent(_component_client_only, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BraveField, {
          type: "select",
          options: [
            { label: "France", value: "fr", attrs: { disabled: true } },
            { label: "Germany", value: "de", attrs: { disabled: true } },
            { label: "Spain", value: "es", attrs: { disabled: true } },
            { label: "Italy", value: "ie" },
            { label: "Greece", value: "gr", attrs: { disabled: true } }
          ],
          modelValue: $data.selectValue3,
          "onUpdate:modelValue": ($event) => $data.selectValue3 = $event,
          placeholder: "This is my first field. ",
          class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BraveField, {
            type: "select",
            options: [
              { label: "France", value: "fr", attrs: { disabled: true } },
              { label: "Germany", value: "de", attrs: { disabled: true } },
              { label: "Spain", value: "es", attrs: { disabled: true } },
              { label: "Italy", value: "ie" },
              { label: "Greece", value: "gr", attrs: { disabled: true } }
            ],
            modelValue: $data.selectValue3,
            "onUpdate:modelValue": ($event) => $data.selectValue3 = $event,
            placeholder: "This is my first field. ",
            class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4"><h2 class="text-md mb-1">Radio</h2>`);
  _push(ssrRenderComponent(_component_client_only, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BraveField, {
          type: "radio",
          wrapperClass: "mb-2",
          options: [
            { label: "France", value: "fr", attrs: { disabled: true } },
            { label: "Germany", value: "de", attrs: { disabled: true } },
            { label: "Spain", value: "es", attrs: { disabled: true } },
            { label: "Italy", value: "ie" },
            { label: "Greece", value: "gr", attrs: { disabled: true } }
          ],
          modelValue: $data.selectValue3,
          "onUpdate:modelValue": ($event) => $data.selectValue3 = $event,
          class: "h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BraveField, {
            type: "radio",
            wrapperClass: "mb-2",
            options: [
              { label: "France", value: "fr", attrs: { disabled: true } },
              { label: "Germany", value: "de", attrs: { disabled: true } },
              { label: "Spain", value: "es", attrs: { disabled: true } },
              { label: "Italy", value: "ie" },
              { label: "Greece", value: "gr", attrs: { disabled: true } }
            ],
            modelValue: $data.selectValue3,
            "onUpdate:modelValue": ($event) => $data.selectValue3 = $event,
            class: "h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4"><h2 class="text-md mb-1">Checkbox</h2>`);
  _push(ssrRenderComponent(_component_client_only, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BraveField, {
          type: "checkbox",
          modelValue: $data.booleanVal,
          "onUpdate:modelValue": ($event) => $data.booleanVal = $event,
          class: "border"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BraveField, {
            type: "checkbox",
            modelValue: $data.booleanVal,
            "onUpdate:modelValue": ($event) => $data.booleanVal = $event,
            class: "border"
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/BraveField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BraveField = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BraveField as B
};
