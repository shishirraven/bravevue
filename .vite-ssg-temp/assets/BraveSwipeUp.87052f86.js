import { _ as _export_sfc, S as SwipeUp$1, j as BraveRadialMenu, e as BraveGistEmbed, k as BraveTabs, b as BrTaSyntaxHighlighter, c as BrTaTabs, P as PillsTab } from "../main.mjs";
import { resolveDirective, mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { useHead } from "@vueuse/head";
import "uuid";
import "vue-router";
import "vuedraggable";
import "vite-ssg";
const _sfc_main$1 = {
  data() {
    return {
      swipeStatus: "Swipe Up Here to see the result",
      swipeStyle: {}
    };
  },
  directives: {
    "swipe-up": SwipeUp$1
  },
  methods: {
    swipeup() {
      this.swipeStatus = "Swiped Up \u{1F44D}";
      this.swipeStyle = {
        shadow: "shadow-2xl",
        marginTop: "-10px"
      };
      setTimeout(() => {
        this.swipeStatus = "Swipe Up Here to see the result";
        this.swipeStyle = {};
      }, 1200);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _directive_swipe_up = resolveDirective("swipe-up");
  _push(`<!--[--><p class="mb-10">Please swipeUp or drag Up with Mouse to see effect.</p><div${ssrRenderAttrs(mergeProps({
    style: $data.swipeStyle,
    class: "z-40 border p-10 transition-all dark:bg-slate-600"
  }, ssrGetDirectiveProps(_ctx, _directive_swipe_up, $options.swipeup)))}>${ssrInterpolate($data.swipeStatus)}</div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/SwipeUpDirective/SwipeUpExample.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SwipeUpExample = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  mounted() {
    useHead({
      title: "SwipeUp Directive for Vue 3 | BraveVue Component Library ",
      meta: [
        {
          name: "description",
          content: "You can easily record the Swipe Up Action Made on the Page."
        },
        {
          name: "keywords",
          content: "SwipeUp, Directive, Swipe Up Guesture, Touch Enabled"
        },
        {
          name: "author",
          content: "Shishir Raven"
        }
      ]
    });
  },
  components: {
    BraveRadialMenu,
    BraveGistEmbed,
    BraveTabs,
    BrTaSyntaxHighlighter,
    BrTaTabs,
    PillsTab,
    SwipeUpExample
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BrTaTabs = resolveComponent("BrTaTabs");
  const _component_SwipeUpExample = resolveComponent("SwipeUpExample");
  const _component_BrTaSyntaxHighlighter = resolveComponent("BrTaSyntaxHighlighter");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 p-4 lg:p-10 xl:p-16" }, _attrs))}><div class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block"><h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100"> On this page </h5><div id="navigation"><ul class="navtext-slate-700 text-sm leading-6"><li class="mb-2"><a href="#introduction" class="text-slate-900 dark:text-slate-100"> Introduction </a></li><li class="mb-2"><a href="#live-example" class="text-slate-900 dark:text-slate-100"> Live example </a></li></ul></div></div><div class="prose dark:prose-invert prose-slate"><h1 id="introduction"><i class="bi bi-chevron-double-up"></i> Touch Swipe Up</h1><p>You can easily record the Swipe Up Action Made on the Page. </p><code class="text-blue-500">v-swipe-up=&quot;swipeup&quot;</code><h3 id="live-example">Live Example</h3>`);
  _push(ssrRenderComponent(_component_BrTaTabs, {
    class: "not-prose",
    tabs: ["example", "code", "stackblitz"],
    initialTab: "example"
  }, {
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
        _push2(`<iframe src="https://stackblitz.com/edit/vitejs-vite-lvkykx?embed=1&amp;file=src/App.vue&amp;hideNavigation=1&amp;view=preview" style="${ssrRenderStyle({ "width": "100%", "height": "500px", "border": "0", "border-radius": "4px", "overflow": "hidden" })}" allowfullscreen="allowfullscreen" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"${_scopeId}></iframe>`);
      } else {
        return [
          createVNode("iframe", {
            src: "https://stackblitz.com/edit/vitejs-vite-lvkykx?embed=1&file=src/App.vue&hideNavigation=1&view=preview",
            style: { "width": "100%", "height": "500px", "border": "0", "border-radius": "4px", "overflow": "hidden" },
            allowfullscreen: "allowfullscreen",
            sandbox: "allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          })
        ];
      }
    }),
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
        _push2(ssrRenderComponent(_component_SwipeUpExample, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SwipeUpExample)
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
  <p class="mb-10">Please swipeUp or drag Up with Mouse to see effect.</p>
  <div
    :style="swipeStyle"
    class="z-40 border p-10 transition-all dark:bg-slate-600"
    v-swipe-up="swipeup"
  >
  {{ swipeStatus }}
  </div>
</template>
<script>
import { SwipeUp } from "bravevue";
export default {
  data() {
    return {
      swipeStatus: "Swipe Up Here to see the result",
      swipeStyle: {},
    };
  },
  directive: {
    "swipe-up": SwipeUp,
  },
  methods: {
    swipeup() {
      this.swipeStatus = "Swiped Up";
      this.swipeStyle = {
        shadow: "shadow-2xl",
        marginTop: "-10px",
      };
      setTimeout(() => {
        this.swipeStatus = "Swipe Up Here to see the result";
        this.swipeStyle = {};
      }, 1200);
    },
  },
};
<\/script>
`)}`);
            } else {
              return [
                createTextVNode(toDisplayString(`<template>
  <p class="mb-10">Please swipeUp or drag Up with Mouse to see effect.</p>
  <div
    :style="swipeStyle"
    class="z-40 border p-10 transition-all dark:bg-slate-600"
    v-swipe-up="swipeup"
  >
  {{ swipeStatus }}
  </div>
</template>
<script>
import { SwipeUp } from "bravevue";
export default {
  data() {
    return {
      swipeStatus: "Swipe Up Here to see the result",
      swipeStyle: {},
    };
  },
  directive: {
    "swipe-up": SwipeUp,
  },
  methods: {
    swipeup() {
      this.swipeStatus = "Swiped Up";
      this.swipeStyle = {
        shadow: "shadow-2xl",
        marginTop: "-10px",
      };
      setTimeout(() => {
        this.swipeStatus = "Swipe Up Here to see the result";
        this.swipeStyle = {};
      }, 1200);
    },
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
  <p class="mb-10">Please swipeUp or drag Up with Mouse to see effect.</p>
  <div
    :style="swipeStyle"
    class="z-40 border p-10 transition-all dark:bg-slate-600"
    v-swipe-up="swipeup"
  >
  {{ swipeStatus }}
  </div>
</template>
<script>
import { SwipeUp } from "bravevue";
export default {
  data() {
    return {
      swipeStatus: "Swipe Up Here to see the result",
      swipeStyle: {},
    };
  },
  directive: {
    "swipe-up": SwipeUp,
  },
  methods: {
    swipeup() {
      this.swipeStatus = "Swiped Up";
      this.swipeStyle = {
        shadow: "shadow-2xl",
        marginTop: "-10px",
      };
      setTimeout(() => {
        this.swipeStatus = "Swipe Up Here to see the result";
        this.swipeStyle = {};
      }, 1200);
    },
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
    _: 1
  }, _parent));
  _push(`</div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/BraveSwipeUp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BraveSwipeUp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BraveSwipeUp as default
};
