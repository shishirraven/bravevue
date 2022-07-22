import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import BraveDialog from './views/BraveDialog.vue'
import PositionDialog from "./views/PositionDialog.vue";
import NodeTree from './views/NodeTree.vue'
import BraveDropMenu from './views/BraveDropMenu.vue'
import BraveGist from "./views/BraveGist.vue";
import BraveSelect from "./views/BraveSelect.vue";
import BraveTabs from "./views/BraveTabs.vue";
import BraveSlider from "./views/BraveSlider.vue";
import BraveSyntaxHighlighter from "./views/BraveSyntaxHighlighter.vue";
import RequestAComponent from "./views/RequestAComponent.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/brave_sidebar_layout",
    meta: { title: "Brave Sidebar Layout" },
    //component: BraveSidebarLayout,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/BraveSidebarLayout.vue"),
  },
  {
    path: "/brave_syntax_highlighter",
    meta: { title: "Brave Syntax Highlighter" },
    component: BraveSyntaxHighlighter,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import("./views/BraveSyntaxHighlighter.vue"),
  },
  {
    path: "/about",
    meta: { title: "About" },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: "/bravedialog",
    meta: { title: "Brave Dialog" },
    component: BraveDialog,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: "/brave_select",
    meta: { title: "Brave Select" },
    component: BraveSelect,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: "/brave_tabs",
    meta: { title: "Brave Tabs" },
    component: BraveTabs,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: "/positiondialog",
    meta: { title: "Position Dialog" },
    component: PositionDialog,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: "/brave_dropmenu",
    meta: { title: "Brave Drop Menu" },
    component: BraveDropMenu,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: "/gistembed",
    meta: { title: "Brave Gist Embed" },
    component: BraveGist,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: "/nodetree",
    meta: { title: "Node Tree Demo" },
    component: NodeTree,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: "/brave_slider",
    meta: { title: "Brave Slider Demo" },
    component: BraveSlider,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: "/request_a_component",
    meta: { title: "Request a Component " },
    component: RequestAComponent,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: "/:path(.*)", component: NotFound },
];
