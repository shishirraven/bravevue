<template>
  <BraveDropMenu ref="dropmenu" class="me-3">
      <template #button>
        <div role="button" 
        class="dark:bg-slate-900 border dark:hover:bg-slate-800  border dark:border-slate-800  p-2 text-xl
        rounded-lg shadow-sm dark:text-white bg-white   hover:shadow-lg inline-block auto-cols-auto items-center "
        
        >
            <i :class="iconClass" class=""></i>
            <div class="text-base ml-3">Theme {{mode}}</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-expand" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
                </svg>
            <div class="ml-3">
                
            </div>
        </div>
      </template>
      <template #menu>
       <div class="w-44 dark:bg-slate-900 border dark:border-slate-800 py-2 
        rounded-lg shadow-lg dark:text-slate-300 bg-white text-xl">
            <div  :class="[(mode=='dark') ? 'dark:bg-slate-800' : '']" class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3" 
            @click="$refs.dropmenu.hide(),switchToDark(true)"><i class="text-yellow-500 bi bi-moon-stars-fill mr-2"></i> Dark</div>
            <div  :class="[(mode=='light') ? 'bg-blue-100' : '']" class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3" 
            @click="$refs.dropmenu.hide(),switchToLight(true)"><i class="text-blue-500 bi bi-brightness-high-fill mr-2"></i> Light</div>
            <div :class="[(mode=='system') ? 'bg-blue-100 dark:bg-slate-800' : '']"  class="dark:hover:bg-slate-800 hover:bg-slate-200 cursor-pointer w-100 py-1 px-3" 
            @click="$refs.dropmenu.hide(),switchToSystem()"><i class="bi bi-display mr-2"></i> System</div>
       </div>
      </template> 
    </BraveDropMenu>
</template>
<script>
import BraveDropMenu from "./BraveDropMenu.vue"
export default {
components:{BraveDropMenu},
 created()
 {
    this.applyByStorage()
 },
 data(){
     return {iconClass:"bi bi-moon-stars-fill text-yellow-500",
     mode:"system"
     }
 },
 methods:{
     switchToLight(updateStore){
         if(updateStore!=undefined && updateStore)
         {
             localStorage.theme = 'light'
         }
         this.iconClass="bi bi-brightness-high-fill text-blue-500"
        //this.$refs.dropmenu.hide()
        this.mode="light";
        //(this.$refs);
         document.documentElement.classList.remove('dark')
     },
     switchToDark(updateStore){
         if(updateStore!=undefined && updateStore)
         {
             localStorage.theme = 'dark'
         }
         this.mode="dark";
         this.iconClass="bi bi-moon-stars-fill text-yellow-500"
         document.documentElement.classList.add('dark')
       //  this.$refs.dropmenu.hide()
     },
     switchToSystem(){
        localStorage.removeItem('theme')
        this.iconClass="bi bi-display text-grey-300"
        this.applyByStorage()
        this.mode="system";
     },
     applyByStorage()
     {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            this.switchToDark(false)
        } else {
            this.switchToLight(false)
        }
        if(!('theme' in localStorage))
         {
             this.mode="system";
         }
     }

 }
}
</script>