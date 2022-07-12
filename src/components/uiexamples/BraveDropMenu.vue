<template>
  <BraveDropMenu ref="dropmenu2" class="me-3">
      <template #button>
        <div role="button" 
        class="dark:bg-slate-900  dark:hover:bg-slate-800  border dark:border-slate-500 border-slate-200  p-2 px-4 mr-5
        rounded-lg shadow-sm dark:text-white bg-white   hover:shadow  dark:hover:border-slate-500 hover:border-slate-300"  
        >Documentation <i class="bi bi-chevron-down"></i></div>
      </template>
      <template #menu>
       <div class="w-44 dark:bg-slate-900 border dark:border-slate-800 py-2 
        rounded-lg shadow-lg dark:text-slate-300 bg-white ">
            
            <div @click="$refs.dropmenu2.hide()"  class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm" 
            > <i class="bi mr-2 text-xl bi-window"></i> Brave Dialog</div>
            <div @click="$refs.dropmenu2.hide()"  class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm" 
            > <i class="bi mr-2 text-xl bi-window-stack"></i> Position Dialog</div>
            <div @click="$refs.dropmenu2.hide()"  class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm" 
            > <i class="bi mr-2 text-xl bi-menu-button-wide"></i> Drop Menu</div>
            <div @click="$refs.dropmenu2.hide()"  class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3 text-sm" 
            > <i class="bi mr-2 text-xl bi-github"></i> Gist Embed</div>
         
       </div>
      </template> 
    </BraveDropMenu>
  <BraveDropMenu ref="dropmenu" class="me-3">
      <template #button>
        <div role="button" 
        class="dark:bg-slate-900 border dark:hover:bg-slate-800  border dark:border-slate-800  p-2 px-5 
        rounded-lg shadow-sm dark:text-white bg-white   hover:shadow-lg"
        >Select Theme <i class="bi bi-chevron-expand"></i></div>
      </template>
      <template #menu>
       <div class="w-44 dark:bg-slate-900 border dark:border-slate-800 py-2 
        rounded-lg shadow-lg dark:text-slate-300 bg-white text-lg">
            <div  :class="[(mode=='dark') ? 'dark:bg-slate-800' : '']" class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3" 
            @click="$refs.dropmenu.hide()"><i class="text-yellow-500 bi bi-moon-stars-fill mr-2"></i> Dark</div>
            <div  :class="[(mode=='light') ? 'bg-blue-100' : '']" class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3" 
            @click="$refs.dropmenu.hide()"><i class="text-blue-500 bi bi-brightness-high-fill mr-2"></i> Light</div>
            <div :class="[(mode=='system') ? 'bg-blue-100 dark:bg-slate-800' : '']"  class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3" 
            @click="$refs.dropmenu.hide()"><i class="bi bi-display mr-2"></i> System</div>
       </div>
      </template> 
    </BraveDropMenu>
</template>
<script>
import { BraveDropMenu } from "bravevue";
export default {
  components: { BraveDropMenu },
};
</script>
