import { createApp } from 'vue'
import './tailwind.css'
import "../node_modules/bravevue/dist/style.css";
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import RenderTree1 from "@/components/RenderTree1.vue"
import TreeNode from "@/components/TreeNode.vue"
const app = createApp(App)

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  linkActiveClass: "dark:bg-slate-800 ",
});

app.component("RenderTree1", RenderTree1); 
app.component("TreeNode", TreeNode); 

app.use(router)
app.mount('#app')
