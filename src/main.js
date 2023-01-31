//import { createApp } from 'vue'
import './tailwind.css'
import "../node_modules/bravevue/dist/style.css";
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory,createMemoryHistory } from 'vue-router'
import RenderTree1 from "@/components/RenderTree1.vue"
import TreeNode from "@/components/TreeNode.vue"
 import { createHead } from "@vueuse/head"


//  const router = createRouter({
//   // history: createWebHistory("/"),
//   history: 0 
//   ? createWebHistory("/") 
//   : createMemoryHistory("/"),
//   routes,
//   linkActiveClass: "dark:bg-slate-800 ",
// });

import bravevue from 'bravevue';

import { ViteSSG } from 'vite-ssg'

// const app = createApp(App)
const head = createHead()
export const createApp  = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes, history: createMemoryHistory("/") },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
    
//  app.use(head)


app.component("RenderTree1", RenderTree1); 
app.component("TreeNode", TreeNode); 

// app.use(router2)

app.use(bravevue);

// app.mount('#app')
  },
)