<template>
<div class="  text-white flex flex-col space2-y-5 font-light">
    

    <router-link @click.native="$emit('jumpingToAnchor')"  to="/" class="flex items-center p-3 ">
        <i class="bi text-xl bi-house me-2
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
         from-yellow-100 via-yellow-300 to-yellow-500"></i> 
        <div class="ml-2 ">Home </div>
    </router-link>
    <div class="text-sm tracking-wider py-4">COMPONENTS</div>


    
    <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_tabs" class="flex items-center p-3 ">
        <i class="bi bi-segmented-nav  
        dark:bg-clip-text dark:text-transparent   dark:bg-gradient-to-r 
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Tabs </div>
    </router-link>  

    <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave-bottom-sheet" class="flex items-center p-3 ">
        <i class="bi bi-layer-forward  
        dark:bg-clip-text dark:text-transparent   dark:bg-gradient-to-r 
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Bottom Sheet <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    New
                </span>
</div>
    </router-link>  
    
    <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_tags" class="flex items-center p-3 ">
        <i class="bi bi-tags  
        dark:bg-clip-text dark:text-transparent   dark:bg-gradient-to-r 
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Tags 
            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    New
                </span>
        </div>
    </router-link>  
    
     <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_draggable"  class="flex items-center p-3 ">
        <i class="bi me-2 text-xl  bi-arrows-move
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
         from-yellow-100 via-yellow-300 to-yellow-500"></i> 
        <div class="ml-2">Draggable 
                <!-- small new indicator tailwind -->
                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    New
                </span>
        </div>
    </router-link>
    <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_radial_menu"  class="flex items-center p-3 ">
        <i class="bi me-2 text-xl  bi-brightness-low
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
         from-yellow-100 via-yellow-300 to-yellow-500"></i> 
        <div class="ml-2">Radial Menu 
                <!-- small new indicator tailwind -->
                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    New
                </span>
        </div>
    </router-link>
     <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_sidebar_layout"  class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-window-sidebar
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
         from-yellow-100 via-yellow-300 to-yellow-500"></i> 
        <div class="ml-2">Sidebar Layout </div>
    </router-link>
     <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_slider" class="flex items-center p-3 ">
        
        <i class="bi me-2 text-xl bi-window-dock 
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
         from-yellow-100 via-yellow-300 to-yellow-500"></i> 
        <div class="ml-2">Slider </div>
    </router-link>  
     <router-link @click.native="$emit('jumpingToAnchor')"  to="/bravedialog" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-window
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
         from-yellow-100 via-yellow-300 to-yellow-500"></i> 
        <div class="ml-2">Dialog </div>
    </router-link>
    <router-link @click.native="$emit('jumpingToAnchor')"  to="/positiondialog" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-window-stack
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
         from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Position Dialog</div>
    </router-link>

    
    <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_number_input" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-123
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Number Input
                    </div>
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


    
    
    <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_context_bar" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-usb
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Brave Context Bar</div>
    </router-link>
    
    <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_field" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-ui-checks
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Input Field</div>
    </router-link>
    
    <router-link @click.native="$emit('jumpingToAnchor')"  to="/bravefield_radio" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-ui-radios
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Radio</div>
    </router-link>

    <router-link @click.native="$emit('jumpingToAnchor')"  to="/bravefield_select" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-menu-button-wide
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Native Select</div>
    </router-link>

    <router-link @click.native="$emit('jumpingToAnchor')"  to="/bravefield_checkbox_group" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-ui-checks
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Checkbox Group</div>
    </router-link>

    <router-link @click.native="$emit('jumpingToAnchor')"  to="/bravefield_checkbox" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-ui-checks
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Checkbox </div>
    </router-link>
    
    <div class="text-sm tracking-wider py-4">DIRECTIVES</div>

    <router-link @click.native="$emit('jumpingToAnchor')"  to="/touch-swipe-up" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-chevron-double-up
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Touch Swipe Up</div>
    </router-link>

    <router-link @click.native="$emit('jumpingToAnchor')"  to="/touch-swipe-down" class="flex items-center p-3 ">
        <i class="bi me-2 text-xl bi-chevron-double-down
        dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Touch Swipe Down</div>
    </router-link>

    
    

        
    <div class="text-sm tracking-wider py-4">BLOCK EDITOR</div>

    <router-link @click.native="$emit('jumpingToAnchor')"  to="/brave_block_tree" class="flex items-center p-3 ">
        <i class="bi   bi-list-nested
        dark:bg-clip-text dark:text-transparent   dark:bg-gradient-to-r 
        from-yellow-100 via-yellow-300 to-yellow-500"></i>
        <div class="ml-2">Block Tree</div>
    </router-link>  

        
    <div class="text-sm tracking-wider py-4">HELP</div>

    <router-link @click.native="$emit('jumpingToAnchor')"  to="/request_a_component" class="flex items-center p-3 ">
        <i class="bi   bi-stars
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