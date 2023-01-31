import { defineComponent, ref, onMounted, watch, computed, openBlock, createElementBlock, Fragment, renderList, unref, normalizeClass, createElementVNode, toDisplayString, createCommentVNode, withDirectives, withModifiers, renderSlot, vShow, resolveDirective, normalizeStyle, resolveComponent, createBlock, withCtx, createTextVNode, withKeys, vModelText, resolveDynamicComponent, mergeProps, createVNode, vModelCheckbox, vModelSelect, pushScopeId, popScopeId, useSSRContext, createSlots } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { useHead, createHead } from "@vueuse/head";
import { v4 as v4$1 } from "uuid";
import { createMemoryHistory } from "vue-router";
import draggable from "vuedraggable";
import { ViteSSG } from "vite-ssg";
const tailwind = "";
const style = "";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$s$1 = {
  name: "BraveDialog",
  props: {
    hideOnBackdrop: { type: Boolean, default: true },
    visibility: Boolean,
    dialogwidth: String,
    dialogclasses: String
  },
  data: function() {
    return {
      dialogVisible: false,
      dialogOrignalWidth: "auto"
    };
  },
  created: function() {
    if (this.visibility != void 0) {
      this.dialogVisible = this.visibility;
    }
    if (this.dialogwidth != void 0) {
      this.dialogOrignalWidth = this.dialogwidth;
    }
  },
  methods: {
    show() {
      this.dialogVisible = true;
      document.body.style.overflow = "hidden";
      this.$forceUpdate();
    },
    hide() {
      this.dialogVisible = false;
      document.body.style.overflow = "auto";
    },
    hideFromBackdrop() {
      if (this.hideOnBackdrop) {
        this.hide();
      }
    }
  }
};
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", {
    class: "back-drop py-4",
    onMousedown: _cache[0] || (_cache[0] = withModifiers((...args) => $options.hideFromBackdrop && $options.hideFromBackdrop(...args), ["self", "stop"]))
  }, [
    createElementVNode("div", {
      class: normalizeClass([$props.dialogclasses, "m-3 d-flex flex-column"])
    }, [
      renderSlot(_ctx.$slots, "default", { hide: $options.hide }, void 0, true)
    ], 2)
  ], 544)), [
    [vShow, _ctx.dialogVisible]
  ]);
}
var BraveDialog$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$s$1, [["render", _sfc_render$r], ["__scopeId", "data-v-078bef66"]]);
var clickoutside = {
  priority: 700,
  beforeMount: function(el, binding, vnode) {
    el.clickOutsideEvent = function(event) {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: function(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  }
};
const _sfc_main$r$1 = {
  name: "BavePositionDialog",
  directives: { clickoutside },
  props: {
    visibility: Boolean,
    offset: Number
  },
  data: function() {
    return {
      dialogVisible: false,
      dialogOffset: 10,
      menuStyle: {
        position: "fixed",
        left: 0,
        top: 0
      }
    };
  },
  created: function() {
    if (this.visibility != void 0) {
      this.dialogVisible = this.visibility;
    }
    if (this.offset != void 0) {
      this.dialogOffset = this.offset;
    }
  },
  methods: {
    show(event) {
      this.setPosition(event);
      this.dialogVisible = true;
    },
    hide() {
      this.dialogVisible = false;
    },
    setPosition(event) {
      if (event.type == "mouseup" || event.type == "click" || event.type == "mouseover") {
        this.menuStyle.top = event.clientY + this.dialogOffset + "px";
        this.menuStyle.left = event.clientX + this.dialogOffset + "px";
      }
      if (event.type == "touchend") {
        this.menuStyle.top = event.changedTouches[0].clientY + this.dialogOffset + "px";
        this.menuStyle.left = event.changedTouches[0].clientX + this.dialogOffset + "px";
      }
    }
  }
};
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_clickoutside = resolveDirective("clickoutside");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: "dialog",
    style: normalizeStyle(_ctx.menuStyle)
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 4)), [
    [vShow, _ctx.dialogVisible],
    [_directive_clickoutside, $options.hide]
  ]);
}
var BravePositionDialog = /* @__PURE__ */ _export_sfc$1(_sfc_main$r$1, [["render", _sfc_render$q], ["__scopeId", "data-v-424a214c"]]);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var browser = { exports: {} };
var debug$1 = { exports: {} };
var s = 1e3;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;
var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === "string" && val.length > 0) {
    return parse$1(val);
  } else if (type === "number" && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
};
function parse$1(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || "ms").toLowerCase();
  switch (type) {
    case "years":
    case "year":
    case "yrs":
    case "yr":
    case "y":
      return n * y;
    case "days":
    case "day":
    case "d":
      return n * d;
    case "hours":
    case "hour":
    case "hrs":
    case "hr":
    case "h":
      return n * h;
    case "minutes":
    case "minute":
    case "mins":
    case "min":
    case "m":
      return n * m;
    case "seconds":
    case "second":
    case "secs":
    case "sec":
    case "s":
      return n * s;
    case "milliseconds":
    case "millisecond":
    case "msecs":
    case "msec":
    case "ms":
      return n;
    default:
      return void 0;
  }
}
function fmtShort(ms2) {
  if (ms2 >= d) {
    return Math.round(ms2 / d) + "d";
  }
  if (ms2 >= h) {
    return Math.round(ms2 / h) + "h";
  }
  if (ms2 >= m) {
    return Math.round(ms2 / m) + "m";
  }
  if (ms2 >= s) {
    return Math.round(ms2 / s) + "s";
  }
  return ms2 + "ms";
}
function fmtLong(ms2) {
  return plural(ms2, d, "day") || plural(ms2, h, "hour") || plural(ms2, m, "minute") || plural(ms2, s, "second") || ms2 + " ms";
}
function plural(ms2, n, name) {
  if (ms2 < n) {
    return;
  }
  if (ms2 < n * 1.5) {
    return Math.floor(ms2 / n) + " " + name;
  }
  return Math.ceil(ms2 / n) + " " + name + "s";
}
(function(module, exports) {
  exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = ms;
  exports.names = [];
  exports.skips = [];
  exports.formatters = {};
  var prevTime;
  function selectColor(namespace) {
    var hash2 = 0, i;
    for (i in namespace) {
      hash2 = (hash2 << 5) - hash2 + namespace.charCodeAt(i);
      hash2 |= 0;
    }
    return exports.colors[Math.abs(hash2) % exports.colors.length];
  }
  function createDebug(namespace) {
    function debug2() {
      if (!debug2.enabled)
        return;
      var self2 = debug2;
      var curr = +new Date();
      var ms2 = curr - (prevTime || curr);
      self2.diff = ms2;
      self2.prev = prevTime;
      self2.curr = curr;
      prevTime = curr;
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      args[0] = exports.coerce(args[0]);
      if (typeof args[0] !== "string") {
        args.unshift("%O");
      }
      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format2) {
        if (match === "%%")
          return match;
        index++;
        var formatter = exports.formatters[format2];
        if (typeof formatter === "function") {
          var val = args[index];
          match = formatter.call(self2, val);
          args.splice(index, 1);
          index--;
        }
        return match;
      });
      exports.formatArgs.call(self2, args);
      var logFn = debug2.log || exports.log || console.log.bind(console);
      logFn.apply(self2, args);
    }
    debug2.namespace = namespace;
    debug2.enabled = exports.enabled(namespace);
    debug2.useColors = exports.useColors();
    debug2.color = selectColor(namespace);
    if (typeof exports.init === "function") {
      exports.init(debug2);
    }
    return debug2;
  }
  function enable(namespaces) {
    exports.save(namespaces);
    exports.names = [];
    exports.skips = [];
    var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
    var len = split.length;
    for (var i = 0; i < len; i++) {
      if (!split[i])
        continue;
      namespaces = split[i].replace(/\*/g, ".*?");
      if (namespaces[0] === "-") {
        exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
      } else {
        exports.names.push(new RegExp("^" + namespaces + "$"));
      }
    }
  }
  function disable() {
    exports.enable("");
  }
  function enabled(name) {
    var i, len;
    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }
  function coerce(val) {
    if (val instanceof Error)
      return val.stack || val.message;
    return val;
  }
})(debug$1, debug$1.exports);
(function(module, exports) {
  exports = module.exports = debug$1.exports;
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = typeof chrome != "undefined" && typeof chrome.storage != "undefined" ? chrome.storage.local : localstorage();
  exports.colors = [
    "lightseagreen",
    "forestgreen",
    "goldenrod",
    "dodgerblue",
    "darkorchid",
    "crimson"
  ];
  function useColors() {
    if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
      return true;
    }
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  exports.formatters.j = function(v) {
    try {
      return JSON.stringify(v);
    } catch (err) {
      return "[UnexpectedJSONParseError]: " + err.message;
    }
  };
  function formatArgs(args) {
    var useColors2 = this.useColors;
    args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
    if (!useColors2)
      return;
    var c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function(match) {
      if (match === "%%")
        return;
      index++;
      if (match === "%c") {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }
  function log() {
    return typeof console === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }
  function save(namespaces) {
    try {
      if (namespaces == null) {
        exports.storage.removeItem("debug");
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e) {
    }
  }
  function load() {
    var r;
    try {
      r = exports.storage.debug;
    } catch (e) {
    }
    if (!r && typeof process !== "undefined" && "env" in process) {
      r = {}.DEBUG;
    }
    return r;
  }
  exports.enable(load());
  function localstorage() {
    try {
      return window.localStorage;
    } catch (e) {
    }
  }
})(browser, browser.exports);
var debug = browser.exports("jsonp");
var jsonp_1 = jsonp;
var count = 0;
function noop() {
}
function jsonp(url, opts, fn) {
  if (typeof opts == "function") {
    fn = opts;
    opts = {};
  }
  if (!opts)
    opts = {};
  var prefix = opts.prefix || "__jp";
  var id = opts.name || prefix + count++;
  var param = opts.param || "callback";
  var timeout = opts.timeout != null ? opts.timeout : 6e4;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName("script")[0] || document.head;
  var script;
  var timer;
  if (timeout) {
    timer = setTimeout(function() {
      cleanup();
      if (fn)
        fn(new Error("Timeout"));
    }, timeout);
  }
  function cleanup() {
    if (script.parentNode)
      script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer)
      clearTimeout(timer);
  }
  function cancel() {
    if (window[id]) {
      cleanup();
    }
  }
  window[id] = function(data) {
    debug("jsonp got", data);
    cleanup();
    if (fn)
      fn(null, data);
  };
  url += (~url.indexOf("?") ? "&" : "?") + param + "=" + enc(id);
  url = url.replace("?&", "?");
  debug('jsonp req "%s"', url);
  script = document.createElement("script");
  script.src = url;
  target.parentNode.insertBefore(script, target);
  return cancel;
}
const _sfc_main$q$1 = {
  props: {
    url: String
  },
  data: function() {
    return {
      content: "Loading...",
      stylesheet: null
    };
  },
  mounted: function() {
    var self2 = this;
    jsonp_1(this.url + ".json", null, function(err, data) {
      if (err) {
        console.error(err.message);
        self2.content = err.message;
      } else {
        self2.content = data.div;
        self2.stylesheet = data.stylesheet;
      }
    });
  }
};
const _hoisted_1$h = ["innerHTML"];
const _hoisted_2$b = ["href"];
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createElementVNode("div", {
      innerHTML: this.content
    }, null, 8, _hoisted_1$h),
    createElementVNode("link", {
      rel: "stylesheet",
      href: _ctx.stylesheet
    }, null, 8, _hoisted_2$b)
  ]);
}
var BraveGistEmbed = /* @__PURE__ */ _export_sfc$1(_sfc_main$q$1, [["render", _sfc_render$p]]);
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  for (let i = 0; i < middleware.length; i++) {
    const {
      name,
      fn
    } = middleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y2 = nextY != null ? nextY : y2;
    middlewareData = __spreadProps(__spreadValues({}, middlewareData), {
      [name]: __spreadValues(__spreadValues({}, middlewareData[name]), data)
    });
    if (reset) {
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y: y2
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
function expandPaddingObject(padding) {
  return __spreadValues({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return __spreadProps(__spreadValues({}, rect), {
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
async function detectOverflow(middlewareArguments, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y: y2,
    platform: platform2,
    rects,
    elements,
    strategy
  } = middlewareArguments;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: elementContext === "floating" ? __spreadProps(__spreadValues({}, rects.floating), {
      x,
      y: y2
    }) : rects.reference,
    offsetParent: await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating)),
    strategy
  }) : rects[elementContext]);
  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}
const min$1 = Math.min;
const max$1 = Math.max;
function within(min$1$1, value, max$1$1) {
  return max$1(min$1$1, min$1(value, max$1$1));
}
const hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (matched) => hash$1[matched]);
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
const hash = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (matched) => hash[matched]);
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
const flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(middlewareArguments) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = middlewareArguments;
      const _a = options, {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        flipAlignment = true
      } = _a, detectOverflowOptions = __objRest(_a, [
        "mainAxis",
        "crossAxis",
        "fallbackPlacements",
        "fallbackStrategy",
        "flipAlignment"
      ]);
      const side = getSide(placement);
      const isBasePlacement = side === initialPlacement;
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip$, _middlewareData$flip2;
        const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) != null ? _middlewareData$flip$ : 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = "bottom";
        switch (fallbackStrategy) {
          case "bestFit": {
            var _overflowsData$map$so;
            const placement2 = (_overflowsData$map$so = overflowsData.map((d2) => [d2, d2.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0].placement;
            if (placement2) {
              resetPlacement = placement2;
            }
            break;
          }
          case "initialPlacement":
            resetPlacement = initialPlacement;
            break;
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(middlewareArguments, value) {
  const {
    placement,
    platform: platform2,
    elements
  } = middlewareArguments;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === "x";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === "function" ? value(middlewareArguments) : value;
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : __spreadValues({
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null
  }, rawValue);
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset = function(value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: "offset",
    options: value,
    async fn(middlewareArguments) {
      const {
        x,
        y: y2
      } = middlewareArguments;
      const diffCoords = await convertValueToCoords(middlewareArguments, value);
      return {
        x: x + diffCoords.x,
        y: y2 + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
const shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(middlewareArguments) {
      const {
        x,
        y: y2,
        placement
      } = middlewareArguments;
      const _a = options, {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y3
            } = _ref;
            return {
              x: x2,
              y: y3
            };
          }
        }
      } = _a, detectOverflowOptions = __objRest(_a, [
        "mainAxis",
        "crossAxis",
        "limiter"
      ]);
      const coords = {
        x,
        y: y2
      };
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn(__spreadProps(__spreadValues({}, middlewareArguments), {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      }));
      return __spreadProps(__spreadValues({}, limitedCoords), {
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y2
        }
      });
    }
  };
};
const size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(middlewareArguments) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = middlewareArguments;
      const _a = options, {
        apply
      } = _a, detectOverflowOptions = __objRest(_a, [
        "apply"
      ]);
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const xMin = max$1(overflow.left, 0);
      const xMax = max$1(overflow.right, 0);
      const yMin = max$1(overflow.top, 0);
      const yMax = max$1(overflow.bottom, 0);
      const dimensions = {
        availableHeight: rects.floating.height - (["left", "right"].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max$1(overflow.top, overflow.bottom)) : overflow[heightSide]),
        availableWidth: rects.floating.width - (["top", "bottom"].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max$1(overflow.left, overflow.right)) : overflow[widthSide])
      };
      const prevDimensions = await platform2.getDimensions(elements.floating);
      apply == null ? void 0 : apply(__spreadValues(__spreadValues({}, middlewareArguments), dimensions));
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (prevDimensions.width !== nextDimensions.width || prevDimensions.height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function isWindow(value) {
  return value && value.document && value.location && value.alert && value.setInterval;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeName(node) {
  return isWindow(node) ? "" : node ? (node.nodeName || "").toLowerCase() : "";
}
function getUAString() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands) {
    return uaData.brands.map((item) => item.brand + "/" + item.version).join(" ");
  }
  return navigator.userAgent;
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle$1(element);
  return css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].includes(css.willChange) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false);
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
const min = Math.min;
const max = Math.max;
const round = Math.round;
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  var _win$visualViewport$o, _win$visualViewport, _win$visualViewport$o2, _win$visualViewport2;
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  const win = isElement(element) ? getWindow(element) : window;
  const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  const x = (clientRect.left + (addVisualOffsets ? (_win$visualViewport$o = (_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) != null ? _win$visualViewport$o : 0 : 0)) / scaleX;
  const y2 = (clientRect.top + (addVisualOffsets ? (_win$visualViewport$o2 = (_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) != null ? _win$visualViewport$o2 : 0 : 0)) / scaleY;
  const width = clientRect.width / scaleX;
  const height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x + width,
    bottom: y2 + height,
    left: x,
    x,
    y: y2
  };
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function isScaled(element) {
  const rect = getBoundingClientRect(element);
  return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, isOffsetParentAnElement && isScaled(offsetParent), strategy === "fixed");
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  return node.assignedSlot || node.parentNode || (isShadowRoot(node) ? node.host : null) || getDocumentElement(node);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && !["html", "body"].includes(getNodeName(currentNode))) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  const window2 = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getDimensions(element) {
  if (isHTMLElement(element)) {
    return {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  const rect = getBoundingClientRect(element);
  return {
    width: rect.width,
    height: rect.height
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return __spreadProps(__spreadValues({}, rect), {
    x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y
  });
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y: y2
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  const width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  const height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y2 = -scroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y: y2
  };
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (["html", "body", "#document"].includes(getNodeName(parentNode))) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  const target = isBody ? [win].concat(win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []) : scrollableAncestor;
  const updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(getOverflowAncestors(target));
}
function contains(parent, child) {
  const rootNode = child == null ? void 0 : child.getRootNode == null ? void 0 : child.getRootNode();
  if (parent != null && parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    do {
      if (next && parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, false, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  return {
    top,
    left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}
function getClientRectFromClippingAncestor(element, clippingParent, strategy) {
  if (clippingParent === "viewport") {
    return rectToClientRect(getViewportRect(element, strategy));
  }
  if (isElement(clippingParent)) {
    return getInnerBoundingClientRect(clippingParent, strategy);
  }
  return rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingAncestors(element) {
  const clippingAncestors = getOverflowAncestors(element);
  const canEscapeClipping = ["absolute", "fixed"].includes(getComputedStyle$1(element).position);
  const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingAncestors.filter((clippingAncestors2) => isElement(clippingAncestors2) && contains(clippingAncestors2, clipperElement) && getNodeName(clippingAncestors2) !== "body");
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const mainClippingAncestors = boundary === "clippingAncestors" ? getClippingAncestors(element) : [].concat(boundary);
  const clippingAncestors = [...mainClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getElementRects: (_ref) => {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    return {
      reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
      floating: __spreadProps(__spreadValues({}, getDimensions(floating)), {
        x: 0,
        y: 0
      })
    };
  },
  getClientRects: (element) => Array.from(element.getClientRects()),
  isRTL: (element) => getComputedStyle$1(element).direction === "rtl"
};
const computePosition = (reference, floating, options) => computePosition$1(reference, floating, __spreadValues({
  platform
}, options));
const _sfc_main$p$1 = {
  name: "BraveDropMenu",
  directives: { clickoutside },
  computed: {},
  data: function() {
    return {
      isVisible: false
    };
  },
  updated: function() {
    if (this.isVisible) {
      this.setPosition();
    }
  },
  methods: {
    toggleVisiblity(event) {
      event.stopImmediatePropagation();
      this.isVisible = !this.isVisible;
    },
    hide() {
      this.isVisible = false;
    },
    setPosition() {
      const button = this.$refs.button;
      const tooltip = this.$refs.menu;
      computePosition(button, tooltip, {
        placement: "bottom-start",
        middleware: [offset(6), flip(), shift({ padding: 5 })]
      }).then(({ x, y: y2 }) => {
        Object.assign(tooltip.style, {
          left: `${x}px`,
          top: `${y2}px`
        });
      });
    }
  }
};
const _hoisted_1$g = {
  style: { "position": "relative", "display": "inline-block" },
  class: "select-none"
};
const _hoisted_2$a = /* @__PURE__ */ createTextVNode("Menu");
const _hoisted_3$6 = {
  key: 0,
  ref: "menu",
  class: "dropdown-items",
  style: { "position": "absolute", "z-index": "1", "user-select": "none", "transition": "opacity 700ms ease 0s, color 700ms ease 0s, transform 200ms ease 0s", "transform": "translateX(0px) translateZ(0px)" }
};
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createElementBlock("div", _hoisted_1$g, [
    createElementVNode("div", {
      ref: "button",
      class: "drop-head cursor-pointer",
      onClick: _cache[0] || (_cache[0] = ($event) => $options.toggleVisiblity($event))
    }, [
      renderSlot(_ctx.$slots, "button", {}, () => [
        _hoisted_2$a
      ])
    ], 512),
    _ctx.isVisible ? withDirectives((openBlock(), createElementBlock("div", _hoisted_3$6, [
      renderSlot(_ctx.$slots, "menu", { hide: $options.hide })
    ])), [
      [_directive_clickoutside, $options.hide]
    ]) : createCommentVNode("", true)
  ]);
}
var BraveDropMenu$2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$p$1, [["render", _sfc_render$o]]);
const _sfc_main$o$1 = {
  props: ["modelValue", "options", "dropdownClass"],
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  },
  name: "BraveDropSelect",
  directives: { clickoutside },
  data: function() {
    return {
      isVisible: false
    };
  },
  updated: function() {
    if (this.isVisible)
      this.setPosition();
  },
  methods: {
    toggleVisiblity() {
      this.isVisible = !this.isVisible;
    },
    hide() {
      this.isVisible = false;
    },
    setPosition() {
      const button = this.$refs.button;
      const tooltip = this.$refs.menu;
      computePosition(button, tooltip, {
        placement: "bottom-start",
        middleware: [
          offset(6),
          flip(),
          shift({ padding: 5 }),
          size({
            apply({ width, height, reference }) {
              Object.assign(tooltip.style, {
                maxWidth: `${width}px`,
                maxHeight: `${height}px`
              });
            }
          })
        ]
      }).then(({ x, y: y2 }) => {
        Object.assign(tooltip.style, {
          left: `${x}px`,
          top: `${y2}px`
        });
      });
    }
  }
};
const _hoisted_1$f = { class: "drop-button" };
const _hoisted_2$9 = /* @__PURE__ */ createTextVNode("Menu");
const _hoisted_3$5 = ["onClick"];
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createElementBlock("div", _hoisted_1$f, [
    createElementVNode("div", {
      ref: "button",
      class: "drop-head",
      onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.toggleVisiblity(), ["stop"]))
    }, [
      renderSlot(_ctx.$slots, "button", { selectedValue: $options.value }, () => [
        _hoisted_2$9
      ], true)
    ], 512),
    _ctx.isVisible ? withDirectives((openBlock(), createElementBlock("div", {
      key: 0,
      ref: "menu",
      class: normalizeClass([$props.dropdownClass, "dropdown-items"])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (option, index) => {
        return openBlock(), createElementBlock("div", {
          key: index,
          onClick: withModifiers(($event) => ($options.value = option, $options.hide()), ["stop"])
        }, [
          renderSlot(_ctx.$slots, "menu", {
            option,
            selectedValue: $options.value
          }, void 0, true)
        ], 8, _hoisted_3$5);
      }), 128))
    ], 2)), [
      [_directive_clickoutside, $options.hide]
    ]) : createCommentVNode("", true)
  ]);
}
var BraveSelect$2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$o$1, [["render", _sfc_render$n], ["__scopeId", "data-v-29331aa9"]]);
const _sfc_main$n$1 = {
  components: { BraveDropMenu: BraveDropMenu$2 },
  created() {
    this.applyByStorage();
  },
  data() {
    return {
      iconClass: "bi bi-moon-stars-fill text-yellow-500",
      mode: "system"
    };
  },
  methods: {
    switchToLight(updateStore) {
      if (updateStore != void 0 && updateStore) {
        localStorage.theme = "light";
      }
      this.iconClass = "bi bi-brightness-high-fill text-blue-500";
      this.mode = "light";
      document.documentElement.classList.remove("dark");
    },
    switchToDark(updateStore) {
      if (updateStore != void 0 && updateStore) {
        localStorage.theme = "dark";
      }
      this.mode = "dark";
      this.iconClass = "bi bi-moon-stars-fill text-yellow-500";
      document.documentElement.classList.add("dark");
    },
    switchToSystem() {
      localStorage.removeItem("theme");
      this.iconClass = "bi bi-display text-grey-300";
      this.applyByStorage();
      this.mode = "system";
    },
    applyByStorage() {
      if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        this.switchToDark(false);
      } else {
        this.switchToLight(false);
      }
      if (!("theme" in localStorage)) {
        this.mode = "system";
      }
    }
  }
};
const _hoisted_1$e = {
  role: "button",
  class: "dark:bg-slate-900 border dark:hover:bg-slate-800 border dark:border-slate-800 p-2 text-xl rounded-lg shadow-sm dark:text-white bg-white hover:shadow-lg inline-block flex items-center"
};
const _hoisted_2$8 = { class: "text-base ml-3" };
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("div", { class: "ml-3" }, [
  /* @__PURE__ */ createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    class: "bi bi-chevron-expand",
    viewBox: "0 0 16 16"
  }, [
    /* @__PURE__ */ createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
    })
  ])
], -1);
const _hoisted_4$4 = { class: "w-44 dark:bg-slate-900 border dark:border-slate-800 py-2 rounded-lg shadow-lg dark:text-slate-300 bg-white text-xl" };
const _hoisted_5$2 = /* @__PURE__ */ createElementVNode("i", { class: "text-yellow-500 bi bi-moon-stars-fill mr-2" }, null, -1);
const _hoisted_6$2 = /* @__PURE__ */ createTextVNode(" Dark");
const _hoisted_7$1 = [
  _hoisted_5$2,
  _hoisted_6$2
];
const _hoisted_8$1 = /* @__PURE__ */ createElementVNode("i", { class: "text-blue-500 bi bi-brightness-high-fill mr-2" }, null, -1);
const _hoisted_9$1 = /* @__PURE__ */ createTextVNode(" Light");
const _hoisted_10$1 = [
  _hoisted_8$1,
  _hoisted_9$1
];
const _hoisted_11$1 = /* @__PURE__ */ createElementVNode("i", { class: "bi bi-display mr-2" }, null, -1);
const _hoisted_12$1 = /* @__PURE__ */ createTextVNode(" System");
const _hoisted_13$1 = [
  _hoisted_11$1,
  _hoisted_12$1
];
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BraveDropMenu = resolveComponent("BraveDropMenu");
  return openBlock(), createBlock(_component_BraveDropMenu, {
    ref: "dropmenu",
    class: "me-3"
  }, {
    button: withCtx(() => [
      createElementVNode("div", _hoisted_1$e, [
        createElementVNode("i", {
          class: normalizeClass([$data.iconClass, ""])
        }, null, 2),
        createElementVNode("div", _hoisted_2$8, "Theme " + toDisplayString($data.mode), 1),
        _hoisted_3$4
      ])
    ]),
    menu: withCtx(() => [
      createElementVNode("div", _hoisted_4$4, [
        createElementVNode("div", {
          class: normalizeClass([[$data.mode == "dark" ? "dark:bg-slate-800" : ""], "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3"]),
          onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.$refs.dropmenu.hide(), $options.switchToDark(true)))
        }, _hoisted_7$1, 2),
        createElementVNode("div", {
          class: normalizeClass([[$data.mode == "light" ? "bg-blue-100" : ""], "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3"]),
          onClick: _cache[1] || (_cache[1] = ($event) => (_ctx.$refs.dropmenu.hide(), $options.switchToLight(true)))
        }, _hoisted_10$1, 2),
        createElementVNode("div", {
          class: normalizeClass([[$data.mode == "system" ? "bg-blue-100 dark:bg-slate-800" : ""], "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3"]),
          onClick: _cache[2] || (_cache[2] = ($event) => (_ctx.$refs.dropmenu.hide(), $options.switchToSystem()))
        }, _hoisted_13$1, 2)
      ])
    ]),
    _: 1
  }, 512);
}
var BraveThemeSwitcher = /* @__PURE__ */ _export_sfc$1(_sfc_main$n$1, [["render", _sfc_render$m]]);
const _sfc_main$m$1 = {
  name: "BraveTabs",
  computed: {
    computedTabPanel: function() {
      return "tab-panel-" + this.activeTab;
    }
  },
  props: {
    initialTab: String,
    tabs: Array,
    tabButtonClass: {
      type: String,
      default: ""
    },
    tabButtonActiveClass: {
      type: String,
      default: ""
    },
    tabsContentClass: {
      type: String,
      default: ""
    },
    tabsWrapperClass: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      activeTab: {}
    };
  },
  created: function() {
    this.activeTab = this.initialTab;
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
    }
  }
};
const _hoisted_1$d = ["onClick"];
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createElementVNode("div", {
      class: normalizeClass($props.tabsWrapperClass)
    }, [
      renderSlot(_ctx.$slots, "before-tab"),
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.tabs, (tab) => {
        return openBlock(), createElementBlock("div", {
          key: tab,
          class: normalizeClass([tab == _ctx.activeTab ? $props.tabButtonActiveClass : $props.tabButtonClass]),
          onClick: ($event) => $options.switchTab(tab)
        }, [
          renderSlot(_ctx.$slots, "tab-head-" + tab, {}, () => [
            createTextVNode(toDisplayString(tab), 1)
          ])
        ], 10, _hoisted_1$d);
      }), 128)),
      renderSlot(_ctx.$slots, "after-tab")
    ], 2),
    createElementVNode("div", {
      class: normalizeClass($props.tabsContentClass)
    }, [
      renderSlot(_ctx.$slots, $options.computedTabPanel)
    ], 2)
  ]);
}
var BraveTabs$2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$m$1, [["render", _sfc_render$l]]);
const _sfc_main$l$1 = {
  name: "BraveLayout",
  props: {
    sidebarClass: {
      type: String,
      default: "bg-slate-900"
    },
    sidebarWidth: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      sideBarLeft: "-100%"
    };
  },
  methods: {
    openMenu() {
      this.sideBarLeft = 0;
    },
    closeMenu() {
      this.sideBarLeft = "-100%";
    }
  }
};
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("div", {
      style: normalizeStyle({ width: $props.sidebarWidth + "px", left: $data.sideBarLeft }),
      class: normalizeClass([$props.sidebarClass, "sidebar"])
    }, [
      renderSlot(_ctx.$slots, "sidebar", {
        closeMenu: $options.closeMenu,
        openMenu: $options.openMenu
      }, void 0, true)
    ], 6),
    createElementVNode("div", {
      style: normalizeStyle({ marginLeft: $props.sidebarWidth + "px" }),
      class: "main-content"
    }, [
      renderSlot(_ctx.$slots, "content", {
        closeMenu: $options.closeMenu,
        openMenu: $options.openMenu
      }, void 0, true)
    ], 4)
  ], 64);
}
var BraveSidebarLayout = /* @__PURE__ */ _export_sfc$1(_sfc_main$l$1, [["render", _sfc_render$k], ["__scopeId", "data-v-55cb1eec"]]);
const _sfc_main$k$1 = {
  props: {
    autoPlay: {
      type: Boolean,
      default: true
    },
    autoPlayInterval: {
      type: Number,
      default: 5e3
    }
  },
  unmounted() {
    this.stopAutoPlay();
  },
  name: "BraveSlider",
  data() {
    return {
      currentSlide: 0,
      totalSlides: 0,
      isHovered: false
    };
  },
  created() {
  },
  mounted() {
    this.totalSlides = this.$refs.slider.children.length;
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  },
  methods: {
    stopAutoPlay() {
      clearInterval(this.autoPlayIntervalId);
    },
    startAutoPlay() {
      if (this.autoPlay) {
        this.autoPlayIntervalId = setInterval(() => {
          if (!this.isHovered) {
            this.nextSlide();
          }
        }, this.autoPlayInterval);
      }
    },
    nextSlide() {
      const slider_element = this.$refs.slider;
      if (this.currentSlide < slider_element.children.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
      this.scrollToSlide(this.currentSlide);
    },
    prevSlide() {
      const slider_element = this.$refs.slider;
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = slider_element.children.length - 1;
      }
      this.scrollToSlide(this.currentSlide);
    },
    scrollToSlide(slideIndex) {
      this.currentSlide = slideIndex;
      const slider_element = this.$refs.slider;
      const el = slider_element.children[parseInt(slideIndex)];
      if (el) {
        slider_element.scrollTo({
          left: el.offsetLeft,
          behavior: "smooth"
        });
      }
    }
  }
};
const _hoisted_1$c = {
  ref: "slider",
  class: "slider"
};
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    onMouseenter: _cache[0] || (_cache[0] = ($event) => $data.isHovered = true),
    onMouseleave: _cache[1] || (_cache[1] = ($event) => $data.isHovered = false)
  }, [
    createElementVNode("div", _hoisted_1$c, [
      renderSlot(_ctx.$slots, "slides", { currentSlide: $data.currentSlide })
    ], 512),
    renderSlot(_ctx.$slots, "controls", {
      currentSlide: $data.currentSlide,
      nextSlide: $options.nextSlide,
      totalSlides: $data.totalSlides,
      prevSlide: $options.prevSlide,
      scrollToSlide: $options.scrollToSlide
    })
  ], 32);
}
var BraveSlider$2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$k$1, [["render", _sfc_render$j]]);
var prism = { exports: {} };
(function(module) {
  var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var Prism2 = function(_self2) {
    var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
    var uniqueId = 0;
    var plainTextGrammar = {};
    var _ = {
      manual: _self2.Prism && _self2.Prism.manual,
      disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
      util: {
        encode: function encode(tokens) {
          if (tokens instanceof Token) {
            return new Token(tokens.type, encode(tokens.content), tokens.alias);
          } else if (Array.isArray(tokens)) {
            return tokens.map(encode);
          } else {
            return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          }
        },
        type: function(o) {
          return Object.prototype.toString.call(o).slice(8, -1);
        },
        objId: function(obj) {
          if (!obj["__id"]) {
            Object.defineProperty(obj, "__id", { value: ++uniqueId });
          }
          return obj["__id"];
        },
        clone: function deepClone(o, visited) {
          visited = visited || {};
          var clone;
          var id;
          switch (_.util.type(o)) {
            case "Object":
              id = _.util.objId(o);
              if (visited[id]) {
                return visited[id];
              }
              clone = {};
              visited[id] = clone;
              for (var key in o) {
                if (o.hasOwnProperty(key)) {
                  clone[key] = deepClone(o[key], visited);
                }
              }
              return clone;
            case "Array":
              id = _.util.objId(o);
              if (visited[id]) {
                return visited[id];
              }
              clone = [];
              visited[id] = clone;
              o.forEach(function(v, i) {
                clone[i] = deepClone(v, visited);
              });
              return clone;
            default:
              return o;
          }
        },
        getLanguage: function(element) {
          while (element) {
            var m2 = lang.exec(element.className);
            if (m2) {
              return m2[1].toLowerCase();
            }
            element = element.parentElement;
          }
          return "none";
        },
        setLanguage: function(element, language) {
          element.className = element.className.replace(RegExp(lang, "gi"), "");
          element.classList.add("language-" + language);
        },
        currentScript: function() {
          if (typeof document === "undefined") {
            return null;
          }
          if ("currentScript" in document && 1 < 2) {
            return document.currentScript;
          }
          try {
            throw new Error();
          } catch (err) {
            var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
            if (src) {
              var scripts = document.getElementsByTagName("script");
              for (var i in scripts) {
                if (scripts[i].src == src) {
                  return scripts[i];
                }
              }
            }
            return null;
          }
        },
        isActive: function(element, className, defaultActivation) {
          var no = "no-" + className;
          while (element) {
            var classList = element.classList;
            if (classList.contains(className)) {
              return true;
            }
            if (classList.contains(no)) {
              return false;
            }
            element = element.parentElement;
          }
          return !!defaultActivation;
        }
      },
      languages: {
        plain: plainTextGrammar,
        plaintext: plainTextGrammar,
        text: plainTextGrammar,
        txt: plainTextGrammar,
        extend: function(id, redef) {
          var lang2 = _.util.clone(_.languages[id]);
          for (var key in redef) {
            lang2[key] = redef[key];
          }
          return lang2;
        },
        insertBefore: function(inside, before, insert, root) {
          root = root || _.languages;
          var grammar = root[inside];
          var ret = {};
          for (var token in grammar) {
            if (grammar.hasOwnProperty(token)) {
              if (token == before) {
                for (var newToken in insert) {
                  if (insert.hasOwnProperty(newToken)) {
                    ret[newToken] = insert[newToken];
                  }
                }
              }
              if (!insert.hasOwnProperty(token)) {
                ret[token] = grammar[token];
              }
            }
          }
          var old = root[inside];
          root[inside] = ret;
          _.languages.DFS(_.languages, function(key, value) {
            if (value === old && key != inside) {
              this[key] = ret;
            }
          });
          return ret;
        },
        DFS: function DFS(o, callback, type, visited) {
          visited = visited || {};
          var objId = _.util.objId;
          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              callback.call(o, i, o[i], type || i);
              var property = o[i];
              var propertyType = _.util.type(property);
              if (propertyType === "Object" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, null, visited);
              } else if (propertyType === "Array" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, i, visited);
              }
            }
          }
        }
      },
      plugins: {},
      highlightAll: function(async, callback) {
        _.highlightAllUnder(document, async, callback);
      },
      highlightAllUnder: function(container, async, callback) {
        var env = {
          callback,
          container,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        _.hooks.run("before-highlightall", env);
        env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
        _.hooks.run("before-all-elements-highlight", env);
        for (var i = 0, element; element = env.elements[i++]; ) {
          _.highlightElement(element, async === true, env.callback);
        }
      },
      highlightElement: function(element, async, callback) {
        var language = _.util.getLanguage(element);
        var grammar = _.languages[language];
        _.util.setLanguage(element, language);
        var parent = element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre") {
          _.util.setLanguage(parent, language);
        }
        var code = element.textContent;
        var env = {
          element,
          language,
          grammar,
          code
        };
        function insertHighlightedCode(highlightedCode) {
          env.highlightedCode = highlightedCode;
          _.hooks.run("before-insert", env);
          env.element.innerHTML = env.highlightedCode;
          _.hooks.run("after-highlight", env);
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
        }
        _.hooks.run("before-sanity-check", env);
        parent = env.element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
          parent.setAttribute("tabindex", "0");
        }
        if (!env.code) {
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
          return;
        }
        _.hooks.run("before-highlight", env);
        if (!env.grammar) {
          insertHighlightedCode(_.util.encode(env.code));
          return;
        }
        if (async && _self2.Worker) {
          var worker = new Worker(_.filename);
          worker.onmessage = function(evt) {
            insertHighlightedCode(evt.data);
          };
          worker.postMessage(JSON.stringify({
            language: env.language,
            code: env.code,
            immediateClose: true
          }));
        } else {
          insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
        }
      },
      highlight: function(text, grammar, language) {
        var env = {
          code: text,
          grammar,
          language
        };
        _.hooks.run("before-tokenize", env);
        if (!env.grammar) {
          throw new Error('The language "' + env.language + '" has no grammar.');
        }
        env.tokens = _.tokenize(env.code, env.grammar);
        _.hooks.run("after-tokenize", env);
        return Token.stringify(_.util.encode(env.tokens), env.language);
      },
      tokenize: function(text, grammar) {
        var rest = grammar.rest;
        if (rest) {
          for (var token in rest) {
            grammar[token] = rest[token];
          }
          delete grammar.rest;
        }
        var tokenList = new LinkedList();
        addAfter(tokenList, tokenList.head, text);
        matchGrammar(text, tokenList, grammar, tokenList.head, 0);
        return toArray(tokenList);
      },
      hooks: {
        all: {},
        add: function(name, callback) {
          var hooks = _.hooks.all;
          hooks[name] = hooks[name] || [];
          hooks[name].push(callback);
        },
        run: function(name, env) {
          var callbacks = _.hooks.all[name];
          if (!callbacks || !callbacks.length) {
            return;
          }
          for (var i = 0, callback; callback = callbacks[i++]; ) {
            callback(env);
          }
        }
      },
      Token
    };
    _self2.Prism = _;
    function Token(type, content, alias, matchedStr) {
      this.type = type;
      this.content = content;
      this.alias = alias;
      this.length = (matchedStr || "").length | 0;
    }
    Token.stringify = function stringify(o, language) {
      if (typeof o == "string") {
        return o;
      }
      if (Array.isArray(o)) {
        var s2 = "";
        o.forEach(function(e) {
          s2 += stringify(e, language);
        });
        return s2;
      }
      var env = {
        type: o.type,
        content: stringify(o.content, language),
        tag: "span",
        classes: ["token", o.type],
        attributes: {},
        language
      };
      var aliases = o.alias;
      if (aliases) {
        if (Array.isArray(aliases)) {
          Array.prototype.push.apply(env.classes, aliases);
        } else {
          env.classes.push(aliases);
        }
      }
      _.hooks.run("wrap", env);
      var attributes = "";
      for (var name in env.attributes) {
        attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
      }
      return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
    };
    function matchPattern(pattern, pos, text, lookbehind) {
      pattern.lastIndex = pos;
      var match = pattern.exec(text);
      if (match && lookbehind && match[1]) {
        var lookbehindLength = match[1].length;
        match.index += lookbehindLength;
        match[0] = match[0].slice(lookbehindLength);
      }
      return match;
    }
    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }
        var patterns = grammar[token];
        patterns = Array.isArray(patterns) ? patterns : [patterns];
        for (var j = 0; j < patterns.length; ++j) {
          if (rematch && rematch.cause == token + "," + j) {
            return;
          }
          var patternObj = patterns[j];
          var inside = patternObj.inside;
          var lookbehind = !!patternObj.lookbehind;
          var greedy = !!patternObj.greedy;
          var alias = patternObj.alias;
          if (greedy && !patternObj.pattern.global) {
            var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
            patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
          }
          var pattern = patternObj.pattern || patternObj;
          for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
            if (rematch && pos >= rematch.reach) {
              break;
            }
            var str = currentNode.value;
            if (tokenList.length > text.length) {
              return;
            }
            if (str instanceof Token) {
              continue;
            }
            var removeCount = 1;
            var match;
            if (greedy) {
              match = matchPattern(pattern, pos, text, lookbehind);
              if (!match || match.index >= text.length) {
                break;
              }
              var from = match.index;
              var to = match.index + match[0].length;
              var p = pos;
              p += currentNode.value.length;
              while (from >= p) {
                currentNode = currentNode.next;
                p += currentNode.value.length;
              }
              p -= currentNode.value.length;
              pos = p;
              if (currentNode.value instanceof Token) {
                continue;
              }
              for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                removeCount++;
                p += k.value.length;
              }
              removeCount--;
              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              match = matchPattern(pattern, 0, str, lookbehind);
              if (!match) {
                continue;
              }
            }
            var from = match.index;
            var matchStr = match[0];
            var before = str.slice(0, from);
            var after = str.slice(from + matchStr.length);
            var reach = pos + str.length;
            if (rematch && reach > rematch.reach) {
              rematch.reach = reach;
            }
            var removeFrom = currentNode.prev;
            if (before) {
              removeFrom = addAfter(tokenList, removeFrom, before);
              pos += before.length;
            }
            removeRange(tokenList, removeFrom, removeCount);
            var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
            currentNode = addAfter(tokenList, removeFrom, wrapped);
            if (after) {
              addAfter(tokenList, currentNode, after);
            }
            if (removeCount > 1) {
              var nestedRematch = {
                cause: token + "," + j,
                reach
              };
              matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
              if (rematch && nestedRematch.reach > rematch.reach) {
                rematch.reach = nestedRematch.reach;
              }
            }
          }
        }
      }
    }
    function LinkedList() {
      var head = { value: null, prev: null, next: null };
      var tail = { value: null, prev: head, next: null };
      head.next = tail;
      this.head = head;
      this.tail = tail;
      this.length = 0;
    }
    function addAfter(list, node, value) {
      var next = node.next;
      var newNode = { value, prev: node, next };
      node.next = newNode;
      next.prev = newNode;
      list.length++;
      return newNode;
    }
    function removeRange(list, node, count2) {
      var next = node.next;
      for (var i = 0; i < count2 && next !== list.tail; i++) {
        next = next.next;
      }
      node.next = next;
      next.prev = node;
      list.length -= i;
    }
    function toArray(list) {
      var array = [];
      var node = list.head.next;
      while (node !== list.tail) {
        array.push(node.value);
        node = node.next;
      }
      return array;
    }
    if (!_self2.document) {
      if (!_self2.addEventListener) {
        return _;
      }
      if (!_.disableWorkerMessageHandler) {
        _self2.addEventListener("message", function(evt) {
          var message = JSON.parse(evt.data);
          var lang2 = message.language;
          var code = message.code;
          var immediateClose = message.immediateClose;
          _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
          if (immediateClose) {
            _self2.close();
          }
        }, false);
      }
      return _;
    }
    var script = _.util.currentScript();
    if (script) {
      _.filename = script.src;
      if (script.hasAttribute("data-manual")) {
        _.manual = true;
      }
    }
    function highlightAutomaticallyCallback() {
      if (!_.manual) {
        _.highlightAll();
      }
    }
    if (!_.manual) {
      var readyState = document.readyState;
      if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
        document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
      } else {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(highlightAutomaticallyCallback);
        } else {
          window.setTimeout(highlightAutomaticallyCallback, 16);
        }
      }
    }
    return _;
  }(_self);
  if (module.exports) {
    module.exports = Prism2;
  }
  if (typeof commonjsGlobal !== "undefined") {
    commonjsGlobal.Prism = Prism2;
  }
  Prism2.languages.markup = {
    "comment": {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: true
    },
    "prolog": {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: true
    },
    "doctype": {
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null
        },
        "string": {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        "punctuation": /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        "name": /[^\s<>'"]+/
      }
    },
    "cdata": {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: true
    },
    "tag": {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        "tag": {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            "punctuation": /^<\/?/,
            "namespace": /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            "punctuation": [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              /"|'/
            ]
          }
        },
        "punctuation": /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            "namespace": /^[^\s>\/:]+:/
          }
        }
      }
    },
    "entity": [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  };
  Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
  Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
  Prism2.hooks.add("wrap", function(env) {
    if (env.type === "entity") {
      env.attributes["title"] = env.content.replace(/&amp;/, "&");
    }
  });
  Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {};
      includedCdataInside["language-" + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism2.languages[lang]
      };
      includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
      var inside = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      };
      inside["language-" + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism2.languages[lang]
      };
      var def = {};
      def[tagName] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return tagName;
        }), "i"),
        lookbehind: true,
        greedy: true,
        inside
      };
      Prism2.languages.insertBefore("markup", "cdata", def);
    }
  });
  Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", {
    value: function(attrName, lang) {
      Prism2.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
        lookbehind: true,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              "value": {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: true,
                alias: [lang, "language-" + lang],
                inside: Prism2.languages[lang]
              },
              "punctuation": [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  });
  Prism2.languages.html = Prism2.languages.markup;
  Prism2.languages.mathml = Prism2.languages.markup;
  Prism2.languages.svg = Prism2.languages.markup;
  Prism2.languages.xml = Prism2.languages.extend("markup", {});
  Prism2.languages.ssml = Prism2.languages.xml;
  Prism2.languages.atom = Prism2.languages.xml;
  Prism2.languages.rss = Prism2.languages.xml;
  (function(Prism3) {
    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    Prism3.languages.css = {
      "comment": /\/\*[\s\S]*?\*\//,
      "atrule": {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          "rule": /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: true,
            alias: "selector"
          },
          "keyword": {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          }
        }
      },
      "url": {
        pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: true,
        inside: {
          "function": /^url/i,
          "punctuation": /^\(|\)$/,
          "string": {
            pattern: RegExp("^" + string.source + "$"),
            alias: "url"
          }
        }
      },
      "selector": {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
        lookbehind: true
      },
      "string": {
        pattern: string,
        greedy: true
      },
      "property": {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: true
      },
      "important": /!important\b/i,
      "function": {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: true
      },
      "punctuation": /[(){};:,]/
    };
    Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
    var markup = Prism3.languages.markup;
    if (markup) {
      markup.tag.addInlined("style", "css");
      markup.tag.addAttribute("style", "css");
    }
  })(Prism2);
  Prism2.languages.clike = {
    "comment": [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    "string": {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        "punctuation": /[.\\]/
      }
    },
    "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    "boolean": /\b(?:false|true)\b/,
    "function": /\b\w+(?=\()/,
    "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    "punctuation": /[{}[\];(),.:]/
  };
  Prism2.languages.javascript = Prism2.languages.extend("clike", {
    "class-name": [
      Prism2.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: true
      }
    ],
    "keyword": [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: true
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }
    ],
    "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    "number": {
      pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
      lookbehind: true
    },
    "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });
  Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
  Prism2.languages.insertBefore("javascript", "keyword", {
    "regex": {
      pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: "language-regex",
          inside: Prism2.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    "parameter": [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      }
    ],
    "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });
  Prism2.languages.insertBefore("javascript", "string", {
    "hashbang": {
      pattern: /^#!.*/,
      greedy: true,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "interpolation": {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: true,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: Prism2.languages.javascript
          }
        },
        "string": /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: true,
      greedy: true,
      alias: "property"
    }
  });
  Prism2.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: true,
      alias: "property"
    }
  });
  if (Prism2.languages.markup) {
    Prism2.languages.markup.tag.addInlined("script", "javascript");
    Prism2.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
  }
  Prism2.languages.js = Prism2.languages.javascript;
  (function() {
    if (typeof Prism2 === "undefined" || typeof document === "undefined") {
      return;
    }
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    var LOADING_MESSAGE = "Loading\u2026";
    var FAILURE_MESSAGE = function(status, message) {
      return "\u2716 Error " + status + " while fetching file: " + message;
    };
    var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
    var EXTENSIONS = {
      "js": "javascript",
      "py": "python",
      "rb": "ruby",
      "ps1": "powershell",
      "psm1": "powershell",
      "sh": "bash",
      "bat": "batch",
      "h": "c",
      "tex": "latex"
    };
    var STATUS_ATTR = "data-src-status";
    var STATUS_LOADING = "loading";
    var STATUS_LOADED = "loaded";
    var STATUS_FAILED = "failed";
    var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
    function loadFile(src, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", src, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status < 400 && xhr.responseText) {
            success(xhr.responseText);
          } else {
            if (xhr.status >= 400) {
              error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
            } else {
              error(FAILURE_EMPTY_MESSAGE);
            }
          }
        }
      };
      xhr.send(null);
    }
    function parseRange(range) {
      var m2 = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
      if (m2) {
        var start = Number(m2[1]);
        var comma = m2[2];
        var end = m2[3];
        if (!comma) {
          return [start, start];
        }
        if (!end) {
          return [start, void 0];
        }
        return [start, Number(end)];
      }
      return void 0;
    }
    Prism2.hooks.add("before-highlightall", function(env) {
      env.selector += ", " + SELECTOR;
    });
    Prism2.hooks.add("before-sanity-check", function(env) {
      var pre = env.element;
      if (pre.matches(SELECTOR)) {
        env.code = "";
        pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
        var code = pre.appendChild(document.createElement("CODE"));
        code.textContent = LOADING_MESSAGE;
        var src = pre.getAttribute("data-src");
        var language = env.language;
        if (language === "none") {
          var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
          language = EXTENSIONS[extension] || extension;
        }
        Prism2.util.setLanguage(code, language);
        Prism2.util.setLanguage(pre, language);
        var autoloader = Prism2.plugins.autoloader;
        if (autoloader) {
          autoloader.loadLanguages(language);
        }
        loadFile(src, function(text) {
          pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
          var range = parseRange(pre.getAttribute("data-range"));
          if (range) {
            var lines = text.split(/\r\n?|\n/g);
            var start = range[0];
            var end = range[1] == null ? lines.length : range[1];
            if (start < 0) {
              start += lines.length;
            }
            start = Math.max(0, Math.min(start - 1, lines.length));
            if (end < 0) {
              end += lines.length;
            }
            end = Math.max(0, Math.min(end, lines.length));
            text = lines.slice(start, end).join("\n");
            if (!pre.hasAttribute("data-start")) {
              pre.setAttribute("data-start", String(start + 1));
            }
          }
          code.textContent = text;
          Prism2.highlightElement(code);
        }, function(error) {
          pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
          code.textContent = error;
        });
      }
    });
    Prism2.plugins.fileHighlight = {
      highlight: function highlight(container) {
        var elements = (container || document).querySelectorAll(SELECTOR);
        for (var i = 0, element; element = elements[i++]; ) {
          Prism2.highlightElement(element);
        }
      }
    };
    var logged = false;
    Prism2.fileHighlight = function() {
      if (!logged) {
        console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
        logged = true;
      }
      Prism2.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  })();
})(prism);
const _sfc_main$j$1 = {
  props: {
    language: {
      type: String,
      default: "html"
    },
    copyText: {
      type: String,
      default: "Copy"
    },
    copiedText: {
      type: String,
      default: "Copied to clipboard \u{1F44D}"
    }
  },
  data() {
    return {
      highlightedHTML: "",
      code: "",
      currentCopyText: this.copyText
    };
  },
  mounted() {
    const defaultSlot = this.$slots && this.$slots.default && this.$slots.default() || [];
    const code = defaultSlot && defaultSlot.length ? defaultSlot[0].children : "";
    this.code = code;
    this.highlightedHTML = Prism.highlight(code, Prism.languages[this.language]);
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.code);
      this.currentCopyText = this.copiedText;
      setTimeout(() => {
        this.currentCopyText = this.copyText;
      }, 1e3);
    }
  }
};
const _hoisted_1$b = ["innerHTML"];
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "header", {
      copyToClipboard: $options.copyToClipboard,
      copyText: $data.currentCopyText
    }),
    createElementVNode("pre", {
      style: { "margin": "0px !important" },
      class: normalizeClass(_ctx.$attrs.prisimClassName + " language-" + $props.language),
      innerHTML: $data.highlightedHTML
    }, null, 10, _hoisted_1$b),
    renderSlot(_ctx.$slots, "footer", { copyToClipboard: $options.copyToClipboard })
  ]);
}
var BraveSyntaxHighlighter$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$j$1, [["render", _sfc_render$i]]);
const _sfc_main$i$1 = {
  inheritAttrs: true,
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Number,
      default: 10
    },
    max: {
      type: Number,
      default: null
    },
    min: {
      type: Number,
      default: null
    },
    largeStep: {
      type: Number,
      default: 5
    }
  },
  name: "BraveNumberInput",
  methods: {
    setNumberToMax() {
      if (this.min != null) {
        this.modelValue = this.max;
        this.$emit("update:modelValue", this.modelValue);
      }
    },
    setNumberToMin() {
      if (this.min != null) {
        console.log("setNumberToMin");
        this.modelValue = this.min + 12;
        this.$emit("update:modelValue", this.modelValue);
      }
    },
    validateNumber(newNumber) {
      if (this.min != null && newNumber > this.max) {
        return false;
      }
      if (this.min != null && newNumber < this.min) {
        return false;
      }
      return true;
    },
    onValueChange(e) {
      console.log("onValueChange");
      this.modelValue;
      if (this.validateNumber(e.target.value)) {
        this.$emit("update:modelValue", parseInt(e.target.value));
      } else {
        e.target.value = this.modelValue;
      }
    },
    increaseNumber() {
      if (this.validateNumber(this.modelValue + 1)) {
        this.$emit("update:modelValue", this.modelValue + 1);
      }
    },
    decreaseNumber() {
      if (this.validateNumber(this.modelValue - 1)) {
        this.$emit("update:modelValue", this.modelValue - 1);
      }
    },
    increaseNumberLarge() {
      if (this.validateNumber(this.modelValue + this.largeStep)) {
        this.$emit("update:modelValue", this.modelValue + this.largeStep);
      }
    },
    decreaseNumberLarge() {
      if (this.validateNumber(this.modelValue - this.largeStep)) {
        this.$emit("update:modelValue", this.modelValue - this.largeStep);
      }
    }
  }
};
const _hoisted_1$a = { class: "" };
const _hoisted_2$7 = ["value", "aria-valuenow", "aria-valuemin", "aria-invalid", "aria-valuemax-"];
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$a, [
    renderSlot(_ctx.$slots, "minus-button", { decreaseNumber: $options.decreaseNumber }, () => [
      createElementVNode("button", {
        tabindex: "-1",
        onClick: _cache[0] || (_cache[0] = ($event) => $options.decreaseNumber())
      }, "-")
    ]),
    renderSlot(_ctx.$slots, "input", {}, () => [
      createElementVNode("input", {
        class: normalizeClass(_ctx.$attrs.inputClass ? _ctx.$attrs.inputClass : ""),
        role: "spinbutton",
        tabindex: "0",
        value: $props.modelValue,
        "aria-valuenow": $props.modelValue,
        "aria-valuemin": $props.min ? $props.min : "",
        "aria-invalid": $options.validateNumber($props.modelValue) ? "false" : "true",
        "aria-valuemax-": $props.max ? $props.max : "",
        onChange: _cache[1] || (_cache[1] = ($event) => $options.onValueChange($event)),
        onKeydown: [
          _cache[2] || (_cache[2] = withKeys(($event) => $options.increaseNumber(), ["up"])),
          _cache[3] || (_cache[3] = withKeys(($event) => $options.decreaseNumber(), ["down"])),
          _cache[4] || (_cache[4] = withKeys(($event) => $options.setNumberToMin(), ["home"])),
          _cache[5] || (_cache[5] = withKeys(($event) => $options.setNumberToMax(), ["end"])),
          _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => $options.decreaseNumberLarge(), ["stop", "prevent"]), ["page-down"])),
          _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => $options.increaseNumberLarge(), ["stop", "prevent"]), ["page-up"]))
        ],
        type: "text"
      }, null, 42, _hoisted_2$7)
    ]),
    renderSlot(_ctx.$slots, "plus-button", { increaseNumber: $options.increaseNumber }, () => [
      createElementVNode("button", {
        tabindex: "-1",
        onClick: _cache[8] || (_cache[8] = ($event) => $options.increaseNumber())
      }, "+")
    ])
  ]);
}
var BraveNumberInput = /* @__PURE__ */ _export_sfc$1(_sfc_main$i$1, [["render", _sfc_render$h]]);
var dragFunctionality = {
  emits: ["placement-change", "position-change"],
  inheritAttrs: false,
  computed: {
    computedPosition() {
      if (this.dragged == true) {
        var position = this.tempPosition;
      } else if (this.resizerFlag == true) {
        var position = this.resizePosition;
      } else {
        let position2 = JSON.parse(JSON.stringify(this.cPosition));
        if (position2.transform == void 0 || position2.transform == "unset") {
          position2.transform = "";
        }
        return position2;
      }
      this.horizontalCenter = false;
      this.verticalCenter = false;
      if (this.$refs.rootElement.offsetParent == null) {
        var centerX = document.body.clientWidth / 2;
        var centerY = window.innerHeight / 2;
      } else {
        var centerX = this.$refs.rootElement.offsetParent.offsetWidth / 2;
        var centerY = this.$refs.rootElement.offsetParent.offsetHeight / 2;
      }
      if (this.autoDocking) {
        if (this.$refs.rootElement != void 0) {
          var halfWidth = this.$refs.rootElement.offsetWidth / 2;
          var halfHeight = this.$refs.rootElement.offsetHeight / 2;
          var currentLeft = parseInt(position.left) + halfWidth;
          var currentTop = parseInt(position.top) + halfHeight;
          if (currentLeft > centerX - this.snappingDistance && currentLeft < centerX + this.snappingDistance) {
            this.horizontalCenter = true;
          }
          if (currentTop > centerY - this.snappingDistance && currentTop < centerY + this.snappingDistance) {
            this.verticalCenter = true;
          }
        }
        if (this.horizontalCenter == true) {
          position.left = centerX - halfWidth + "px";
          position.transform = "unset";
        }
        if (this.verticalCenter == true) {
          position.top = centerY - halfHeight + "px";
          position.transform = "unset";
        }
      }
      if (this.dragged == true) {
        position = this.checkBoundsfromBoundingBox(position);
      }
      if (position.transform == void 0 || position.transform == "unset") {
        position.transform = "";
      }
      return position;
    }
  },
  data() {
    return {
      showSnapping: false,
      dragged: false,
      tempPosition: {
        top: "auto",
        left: "auto",
        bottom: "auto",
        right: "auto",
        transform: "unset"
      },
      verticalCenter: false,
      horizontalCenter: false,
      offset: { x: 0, y: 0 },
      lastPosition: {
        x: null,
        y: null
      }
    };
  },
  methods: {
    checkBounds(position) {
      if (parseInt(position.left) < this.bounds.left) {
        position.left = this.bounds.left + "px";
      }
      if (document.body.clientWidth - (parseInt(position.left) + this.$refs.rootElement.offsetWidth) < this.bounds.right) {
        position.left = document.body.clientWidth - this.bounds.right - this.$refs.rootElement.offsetWidth + "px";
      }
      if (parseInt(position.top) < this.bounds.top) {
        position.top = this.bounds.top + "px";
      }
      if (window.innerHeight - (parseInt(position.top) + this.$refs.rootElement.offsetHeight) < this.bounds.bottom) {
        position.top = window.innerHeight - this.bounds.bottom - this.$refs.rootElement.offsetHeight + "px";
      }
      return position;
    },
    checkBoundsfromBoundingBox(position) {
      var boundingBox = this.$refs.rootElement.getBoundingClientRect();
      if (parseInt(boundingBox.left) < this.bounds.left) {
        position.left = parseInt(position.left) + (this.bounds.left - parseInt(boundingBox.left)) + "px";
      }
      if (document.body.clientWidth - (parseInt(boundingBox.left) + boundingBox.width) < this.bounds.right) {
        position.left = parseInt(position.left) - (this.bounds.right - (document.body.clientWidth - parseInt(boundingBox.left) - boundingBox.width)) + "px";
      }
      if (parseInt(boundingBox.top) < this.bounds.top) {
        position.top = parseInt(position.top) + (this.bounds.top - parseInt(boundingBox.top)) + "px";
      }
      if (window.innerHeight - (parseInt(boundingBox.top) + boundingBox.height) < this.bounds.bottom) {
        position.top = parseInt(position.top) - (this.bounds.bottom - (window.innerHeight - parseInt(boundingBox.top) - boundingBox.height)) + "px";
      }
      return position;
    },
    getQuadrant() {
      let boundingBox = this.$refs.rootElement.getBoundingClientRect();
      let centerX = boundingBox.left + this.$refs.rootElement.offsetWidth / 2;
      let centerY = boundingBox.top + this.$refs.rootElement.offsetHeight / 2;
      if (this.$refs.rootElement.offsetParent == null) {
        var screenBounds = {
          width: document.body.clientWidth,
          height: window.innerHeight,
          top: 0,
          left: 0
        };
      } else {
        var screenBounds = {
          width: this.$refs.rootElement.offsetParent.offsetWidth,
          height: this.$refs.rootElement.offsetParent.offsetHeight,
          top: 0,
          left: 0
        };
      }
      let screenCenterX = screenBounds.width / 2;
      let screenCenterY = screenBounds.height / 2;
      if (centerY > screenCenterY - this.snappingDistance && centerY < screenCenterY + this.snappingDistance && centerX > screenCenterX - this.snappingDistance && centerX < screenCenterX + this.snappingDistance) {
        return "center";
      }
      if (centerX > screenCenterX - this.snappingDistance && centerX < screenCenterX + this.snappingDistance) {
        if (centerY < screenBounds.top + screenBounds.height / 2) {
          return "top-center";
        } else {
          return "bottom-center";
        }
      }
      if (centerY > screenCenterY - this.snappingDistance && centerY < screenCenterY + this.snappingDistance) {
        if (centerX < screenBounds.left + screenBounds.width / 2) {
          return "left-center";
        } else {
          return "right-center";
        }
      }
      if (centerX < screenBounds.left + screenBounds.width / 2) {
        if (centerY < screenBounds.top + screenBounds.height / 2) {
          return "top-left";
        } else {
          return "bottom-left";
        }
      } else {
        if (centerY < screenBounds.top + screenBounds.height / 2) {
          return "top-right";
        } else {
          return "bottom-right";
        }
      }
    },
    onHandleMouseDown(e) {
      if (e.type == "touchstart") {
        var event = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      } else {
        e.preventDefault();
        e.stopPropagation();
        var event = {
          x: e.clientX,
          y: e.clientY
        };
      }
      this.offset = {
        left: event.x - this.$refs.rootElement.getBoundingClientRect().left,
        top: event.y - this.$refs.rootElement.getBoundingClientRect().top,
        bottom: event.y - this.$refs.rootElement.getBoundingClientRect().bottom,
        right: event.x - this.$refs.rootElement.getBoundingClientRect().right
      };
      this.$refs.rootElement.getBoundingClientRect();
      this.$refs.rootElement.clientHeight;
      if (this.cPlacement == "center" || this.cPlacement == "top-center" || this.cPlacement == "bottom-center") {
        this.tempPosition.left = this.$refs.rootElement.offsetLeft - this.$refs.rootElement.offsetWidth / 2 + "px";
      } else {
        this.tempPosition.left = this.$refs.rootElement.offsetLeft + "px";
      }
      if (this.cPlacement == "center" || this.cPlacement == "left-center" || this.cPlacement == "right-center") {
        this.tempPosition.top = this.$refs.rootElement.offsetTop - this.$refs.rootElement.offsetHeight / 2 + "px";
      } else {
        this.tempPosition.top = this.$refs.rootElement.offsetTop + "px";
      }
      this.showSnapping = true, this.dragged = true;
      if (this.cPlacement == "top-right") {
        this.offset.x = document.body.clientWidth - this.$refs.rootElement.getBoundingClientRect().right - event.x;
        this.offset.y = event.y - this.$refs.rootElement.getBoundingClientRect().top;
      }
      if (this.cPlacement == "bottom-left") {
        this.offset.x = event.x - this.$refs.rootElement.getBoundingClientRect().left;
        this.offset.y = window.innerHeight - this.$refs.rootElement.getBoundingClientRect().bottom - event.y;
      }
      if (this.cPlacement == "bottom-right") {
        this.offset.x = document.body.clientWidth - this.$refs.rootElement.getBoundingClientRect().right - event.x;
        this.offset.y = window.innerHeight - this.$refs.rootElement.getBoundingClientRect().bottom - event.y;
      }
      this.lastPosition.x = event.x;
      this.lastPosition.y = event.y;
      window.addEventListener("mouseup", this.mouseUp);
      window.addEventListener("mousemove", this.mouseMove);
    },
    mouseUp(e) {
      if (e.eventType == "mouseup") {
        e.preventDefault();
        e.stopPropagation();
      }
      this.showSnapping = false, this.dragged = false;
      window.removeEventListener("mousemove", this.mouseMove);
      window.removeEventListener("mouseup", this.mouseUp);
      if (this.automaticDocking == true) {
        this.cPlacement = this.getQuadrant();
      }
      this.cPosition = this.dockingBasedonPlacement(this.cPlacement);
      this.$emit("placement-change", this.cPlacement);
      this.$emit("position-change", this.cPosition);
    },
    onHandleTouchMove(e) {
      this.tempPosition.left = e.touches[0].clientX - this.offset.left + "px";
      this.tempPosition.top = e.touches[0].clientY - this.offset.top + "px";
    },
    onHandleTouchEnd(e) {
      this.mouseUp(e);
    },
    mouseMove(e) {
      e.preventDefault();
      var difference = {
        x: e.clientX - this.lastPosition.x,
        y: e.clientY - this.lastPosition.y
      };
      this.tempPosition.left = parseInt(this.tempPosition.left) + difference.x + "px";
      this.tempPosition.top = parseInt(this.tempPosition.top) + difference.y + "px";
      this.lastPosition.x = e.clientX;
      this.lastPosition.y = e.clientY;
    },
    dockingBasedonPlacement(placement) {
      if (this.$refs.rootElement.offsetParent == null) {
        var screenBounds = {
          width: document.body.clientWidth,
          height: window.innerHeight,
          top: 0,
          left: 0
        };
      } else {
        var screenBounds = {
          width: this.$refs.rootElement.offsetParent.offsetWidth,
          height: this.$refs.rootElement.offsetParent.offsetHeight,
          top: 0,
          left: 0
        };
      }
      var boundingBox = {
        top: this.$refs.rootElement.offsetTop,
        left: this.$refs.rootElement.offsetLeft,
        bottom: this.$refs.rootElement.offsetTop + this.$refs.rootElement.clientHeight,
        right: this.$refs.rootElement.offsetLeft + this.$refs.rootElement.clientWidth
      };
      let position = {
        top: "auto",
        left: "auto",
        bottom: "auto",
        right: "auto"
      };
      if (placement == "center") {
        position.top = "50%";
        position.left = "50%";
        position.transform = "translate(-50%, -50%)";
      }
      if (placement == "top-left") {
        position.top = boundingBox.top + "px";
        position.left = boundingBox.left + "px";
      } else if (this.cPlacement == "top-center") {
        position.top = boundingBox.top + "px";
        position.left = "50%";
        position.transform = " translateX(-50%)";
      } else if (this.cPlacement == "top-right") {
        position.top = boundingBox.top + "px";
        position.right = screenBounds.width - boundingBox.right + "px";
      } else if (this.cPlacement == "right-center") {
        position.right = screenBounds.width - boundingBox.right + "px";
        position.top = "50%";
        position.transform = " translateY(-50%)";
      } else if (this.cPlacement == "bottom-right") {
        position.bottom = screenBounds.height - boundingBox.bottom + "px";
        position.right = screenBounds.width - boundingBox.right + "px";
      } else if (this.cPlacement == "bottom-center") {
        position.bottom = screenBounds.height - boundingBox.bottom + "px";
        position.left = "50%";
        position.transform = " translateX(-50%)";
      } else if (this.cPlacement == "bottom-left") {
        position.bottom = screenBounds.height - boundingBox.bottom + "px";
        position.left = boundingBox.left + "px";
      } else if (this.cPlacement == "left-center") {
        position.left = boundingBox.left + "px";
        position.top = "50%";
        position.transform = " translateY(-50%)";
      }
      return position;
    }
  }
};
var braveRotatable = {
  data() {
    return {
      angle: 0,
      center: {
        top: 0,
        left: 0
      }
    };
  },
  methods: {
    selectElement(e) {
      this.cSelected = !this.cSelected;
      this.$emit("selected", true);
    },
    toggleSelected() {
      console.log("toggleSelected", this.cSelected);
      this.cSelected = !this.cSelected;
    },
    RoMousedown: function(e) {
      e.stopPropagation();
      e.preventDefault();
      let rect = this.$refs.rootElement.getBoundingClientRect();
      this.center.left = rect.left + rect.width / 2;
      this.center.top = rect.top + rect.height / 2;
      window.addEventListener("mousemove", this.RoMouseMove);
      window.addEventListener("mouseup", this.RomouseUp);
    },
    RoMouseMove(e) {
      e.stopPropagation();
      e.preventDefault();
      var pos = {
        x: e.clientX,
        y: e.clientY
      };
      var CenterInXY = {
        x: this.center.left,
        y: this.center.top
      };
      this.angle = Math.round(this.calAngle(CenterInXY, pos));
    },
    RomouseUp() {
      window.removeEventListener("mousemove", this.RoMouseMove);
      window.removeEventListener("mouseup", this.RomouseUp);
    },
    calAngle(center, eventPoint) {
      var cx = center.x;
      var cy = center.y;
      var ex = eventPoint.x;
      var ey = eventPoint.y;
      var dy = ey - cy;
      var dx = ex - cx;
      var theta = Math.atan2(dy, dx);
      theta *= 180 / Math.PI;
      return theta;
    }
  }
};
var drag_resizable = {
  data() {
    return {
      resizerFlag: false,
      resizePosition: {
        top: "auto",
        left: "auto",
        right: "auto",
        bottom: "auto"
      },
      topLeftHandleBoundingClientRect: null,
      bottomRightHandleBoundingClientRect: null,
      topRightHandleBoundingClientRect: null,
      bottomLeftHandleBoundingClientRect: null
    };
  },
  methods: {
    rightBottomResizerMouseDown(e) {
      console.log("Right Bottom Resizer Mouse Down");
      this.resizerFlag = true;
      this.resizePosition.top = this.$refs.rootElement.offsetTop + "px";
      this.resizePosition.left = this.$refs.rootElement.offsetLeft + "px";
      if (e.type == "touchstart") {
        e = e.touches[0];
      }
      if (e.type == "mousedown") {
        e.stopPropagation();
        e.preventDefault();
        window.addEventListener("mousemove", this.rightBottomResizerMouseMove);
        window.addEventListener("mouseup", this.rightBottomResizerMouseUp);
      }
      this.topLeftHandleBoundingClientRect = this.$refs.topLeftHandle.getBoundingClientRect();
    },
    rightBottomResizerMouseMove(e) {
      if (e.type == "mousemove") {
        e.stopPropagation();
        e.preventDefault();
      }
      if (e.type == "touchmove") {
        e = e.touches[0];
      }
      if (this.resizerFlag) {
        console.log("Right Bottom Resizer Mouse Move");
        var pos = {
          x: e.clientX,
          y: e.clientY
        };
        var aspectRatio = this.$refs.rootElement.offsetWidth / this.$refs.rootElement.offsetHeight;
        var positionOfHandle = this.topLeftHandleBoundingClientRect;
        var diagnoalDistance = this.distanceBetweenTwoPoints({ x: positionOfHandle.left, y: positionOfHandle.top }, pos);
        var widthHeight = this.getHWFromDiagonalAndRatio(diagnoalDistance, aspectRatio);
        this.$refs.rootElement.style.width = widthHeight.width + "px";
        this.$refs.rootElement.style.height = widthHeight.height + "px";
        this.$emit("update:width", widthHeight.width + "px");
        this.$emit("update:height", widthHeight.height + "px");
        var Diff = this.calculateRightShift();
        this.resizePosition.top = parseInt(this.$refs.rootElement.style.top) + Diff.y + "px";
        this.resizePosition.left = parseInt(this.$refs.rootElement.style.left) + Diff.x + "px";
      }
    },
    rightBottomResizerMouseUp(e) {
      if (e.type == "mouseup") {
        e.stopPropagation();
        e.preventDefault();
      }
      if (e.type == "touchend") {
        e = e.touches[0];
      }
      this.resizerFlag = false;
      window.removeEventListener("mousemove", this.rightBottomResizerMouseMove);
      window.removeEventListener("mouseup", this.rightBottomResizerMouseUp);
      if (this.automaticDocking == true) {
        this.cPlacement = this.getQuadrant();
      }
      this.cPosition = this.dockingBasedonPlacement(this.cPlacement);
      this.$emit("placement-change", this.cPlacement);
      this.$emit("position-change", this.cPosition);
    },
    calculateRightShift() {
      var xDiff = this.topLeftHandleBoundingClientRect.left - this.$refs.topLeftHandle.getBoundingClientRect().left;
      var yDiff = this.topLeftHandleBoundingClientRect.top - this.$refs.topLeftHandle.getBoundingClientRect().top;
      return {
        x: xDiff,
        y: yDiff
      };
    },
    leftTopResizerMouseDown(e) {
      this.resizerFlag = true;
      this.resizePosition.top = this.$refs.rootElement.offsetTop + "px";
      this.resizePosition.left = this.$refs.rootElement.offsetLeft + "px";
      if (e.type == "touchstart") {
        e = e.touches[0];
      }
      if (e.type == "mousedown") {
        e.stopPropagation();
        e.preventDefault();
        window.addEventListener("mousemove", this.leftTopResizerMouseMove);
        window.addEventListener("mouseup", this.leftTopResizerMouseUp);
      }
      this.bottomRightHandleBoundingClientRect = this.$refs.bottomRightHandle.getBoundingClientRect();
    },
    leftTopResizerMouseMove(e) {
      if (e.type == "mousemove") {
        e.stopPropagation();
        e.preventDefault();
      }
      if (e.type == "touchmove") {
        e = e.touches[0];
      }
      if (this.resizerFlag) {
        console.log("Right Bottom Resizer Mouse Move");
        var pos = {
          x: e.clientX,
          y: e.clientY
        };
        var aspectRatio = this.$refs.rootElement.offsetWidth / this.$refs.rootElement.offsetHeight;
        var positionOfHandle = this.bottomRightHandleBoundingClientRect;
        var diagnoalDistance = this.distanceBetweenTwoPoints({ x: positionOfHandle.left, y: positionOfHandle.top }, pos);
        var widthHeight = this.getHWFromDiagonalAndRatio(diagnoalDistance, aspectRatio);
        this.$refs.rootElement.style.width = widthHeight.width + "px";
        this.$refs.rootElement.style.height = widthHeight.height + "px";
        this.$emit("update:width", widthHeight.width + "px");
        this.$emit("update:height", widthHeight.height + "px");
        var Diff = this.calculateBottomRightShift();
        this.resizePosition.top = parseInt(this.$refs.rootElement.style.top) + Diff.y + "px";
        this.resizePosition.left = parseInt(this.$refs.rootElement.style.left) + Diff.x + "px";
      }
    },
    leftTopResizerMouseUp(e) {
      if (e.type == "mouseup") {
        e.stopPropagation();
        e.preventDefault();
      }
      if (e.type == "touchend") {
        e = e.touches[0];
      }
      this.resizerFlag = false;
      window.removeEventListener("mousemove", this.leftTopResizerMouseMove);
      window.removeEventListener("mouseup", this.leftTopResizerMouseUp);
      if (this.automaticDocking == true) {
        this.cPlacement = this.getQuadrant();
        this.$emit("placement-change", this.cPlacement);
      }
      this.cPosition = this.dockingBasedonPlacement(this.cPlacement);
      this.$emit("position-change", this.cPosition);
    },
    calculateBottomRightShift() {
      var xDiff = this.bottomRightHandleBoundingClientRect.left - this.$refs.bottomRightHandle.getBoundingClientRect().left;
      var yDiff = this.bottomRightHandleBoundingClientRect.top - this.$refs.bottomRightHandle.getBoundingClientRect().top;
      return {
        x: xDiff,
        y: yDiff
      };
    },
    distanceBetweenTwoPoints(point1, point2) {
      return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    },
    getHWFromDiagonalAndRatio(diagonal, ratio) {
      let height = Math.sqrt(Math.pow(diagonal, 2) / (1 + Math.pow(ratio, 2)));
      let width = height * ratio;
      return { width, height };
    },
    getClosestPoint(a, b, p, segmentClamp = false) {
      let ap = { x: p.x - a.x, y: p.y - a.y }, ab = { x: b.x - a.x, y: b.y - a.y }, ab2 = ab.x * ab.x + ab.y * ab.y, apab = ap.x * ab.x + ap.y * ab.y, t = apab / ab2;
      if (segmentClamp) {
        if (t < 0) {
          t = 0;
        } else if (t > 1) {
          t = 1;
        }
      }
      return { x: a.x + ab.x * t, y: a.y + ab.y * t };
    }
  }
};
var rightTopHandle = {
  methods: {
    rightTopResizerMouseDown(e) {
      console.log(this.resizePosition);
      this.resizePosition.top = this.$refs.rootElement.getBoundingClientRect().top + "px";
      this.resizePosition.left = this.$refs.rootElement.getBoundingClientRect().left + "px";
      console.log(this.resizePosition);
      this.resizerFlag = true;
      if (e.type == "touchstart") {
        e = e.touches[0];
      }
      if (e.type == "mousedown") {
        e.stopPropagation();
        e.preventDefault();
        window.addEventListener("mousemove", this.rightTopResizerMouseMove);
        window.addEventListener("mouseup", this.rightTopResizerMouseUp);
      }
      this.bottomLeftHandleBoundingClientRect = this.$refs.bottomLeftHandle.getBoundingClientRect();
    },
    rightTopResizerMouseMove(e) {
      if (e.type == "mousemove") {
        e.stopPropagation();
        e.preventDefault();
      }
      if (e.type == "touchmove") {
        e = e.touches[0];
      }
      if (this.resizerFlag) {
        console.log("Right Bottom Resizer Mouse Move");
        var pos = {
          x: e.clientX,
          y: e.clientY
        };
        var aspectRatio = this.$refs.rootElement.offsetWidth / this.$refs.rootElement.offsetHeight;
        var positionOfHandle = this.bottomLeftHandleBoundingClientRect;
        var diagnoalDistance = this.distanceBetweenTwoPoints({ x: positionOfHandle.left, y: positionOfHandle.top }, pos);
        var widthHeight = this.getHWFromDiagonalAndRatio(diagnoalDistance, aspectRatio);
        this.$refs.rootElement.style.width = widthHeight.width + "px";
        this.$refs.rootElement.style.height = widthHeight.height + "px";
        this.$emit("update:width", widthHeight.width + "px");
        this.$emit("update:height", widthHeight.height + "px");
        var Diff = this.calculateBottomLeftShift();
        this.resizePosition.top = parseInt(this.$refs.rootElement.style.top) + Diff.y + "px";
        this.resizePosition.left = parseInt(this.$refs.rootElement.style.left) + Diff.x + "px";
      }
    },
    rightTopResizerMouseUp(e) {
      if (e.type == "mouseup") {
        e.stopPropagation();
        e.preventDefault();
      }
      if (e.type == "touchend") {
        e = e.touches[0];
      }
      this.resizerFlag = false;
      window.removeEventListener("mousemove", this.rightTopResizerMouseMove);
      window.removeEventListener("mouseup", this.rightTopResizerMouseUp);
      if (this.automaticDocking == true) {
        this.cPlacement = this.getQuadrant();
        this.$emit("placement-change", this.cPlacement);
      }
      this.cPosition = this.dockingBasedonPlacement(this.cPlacement);
      this.$emit("position-change", this.cPosition);
    },
    calculateBottomLeftShift() {
      var xDiff = this.bottomLeftHandleBoundingClientRect.left - this.$refs.bottomLeftHandle.getBoundingClientRect().left;
      var yDiff = this.bottomLeftHandleBoundingClientRect.top - this.$refs.bottomLeftHandle.getBoundingClientRect().top;
      return {
        x: xDiff,
        y: yDiff
      };
    }
  }
};
var leftBottomHandle = {
  methods: {
    leftBottomResizerMouseDown(e) {
      this.resizerFlag = true;
      this.resizePosition.top = this.$refs.rootElement.offsetTop + "px";
      this.resizePosition.left = this.$refs.rootElement.offsetLeft + "px";
      if (e.type == "touchstart") {
        e = e.touches[0];
      }
      if (e.type == "mousedown") {
        e.stopPropagation();
        e.preventDefault();
        window.addEventListener("mousemove", this.leftBottomResizerMouseMove);
        window.addEventListener("mouseup", this.leftBottomResizerMouseUp);
      }
      this.topRightHandleBoundingClientRect = this.$refs.topRightHandle.getBoundingClientRect();
    },
    leftBottomResizerMouseMove(e) {
      if (e.type == "mousemove") {
        e.stopPropagation();
        e.preventDefault();
      }
      if (e.type == "touchmove") {
        e = e.touches[0];
      }
      if (this.resizerFlag) {
        console.log("Right Bottom Resizer Mouse Move");
        var pos = {
          x: e.clientX,
          y: e.clientY
        };
        var aspectRatio = this.$refs.rootElement.offsetWidth / this.$refs.rootElement.offsetHeight;
        var positionOfHandle = this.topRightHandleBoundingClientRect;
        var diagnoalDistance = this.distanceBetweenTwoPoints({ x: positionOfHandle.left, y: positionOfHandle.top }, pos);
        var widthHeight = this.getHWFromDiagonalAndRatio(diagnoalDistance, aspectRatio);
        this.$refs.rootElement.style.width = widthHeight.width + "px";
        this.$refs.rootElement.style.height = widthHeight.height + "px";
        this.$emit("update:width", widthHeight.width + "px");
        this.$emit("update:height", widthHeight.height + "px");
        var Diff = this.calculateTopRightShift();
        this.resizePosition.top = parseInt(this.$refs.rootElement.style.top) + Diff.y + "px";
        this.resizePosition.left = parseInt(this.$refs.rootElement.style.left) + Diff.x + "px";
      }
    },
    leftBottomResizerMouseUp(e) {
      if (e.type == "mouseup") {
        e.stopPropagation();
        e.preventDefault();
      }
      if (e.type == "touchend") {
        e = e.touches[0];
      }
      this.resizerFlag = false;
      window.removeEventListener("mousemove", this.leftBottomResizerMouseMove);
      window.removeEventListener("mouseup", this.leftBottomResizerMouseUp);
      if (this.automaticDocking == true) {
        this.cPlacement = this.getQuadrant();
        this.$emit("placement-change", this.cPlacement);
      }
      this.cPosition = this.dockingBasedonPlacement(this.cPlacement);
      this.$emit("position-change", this.cPosition);
    },
    calculateTopRightShift() {
      var xDiff = this.topRightHandleBoundingClientRect.left - this.$refs.topRightHandle.getBoundingClientRect().left;
      var yDiff = this.topRightHandleBoundingClientRect.top - this.$refs.topRightHandle.getBoundingClientRect().top;
      return {
        x: xDiff,
        y: yDiff
      };
    }
  }
};
const _sfc_main$h$1 = {
  emits: ["update:width", "update:height", "selected"],
  computed: {
    activeStyle() {
      if (this.cSelected) {
        return this.selectorStyle;
      } else {
        return {};
      }
    }
  },
  name: "BraveDraggable",
  mixins: [dragFunctionality, braveRotatable, drag_resizable, rightTopHandle, leftBottomHandle],
  data() {
    return {
      selectorStyle: {
        outline: "2px solid #8b3dff",
        boxShadow: "0 0 0 1px hsl(0deg 0% 100% / 7%), inset 0 0 0 1px hsl(0deg 0% 100% / 7%)",
        zIndex: 1e4,
        height: "100%",
        cursor: "move"
      },
      cvisible: this.visible,
      cPlacement: this.placement,
      cSelected: this.selected,
      autoDocking: this.automaticDocking,
      cPosition: {
        top: "auto",
        left: "auto",
        bottom: "auto",
        right: "auto"
      }
    };
  },
  watch: {
    automaticDocking: function(val) {
      this.autoDocking = val;
    },
    selected: function(val) {
      this.cSelected = val;
    },
    visible: function(val) {
      this.cvisible = val;
    },
    placement: function(val) {
      this.cPlacement = val;
    },
    position: function(val) {
      this.cPosition = val;
    }
  },
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    layout: {
      type: String,
      default: "fixed"
    },
    rotatable: {
      type: Boolean,
      default: false
    },
    reSizable: {
      type: Boolean,
      default: false
    },
    bounds: {
      type: Object,
      default: {
        top: 20,
        left: 20,
        bottom: 20,
        right: 20
      }
    },
    automaticDocking: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: "auto"
    },
    height: {
      type: String,
      default: "auto"
    },
    placement: {
      type: String,
      default: "top-left"
    },
    position: {
      type: Object,
      default: {
        top: "10px",
        left: "10px",
        bottom: "auto",
        right: "auto",
        transform: "auto"
      }
    },
    snappingDistance: {
      type: Number,
      default: 5
    }
  },
  methods: {
    show() {
      this.cvisible = true;
      this.$emit("show");
    },
    hide() {
      this.cvisible = false;
      this.$emit("hide");
    }
  },
  created() {
    this.cPosition = {
      top: "auto",
      left: "auto",
      bottom: "auto",
      right: "auto",
      transform: "auto"
    };
    if (this.cPlacement == "center") {
      this.cPosition = {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      };
    }
    if (this.cPlacement == "top-left") {
      this.cPosition = {
        top: this.position.top,
        left: this.position.left
      };
    } else if (this.cPlacement == "top-center") {
      this.cPosition = {
        top: this.position.top,
        left: "50%",
        transform: "translateX(-50%)"
      };
    } else if (this.cPlacement == "top-right") {
      this.cPosition = {
        top: this.position.top,
        right: this.position.right
      };
    } else if (this.cPlacement == "right-center") {
      this.cPosition = {
        right: this.position.right,
        top: "50%",
        transform: " translateY(-50%)"
      };
    } else if (this.cPlacement == "bottom-right") {
      this.cPosition = {
        bottom: this.position.bottom,
        right: this.position.right
      };
    } else if (this.cPlacement == "bottom-center") {
      this.cPosition = {
        bottom: this.position.bottom,
        transform: "translateX(-50%)",
        left: "50%"
      };
    } else if (this.cPlacement == "bottom-left") {
      this.cPosition = {
        left: this.position.left,
        bottom: this.position.bottom
      };
    } else if (this.cPlacement == "left-center") {
      this.cPosition = {
        left: this.position.left,
        top: "50%",
        transform: " translateY(-50%)"
      };
    }
  }
};
const _hoisted_1$9 = /* @__PURE__ */ createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-arrow-repeat",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" }),
  /* @__PURE__ */ createElementVNode("path", {
    "fill-rule": "evenodd",
    d: "M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
  })
], -1);
const _hoisted_2$6 = [
  _hoisted_1$9
];
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    this.cvisible ? (openBlock(), createElementBlock("div", {
      key: 0,
      ref: "rootElement",
      onClick: _cache[17] || (_cache[17] = (...args) => _ctx.selectElement && _ctx.selectElement(...args)),
      style: normalizeStyle({ position: $props.layout, width: $props.width, height: $props.height, top: _ctx.computedPosition.top, left: _ctx.computedPosition.left, bottom: _ctx.computedPosition.bottom, right: _ctx.computedPosition.right, transform: _ctx.computedPosition.transform + " rotate(" + _ctx.angle + "deg)" })
    }, [
      createElementVNode("div", {
        style: normalizeStyle($options.activeStyle)
      }, [
        $data.cSelected && $props.reSizable ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref: "topLeftHandle",
          onTouchstartPassive: _cache[0] || (_cache[0] = (...args) => _ctx.leftTopResizerMouseDown && _ctx.leftTopResizerMouseDown(...args)),
          onTouchmovePassive: _cache[1] || (_cache[1] = (...args) => _ctx.leftTopResizerMouseMove && _ctx.leftTopResizerMouseMove(...args)),
          onTouchendPassive: _cache[2] || (_cache[2] = (...args) => _ctx.leftTopResizerMouseUp && _ctx.leftTopResizerMouseUp(...args)),
          onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.leftTopResizerMouseDown && _ctx.leftTopResizerMouseDown(...args)),
          style: { "box-shadow": "0 0 4px 1px rgb(57 76 96 / 15%), 0 0 0 1px rgb(47 64 80 / 25%)", "width": "12px", "height": "12px", "border-radius": "50%", "background-color": "white", "top": "-6px", "left": "-6px", "position": "absolute", "touch-action": "none" }
        }, null, 544)) : createCommentVNode("", true),
        $data.cSelected && $props.reSizable ? (openBlock(), createElementBlock("div", {
          key: 1,
          ref: "topRightHandle",
          onTouchstartPassive: _cache[4] || (_cache[4] = (...args) => _ctx.rightTopResizerMouseDown && _ctx.rightTopResizerMouseDown(...args)),
          onTouchmovePassive: _cache[5] || (_cache[5] = (...args) => _ctx.rightTopResizerMouseMove && _ctx.rightTopResizerMouseMove(...args)),
          onTouchendPassive: _cache[6] || (_cache[6] = (...args) => _ctx.rightTopResizerMouseUp && _ctx.rightTopResizerMouseUp(...args)),
          onMousedown: _cache[7] || (_cache[7] = (...args) => _ctx.rightTopResizerMouseDown && _ctx.rightTopResizerMouseDown(...args)),
          style: { "box-shadow": "0 0 4px 1px rgb(57 76 96 / 15%), 0 0 0 1px rgb(47 64 80 / 25%)", "width": "12px", "height": "12px", "border-radius": "50%", "background-color": "white", "top": "-6px", "right": "-6px", "position": "absolute", "touch-action": "none" }
        }, null, 544)) : createCommentVNode("", true),
        $data.cSelected && $props.reSizable ? (openBlock(), createElementBlock("div", {
          key: 2,
          ref: "bottomLeftHandle",
          onTouchstartPassive: _cache[8] || (_cache[8] = (...args) => _ctx.leftBottomResizerMouseDown && _ctx.leftBottomResizerMouseDown(...args)),
          onTouchmovePassive: _cache[9] || (_cache[9] = (...args) => _ctx.leftBottomResizerMouseMove && _ctx.leftBottomResizerMouseMove(...args)),
          onTouchendPassive: _cache[10] || (_cache[10] = (...args) => _ctx.leftBottomResizerMouseUp && _ctx.leftBottomResizerMouseUp(...args)),
          onMousedown: _cache[11] || (_cache[11] = (...args) => _ctx.leftBottomResizerMouseDown && _ctx.leftBottomResizerMouseDown(...args)),
          style: { "box-shadow": "0 0 4px 1px rgb(57 76 96 / 15%), 0 0 0 1px rgb(47 64 80 / 25%)", "width": "12px", "height": "12px", "border-radius": "50%", "background-color": "white", "bottom": "-6px", "left": "-6px", "position": "absolute", "touch-action": "none" }
        }, null, 544)) : createCommentVNode("", true),
        $data.cSelected && $props.reSizable ? (openBlock(), createElementBlock("div", {
          key: 3,
          ref: "bottomRightHandle",
          onTouchstartPassive: _cache[12] || (_cache[12] = (...args) => _ctx.rightBottomResizerMouseDown && _ctx.rightBottomResizerMouseDown(...args)),
          onTouchmovePassive: _cache[13] || (_cache[13] = (...args) => _ctx.rightBottomResizerMouseMove && _ctx.rightBottomResizerMouseMove(...args)),
          onTouchendPassive: _cache[14] || (_cache[14] = (...args) => _ctx.rightBottomResizerMouseUp && _ctx.rightBottomResizerMouseUp(...args)),
          onMousedown: _cache[15] || (_cache[15] = (...args) => _ctx.rightBottomResizerMouseDown && _ctx.rightBottomResizerMouseDown(...args)),
          style: { "z-index": "10000", "cursor": "se-resize", "box-shadow": "0 0 4px 1px rgb(57 76 96 / 15%), 0 0 0 1px rgb(47 64 80 / 25%)", "width": "12px", "height": "12px", "border-radius": "50%", "background-color": "white", "bottom": "-6px", "right": "-6px", "position": "absolute", "touch-action": "none" }
        }, null, 544)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {
          hide: $options.hide,
          onHandleMouseDown: _ctx.onHandleMouseDown,
          onHandleTouchMove: _ctx.onHandleTouchMove,
          onHandleTouchEnd: _ctx.onHandleTouchEnd
        })
      ], 4),
      $data.cSelected && $props.rotatable ? (openBlock(), createElementBlock("div", {
        key: 0,
        onMousedown: _cache[16] || (_cache[16] = (...args) => _ctx.RoMousedown && _ctx.RoMousedown(...args)),
        style: { "color": "gray", "cursor": "grab", "position": "absolute", "top": "calc( 50% - 10px )", "padding": "4px", "border": "1px solid", "border-radius": "50%", "width": "26px", "height": "26px", "right": "-45px" }
      }, _hoisted_2$6, 32)) : createCommentVNode("", true)
    ], 4)) : createCommentVNode("", true),
    _ctx.horizontalCenter && _ctx.showSnapping ? (openBlock(), createElementBlock("div", {
      key: 1,
      style: normalizeStyle([{ position: $props.layout }, { "left": "50%", "top": "0px", "bottom": "0px", "border-left": "2px solid red", "opacity": ".3", "width": "1px", "z-index": "-1" }])
    }, null, 4)) : createCommentVNode("", true),
    _ctx.verticalCenter && _ctx.showSnapping ? (openBlock(), createElementBlock("div", {
      key: 2,
      style: normalizeStyle([{ position: $props.layout }, { "top": "50%", "left": "0px", "right": "0px", "border-top": "2px solid red", "opacity": ".3", "height": "1px", "z-index": "-1" }])
    }, null, 4)) : createCommentVNode("", true)
  ], 64);
}
var BraveDraggable = /* @__PURE__ */ _export_sfc$1(_sfc_main$h$1, [["render", _sfc_render$g]]);
const _sfc_main$g$1 = {
  data() {
    return {
      newTag: "",
      tags: this.modelValue,
      backSpaceCount: 0
    };
  },
  emits: ["update:modelValue"],
  watch: {
    modelValue: function(val) {
      this.tags = val;
    }
  },
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    beforeDeleteTagClass: {
      type: String,
      default: ""
    },
    UseTwoBackspaceDelete: {
      type: Boolean,
      default: false
    },
    tagClass: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Add Tag"
    },
    classDeleteIcon: {
      type: String,
      default: ""
    },
    inputClass: {
      type: String,
      default: ""
    }
  },
  methods: {
    removeTagOnBackspace(e) {
      if (this.newTag == "" && this.UseTwoBackspaceDelete != true) {
        this.tags.pop();
      } else if (this.UseTwoBackspaceDelete == true && this.backSpaceCount == 1 && this.newTag == "" && this.tags.length > 0) {
        this.tags.pop();
        this.backSpaceCount = 0;
      } else if (this.UseTwoBackspaceDelete == true && this.newTag == "" && this.tags.length > 0) {
        this.backSpaceCount++;
      }
    },
    addTag() {
      this.tags.push(this.newTag);
      this.newTag = "";
      this.$emit("update:modelValue", this.tags);
    },
    removeTag(index) {
      console.log("deleting", index);
      this.tags.splice(index, 1);
      this.$emit("update:modelValue", this.tags);
    }
  }
};
const _hoisted_1$8 = ["onClick"];
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$5
];
const _hoisted_4$3 = ["placeholder"];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.tags, (tag, index) => {
      return openBlock(), createElementBlock("li", { key: index }, [
        createElementVNode("div", {
          class: normalizeClass([$data.backSpaceCount > 0 && index == $data.tags.length - 1 ? $props.beforeDeleteTagClass : $props.tagClass, ""])
        }, [
          createElementVNode("div", null, toDisplayString(tag), 1),
          createElementVNode("div", null, [
            (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: normalizeClass($props.classDeleteIcon),
              viewBox: "0 0 20 20",
              fill: "currentColor",
              onClick: ($event) => $options.removeTag(index)
            }, _hoisted_3$3, 10, _hoisted_1$8))
          ])
        ], 2)
      ]);
    }), 128)),
    createElementVNode("li", null, [
      withDirectives(createElementVNode("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.newTag = $event),
        onKeyup: [
          _cache[1] || (_cache[1] = withKeys(($event) => $options.addTag(), ["enter"])),
          _cache[2] || (_cache[2] = ($event) => $data.backSpaceCount = $data.newTag != "" ? 0 : $data.backSpaceCount),
          _cache[3] || (_cache[3] = withKeys((...args) => $options.removeTagOnBackspace && $options.removeTagOnBackspace(...args), ["delete"]))
        ],
        type: "text",
        id: "first_name",
        class: normalizeClass($props.inputClass),
        placeholder: $props.placeholder,
        required: ""
      }, null, 42, _hoisted_4$3), [
        [vModelText, $data.newTag]
      ])
    ])
  ]);
}
var BraveTags = /* @__PURE__ */ _export_sfc$1(_sfc_main$g$1, [["render", _sfc_render$f]]);
var circularText = {
  methods: {
    addingPaddingToText: function(textArray) {
      var padding = 0;
      var maxTextLength = 0;
      for (var i = 0; i < textArray.length; i++) {
        if (textArray[i].length > maxTextLength) {
          maxTextLength = textArray[i].length + 1;
        }
      }
      for (var i = 0; i < textArray.length; i++) {
        padding = maxTextLength - textArray[i].length;
        var flag = false;
        for (var j = 0; j < padding; j++) {
          textArray[i] = flag ? textArray[i] + " " : " " + textArray[i];
          flag = !flag;
        }
      }
      return textArray;
    },
    circularText(text, radius, totalItem) {
      var circularTextAr = [];
      var len = text.length;
      for (var i = 0; i < len; i++) {
        if (text[i].trim() == "") {
          continue;
        }
        var degree = i * 360 / len, centering = 360 / totalItem / 2 - 90, transform = "rotate(" + (degree - centering) + "deg)";
        circularTextAr.push({
          text: text[i],
          transform,
          display: "inline-block",
          height: radius + "px"
        });
      }
      return circularTextAr;
    }
  }
};
const _sfc_main$f$1 = {
  name: "BraveRadialMenu",
  inheritAttrs: false,
  mixins: [circularText],
  data() {
    return {
      circularTextElements: [],
      circularDividerEls: [],
      cVisible: this.visible
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: true,
      input: "switch"
    },
    radius: {
      type: Number,
      default: 300,
      min: 125,
      max: 300
    },
    radiusIcons: {
      type: Number,
      default: 100,
      min: 30,
      max: 56
    },
    circlePadding: {
      type: Number,
      default: 10,
      min: 20,
      max: 54
    }
  },
  watch: {
    visible(val) {
      this.cVisible = val;
    },
    radius(val) {
      this.processMenu();
    },
    radiusIcons(val) {
      this.processMenu();
    },
    circlePadding(val) {
      this.processMenu();
    }
  },
  mounted() {
    this.processMenu();
  },
  methods: {
    processMenu() {
      var center = { x: this.radius, y: this.radius };
      var points = this.drawCirclePoints(this.$refs.slotWrapperEl.children.length - 1, this.radius - this.circlePadding - this.radiusIcons, center);
      var centerEl = this.$refs.slotWrapperEl.children[0];
      this.appplyStyle(centerEl);
      centerEl.style.left = center.x - this.radiusIcons + "px";
      centerEl.style.top = center.y - this.radiusIcons + "px";
      var titles = Array.from(this.$refs.slotWrapperEl.children).map((el) => el.title);
      titles.shift();
      this.circularTextElements = this.circularText("" + this.addingPaddingToText(titles).join(""), this.radius - 5, this.$refs.slotWrapperEl.children.length - 1);
      this.circularDividerEls = this.circularDividers(this.radius, this.$refs.slotWrapperEl.children.length - 1);
      for (var i = 1; i < this.$refs.slotWrapperEl.children.length; i++) {
        this.appplyStyle(this.$refs.slotWrapperEl.children[i]);
        this.$refs.slotWrapperEl.children[i].style.left = points[i - 1].x - this.radiusIcons + "px";
        this.$refs.slotWrapperEl.children[i].style.top = points[i - 1].y - this.radiusIcons + "px";
      }
    },
    hide() {
      this.cVisible = false;
      this.$emit("hide");
    },
    show(e) {
      this.cVisible = true;
      if (e.touches) {
        this.$refs.rootEl.style.left = e.touches[0].clientX - this.radius + "px";
        this.$refs.rootEl.style.top = e.touches[0].clientY - this.radius + "px";
      } else {
        this.$refs.rootEl.style.left = e.clientX - this.radius + "px";
        this.$refs.rootEl.style.top = e.clientY - this.radius + "px";
      }
      this.processMenu();
      this.$emit("show");
    },
    circularDividers(radius, totalItem) {
      var dividerAr = Array();
      for (var i = 0; i < totalItem; i++) {
        var degree = i * 360 / totalItem, centering = 360 / totalItem / 2, transform = "rotate(" + (degree - centering) + "deg)";
        dividerAr.push({
          transform,
          display: "inline-block",
          height: radius + "px"
        });
      }
      return dividerAr;
    },
    appplyStyle(el) {
      el.style.borderRadius = "50%";
      el.style.position = "absolute";
      el.style.width = this.radiusIcons * 2 + "px";
      el.style.height = this.radiusIcons * 2 + "px";
    },
    drawCirclePoints(points, radius, center) {
      var pointVal = Array();
      var slice = 2 * Math.PI / points;
      for (var i = 0; i < points; i++) {
        var angle = slice * i;
        var newX = center.x + radius * Math.cos(angle);
        var newY = center.y + radius * Math.sin(angle);
        var p = { x: newX, y: newY };
        pointVal.push(p);
      }
      return pointVal;
    }
  }
};
const _hoisted_1$7 = { ref: "slotWrapperEl" };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    withDirectives(createElementVNode("div", {
      ref: "rootEl",
      class: normalizeClass(_ctx.$attrs.class),
      style: normalizeStyle([{ height: $props.radius * 2 + "px", width: $props.radius * 2 + "px" }, { "border-radius": "50%", "position": "fixed", "z-index": "1000" }])
    }, [
      createElementVNode("div", {
        style: normalizeStyle([{ "position": "absolute", "top": "0px", "left": "0px", "text-align": "center" }, { top: $props.radius, left: $props.radius }])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.circularTextElements, (item) => {
          return openBlock(), createElementBlock("span", {
            style: normalizeStyle([{ "position": "absolute", "width": "20px", "transform-origin": "bottom center", "margin-top": "5px" }, { transform: item.transform, left: $props.radius - 10 + "px", height: $props.radius - 5 + "px" }])
          }, toDisplayString(item.text), 5);
        }), 256))
      ], 4),
      createElementVNode("div", {
        style: normalizeStyle([{ "position": "absolute", "top": "0px", "left": "0px", "text-align": "center" }, { top: $props.radius, left: $props.radius }])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.circularDividerEls, (item) => {
          return openBlock(), createElementBlock("span", {
            style: normalizeStyle([{ "position": "absolute", "width": "2px", "transform-origin": "bottom center", "opacity": ".5", "padding-bottom": "10px" }, { transform: item.transform, left: $props.radius + "px", height: $props.radius + "px" }])
          }, [
            createElementVNode("div", {
              style: normalizeStyle([{ height: $props.radius - 47 + "px" }, { "border-left": "1px solid", "opacity": ".3" }])
            }, null, 4)
          ], 4);
        }), 256))
      ], 4),
      createElementVNode("div", _hoisted_1$7, [
        renderSlot(_ctx.$slots, "default")
      ], 512)
    ], 6), [
      [vShow, $data.cVisible]
    ]),
    withDirectives(createElementVNode("div", {
      class: normalizeClass(_ctx.$attrs.classBackdrop),
      style: { "position": "fixed", "inset": "0" },
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.hide && $options.hide(...args), ["self"]))
    }, null, 2), [
      [vShow, $data.cVisible]
    ])
  ], 64);
}
var BraveRadialMenu$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$f$1, [["render", _sfc_render$e]]);
const _sfc_main$e$1 = {
  watch: {
    value(newVal) {
      this.$emit("update:modelValue", newVal);
    },
    modelValue(newVal) {
      this.value = newVal;
    }
  },
  data() {
    return {
      value: this.modelValue
    };
  },
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  }
};
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("input", mergeProps({
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value = $event)
  }, _ctx.$attrs), null, 16)), [
    [vModelText, $data.value]
  ]);
}
var Bravetext = /* @__PURE__ */ _export_sfc$1(_sfc_main$e$1, [["render", _sfc_render$d]]);
const _sfc_main$d$1 = {
  watch: {
    value(newVal) {
      this.$emit("update:modelValue", newVal);
    },
    modelValue(newVal) {
      this.value = newVal;
    }
  },
  data() {
    return {
      value: this.modelValue
    };
  },
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  }
};
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("textarea", mergeProps({
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value = $event)
  }, _ctx.$attrs, {
    cols: "30",
    rows: "10"
  }), null, 16)), [
    [vModelText, $data.value]
  ]);
}
var Bravetextarea = /* @__PURE__ */ _export_sfc$1(_sfc_main$d$1, [["render", _sfc_render$c]]);
const _sfc_main$c$1 = {
  watch: {
    value(newVal) {
      this.$emit("update:modelValue", newVal);
    },
    modelValue(newVal) {
      this.value = newVal;
    }
  },
  data() {
    return {
      value: this.modelValue
    };
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("input", mergeProps({
    type: "checkbox",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value = $event)
  }, _ctx.$attrs), null, 16)), [
    [vModelCheckbox, $data.value]
  ]);
}
var Bravecheckbox = /* @__PURE__ */ _export_sfc$1(_sfc_main$c$1, [["render", _sfc_render$b]]);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset2 = 0) {
  return (byteToHex[arr[offset2 + 0]] + byteToHex[arr[offset2 + 1]] + byteToHex[arr[offset2 + 2]] + byteToHex[arr[offset2 + 3]] + "-" + byteToHex[arr[offset2 + 4]] + byteToHex[arr[offset2 + 5]] + "-" + byteToHex[arr[offset2 + 6]] + byteToHex[arr[offset2 + 7]] + "-" + byteToHex[arr[offset2 + 8]] + byteToHex[arr[offset2 + 9]] + "-" + byteToHex[arr[offset2 + 10]] + byteToHex[arr[offset2 + 11]] + byteToHex[arr[offset2 + 12]] + byteToHex[arr[offset2 + 13]] + byteToHex[arr[offset2 + 14]] + byteToHex[arr[offset2 + 15]]).toLowerCase();
}
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};
function v4(options, buf, offset2) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset2 = offset2 || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset2 + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
const _sfc_main$b$1 = {
  watch: {
    value(newVal) {
      this.$emit("update:modelValue", newVal);
    },
    modelValue(newVal) {
      this.value = newVal;
    }
  },
  data() {
    return {
      value: this.modelValue,
      inputOptions: []
    };
  },
  created() {
    this.updateOptions();
  },
  methods: {
    updateOptions() {
      if (!Array.isArray(this.options)) {
        var entries = Object.entries(this.options);
        this.inputOptions = entries.map((item) => {
          return {
            value: item[0],
            label: item[1],
            id: v4()
          };
        });
        return;
      }
      if (this.options.length > 0) {
        if (typeof this.options[0] == "string") {
          this.inputOptions = this.options.map((item) => {
            return {
              value: item,
              label: item,
              id: v4()
            };
          });
        } else {
          this.inputOptions = this.options.map((item) => {
            return {
              value: item.value,
              label: item.label,
              id: v4()
            };
          });
        }
      }
    }
  },
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    options: {
      type: [Array, Object],
      default: []
    }
  }
};
const _hoisted_1$6 = ["id", "value"];
const _hoisted_2$4 = ["for"];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList($data.inputOptions, (opt, index) => {
    return openBlock(), createElementBlock("div", {
      class: normalizeClass(_ctx.$attrs.wrapperClass)
    }, [
      createElementVNode("input", mergeProps({
        id: opt.id,
        type: "radio",
        value: opt.value,
        name: "default-radio"
      }, _ctx.$attrs), null, 16, _hoisted_1$6),
      createElementVNode("label", {
        for: opt.id
      }, toDisplayString(opt.label), 9, _hoisted_2$4)
    ], 2);
  }), 256);
}
var Braveradio = /* @__PURE__ */ _export_sfc$1(_sfc_main$b$1, [["render", _sfc_render$a]]);
const _sfc_main$a$1 = {
  watch: {
    value(newVal) {
      this.$emit("update:modelValue", newVal);
    },
    modelValue(newVal) {
      this.value = newVal;
    }
  },
  data() {
    return {
      value: this.modelValue,
      inputOptions: []
    };
  },
  created() {
    this.updateOptions();
  },
  methods: {
    updateOptions() {
      if (!Array.isArray(this.options)) {
        var entries = Object.entries(this.options);
        this.inputOptions = entries.map((item) => {
          return {
            value: item[0],
            label: item[1]
          };
        });
        return;
      }
      if (this.options.length > 0) {
        if (typeof this.options[0] == "string") {
          this.inputOptions = this.options.map((item) => {
            return {
              value: item,
              label: item
            };
          });
        } else {
          this.inputOptions = this.options;
        }
      }
    }
  },
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    options: {
      type: [Array, Object],
      default: []
    }
  }
};
const _hoisted_1$5 = ["value"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("select", mergeProps({
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value = $event)
  }, _ctx.$attrs), [
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.inputOptions, (opt) => {
      return openBlock(), createElementBlock("option", {
        value: opt.value
      }, toDisplayString(opt.label), 9, _hoisted_1$5);
    }), 256))
  ], 16)), [
    [vModelSelect, $data.value]
  ]);
}
var Braveselect = /* @__PURE__ */ _export_sfc$1(_sfc_main$a$1, [["render", _sfc_render$9]]);
const _sfc_main$9$1 = {
  components: {
    Bravetext,
    Bravetextarea,
    Bravecheckbox,
    Braveradio,
    Braveselect
  },
  watch: {
    value(newVal) {
      this.$emit("update:modelValue", newVal);
    },
    modelValue(newVal) {
      this.value = newVal;
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      value: this.modelValue
    };
  },
  props: {
    type: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    modelValue: {
      type: [String, Boolean, Number],
      default: ""
    }
  },
  methods: {}
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent("Brave" + $props.type), mergeProps({
    modelValue: $data.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value = $event)
  }, _ctx.$attrs), null, 16, ["modelValue"]);
}
var BraveField = /* @__PURE__ */ _export_sfc$1(_sfc_main$9$1, [["render", _sfc_render$8]]);
const _sfc_main$8$1 = {
  name: "BraveBlockTree",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    getHTML() {
      let html = "";
      for (let i = 0; i < this.value.length; i++) {
        let thisHtml = this.$refs["block" + i][0].getHTML();
        html += thisHtml;
      }
      return html;
    },
    replaceBlock(index, payload) {
      console.log("repaceblock", index, payload);
    },
    deleteBlock(index) {
      this.value.splice(index, 1);
      setTimeout(() => this.$refs["block" + (index - 1)][0].setFocus(), 10);
    },
    replaceBlock(index, payload) {
      this.value.splice(index, 1, payload.structure);
      if (payload.blockType == "TextBlock") {
        setTimeout(() => this.$refs["block" + index][0].setFocus(), 10);
      }
    },
    moveContentToRowAbove(payload, index) {
      this.value.splice(index, 1);
      this.$refs["block" + (index - 1)][0].setFocus();
      this.$refs["block" + (index - 1)][0].addContent(payload);
    },
    insertTextSibling(payload, index) {
      this.value.splice(index + 1, 0, payload.payload);
      setTimeout(() => this.$refs["block" + (index + 1)][0].setCursorToStart(), 10);
    }
  },
  computed: {
    value: {
      get() {
        if (this.modelValue.length == 0) {
          this.$emit("update:modelValue", [{ component: "BraveBlockText", data: { selfData: { tag: "p", class: "brave-text", content: "" } } }]);
        }
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  }
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList($options.value, (blockElement, index) => {
    return openBlock(), createBlock(resolveDynamicComponent(blockElement.component), {
      ref_for: true,
      ref: "block" + index,
      onInsertSibling: ($event) => $options.insertTextSibling($event, index),
      onDeleteBlock: ($event) => $options.deleteBlock(index),
      onReplaceBlock: ($event) => $options.replaceBlock(index, $event),
      onMoveContentToRowAbove: ($event) => $options.moveContentToRowAbove($event, index),
      modelValue: blockElement.data,
      "onUpdate:modelValue": ($event) => blockElement.data = $event
    }, null, 8, ["onInsertSibling", "onDeleteBlock", "onReplaceBlock", "onMoveContentToRowAbove", "modelValue", "onUpdate:modelValue"]);
  }), 256);
}
var BraveBlockTree = /* @__PURE__ */ _export_sfc$1(_sfc_main$8$1, [["render", _sfc_render$7]]);
const _sfc_main$7$1 = {
  name: "BraveBlockElement",
  components: { BraveBlockTree },
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    getHTML() {
      let childHtml = this.$refs.childBlock.getHTML();
      let thisHtml = this.$el.outerHTML;
      thisHtml = thisHtml.replace('<div class="block-element"><brave-block-tree ref="childBlock"></brave-block-tree></div>', childHtml);
      return thisHtml;
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  }
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BraveBlockTree = resolveComponent("BraveBlockTree");
  return openBlock(), createElementBlock("div", {
    contenteditable: "false",
    class: normalizeClass($options.value.selfData.class)
  }, [
    createVNode(_component_BraveBlockTree, {
      ref: "childBlock",
      modelValue: $options.value.childData,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.value.childData = $event)
    }, null, 8, ["modelValue"])
  ], 2);
}
var BraveBlockElement = /* @__PURE__ */ _export_sfc$1(_sfc_main$7$1, [["render", _sfc_render$6]]);
function isArray(value) {
  return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
const INFINITY = 1 / 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  let result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
  return typeof value === "object";
}
function isObjectLike(value) {
  return isObject(value) && value !== null;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isBlank(value) {
  return !value.trim().length;
}
function getTag(value) {
  return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
const EXTENDED_SEARCH_UNAVAILABLE = "Extended search is not available";
const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
const PATTERN_LENGTH_TOO_LARGE = (max2) => `Pattern length exceeds max of ${max2}.`;
const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
const INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
const hasOwn = Object.prototype.hasOwnProperty;
class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};
    let totalWeight = 0;
    keys.forEach((key) => {
      let obj = createKey(key);
      totalWeight += obj.weight;
      this._keys.push(obj);
      this._keyMap[obj.id] = obj;
      totalWeight += obj.weight;
    });
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;
  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, "name")) {
      throw new Error(MISSING_KEY_PROPERTY("name"));
    }
    const name = key.name;
    src = name;
    if (hasOwn.call(key, "weight")) {
      weight = key.weight;
      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
      }
    }
    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }
  return { path, id, weight, src, getFn };
}
function createKeyPath(key) {
  return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
  return isArray(key) ? key.join(".") : key;
}
function get(obj, path) {
  let list = [];
  let arr = false;
  const deepGet = (obj2, path2, index) => {
    if (!isDefined(obj2)) {
      return;
    }
    if (!path2[index]) {
      list.push(obj2);
    } else {
      let key = path2[index];
      const value = obj2[key];
      if (!isDefined(value)) {
        return;
      }
      if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path2, index + 1);
        }
      } else if (path2.length) {
        deepGet(value, path2, index + 1);
      }
    }
  };
  deepGet(obj, isString(path) ? path.split(".") : path, 0);
  return arr ? list : list[0];
}
const MatchOptions = {
  includeMatches: false,
  findAllMatches: false,
  minMatchCharLength: 1
};
const BasicOptions = {
  isCaseSensitive: false,
  includeScore: false,
  keys: [],
  shouldSort: true,
  sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
};
const FuzzyOptions = {
  location: 0,
  threshold: 0.6,
  distance: 100
};
const AdvancedOptions = {
  useExtendedSearch: false,
  getFn: get,
  ignoreLocation: false,
  ignoreFieldNorm: false,
  fieldNormWeight: 1
};
var Config = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);
const SPACE = /[^ ]+/g;
function norm(weight = 1, mantissa = 3) {
  const cache = /* @__PURE__ */ new Map();
  const m2 = Math.pow(10, mantissa);
  return {
    get(value) {
      const numTokens = value.match(SPACE).length;
      if (cache.has(numTokens)) {
        return cache.get(numTokens);
      }
      const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
      const n = parseFloat(Math.round(norm2 * m2) / m2);
      cache.set(numTokens, n);
      return n;
    },
    clear() {
      cache.clear();
    }
  };
}
class FuseIndex {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;
    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return;
    }
    this.isCreated = true;
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }
    this.norm.clear();
  }
  add(doc) {
    const idx = this.size();
    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  removeAt(idx) {
    this.records.splice(idx, 1);
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]];
  }
  size() {
    return this.records.length;
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return;
    }
    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };
    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };
    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
      if (!isDefined(value)) {
        return;
      }
      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];
        while (stack.length) {
          const { nestedArrIndex, value: value2 } = stack.pop();
          if (!isDefined(value2)) {
            continue;
          }
          if (isString(value2) && !isBlank(value2)) {
            let subRecord = {
              v: value2,
              i: nestedArrIndex,
              n: this.norm.get(value2)
            };
            subRecords.push(subRecord);
          } else if (isArray(value2)) {
            value2.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          } else
            ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };
        record.$[keyIndex] = subRecord;
      }
    });
    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex;
}
function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex;
}
function computeScore$1(pattern, {
  errors = 0,
  currentLocation = 0,
  expectedLocation = 0,
  distance = Config.distance,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  const accuracy = errors / pattern.length;
  if (ignoreLocation) {
    return accuracy;
  }
  const proximity = Math.abs(expectedLocation - currentLocation);
  if (!distance) {
    return proximity ? 1 : accuracy;
  }
  return accuracy + proximity / distance;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;
  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }
  return indices;
}
const MAX_BITS = 32;
function search(text, pattern, patternAlphabet, {
  location = Config.location,
  distance = Config.distance,
  threshold = Config.threshold,
  findAllMatches = Config.findAllMatches,
  minMatchCharLength = Config.minMatchCharLength,
  includeMatches = Config.includeMatches,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
  }
  const patternLen = pattern.length;
  const textLen = text.length;
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  let currentThreshold = threshold;
  let bestLocation = expectedLocation;
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  const matchMask = computeMatches ? Array(textLen) : [];
  let index;
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });
    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;
    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }
  bestLocation = -1;
  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;
  const mask = 1 << patternLen - 1;
  for (let i = 0; i < patternLen; i += 1) {
    let binMin = 0;
    let binMid = binMax;
    while (binMin < binMid) {
      const score2 = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score2 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }
      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }
    binMax = binMid;
    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
    let bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << i) - 1;
    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];
      if (computeMatches) {
        matchMask[currentLocation] = +!!charMatch;
      }
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
      if (i) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }
      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (finalScore <= currentThreshold) {
          currentThreshold = finalScore;
          bestLocation = currentLocation;
          if (bestLocation <= expectedLocation) {
            break;
          }
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });
    if (score > currentThreshold) {
      break;
    }
    lastBitArr = bitArr;
  }
  const result = {
    isMatch: bestLocation >= 0,
    score: Math.max(1e-3, finalScore)
  };
  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }
  return result;
}
function createPatternAlphabet(pattern) {
  let mask = {};
  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
  }
  return mask;
}
class BitapSearch {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };
    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.chunks = [];
    if (!this.pattern.length) {
      return;
    }
    const addChunk = (pattern2, startIndex) => {
      this.chunks.push({
        pattern: pattern2,
        alphabet: createPatternAlphabet(pattern2),
        startIndex
      });
    };
    const len = this.pattern.length;
    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;
      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }
      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }
  searchIn(text) {
    const { isCaseSensitive, includeMatches } = this.options;
    if (!isCaseSensitive) {
      text = text.toLowerCase();
    }
    if (this.pattern === text) {
      let result2 = {
        isMatch: true,
        score: 0
      };
      if (includeMatches) {
        result2.indices = [[0, text.length - 1]];
      }
      return result2;
    }
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;
    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;
    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });
      if (isMatch) {
        hasMatches = true;
      }
      totalScore += score;
      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });
    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };
    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }
    return result;
  }
}
class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex);
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex);
  }
  search() {
  }
}
function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null;
}
class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(text) {
    const isMatch = text === this.pattern;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
}
class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
}
class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    };
  }
}
class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
}
class FuzzyMatch extends BaseMatch {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(text) {
    return this._bitapSearch.searchIn(text);
  }
}
class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(text) {
    let location = 0;
    let index;
    const indices = [];
    const patternLen = this.pattern.length;
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }
    const isMatch = !!indices.length;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    };
  }
}
const searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];
const searchersLen = searchers.length;
const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = "|";
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }
      if (found) {
        continue;
      }
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break;
        }
      }
    }
    return results;
  });
}
const MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
class ExtendedSearch {
  constructor(pattern, {
    isCaseSensitive = Config.isCaseSensitive,
    includeMatches = Config.includeMatches,
    minMatchCharLength = Config.minMatchCharLength,
    ignoreLocation = Config.ignoreLocation,
    findAllMatches = Config.findAllMatches,
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance
  } = {}) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };
    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }
  static condition(_, options) {
    return options.useExtendedSearch;
  }
  searchIn(text) {
    const query = this.query;
    if (!query) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const { includeMatches, isCaseSensitive } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers2 = query[i];
      allIndices.length = 0;
      numMatches = 0;
      for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
        const searcher = searchers2[j];
        const { isMatch, indices, score } = searcher.search(text);
        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break;
        }
      }
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };
        if (includeMatches) {
          result.indices = allIndices;
        }
        return result;
      }
    }
    return {
      isMatch: false,
      score: 1
    };
  }
}
const registeredSearchers = [];
function register(...args) {
  registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options);
    }
  }
  return new BitapSearch(pattern, options);
}
const LogicalOperator = {
  AND: "$and",
  OR: "$or"
};
const KeyType = {
  PATH: "$path",
  PATTERN: "$val"
};
const isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
const isPath = (query) => !!query[KeyType.PATH];
const isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});
function parse(query, options, { auto = true } = {}) {
  const next = (query2) => {
    let keys = Object.keys(query2);
    const isQueryPath = isPath(query2);
    if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
      return next(convertToExplicit(query2));
    }
    if (isLeaf(query2)) {
      const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
      const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
      }
      const obj = {
        keyId: createKeyId(key),
        pattern
      };
      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }
      return obj;
    }
    let node = {
      children: [],
      operator: keys[0]
    };
    keys.forEach((key) => {
      const value = query2[key];
      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });
    return node;
  };
  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }
  return next(query);
}
function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
  results.forEach((result) => {
    let totalScore = 1;
    result.matches.forEach(({ key, norm: norm2, score }) => {
      const weight = key ? key.weight : null;
      totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm2));
    });
    result.score = totalScore;
  });
}
function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];
  if (!isDefined(matches)) {
    return;
  }
  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return;
    }
    const { indices, value } = match;
    let obj = {
      indices,
      value
    };
    if (match.key) {
      obj.key = match.key.src;
    }
    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }
    data.matches.push(obj);
  });
}
function transformScore(result, data) {
  data.score = result.score;
}
function format(results, docs, {
  includeMatches = Config.includeMatches,
  includeScore = Config.includeScore
} = {}) {
  const transformers = [];
  if (includeMatches)
    transformers.push(transformMatches);
  if (includeScore)
    transformers.push(transformScore);
  return results.map((result) => {
    const { idx } = result;
    const data = {
      item: docs[idx],
      refIndex: idx
    };
    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }
    return data;
  });
}
class Fuse {
  constructor(docs, options = {}, index) {
    this.options = __spreadValues(__spreadValues({}, Config), options);
    if (this.options.useExtendedSearch && false) {
      throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
    }
    this._keyStore = new KeyStore(this.options.keys);
    this.setCollection(docs, index);
  }
  setCollection(docs, index) {
    this._docs = docs;
    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE);
    }
    this._myIndex = index || createIndex(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(doc) {
    if (!isDefined(doc)) {
      return;
    }
    this._docs.push(doc);
    this._myIndex.add(doc);
  }
  remove(predicate = () => false) {
    const results = [];
    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;
        results.push(doc);
      }
    }
    return results;
  }
  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }
  getIndex() {
    return this._myIndex;
  }
  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;
    let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
    computeScore(results, { ignoreFieldNorm });
    if (shouldSort) {
      results.sort(sortFn);
    }
    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }
    return format(results, this._docs, {
      includeMatches,
      includeScore
    });
  }
  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];
    records.forEach(({ v: text, i: idx, n: norm2 }) => {
      if (!isDefined(text)) {
        return;
      }
      const { isMatch, score, indices } = searcher.searchIn(text);
      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm: norm2, indices }]
        });
      }
    });
    return results;
  }
  _searchLogical(query) {
    const expression = parse(query, this.options);
    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;
        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });
        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ];
        }
        return [];
      }
      const res = [];
      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child = node.children[i];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return [];
        }
      }
      return res;
    };
    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];
    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);
        if (expResults.length) {
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });
    return results;
  }
  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return;
      }
      let matches = [];
      keys.forEach((key, keyIndex) => {
        matches.push(...this._findMatches({
          key,
          value: item[keyIndex],
          searcher
        }));
      });
      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });
    return results;
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return [];
    }
    let matches = [];
    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm2 }) => {
        if (!isDefined(text)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm: norm2,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm2 } = value;
      const { isMatch, score, indices } = searcher.searchIn(text);
      if (isMatch) {
        matches.push({ score, key, value: text, norm: norm2, indices });
      }
    }
    return matches;
  }
}
Fuse.version = "6.6.2";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
{
  Fuse.parseQuery = parse;
}
{
  register(ExtendedSearch);
}
const _hoisted_1$4 = { class: "text-2xl p-2 mr-3 rounded bg-white text-black" };
const _hoisted_2$3 = ["innerHTML"];
const _hoisted_3$2 = { class: "h5 m-0" };
const _hoisted_4$2 = { class: "text-xs dark:text-gray-400" };
const _sfc_main$6$1 = {
  props: ["commandfilter"],
  emits: ["replace-block"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const visiblity = ref(false);
    const outercontainer = ref(null);
    const innercontainer = ref(null);
    const curIndex = ref(0);
    const commandItems = ref([
      {
        commandName: "Text",
        blockType: "TextBlock",
        commandHelp: "Just start writing with plain text.",
        icon: '<i class="bi bi-text-paragraph"></i>',
        structure: {
          component: "BraveBlockText",
          data: {
            selfData: {
              content: "",
              class: "text-base"
            },
            childData: []
          }
        }
      },
      {
        commandName: "Heading 1 ",
        blockType: "TextBlock",
        commandHelp: "Big Section heading.",
        icon: '<i class="bi bi-type-h1"></i>',
        structure: {
          component: "BraveBlockText",
          data: {
            selfData: {
              content: "",
              tag: "h1",
              class: ""
            },
            childData: []
          }
        }
      },
      {
        commandName: "Flex",
        blockType: "FlexBlock",
        commandHelp: "Adds Flex container.",
        icon: '<i class="bi bi-type-h1"></i>',
        structure: {
          component: "BraveBlockElement",
          data: {
            selfData: {
              content: "",
              tag: "div",
              class: "flex"
            },
            childData: []
          }
        }
      },
      {
        commandName: "Heading 2",
        blockType: "TextBlock",
        commandHelp: "Medium Section heading.",
        icon: '<i class="bi bi-type-h2"></i>',
        structure: {
          component: "BraveBlockText",
          data: {
            selfData: {
              content: "",
              tag: "h2",
              class: ""
            },
            childData: []
          }
        }
      },
      {
        commandName: "Heading 3",
        blockType: "TextBlock",
        commandHelp: "Small Section heading.",
        icon: '<i class="bi bi-type-h3"></i>',
        structure: {
          component: "BraveBlockText",
          data: {
            selfData: {
              content: "",
              tag: "h3",
              class: ""
            },
            childData: []
          }
        }
      },
      {
        commandName: "Image",
        blockType: "ImageBlock",
        commandHelp: "Upload or Embed with a link.",
        icon: '<i class="bi bi-card-image"></i>',
        structure: {
          component: "BraveBlockText",
          data: {
            selfData: {
              content: "Image Block",
              class: "text-xl"
            },
            childData: []
          }
        }
      },
      {
        commandName: "div",
        blockType: "DivBlock",
        commandHelp: "Simple Div Block",
        icon: '<i class="bi bi-square"></i>',
        structure: {
          component: "BraveBlockElement",
          data: {
            selfData: {
              content: "Group",
              class: "border-2 border-gray-300 border-dashed p-2"
            },
            childData: []
          }
        }
      },
      {
        commandName: "Group",
        blockType: "TextBlock",
        commandHelp: "Group the Block into a Container",
        icon: '<i class="bi bi-square"></i>',
        structure: {
          component: "BraveBlockText",
          data: {
            selfData: {
              content: "Group",
              class: "text-xl"
            },
            childData: []
          }
        }
      },
      {
        commandName: "Columns",
        blockType: "ColumnBlock",
        commandHelp: "Divide the Page into Columns",
        icon: '<i class="bi bi-layout-three-columns"></i>',
        structure: {
          component: "Column",
          data: {
            selfData: {
              content: "Heading 1",
              class: "text-xl"
            },
            childData: []
          }
        }
      }
    ]);
    const suggestions = computed(() => {
      const fuse = new Fuse(commandItems.value, {
        keys: ["blockType", "commandHelp", "commandName"]
      });
      var results = fuse.search(props.commandfilter.slice(1));
      console.log(props.commandfilter.slice(1));
      var results2 = results.map(function(item) {
        return item.item;
      });
      setTimeout(() => {
        calcSetPostion();
      }, 10);
      curIndex.value = 0;
      return results.length > 0 ? results2 : commandItems.value;
    });
    function calcSetPostion() {
      if (outercontainer.value.nodeName == "DIV") {
        console.log("vaues", outercontainer.value);
        computePosition(outercontainer.value, innercontainer.value, {
          placement: "bottom-start",
          middleware: [
            flip(),
            offset(({ reference, floating, placement }) => placement === "top-start" ? 50 : 10),
            size({
              apply({ width, height, reference, floating }) {
                Object.assign(innercontainer.value.style, {
                  maxWidth: `${width}px`,
                  maxHeight: `${height}px`
                });
              }
            }),
            shift({ padding: 5 })
          ]
        }).then(({ x, y: y2 }) => {
          Object.assign(innercontainer.value.style, {
            left: `${x}px`,
            top: `${y2}px`
          });
        });
      }
    }
    function show() {
      document.body.style.overflow = "hidden";
      this.visiblity = true;
    }
    function hide() {
      document.body.style.overflow = "auto";
      this.visiblity = false;
    }
    function scrollToActive() {
      setTimeout(() => {
        const collectionItems = document.getElementsByClassName("active-item");
        collectionItems[0].scrollIntoViewIfNeeded(false);
      }, 10);
    }
    function selectCommand() {
      this.$emit("replace-block", suggestions.value[curIndex.value]);
    }
    function goDown() {
      console.log("Go Down");
      if (this.suggestions.length - 1 > this.curIndex) {
        this.curIndex++;
      } else {
        this.curIndex = 0;
      }
      this.scrollToActive();
    }
    function goUp() {
      console.log("Go Up");
      console.log("Go Down");
      if (this.curIndex > 0) {
        this.curIndex--;
      } else {
        this.curIndex = this.suggestions.length - 1;
      }
      this.scrollToActive();
    }
    expose({
      scrollToActive,
      calcSetPostion,
      outercontainer,
      innercontainer,
      suggestions,
      props,
      show,
      hide,
      visiblity,
      goDown,
      goUp,
      commandItems,
      curIndex,
      selectCommand,
      emit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        contenteditable: "false",
        ref_key: "outercontainer",
        ref: outercontainer,
        class: "relative"
      }, [
        visiblity.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref_key: "innercontainer",
          ref: innercontainer,
          class: "absolute w-72 dark:bg-slate-900 border dark:border-slate-800 py-2 rounded-lg shadow-lg dark:text-slate-300 text-black bg-white text-base overflow-y-auto scrollbar-thin dark:scrollbar-thumb-slate-700 dark:scrollbar-track-slate-500 scrollbar-thumb-slate-500 scrollbar-track-slate-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(suggestions), (com, index) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-2 px-3 flex", { "dark:bg-slate-800 bg-slate-200 active-item": index == curIndex.value }]),
              key: index
            }, [
              createElementVNode("div", null, [
                createElementVNode("div", _hoisted_1$4, [
                  createElementVNode("div", {
                    innerHTML: com.icon
                  }, null, 8, _hoisted_2$3)
                ])
              ]),
              createElementVNode("div", null, [
                createElementVNode("div", _hoisted_3$2, toDisplayString(com.commandName), 1),
                createElementVNode("div", _hoisted_4$2, toDisplayString(com.commandHelp), 1)
              ])
            ], 2);
          }), 128))
        ], 512)) : createCommentVNode("", true)
      ], 512);
    };
  }
};
function replaceAll(str, search2, replacement) {
  return str.split(search2).join(replacement);
}
const _sfc_main$5$1 = defineComponent({
  name: "BraveContentEditable",
  props: {
    "tag": {
      type: String,
      default: "div"
    },
    "contenteditable": {
      type: Boolean,
      default: true
    },
    "modelValue": String,
    "noHTML": {
      type: Boolean,
      default: true
    },
    "noNL": {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "returned": null,
    "update:modelValue": null,
    "show-commands": null,
    "hide-commands": null,
    "move-content-to-row-above": null,
    "delete-block": null,
    "keyup": null,
    "keydown": null,
    "select-command": null
  },
  setup(props, { emit }) {
    const element = ref(null);
    const commandMode = ref(false);
    function currentContent() {
      if (element.value != null) {
        return props.noHTML ? element.value.innerText : element.value.innerHTML;
      } else {
        return "";
      }
    }
    function updateContent(newcontent) {
      if (props.noHTML) {
        element.value.innerText = newcontent;
      } else {
        element.value.innerHTML = newcontent;
      }
    }
    function update(event) {
      emit("update:modelValue", currentContent());
    }
    function onPaste(event) {
      event.preventDefault();
      let text = (event.originalEvent || event).clipboardData.getData("text/plain");
      if (props.noNL) {
        text = replaceAll(text, "\r\n", " ");
        text = replaceAll(text, "\n", " ");
        text = replaceAll(text, "\r", " ");
      }
      window.document.execCommand("insertText", false, text);
    }
    function setFocus() {
      this.setCursorToEnd();
    }
    function getCaretData(el, position) {
      var node;
      var nodes = this.getAllTextnodes(el);
      console.log("all nodes");
      console.log(nodes);
      console.log(el);
      for (var n = 0; n < nodes.length; n++) {
        if (position > nodes[n].nodeValue.length && nodes[n + 1]) {
          position -= nodes[n].nodeValue.length;
        } else {
          node = nodes[n];
          break;
        }
      }
      return { node, position };
    }
    function getAllTextnodes(el) {
      var treeWalker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, { acceptNode: function() {
        return NodeFilter.FILTER_ACCEPT;
      } }, false);
      var nodeList = [];
      var currentNode = treeWalker.currentNode;
      currentNode = treeWalker.nextNode();
      while (currentNode) {
        nodeList.push(currentNode);
        currentNode = treeWalker.nextNode();
      }
      return nodeList;
    }
    function addContent(content) {
      var rangeForCursor = document.createRange();
      rangeForCursor.selectNodeContents(this.$refs.element.childNodes[0]);
      var oldContent = rangeForCursor.toString();
      var curPos = oldContent.length;
      var NodeNodetype = this.$refs.element.childNodes[this.$refs.element.childNodes.length - 1].nodeType;
      if (NodeNodetype == 3) {
        this.$refs.element.childNodes[this.$refs.element.childNodes.length - 1].nodeValue += content;
      }
      if (NodeNodetype == 1) {
        var node = document.createTextNode(content);
        this.$refs.element.childNodes[this.$refs.element.childNodes.length - 1].appendChild(node);
      }
      this.setCursorToPosition(curPos);
    }
    function setCursorToPosition(CurPosition) {
      if (this.valueText != "") {
        var data = this.getCaretData(this.$refs.element, CurPosition);
        this.setCaretPosition(data);
      }
    }
    function setCaretPosition(d2) {
      var sel = window.getSelection(), range = document.createRange();
      range.setStart(d2.node, d2.position);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    function setCursorToStart() {
      if (currentContent().trim().length) {
        this.setCursorToPosition(0);
      } else {
        this.setFocus();
      }
    }
    function setCursorToEnd() {
      var range = document.createRange();
      var sel = window.getSelection();
      range.selectNodeContents(this.$refs.element);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
      this.$refs.element.focus();
    }
    function deleteChar(e) {
      if (currentContent().trim() == "") {
        this.$emit("delete-block");
      }
      let _range = document.getSelection().getRangeAt(0);
      let range = _range.cloneRange();
      if (this.$refs.element.childNodes.length > 0) {
        range.selectNodeContents(this.$refs.element.childNodes[0]);
        var content = range.toString();
        range.setEnd(_range.endContainer, _range.endOffset);
        var pos = range.toString().length;
        if (pos == 0) {
          e.preventDefault();
          this.$emit("move-content-to-row-above", content);
        }
      }
    }
    function onKeyUp(event) {
      if (commandMode.value) {
        event.preventDefault();
        emit("keyup", currentContent());
      }
    }
    function onKeyDown(event) {
      if (commandMode.value) {
        event.preventDefault();
        emit("keydown", currentContent());
      }
    }
    function onKeypress(event) {
      if (event.key == "Enter" && props.noNL) {
        event.preventDefault();
        this.onEnterEditor();
      }
    }
    function onEnterEditor() {
      if (commandMode.value) {
        this.$emit("select-command");
      } else {
        let _range = document.getSelection().getRangeAt(0);
        let finalRange = document.getSelection().getRangeAt(0);
        let range = _range.cloneRange();
        console.log(this);
        console.log(element);
        console.log("shishir");
        console.log(this.$refs);
        console.log("shishir");
        if (this.$refs.element.childNodes.length > 0) {
          range.selectNodeContents(this.$refs.element.childNodes[this.$refs.element.childNodes.length - 1]);
          finalRange.setStart(_range.endContainer, _range.endOffset);
          finalRange.setEnd(range.endContainer, range.endOffset);
          emit("returned", finalRange.toString().trim());
          finalRange.deleteContents();
        } else {
          emit("returned", "");
        }
      }
    }
    onMounted(() => {
      var _a;
      updateContent((_a = props.modelValue) != null ? _a : "");
    });
    watch(() => props.modelValue, (newval, oldval) => {
      if (newval != currentContent()) {
        updateContent(newval != null ? newval : "");
      }
      if (newval != "" && newval.charAt(0) == "/") {
        console.log("Command Mode Active");
        commandMode.value = true;
        emit("show-commands", newval);
      } else {
        console.log("Command Mode Deactivated");
        commandMode.value = false;
        emit("hide-commands", newval);
      }
    });
    return {
      update,
      onPaste,
      onKeypress,
      onKeyUp,
      onKeyDown,
      setFocus,
      deleteChar,
      setCursorToEnd,
      setCursorToPosition,
      addContent,
      getCaretData,
      setCaretPosition,
      setCursorToStart,
      getAllTextnodes,
      onEnterEditor,
      commandMode,
      element
    };
  }
});
const _hoisted_1$3 = { contenteditable: "false" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
      style: { "outline": "none" },
      placeholder: "Type '/' for Commands",
      contenteditable: _ctx.contenteditable,
      onInput: _ctx.update,
      onBlur: _ctx.update,
      onPaste: _ctx.onPaste,
      onKeypress: _cache[0] || (_cache[0] = ($event) => _ctx.onKeypress($event)),
      onKeydown: [
        _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => _ctx.$emit("delete-block"), ["exact", "ctrl", "prevent", "stop"]), ["delete"])),
        _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => _ctx.deleteChar($event), ["exact"]), ["delete"])),
        _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => _ctx.onKeyUp($event), ["exact"]), ["up"])),
        _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => _ctx.onKeyDown($event), ["exact"]), ["down"]))
      ],
      ref: "element"
    }, null, 8, ["contenteditable", "onInput", "onBlur", "onPaste"]))
  ]);
}
var BraveContentEditable = /* @__PURE__ */ _export_sfc$1(_sfc_main$5$1, [["render", _sfc_render$5], ["__scopeId", "data-v-110fdc6f"]]);
const _sfc_main$4$1 = {
  components: { BlockSelector: _sfc_main$6$1, BraveContentEditable },
  name: "BraveBlockText",
  props: ["modelValue"],
  emits: [
    "update:modelValue",
    "insert-sibling",
    "deleteBlock",
    "move-content-to-row-above",
    "replace-block"
  ],
  created() {
    console.log("justcreated");
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  },
  data() {
    return {
      isEditable: true,
      message: "hello"
    };
  },
  methods: {
    getHTML() {
      let thisHtml = "<" + this.value.selfData.tag + " class='" + this.value.selfData.class + "'>" + this.value.selfData.content + "</" + this.value.selfData.tag + ">\n";
      return thisHtml;
    },
    setFocus() {
      this.$refs.editable.setFocus();
    },
    addContent(content) {
      this.$refs.editable.addContent(content);
    },
    setCursorToStart() {
      this.$refs.editable.setCursorToStart();
    },
    enterPressed(payload) {
      var sampleNode = {
        component: "BraveBlockText",
        data: {
          selfData: {
            content: payload,
            class: "text-lg"
          },
          childData: {}
        }
      };
      this.$emit("insert-sibling", { payload: sampleNode });
    }
  }
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BraveContentEditable = resolveComponent("BraveContentEditable");
  const _component_BlockSelector = resolveComponent("BlockSelector");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_BraveContentEditable, {
      onShowCommands: _cache[0] || (_cache[0] = ($event) => _ctx.$refs.blockSelector.show()),
      onHideCommands: _cache[1] || (_cache[1] = ($event) => _ctx.$refs.blockSelector.hide()),
      onDeleteBlock: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("deleteBlock")),
      onKeyup: _cache[3] || (_cache[3] = ($event) => _ctx.$refs.blockSelector.goUp()),
      onSelectCommand: _cache[4] || (_cache[4] = ($event) => _ctx.$refs.blockSelector.selectCommand()),
      tag: $options.value.selfData.tag,
      onKeydown: _cache[5] || (_cache[5] = ($event) => _ctx.$refs.blockSelector.goDown()),
      onMoveContentToRowAbove: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("move-content-to-row-above", $event)),
      ref: "editable",
      class: normalizeClass($options.value.selfData.class),
      contenteditable: $data.isEditable,
      modelValue: $options.value.selfData.content,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $options.value.selfData.content = $event),
      noNL: true,
      noHTML: false,
      onReturned: $options.enterPressed
    }, null, 8, ["tag", "class", "contenteditable", "modelValue", "onReturned"]),
    createVNode(_component_BlockSelector, {
      ref: "blockSelector",
      onReplaceBlock: _cache[8] || (_cache[8] = ($event) => _ctx.$emit("replace-block", $event)),
      commandfilter: $options.value.selfData.content
    }, null, 8, ["commandfilter"])
  ], 64);
}
var BraveBlockText = /* @__PURE__ */ _export_sfc$1(_sfc_main$4$1, [["render", _sfc_render$4]]);
const _sfc_main$3$1 = {
  name: "ToolbarLink",
  directives: { clickoutside },
  data: function() {
    return {
      lastRange: null,
      closestAnchor: null,
      visibility: false,
      currentLink: null
    };
  },
  created: function() {
    var self2 = this;
    document.addEventListener("selectionchange", () => {
      if (self2.visibility != true) {
        var selection = document.getSelection();
        if (selection.anchorNode != null && selection.anchorNode.parentNode != void 0 && selection.anchorNode.parentNode.isContentEditable) {
          var range = selection.getRangeAt(0);
          var clientRects = range.getClientRects();
          if (clientRects[0] != void 0)
            ;
          self2.lastRange = document.getSelection().getRangeAt(0);
          var closestAnchor = null;
          closestAnchor = selection.anchorNode.parentNode.closest("a");
          if (closestAnchor != void 0) {
            self2.currentLink = closestAnchor.getAttribute("href");
            self2.closestAnchor = closestAnchor;
          } else {
            self2.currentLink = null;
          }
        }
      }
    });
    window.addEventListener("scroll", function() {
      var selection = document.getSelection();
      if (selection.anchorNode != null && selection.anchorNode.parentNode.isContentEditable) {
        var range = selection.getRangeAt(0);
        var clientRects = range.getClientRects();
        if (clientRects[0] != void 0)
          ;
      }
    });
  },
  methods: {
    calcToolPos: function(clientRects) {
      const virtualEl = {
        getBoundingClientRect() {
          return {
            x: clientRects[0].x,
            y: clientRects[0].y,
            top: clientRects[0].top,
            left: clientRects[0].left,
            bottom: clientRects[0].bottom,
            right: clientRects[0].right,
            width: clientRects[0].width,
            height: clientRects[0].height
          };
        }
      };
      const toolbar = this.$refs.floatingToolBar;
      computePosition(virtualEl, toolbar, {
        placement: "top-center",
        middleware: [offset(6), flip(), shift({ padding: 5 })]
      }).then(({ x, y: y2 }) => {
        Object.assign(toolbar.style, {
          left: `${x}px`,
          top: `${y2}px`
        });
      });
    },
    calcToolPos2: function(clientRects) {
      var barWidth = 400;
      if (this.$refs.floatingToolBar != void 0) {
        barWidth = this.$refs.floatingToolBar.clientWidth;
      }
      if (clientRects[0].left + barWidth + 20 > window.innerWidth) {
        this.styleObject.left = "auto";
        this.styleObject.top = clientRects[0].bottom + 10 + "px";
        this.styleObject.right = "20px";
      } else {
        this.styleObject.left = clientRects[0].left + "px";
        this.styleObject.top = clientRects[0].bottom + 10 + "px";
        this.styleObject.right = "auto";
      }
    },
    showToolBar() {
      this.visibility = true;
      var selection = document.getSelection();
      if (selection.anchorNode != null && selection.anchorNode.parentNode.isContentEditable) {
        var range = selection.getRangeAt(0);
        var clientRects = range.getClientRects();
        if (clientRects[0] != void 0) {
          this.calcToolPos(clientRects);
        }
      }
      document.execCommand("BackColor", false, "#448AFF");
      document.execCommand("foreColor", false, "white");
      this.lastRange = document.getSelection().getRangeAt(0);
    },
    removeLink() {
      this.closestAnchor.parentNode.replaceChild(document.createTextNode(this.closestAnchor.innerHTML), this.closestAnchor);
    },
    applyLink() {
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(this.lastRange);
      document.execCommand("createlink", false, this.currentLink);
      document.execCommand("removeFormat", false, null);
      this.visibility = false;
      window.getSelection().removeAllRanges();
    },
    away() {
      if (this.visibility) {
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(this.lastRange);
        document.execCommand("removeFormat", false, null);
        this.visibility = false;
      }
    }
  }
};
const _hoisted_1$2 = {
  ref: "floatingToolBar",
  class: "text-base px-2 py-1 fixed z-40 dark:bg-slate-800 border dark:border-slate-600 rounded-sm shadow dark:text-slate-300 bg-white link-editor-bar"
};
const _hoisted_2$2 = { class: "flex items-center flex-wrap" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createElementBlock("div", null, [
    withDirectives((openBlock(), createElementBlock("div", _hoisted_1$2, [
      createElementVNode("div", _hoisted_2$2, [
        withDirectives(createElementVNode("input", {
          type: "text",
          placeholder: "Paste or type link here",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.currentLink = $event),
          onKeypress: _cache[1] || (_cache[1] = withKeys(($event) => $options.applyLink(), ["enter"])),
          class: "block p-2 text-gray-900 bg-gray-50 rounded-sm border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }, null, 544), [
          [vModelText, _ctx.currentLink]
        ]),
        createElementVNode("div", null, [
          createElementVNode("div", {
            onClick: _cache[2] || (_cache[2] = ($event) => $options.applyLink()),
            class: "select-none dark:bg-slate-900 rounded-r-sm dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer w-100 py-2 px-4 text-sm"
          }, "Apply")
        ])
      ])
    ])), [
      [
        _directive_clickoutside,
        $options.away,
        void 0,
        {
          prevent: true,
          stop: true
        }
      ],
      [vShow, _ctx.visibility]
    ])
  ]);
}
var ToolbarLink = /* @__PURE__ */ _export_sfc$1(_sfc_main$3$1, [["render", _sfc_render$3]]);
const _sfc_main$2$1 = {
  data: function() {
    return {
      lastRange: null,
      closestAnchor: null,
      visibility: false,
      currentLink: null,
      anchorNode: null,
      styleObject: {
        left: "0px",
        top: "0px",
        right: "auto"
      }
    };
  },
  created: function() {
    var self2 = this;
    document.addEventListener("selectionchange", () => {
      var selection = document.getSelection();
      if (selection.anchorNode != null && selection.anchorNode.parentNode != void 0 && selection.anchorNode.parentNode.isContentEditable) {
        var range = selection.getRangeAt(0);
        var clientRects = range.getClientRects();
        if (clientRects[0] != void 0) {
          self2.calcToolPos(clientRects);
        }
        self2.lastRange = document.getSelection().getRangeAt(0);
        var closestAnchor = null;
        closestAnchor = selection.anchorNode.parentNode.closest("a");
        if (closestAnchor != void 0) {
          self2.currentLink = closestAnchor.getAttribute("href");
          self2.visibility = true;
          self2.closestAnchor = closestAnchor;
          self2.anchorNode = selection.anchorNode;
        } else {
          self2.currentLink = null;
          self2.visibility = false;
        }
      } else {
        self2.visibility = false;
      }
    });
    window.addEventListener("scroll", function() {
      var selection = document.getSelection();
      if (selection.anchorNode != null && selection.anchorNode.parentNode.isContentEditable) {
        var range = selection.getRangeAt(0);
        var clientRects = range.getClientRects();
        if (clientRects[0] != void 0) {
          self2.calcToolPos(clientRects);
        }
        self2.visibility = true;
      }
    });
  },
  methods: {
    calcToolPos: function(clientRects) {
      var barWidth = 400;
      if (this.$refs.floatingToolBar != void 0) {
        barWidth = this.$refs.floatingToolBar.clientWidth;
      }
      if (clientRects[0].left + barWidth + 20 > window.innerWidth) {
        this.styleObject.left = "auto";
        this.styleObject.top = clientRects[0].bottom + "px";
        this.styleObject.right = "20px";
      } else {
        this.styleObject.left = clientRects[0].left + "px";
        this.styleObject.top = clientRects[0].bottom + "px";
        this.styleObject.right = "auto";
      }
    },
    removeLink() {
      var parentContentEditable = this.anchorNode.parentNode.closest("[contenteditable=true]");
      this.closestAnchor.parentNode.replaceChild(document.createTextNode(this.closestAnchor.innerHTML), this.closestAnchor);
      var event = document.createEvent("HTMLEvents");
      event.initEvent("input", true, true);
      parentContentEditable.dispatchEvent(event);
      this.visibility = false;
    },
    showLinkToolBar: function() {
      const selection = window.getSelection();
      selection.removeAllRanges();
      const range = document.createRange();
      range.selectNodeContents(this.anchorNode);
      selection.addRange(range);
      this.visibility = false;
      var self2 = this;
      self2.$emit("show-link-toolbar");
      setTimeout(function() {
        self2.visibility = false;
      }, 10);
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-e12c4c18"), n = n(), popScopeId(), n);
const _hoisted_1$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, [
  /* @__PURE__ */ createElementVNode("i", { class: "bi bi-globe pl-1" })
], -1));
const _hoisted_2$1 = { class: "py-1 px-2 link-preview" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  class: "bi bi-pencil",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    "fill-rule": "evenodd",
    d: "M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
  }),
  /* @__PURE__ */ createElementVNode("path", {
    "fill-rule": "evenodd",
    d: "M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
  })
], -1));
const _hoisted_4$1 = [
  _hoisted_3$1
];
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  class: "bi bi-trash",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" }),
  /* @__PURE__ */ createElementVNode("path", {
    "fill-rule": "evenodd",
    d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
  })
], -1));
const _hoisted_6$1 = [
  _hoisted_5$1
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    _ctx.visibility ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "text-base px-2 fixed z-40 dark:bg-slate-800 border dark:border-slate-600 rounded-sm shadow dark:text-slate-300 bg-white link-editor-bar flex items-center",
      ref: "floatingToolBar",
      style: normalizeStyle([_ctx.styleObject, { "z-index": "1000" }])
    }, [
      _hoisted_1$1,
      createElementVNode("div", _hoisted_2$1, toDisplayString(_ctx.currentLink), 1),
      createElementVNode("div", {
        class: "select-none rounded-r-sm dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer w-100 py-2 px-2 text-sm",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.showLinkToolBar && $options.showLinkToolBar(...args))
      }, _hoisted_4$1),
      createElementVNode("div", {
        class: "select-none rounded-r-sm dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer w-100 py-2 px-2 text-sm",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.removeLink && $options.removeLink(...args))
      }, _hoisted_6$1)
    ], 4)) : createCommentVNode("", true)
  ]);
}
var ToolbarPreviewLink = /* @__PURE__ */ _export_sfc$1(_sfc_main$2$1, [["render", _sfc_render$2], ["__scopeId", "data-v-e12c4c18"]]);
const _sfc_main$1$1 = {
  created: function() {
    var self2 = this;
    document.addEventListener("selectionchange", () => {
      var selection = document.getSelection();
      if (!selection.isCollapsed && selection.anchorNode.parentNode.isContentEditable) {
        var range = selection.getRangeAt(0);
        var clientRects = range.getClientRects();
        self2.visibility = true;
        self2.calcToolPos(clientRects);
      } else {
        self2.visibility = false;
      }
    });
    window.addEventListener("scroll", function() {
      var selection = document.getSelection();
      if (!selection.isCollapsed && selection.anchorNode.parentNode.isContentEditable) {
        var range = selection.getRangeAt(0);
        var clientRects = range.getClientRects();
        self2.visibility = true;
        self2.calcToolPos(clientRects);
      } else {
        self2.visibility = false;
      }
    });
  },
  components: {
    BraveDropMenu: BraveDropMenu$2
  },
  data: function() {
    return {
      anchorUrl: "",
      lastRange: null,
      visibility: false
    };
  },
  methods: {
    calcToolPos: function(clientRects) {
      if (this.visibility) {
        const virtualEl = {
          getBoundingClientRect() {
            return {
              x: clientRects[0].x,
              y: clientRects[0].y,
              top: clientRects[0].top,
              left: clientRects[0].left,
              bottom: clientRects[0].bottom,
              right: clientRects[0].right,
              width: clientRects[0].width,
              height: clientRects[0].height
            };
          }
        };
        const toolbar = this.$refs.floatingToolBar;
        computePosition(virtualEl, toolbar, {
          placement: "top-center",
          middleware: [offset(6), flip(), shift({ padding: 5 })]
        }).then(({ x, y: y2 }) => {
          Object.assign(toolbar.style, {
            left: `${x}px`,
            top: `${y2}px`
          });
        });
      }
    },
    addLink: function() {
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(this.lastRange);
      document.execCommand("createlink", false, this.anchorUrl);
    },
    onLinkclick: function() {
      this.lastRange = document.getSelection().getRangeAt(0);
    },
    showLinkToolBar: function() {
      this.visibility = false;
      this.$emit("show-link-toolbar");
    }
  }
};
const _hoisted_1 = { class: "text-toolbar-small" };
const _hoisted_2 = {
  ref: "floatingToolBar",
  class: "text-2xl fixed flex items-center flex-wrap z-40 dark:bg-slate-800 border dark:border-slate-600 px-1 rounded shadow-lg dark:text-slate-300 bg-white",
  style: { "z-index": "100" }
};
const _hoisted_3 = /* @__PURE__ */ createElementVNode("div", {
  onclick: "document.execCommand('bold', false)",
  style: { "user-select": "none", "-moz-user-select": "none", "-webkit-user-select": "none" },
  class: "select-none dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer w-100 py-1 px-1"
}, [
  /* @__PURE__ */ createElementVNode("i", { class: "bi bi-type-bold" })
], -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("div", {
  onclick: "document.execCommand('italic', false)",
  style: { "user-select": "none", "-moz-user-select": "none", "-webkit-user-select": "none" },
  class: "select-none dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer w-100 py-1 px-1"
}, [
  /* @__PURE__ */ createElementVNode("i", { class: "bi bi-type-italic" })
], -1);
const _hoisted_5 = /* @__PURE__ */ createElementVNode("div", {
  onclick: "document.execCommand('underline', false)",
  style: { "user-select": "none", "-moz-user-select": "none", "-webkit-user-select": "none" },
  class: "select-none dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer w-100 py-1 px-1"
}, [
  /* @__PURE__ */ createElementVNode("i", { class: "bi bi-type-underline" })
], -1);
const _hoisted_6 = /* @__PURE__ */ createElementVNode("div", {
  onclick: "document.execCommand('justifyLeft', false)",
  style: { "user-select": "none", "-moz-user-select": "none", "-webkit-user-select": "none" },
  class: "select-none dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer w-100 py-1 px-1"
}, [
  /* @__PURE__ */ createElementVNode("i", { class: "bi bi-text-left" })
], -1);
const _hoisted_7 = /* @__PURE__ */ createElementVNode("div", {
  onclick: "document.execCommand('justifyCenter', false)",
  style: { "user-select": "none", "-moz-user-select": "none", "-webkit-user-select": "none" },
  class: "select-none dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer w-100 py-1 px-1"
}, [
  /* @__PURE__ */ createElementVNode("i", { class: "bi bi-text-center" })
], -1);
const _hoisted_8 = /* @__PURE__ */ createElementVNode("div", {
  onclick: "document.execCommand('justifyRight', false)",
  style: { "user-select": "none", "-moz-user-select": "none", "-webkit-user-select": "none" },
  class: "select-none dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer w-100 py-1 px-1"
}, [
  /* @__PURE__ */ createElementVNode("i", { class: "bi bi-text-right" })
], -1);
const _hoisted_9 = /* @__PURE__ */ createElementVNode("div", {
  onclick: "document.execCommand('justifyFull', false)",
  style: { "user-select": "none", "-moz-user-select": "none", "-webkit-user-select": "none" },
  class: "select-none dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer w-100 py-1 px-1"
}, [
  /* @__PURE__ */ createElementVNode("i", { class: "bi bi-justify" })
], -1);
const _hoisted_10 = /* @__PURE__ */ createElementVNode("div", {
  onclick: "document.execCommand('insertOrderedList', false)",
  style: { "user-select": "none", "-moz-user-select": "none", "-webkit-user-select": "none" },
  class: "select-none dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer w-100 py-1 px-1"
}, [
  /* @__PURE__ */ createElementVNode("i", { class: "bi bi-list-ol" })
], -1);
const _hoisted_11 = /* @__PURE__ */ createElementVNode("div", {
  onclick: "document.execCommand('insertUnorderedList', false)",
  style: { "user-select": "none", "-moz-user-select": "none", "-webkit-user-select": "none" },
  class: "select-none dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer w-100 py-1 px-1"
}, [
  /* @__PURE__ */ createElementVNode("i", { class: "bi bi-list-ul" })
], -1);
const _hoisted_12 = /* @__PURE__ */ createElementVNode("div", {
  title: "More Options",
  class: "btn btn-lg px-1 btn-light rounded-0 d-flex align-items-center"
}, [
  /* @__PURE__ */ createElementVNode("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    class: "bi bi-three-dots-vertical",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
    })
  ])
], -1);
const _hoisted_13 = /* @__PURE__ */ createElementVNode("div", { class: "w-44 dark:bg-slate-900 border dark:border-slate-800 py-2 rounded-lg shadow-lg dark:text-slate-300 bg-white text-base" }, [
  /* @__PURE__ */ createElementVNode("div", {
    onclick: "document.execCommand('indent', false)",
    class: "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3"
  }, [
    /* @__PURE__ */ createElementVNode("i", { class: "bi bi-text-indent-left" }),
    /* @__PURE__ */ createTextVNode(" Indent ")
  ]),
  /* @__PURE__ */ createElementVNode("div", {
    onclick: "document.execCommand('outdent', false)",
    class: "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3"
  }, [
    /* @__PURE__ */ createElementVNode("i", { class: "bi bi-text-indent-right" }),
    /* @__PURE__ */ createTextVNode(" Outdent ")
  ]),
  /* @__PURE__ */ createElementVNode("div", {
    onclick: "document.execCommand('removeFormat', false)",
    class: "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3"
  }, [
    /* @__PURE__ */ createElementVNode("i", { class: "bi bi-eraser-fill" }),
    /* @__PURE__ */ createTextVNode(" Remove Format ")
  ]),
  /* @__PURE__ */ createElementVNode("div", {
    onclick: "document.execCommand('strikeThrough', false)",
    class: "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3"
  }, [
    /* @__PURE__ */ createElementVNode("i", { class: "bi bi-type-strikethrough" }),
    /* @__PURE__ */ createTextVNode(" Strikethrough ")
  ]),
  /* @__PURE__ */ createElementVNode("div", {
    onclick: "document.execCommand('subscript', false)",
    class: "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 pl-8"
  }, " Superscript "),
  /* @__PURE__ */ createElementVNode("div", {
    onclick: "document.execCommand('superscript', false)",
    class: "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 pl-8"
  }, " Superscript ")
], -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BraveDropMenu = resolveComponent("BraveDropMenu");
  return withDirectives((openBlock(), createElementBlock("div", null, [
    createElementVNode("div", _hoisted_1, [
      createElementVNode("div", _hoisted_2, [
        _hoisted_3,
        _hoisted_4,
        _hoisted_5,
        _hoisted_6,
        _hoisted_7,
        _hoisted_8,
        _hoisted_9,
        _hoisted_10,
        _hoisted_11,
        createElementVNode("div", {
          onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.showLinkToolBar && $options.showLinkToolBar(...args), ["prevent", "stop"])),
          style: { "user-select": "none", "-moz-user-select": "none", "-webkit-user-select": "none" },
          class: "select-none dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer w-100 py-1 px-1"
        }, [
          createElementVNode("i", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.onLinkclick && $options.onLinkclick(...args)),
            class: "bi bi-link"
          })
        ]),
        createVNode(_component_BraveDropMenu, { style: { "user-select": "none", "-moz-user-select": "none", "-webkit-user-select": "none" } }, {
          button: withCtx(() => [
            _hoisted_12
          ]),
          menu: withCtx(() => [
            _hoisted_13
          ]),
          _: 1
        })
      ], 512)
    ])
  ], 512)), [
    [vShow, _ctx.visibility]
  ]);
}
var ToolBarRich = /* @__PURE__ */ _export_sfc$1(_sfc_main$1$1, [["render", _sfc_render$1]]);
var SwipeUp$1 = {
  data() {
    return {
      initialYPosition: null
    };
  },
  mounted(el, binding) {
    var tolerance = 50;
    el.addEventListener("touchstart", function(event) {
      el.dataset.initialY = event.touches[0].clientY;
      function hMouseMove(event2) {
        var gap = parseInt(event2.touches[0].clientY) - parseInt(el.dataset.initialY);
        if (Math.abs(gap) > tolerance && gap < 0) {
          binding.value();
          if (event2.cancelable && event2.preventDefault)
            event2.preventDefault();
          if (event2.cancelable && event2.stopPropagation)
            event2.stopPropagation();
          window.removeEventListener("touchmove", hMouseMove, { passive: true });
          window.removeEventListener("touchend", hMouseUp, { passive: true });
        }
      }
      function hMouseUp(e) {
        window.removeEventListener("touchmove", hMouseMove);
        window.removeEventListener("touchend", hMouseUp);
      }
      window.addEventListener("touchmove", hMouseMove);
      window.addEventListener("touchend", hMouseUp);
    }, { passive: true });
    el.addEventListener("mousedown", function(event) {
      console.log("mousedown");
      el.dataset.initialY = event.clientY;
      function hMouseMove(e) {
        var gap = parseInt(e.clientY) - parseInt(el.dataset.initialY);
        if (Math.abs(gap) > tolerance && gap < 0) {
          binding.value();
          window.removeEventListener("mousemove", hMouseMove, { passive: true });
          window.removeEventListener("mouseup", hMouseUp, { passive: true });
        }
      }
      function hMouseUp(e) {
        if (e.stopPropagation)
          e.stopPropagation();
        if (e.preventDefault)
          e.preventDefault();
        window.removeEventListener("mousemove", hMouseMove);
        window.removeEventListener("mouseup", hMouseUp);
      }
      window.addEventListener("mousemove", hMouseMove);
      window.addEventListener("mouseup", hMouseUp);
    }, { passive: true });
  }
};
var SwipeDown$1 = {
  data() {
    return {
      initialYPosition: null
    };
  },
  mounted(el, binding) {
    var tolerance = 50;
    el.addEventListener("touchstart", function(event) {
      el.dataset.initialY = event.touches[0].clientY;
      function hMouseMove(event2) {
        var gap = parseInt(event2.touches[0].clientY) - parseInt(el.dataset.initialY);
        if (Math.abs(gap) > tolerance && gap > 0) {
          binding.value();
          window.removeEventListener("touchmove", hMouseMove, { passive: true });
          window.removeEventListener("touchend", hMouseUp, { passive: true });
        }
      }
      function hMouseUp(e) {
        if (e.stopPropagation)
          e.stopPropagation();
        if (e.preventDefault)
          e.preventDefault();
        window.removeEventListener("touchmove", hMouseMove);
        window.removeEventListener("touchend", hMouseUp);
      }
      window.addEventListener("touchmove", hMouseMove);
      window.addEventListener("touchend", hMouseUp);
    }, { passive: true });
    el.addEventListener("mousedown", function(event) {
      console.log("mousedown");
      el.dataset.initialY = event.clientY;
      function hMouseMove(e) {
        if (e.stopPropagation)
          e.stopPropagation();
        if (e.preventDefault)
          e.preventDefault();
        var gap = parseInt(e.clientY) - parseInt(el.dataset.initialY);
        if (Math.abs(gap) > tolerance && gap > 0) {
          binding.value();
          window.removeEventListener("mousemove", hMouseMove, { passive: true });
          window.removeEventListener("mouseup", hMouseUp, { passive: true });
        }
      }
      function hMouseUp(e) {
        if (e.stopPropagation)
          e.stopPropagation();
        if (e.preventDefault)
          e.preventDefault();
        window.removeEventListener("mousemove", hMouseMove);
        window.removeEventListener("mouseup", hMouseUp);
      }
      window.addEventListener("mousemove", hMouseMove);
      window.addEventListener("mouseup", hMouseUp);
    }, { passive: true });
  }
};
var SwipeUp = {
  data() {
    return {
      initialYPosition: null
    };
  },
  mounted(el, binding) {
    var tolerance = 50;
    el.addEventListener("touchstart", function(event) {
      el.dataset.initialY = event.touches[0].clientY;
      function hMouseMove(event2) {
        var gap = parseInt(event2.touches[0].clientY) - parseInt(el.dataset.initialY);
        if (Math.abs(gap) > tolerance && gap < 0) {
          binding.value();
          if (event2.cancelable && event2.preventDefault)
            event2.preventDefault();
          if (event2.cancelable && event2.stopPropagation)
            event2.stopPropagation();
          window.removeEventListener("touchmove", hMouseMove, { passive: true });
          window.removeEventListener("touchend", hMouseUp, { passive: true });
        }
      }
      function hMouseUp(e) {
        window.removeEventListener("touchmove", hMouseMove);
        window.removeEventListener("touchend", hMouseUp);
      }
      window.addEventListener("touchmove", hMouseMove);
      window.addEventListener("touchend", hMouseUp);
    }, { passive: true });
    el.addEventListener("mousedown", function(event) {
      console.log("mousedown");
      el.dataset.initialY = event.clientY;
      function hMouseMove(e) {
        var gap = parseInt(e.clientY) - parseInt(el.dataset.initialY);
        if (Math.abs(gap) > tolerance && gap < 0) {
          binding.value();
          window.removeEventListener("mousemove", hMouseMove, { passive: true });
          window.removeEventListener("mouseup", hMouseUp, { passive: true });
        }
      }
      function hMouseUp(e) {
        if (e.stopPropagation)
          e.stopPropagation();
        if (e.preventDefault)
          e.preventDefault();
        window.removeEventListener("mousemove", hMouseMove);
        window.removeEventListener("mouseup", hMouseUp);
      }
      window.addEventListener("mousemove", hMouseMove);
      window.addEventListener("mouseup", hMouseUp);
    }, { passive: true });
  }
};
var SwipeDown = {
  data() {
    return {
      initialYPosition: null
    };
  },
  mounted(el, binding) {
    var tolerance = 50;
    el.addEventListener("touchstart", function(event) {
      el.dataset.initialY = event.touches[0].clientY;
      function hMouseMove(event2) {
        var gap = parseInt(event2.touches[0].clientY) - parseInt(el.dataset.initialY);
        if (Math.abs(gap) > tolerance && gap > 0) {
          binding.value();
          window.removeEventListener("touchmove", hMouseMove, { passive: true });
          window.removeEventListener("touchend", hMouseUp, { passive: true });
        }
      }
      function hMouseUp(e) {
        if (e.stopPropagation)
          e.stopPropagation();
        if (e.preventDefault)
          e.preventDefault();
        window.removeEventListener("touchmove", hMouseMove);
        window.removeEventListener("touchend", hMouseUp);
      }
      window.addEventListener("touchmove", hMouseMove);
      window.addEventListener("touchend", hMouseUp);
    }, { passive: true });
    el.addEventListener("mousedown", function(event) {
      console.log("mousedown");
      el.dataset.initialY = event.clientY;
      function hMouseMove(e) {
        if (e.stopPropagation)
          e.stopPropagation();
        if (e.preventDefault)
          e.preventDefault();
        var gap = parseInt(e.clientY) - parseInt(el.dataset.initialY);
        if (Math.abs(gap) > tolerance && gap > 0) {
          binding.value();
          window.removeEventListener("mousemove", hMouseMove, { passive: true });
          window.removeEventListener("mouseup", hMouseUp, { passive: true });
        }
      }
      function hMouseUp(e) {
        if (e.stopPropagation)
          e.stopPropagation();
        if (e.preventDefault)
          e.preventDefault();
        window.removeEventListener("mousemove", hMouseMove);
        window.removeEventListener("mouseup", hMouseUp);
      }
      window.addEventListener("mousemove", hMouseMove);
      window.addEventListener("mouseup", hMouseUp);
    }, { passive: true });
  }
};
const _sfc_main$C = {
  directives: { SwipeUp, SwipeDown },
  inheritAttrs: false,
  props: {
    closeHeight: {
      type: String,
      default: "10%"
    },
    halfHeight: {
      type: String,
      default: "50%"
    },
    fullHeight: {
      type: String,
      default: "90%"
    },
    state: {
      type: String,
      default: "closed"
    }
  },
  data() {
    return {
      overlayOffStyle: {
        opacity: "0 !important",
        pointerEvents: "none"
      },
      closeHeight: this.closeHeight,
      halfOpenHeight: this.halfHeight,
      fullOpenHeight: this.fullHeight,
      panelState: this.state
    };
  },
  computed: {
    bs_style() {
      if (this.panelState == "closed") {
        return {
          height: this.closeHeight
        };
      }
      if (this.panelState == "half") {
        return {
          height: this.halfOpenHeight
        };
      }
      if (this.panelState == "full") {
        return {
          height: this.fullOpenHeight
        };
      }
    }
  },
  watch: {
    state() {
      this.panelState = this.state;
    }
  },
  methods: {
    close() {
      this.panelState = "closed";
    },
    up() {
      console.log("up");
      if (this.panelState == "closed") {
        this.panelState = "half";
      } else if (this.panelState == "half") {
        this.panelState = "full";
      }
    },
    down() {
      console.log("down");
      if (this.panelState == "full") {
        this.panelState = "half";
      } else if (this.panelState == "half") {
        this.panelState = "closed";
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("div", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.close && $options.close(...args)),
      style: normalizeStyle([{ "position": "fixed", "inset": "0px", "background-color": "#000", "opacity": "50%", "transition": "all 0.3s ease-in-out", "z-index": "1000" }, $data.panelState == "closed" ? $data.overlayOffStyle : {}])
    }, null, 4),
    createElementVNode("div", {
      class: normalizeClass(_ctx.$attrs.class),
      style: normalizeStyle([$options.bs_style, { "position": "fixed", "z-index": "1001", "bottom": "0", "width": "100%", "left": "0px", "right": "0px", "transition-duration": "500ms" }])
    }, [
      renderSlot(_ctx.$slots, "default", {
        up: $options.up,
        down: $options.down
      })
    ], 6)
  ], 64);
}
var BraveBottomSheet = /* @__PURE__ */ _export_sfc$1(_sfc_main$C, [["render", _sfc_render]]);
var _export = {
  install(Vue) {
    Vue.directive("BraveBottomSheet", BraveBottomSheet);
    Vue.directive("SwipeUp", SwipeUp$1);
    Vue.directive("SwipeDown", SwipeDown$1);
    Vue.component("BraveDraggable", BraveDraggable);
    Vue.component("BraveTags", BraveTags);
    Vue.component("BraveRadialMenu", BraveRadialMenu$1);
    Vue.component("BraveNumberInput", BraveNumberInput);
    Vue.component("BraveSyntaxHighlighter", BraveSyntaxHighlighter$1);
    Vue.component("BraveSlider", BraveSlider$2);
    Vue.component("BraveSidebarLayout", BraveSidebarLayout);
    Vue.component("BraveTabs", BraveTabs$2);
    Vue.component("BraveThemeSwitcher", BraveThemeSwitcher);
    Vue.component("BraveSelect", BraveSelect$2);
    Vue.component("BraveDropMenu", BraveDropMenu$2);
    Vue.component("BraveGistEmbed", BraveGistEmbed);
    Vue.component("BravePositionDialog", BravePositionDialog);
    Vue.component("BraveDialog", BraveDialog$1);
    Vue.component("BraveField", BraveField);
    Vue.component("BraveBlockTree", BraveBlockTree);
    Vue.component("BraveBlockElement", BraveBlockElement);
    Vue.component("BraveBlockText", BraveBlockText);
    Vue.component("BraveBlockSelector", _sfc_main$6$1);
    Vue.component("BraveContentEditable", BraveContentEditable);
    Vue.component("ToolbarLink", ToolbarLink);
    Vue.component("ToolbarPreviewLink", ToolbarPreviewLink);
    Vue.component("ToolBarRich", ToolBarRich);
  }
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$B = {
  components: { BraveDropMenu: BraveDropMenu$2 },
  created() {
    this.applyByStorage();
  },
  data() {
    return {
      themeMode: true
    };
  },
  watch: {
    themeMode(val) {
      if (val == true) {
        return this.switchToDark(true);
      } else {
        return this.switchToLight(true);
      }
    }
  },
  methods: {
    switchToLight(updateStore) {
      if (updateStore != void 0 && updateStore) {
        localStorage.theme = "light";
      }
      this.iconClass = "bi bi-brightness-high-fill text-blue-500";
      this.mode = "light";
      document.documentElement.classList.remove("dark");
    },
    switchToDark(updateStore) {
      if (updateStore != void 0 && updateStore) {
        localStorage.theme = "dark";
      }
      this.mode = "dark";
      this.iconClass = "bi bi-moon-stars-fill text-yellow-500";
      document.documentElement.classList.add("dark");
    },
    switchToSystem() {
      localStorage.removeItem("theme");
      this.iconClass = "bi bi-display text-grey-300";
      this.applyByStorage();
      this.mode = "system";
    },
    applyByStorage() {
      if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        this.switchToDark(false);
        this.themeMode = true;
      } else {
        this.switchToLight(false);
        this.themeMode = false;
      }
      if (!("theme" in localStorage)) {
        this.mode = "system";
      }
    }
  }
};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-0 right-0 m-3" }, _attrs))}><label for="default-toggle" class="inline-flex relative items-center cursor-pointer"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.themeMode) ? ssrLooseContain($data.themeMode, "") : $data.themeMode) ? " checked" : ""} value="" id="default-toggle" class="sr-only peer"><span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Light</span><div class="px-1 ml-2 w-13 text-sm h-6 flex justify-between items-center bg-blue-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-zinc-800 rounded-full peer dark:bg-gray-700 relative peer-checked:after:left-6 after:transition-all peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-zinc-600"><div>\u{1F31E}</div><div>\u{1F319}</div></div><span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark</span></label></div>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/BraveThemeSwitch.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const BraveThemeSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$z]]);
const _sfc_main$A = {
  emits: ["jumpingToAnchor"]
};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-white flex flex-col space2-y-5 font-light" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi text-xl bi-house me-2 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Home </div>`);
      } else {
        return [
          createVNode("i", { class: "bi text-xl bi-house me-2 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="text-sm tracking-wider py-4">COMPONENTS</div>`);
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/brave_tabs",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-segmented-nav dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Tabs </div>`);
      } else {
        return [
          createVNode("i", { class: "bi bi-segmented-nav dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Tabs ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/brave-bottom-sheet",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-layer-forward dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Bottom Sheet <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"${_scopeId}> New </span></div>`);
      } else {
        return [
          createVNode("i", { class: "bi bi-layer-forward dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, [
            createTextVNode("Bottom Sheet "),
            createVNode("span", { class: "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full" }, " New ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/brave_tags",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-tags dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Tags <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"${_scopeId}> New </span></div>`);
      } else {
        return [
          createVNode("i", { class: "bi bi-tags dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, [
            createTextVNode("Tags "),
            createVNode("span", { class: "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full" }, " New ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/brave_draggable",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi me-2 text-xl bi-arrows-move dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Draggable <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"${_scopeId}> New </span></div>`);
      } else {
        return [
          createVNode("i", { class: "bi me-2 text-xl bi-arrows-move dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, [
            createTextVNode("Draggable "),
            createVNode("span", { class: "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full" }, " New ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/brave_radial_menu",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi me-2 text-xl bi-brightness-low dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Radial Menu <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"${_scopeId}> New </span></div>`);
      } else {
        return [
          createVNode("i", { class: "bi me-2 text-xl bi-brightness-low dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, [
            createTextVNode("Radial Menu "),
            createVNode("span", { class: "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full" }, " New ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/brave_sidebar_layout",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi me-2 text-xl bi-window-sidebar dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Sidebar Layout </div>`);
      } else {
        return [
          createVNode("i", { class: "bi me-2 text-xl bi-window-sidebar dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Sidebar Layout ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/brave_slider",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi me-2 text-xl bi-window-dock dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Slider </div>`);
      } else {
        return [
          createVNode("i", { class: "bi me-2 text-xl bi-window-dock dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Slider ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/bravedialog",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi me-2 text-xl bi-window dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Dialog </div>`);
      } else {
        return [
          createVNode("i", { class: "bi me-2 text-xl bi-window dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Dialog ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/positiondialog",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi me-2 text-xl bi-window-stack dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Position Dialog</div>`);
      } else {
        return [
          createVNode("i", { class: "bi me-2 text-xl bi-window-stack dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Position Dialog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/brave_number_input",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi me-2 text-xl bi-123 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Number Input </div>`);
      } else {
        return [
          createVNode("i", { class: "bi me-2 text-xl bi-123 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Number Input ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/brave_dropmenu",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi me-2 text-xl bi-menu-button-wide dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Drop Menu</div>`);
      } else {
        return [
          createVNode("i", { class: "bi me-2 text-xl bi-menu-button-wide dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Drop Menu")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/brave_select",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi me-2 text-xl bi-menu-button-wide dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Select </div>`);
      } else {
        return [
          createVNode("i", { class: "bi me-2 text-xl bi-menu-button-wide dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Select ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/gistembed",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi me-2 text-xl bi-github dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Gist Embed</div>`);
      } else {
        return [
          createVNode("i", { class: "bi me-2 text-xl bi-github dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Gist Embed")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/brave_syntax_highlighter",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi me-2 text-xl bi-code-square dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Syntax Highlighter</div>`);
      } else {
        return [
          createVNode("i", { class: "bi me-2 text-xl bi-code-square dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Syntax Highlighter")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/brave_field",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi me-2 text-xl bi-ui-checks dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Input Field</div>`);
      } else {
        return [
          createVNode("i", { class: "bi me-2 text-xl bi-ui-checks dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Input Field")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="text-sm tracking-wider py-4">DIRECTIVES</div>`);
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/touch-swipe-up",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi me-2 text-xl bi-chevron-double-up dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Touch Swipe Up</div>`);
      } else {
        return [
          createVNode("i", { class: "bi me-2 text-xl bi-chevron-double-up dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Touch Swipe Up")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/touch-swipe-down",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi me-2 text-xl bi-chevron-double-down dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Touch Swipe Down</div>`);
      } else {
        return [
          createVNode("i", { class: "bi me-2 text-xl bi-chevron-double-down dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Touch Swipe Down")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="text-sm tracking-wider py-4">BLOCK EDITOR</div>`);
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/brave_block_tree",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-list-nested dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Block Tree</div>`);
      } else {
        return [
          createVNode("i", { class: "bi bi-list-nested dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Block Tree")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="text-sm tracking-wider py-4">HELP</div>`);
  _push(ssrRenderComponent(_component_router_link, {
    onClick: ($event) => _ctx.$emit("jumpingToAnchor"),
    to: "/request_a_component",
    class: "flex items-center p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-stars dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId}></i><div class="ml-2"${_scopeId}>Request a Component </div>`);
      } else {
        return [
          createVNode("i", { class: "bi bi-stars dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
          createVNode("div", { class: "ml-2" }, "Request a Component ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SiteNavigation.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const SiteNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$y]]);
const _imports_0$1 = "/assets/logo.4c8b1219.svg";
const _imports_1 = "/assets/shishir_profie.d3b1b1d3.png";
const _sfc_main$z = {
  components: {
    BraveSidebarLayout,
    BraveThemeSwitch,
    SiteNavigation
  }
};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = resolveComponent("client-only");
  const _component_BraveSidebarLayout = resolveComponent("BraveSidebarLayout");
  const _component_router_link = resolveComponent("router-link");
  const _component_SiteNavigation = resolveComponent("SiteNavigation");
  const _component_BraveThemeSwitch = resolveComponent("BraveThemeSwitch");
  const _component_router_view = resolveComponent("router-view");
  _push(ssrRenderComponent(_component_client_only, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BraveSidebarLayout, {
          "sidebar-class": "  bg-slate-900 flex flex-col text-white ",
          "sidebar-width": 300
        }, {
          sidebar: withCtx(({ closeMenu, openMenu }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="p-2 cursor-pointer text-2xl absolute right-0 top-0 md:hidden"${_scopeId2}><i class="bi bi-x-circle"${_scopeId2}></i></div>`);
              _push3(ssrRenderComponent(_component_router_link, { to: "/" }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex-shrink-0 flex items-center p-8"${_scopeId3}><img class="h-7 w-auto"${ssrRenderAttr("src", _imports_0$1)} alt="BraveVue"${_scopeId3}><div class="ml-2 text-lg"${_scopeId3}>BraveVue</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex-shrink-0 flex items-center p-8" }, [
                        createVNode("img", {
                          class: "h-7 w-auto",
                          src: _imports_0$1,
                          alt: "BraveVue"
                        }),
                        createVNode("div", { class: "ml-2 text-lg" }, "BraveVue")
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SiteNavigation, {
                class: "p-5 flex-grow overflow-auto",
                onJumpingToAnchor: closeMenu
              }, null, _parent3, _scopeId2));
              _push3(`<div class="flex-shrink-0 flex border-t dark:border-slate-600 border-cyan-800 p-4"${_scopeId2}><a target="_blank" href="https://iamshishir.com/about-me/" class="flex-shrink-0 w-full group block"${_scopeId2}><div class="flex items-center"${_scopeId2}><div${_scopeId2}><img class="inline-block h-9 w-9 rounded-full"${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId2}></div><div class="ml-3"${_scopeId2}><p class="text-sm font-medium text-white"${_scopeId2}>Built with <i class="bi bi-suit-heart-fill dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"${_scopeId2}></i> by Shishir </p><div class="text-sm text-white mt-1"${_scopeId2}> HIRE ME </div></div></div></a></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "p-2 cursor-pointer text-2xl absolute right-0 top-0 md:hidden",
                  onClick: ($event) => closeMenu()
                }, [
                  createVNode("i", { class: "bi bi-x-circle" })
                ], 8, ["onClick"]),
                createVNode(_component_router_link, { to: "/" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex-shrink-0 flex items-center p-8" }, [
                      createVNode("img", {
                        class: "h-7 w-auto",
                        src: _imports_0$1,
                        alt: "BraveVue"
                      }),
                      createVNode("div", { class: "ml-2 text-lg" }, "BraveVue")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_SiteNavigation, {
                  class: "p-5 flex-grow overflow-auto",
                  onJumpingToAnchor: closeMenu
                }, null, 8, ["onJumpingToAnchor"]),
                createVNode("div", { class: "flex-shrink-0 flex border-t dark:border-slate-600 border-cyan-800 p-4" }, [
                  createVNode("a", {
                    target: "_blank",
                    href: "https://iamshishir.com/about-me/",
                    class: "flex-shrink-0 w-full group block"
                  }, [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("div", null, [
                        createVNode("img", {
                          class: "inline-block h-9 w-9 rounded-full",
                          src: _imports_1,
                          alt: ""
                        })
                      ]),
                      createVNode("div", { class: "ml-3" }, [
                        createVNode("p", { class: "text-sm font-medium text-white" }, [
                          createTextVNode("Built with "),
                          createVNode("i", { class: "bi bi-suit-heart-fill dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
                          createTextVNode(" by Shishir ")
                        ]),
                        createVNode("div", { class: "text-sm text-white mt-1" }, " HIRE ME ")
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          content: withCtx(({ closeMenu, openMenu }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="p-2 cursor-pointer text-2xl inline-block md:hidden"${_scopeId2}><i class="bi bi-three-dots-vertical"${_scopeId2}></i></div><div class=""${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_client_only, null, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_BraveThemeSwitch, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_BraveThemeSwitch)
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_router_view, null, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "p-2 cursor-pointer text-2xl inline-block md:hidden",
                  onClick: ($event) => openMenu()
                }, [
                  createVNode("i", { class: "bi bi-three-dots-vertical" })
                ], 8, ["onClick"]),
                createVNode("div", { class: "" }, [
                  createVNode(_component_client_only, null, {
                    default: withCtx(() => [
                      createVNode(_component_BraveThemeSwitch)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_router_view)
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BraveSidebarLayout, {
            "sidebar-class": "  bg-slate-900 flex flex-col text-white ",
            "sidebar-width": 300
          }, {
            sidebar: withCtx(({ closeMenu, openMenu }) => [
              createVNode("div", {
                class: "p-2 cursor-pointer text-2xl absolute right-0 top-0 md:hidden",
                onClick: ($event) => closeMenu()
              }, [
                createVNode("i", { class: "bi bi-x-circle" })
              ], 8, ["onClick"]),
              createVNode(_component_router_link, { to: "/" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex-shrink-0 flex items-center p-8" }, [
                    createVNode("img", {
                      class: "h-7 w-auto",
                      src: _imports_0$1,
                      alt: "BraveVue"
                    }),
                    createVNode("div", { class: "ml-2 text-lg" }, "BraveVue")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_SiteNavigation, {
                class: "p-5 flex-grow overflow-auto",
                onJumpingToAnchor: closeMenu
              }, null, 8, ["onJumpingToAnchor"]),
              createVNode("div", { class: "flex-shrink-0 flex border-t dark:border-slate-600 border-cyan-800 p-4" }, [
                createVNode("a", {
                  target: "_blank",
                  href: "https://iamshishir.com/about-me/",
                  class: "flex-shrink-0 w-full group block"
                }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", null, [
                      createVNode("img", {
                        class: "inline-block h-9 w-9 rounded-full",
                        src: _imports_1,
                        alt: ""
                      })
                    ]),
                    createVNode("div", { class: "ml-3" }, [
                      createVNode("p", { class: "text-sm font-medium text-white" }, [
                        createTextVNode("Built with "),
                        createVNode("i", { class: "bi bi-suit-heart-fill dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500" }),
                        createTextVNode(" by Shishir ")
                      ]),
                      createVNode("div", { class: "text-sm text-white mt-1" }, " HIRE ME ")
                    ])
                  ])
                ])
              ])
            ]),
            content: withCtx(({ closeMenu, openMenu }) => [
              createVNode("div", {
                class: "p-2 cursor-pointer text-2xl inline-block md:hidden",
                onClick: ($event) => openMenu()
              }, [
                createVNode("i", { class: "bi bi-three-dots-vertical" })
              ], 8, ["onClick"]),
              createVNode("div", { class: "" }, [
                createVNode(_component_client_only, null, {
                  default: withCtx(() => [
                    createVNode(_component_BraveThemeSwitch)
                  ]),
                  _: 1
                }),
                createVNode(_component_router_view)
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$x]]);
const _sfc_main$y = {
  components: { BraveSyntaxHighlighter: BraveSyntaxHighlighter$1 },
  props: {
    langauge: {
      type: String,
      default: "plaintext"
    }
  }
};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveSyntaxHighlighter = resolveComponent("BraveSyntaxHighlighter");
  _push(ssrRenderComponent(_component_BraveSyntaxHighlighter, mergeProps({
    copyText: " \u{1F4CB} Copy Code",
    language: $props.langauge,
    prisimClassName: "dark:!bg-slate-900 bg-slate-50 rounded-lg  ",
    class: "!bg-slate-900 !rounded-lg",
    ref: "codebox"
  }, _attrs), createSlots({
    header: withCtx(({ copyToClipboard, copyText }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex text-sm rounded-t-lg border-b border-slate-600"${_scopeId}><div class="flex-1"${_scopeId}><div class="dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div></div><div class="mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"${_scopeId}>${ssrInterpolate(copyText)}</div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex text-sm rounded-t-lg border-b border-slate-600" }, [
            createVNode("div", { class: "flex-1" }, [
              createVNode("div", { class: "dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light" }, [
                renderSlot(_ctx.$slots, "title")
              ])
            ]),
            createVNode("div", {
              onClick: ($event) => copyToClipboard(),
              class: "mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"
            }, toDisplayString(copyText), 9, ["onClick"])
          ])
        ];
      }
    }),
    _: 2
  }, [
    _ctx.$slots.code() && _ctx.$slots.code()[0] && _ctx.$slots.code()[0].children ? {
      name: "default",
      fn: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$slots.code()[0].children)}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$slots.code()[0].children), 1)
          ];
        }
      }),
      key: "0"
    } : void 0
  ]), _parent));
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/BrTaSyntaxHighlighter.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const BrTaSyntaxHighlighter = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$w]]);
const _sfc_main$x = {
  components: { BrTaSyntaxHighlighter }
};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BrTaSyntaxHighlighter = resolveComponent("BrTaSyntaxHighlighter");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 lg:p-16" }, _attrs))}><div class="py-6"><div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8"><h1 class="mb-2 text-4xl font-semibold text-gray-900 dark:text-gray-100"> BraveVue </h1><div class="mb-10 dark:text-slate-400"> Headless UI Library for Vue js (Vue 3) </div><p>BraveVue is a headless UI Library for Vue js applications.</p><p>Components are designed to be minimilistic and non-bloated.</p><p> BraveVue can work with any of the Popular CSS Frameworks(Tailwind, Bootstrap ...) and Custom CSS. </p><h1 class="my-5 text-xl">Installation</h1>`);
  _push(ssrRenderComponent(_component_BrTaSyntaxHighlighter, { language: "javascript" }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Console`);
      } else {
        return [
          createTextVNode("Console")
        ];
      }
    }),
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(`npm i bravevue`)}`);
      } else {
        return [
          createTextVNode(toDisplayString(`npm i bravevue`))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 class="my-5 text-xl dark:text-slate-300"> The bravevue package ships with a Vue plugin and a default configuration for easy setup: </h2>`);
  _push(ssrRenderComponent(_component_BrTaSyntaxHighlighter, { language: "javascript" }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`main.js`);
      } else {
        return [
          createTextVNode("main.js")
        ];
      }
    }),
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(`const { createApp } = require('vue');
import App from "./App.vue";
import bravevue from 'bravevue'
createApp(App).use(bravevue).mount("#app");`)}`);
      } else {
        return [
          createTextVNode(toDisplayString(`const { createApp } = require('vue');
import App from "./App.vue";
import bravevue from 'bravevue'
createApp(App).use(bravevue).mount("#app");`), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></main>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Home.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$v]]);
const _sfc_main$w = {};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ml-3 inline-flex rounded-md shadow" }, _attrs))}><a target="_blank" href="https://github.com/web2033/vite-vue3-tailwind-starter" class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none">Learn more</a></div>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ButtonRepo.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const ButtonRepo = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$u]]);
const _sfc_main$v = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50" }, _attrs))}><div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"><h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"> Ready to dive in?.shadow-gray-500s <br><span class="text-indigo-600">Vite + Vue 3 + Tailwind CSS</span></h2><div class="mt-8 flex lg:mt-0 lg:flex-shrink-0"><div class="inline-flex rounded-md shadow">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/about",
        class: "inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Next Page`);
          } else {
            return [
              createTextVNode("Next Page")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(ButtonRepo, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/About.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = {};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white shadow" }, _attrs))}><div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8"><h1 class="text-3xl font-bold leading-tight text-gray-900">Not Found</h1></div></header>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/NotFound.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$t]]);
const _sfc_main$t = {
  components: { BraveTabs: BraveTabs$2 }
};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveTabs = resolveComponent("BraveTabs", true);
  _push(ssrRenderComponent(_component_BraveTabs, mergeProps({
    ref: "bravetabref",
    class: "text-black dark:text-white my-10",
    "tabs-wrapper-class": "flex items-center",
    tabsWrapperClass: "overflow-x-auto flex items-center overflow-y-hidden",
    "tabs-content-class": "border  p-10 dark:bg-slate-800",
    "tab-button-class": "px-4 py-2 mr-px cursor-pointer rounded-t-lg mr-0 dark:bg-slate-900 bg-gray-50 hover:dark:bg-slate-800 hover:bg-gray-200",
    "tab-button-active-class": "px-4 py-2 mr-px shadow-inner-sm -mb-px border rounded-t-lg border-b-0 dark:bg-slate-800 bg-white ",
    tabs: ["mobile", "appliances", "gaming"],
    initialTab: "mobile"
  }, _attrs), {
    "before-tab": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-2"${_scopeId}><img class="w-7 w-auto"${ssrRenderAttr("src", _imports_0$1)} alt="BraveVue"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "px-2" }, [
            createVNode("img", {
              class: "w-7 w-auto",
              src: _imports_0$1,
              alt: "BraveVue"
            })
          ])
        ];
      }
    }),
    "after-tab": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="grow text-right"${_scopeId}><div class="inline-block px-10"${_scopeId}>Help</div></div>`);
      } else {
        return [
          createVNode("div", { class: "grow text-right" }, [
            createVNode("div", { class: "inline-block px-10" }, "Help")
          ])
        ];
      }
    }),
    "tab-head-mobile": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Mobile`);
      } else {
        return [
          createTextVNode("Mobile")
        ];
      }
    }),
    "tab-panel-mobile": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="text-3xl mb-5"${_scopeId}>Content for mobile Panel</h1><p${_scopeId}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>`);
      } else {
        return [
          createVNode("h1", { class: "text-3xl mb-5" }, "Content for mobile Panel"),
          createVNode("p", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.")
        ];
      }
    }),
    "tab-head-appliances": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Appliances`);
      } else {
        return [
          createTextVNode("Appliances")
        ];
      }
    }),
    "tab-panel-appliances": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="text-3xl mb-5"${_scopeId}>Content for Appliances Panel</h1><p${_scopeId}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>`);
      } else {
        return [
          createVNode("h1", { class: "text-3xl mb-5" }, "Content for Appliances Panel"),
          createVNode("p", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.")
        ];
      }
    }),
    "tab-head-gaming": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Gaming`);
      } else {
        return [
          createTextVNode(" Gaming")
        ];
      }
    }),
    "tab-panel-gaming": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="text-3xl mb-5"${_scopeId}>Content for Gaming Panel</h1><p${_scopeId}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>`);
      } else {
        return [
          createVNode("h1", { class: "text-3xl mb-5" }, "Content for Gaming Panel"),
          createVNode("p", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/BraveTabs.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const BraveTabs$1 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$s]]);
const _sfc_main$s = {
  components: { BraveDialog: BraveDialog$1 }
};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveDialog = resolveComponent("BraveDialog");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_BraveDialog, {
    ref: "bravedialog1",
    class: "fixed bottom-0 left-0 right-0 top-0 flex justify-center bg-black/80 z-50",
    dialogclasses: "fixed lg:w-1/2 lg:m-auto m-3  max-w-96  \r\n   dark:text-white rounded",
    visibility: false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-right"${_scopeId}><button type="button" class="rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"${_scopeId}><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"${_scopeId}></path><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"${_scopeId}></path></svg></button></div><div class="h-72 rounded-2xl bg-white p-5 shadow-lg flex items-center justify-center dark:bg-slate-900"${_scopeId}><div class="text-slate-300 dark:text-slate-700 text-3xl"${_scopeId}> Placeholder for your HTML Content </div></div>`);
      } else {
        return [
          createVNode("div", { class: "text-right" }, [
            createVNode("button", {
              onClick: ($event) => _ctx.$refs.bravedialog1.hide(),
              type: "button",
              class: "rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            }, [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "32",
                height: "32",
                fill: "currentColor",
                class: "bi bi-x-circle",
                viewBox: "0 0 16 16"
              }, [
                createVNode("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                createVNode("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" })
              ]))
            ], 8, ["onClick"])
          ]),
          createVNode("div", { class: "h-72 rounded-2xl bg-white p-5 shadow-lg flex items-center justify-center dark:bg-slate-900" }, [
            createVNode("div", { class: "text-slate-300 dark:text-slate-700 text-3xl" }, " Placeholder for your HTML Content ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800"><span class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"> Basic Demo </span></button><!--]-->`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/BraveDialog/SimpleDialog.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const SimpleDialog = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$r]]);
const _sfc_main$r = {
  components: { BraveDialog: BraveDialog$1 }
};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveDialog = resolveComponent("BraveDialog");
  _push(`<!--[--><button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"><span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"> Confirm Dialog Demo </span></button>`);
  _push(ssrRenderComponent(_component_BraveDialog, {
    ref: "bravedialog",
    class: "bg-black/80 backdrop-blur-sm dark:bg-black/80 justify-center flex fixed bottom-0 left-0 right-0 top-0",
    dialogclasses: "rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto ",
    visibility: false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-1"${_scopeId}><div class="pl-5 pt-5"${_scopeId}><div class="h-10 w-10 rounded-full bg-red-200 flex justify-center content-center"${_scopeId}><i class="bi bi-exclamation-circle text-red-500 m-auto text-xl"${_scopeId}></i></div></div><div class="p-5"${_scopeId}><h1 class="text-xl font-semibold dark:text-white text-gray-900 mb-2"${_scopeId}> Deactivate Acccount </h1><p class="text-gray-500 dark:text-gray-400 text-sm"${_scopeId}> Are you sure you want to deactivate your account? All your data will be permanently removed. This action cannot be undone </p></div></div><div class="bg-slate-100 dark:bg-slate-900 px-5 py-2 rounded-b-lg flex justify-end gap-x-2"${_scopeId}><button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"${_scopeId}> Cancel </button><button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"${_scopeId}> Deactivate </button></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-1" }, [
            createVNode("div", { class: "pl-5 pt-5" }, [
              createVNode("div", { class: "h-10 w-10 rounded-full bg-red-200 flex justify-center content-center" }, [
                createVNode("i", { class: "bi bi-exclamation-circle text-red-500 m-auto text-xl" })
              ])
            ]),
            createVNode("div", { class: "p-5" }, [
              createVNode("h1", { class: "text-xl font-semibold dark:text-white text-gray-900 mb-2" }, " Deactivate Acccount "),
              createVNode("p", { class: "text-gray-500 dark:text-gray-400 text-sm" }, " Are you sure you want to deactivate your account? All your data will be permanently removed. This action cannot be undone ")
            ])
          ]),
          createVNode("div", { class: "bg-slate-100 dark:bg-slate-900 px-5 py-2 rounded-b-lg flex justify-end gap-x-2" }, [
            createVNode("button", {
              onClick: ($event) => _ctx.$refs.bravedialog.hide(),
              type: "button",
              class: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            }, " Cancel ", 8, ["onClick"]),
            createVNode("button", {
              onClick: ($event) => _ctx.$refs.bravedialog.hide(),
              type: "button",
              class: "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            }, " Deactivate ", 8, ["onClick"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/BraveDialog/ConfirmationDialog.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const ConfirmationDialog = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$q]]);
const _sfc_main$q = {
  components: { BraveDialog: BraveDialog$1 }
};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveDialog = resolveComponent("BraveDialog");
  _push(`<!--[--><button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"><span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"> Info Dialog Demo </span></button>`);
  _push(ssrRenderComponent(_component_BraveDialog, {
    ref: "bravedialog2",
    class: "bg-black/80 backdrop-blur-sm dark:bg-black/80 justify-center flex fixed bottom-0 left-0 right-0 top-0",
    dialogclasses: "rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto ",
    visibility: false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-center"${_scopeId}><div class="inline-block mt-5"${_scopeId}><div class="h-14 w-14 p-0 rounded-full bg-green-200 flex items-center justify-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check2 text-green-900" viewBox="0 0 16 16"${_scopeId}><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"${_scopeId}></path></svg></div></div><div class="p-5"${_scopeId}><h1 class="text-lg font-semibold text-gray-900 mb-2 dark:text-white"${_scopeId}> Payment Successful </h1><p class="text-gray-500 text-sm dark:text-gray-400"${_scopeId}> Thank you for your payment. We will be in touch with you soon. </p></div><div class="mx-5 mb-5"${_scopeId}><button type="button" class="text-white bg-blue-700 border border-gray-300 focus:outline-none hover:bg-blue-800 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700 min-w-full"${_scopeId}> Go back to the Dashboard </button></div></div>`);
      } else {
        return [
          createVNode("div", { class: "text-center" }, [
            createVNode("div", { class: "inline-block mt-5" }, [
              createVNode("div", { class: "h-14 w-14 p-0 rounded-full bg-green-200 flex items-center justify-center" }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "32",
                  height: "32",
                  fill: "currentColor",
                  class: "bi bi-check2 text-green-900",
                  viewBox: "0 0 16 16"
                }, [
                  createVNode("path", { d: "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" })
                ]))
              ])
            ]),
            createVNode("div", { class: "p-5" }, [
              createVNode("h1", { class: "text-lg font-semibold text-gray-900 mb-2 dark:text-white" }, " Payment Successful "),
              createVNode("p", { class: "text-gray-500 text-sm dark:text-gray-400" }, " Thank you for your payment. We will be in touch with you soon. ")
            ]),
            createVNode("div", { class: "mx-5 mb-5" }, [
              createVNode("button", {
                onClick: ($event) => _ctx.$refs.bravedialog2.hide(),
                type: "button",
                class: "text-white bg-blue-700 border border-gray-300 focus:outline-none hover:bg-blue-800 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700 min-w-full"
              }, " Go back to the Dashboard ", 8, ["onClick"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BraveDialog, {
    ref: "bravedialog",
    class: "bg-black/80 backdrop-blur-sm dark:bg-black/80 justify-center flex fixed bottom-0 left-0 right-0 top-0",
    dialogclasses: "rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto ",
    visibility: false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-1"${_scopeId}><div class="pl-5 pt-5"${_scopeId}><div class="h-10 w-10 rounded-full bg-red-200 flex justify-center content-center"${_scopeId}><i class="bi bi-exclamation-circle text-red-500 m-auto text-xl"${_scopeId}></i></div></div><div class="p-5"${_scopeId}><h1 class="text-xl font-semibold dark:text-white text-gray-900 mb-2"${_scopeId}> Deactivate Acccount </h1><p class="text-gray-500 dark:text-gray-400 text-sm"${_scopeId}> Are you sure you want to deactivate your account? All your data will be permanently removed. This action cannot be undone </p></div></div><div class="bg-slate-100 dark:bg-slate-900 px-5 py-2 rounded-b-lg flex justify-end gap-x-2"${_scopeId}><button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"${_scopeId}> Cancel </button><button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"${_scopeId}> Deactivate </button></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-1" }, [
            createVNode("div", { class: "pl-5 pt-5" }, [
              createVNode("div", { class: "h-10 w-10 rounded-full bg-red-200 flex justify-center content-center" }, [
                createVNode("i", { class: "bi bi-exclamation-circle text-red-500 m-auto text-xl" })
              ])
            ]),
            createVNode("div", { class: "p-5" }, [
              createVNode("h1", { class: "text-xl font-semibold dark:text-white text-gray-900 mb-2" }, " Deactivate Acccount "),
              createVNode("p", { class: "text-gray-500 dark:text-gray-400 text-sm" }, " Are you sure you want to deactivate your account? All your data will be permanently removed. This action cannot be undone ")
            ])
          ]),
          createVNode("div", { class: "bg-slate-100 dark:bg-slate-900 px-5 py-2 rounded-b-lg flex justify-end gap-x-2" }, [
            createVNode("button", {
              onClick: ($event) => _ctx.$refs.bravedialog.hide(),
              type: "button",
              class: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            }, " Cancel ", 8, ["onClick"]),
            createVNode("button", {
              onClick: ($event) => _ctx.$refs.bravedialog.hide(),
              type: "button",
              class: "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            }, " Deactivate ", 8, ["onClick"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/BraveDialog/InfoDialog.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const InfoDialog = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$p]]);
const _sfc_main$p = {
  props: {
    tabs: {
      type: Array,
      default: () => ["code", "example"]
    }
  },
  components: {
    BraveTabs: BraveTabs$2
  },
  methods: {
    dynamcSlotName(name) {
      return "tab-head-" + name;
    },
    dynamcSlotName2(name) {
      return "tab-panel-" + name;
    }
  }
};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveTabs = resolveComponent("BraveTabs");
  _push(ssrRenderComponent(_component_BraveTabs, mergeProps({
    ref: "bravetabref",
    tabs: $props.tabs,
    class: "text-black dark:text-white my-10",
    "tabs-wrapper-class": "flex items-center",
    "tabs-content-class": "border    p-4 dark:bg-slate-800",
    "tab-button-class": "px-4 py-2 cursor-pointer rounded-t-lg mr-px dark:bg-slate-900 bg-gray-50 hover:dark:bg-slate-800 hover:bg-gray-200",
    "tab-button-active-class": "px-4 py-2  shadow-inner-sm -mb-px border rounded-t-lg border-b-0 dark:bg-slate-800 bg-white "
  }, _attrs), createSlots({
    "after-tab": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "after-tab", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "after-tab")
        ];
      }
    }),
    _: 2
  }, [
    renderList($props.tabs, (tab) => {
      return {
        name: $options.dynamcSlotName(tab),
        fn: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, $options.dynamcSlotName(tab), {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, $options.dynamcSlotName(_ctx.tab))
            ];
          }
        })
      };
    }),
    renderList($props.tabs, (tab) => {
      return {
        name: $options.dynamcSlotName2(tab),
        fn: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, $options.dynamcSlotName2(tab), {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, $options.dynamcSlotName2(_ctx.tab))
            ];
          }
        })
      };
    })
  ]), _parent));
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/brave_tailwind/BrTaTabs.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const BrTaTabs = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$o]]);
const _sfc_main$o = {
  components: {
    BraveTabs: BraveTabs$2
  }
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveTabs = resolveComponent("BraveTabs");
  _push(ssrRenderComponent(_component_BraveTabs, mergeProps({
    ref: "bravetabref",
    class: "overflow-hidden dark:bg-slate-900 p-5",
    tabsWrapperClass: "flex mx-auto max-w-min bg-slate-200 dark:bg-slate-800 p-1 rounded-xl",
    "tab-button-class": "rounded-xl px-10 sm:px-10 py-2 dark:text-slate-400 whitespace-nowrap cursor-pointer text-center duration-200",
    "tab-button-active-class": "px-10 sm:px-10 rounded-xl bg-slate-900 dark:bg-slate-900 text-white whitespace-nowrap py-2 cursor-pointer text-center duration-200 shadow-md",
    "tabs-content-class": "mt-5 rounded-lg border dark:border-slate-800 py-7 px-7 dark:text-white",
    tabs: ["a", "b", "c"],
    initialTab: "a"
  }, _attrs), {
    "tab-head-a": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="uppercase"${_scopeId}>Mobile</span>`);
      } else {
        return [
          createVNode("span", { class: "uppercase" }, "Mobile")
        ];
      }
    }),
    "tab-panel-a": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-2xl font-bold mb-5 text-center uppercase"${_scopeId}> Mobile Tab Panel </div><div class="columns-1 sm:columns-2 text-center sm:text-left"${_scopeId}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis dolorum autem sapiente similique non, architecto porro maxime blanditiis obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id adipisci pariatur! Sapiente, dolore? </div>`);
      } else {
        return [
          createVNode("div", { class: "text-2xl font-bold mb-5 text-center uppercase" }, " Mobile Tab Panel "),
          createVNode("div", { class: "columns-1 sm:columns-2 text-center sm:text-left" }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis dolorum autem sapiente similique non, architecto porro maxime blanditiis obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id adipisci pariatur! Sapiente, dolore? ")
        ];
      }
    }),
    "tab-head-b": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="uppercase"${_scopeId}>Tv</span>`);
      } else {
        return [
          createVNode("span", { class: "uppercase" }, "Tv")
        ];
      }
    }),
    "tab-panel-b": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-2xl font-bold mb-5 text-center uppercase"${_scopeId}> Tv Tab Panel </div><div class="columns-1 sm:columns-2 text-center sm:text-left"${_scopeId}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis dolorum autem sapiente similique non, architecto porro maxime blanditiis obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id adipisci pariatur! Sapiente, dolore? </div>`);
      } else {
        return [
          createVNode("div", { class: "text-2xl font-bold mb-5 text-center uppercase" }, " Tv Tab Panel "),
          createVNode("div", { class: "columns-1 sm:columns-2 text-center sm:text-left" }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis dolorum autem sapiente similique non, architecto porro maxime blanditiis obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id adipisci pariatur! Sapiente, dolore? ")
        ];
      }
    }),
    "tab-head-c": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="uppercase"${_scopeId}>Appliances</span>`);
      } else {
        return [
          createVNode("span", { class: "uppercase" }, "Appliances")
        ];
      }
    }),
    "tab-panel-c": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-2xl font-bold mb-5 text-center uppercase"${_scopeId}> Appliances Tab Panel </div><div class="columns-1 sm:columns-2 text-center sm:text-left"${_scopeId}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis dolorum autem sapiente similique non, architecto porro maxime blanditiis obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id adipisci pariatur! Sapiente, dolore? </div>`);
      } else {
        return [
          createVNode("div", { class: "text-2xl font-bold mb-5 text-center uppercase" }, " Appliances Tab Panel "),
          createVNode("div", { class: "columns-1 sm:columns-2 text-center sm:text-left" }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis dolorum autem sapiente similique non, architecto porro maxime blanditiis obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id adipisci pariatur! Sapiente, dolore? ")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/BraveTabs/PillsTab.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const PillsTab = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$n]]);
const _sfc_main$n = {
  mounted() {
    useHead({
      title: "Dialog Component for Vue 3 | Brave Components Library.",
      meta: [
        {
          name: "description",
          content: "Brave Dialogs can be used to create Modals, Use it for Info Boxes, Confirm Dialogs, Settings Panel, Dialog forms. Etc"
        },
        {
          name: "keywords",
          content: "Modal, Modals, Vue 3, Modal Component, Stylable, Headless"
        },
        {
          name: "author",
          content: "Shishir Raven"
        }
      ]
    });
  },
  components: {
    SimpleDialog,
    ConfirmationDialog,
    InfoDialog,
    BraveTabs: BraveTabs$1,
    BrTaSyntaxHighlighter,
    BrTaTabs,
    PillsTab
  }
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BrTaTabs = resolveComponent("BrTaTabs");
  const _component_SimpleDialog = resolveComponent("SimpleDialog");
  const _component_BrTaSyntaxHighlighter = resolveComponent("BrTaSyntaxHighlighter");
  const _component_ConfirmationDialog = resolveComponent("ConfirmationDialog");
  const _component_InfoDialog = resolveComponent("InfoDialog");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 p-4 lg:p-10 xl:p-16" }, _attrs))}><div class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block"><h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100"> On this page </h5><div id="navigation"><ul class="navtext-slate-700 text-sm leading-6"><li class="mb-2"><a href="#introduction" class="text-slate-900 dark:text-slate-100"> Introduction </a></li><li class="mb-2"><a href="#live-example" class="text-slate-900 dark:text-slate-100"> Live example </a><ul class="my-1"><li class="mb-2 ml-3"><a href="#live-example-simple" class="text-slate-900 dark:text-slate-100"> - Simple Dialog </a></li><li class="mb-2 ml-3"><a href="#live-example-confirmation-dialog" class="text-slate-900 dark:text-slate-100"> - Confirmation Dialog </a></li><li class="mb-2 ml-3"><a href="#live-example-info-box" class="text-slate-900 dark:text-slate-100"> - Info Dialog </a></li></ul></li><li class><a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="#props">Props</a></li><li class><a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="#slots">Slots</a></li></ul></div></div><div class="prose dark:prose-invert prose-slate"><h1 id="introduction"><i class="bi bi-window"></i> Dialog / Modal Component </h1><p>Brave Dialogs can be used to create Modals, Use it for Info Boxes, Confirm Dialogs, Settings Panel, Dialog forms. Etc. </p><h2 id="live-example">Live Examples </h2><h3 id="live-example-simple">Simple Example</h3>`);
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
        _push2(`<iframe src="https://stackblitz.com/edit/vitejs-vite-sjfycx?embed=1&amp;file=src/components/BraveDialog.vue&amp;hideExplorer=1&amp;hideNavigation=1&amp;view=preview" style="${ssrRenderStyle({ "width": "100%", "height": "500px", "border": "0", "border-radius": "4px", "overflow": "hidden" })}" allowfullscreen="allowfullscreen" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"${_scopeId}></iframe>`);
      } else {
        return [
          createVNode("iframe", {
            src: "https://stackblitz.com/edit/vitejs-vite-sjfycx?embed=1&file=src/components/BraveDialog.vue&hideExplorer=1&hideNavigation=1&view=preview",
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
        _push2(ssrRenderComponent(_component_SimpleDialog, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SimpleDialog)
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
              _push3(` BraveDialog.vue`);
            } else {
              return [
                createTextVNode(" BraveDialog.vue")
              ];
            }
          }),
          code: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(`<template>
  <BraveDialog
    ref="bravedialog1"
    class="
      fixed
      bottom-0
      left-0
      right-0
      top-0
      flex
      justify-center
      bg-black/80
      z-50
    "
    dialogclasses="fixed lg:w-1/2 lg:m-auto m-3  max-w-96  
   dark:text-white rounded"
    :visibility="false"
  >
    <div class="text-right">
      <button
        @click="$refs.bravedialog1.hide()"
        type="button"
        class="
          rounded-full
          bg-gradient-to-br
          from-purple-600
          to-blue-500
          text-center text-sm
          font-medium
          text-white
          hover:bg-gradient-to-bl
          focus:ring-4 focus:ring-blue-300
          dark:focus:ring-blue-800
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-x-circle"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
    <div
      class="
        h-72
        rounded-2xl
        bg-white
        p-5
        shadow-lg
        flex
        items-center
        justify-center
        dark:bg-slate-900
      "
    >
      <div class="text-slate-300 dark:text-slate-700 text-3xl">
        Placeholder for your HTML Content
      </div>
    </div>
  </BraveDialog>
  <button
    @click="$refs.bravedialog1.show()"
    class="
      group
      relative
      mb-2
      mr-2
      inline-flex
      items-center
      justify-center
      overflow-hidden
      rounded-lg
      bg-gradient-to-br
      from-green-400
      to-blue-600
      p-0.5
      text-sm
      font-medium
      text-gray-900
      hover:text-white
      focus:outline-none focus:ring-4 focus:ring-green-200
      group-hover:from-green-400 group-hover:to-blue-600
      dark:text-white dark:focus:ring-green-800
    "
  >
    <span
      class="
        relative
        rounded-md
        bg-white
        px-5
        py-2.5
        transition-all
        duration-75
        ease-in
        group-hover:bg-opacity-0
        dark:bg-gray-900
      "
    >
      Basic Demo
    </span>
  </button>
</template>
<script>
import { BraveDialog } from 'bravevue';
export default {
  components: { BraveDialog },
};
<\/script>
`)}`);
            } else {
              return [
                createTextVNode(toDisplayString(`<template>
  <BraveDialog
    ref="bravedialog1"
    class="
      fixed
      bottom-0
      left-0
      right-0
      top-0
      flex
      justify-center
      bg-black/80
      z-50
    "
    dialogclasses="fixed lg:w-1/2 lg:m-auto m-3  max-w-96  
   dark:text-white rounded"
    :visibility="false"
  >
    <div class="text-right">
      <button
        @click="$refs.bravedialog1.hide()"
        type="button"
        class="
          rounded-full
          bg-gradient-to-br
          from-purple-600
          to-blue-500
          text-center text-sm
          font-medium
          text-white
          hover:bg-gradient-to-bl
          focus:ring-4 focus:ring-blue-300
          dark:focus:ring-blue-800
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-x-circle"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
    <div
      class="
        h-72
        rounded-2xl
        bg-white
        p-5
        shadow-lg
        flex
        items-center
        justify-center
        dark:bg-slate-900
      "
    >
      <div class="text-slate-300 dark:text-slate-700 text-3xl">
        Placeholder for your HTML Content
      </div>
    </div>
  </BraveDialog>
  <button
    @click="$refs.bravedialog1.show()"
    class="
      group
      relative
      mb-2
      mr-2
      inline-flex
      items-center
      justify-center
      overflow-hidden
      rounded-lg
      bg-gradient-to-br
      from-green-400
      to-blue-600
      p-0.5
      text-sm
      font-medium
      text-gray-900
      hover:text-white
      focus:outline-none focus:ring-4 focus:ring-green-200
      group-hover:from-green-400 group-hover:to-blue-600
      dark:text-white dark:focus:ring-green-800
    "
  >
    <span
      class="
        relative
        rounded-md
        bg-white
        px-5
        py-2.5
        transition-all
        duration-75
        ease-in
        group-hover:bg-opacity-0
        dark:bg-gray-900
      "
    >
      Basic Demo
    </span>
  </button>
</template>
<script>
import { BraveDialog } from 'bravevue';
export default {
  components: { BraveDialog },
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
              createTextVNode(" BraveDialog.vue")
            ]),
            code: withCtx(() => [
              createTextVNode(toDisplayString(`<template>
  <BraveDialog
    ref="bravedialog1"
    class="
      fixed
      bottom-0
      left-0
      right-0
      top-0
      flex
      justify-center
      bg-black/80
      z-50
    "
    dialogclasses="fixed lg:w-1/2 lg:m-auto m-3  max-w-96  
   dark:text-white rounded"
    :visibility="false"
  >
    <div class="text-right">
      <button
        @click="$refs.bravedialog1.hide()"
        type="button"
        class="
          rounded-full
          bg-gradient-to-br
          from-purple-600
          to-blue-500
          text-center text-sm
          font-medium
          text-white
          hover:bg-gradient-to-bl
          focus:ring-4 focus:ring-blue-300
          dark:focus:ring-blue-800
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-x-circle"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
    <div
      class="
        h-72
        rounded-2xl
        bg-white
        p-5
        shadow-lg
        flex
        items-center
        justify-center
        dark:bg-slate-900
      "
    >
      <div class="text-slate-300 dark:text-slate-700 text-3xl">
        Placeholder for your HTML Content
      </div>
    </div>
  </BraveDialog>
  <button
    @click="$refs.bravedialog1.show()"
    class="
      group
      relative
      mb-2
      mr-2
      inline-flex
      items-center
      justify-center
      overflow-hidden
      rounded-lg
      bg-gradient-to-br
      from-green-400
      to-blue-600
      p-0.5
      text-sm
      font-medium
      text-gray-900
      hover:text-white
      focus:outline-none focus:ring-4 focus:ring-green-200
      group-hover:from-green-400 group-hover:to-blue-600
      dark:text-white dark:focus:ring-green-800
    "
  >
    <span
      class="
        relative
        rounded-md
        bg-white
        px-5
        py-2.5
        transition-all
        duration-75
        ease-in
        group-hover:bg-opacity-0
        dark:bg-gray-900
      "
    >
      Basic Demo
    </span>
  </button>
</template>
<script>
import { BraveDialog } from 'bravevue';
export default {
  components: { BraveDialog },
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
  _push(`<h3 id="live-example-confirmation-dialog">Confirmation Dialog</h3>`);
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
        _push2(`<iframe src="https://stackblitz.com/edit/vitejs-vite-sggzxj?embed=1&amp;file=src/components/BraveDialog.vue&amp;hideExplorer=1&amp;hideNavigation=1&amp;view=preview" style="${ssrRenderStyle({ "width": "100%", "height": "500px", "border": "0", "border-radius": "4px", "overflow": "hidden" })}" allowfullscreen="allowfullscreen" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"${_scopeId}></iframe>`);
      } else {
        return [
          createVNode("iframe", {
            src: "https://stackblitz.com/edit/vitejs-vite-sggzxj?embed=1&file=src/components/BraveDialog.vue&hideExplorer=1&hideNavigation=1&view=preview",
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
        _push2(ssrRenderComponent(_component_ConfirmationDialog, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ConfirmationDialog)
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
              _push3(` BraveDialog.vue`);
            } else {
              return [
                createTextVNode(" BraveDialog.vue")
              ];
            }
          }),
          code: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(`<template>
    <button
      @click="$refs.bravedialog2.show()"
      class="
        relative
        inline-flex
        items-center
        justify-center
        p-0.5
        mb-2
        mr-2
        overflow-hidden
        text-sm
        font-medium
        text-gray-900
        rounded-lg
        group
        bg-gradient-to-br
        from-green-400
        to-blue-600
        group-hover:from-green-400 group-hover:to-blue-600
        hover:text-white
        dark:text-white
        focus:ring-4 focus:outline-none focus:ring-green-200
        dark:focus:ring-green-800
      "
    >
      <span
        class="
          relative
          px-5
          py-2.5
          transition-all
          ease-in
          duration-75
          bg-white
          dark:bg-gray-900
          rounded-md
          group-hover:bg-opacity-0
        "
      >
        Info Dialog Demo
      </span>
    </button>
  
    <BraveDialog
      ref="bravedialog2"
      class="
        bg-black/80
        backdrop-blur-sm
        dark:bg-black/80
        justify-center
        flex
        fixed
        bottom-0
        left-0
        right-0
        top-0
      "
      dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
      :visibility="false"
    >
      <div class="text-center">
        <div class="inline-block mt-5">
          <div
            class="
              h-14
              w-14
              p-0
              rounded-full
              bg-green-200
              flex
              items-center
              justify-center
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-check2 text-green-900"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
        </div>
        <div class="p-5">
          <h1 class="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
            Payment Successful
          </h1>
          <p class="text-gray-500 text-sm dark:text-gray-400">
            Thank you for your payment. We will be in touch with you soon.
          </p>
        </div>
        <div class="mx-5 mb-5">
          <button
            @click="$refs.bravedialog2.hide()"
            type="button"
            class="
              text-white
              bg-blue-700
              border border-gray-300
              focus:outline-none
              hover:bg-blue-800
              focus:ring-4 focus:ring-gray-200
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2
              dark:bg-gray-700
              dark:text-white
              dark:border-gray-600
              dark:hover:bg-gray-600
              dark:hover:border-gray-600
              dark:focus:ring-gray-700
              min-w-full
            "
          >
            Go back to the Dashboard
          </button>
        </div>
      </div>
    </BraveDialog>
  
    <BraveDialog
      ref="bravedialog"
      class="
        bg-black/80
        backdrop-blur-sm
        dark:bg-black/80
        justify-center
        flex
        fixed
        bottom-0
        left-0
        right-0
        top-0
      "
      dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
      :visibility="false"
    >
      <!-- Body -->
      <div class="flex flex-1">
        <div class="pl-5 pt-5">
          <div
            class="
              h-10
              w-10
              rounded-full
              bg-red-200
              flex
              justify-center
              content-center
            "
          >
            <i class="bi bi-exclamation-circle text-red-500 m-auto text-xl"></i>
          </div>
        </div>
        <div class="p-5">
          <h1 class="text-xl font-semibold dark:text-white text-gray-900 mb-2">
            Deactivate Acccount
          </h1>
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            Are you sure you want to deactivate your account? All your data will
            be permanently removed. This action cannot be undone
          </p>
        </div>
      </div>
      <!-- Buttons -->
      <div
        class="
          bg-slate-100
          dark:bg-slate-900
          px-5
          py-2
          rounded-b-lg
          flex
          justify-end
          gap-x-2
        "
      >
        <button
          @click="$refs.bravedialog.hide()"
          type="button"
          class="
            text-gray-900
            bg-white
            border border-gray-300
            focus:outline-none
            hover:bg-gray-100
            focus:ring-4 focus:ring-gray-200
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2
            dark:bg-gray-800
            dark:text-white
            dark:border-gray-600
            dark:hover:bg-gray-700
            dark:hover:border-gray-600
            dark:focus:ring-gray-700
          "
        >
          Cancel
        </button>
  
        <button
          @click="$refs.bravedialog.hide()"
          type="button"
          class="
            focus:outline-none
            text-white
            bg-red-700
            hover:bg-red-800
            focus:ring-4 focus:ring-red-300
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2
            dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
          "
        >
          Deactivate
        </button>
      </div>
    </BraveDialog>
  </template>
  <script>
  import { BraveDialog } from 'bravevue';
  export default {
    components: { BraveDialog },
  };
  <\/script>
  `)}`);
            } else {
              return [
                createTextVNode(toDisplayString(`<template>
    <button
      @click="$refs.bravedialog2.show()"
      class="
        relative
        inline-flex
        items-center
        justify-center
        p-0.5
        mb-2
        mr-2
        overflow-hidden
        text-sm
        font-medium
        text-gray-900
        rounded-lg
        group
        bg-gradient-to-br
        from-green-400
        to-blue-600
        group-hover:from-green-400 group-hover:to-blue-600
        hover:text-white
        dark:text-white
        focus:ring-4 focus:outline-none focus:ring-green-200
        dark:focus:ring-green-800
      "
    >
      <span
        class="
          relative
          px-5
          py-2.5
          transition-all
          ease-in
          duration-75
          bg-white
          dark:bg-gray-900
          rounded-md
          group-hover:bg-opacity-0
        "
      >
        Info Dialog Demo
      </span>
    </button>
  
    <BraveDialog
      ref="bravedialog2"
      class="
        bg-black/80
        backdrop-blur-sm
        dark:bg-black/80
        justify-center
        flex
        fixed
        bottom-0
        left-0
        right-0
        top-0
      "
      dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
      :visibility="false"
    >
      <div class="text-center">
        <div class="inline-block mt-5">
          <div
            class="
              h-14
              w-14
              p-0
              rounded-full
              bg-green-200
              flex
              items-center
              justify-center
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-check2 text-green-900"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
        </div>
        <div class="p-5">
          <h1 class="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
            Payment Successful
          </h1>
          <p class="text-gray-500 text-sm dark:text-gray-400">
            Thank you for your payment. We will be in touch with you soon.
          </p>
        </div>
        <div class="mx-5 mb-5">
          <button
            @click="$refs.bravedialog2.hide()"
            type="button"
            class="
              text-white
              bg-blue-700
              border border-gray-300
              focus:outline-none
              hover:bg-blue-800
              focus:ring-4 focus:ring-gray-200
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2
              dark:bg-gray-700
              dark:text-white
              dark:border-gray-600
              dark:hover:bg-gray-600
              dark:hover:border-gray-600
              dark:focus:ring-gray-700
              min-w-full
            "
          >
            Go back to the Dashboard
          </button>
        </div>
      </div>
    </BraveDialog>
  
    <BraveDialog
      ref="bravedialog"
      class="
        bg-black/80
        backdrop-blur-sm
        dark:bg-black/80
        justify-center
        flex
        fixed
        bottom-0
        left-0
        right-0
        top-0
      "
      dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
      :visibility="false"
    >
      <!-- Body -->
      <div class="flex flex-1">
        <div class="pl-5 pt-5">
          <div
            class="
              h-10
              w-10
              rounded-full
              bg-red-200
              flex
              justify-center
              content-center
            "
          >
            <i class="bi bi-exclamation-circle text-red-500 m-auto text-xl"></i>
          </div>
        </div>
        <div class="p-5">
          <h1 class="text-xl font-semibold dark:text-white text-gray-900 mb-2">
            Deactivate Acccount
          </h1>
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            Are you sure you want to deactivate your account? All your data will
            be permanently removed. This action cannot be undone
          </p>
        </div>
      </div>
      <!-- Buttons -->
      <div
        class="
          bg-slate-100
          dark:bg-slate-900
          px-5
          py-2
          rounded-b-lg
          flex
          justify-end
          gap-x-2
        "
      >
        <button
          @click="$refs.bravedialog.hide()"
          type="button"
          class="
            text-gray-900
            bg-white
            border border-gray-300
            focus:outline-none
            hover:bg-gray-100
            focus:ring-4 focus:ring-gray-200
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2
            dark:bg-gray-800
            dark:text-white
            dark:border-gray-600
            dark:hover:bg-gray-700
            dark:hover:border-gray-600
            dark:focus:ring-gray-700
          "
        >
          Cancel
        </button>
  
        <button
          @click="$refs.bravedialog.hide()"
          type="button"
          class="
            focus:outline-none
            text-white
            bg-red-700
            hover:bg-red-800
            focus:ring-4 focus:ring-red-300
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2
            dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
          "
        >
          Deactivate
        </button>
      </div>
    </BraveDialog>
  </template>
  <script>
  import { BraveDialog } from 'bravevue';
  export default {
    components: { BraveDialog },
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
              createTextVNode(" BraveDialog.vue")
            ]),
            code: withCtx(() => [
              createTextVNode(toDisplayString(`<template>
    <button
      @click="$refs.bravedialog2.show()"
      class="
        relative
        inline-flex
        items-center
        justify-center
        p-0.5
        mb-2
        mr-2
        overflow-hidden
        text-sm
        font-medium
        text-gray-900
        rounded-lg
        group
        bg-gradient-to-br
        from-green-400
        to-blue-600
        group-hover:from-green-400 group-hover:to-blue-600
        hover:text-white
        dark:text-white
        focus:ring-4 focus:outline-none focus:ring-green-200
        dark:focus:ring-green-800
      "
    >
      <span
        class="
          relative
          px-5
          py-2.5
          transition-all
          ease-in
          duration-75
          bg-white
          dark:bg-gray-900
          rounded-md
          group-hover:bg-opacity-0
        "
      >
        Info Dialog Demo
      </span>
    </button>
  
    <BraveDialog
      ref="bravedialog2"
      class="
        bg-black/80
        backdrop-blur-sm
        dark:bg-black/80
        justify-center
        flex
        fixed
        bottom-0
        left-0
        right-0
        top-0
      "
      dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
      :visibility="false"
    >
      <div class="text-center">
        <div class="inline-block mt-5">
          <div
            class="
              h-14
              w-14
              p-0
              rounded-full
              bg-green-200
              flex
              items-center
              justify-center
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-check2 text-green-900"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
        </div>
        <div class="p-5">
          <h1 class="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
            Payment Successful
          </h1>
          <p class="text-gray-500 text-sm dark:text-gray-400">
            Thank you for your payment. We will be in touch with you soon.
          </p>
        </div>
        <div class="mx-5 mb-5">
          <button
            @click="$refs.bravedialog2.hide()"
            type="button"
            class="
              text-white
              bg-blue-700
              border border-gray-300
              focus:outline-none
              hover:bg-blue-800
              focus:ring-4 focus:ring-gray-200
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2
              dark:bg-gray-700
              dark:text-white
              dark:border-gray-600
              dark:hover:bg-gray-600
              dark:hover:border-gray-600
              dark:focus:ring-gray-700
              min-w-full
            "
          >
            Go back to the Dashboard
          </button>
        </div>
      </div>
    </BraveDialog>
  
    <BraveDialog
      ref="bravedialog"
      class="
        bg-black/80
        backdrop-blur-sm
        dark:bg-black/80
        justify-center
        flex
        fixed
        bottom-0
        left-0
        right-0
        top-0
      "
      dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
      :visibility="false"
    >
      <!-- Body -->
      <div class="flex flex-1">
        <div class="pl-5 pt-5">
          <div
            class="
              h-10
              w-10
              rounded-full
              bg-red-200
              flex
              justify-center
              content-center
            "
          >
            <i class="bi bi-exclamation-circle text-red-500 m-auto text-xl"></i>
          </div>
        </div>
        <div class="p-5">
          <h1 class="text-xl font-semibold dark:text-white text-gray-900 mb-2">
            Deactivate Acccount
          </h1>
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            Are you sure you want to deactivate your account? All your data will
            be permanently removed. This action cannot be undone
          </p>
        </div>
      </div>
      <!-- Buttons -->
      <div
        class="
          bg-slate-100
          dark:bg-slate-900
          px-5
          py-2
          rounded-b-lg
          flex
          justify-end
          gap-x-2
        "
      >
        <button
          @click="$refs.bravedialog.hide()"
          type="button"
          class="
            text-gray-900
            bg-white
            border border-gray-300
            focus:outline-none
            hover:bg-gray-100
            focus:ring-4 focus:ring-gray-200
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2
            dark:bg-gray-800
            dark:text-white
            dark:border-gray-600
            dark:hover:bg-gray-700
            dark:hover:border-gray-600
            dark:focus:ring-gray-700
          "
        >
          Cancel
        </button>
  
        <button
          @click="$refs.bravedialog.hide()"
          type="button"
          class="
            focus:outline-none
            text-white
            bg-red-700
            hover:bg-red-800
            focus:ring-4 focus:ring-red-300
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2
            dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
          "
        >
          Deactivate
        </button>
      </div>
    </BraveDialog>
  </template>
  <script>
  import { BraveDialog } from 'bravevue';
  export default {
    components: { BraveDialog },
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
  _push(`<h3 id="live-example-info-box">Info Box Example</h3>`);
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
        _push2(`<iframe src="https://stackblitz.com/edit/vitejs-vite-bbw79y?embed=1&amp;file=src/components/BraveDialog.vue&amp;hideExplorer=1&amp;hideNavigation=1&amp;view=preview" style="${ssrRenderStyle({ "width": "100%", "height": "500px", "border": "0", "border-radius": "4px", "overflow": "hidden" })}" allowfullscreen="allowfullscreen" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"${_scopeId}></iframe>`);
      } else {
        return [
          createVNode("iframe", {
            src: "https://stackblitz.com/edit/vitejs-vite-bbw79y?embed=1&file=src/components/BraveDialog.vue&hideExplorer=1&hideNavigation=1&view=preview",
            style: { "width": "100%", "height": "500px", "border": "0", "border-radius": "4px", "overflow": "hidden" },
            allowfullscreen: "allowfullscreen",
            sandbox: "allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          })
        ];
      }
    }),
    "tab-head-example": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Info Box Example `);
      } else {
        return [
          createTextVNode("Info Box Example ")
        ];
      }
    }),
    "tab-panel-example": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_InfoDialog, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_InfoDialog)
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
              _push3(` BraveDialog.vue`);
            } else {
              return [
                createTextVNode(" BraveDialog.vue")
              ];
            }
          }),
          code: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(`<template>
  <button
    @click="$refs.bravedialog2.show()"
    class="
      relative
      inline-flex
      items-center
      justify-center
      p-0.5
      mb-2
      mr-2
      overflow-hidden
      text-sm
      font-medium
      text-gray-900
      rounded-lg
      group
      bg-gradient-to-br
      from-green-400
      to-blue-600
      group-hover:from-green-400 group-hover:to-blue-600
      hover:text-white
      dark:text-white
      focus:ring-4 focus:outline-none focus:ring-green-200
      dark:focus:ring-green-800
    "
  >
    <span
      class="
        relative
        px-5
        py-2.5
        transition-all
        ease-in
        duration-75
        bg-white
        dark:bg-gray-900
        rounded-md
        group-hover:bg-opacity-0
      "
    >
      Basic Demo
    </span>
  </button>

  <BraveDialog
    ref="bravedialog2"
    class="
      bg-black/80
      backdrop-blur-sm
      dark:bg-black/80
      justify-center
      flex
      fixed
      bottom-0
      left-0
      right-0
      top-0
    "
    dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
    :visibility="false"
  >
    <div class="text-center">
      <div class="inline-block mt-5">
        <div
          class="
            h-14
            w-14
            p-0
            rounded-full
            bg-green-200
            flex
            items-center
            justify-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-check2 text-green-900"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
      </div>
      <div class="p-5">
        <h1 class="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
          Payment Successful
        </h1>
        <p class="text-gray-500 text-sm dark:text-gray-400">
          Thank you for your payment. We will be in touch with you soon.
        </p>
      </div>
      <div class="mx-5 mb-5">
        <button
          @click="$refs.bravedialog2.hide()"
          type="button"
          class="
            text-white
            bg-blue-700
            border border-gray-300
            focus:outline-none
            hover:bg-blue-800
            focus:ring-4 focus:ring-gray-200
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2
            dark:bg-gray-700
            dark:text-white
            dark:border-gray-600
            dark:hover:bg-gray-600
            dark:hover:border-gray-600
            dark:focus:ring-gray-700
            min-w-full
          "
        >
          Go back to the Dashboard
        </button>
      </div>
    </div>
  </BraveDialog>

  <BraveDialog
    ref="bravedialog"
    class="
      bg-black/80
      backdrop-blur-sm
      dark:bg-black/80
      justify-center
      flex
      fixed
      bottom-0
      left-0
      right-0
      top-0
    "
    dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
    :visibility="false"
  >
    <!-- Body -->
    <div class="flex flex-1">
      <div class="pl-5 pt-5">
        <div
          class="
            h-10
            w-10
            rounded-full
            bg-red-200
            flex
            justify-center
            content-center
          "
        >
          <i class="bi bi-exclamation-circle text-red-500 m-auto text-xl"></i>
        </div>
      </div>
      <div class="p-5">
        <h1 class="text-xl font-semibold dark:text-white text-gray-900 mb-2">
          Deactivate Acccount
        </h1>
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          Are you sure you want to deactivate your account? All your data will
          be permanently removed. This action cannot be undone
        </p>
      </div>
    </div>
    <!-- Buttons -->
    <div
      class="
        bg-slate-100
        dark:bg-slate-900
        px-5
        py-2
        rounded-b-lg
        flex
        justify-end
        gap-x-2
      "
    >
      <button
        @click="$refs.bravedialog.hide()"
        type="button"
        class="
          text-gray-900
          bg-white
          border border-gray-300
          focus:outline-none
          hover:bg-gray-100
          focus:ring-4 focus:ring-gray-200
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2
          dark:bg-gray-800
          dark:text-white
          dark:border-gray-600
          dark:hover:bg-gray-700
          dark:hover:border-gray-600
          dark:focus:ring-gray-700
        "
      >
        Cancel
      </button>

      <button
        @click="$refs.bravedialog.hide()"
        type="button"
        class="
          focus:outline-none
          text-white
          bg-red-700
          hover:bg-red-800
          focus:ring-4 focus:ring-red-300
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2
          dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
        "
      >
        Deactivate
      </button>
    </div>
  </BraveDialog>
</template>
<script>
import { BraveDialog } from 'bravevue';
export default {
  components: { BraveDialog },
};
<\/script>
`)}`);
            } else {
              return [
                createTextVNode(toDisplayString(`<template>
  <button
    @click="$refs.bravedialog2.show()"
    class="
      relative
      inline-flex
      items-center
      justify-center
      p-0.5
      mb-2
      mr-2
      overflow-hidden
      text-sm
      font-medium
      text-gray-900
      rounded-lg
      group
      bg-gradient-to-br
      from-green-400
      to-blue-600
      group-hover:from-green-400 group-hover:to-blue-600
      hover:text-white
      dark:text-white
      focus:ring-4 focus:outline-none focus:ring-green-200
      dark:focus:ring-green-800
    "
  >
    <span
      class="
        relative
        px-5
        py-2.5
        transition-all
        ease-in
        duration-75
        bg-white
        dark:bg-gray-900
        rounded-md
        group-hover:bg-opacity-0
      "
    >
      Basic Demo
    </span>
  </button>

  <BraveDialog
    ref="bravedialog2"
    class="
      bg-black/80
      backdrop-blur-sm
      dark:bg-black/80
      justify-center
      flex
      fixed
      bottom-0
      left-0
      right-0
      top-0
    "
    dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
    :visibility="false"
  >
    <div class="text-center">
      <div class="inline-block mt-5">
        <div
          class="
            h-14
            w-14
            p-0
            rounded-full
            bg-green-200
            flex
            items-center
            justify-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-check2 text-green-900"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
      </div>
      <div class="p-5">
        <h1 class="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
          Payment Successful
        </h1>
        <p class="text-gray-500 text-sm dark:text-gray-400">
          Thank you for your payment. We will be in touch with you soon.
        </p>
      </div>
      <div class="mx-5 mb-5">
        <button
          @click="$refs.bravedialog2.hide()"
          type="button"
          class="
            text-white
            bg-blue-700
            border border-gray-300
            focus:outline-none
            hover:bg-blue-800
            focus:ring-4 focus:ring-gray-200
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2
            dark:bg-gray-700
            dark:text-white
            dark:border-gray-600
            dark:hover:bg-gray-600
            dark:hover:border-gray-600
            dark:focus:ring-gray-700
            min-w-full
          "
        >
          Go back to the Dashboard
        </button>
      </div>
    </div>
  </BraveDialog>

  <BraveDialog
    ref="bravedialog"
    class="
      bg-black/80
      backdrop-blur-sm
      dark:bg-black/80
      justify-center
      flex
      fixed
      bottom-0
      left-0
      right-0
      top-0
    "
    dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
    :visibility="false"
  >
    <!-- Body -->
    <div class="flex flex-1">
      <div class="pl-5 pt-5">
        <div
          class="
            h-10
            w-10
            rounded-full
            bg-red-200
            flex
            justify-center
            content-center
          "
        >
          <i class="bi bi-exclamation-circle text-red-500 m-auto text-xl"></i>
        </div>
      </div>
      <div class="p-5">
        <h1 class="text-xl font-semibold dark:text-white text-gray-900 mb-2">
          Deactivate Acccount
        </h1>
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          Are you sure you want to deactivate your account? All your data will
          be permanently removed. This action cannot be undone
        </p>
      </div>
    </div>
    <!-- Buttons -->
    <div
      class="
        bg-slate-100
        dark:bg-slate-900
        px-5
        py-2
        rounded-b-lg
        flex
        justify-end
        gap-x-2
      "
    >
      <button
        @click="$refs.bravedialog.hide()"
        type="button"
        class="
          text-gray-900
          bg-white
          border border-gray-300
          focus:outline-none
          hover:bg-gray-100
          focus:ring-4 focus:ring-gray-200
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2
          dark:bg-gray-800
          dark:text-white
          dark:border-gray-600
          dark:hover:bg-gray-700
          dark:hover:border-gray-600
          dark:focus:ring-gray-700
        "
      >
        Cancel
      </button>

      <button
        @click="$refs.bravedialog.hide()"
        type="button"
        class="
          focus:outline-none
          text-white
          bg-red-700
          hover:bg-red-800
          focus:ring-4 focus:ring-red-300
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2
          dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
        "
      >
        Deactivate
      </button>
    </div>
  </BraveDialog>
</template>
<script>
import { BraveDialog } from 'bravevue';
export default {
  components: { BraveDialog },
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
              createTextVNode(" BraveDialog.vue")
            ]),
            code: withCtx(() => [
              createTextVNode(toDisplayString(`<template>
  <button
    @click="$refs.bravedialog2.show()"
    class="
      relative
      inline-flex
      items-center
      justify-center
      p-0.5
      mb-2
      mr-2
      overflow-hidden
      text-sm
      font-medium
      text-gray-900
      rounded-lg
      group
      bg-gradient-to-br
      from-green-400
      to-blue-600
      group-hover:from-green-400 group-hover:to-blue-600
      hover:text-white
      dark:text-white
      focus:ring-4 focus:outline-none focus:ring-green-200
      dark:focus:ring-green-800
    "
  >
    <span
      class="
        relative
        px-5
        py-2.5
        transition-all
        ease-in
        duration-75
        bg-white
        dark:bg-gray-900
        rounded-md
        group-hover:bg-opacity-0
      "
    >
      Basic Demo
    </span>
  </button>

  <BraveDialog
    ref="bravedialog2"
    class="
      bg-black/80
      backdrop-blur-sm
      dark:bg-black/80
      justify-center
      flex
      fixed
      bottom-0
      left-0
      right-0
      top-0
    "
    dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
    :visibility="false"
  >
    <div class="text-center">
      <div class="inline-block mt-5">
        <div
          class="
            h-14
            w-14
            p-0
            rounded-full
            bg-green-200
            flex
            items-center
            justify-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-check2 text-green-900"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
      </div>
      <div class="p-5">
        <h1 class="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
          Payment Successful
        </h1>
        <p class="text-gray-500 text-sm dark:text-gray-400">
          Thank you for your payment. We will be in touch with you soon.
        </p>
      </div>
      <div class="mx-5 mb-5">
        <button
          @click="$refs.bravedialog2.hide()"
          type="button"
          class="
            text-white
            bg-blue-700
            border border-gray-300
            focus:outline-none
            hover:bg-blue-800
            focus:ring-4 focus:ring-gray-200
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2
            dark:bg-gray-700
            dark:text-white
            dark:border-gray-600
            dark:hover:bg-gray-600
            dark:hover:border-gray-600
            dark:focus:ring-gray-700
            min-w-full
          "
        >
          Go back to the Dashboard
        </button>
      </div>
    </div>
  </BraveDialog>

  <BraveDialog
    ref="bravedialog"
    class="
      bg-black/80
      backdrop-blur-sm
      dark:bg-black/80
      justify-center
      flex
      fixed
      bottom-0
      left-0
      right-0
      top-0
    "
    dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
    :visibility="false"
  >
    <!-- Body -->
    <div class="flex flex-1">
      <div class="pl-5 pt-5">
        <div
          class="
            h-10
            w-10
            rounded-full
            bg-red-200
            flex
            justify-center
            content-center
          "
        >
          <i class="bi bi-exclamation-circle text-red-500 m-auto text-xl"></i>
        </div>
      </div>
      <div class="p-5">
        <h1 class="text-xl font-semibold dark:text-white text-gray-900 mb-2">
          Deactivate Acccount
        </h1>
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          Are you sure you want to deactivate your account? All your data will
          be permanently removed. This action cannot be undone
        </p>
      </div>
    </div>
    <!-- Buttons -->
    <div
      class="
        bg-slate-100
        dark:bg-slate-900
        px-5
        py-2
        rounded-b-lg
        flex
        justify-end
        gap-x-2
      "
    >
      <button
        @click="$refs.bravedialog.hide()"
        type="button"
        class="
          text-gray-900
          bg-white
          border border-gray-300
          focus:outline-none
          hover:bg-gray-100
          focus:ring-4 focus:ring-gray-200
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2
          dark:bg-gray-800
          dark:text-white
          dark:border-gray-600
          dark:hover:bg-gray-700
          dark:hover:border-gray-600
          dark:focus:ring-gray-700
        "
      >
        Cancel
      </button>

      <button
        @click="$refs.bravedialog.hide()"
        type="button"
        class="
          focus:outline-none
          text-white
          bg-red-700
          hover:bg-red-800
          focus:ring-4 focus:ring-red-300
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2
          dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
        "
      >
        Deactivate
      </button>
    </div>
  </BraveDialog>
</template>
<script>
import { BraveDialog } from 'bravevue';
export default {
  components: { BraveDialog },
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
  _push(`<h2 id="props"> Props <a href="#props" name="props" class="anchor"><span class="anchor-target" id="props"></span><span class="glyphicon glyphicon-link"></span></a></h2><div class="overflow-auto w-full"><table><thead class="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400"><tr><th scope="col" class="py-3 px-6">Prop</th><th scope="col" class="py-3 px-6">Type</th><th scope="col" class="py-3 px-6">Default</th><th scope="col" class="py-3 px-6">Description</th></tr></thead><tr><td class="py-4 px-6">visibility</td><td class="py-4 px-6">Boolean</td><td class="py-4 px-6">false</td><td class="py-4 px-6"><p>Array of the name-slug of tabs to be displayed </p><p> Example : <code class="text-blue-500"> :visibility=&quot;true&quot; </code></p></td></tr><tr><td class="py-4 px-6">dialogwidth</td><td class="py-4 px-6">String</td><td class="py-4 px-6">auto</td><td class="py-4 px-6"><p>Width of the Dialog you want to keep, you can also set this through a CSS Class using dialogclasses prop</p><p> Example : <code class="text-blue-500"> dialogwidth=&quot;auto&quot; </code></p></td></tr><tr><td class="py-4 px-6">hideOnBackdrop</td><td class="py-4 px-6">Boolean</td><td class="py-4 px-6">true</td><td class="py-4 px-6"><p>If you want the dialog to hide when user clicks outside the dialog set it to true, else false</p><p> Example : <code class="text-blue-500"> :hideOnBackdrop=&quot;false&quot; </code></p></td></tr><tr><td class="py-4 px-6">dialogclasses</td><td class="py-4 px-6">String</td><td class="py-4 px-6"></td><td class="py-4 px-6"><p>Pass Classes to style your dialog</p></td></tr><tr><td class="py-4 px-6">class</td><td class="py-4 px-6">String</td><td class="py-4 px-6"></td><td class="py-4 px-6"><p>will set the Classes on the backdrop</p></td></tr></table></div><h2 class="mt-30" id="slots"> Slots <a href="#slots" name="slots" class="anchor"><span class="anchor-target" id="slots"></span><span class="glyphicon glyphicon-link"></span></a></h2><table><tr><td class="py-4 px-6"><strong>Name </strong></td><td class="py-4 px-6"><strong>Scoped </strong></td><td class="py-4 px-6"><strong>Description </strong></td></tr><tr><td class="py-4 px-6">default slot </td><td class="py-4 px-6"> Yes </td><td class="py-4 px-6"><p>default slot</p><p><b>Scoped function</b> hide() is passed to this scoped slot to allow use add @click=&quot;hide()&quot; anywhere on there default slot template to hide the dialog. </p></td></tr></table></div></main>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/BraveDialog.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const BraveDialog = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$m]]);
const _sfc_main$m = {
  mounted() {
    useHead({
      title: "Position Dialog / Context Dialog Component for Vue 3 | Brave Components Library.",
      meta: [
        {
          name: "description",
          content: "It is a modal context dialog which is positioned based on the click position."
        },
        {
          name: "keywords",
          content: "Dialog, Position dialog, Context Menu, Context Dialog, Vue3, Component, Headless, Styleless "
        },
        {
          name: "author",
          content: "Shishir Raven"
        }
      ]
    });
  },
  components: { BravePositionDialog }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BravePositionDialog = resolveComponent("BravePositionDialog");
  _push(`<!--[--><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><i class="bi me-2 fs-4 bi-info-circle text-xl m-0 p-0 leading-none block"></i></button> &lt;- Hover on this Icon to see example. `);
  _push(ssrRenderComponent(_component_BravePositionDialog, {
    ref: "positionDialog2",
    style: { "max-width": "300px" },
    class: "rounded-lg bg-white dark:bg-slate-900 dark:text-white mx-5 max-w-xs shadow-2xl border z-10"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="m-5"${_scopeId}><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3"${_scopeId}> You can add your project to your dashboard here. </h3><p class="text-sm"${_scopeId}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam doloribus exercitationem dolores sint adipisci, soluta obcaecati accusamus, totam laborum deserunt cum in veniam eum delectus vero facilis. Harum, et tempora? </p></div>`);
      } else {
        return [
          createVNode("div", { class: "m-5" }, [
            createVNode("h3", { class: "text-lg font-semibold text-gray-900 dark:text-white mb-3" }, " You can add your project to your dashboard here. "),
            createVNode("p", { class: "text-sm" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam doloribus exercitationem dolores sint adipisci, soluta obcaecati accusamus, totam laborum deserunt cum in veniam eum delectus vero facilis. Harum, et tempora? ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/PositionDialogExample.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const PositionDialogExampleVue = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$l = {
  components: { BravePositionDialog }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BravePositionDialog = resolveComponent("BravePositionDialog");
  _push(`<!--[--><button type="button" class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><i class="bi me-2 fs-4 bi-window-stack"></i> Open Position Dialog </button> &lt;- Click here to see example. `);
  _push(ssrRenderComponent(_component_BravePositionDialog, {
    ref: "bravedialog",
    style: { "max-width": "500px" },
    class: "rounded-lg bg-white dark:bg-slate-800 dark:text-white mx-5 lg:w-1/2 shadow-2xl z-10 border"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex justify-between items-center2"${_scopeId}><div class="inline-block m-5 my-10"${_scopeId}><div class="h-14 w-14 rounded-full bg-green-200 flex justify-center content-center"${_scopeId}><i class="bi bi-plus text-green-500 m-auto text-2xl"${_scopeId}></i></div></div><div class="my-10"${_scopeId}><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3"${_scopeId}> You can add your project to your dashboard here. </h3><p class="text-sm"${_scopeId}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam doloribus exercitationem dolores sint adipisci, soluta obcaecati accusamus, </p></div><div class=""${_scopeId}><button class="m-2 text-2xl hover:text-red-600 hover:scale-150"${_scopeId}><i class="bi bi-x"${_scopeId}></i></button></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex justify-between items-center2" }, [
            createVNode("div", { class: "inline-block m-5 my-10" }, [
              createVNode("div", { class: "h-14 w-14 rounded-full bg-green-200 flex justify-center content-center" }, [
                createVNode("i", { class: "bi bi-plus text-green-500 m-auto text-2xl" })
              ])
            ]),
            createVNode("div", { class: "my-10" }, [
              createVNode("h3", { class: "text-lg font-semibold text-gray-900 dark:text-white mb-3" }, " You can add your project to your dashboard here. "),
              createVNode("p", { class: "text-sm" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam doloribus exercitationem dolores sint adipisci, soluta obcaecati accusamus, ")
            ]),
            createVNode("div", { class: "" }, [
              createVNode("button", {
                onClick: ($event) => _ctx.$refs.bravedialog.hide(),
                class: "m-2 text-2xl hover:text-red-600 hover:scale-150"
              }, [
                createVNode("i", { class: "bi bi-x" })
              ], 8, ["onClick"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/PositionDialogExampleOnClick.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const PositionDialogExampleOnClick = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$k = {
  components: { BravePositionDialog }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BravePositionDialog = resolveComponent("BravePositionDialog");
  _push(`<!--[--><button type="button" class="p-10 border-dashed border bg-slate-700 mr-5"> Right Click anywhere inside this Box. </button> &lt;- Right Click on the box to see example `);
  _push(ssrRenderComponent(_component_BravePositionDialog, {
    offset: 0,
    ref: "positionDialog2",
    class: "rounded-lg bg-white dark:bg-slate-900 inline-block dark:text-white mx-5 shadow-2xl border z-10"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="w-44 dark:bg-slate-900 border dark:border-slate-800 py-2 rounded-lg shadow-lg dark:text-slate-300 bg-white"${_scopeId}><div class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"${_scopeId}><i class="bi mr-2 text-xl bi-delete"${_scopeId}></i> Delete </div><div class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"${_scopeId}><i class="bi mr-2 text-xl bi-duplicate"${_scopeId}></i> Duplicate </div><div class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"${_scopeId}><i class="bi mr-2 text-xl bi-move"${_scopeId}></i> Move to Other </div></div>`);
      } else {
        return [
          createVNode("div", { class: "w-44 dark:bg-slate-900 border dark:border-slate-800 py-2 rounded-lg shadow-lg dark:text-slate-300 bg-white" }, [
            createVNode("div", { class: "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm" }, [
              createVNode("i", { class: "bi mr-2 text-xl bi-delete" }),
              createTextVNode(" Delete ")
            ]),
            createVNode("div", { class: "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm" }, [
              createVNode("i", { class: "bi mr-2 text-xl bi-duplicate" }),
              createTextVNode(" Duplicate ")
            ]),
            createVNode("div", { class: "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm" }, [
              createVNode("i", { class: "bi mr-2 text-xl bi-move" }),
              createTextVNode(" Move to Other ")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/PositionDialogContextMenu.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const PositionDialogContextMenu = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$j = {
  components: { BraveGistEmbed, PositionDialogExampleVue, BrTaTabs, BrTaSyntaxHighlighter, PositionDialogExampleOnClick, PositionDialogContextMenu }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BrTaTabs = resolveComponent("BrTaTabs");
  const _component_PositionDialogExampleVue = resolveComponent("PositionDialogExampleVue");
  const _component_BrTaSyntaxHighlighter = resolveComponent("BrTaSyntaxHighlighter");
  const _component_PositionDialogContextMenu = resolveComponent("PositionDialogContextMenu");
  const _component_PositionDialogExampleOnClick = resolveComponent("PositionDialogExampleOnClick");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 lg:p-16" }, _attrs))}><div class="py-6"><div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"><h1 class="text-4xl font-semibold mb-10"><i class="bi me-2 fs-4 bi-window-stack"></i> Position Dialog</h1><p> It is a modal dialog which is positioned based on the click position. </p><p> One of the Use case of Postion dialog is Help Box which open once your right click on the element. </p><h2 class="text-2xl font-semibold my-10">Examples</h2>`);
  _push(ssrRenderComponent(_component_BrTaTabs, {
    ref: "bravetabref",
    tabs: ["upload", "filemanager"],
    initialTab: "upload"
  }, {
    "tab-head-upload": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Show Dialog on Hover`);
      } else {
        return [
          createTextVNode("Show Dialog on Hover")
        ];
      }
    }),
    "tab-panel-upload": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PositionDialogExampleVue, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_PositionDialogExampleVue)
        ];
      }
    }),
    "tab-head-filemanager": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Code`);
      } else {
        return [
          createTextVNode("Code")
        ];
      }
    }),
    "tab-panel-filemanager": withCtx((_, _push2, _parent2, _scopeId) => {
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
  <button
    type="button"
    @mouseover.stop="
      $refs.positionDialog2.show($event)
    "
    @mouseleave="$refs.positionDialog2.hide()"
    class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    <i
      class="bi me-2 fs-4 bi-info-circle text-xl m-0 p-0 leading-none block"
    ></i>
  </button>
  <- Click here to see example.
  <BravePositionDialog
    ref="positionDialog2"
    style="max-width: 300px"
    class="rounded-lg bg-white dark:bg-slate-900 dark:text-white mx-5 max-w-xs shadow-2xl z-10"
  >
    <div class="m-5">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        You can add your project to your dashboard here.
      </h3>
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
  <button
    type="button"
    @mouseover.stop="
      $refs.positionDialog2.show($event)
    "
    @mouseleave="$refs.positionDialog2.hide()"
    class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    <i
      class="bi me-2 fs-4 bi-info-circle text-xl m-0 p-0 leading-none block"
    ></i>
  </button>
  <- Click here to see example.
  <BravePositionDialog
    ref="positionDialog2"
    style="max-width: 300px"
    class="rounded-lg bg-white dark:bg-slate-900 dark:text-white mx-5 max-w-xs shadow-2xl z-10"
  >
    <div class="m-5">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        You can add your project to your dashboard here.
      </h3>
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
  <button
    type="button"
    @mouseover.stop="
      $refs.positionDialog2.show($event)
    "
    @mouseleave="$refs.positionDialog2.hide()"
    class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    <i
      class="bi me-2 fs-4 bi-info-circle text-xl m-0 p-0 leading-none block"
    ></i>
  </button>
  <- Click here to see example.
  <BravePositionDialog
    ref="positionDialog2"
    style="max-width: 300px"
    class="rounded-lg bg-white dark:bg-slate-900 dark:text-white mx-5 max-w-xs shadow-2xl z-10"
  >
    <div class="m-5">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        You can add your project to your dashboard here.
      </h3>
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
  _push(ssrRenderComponent(_component_BrTaTabs, {
    ref: "bravetabref3",
    tabs: ["upload", "filemanager"],
    initialTab: "upload"
  }, {
    "tab-head-upload": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Show Dialog as Context Menu`);
      } else {
        return [
          createTextVNode("Show Dialog as Context Menu")
        ];
      }
    }),
    "tab-panel-upload": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PositionDialogContextMenu, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_PositionDialogContextMenu)
        ];
      }
    }),
    "tab-head-filemanager": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Code`);
      } else {
        return [
          createTextVNode("Code")
        ];
      }
    }),
    "tab-panel-filemanager": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BrTaSyntaxHighlighter, { language: "javascript" }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`PositionDialogWithContextMenu.vue`);
            } else {
              return [
                createTextVNode("PositionDialogWithContextMenu.vue")
              ];
            }
          }),
          code: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(`<template>
  <button
    type="button"
    @contextmenu.stop.prevent="
      $refs.positionDialog2.show({
        type: 'click',
        clientX: $event.clientX,
        clientY: $event.clientY,
      })
    "
    class="p-10  border-dashed border bg-slate-700 mr-5"> Right Click anywhere inside this Box.  </button>
   <- Right Click on the box to see example 
  <BravePositionDialog
    :offset="0"
    ref="positionDialog2"
    class="rounded-lg bg-white dark:bg-slate-900 inline-block dark:text-white mx-5 shadow-2xl border z-10"
  >
    <div
      class="w-44 dark:bg-slate-900 border dark:border-slate-800 py-2 rounded-lg shadow-lg dark:text-slate-300 bg-white"
    >
      <div
        class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
      >
        <i class="bi mr-2 text-xl bi-delete"></i> Delete
      </div>
      <div
        class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
      >
        <i class="bi mr-2 text-xl bi-duplicate"></i> Duplicate
      </div>
      <div
        class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
      >
        <i class="bi mr-2 text-xl bi-move"></i> Move to Other
      </div>
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
  <button
    type="button"
    @contextmenu.stop.prevent="
      $refs.positionDialog2.show({
        type: 'click',
        clientX: $event.clientX,
        clientY: $event.clientY,
      })
    "
    class="p-10  border-dashed border bg-slate-700 mr-5"> Right Click anywhere inside this Box.  </button>
   <- Right Click on the box to see example 
  <BravePositionDialog
    :offset="0"
    ref="positionDialog2"
    class="rounded-lg bg-white dark:bg-slate-900 inline-block dark:text-white mx-5 shadow-2xl border z-10"
  >
    <div
      class="w-44 dark:bg-slate-900 border dark:border-slate-800 py-2 rounded-lg shadow-lg dark:text-slate-300 bg-white"
    >
      <div
        class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
      >
        <i class="bi mr-2 text-xl bi-delete"></i> Delete
      </div>
      <div
        class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
      >
        <i class="bi mr-2 text-xl bi-duplicate"></i> Duplicate
      </div>
      <div
        class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
      >
        <i class="bi mr-2 text-xl bi-move"></i> Move to Other
      </div>
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
              createTextVNode("PositionDialogWithContextMenu.vue")
            ]),
            code: withCtx(() => [
              createTextVNode(toDisplayString(`<template>
  <button
    type="button"
    @contextmenu.stop.prevent="
      $refs.positionDialog2.show({
        type: 'click',
        clientX: $event.clientX,
        clientY: $event.clientY,
      })
    "
    class="p-10  border-dashed border bg-slate-700 mr-5"> Right Click anywhere inside this Box.  </button>
   <- Right Click on the box to see example 
  <BravePositionDialog
    :offset="0"
    ref="positionDialog2"
    class="rounded-lg bg-white dark:bg-slate-900 inline-block dark:text-white mx-5 shadow-2xl border z-10"
  >
    <div
      class="w-44 dark:bg-slate-900 border dark:border-slate-800 py-2 rounded-lg shadow-lg dark:text-slate-300 bg-white"
    >
      <div
        class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
      >
        <i class="bi mr-2 text-xl bi-delete"></i> Delete
      </div>
      <div
        class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
      >
        <i class="bi mr-2 text-xl bi-duplicate"></i> Duplicate
      </div>
      <div
        class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
      >
        <i class="bi mr-2 text-xl bi-move"></i> Move to Other
      </div>
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
  _push(ssrRenderComponent(_component_BrTaTabs, {
    ref: "bravetabref2",
    tabs: ["upload", "filemanager"],
    initialTab: "upload"
  }, {
    "tab-head-upload": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Show Dialog on Click`);
      } else {
        return [
          createTextVNode("Show Dialog on Click")
        ];
      }
    }),
    "tab-panel-upload": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PositionDialogExampleOnClick, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_PositionDialogExampleOnClick)
        ];
      }
    }),
    "tab-head-filemanager": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Code`);
      } else {
        return [
          createTextVNode("Code")
        ];
      }
    }),
    "tab-panel-filemanager": withCtx((_, _push2, _parent2, _scopeId) => {
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
  <button
    type="button"
    @click.stop="$refs.bravedialog.show($event)"
    class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    <i class="bi me-2 fs-4 bi-window-stack"></i> Open Position Dialog
  </button>
  <- Click here to see example.
  <BravePositionDialog
    ref="bravedialog"
    style="max-width: 500px"
    class="rounded-lg bg-white dark:bg-slate-800 dark:text-white mx-5 lg:w-1/2 shadow-2xl z-10"
  >
    <div class="flex justify-between items-center2">
      <div class="inline-block m-5 my-10">
        <div
          class="h-14 w-14 rounded-full bg-green-200 flex justify-center content-center"
        >
          <i class="bi bi-plus text-green-500 m-auto text-2xl"></i>
        </div>
      </div>
      <div class="my-10">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          You can add your project to your dashboard here.
        </h3>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          doloribus exercitationem dolores sint adipisci, soluta obcaecati
          accusamus,
        </p>
      </div>
      <div class="">
        <button
          @click="$refs.bravedialog.hide()"
          class="m-2 text-2xl hover:text-red-600 hover:scale-150"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
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
  <button
    type="button"
    @click.stop="$refs.bravedialog.show($event)"
    class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    <i class="bi me-2 fs-4 bi-window-stack"></i> Open Position Dialog
  </button>
  <- Click here to see example.
  <BravePositionDialog
    ref="bravedialog"
    style="max-width: 500px"
    class="rounded-lg bg-white dark:bg-slate-800 dark:text-white mx-5 lg:w-1/2 shadow-2xl z-10"
  >
    <div class="flex justify-between items-center2">
      <div class="inline-block m-5 my-10">
        <div
          class="h-14 w-14 rounded-full bg-green-200 flex justify-center content-center"
        >
          <i class="bi bi-plus text-green-500 m-auto text-2xl"></i>
        </div>
      </div>
      <div class="my-10">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          You can add your project to your dashboard here.
        </h3>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          doloribus exercitationem dolores sint adipisci, soluta obcaecati
          accusamus,
        </p>
      </div>
      <div class="">
        <button
          @click="$refs.bravedialog.hide()"
          class="m-2 text-2xl hover:text-red-600 hover:scale-150"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
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
  <button
    type="button"
    @click.stop="$refs.bravedialog.show($event)"
    class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    <i class="bi me-2 fs-4 bi-window-stack"></i> Open Position Dialog
  </button>
  <- Click here to see example.
  <BravePositionDialog
    ref="bravedialog"
    style="max-width: 500px"
    class="rounded-lg bg-white dark:bg-slate-800 dark:text-white mx-5 lg:w-1/2 shadow-2xl z-10"
  >
    <div class="flex justify-between items-center2">
      <div class="inline-block m-5 my-10">
        <div
          class="h-14 w-14 rounded-full bg-green-200 flex justify-center content-center"
        >
          <i class="bi bi-plus text-green-500 m-auto text-2xl"></i>
        </div>
      </div>
      <div class="my-10">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          You can add your project to your dashboard here.
        </h3>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          doloribus exercitationem dolores sint adipisci, soluta obcaecati
          accusamus,
        </p>
      </div>
      <div class="">
        <button
          @click="$refs.bravedialog.hide()"
          class="m-2 text-2xl hover:text-red-600 hover:scale-150"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
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
  _push(`</div><hr></div></main>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/PositionDialog.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const PositionDialog = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$i = {
  data() {
    return {
      nodeTree: [
        {
          "id": 1,
          "component_name": "text",
          "data": {
            "selfData": {
              "text": "This is a text11123"
            }
          }
        },
        {
          "id": 2,
          "component_name": "text",
          "data": {
            "selfData": {
              "text": "This is a text"
            }
          }
        },
        {
          "component_name": "if",
          "id": 3,
          "data": {
            "selfData": {
              "text": "This is a if condition"
            },
            "childNodes": [
              {
                "id": 4,
                "component_name": "text",
                "data": {
                  "selfData": {
                    "text": "This is a text"
                  }
                }
              },
              {
                "id": 5,
                "component_name": "text",
                "data": {
                  "selfData": {
                    "text": "This is a text"
                  }
                }
              }
            ]
          }
        }
      ]
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/tree_seed_data.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  mixins: [_sfc_main$i],
  data() {
    return {
      message: "Hello World"
    };
  },
  methods: {
    insertNode() {
      alert("hello");
      this.nodeTree.push({
        "id": v4$1(),
        "component_name": "text",
        "data": {
          "selfData": {
            "text": "This is a text"
          }
        }
      });
    }
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RenderTree1 = resolveComponent("RenderTree1");
  _push(`<!--[--><h1>You can edit this text by clicking</h1><div class="flex"><div class="bg-slate-100">Button 1</div><div class="bg-slate-100">Button 2</div></div>`);
  _push(ssrRenderComponent(_component_RenderTree1, {
    modelValue: _ctx.nodeTree,
    "onUpdate:modelValue": ($event) => _ctx.nodeTree = $event
  }, null, _parent));
  _push(`<hr><pre>        ${ssrInterpolate(_ctx.nodeTree)}
    </pre><!--]-->`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/NodeTree.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const NodeTree = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$g = {
  components: { BraveDropMenu: BraveDropMenu$2 }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveDropMenu = resolveComponent("BraveDropMenu", true);
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_BraveDropMenu, {
    ref: "dropmenu2",
    class: "me-3"
  }, {
    button: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div role="button" class="dark:bg-slate-900 dark:hover:bg-slate-800 border dark:border-slate-500 border-slate-200 p-2 px-4 mr-5 rounded-lg shadow-sm dark:text-white bg-white hover:shadow dark:hover:border-slate-500 hover:border-slate-300"${_scopeId}>Documentation <i class="bi bi-chevron-down"${_scopeId}></i></div>`);
      } else {
        return [
          createVNode("div", {
            role: "button",
            class: "dark:bg-slate-900 dark:hover:bg-slate-800 border dark:border-slate-500 border-slate-200 p-2 px-4 mr-5 rounded-lg shadow-sm dark:text-white bg-white hover:shadow dark:hover:border-slate-500 hover:border-slate-300"
          }, [
            createTextVNode("Documentation "),
            createVNode("i", { class: "bi bi-chevron-down" })
          ])
        ];
      }
    }),
    menu: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="w-44 dark:bg-slate-900 border dark:border-slate-800 py-2 rounded-lg shadow-lg dark:text-slate-300 bg-white"${_scopeId}><div class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"${_scopeId}><i class="bi mr-2 text-xl bi-window"${_scopeId}></i> Brave Dialog</div><div class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"${_scopeId}><i class="bi mr-2 text-xl bi-window-stack"${_scopeId}></i> Position Dialog</div><div class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"${_scopeId}><i class="bi mr-2 text-xl bi-menu-button-wide"${_scopeId}></i> Drop Menu</div><div class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"${_scopeId}><i class="bi mr-2 text-xl bi-github"${_scopeId}></i> Gist Embed</div></div>`);
      } else {
        return [
          createVNode("div", { class: "w-44 dark:bg-slate-900 border dark:border-slate-800 py-2 rounded-lg shadow-lg dark:text-slate-300 bg-white" }, [
            createVNode("div", {
              onClick: ($event) => _ctx.$refs.dropmenu2.hide(),
              class: "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
            }, [
              createVNode("i", { class: "bi mr-2 text-xl bi-window" }),
              createTextVNode(" Brave Dialog")
            ], 8, ["onClick"]),
            createVNode("div", {
              onClick: ($event) => _ctx.$refs.dropmenu2.hide(),
              class: "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
            }, [
              createVNode("i", { class: "bi mr-2 text-xl bi-window-stack" }),
              createTextVNode(" Position Dialog")
            ], 8, ["onClick"]),
            createVNode("div", {
              onClick: ($event) => _ctx.$refs.dropmenu2.hide(),
              class: "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
            }, [
              createVNode("i", { class: "bi mr-2 text-xl bi-menu-button-wide" }),
              createTextVNode(" Drop Menu")
            ], 8, ["onClick"]),
            createVNode("div", {
              onClick: ($event) => _ctx.$refs.dropmenu2.hide(),
              class: "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm"
            }, [
              createVNode("i", { class: "bi mr-2 text-xl bi-github" }),
              createTextVNode(" Gist Embed")
            ], 8, ["onClick"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BraveDropMenu, {
    ref: "dropmenu",
    class: "me-3"
  }, {
    button: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div role="button" class="dark:bg-slate-900 border dark:hover:bg-slate-800 border dark:border-slate-800 p-2 px-5 rounded-lg shadow-sm dark:text-white bg-white hover:shadow-lg"${_scopeId}>Select Theme <i class="bi bi-chevron-expand"${_scopeId}></i></div>`);
      } else {
        return [
          createVNode("div", {
            role: "button",
            class: "dark:bg-slate-900 border dark:hover:bg-slate-800 border dark:border-slate-800 p-2 px-5 rounded-lg shadow-sm dark:text-white bg-white hover:shadow-lg"
          }, [
            createTextVNode("Select Theme "),
            createVNode("i", { class: "bi bi-chevron-expand" })
          ])
        ];
      }
    }),
    menu: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="w-44 dark:bg-slate-900 border dark:border-slate-800 py-2 rounded-lg shadow-lg dark:text-slate-300 bg-white text-lg"${_scopeId}><div class="${ssrRenderClass([[_ctx.mode == "dark" ? "dark:bg-slate-800" : ""], "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3"])}"${_scopeId}><i class="text-yellow-500 bi bi-moon-stars-fill mr-2"${_scopeId}></i> Dark</div><div class="${ssrRenderClass([[_ctx.mode == "light" ? "bg-blue-100" : ""], "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3"])}"${_scopeId}><i class="text-blue-500 bi bi-brightness-high-fill mr-2"${_scopeId}></i> Light</div><div class="${ssrRenderClass([[_ctx.mode == "system" ? "bg-blue-100 dark:bg-slate-800" : ""], "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3"])}"${_scopeId}><i class="bi bi-display mr-2"${_scopeId}></i> System</div></div>`);
      } else {
        return [
          createVNode("div", { class: "w-44 dark:bg-slate-900 border dark:border-slate-800 py-2 rounded-lg shadow-lg dark:text-slate-300 bg-white text-lg" }, [
            createVNode("div", {
              class: [[_ctx.mode == "dark" ? "dark:bg-slate-800" : ""], "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3"],
              onClick: ($event) => _ctx.$refs.dropmenu.hide()
            }, [
              createVNode("i", { class: "text-yellow-500 bi bi-moon-stars-fill mr-2" }),
              createTextVNode(" Dark")
            ], 10, ["onClick"]),
            createVNode("div", {
              class: [[_ctx.mode == "light" ? "bg-blue-100" : ""], "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3"],
              onClick: ($event) => _ctx.$refs.dropmenu.hide()
            }, [
              createVNode("i", { class: "text-blue-500 bi bi-brightness-high-fill mr-2" }),
              createTextVNode(" Light")
            ], 10, ["onClick"]),
            createVNode("div", {
              class: [[_ctx.mode == "system" ? "bg-blue-100 dark:bg-slate-800" : ""], "dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3"],
              onClick: ($event) => _ctx.$refs.dropmenu.hide()
            }, [
              createVNode("i", { class: "bi bi-display mr-2" }),
              createTextVNode(" System")
            ], 10, ["onClick"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/BraveDropMenu.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const BraveDropMenu$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$f = {
  mounted() {
    useHead({
      title: "DropMenu for Vue 3 | Brave Components Library.",
      meta: [
        {
          name: "description",
          content: "Show Menus for Navigation or any purpose, you can control the clicks of each option as you want. Full Control over Style"
        },
        {
          name: "keywords",
          content: "Drop Menu, Component, Vue3, BraveVue, Javascript"
        },
        {
          name: "author",
          content: "Shishir Raven"
        }
      ]
    });
  },
  components: { BraveGistEmbed, BraveDropMenu: BraveDropMenu$1 }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveDropMenu = resolveComponent("BraveDropMenu", true);
  const _component_BraveGistEmbed = resolveComponent("BraveGistEmbed");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 lg:p-16" }, _attrs))}><div class="py-6"><div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"><h1 class="text-4xl font-semibold mb-10"><i class="bi me-2 text-xl bi-menu-button-wide"></i> Brave Drop Menu</h1><p>Show Menus for Navigation or any purpose, you can control the clicks of each option as you want. </p><p> You have full control of style and functionality.</p><div class="mt-5">`);
  _push(ssrRenderComponent(_component_BraveDropMenu, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_BraveGistEmbed, {
    class: "my-10",
    url: "https://gist.github.com/shishirraven/9a1d9d9f654c7c0ee1c5de5c07ebe5c1"
  }, null, _parent));
  _push(`</div><hr></div></main>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/BraveDropMenu.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const BraveDropMenu = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$e = {
  mounted() {
    useHead({
      title: "Gist Embed Component for Vue 3 | Brave Components Library.",
      meta: [
        {
          name: "description",
          content: "use this Component to embed Github Gist, right now it solves the problem which one faces while using the script tag embed code given by Gist."
        },
        {
          name: "keywords",
          content: "Gist Embed Component, Component, Vue3, BraveVue, Javascript "
        },
        {
          name: "author",
          content: "Shishir Raven"
        }
      ]
    });
  },
  components: { BraveGistEmbed }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveGistEmbed = resolveComponent("BraveGistEmbed");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 lg:p-16" }, _attrs))}><div class="py-6"><div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"><h1 class="text-4xl font-semibold mb-10"><i class="bi me-2 bi-github"></i> Brave Gist Embed </h1><p> You can use this Component to embed Github Gist, right now it solves the problem which one faces while using the script tag embed code given by Gist. </p><h2 class="text-2xl mt-7 mb-4">Example</h2><p>The following is an Embed by BraveGistEmbed component</p>`);
  _push(ssrRenderComponent(_component_BraveGistEmbed, {
    class: "my-10",
    url: "https://gist.github.com/shishirraven/de437adec76659671c4b6d2d45630375"
  }, null, _parent));
  _push(`<h2 class="text-2xl mt-7 mb-4">Full Example Code</h2>`);
  _push(ssrRenderComponent(_component_BraveGistEmbed, {
    class: "my-10",
    url: "https://gist.github.com/shishirraven/4d1768257ce8b3d34a8e4a092a6fcc45"
  }, null, _parent));
  _push(`</div><hr></div></main>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/BraveGist.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const BraveGist = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$d = {
  components: { BraveSelect: BraveSelect$2 },
  data() {
    return {
      selectValue: { name: "Vue.js", language: "JavaScript" },
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP", $isDisabled: true },
        { name: "Phoenix", language: "Elixir" }
      ]
    };
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveSelect = resolveComponent("BraveSelect", true);
  _push(ssrRenderComponent(_component_BraveSelect, mergeProps({
    class: "relative inline-block",
    modelValue: $data.selectValue,
    "onUpdate:modelValue": ($event) => $data.selectValue = $event,
    options: $data.options,
    "dropdown-class": "shadow rounded border absolute z-10 dark:bg-slate-900 bg-white right-0 left-0"
  }, _attrs), {
    button: withCtx(({ selectedValue }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div role="button" class="dark:bg-slate-900 dark:hover:bg-slate-800 border dark:border-slate-500 border-slate-200 p-2 px-4 rounded-lg shadow-sm dark:text-white bg-white flex hover:shadow dark:hover:border-slate-500 hover:border-slate-300"${_scopeId}>`);
        if (selectedValue != null) {
          _push2(`<div${_scopeId}><strong${_scopeId}>${ssrInterpolate(selectedValue.name)}</strong> is written in <strong${_scopeId}>${ssrInterpolate(selectedValue.language)}</strong></div>`);
        } else {
          _push2(`<div${_scopeId}>Select a Language</div>`);
        }
        _push2(`<i class="ml-5 bi bi-chevron-down"${_scopeId}></i></div>`);
      } else {
        return [
          createVNode("div", {
            role: "button",
            class: "dark:bg-slate-900 dark:hover:bg-slate-800 border dark:border-slate-500 border-slate-200 p-2 px-4 rounded-lg shadow-sm dark:text-white bg-white flex hover:shadow dark:hover:border-slate-500 hover:border-slate-300"
          }, [
            selectedValue != null ? (openBlock(), createBlock("div", { key: 0 }, [
              createVNode("strong", null, toDisplayString(selectedValue.name), 1),
              createTextVNode(" is written in "),
              createVNode("strong", null, toDisplayString(selectedValue.language), 1)
            ])) : (openBlock(), createBlock("div", { key: 1 }, "Select a Language")),
            createVNode("i", { class: "ml-5 bi bi-chevron-down" })
          ])
        ];
      }
    }),
    menu: withCtx(({ option, selectedValue }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div role="button" class="${ssrRenderClass([{
          "dark:bg-slate-800 bg-slate-200": JSON.stringify(selectedValue) == JSON.stringify(option)
        }, "dark:hover:bg-slate-800 hover:bg-slate-200 dark:text-white cursor-pointer w-100 py-1 px-3"])}"${_scopeId}>${ssrInterpolate(option.name)}</div>`);
      } else {
        return [
          createVNode("div", {
            role: "button",
            class: [{
              "dark:bg-slate-800 bg-slate-200": JSON.stringify(selectedValue) == JSON.stringify(option)
            }, "dark:hover:bg-slate-800 hover:bg-slate-200 dark:text-white cursor-pointer w-100 py-1 px-3"]
          }, toDisplayString(option.name), 3)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/BraveSelect.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const BraveSelect$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$c = {
  mounted() {
    useHead({
      title: "Select Input Component for Vue 3 | Brave Components Library.",
      meta: [
        {
          name: "description",
          content: "Select Input Component with which you can use your own templates and have full control of the styling."
        },
        {
          name: "keywords",
          content: "Select, Input Component, Component, Advance Select Component, Vue 3, Javascript "
        },
        {
          name: "author",
          content: "Shishir Raven"
        }
      ]
    });
  },
  components: { BraveGistEmbed, BraveSelect: BraveSelect$1 }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveSelect = resolveComponent("BraveSelect", true);
  const _component_BraveGistEmbed = resolveComponent("BraveGistEmbed");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 lg:p-16" }, _attrs))}><div class="py-6"><div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"><h1 class="text-4xl font-semibold mb-10"><i class="bi me-2 text-xl bi-menu-button-wide"></i> Brave Select</h1><p>Show Options from your Data and save the result through v-model.</p><div class="mt-5">`);
  _push(ssrRenderComponent(_component_BraveSelect, null, null, _parent));
  _push(` &lt;-- Example </div><hr class="my-10"><h2 class="text-2xl font-semibold mb-5">How is Brave Select Different</h2><h3 class="text-xl font-semibold mb-2">Brave Select uses an Array of Objects for Options</h3><p>Brave Select is designed to loop an array of objects. which means you can use the objects properties on on the Selected Value and also the options. </p><p> A common use case would be if you are using an icon along with the text. This would be helpful to show the icon along with the text. </p><p></p><h3 class="text-xl font-semibold mt-7 mb-2">Super flexible templates</h3><p>You can customize the templates in whatever way you want and can use properties of the object how ever you like. </p>`);
  _push(ssrRenderComponent(_component_BraveGistEmbed, {
    class: "my-10",
    url: "https://gist.github.com/shishirraven/b6061b96eb6301c7aa014b902fb8b36c"
  }, null, _parent));
  _push(`</div><hr class="my-5"></div></main>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/BraveSelect.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const BraveSelect = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$b = {
  name: "AppVue",
  data() {
    return {
      config: {
        radius: 150,
        radiusIcons: 30,
        circlePadding: 30,
        visible: false,
        classBackdrop: "back-drop transition-all backdrop-blur-sm2",
        class: "border transition-all shadow white font-mono uppercase font-thin text-gray-900 text-sm bg-white/90 backdrop-blur"
      },
      items: [
        {
          "title": "Flooring",
          "src": "/assets/flooring.svg",
          "href": "http://www.iamshishir.com"
        },
        {
          "title": "Paint",
          "src": "/assets/paint.svg",
          "href": "http://www.iamshishir.com"
        },
        {
          "title": "Backsplash",
          "src": "/assets/backsplash.svg",
          "href": "http://www.iamshishir.com"
        },
        {
          "title": "Countertop",
          "src": "/assets/countertop-icon.svg",
          "href": "http://www.iamshishir.com"
        },
        {
          "title": "Cabinet",
          "src": "/assets/cabinet.svg",
          "href": "http://www.iamshishir.com"
        },
        {
          "title": "Hardware",
          "src": "/assets/knob.svg",
          "href": "http://www.iamshishir.com"
        },
        {
          "title": "Faucet",
          "src": "/assets/faucet.svg",
          "href": "http://www.iamshishir.com"
        },
        {
          "title": "Appliances",
          "src": "/assets/appliance.svg",
          "href": "http://www.iamshishir.com"
        }
      ]
    };
  },
  components: {
    BraveRadialMenu: BraveRadialMenu$1
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveRadialMenu = resolveComponent("BraveRadialMenu");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_BraveRadialMenu, {
    ref: "BraveradialMenu2",
    class: ["shishir", $data.config.class],
    radius: $data.config.radius,
    "radius-icons": $data.config.radiusIcons,
    "circle-padding": $data.config.circlePadding,
    visible: $data.config.visible,
    classBackdrop: $data.config.classBackdrop,
    onShow: ($event) => $data.config.visible = true,
    onHide: ($event) => $data.config.visible = false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div title="More" class="overflow-clip cursor-pointer z-50 transition-all flex justify-center border border-slate-300 scale-125 hover:scale-150 items-center"${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></div><!--[-->`);
        ssrRenderList($data.items, (item, index) => {
          _push2(`<a${ssrRenderAttr("href", item.href)}${ssrRenderAttr("title", item.title)} class="overflow-clip p-3 transition-all flex justify-center hover:scale-110 items-center border-gray-100 borders"${_scopeId}><img class="w-full h-full object-cover"${ssrRenderAttr("src", item.src)}${ssrRenderAttr("alt", item.title)}${_scopeId}></a>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("div", {
            onClick: withModifiers(($event) => _ctx.$refs.BraveradialMenu2.hide(), ["stop"]),
            title: "More",
            class: "overflow-clip cursor-pointer z-50 transition-all flex justify-center border border-slate-300 scale-125 hover:scale-150 items-center"
          }, [
            (openBlock(), createBlock("svg", {
              class: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              })
            ]))
          ], 8, ["onClick"]),
          (openBlock(true), createBlock(Fragment, null, renderList($data.items, (item, index) => {
            return openBlock(), createBlock("a", {
              key: index,
              href: item.href,
              title: item.title,
              class: "overflow-clip p-3 transition-all flex justify-center hover:scale-110 items-center border-gray-100 borders"
            }, [
              createVNode("img", {
                class: "w-full h-full object-cover",
                src: item.src,
                alt: item.title
              }, null, 8, ["src", "alt"])
            ], 8, ["href", "title"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="h-96 bg-white flex items-center justify-center"><div class="text-gray-500 text-lg font-bold"> Click anywhere on the white area to show the radial menu </div></div><!--]-->`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/BrRadialMenu.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const BraveRadialMenu = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = {
  mounted() {
    useHead({
      title: "Tags Input Component for Vue 3 | BraveVue Component Library ",
      meta: [
        {
          name: "description",
          content: "Tabs by BraveVue Component Library make it easy to explore and switch between different views"
        },
        {
          name: "keywords",
          content: "tab, tabs, tabbed, styless, headless, bravevue, vue 3, javascript"
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
    BraveTabs: BraveTabs$1,
    BrTaSyntaxHighlighter,
    BrTaTabs,
    PillsTab
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BrTaTabs = resolveComponent("BrTaTabs");
  const _component_BraveTabs = resolveComponent("BraveTabs", true);
  const _component_BrTaSyntaxHighlighter = resolveComponent("BrTaSyntaxHighlighter");
  const _component_PillsTab = resolveComponent("PillsTab");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 p-4 lg:p-10 xl:p-16" }, _attrs))}><div class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block"><h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100"> On this page </h5><div id="navigation"><ul class="navtext-slate-700 text-sm leading-6"><li class="mb-2"><a href="#introduction" class="text-slate-900 dark:text-slate-100"> Introduction </a></li><li class="mb-2"><a href="#live-example" class="text-slate-900 dark:text-slate-100"> Live example </a></li><li class="mb-2"><a href="#tailwindcss-styled-pills-example" class="text-slate-900 dark:text-slate-100"> Pills Styled example with Tailwind CSS </a></li><li class><a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="#props">Props</a></li><li class><a class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="#slots">Slots</a></li></ul></div></div><div class="prose dark:prose-invert prose-slate"><h1 id="introduction"><i class="bi bi-segmented-nav"></i> Brave Tabs</h1><p>Tabs make it easy to explore and switch between different views.</p><p>Brave Tabs is a Vue 3 component that allows you to create tabs with a simple and easy to use API.</p><h3 id="live-example">Live Example</h3>`);
  _push(ssrRenderComponent(_component_BrTaTabs, {
    class: "not-prose",
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
        _push2(ssrRenderComponent(_component_BraveTabs, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BraveTabs)
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
`)}`);
            } else {
              return [
                createTextVNode(toDisplayString(`<template>
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
`), 1)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="tailwindcss-styled-pills-example">Pills Tab Style with Tailwind CSS</h3>`);
  _push(ssrRenderComponent(_component_BrTaTabs, {
    class: "not-prose",
    tabs: ["example", "code", "stackblitz"],
    initialTab: "example"
  }, {
    "after-tab": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-right grow"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "text-right grow" })
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
        _push2(`<iframe src="https://stackblitz.com/edit/vitejs-vite-truwea?embed=1&amp;file=src/components/HorizontalPillTabs.vue&amp;hideNavigation=1&amp;view=preview" style="${ssrRenderStyle({ "width": "100%", "height": "500px", "border": "0", "border-radius": "4px", "overflow": "hidden" })}" allowfullscreen="allowfullscreen" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"${_scopeId}></iframe>`);
      } else {
        return [
          createVNode("iframe", {
            src: "https://stackblitz.com/edit/vitejs-vite-truwea?embed=1&file=src/components/HorizontalPillTabs.vue&hideNavigation=1&view=preview",
            style: { "width": "100%", "height": "500px", "border": "0", "border-radius": "4px", "overflow": "hidden" },
            allowfullscreen: "allowfullscreen",
            sandbox: "allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          })
        ];
      }
    }),
    "tab-head-example": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pills Styled Example`);
      } else {
        return [
          createTextVNode("Pills Styled Example")
        ];
      }
    }),
    "tab-panel-example": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PillsTab, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_PillsTab)
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
    <BraveTabs ref="bravetabref" class="overflow-hidden dark:bg-slate-900 p-5"
        tabsWrapperClass="flex mx-auto max-w-min bg-slate-200 dark:bg-slate-800 p-1 rounded-xl"
        tab-button-class="rounded-xl px-10 sm:px-10 py-2 dark:text-slate-400 whitespace-nowrap cursor-pointer text-center duration-200"
        tab-button-active-class="px-10 sm:px-10 rounded-xl bg-slate-900 dark:bg-slate-900 text-white whitespace-nowrap py-2 cursor-pointer text-center duration-200 shadow-md"
        tabs-content-class="mt-5 rounded-lg border dark:border-slate-800 py-7 px-7 dark:text-white"
        v-bind:tabs="['a', 'b', 'c']" initialTab="a">


        <!-- ================================================================ -->
        <!-- TAB-A: HEAD & CONTENT PANEL  -->
        <!-- ================================================================ -->

        <!-- TAB-A: HEAD PANEL  -->
        <template #tab-head-a>
            <span class="uppercase">Mobile</span>
        </template>

        <!-- TAB-A: CONTENT PANEL  -->
        <template #tab-panel-a>
            <div class="text-2xl font-bold mb-5 text-center uppercase">
                Mobile Tab Panel
            </div>
            <div class="columns-1 sm:columns-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa
                itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis
                dolorum autem sapiente similique non, architecto porro maxime blanditiis
                obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione
                ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id
                adipisci pariatur! Sapiente, dolore?
            </div>
        </template>

        <!-- ================================================================ -->
        <!-- TAB-B: HEAD & CONTENT PANEL  -->
        <!-- ================================================================ -->

        <!-- TAB-B: HEAD PANEL  -->
        <template #tab-head-b>
            <span class="uppercase">Tv</span>
        </template>

        <!-- TAB-B: CONTENT PANEL  -->
        <template #tab-panel-b>
            <div class="text-2xl font-bold mb-5 text-center uppercase">
                Tv Tab Panel
            </div>
            <div class="columns-1 sm:columns-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa
                itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis
                dolorum autem sapiente similique non, architecto porro maxime blanditiis
                obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione
                ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id
                adipisci pariatur! Sapiente, dolore?
            </div>
        </template>

        <!-- ================================================================ -->
        <!-- TAB-C: HEAD & CONTENT PANEL  -->
        <!-- ================================================================ -->

        <!-- TAB-C: HEAD PANEL  -->
        <template #tab-head-c>
            <span class="uppercase">Appliances</span>
        </template>

        <!-- TAB-C: CONTENT PANEL  -->
        <template #tab-panel-c>
            <div class="text-2xl font-bold mb-5 text-center uppercase">
                Appliances Tab Panel
            </div>
            <div class="columns-1 sm:columns-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa
                itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis
                dolorum autem sapiente similique non, architecto porro maxime blanditiis
                obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione
                ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id
                adipisci pariatur! Sapiente, dolore?
            </div>
        </template>
    </BraveTabs>
</template>
  
<script>
import { BraveTabs } from 'bravevue';
export default {
    components: {
        BraveTabs,
    },
};
<\/script>`)}`);
            } else {
              return [
                createTextVNode(toDisplayString(`<template>
    <BraveTabs ref="bravetabref" class="overflow-hidden dark:bg-slate-900 p-5"
        tabsWrapperClass="flex mx-auto max-w-min bg-slate-200 dark:bg-slate-800 p-1 rounded-xl"
        tab-button-class="rounded-xl px-10 sm:px-10 py-2 dark:text-slate-400 whitespace-nowrap cursor-pointer text-center duration-200"
        tab-button-active-class="px-10 sm:px-10 rounded-xl bg-slate-900 dark:bg-slate-900 text-white whitespace-nowrap py-2 cursor-pointer text-center duration-200 shadow-md"
        tabs-content-class="mt-5 rounded-lg border dark:border-slate-800 py-7 px-7 dark:text-white"
        v-bind:tabs="['a', 'b', 'c']" initialTab="a">


        <!-- ================================================================ -->
        <!-- TAB-A: HEAD & CONTENT PANEL  -->
        <!-- ================================================================ -->

        <!-- TAB-A: HEAD PANEL  -->
        <template #tab-head-a>
            <span class="uppercase">Mobile</span>
        </template>

        <!-- TAB-A: CONTENT PANEL  -->
        <template #tab-panel-a>
            <div class="text-2xl font-bold mb-5 text-center uppercase">
                Mobile Tab Panel
            </div>
            <div class="columns-1 sm:columns-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa
                itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis
                dolorum autem sapiente similique non, architecto porro maxime blanditiis
                obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione
                ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id
                adipisci pariatur! Sapiente, dolore?
            </div>
        </template>

        <!-- ================================================================ -->
        <!-- TAB-B: HEAD & CONTENT PANEL  -->
        <!-- ================================================================ -->

        <!-- TAB-B: HEAD PANEL  -->
        <template #tab-head-b>
            <span class="uppercase">Tv</span>
        </template>

        <!-- TAB-B: CONTENT PANEL  -->
        <template #tab-panel-b>
            <div class="text-2xl font-bold mb-5 text-center uppercase">
                Tv Tab Panel
            </div>
            <div class="columns-1 sm:columns-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa
                itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis
                dolorum autem sapiente similique non, architecto porro maxime blanditiis
                obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione
                ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id
                adipisci pariatur! Sapiente, dolore?
            </div>
        </template>

        <!-- ================================================================ -->
        <!-- TAB-C: HEAD & CONTENT PANEL  -->
        <!-- ================================================================ -->

        <!-- TAB-C: HEAD PANEL  -->
        <template #tab-head-c>
            <span class="uppercase">Appliances</span>
        </template>

        <!-- TAB-C: CONTENT PANEL  -->
        <template #tab-panel-c>
            <div class="text-2xl font-bold mb-5 text-center uppercase">
                Appliances Tab Panel
            </div>
            <div class="columns-1 sm:columns-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa
                itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis
                dolorum autem sapiente similique non, architecto porro maxime blanditiis
                obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione
                ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id
                adipisci pariatur! Sapiente, dolore?
            </div>
        </template>
    </BraveTabs>
</template>
  
<script>
import { BraveTabs } from 'bravevue';
export default {
    components: {
        BraveTabs,
    },
};
<\/script>`), 1)
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
    <BraveTabs ref="bravetabref" class="overflow-hidden dark:bg-slate-900 p-5"
        tabsWrapperClass="flex mx-auto max-w-min bg-slate-200 dark:bg-slate-800 p-1 rounded-xl"
        tab-button-class="rounded-xl px-10 sm:px-10 py-2 dark:text-slate-400 whitespace-nowrap cursor-pointer text-center duration-200"
        tab-button-active-class="px-10 sm:px-10 rounded-xl bg-slate-900 dark:bg-slate-900 text-white whitespace-nowrap py-2 cursor-pointer text-center duration-200 shadow-md"
        tabs-content-class="mt-5 rounded-lg border dark:border-slate-800 py-7 px-7 dark:text-white"
        v-bind:tabs="['a', 'b', 'c']" initialTab="a">


        <!-- ================================================================ -->
        <!-- TAB-A: HEAD & CONTENT PANEL  -->
        <!-- ================================================================ -->

        <!-- TAB-A: HEAD PANEL  -->
        <template #tab-head-a>
            <span class="uppercase">Mobile</span>
        </template>

        <!-- TAB-A: CONTENT PANEL  -->
        <template #tab-panel-a>
            <div class="text-2xl font-bold mb-5 text-center uppercase">
                Mobile Tab Panel
            </div>
            <div class="columns-1 sm:columns-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa
                itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis
                dolorum autem sapiente similique non, architecto porro maxime blanditiis
                obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione
                ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id
                adipisci pariatur! Sapiente, dolore?
            </div>
        </template>

        <!-- ================================================================ -->
        <!-- TAB-B: HEAD & CONTENT PANEL  -->
        <!-- ================================================================ -->

        <!-- TAB-B: HEAD PANEL  -->
        <template #tab-head-b>
            <span class="uppercase">Tv</span>
        </template>

        <!-- TAB-B: CONTENT PANEL  -->
        <template #tab-panel-b>
            <div class="text-2xl font-bold mb-5 text-center uppercase">
                Tv Tab Panel
            </div>
            <div class="columns-1 sm:columns-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa
                itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis
                dolorum autem sapiente similique non, architecto porro maxime blanditiis
                obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione
                ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id
                adipisci pariatur! Sapiente, dolore?
            </div>
        </template>

        <!-- ================================================================ -->
        <!-- TAB-C: HEAD & CONTENT PANEL  -->
        <!-- ================================================================ -->

        <!-- TAB-C: HEAD PANEL  -->
        <template #tab-head-c>
            <span class="uppercase">Appliances</span>
        </template>

        <!-- TAB-C: CONTENT PANEL  -->
        <template #tab-panel-c>
            <div class="text-2xl font-bold mb-5 text-center uppercase">
                Appliances Tab Panel
            </div>
            <div class="columns-1 sm:columns-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa
                itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis
                dolorum autem sapiente similique non, architecto porro maxime blanditiis
                obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione
                ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id
                adipisci pariatur! Sapiente, dolore?
            </div>
        </template>
    </BraveTabs>
</template>
  
<script>
import { BraveTabs } from 'bravevue';
export default {
    components: {
        BraveTabs,
    },
};
<\/script>`), 1)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="props"> Props <a href="#props" name="props" class="anchor"><span class="anchor-target" id="props"></span><span class="glyphicon glyphicon-link"></span></a></h2><div class="overflow-auto w-full"><table><thead class="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400"><tr><th scope="col" class="py-3 px-6">Prop</th><th scope="col" class="py-3 px-6">Type</th><th scope="col" class="py-3 px-6">Default</th><th scope="col" class="py-3 px-6">Description</th></tr></thead><tr><td class="py-4 px-6">tabs</td><td class="py-4 px-6">Array</td><td class="py-4 px-6"></td><td class="py-4 px-6"><p>Array of the name-slug of tabs to be displayed </p><p> Example : <code class="text-blue-500">[&#39;tab1&#39;,&#39;tab2&#39;]</code></p></td></tr><tr><td class="py-4 px-6">initialTab</td><td class="py-4 px-6">String</td><td class="py-4 px-6"></td><td class="py-4 px-6"><p>Name of the tab that should be currently displayed.</p><p> Example : <code class="text-blue-500">initialTab=&quot;upload&quot;</code></p></td></tr><tr><td class="py-4 px-6">tabButtonClass</td><td class="py-4 px-6">String</td><td class="py-4 px-6"></td><td class="py-4 px-6"><p>CSS Classes that you need on the tab buttons</p></td></tr><tr><td class="py-4 px-6">tabButtonActiveClass</td><td class="py-4 px-6">String</td><td class="py-4 px-6"></td><td class="py-4 px-6"><p>CSS Classs that you need on the tab button is active</p></td></tr><tr><td class="py-4 px-6">tabsContentClass</td><td class="py-4 px-6">String</td><td class="py-4 px-6"></td><td class="py-4 px-6"><p>CSS Classes for the wrapper on the area where tab contents are displayed.</p></td></tr><tr><td class="py-4 px-6">tabsWrapperClass</td><td class="py-4 px-6">String</td><td class="py-4 px-6"></td><td class="py-4 px-6"><p>Set the classes you need on the wrapper div in which all tab buttons are displayed.</p></td></tr></table></div><h2 class="mt-30" id="slots"> Slots <a href="#slots" name="slots" class="anchor"><span class="anchor-target" id="slots"></span><span class="glyphicon glyphicon-link"></span></a></h2><div class="overflow-auto w-full"><table><tr><td class="py-4 px-6"><strong>Name </strong></td><td class="py-4 px-6"><strong>Scoped </strong></td><td class="py-4 px-6"><strong>Description </strong></td></tr><tr><td class="py-4 px-6">after-tab</td><td class="py-4 px-6"> No </td><td class="py-4 px-6"><p>Slot to add content after the tab buttons</p></td></tr><tr><td class="py-4 px-6">before-tab</td><td class="py-4 px-6"> No </td><td class="py-4 px-6"><p>Slot to add content before the tab buttons </p></td></tr></table></div></div></main>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/BraveTabs.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const BraveTabs = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const slide1_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = {
  name: "slide1",
  props: {
    isCurrentSlide: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white overflow-hidden" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"><svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polygon points="50,0 100,0 50,100 0,100"></polygon></svg><main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"><div class="sm:text-center lg:text-left"><h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"><span class="${ssrRenderClass([{ "animate__animated animate__lightSpeedInRight delay-1-2": $props.isCurrentSlide }, "inline-block animate__faster"])}">Data to enrich your</span><span class="${ssrRenderClass([{ "animate__animated animate__lightSpeedInRight animate__fadeIn  animate__faster delay-1-4": $props.isCurrentSlide }, "inline-block text-indigo-600"])}"> online business</span></h1><p class="${ssrRenderClass([{ "animate__animated animate__lightSpeedInRight  animate__faster delay-1-6": $props.isCurrentSlide }, "mt-3 inline-block text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"])}"> lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus</p><div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"><div class=""><a href="#" class="${ssrRenderClass([{ "animate__animated animate__lightSpeedInRight  animate__faster delay-1-8": $props.isCurrentSlide }, "rounded-md shadow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"])}"> Get started </a></div><div class="mt-3 sm:mt-0 sm:ml-3"><a class="${ssrRenderClass([{ "animate__animated animate__lightSpeedInRight  animate__faster delay-2": $props.isCurrentSlide }, "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"])}" href="#"> Live demo </a></div></div></div></main></div></div><div class="${ssrRenderClass([{ "animate__animated animate__bounce animate__delay-1s": $props.isCurrentSlide }, "lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden md:block"])}"><img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2850&amp;q=80" alt=""></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/slides/slide1.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const slide1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _imports_0 = "/assets/dummy_image.5f61dce0.jpg";
const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-screen-lg px-3 py-6" }, _attrs))}><div class="flex flex-col-reverse items-center sm:flex-row md:justify-between md:gap-x-24"><div class="text-center sm:text-left"><h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"><span class="block xl:inline text-gray-400">Hi, I am </span><span class="block text-white xl:inline">Shishir Raven \u{1F44B}</span></h1><p class="mt-6 text-base md:text-xl md:leading-7"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum, debitis temporibus . </p></div><div class="shrink-0"><img class="h-52 md:h-auto md:max-h-96 object-cover"${ssrRenderAttr("src", _imports_0)} alt="Avatar image" loading="lazy"></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/slides/slide2.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const slide2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const slide3_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {
  name: "slide1",
  props: {
    isCurrentSlide: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white overflow-hidden" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"><svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polygon points="50,0 100,0 50,100 0,100"></polygon></svg><main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"><div class="sm:text-center lg:text-left"><h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"><span class="${ssrRenderClass([{ "animate__animated animate__flipInX delay-1-2": $props.isCurrentSlide }, "inline-block animate__faster"])}">Data to enrich your</span><span class="${ssrRenderClass([{ "animate__animated animate__flipInX   animate__faster delay-1-4": $props.isCurrentSlide }, "inline-block text-indigo-600"])}"> online business</span></h1><p class="${ssrRenderClass([{ "animate__animated animate__flipInX  animate__faster delay-1-6": $props.isCurrentSlide }, "mt-3 inline-block text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"])}"> lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus</p><div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"><div class=""><a href="#" class="${ssrRenderClass([{ "animate__animated animate__flipInX  animate__faster delay-1-8": $props.isCurrentSlide }, "rounded-md shadow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"])}"> Get started </a></div><div class="mt-3 sm:mt-0 sm:ml-3"><a class="${ssrRenderClass([{ "animate__animated animate__flipInX  animate__faster delay-2": $props.isCurrentSlide }, "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"])}" href="#"> Live demo </a></div></div></div></main></div></div><div class="${ssrRenderClass([{ "animate__animated animate__bounce animate__delay-1s": $props.isCurrentSlide }, "lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden md:block"])}"><img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2850&amp;q=80" alt=""></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/slides/slide3.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const slide3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  components: {
    BraveSlider: BraveSlider$2,
    slide1,
    slide2,
    slide3
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveSlider = resolveComponent("BraveSlider", true);
  const _component_slide1 = resolveComponent("slide1");
  const _component_slide2 = resolveComponent("slide2");
  const _component_slide3 = resolveComponent("slide3");
  _push(ssrRenderComponent(_component_BraveSlider, mergeProps({
    class: "text-lg relative",
    "auto-play": true
  }, _attrs), {
    slides: withCtx(({ currentSlide }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="min-w-full snap-center flex content-center justify-center flex-col"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_slide1, {
          isCurrentSlide: currentSlide == 0
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="bg-indigo-900 min-w-full snap-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_slide2, null, null, _parent2, _scopeId));
        _push2(`</div><div class="bg-indigo-900 min-w-full snap-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_slide3, {
          isCurrentSlide: currentSlide == 2
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "min-w-full snap-center flex content-center justify-center flex-col" }, [
            createVNode(_component_slide1, {
              isCurrentSlide: currentSlide == 0
            }, null, 8, ["isCurrentSlide"])
          ]),
          createVNode("div", { class: "bg-indigo-900 min-w-full snap-center" }, [
            createVNode(_component_slide2)
          ]),
          createVNode("div", { class: "bg-indigo-900 min-w-full snap-center" }, [
            createVNode(_component_slide3, {
              isCurrentSlide: currentSlide == 2
            }, null, 8, ["isCurrentSlide"])
          ])
        ];
      }
    }),
    controls: withCtx(({ prevSlide, nextSlide, scrollToSlide, totalSlides, currentSlide }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="z-30 absolute p-5 cursor-pointer left-0 top-0 bottom-0 grid hover:bg-slate-600 hover:opacity-60 content-center justify-items-center"${_scopeId}><div${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16"${_scopeId}><path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"${_scopeId}></path></svg></div></div><div class="z-30 absolute p-5 cursor-pointer right-0 top-0 bottom-0 grid hover:bg-slate-600 hover:opacity-60 content-center justify-items-center"${_scopeId}><div${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16"${_scopeId}><path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"${_scopeId}></path></svg></div></div><div class="absolute bottom-7 left-0 right-0 z-20"${_scopeId}><div class="flex justify-center"${_scopeId}><!--[-->`);
        ssrRenderList(totalSlides, (index) => {
          _push2(`<div class="${ssrRenderClass([{ "bg-slate-900 scale-125": currentSlide === index - 1 }, "h-5 w-5 border border-white opacity-50 cursor-pointer bg-slate-800 mr-2 hover:bg-slate-500 hover:scale-125 rounded-full"])}"${_scopeId}></div>`);
        });
        _push2(`<!--]--></div></div>`);
      } else {
        return [
          createVNode("div", {
            class: "z-30 absolute p-5 cursor-pointer left-0 top-0 bottom-0 grid hover:bg-slate-600 hover:opacity-60 content-center justify-items-center",
            onClick: prevSlide
          }, [
            createVNode("div", null, [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "32",
                height: "32",
                fill: "currentColor",
                class: "bi bi-chevron-compact-left",
                viewBox: "0 0 16 16"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
                })
              ]))
            ])
          ], 8, ["onClick"]),
          createVNode("div", {
            class: "z-30 absolute p-5 cursor-pointer right-0 top-0 bottom-0 grid hover:bg-slate-600 hover:opacity-60 content-center justify-items-center",
            onClick: nextSlide
          }, [
            createVNode("div", null, [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "32",
                height: "32",
                fill: "currentColor",
                class: "bi bi-chevron-compact-right",
                viewBox: "0 0 16 16"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                })
              ]))
            ])
          ], 8, ["onClick"]),
          createVNode("div", { class: "absolute bottom-7 left-0 right-0 z-20" }, [
            createVNode("div", { class: "flex justify-center" }, [
              (openBlock(true), createBlock(Fragment, null, renderList(totalSlides, (index) => {
                return openBlock(), createBlock("div", {
                  onClick: ($event) => (currentSlide = index, scrollToSlide(index - 1)),
                  class: ["h-5 w-5 border border-white opacity-50 cursor-pointer bg-slate-800 mr-2 hover:bg-slate-500 hover:scale-125 rounded-full", { "bg-slate-900 scale-125": currentSlide === index - 1 }],
                  key: index
                }, null, 10, ["onClick"]);
              }), 128))
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/BraveSlider.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const BraveSlider$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
useHead({
  title: "Brave Slider Component for Vue 3 | Brave Components Library.",
  meta: [
    {
      name: "description",
      content: "BraveSlider is a responsive slider that you can use to slide any HTML Content or Images."
    },
    {
      name: "keywords",
      content: "HTML Slider, Images Slider, Responsive, Vue3, Component, Headless, Styleless "
    },
    {
      name: "author",
      content: "Shishir Raven"
    }
  ]
});
const _sfc_main$5 = {
  mounted() {
    useHead({
      title: "Brave Slider Component for Vue 3 | Brave Components Library.",
      meta: [
        {
          name: "description",
          content: "BraveSlider is a responsive slider that you can use to slide any HTML Content or Images."
        },
        {
          name: "keywords",
          content: "HTML Slider, Images Slider, Responsive, Vue3, Component, Headless, Styleless "
        },
        {
          name: "author",
          content: "Shishir Raven"
        }
      ]
    });
  },
  components: { BraveSlider: BraveSlider$1 }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveSlider = resolveComponent("BraveSlider", true);
  const _component_BraveSyntaxHighlighter = resolveComponent("BraveSyntaxHighlighter");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 lg:p-16" }, _attrs))}><div class="py-6"><div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"><h1 class="text-4xl font-semibold mb-10"><i class="bi me-2 text-xl bi-menu-button-wide"></i> Brave Slider </h1><p> BraveSlider is a responsive slider that you can use to slide any HTML Content or Images. </p><p class="my-5">The following is a Simple Example.</p>`);
  _push(ssrRenderComponent(_component_BraveSlider, null, null, _parent));
  _push(`<p class="my-5">Here is how the Slider looks in smaller Size</p><div class="max-w-xl">`);
  _push(ssrRenderComponent(_component_BraveSlider, null, null, _parent));
  _push(`</div><h2 class="text-3xl font-semibold my-7">Features</h2><p class="mb-5"> BraveSlider is designed to be able to easily be customizable as per your requirement. </p><li> You can configure ths Slider Controls and can build your own controls. </li><li>You can use custom CSS or any CSS Library.</li><li> There are no complex configuration required and you can easily unerstand the Slider. </li><li>Supports CSS Animation.</li><li>Resonsive HTML Slider, so you can use it in any device.</li><li>Pre-made &quot;Just Drop In&quot; Ready Made Examples Available.</li><li>Supports Auto-Play</li><li>Supports Stop on Mouse Hover</li><li>Light-weight, No bloated CSS.</li><h2 class="text-3xl font-semibold my-7">How to Use</h2><ol class="relative space-y-2 mb-16" style="${ssrRenderStyle({ "counter-reset": "step 0" })}"><li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5" style="${ssrRenderStyle({ "counter-increment": "step 1" })}"><div class="mb-6 col-span-2 xl:mb-0"><h4 class="leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"> Install BraveVue </h4><div class=""><p> Install <code>\`bravevue\`</code> via npm </p></div></div><div class="col-span-3">`);
  _push(ssrRenderComponent(_component_BraveSyntaxHighlighter, {
    copyText: " \u{1F4CB} Copy Code",
    language: "plaintext",
    prisimClassName: "dark:!bg-slate-900 bg-slate-50 rounded-lg  ",
    class: "!bg-slate-800 !rounded-lg",
    ref: "codebox"
  }, {
    header: withCtx(({ copyToClipboard, copyText }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex text-sm rounded-t-lg border-b border-slate-600"${_scopeId}><div class="flex-1"${_scopeId}><div class="dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light"${_scopeId}>Terminal</div></div><div class="mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"${_scopeId}>${ssrInterpolate(copyText)}</div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex text-sm rounded-t-lg border-b border-slate-600" }, [
            createVNode("div", { class: "flex-1" }, [
              createVNode("div", { class: "dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light" }, "Terminal")
            ]),
            createVNode("div", {
              onClick: ($event) => copyToClipboard(),
              class: "mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"
            }, toDisplayString(copyText), 9, ["onClick"])
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
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
  _push(`</div></li><li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5" style="${ssrRenderStyle({ "counter-increment": "step 1" })}"><div class="mb-6 col-span-2 xl:mb-0"><h4 class="leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"> Import the Component </h4><div class=""><p> Import Component and add to your components objecct. </p></div></div><div class="col-span-3">`);
  _push(ssrRenderComponent(_component_BraveSyntaxHighlighter, {
    copyText: " \u{1F4CB} Copy Code",
    language: "javascript",
    prisimClassName: "dark:!bg-slate-900 bg-slate-50 rounded-lg  ",
    class: "!bg-slate-800 !rounded-lg",
    ref: "codebox"
  }, {
    header: withCtx(({ copyToClipboard, copyText }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex text-sm rounded-t-lg border-b border-slate-600"${_scopeId}><div class="flex-1"${_scopeId}><div class="dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light"${_scopeId}> YourView.vue</div></div><div class="mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"${_scopeId}>${ssrInterpolate(copyText)}</div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex text-sm rounded-t-lg border-b border-slate-600" }, [
            createVNode("div", { class: "flex-1" }, [
              createVNode("div", { class: "dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light" }, " YourView.vue")
            ]),
            createVNode("div", {
              onClick: ($event) => copyToClipboard(),
              class: "mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"
            }, toDisplayString(copyText), 9, ["onClick"])
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(`<script>
import "@/../node_modules/bravevue/dist/style.css";
import {BraveSlider} from 'bravevue'
export default{
  components: 
  {
    BraveSlider,
  }
}
<\/script>`)}`);
      } else {
        return [
          createTextVNode(toDisplayString(`<script>
import "@/../node_modules/bravevue/dist/style.css";
import {BraveSlider} from 'bravevue'
export default{
  components: 
  {
    BraveSlider,
  }
}
<\/script>`), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></li><li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5" style="${ssrRenderStyle({ "counter-increment": "step 1" })}"><div class="mb-6 col-span-2 xl:mb-0"><h4 class="leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"> Add Component to your template </h4><div class=""><p class="text-sm"> Place component in your template wherever you want the Slider to appear. </p></div></div><div class="col-span-5">`);
  _push(ssrRenderComponent(_component_BraveSyntaxHighlighter, {
    copyText: " \u{1F4CB} Copy Code",
    language: "javascript",
    prisimClassName: "dark:!bg-slate-900 bg-slate-50 rounded-lg  ",
    class: "!bg-slate-800 !rounded-lg",
    ref: "codebox"
  }, {
    header: withCtx(({ copyToClipboard, copyText }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex text-sm rounded-t-lg border-b border-slate-600"${_scopeId}><div class="flex-1"${_scopeId}><div class="dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light"${_scopeId}> YourView.vue</div></div><div class="mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"${_scopeId}>${ssrInterpolate(copyText)}</div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex text-sm rounded-t-lg border-b border-slate-600" }, [
            createVNode("div", { class: "flex-1" }, [
              createVNode("div", { class: "dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light" }, " YourView.vue")
            ]),
            createVNode("div", {
              onClick: ($event) => copyToClipboard(),
              class: "mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"
            }, toDisplayString(copyText), 9, ["onClick"])
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(`<BraveSlider class="text-lg relative " :auto-play="true">
    <!-- SLIDES TEMPLATE -->
    <template v-slot:slides="{currentSlide}">
        <!-- <div class="bg-gray-100 min-w-full snap-center"></div> -->
        <div class=" min-w-full snap-center flex content-center justify-center flex-col">
            <slide1 :isCurrentSlide="currentSlide==0"/>
        </div>
        <div class="bg-indigo-900 min-w-full snap-center">
            <slide2/>
        </div>
        <div class="bg-indigo-900 min-w-full snap-center">
          <slide3 :isCurrentSlide="currentSlide==2"/>
        </div>
          
    </template>
  <!-- CONTROL TEMPLATE -->
  <template v-slot:controls="{prevSlide,nextSlide,scrollToSlide,totalSlides,currentSlide}">

      <!-- ===================================================================== -->
      <!-- PREVIOUS CONTROL BUTTON  -->
      <!-- ===================================================================== -->
      <div class="z-30 absolute p-5 cursor-pointer left-0 top-0 bottom-0 grid   hover:bg-slate-600  hover:opacity-60
      content-center justify-items-center  " @click="prevSlide">
         <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
          </svg>
        </div> 
      </div>
      <!-- ----------------------------------------------------------------  -->
      
      <!-- ===================================================================== -->
      <!-- NEXT  CONTROL BUTTON  -->
      <!-- ===================================================================== -->
      <div class="z-30 absolute p-5 cursor-pointer right-0 top-0 bottom-0 grid hover:bg-slate-600  hover:opacity-60
      content-center justify-items-center  " @click="nextSlide">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
          </svg>
        </div> 
      </div>
      <!-- ----------------------------------------------------------------  -->

      <!-- ===================================================================== -->
      <!-- looping Buttons  -->
      <!-- ===================================================================== -->

      <div class=" absolute bottom-7 left-0 right-0 z-20">    
        <div class="flex justify-center ">
          <div v-for="index in totalSlides" @click="currentSlide=index,scrollToSlide(index-1)" 
              class="h-5 w-5 border border-white opacity-50 cursor-pointer bg-slate-800 mr-2 hover:bg-slate-500 hover:scale-125 rounded-full" 
              :class="{'bg-slate-900 scale-125': currentSlide === index-1}"  :key="index" >
          </div>
        </div>
      </div>
       <!-- ----------------------------------------------------------------  -->

    </template>
  </BraveSlider>`)}`);
      } else {
        return [
          createTextVNode(toDisplayString(`<BraveSlider class="text-lg relative " :auto-play="true">
    <!-- SLIDES TEMPLATE -->
    <template v-slot:slides="{currentSlide}">
        <!-- <div class="bg-gray-100 min-w-full snap-center"></div> -->
        <div class=" min-w-full snap-center flex content-center justify-center flex-col">
            <slide1 :isCurrentSlide="currentSlide==0"/>
        </div>
        <div class="bg-indigo-900 min-w-full snap-center">
            <slide2/>
        </div>
        <div class="bg-indigo-900 min-w-full snap-center">
          <slide3 :isCurrentSlide="currentSlide==2"/>
        </div>
          
    </template>
  <!-- CONTROL TEMPLATE -->
  <template v-slot:controls="{prevSlide,nextSlide,scrollToSlide,totalSlides,currentSlide}">

      <!-- ===================================================================== -->
      <!-- PREVIOUS CONTROL BUTTON  -->
      <!-- ===================================================================== -->
      <div class="z-30 absolute p-5 cursor-pointer left-0 top-0 bottom-0 grid   hover:bg-slate-600  hover:opacity-60
      content-center justify-items-center  " @click="prevSlide">
         <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
          </svg>
        </div> 
      </div>
      <!-- ----------------------------------------------------------------  -->
      
      <!-- ===================================================================== -->
      <!-- NEXT  CONTROL BUTTON  -->
      <!-- ===================================================================== -->
      <div class="z-30 absolute p-5 cursor-pointer right-0 top-0 bottom-0 grid hover:bg-slate-600  hover:opacity-60
      content-center justify-items-center  " @click="nextSlide">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
          </svg>
        </div> 
      </div>
      <!-- ----------------------------------------------------------------  -->

      <!-- ===================================================================== -->
      <!-- looping Buttons  -->
      <!-- ===================================================================== -->

      <div class=" absolute bottom-7 left-0 right-0 z-20">    
        <div class="flex justify-center ">
          <div v-for="index in totalSlides" @click="currentSlide=index,scrollToSlide(index-1)" 
              class="h-5 w-5 border border-white opacity-50 cursor-pointer bg-slate-800 mr-2 hover:bg-slate-500 hover:scale-125 rounded-full" 
              :class="{'bg-slate-900 scale-125': currentSlide === index-1}"  :key="index" >
          </div>
        </div>
      </div>
       <!-- ----------------------------------------------------------------  -->

    </template>
  </BraveSlider>`), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></li><li class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5" style="${ssrRenderStyle({ "counter-increment": "step 1" })}"><div class="mb-6 col-span-2 xl:mb-0"><h4 class="leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"> Create and add slides. </h4><div class="text-sm"><p> You can create and add slides to your slider. You can add any number of slides to your slider. Here is an example of a Animated Slide you see in the example. </p><p class="mt-3"> We use <a class="text-blue-700" href="https://animate.style/"> Animate.css </a> to animate the slider. </p></div></div><div class="col-span-5">`);
  _push(ssrRenderComponent(_component_BraveSyntaxHighlighter, {
    copyText: " \u{1F4CB} Copy Code",
    language: "html",
    prisimClassName: "dark:!bg-slate-900 bg-slate-50 rounded-lg  ",
    class: "!bg-slate-800 !rounded-lg",
    ref: "codebox"
  }, {
    header: withCtx(({ copyToClipboard, copyText }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex text-sm rounded-t-lg border-b border-slate-600"${_scopeId}><div class="flex-1"${_scopeId}><div class="dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light"${_scopeId}> Slide1.vue</div></div><div class="mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"${_scopeId}>${ssrInterpolate(copyText)}</div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex text-sm rounded-t-lg border-b border-slate-600" }, [
            createVNode("div", { class: "flex-1" }, [
              createVNode("div", { class: "dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light" }, " Slide1.vue")
            ]),
            createVNode("div", {
              onClick: ($event) => copyToClipboard(),
              class: "mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"
            }, toDisplayString(copyText), 9, ["onClick"])
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(`<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>
        <main
          class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span
                class="inline-block animate__faster"
                v-bind:class="{
                  'animate__animated animate__lightSpeedInRight delay-1-2':
                    isCurrentSlide,
                }"
                >Data to enrich your</span
              >
              <span
                class="inline-block text-indigo-600"
                v-bind:class="{
                  'animate__animated animate__lightSpeedInRight animate__fadeIn  animate__faster delay-1-4':
                    isCurrentSlide,
                }"
              >
                online business
              </span>
            </h1>
            <p
              :class="{
                'animate__animated animate__lightSpeedInRight  animate__faster delay-1-6':
                  isCurrentSlide,
              }"
              class="mt-3 inline-block text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus<!-- -->
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="">
                <a
                  href="#"
                  :class="{
                    'animate__animated animate__lightSpeedInRight  animate__faster delay-1-8':
                      isCurrentSlide,
                  }"
                  class="rounded-md shadow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  :class="{
                    'animate__animated animate__lightSpeedInRight  animate__faster delay-2':
                      isCurrentSlide,
                  }"
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <div
      :class="{
        'animate__animated animate__bounce animate__delay-1s': isCurrentSlide,
      }"
      class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden md:block"
    >
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "slide1",
  props: {
    isCurrentSlide: {
      type: Boolean,
      default: false,
    },
  },
};
<\/script>
<style>
.delay-1-2 {
  animation-delay: 0.5s;
}
.delay-1-4 {
  animation-delay: 0.7s;
}
.delay-1-6 {
  animation-delay: 0.9s;
}
.delay-1-8 {
  animation-delay: 1.1s;
}
.delay-2 {
  animation-delay: 1.3s;
}
</style>
`)}`);
      } else {
        return [
          createTextVNode(toDisplayString(`<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>
        <main
          class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span
                class="inline-block animate__faster"
                v-bind:class="{
                  'animate__animated animate__lightSpeedInRight delay-1-2':
                    isCurrentSlide,
                }"
                >Data to enrich your</span
              >
              <span
                class="inline-block text-indigo-600"
                v-bind:class="{
                  'animate__animated animate__lightSpeedInRight animate__fadeIn  animate__faster delay-1-4':
                    isCurrentSlide,
                }"
              >
                online business
              </span>
            </h1>
            <p
              :class="{
                'animate__animated animate__lightSpeedInRight  animate__faster delay-1-6':
                  isCurrentSlide,
              }"
              class="mt-3 inline-block text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus<!-- -->
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="">
                <a
                  href="#"
                  :class="{
                    'animate__animated animate__lightSpeedInRight  animate__faster delay-1-8':
                      isCurrentSlide,
                  }"
                  class="rounded-md shadow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  :class="{
                    'animate__animated animate__lightSpeedInRight  animate__faster delay-2':
                      isCurrentSlide,
                  }"
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <div
      :class="{
        'animate__animated animate__bounce animate__delay-1s': isCurrentSlide,
      }"
      class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden md:block"
    >
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "slide1",
  props: {
    isCurrentSlide: {
      type: Boolean,
      default: false,
    },
  },
};
<\/script>
<style>
.delay-1-2 {
  animation-delay: 0.5s;
}
.delay-1-4 {
  animation-delay: 0.7s;
}
.delay-1-6 {
  animation-delay: 0.9s;
}
.delay-1-8 {
  animation-delay: 1.1s;
}
.delay-2 {
  animation-delay: 1.3s;
}
</style>
`), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></li></ol></div><hr class="my-5"></div></main>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/BraveSlider.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const BraveSlider = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  components: { BraveSyntaxHighlighter: BraveSyntaxHighlighter$1 }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveSyntaxHighlighter = resolveComponent("BraveSyntaxHighlighter");
  _push(ssrRenderComponent(_component_BraveSyntaxHighlighter, mergeProps({
    copyText: " \u{1F4CB} Copy Code",
    language: "javascript",
    prisimClassName: "dark:!bg-slate-900 bg-slate-50 rounded-lg  ",
    class: "!bg-slate-800 !rounded-lg",
    ref: "codebox"
  }, _attrs), {
    header: withCtx(({ copyToClipboard, copyText }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex text-sm rounded-t-lg border-b border-slate-600"${_scopeId}><div class="flex-1"${_scopeId}><div class="dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light"${_scopeId}> Add two numbers in Javascript </div></div><div class="mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"${_scopeId}>${ssrInterpolate(copyText)}</div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex text-sm rounded-t-lg border-b border-slate-600" }, [
            createVNode("div", { class: "flex-1" }, [
              createVNode("div", { class: "dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light" }, " Add two numbers in Javascript ")
            ]),
            createVNode("div", {
              onClick: ($event) => copyToClipboard(),
              class: "mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"
            }, toDisplayString(copyText), 9, ["onClick"])
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(`let x = 5;
let y = 6;
let z = x + y;`)}`);
      } else {
        return [
          createTextVNode(toDisplayString(`let x = 5;
let y = 6;
let z = x + y;`))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/uiexamples/BraveSyntaxHighlighterDemo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const BraveSyntaxHighlighterDemo = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  mounted() {
    useHead({
      title: "Syntax Highlighter Component for Vue 3 | BraveVue Component Library ",
      meta: [
        {
          name: "description",
          content: "Brave Syntax Hilighter is a super easy to use syntax highlighter based on Prismjs javascript"
        },
        {
          name: "keywords",
          content: "Syntax highlighter, Vue 3, Javascript, Prismjs, BraveVue, Copy Code Button, Copy Code"
        },
        {
          name: "author",
          content: "Shishir Raven"
        }
      ]
    });
  },
  components: {
    BraveGistEmbed,
    PositionDialogExampleVue,
    BraveTabs: BraveTabs$2,
    BrTaSyntaxHighlighter,
    BraveSyntaxHighlighterDemo,
    PositionDialogExampleOnClick,
    PositionDialogContextMenu
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BraveTabs = resolveComponent("BraveTabs");
  const _component_BraveSyntaxHighlighterDemo = resolveComponent("BraveSyntaxHighlighterDemo");
  const _component_BrTaSyntaxHighlighter = resolveComponent("BrTaSyntaxHighlighter");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 lg:p-16" }, _attrs))}><div class="py-6"><div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"><h1 class="text-4xl font-semibold mb-10"><i class="bi me-2 fs-4 bi-window-stack"></i> Brave Syntax Hightlighter </h1><p> Brave Syntax Hilighter is a super easy to use syntax highlighter based on <a class="font-bold text-blue-500" href="https://prismjs.com/"> Prismjs javascript </a></p><p></p><h2 class="text-2xl font-semibold my-10">Examples</h2>`);
  _push(ssrRenderComponent(_component_BraveTabs, {
    ref: "bravetabref",
    class: "text-black dark:text-white my-10",
    "tabs-content-class": "border  p-4 dark:bg-slate-800",
    "tab-button-class": "cursor-pointer rounded-t-lg mr-0 dark:bg-slate-900 bg-gray-50 hover:dark:bg-slate-800 hover:bg-gray-200",
    "tab-button-active-class": "shadow-inner-sm -mb-px border rounded-t-lg border-b-0 dark:bg-slate-800 bg-white ",
    tabs: ["upload", "filemanager"],
    initialTab: "upload"
  }, {
    "tab-head-upload": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Demo for Javascript with Copy Button`);
      } else {
        return [
          createTextVNode("Demo for Javascript with Copy Button")
        ];
      }
    }),
    "tab-panel-upload": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BraveSyntaxHighlighterDemo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BraveSyntaxHighlighterDemo)
        ];
      }
    }),
    "tab-head-filemanager": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Code`);
      } else {
        return [
          createTextVNode("Code")
        ];
      }
    }),
    "tab-panel-filemanager": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BrTaSyntaxHighlighter, { language: "javascript" }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`BraveSyntaxHighlighterDemo.vue`);
            } else {
              return [
                createTextVNode("BraveSyntaxHighlighterDemo.vue")
              ];
            }
          }),
          code: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(`<template><BraveSyntaxHighlighter
    copyText=" \u{1F4CB} Copy Code"
    language="javascript"
    prisimClassName="dark:!bg-slate-900 bg-slate-50 rounded-lg  "
    class="!bg-slate-800 !rounded-lg"
    ref="codebox"
  >
    <template #header="{ copyToClipboard, copyText }">
      <div class="flex text-sm rounded-t-lg border-b border-slate-600">
        <div class="flex-1">
          <div
            class="dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light"
          >
            Add two numbers in Javascript
          </div>
        </div>
        <div
          @click="copyToClipboard()"
          class="mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"
        >
          
        </div>
      </div>
    </template>

    <template #default
      >{{\`let x = 5;
let y = 6;
let z = x + y;\`}}
</template>
  </BraveSyntaxHighlighter>
<script>
import { BraveSyntaxHighlighter } from "bravevue";
export default {
  components: { BraveSyntaxHighlighter },
};
<\/script>
`)}`);
            } else {
              return [
                createTextVNode(toDisplayString(`<template><BraveSyntaxHighlighter
    copyText=" \u{1F4CB} Copy Code"
    language="javascript"
    prisimClassName="dark:!bg-slate-900 bg-slate-50 rounded-lg  "
    class="!bg-slate-800 !rounded-lg"
    ref="codebox"
  >
    <template #header="{ copyToClipboard, copyText }">
      <div class="flex text-sm rounded-t-lg border-b border-slate-600">
        <div class="flex-1">
          <div
            class="dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light"
          >
            Add two numbers in Javascript
          </div>
        </div>
        <div
          @click="copyToClipboard()"
          class="mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"
        >
          
        </div>
      </div>
    </template>

    <template #default
      >{{\`let x = 5;
let y = 6;
let z = x + y;\`}}
</template>
  </BraveSyntaxHighlighter>
<script>
import { BraveSyntaxHighlighter } from "bravevue";
export default {
  components: { BraveSyntaxHighlighter },
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
              createTextVNode("BraveSyntaxHighlighterDemo.vue")
            ]),
            code: withCtx(() => [
              createTextVNode(toDisplayString(`<template><BraveSyntaxHighlighter
    copyText=" \u{1F4CB} Copy Code"
    language="javascript"
    prisimClassName="dark:!bg-slate-900 bg-slate-50 rounded-lg  "
    class="!bg-slate-800 !rounded-lg"
    ref="codebox"
  >
    <template #header="{ copyToClipboard, copyText }">
      <div class="flex text-sm rounded-t-lg border-b border-slate-600">
        <div class="flex-1">
          <div
            class="dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light"
          >
            Add two numbers in Javascript
          </div>
        </div>
        <div
          @click="copyToClipboard()"
          class="mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"
        >
          
        </div>
      </div>
    </template>

    <template #default
      >{{\`let x = 5;
let y = 6;
let z = x + y;\`}}
</template>
  </BraveSyntaxHighlighter>
<script>
import { BraveSyntaxHighlighter } from "bravevue";
export default {
  components: { BraveSyntaxHighlighter },
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
  _push(`</div><hr></div></main>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/BraveSyntaxHighLighter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BraveSyntaxHighlighter = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1 lg:p-16" }, _attrs))}><div class="py-6"><div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"><h1 class="text-4xl font-semibold mb-10"><i class="bi bi-stars"></i>Request a component</h1><p>If you need a UI Component which is not already available in the BraveVue library. <br> Please send your request on the following email id. </p><p class="mt-10"><a class="hover:text-slate-300" href="mailto:shishir.raven@gmail.com">shishir.raven@gmail.com</a></p></div></div></main>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/RequestAComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const RequestAComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/brave_block_tree",
    meta: { title: "Brave Block Tree" },
    component: () => import("./assets/BraveBlockTree.21aee1ac.js")
  },
  {
    path: "/brave_sidebar_layout",
    meta: { title: "Brave Sidebar Layout" },
    component: () => import("./assets/BraveSidebarLayout.69cd6e36.js")
  },
  {
    path: "/brave_field",
    meta: { title: "Brave Sidebar Layout" },
    component: () => import("./assets/BraveField.e93dce05.js")
  },
  {
    path: "/brave-bottom-sheet",
    meta: { title: "Brave BottomSheet" },
    component: () => import("./assets/BraveBottomSheet.07e6e0d8.js")
  },
  {
    path: "/touch-swipe-up",
    meta: { title: "Touch Swipe Up" },
    component: () => import("./assets/BraveSwipeUp.87052f86.js")
  },
  {
    path: "/touch-swipe-down",
    meta: { title: "Touch Swipe Down" },
    component: () => import("./assets/BraveSwipeDown.4ec84c16.js")
  },
  {
    path: "/brave_tags",
    meta: { title: "Brave Sidebar Layout" },
    component: () => import("./assets/BraveTags.99794192.js")
  },
  {
    path: "/brave_radial_menu",
    meta: { title: "Brave Radial Menu" },
    component: () => import("./assets/BraveRadialMenu.8f7d76eb.js")
  },
  {
    path: "/brave_draggable",
    meta: { title: "Brave Draggable" },
    component: () => import("./assets/BraveDraggable.d21bd84f.js")
  },
  {
    path: "/brave_number_input",
    meta: { title: "Brave Draggable" },
    component: () => import("./assets/BraveNumberInput.9f630f7f.js")
  },
  {
    path: "/brave_syntax_highlighter",
    meta: { title: "Brave Syntax Highlighter" },
    component: BraveSyntaxHighlighter
  },
  {
    path: "/about",
    meta: { title: "About" },
    component: _sfc_main$v
  },
  {
    path: "/bravedialog",
    meta: { title: "Brave Dialog" },
    component: BraveDialog
  },
  {
    path: "/brave_select",
    meta: { title: "Brave Select" },
    component: BraveSelect
  },
  {
    path: "/brave_tabs",
    meta: { title: "Brave Tabs" },
    component: BraveTabs
  },
  {
    path: "/positiondialog",
    meta: { title: "Position Dialog" },
    component: PositionDialog
  },
  {
    path: "/brave_dropmenu",
    meta: { title: "Brave Drop Menu" },
    component: BraveDropMenu
  },
  {
    path: "/gistembed",
    meta: { title: "Brave Gist Embed" },
    component: BraveGist
  },
  {
    path: "/nodetree",
    meta: { title: "Node Tree Demo" },
    component: NodeTree
  },
  {
    path: "/brave_slider",
    meta: { title: "Brave Slider Demo" },
    component: BraveSlider
  },
  {
    path: "/request_a_component",
    meta: { title: "Request a Component " },
    component: RequestAComponent
  },
  { path: "/:path(.*)", component: NotFound }
];
const _sfc_main$1 = {
  name: "TreeNode",
  props: ["modelValue"],
  emits: ["update:modelVaue"],
  data: function() {
    return {
      node: {}
    };
  },
  created() {
    if (this.modelValue != void 0) {
      this.node = JSON.parse(JSON.stringify(this.modelValue));
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RenderTree1 = resolveComponent("RenderTree1");
  _push(`<!--[--><div class="flex border m-1 bg-slate-100"><i class="bi fs-4 bi-house me-2"></i><div class="ml-2">${ssrInterpolate(_ctx.node.selfData.text)}</div></div><div class="ml-5">`);
  _push(ssrRenderComponent(_component_RenderTree1, {
    modelValue: _ctx.node.childNodes,
    "onUpdate:modelValue": ($event) => _ctx.node.childNodes = $event
  }, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TreeNode.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TreeNode = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "RenderTree1",
  components: { draggable },
  props: ["modelValue"],
  emits: ["update:modelVaue"],
  data: function() {
    return {
      nodes: []
    };
  },
  created() {
    if (this.modelValue != void 0) {
      this.nodes = this.modelValue;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_draggable = resolveComponent("draggable");
  const _component_TreeNode = resolveComponent("TreeNode");
  _push(ssrRenderComponent(_component_draggable, mergeProps({
    modelValue: _ctx.nodes,
    "onUpdate:modelValue": ($event) => _ctx.nodes = $event,
    group: "people",
    onStart: ($event) => _ctx.drag = true,
    onEnd: ($event) => _ctx.drag = false,
    "item-key": "id"
  }, _attrs), {
    item: withCtx(({ element }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex"${_scopeId}> handle <div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_TreeNode, {
          modelValue: element.data,
          "onUpdate:modelValue": ($event) => element.data = $event
        }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex" }, [
            createTextVNode(" handle "),
            createVNode("div", null, [
              createVNode(_component_TreeNode, {
                modelValue: element.data,
                "onUpdate:modelValue": ($event) => element.data = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/RenderTree1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RenderTree1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
createHead();
const createApp = ViteSSG(
  App,
  { routes, history: createMemoryHistory("/") },
  ({ app, router, routes: routes2, isClient, initialState }) => {
    app.component("RenderTree1", RenderTree1);
    app.component("TreeNode", TreeNode);
    app.use(_export);
  }
);
export {
  BraveBlockTree as B,
  PillsTab as P,
  SwipeUp$1 as S,
  _export_sfc as _,
  BraveBlockElement as a,
  BrTaSyntaxHighlighter as b,
  BrTaTabs as c,
  createApp,
  BraveField as d,
  BraveGistEmbed as e,
  BraveSlider$1 as f,
  BraveSyntaxHighlighter$1 as g,
  SwipeDown$1 as h,
  BraveBottomSheet as i,
  BraveRadialMenu as j,
  BraveTabs$1 as k,
  BraveTags as l,
  BraveDraggable as m,
  BraveNumberInput as n
};
