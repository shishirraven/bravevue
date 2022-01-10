(function(t){function e(e){for(var o,n,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],o=!0,n=1;n<i.length;n++){var s=i[n];0!==a[s]&&(o=!1)}o&&(r.splice(e--,1),t=l(l.s=i[0]))}return t}var o={},n={app:0},a={app:0},r=[];function s(t){return l.p+"js/"+({about:"about",comp_brave_dialog:"comp_brave_dialog",comp_brave_gist_embed:"comp_brave_gist_embed",comp_brave_position_dialog:"comp_brave_position_dialog"}[t]||t)+"-legacy."+{about:"a25239b1",comp_brave_dialog:"3c84b48a",comp_brave_gist_embed:"97bef04a",comp_brave_position_dialog:"66829880"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(t){var e=[],i={comp_brave_position_dialog:1};n[t]?e.push(n[t]):0!==n[t]&&i[t]&&e.push(n[t]=new Promise((function(e,i){for(var o="css/"+({about:"about",comp_brave_dialog:"comp_brave_dialog",comp_brave_gist_embed:"comp_brave_gist_embed",comp_brave_position_dialog:"comp_brave_position_dialog"}[t]||t)+"."+{about:"31d6cfe0",comp_brave_dialog:"31d6cfe0",comp_brave_gist_embed:"31d6cfe0",comp_brave_position_dialog:"c5061bb6"}[t]+".css",a=l.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===o||u===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete n[t],p.parentNode.removeChild(p),i(r)},p.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,i){o=a[t]=[e,i]}));e.push(o[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var i=a[t];if(0!==i){if(i){var o=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,i[1](d)}a[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(i,o,function(e){return t[e]}.bind(null,o));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"316c":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("layout",{scopedSlots:t._u([{key:"logo",fn:function(){return[o("img",{staticClass:"img-fluid logo",attrs:{alt:"Counterdraw Logo",src:i("9b19")}})]},proxy:!0},{key:"sidebar",fn:function(){return[o("div",{staticClass:" d-grid gap-1"},[o("router-link",{staticClass:"btn  btn-large text-start rounded-pill py-2 px-3",attrs:{to:"/"}},[o("i",{staticClass:"bi fs-4 bi-house me-2"}),t._v(" Home ")]),o("div",{staticClass:"fs-7 px-3 pt-3 mb-2 text-muted"},[t._v("COMPONENTS")]),o("router-link",{staticClass:"btn  btn-large text-start rounded-pill py-2 px-3",attrs:{to:"/brave_dialog",type:"button"}},[o("i",{staticClass:"bi me-2 fs-4 bi-window"}),t._v(" Dialog ")]),o("router-link",{staticClass:"btn  btn-large text-start rounded-pill py-2 px-3",attrs:{to:"/brave_position_dialog",type:"button"}},[o("i",{staticClass:"bi me-2 fs-4 bi-window-stack"}),t._v(" Position Dialog ")]),o("router-link",{staticClass:"btn  btn-large text-start rounded-pill py-2 px-3",attrs:{to:"/brave_gist_embed",type:"button"}},[o("i",{staticClass:"bi me-2 fs-4 bi-github"}),t._v(" Gist Embed ")])],1)]},proxy:!0},{key:"content",fn:function(){return[o("router-view",{})]},proxy:!0}])})],1)},a=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"navbar-vertical shadow bg-light"},[i("div",{staticClass:"d-flex bg-white p-3"},[i("div",{staticClass:"btn btn-sm btn-light d-sm-block d-md-none me-2",on:{click:function(e){t.showmenu=!t.showmenu}}},[i("i",{staticClass:"bi bi-three-dots-vertical"})]),t._t("logo"),i("div",{staticClass:"fs-5 ms-2"},[t._v("BraveVue")])],2),i("div",{staticClass:"sidebar-menu pt-4 p-3",class:{show:t.showmenu}},[t._t("sidebar")],2)]),i("div",{staticClass:"main-content mt-5 pt-3 mt-md-0 pt-md-0"},[t._t("content")],2)])},s=[],l={data:function(){return{showmenu:!1}}},c=l,u=(i("8f2c"),i("2877")),d=Object(u["a"])(c,r,s,!1,null,null,null),p=d.exports,m={name:"Home",components:{layout:p}},b=m,v=(i("5c0b"),Object(u["a"])(b,n,a,!1,null,null,null)),f=v.exports,g=(i("d3b7"),i("3ca3"),i("ddb0"),i("8c4f")),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"p-3 m-3 p-md-5 m-md-5"},[o("img",{staticClass:"mb-4",attrs:{alt:"Vue logo",src:i("9b19")}}),o("h1",[t._v("Welcome to BraveVue ")]),o("p",[t._v("BraveVue is a collection of VueJS components. ")]),o("p",[t._v("Primarily the components are designed to create a minimilistic non-bloated framework")]),o("p",[t._v("The Framework uses Bootstrap CSS Library")]),o("h2",[t._v("Installation")]),t._m(0),o("hr",{staticClass:"my-5"}),o("h2",[t._v("Components")]),o("h3",{staticClass:"mt-4"},[t._v("Brave Dialog")]),t._v(" Add Dialogs to your VueJS App for Almost anything. "),o("h4",{staticClass:"my-4"},[t._v("Examples")]),o("p",[t._v(" Click the following button to see BraveDialog in action ")]),o("BraveDialog",{ref:"bravedialog",attrs:{dialogwidth:"500px"},scopedSlots:t._u([{key:"dialog-heading",fn:function(){return[o("img",{staticClass:"me-3",attrs:{alt:"Vue logo",width:"30px;",src:i("cf05")}}),t._v(" VueJS Dialog ")]},proxy:!0},{key:"dialog-body",fn:function(){return[o("div",{staticClass:"p-4"},[t._v("This is a BraveVue Dialog VueJS Component")])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"btn btn-primary text-white m-4",on:{click:function(e){return t.$refs.bravedialog.hide()}}},[t._v("Close")])]},proxy:!0}])}),o("div",{staticClass:"btn btn-lg btn-primary text-white px-4",on:{click:function(e){return t.$refs.bravedialog.show()}}},[o("i",{staticClass:"bi bi-window"}),t._v(" Open Dialog")]),o("BraveGistEmbed",{staticClass:"my-4",attrs:{url:"https://gist.github.com/shishirraven/4b99ef6784c7477576e16df16db61fc3"}}),o("hr",{staticClass:"my-5"}),o("h4",[t._v("How to use")]),o("h5",{staticClass:"py-3"},[t._v("1. Import the the component inside script tag. ")]),t._m(1),o("h5",{staticClass:"py-3"},[t._v("2. Add to your components")]),t._m(2),o("h5",{staticClass:"py-3"},[t._v("3. Use in your template")]),o("p",[t._v(" There are three Slots available. ")]),t._m(3),o("p",[t._v("You can use these as shown below")]),o("BraveGistEmbed",{attrs:{url:"https://gist.github.com/shishirraven/d9e9aee838f5fed86fdb366057edfdfc"}}),o("h4",[t._v("Complete Example.")]),o("BraveGistEmbed",{attrs:{url:"https://gist.github.com/shishirraven/cfb74452b90e7dc474a40a92575bd983"}})],1)},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-4"},[i("code",{staticClass:"fs-3  p-2 bg-light"},[t._v(" npm i bravevue ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-4"},[i("code",{staticClass:"bg-light p-3 fs-5 "},[t._v('import {BraveDialog} from "bravevue"')])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-4"},[i("code",{staticClass:"bg-light p-3 fs-5 "},[t._v(" components: { BraveDialog, ... }, ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("dialog-heading")]),i("li",[t._v("dialog-body")]),i("li",[t._v("footer")])])}],y=i("cc5d"),C=i("9642"),w={name:"Home",components:{BraveDialog:y["a"],BraveGistEmbed:C["a"]},data:function(){return{src:"",script:"div"}}},x=w,k=Object(u["a"])(x,h,_,!1,null,null,null),E=k.exports;o["a"].use(g["a"]);var B=[{path:"/",name:"Home",component:E},{path:"/brave_dialog",name:"BraveDialog",component:function(){return i.e("comp_brave_dialog").then(i.bind(null,"a55d"))}},{path:"/brave_position_dialog",name:"BravePositionDialog",component:function(){return i.e("comp_brave_position_dialog").then(i.bind(null,"3604"))}},{path:"/brave_gist_embed",name:"BaveGistEmbed",component:function(){return i.e("comp_brave_gist_embed").then(i.bind(null,"2c05"))}},{path:"/about",name:"About",component:function(){return i.e("about").then(i.bind(null,"f820"))}}],O=new g["a"]({routes:B}),S=O;o["a"].config.productionTip=!1,new o["a"]({router:S,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"7a66":function(t,e,i){},"8f2c":function(t,e,i){"use strict";i("7a66")},9642:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{domProps:{innerHTML:t._s(this.content)}}),i("link",{attrs:{rel:"stylesheet",href:t.stylesheet}})])},n=[],a=i("f2e8"),r={props:{url:String},data:function(){return{content:"Loading...",stylesheet:null}},mounted:function(){var t=this;a(this.url+".json",null,(function(e,i){e?(console.error(e.message),t.content=e.message):(t.content=i.div,t.stylesheet=i.stylesheet)}))}},s=r,l=i("2877"),c=Object(l["a"])(s,o,n,!1,null,null,null);e["a"]=c.exports},"9b19":function(t,e,i){t.exports=i.p+"img/logo.f32bed10.svg"},"9c0c":function(t,e,i){},b256:function(t,e,i){"use strict";i("316c")},cc5d:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogVisible,expression:"dialogVisible"}],staticClass:"back-drop py-4",on:{click:function(e){return e.target!==e.currentTarget?null:(e.stopPropagation(),t.hide.apply(null,arguments))}}},[i("div",{staticClass:"dialog container m-3 d-flex flex-column",style:{width:t.dialogOrignalWidth}},[i("div",{staticClass:"tab-header  pt-4"},[i("div",{staticClass:"px-4 py-3 h5"},[t._t("dialog-heading",(function(){return[t._v("Heading2")]}))],2)]),i("div",{staticClass:"tab-panel flex-grow-1"},[t._t("dialog-body",(function(){return[t._v("hello")]}))],2),i("div",{staticClass:"footer"},[t._t("footer",null,{hideDialog:t.hide})],2)])])},n=[],a={name:"BraveDialog",props:{visibility:Boolean,dialogwidth:String},data:function(){return{dialogVisible:!1,dialogOrignalWidth:"auto"}},created:function(){void 0!=this.visibility&&(this.dialogVisible=this.visibility),void 0!=this.dialogwidth&&(this.dialogOrignalWidth=this.dialogwidth)},methods:{show:function(){this.dialogVisible=!0,document.body.style.overflow="hidden",this.$forceUpdate()},hide:function(){this.dialogVisible=!1,document.body.style.overflow="auto"}}},r=a,s=(i("b256"),i("2877")),l=Object(s["a"])(r,o,n,!1,null,"23592d44",null);e["a"]=l.exports},cf05:function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app-legacy.3a2e15d0.js.map