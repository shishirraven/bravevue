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
import BraveSyntaxHighlighter from "./views/BraveSyntaxHighLighter.vue";
// import BraveRadio from "./views/BraveRadio.vue";
//import BraveDraggable from "./views/BraveDraggable.vue";
//import BraveNumberInput from "./views/BraveNumberInput.vue";
import RequestAComponent from "./views/RequestAComponent.vue";


/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/brave_block_tree",
    meta: { title: "Brave Block Tree" },
    component: () => import("./views/BraveBlockTree.vue"),
  },
  {
    path: "/brave_context_bar",
    meta: { title: "Brave Context Bar" },
    component: () => import("./views/BraveContextBar.vue"),
  },
  {
    path: "/bravefield_radio",
    meta: { title: "BraveField: Radio" },
    component: () => import("./views/BraveFieldRadio.vue"),
  },
  {
    path: "/bravefield_select",
    meta: { title: "BraveField: Select" },
    component: () => import("./views/BraveFieldSelect.vue"),
  },
  {
    path: "/bravefield_checkbox_group",
    meta: { title: "BraveField: Checkbox" },
    component: () => import("./views/BraveFieldCheckboxGroup.vue"),
  },
  {
    path: "/bravefield_checkbox",
    meta: { title: "BraveField: Checkbox" },
    component: () => import("./views/BraveFieldCheckbox.vue"),
  },
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
    path: "/brave_field",
    meta: { title: "Brave Sidebar Layout" },
    //component: BraveSidebarLayout,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/BraveField.vue"),
  },
  {
    path: "/brave-bottom-sheet",
    meta: { title: "Brave BottomSheet" },
    //component: BraveSidebarLayout,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/BraveBottomSheet.vue"),
  },
  {
    path: "/touch-swipe-up",
    meta: { title: "Touch Swipe Up" },
    //component: BraveSidebarLayout,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/BraveSwipeUp.vue"),
  },
  {
    path: "/touch-swipe-down",
    meta: { title: "Touch Swipe Down" },
    //component: BraveSidebarLayout,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/BraveSwipeDown.vue"),
  },
  {
    path: "/brave_tags",
    meta: { title: "Brave Sidebar Layout" },
    //component: BraveSidebarLayout,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/BraveTags.vue"),
  },

  {
    path: "/brave_radial_menu",
    meta: { title: "Brave Radial Menu" },
    //component: BraveSidebarLayout,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/BraveRadialMenu.vue"),
  },

  {
    path: "/brave_draggable",
    meta: { title: "Brave Draggable" },
    //component: BraveDraggable,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/BraveDraggable.vue"),
  },
  {
    path: "/brave_number_input",
    meta: { title: "Brave Draggable" },
    //component: BraveNumberInput,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/BraveNumberInput.vue"),
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
