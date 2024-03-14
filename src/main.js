import './tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import RenderTree1 from "@/components/RenderTree1.vue"
import TreeNode from "@/components/TreeNode.vue"
import { createHead } from "@vueuse/head"
const app = createApp(App)
const head = createHead()


app.use(head)
const router = createRouter({
  history: createWebHistory("/"),
  routes,
  linkActiveClass: "dark:bg-slate-800 ",
});

app.component("RenderTree1", RenderTree1); 
app.component("TreeNode", TreeNode); 

app.use(router)

import bravevue from 'bravevue';
app.use(bravevue);

app.mount('#app')