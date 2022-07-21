<template>
<div class="  text-white flex flex-col space2-y-5 font-light">
    <router-link @click.native="$emit('jumpingToAnchor')"  to="/" class="flex items-center p-3 ">
        <i class="bi text-xl bi-house me-2
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
         from-yellow-100 via-yellow-300 to-yellow-500"></i> 
        <div class="ml-2 ">Home </div>
    </router-link>
    <div class="text-sm tracking-wider py-4">COMPONENTS</div>
     <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_sidebar_layout"  class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-window-sidebar
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
         from-yellow-100 via-yellow-300 to-yellow-500"></i> 
        <div class="ml-2">Sidebar Layout </div>
    </router-link>
     <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_slider" class="flex items-center p-3 ">
        <i class="bi bi-window-dock 
        dark:bg-clip-text dark:text-transparent   dark:bg-gradient-to-r 
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Brave Slider </div>
    </router-link>  
     <router-link @click.native="$emit('jumpingToAnchor')"  to="/bravedialog" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-window
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
         from-yellow-100 via-yellow-300 to-yellow-500"></i> 
        <div class="ml-2">Brave Dialog </div>
    </router-link>
    <router-link @click.native="$emit('jumpingToAnchor')"  to="/positiondialog" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-window-stack
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
         from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Position Dialog</div>
    </router-link>
    
    
    <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_dropmenu" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-menu-button-wide
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r 
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Drop Menu</div>
    </router-link>
    
    <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_select" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-menu-button-wide
        dark:bg-clip-text dark:text-transparent   dark:bg-gradient-to-r 
        from-yellow-100 via-yellow-300 to-yellow-500
        "></i>
        <div class="ml-2">Select </div>
    </router-link>   
    
    <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_tabs" class="flex items-center p-3 ">
        <i class="bi bi-segmented-nav  
        dark:bg-clip-text dark:text-transparent   dark:bg-gradient-to-r 
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Brave Tabs </div>
    </router-link>  
    
   

    
    <router-link @click.native="$emit('jumpingToAnchor')"  to="/gistembed" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-github
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Gist Embed</div>
    </router-link>
    
    
    <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_syntax_highlighter" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-code-square
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Syntax Highlighter</div>
    </router-link>
    
    
    
    <div class="text-sm tracking-wider py-4">HELP</div>

    <router-link @click.native="$emit('jumpingToAnchor')"  to="/request_a_component" class="flex items-center p-3 ">
        <i class="bi bi-stars  
        dark:bg-clip-text dark:text-transparent   dark:bg-gradient-to-r 
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Request a Component </div>
    </router-link>  
</div>

</template>
<script>
export default
{
    emits: ['jumpingToAnchor'],
}
</script>