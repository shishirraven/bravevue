<script>
import { BraveSidebarLayout } from "bravevue";
import BraveThemeSwitch from "./components/BraveThemeSwitch.vue";
import SiteNavigation from './components/SiteNavigation.vue'
import { ref } from 'vue'
export default {
  components: {
    BraveSidebarLayout,
    BraveThemeSwitch,
    SiteNavigation
  },
  methods: {
    closeIfNotMobile(closeMenu,isMobile){
      if(isMobile){
        closeMenu()
      }
    }
  }
}
</script>
<template>
  <client-only>
  <BraveSidebarLayout sidebar-class="  bg-slate-900 flex flex-col text-white " :sidebar-width="300">
    <!-- SIDEBAR TEMPLATE -->
    <template v-slot:sidebar="{closeMenu,openMenu,panelState,isMobile}">
      <div class="p-2  cursor-pointer text-2xl absolute right-0 top-0 md:hidden" @click="closeMenu()"><i
          class=" bi bi-x-circle"></i></div>
      <router-link to="/">
        <div class="flex-shrink-0 flex items-center p-8">
          <img class="h-7 w-auto" src="@/assets/images/logo.svg" alt="BraveVue" />
          <div class="ml-2 text-lg">BraveVue</div>
        </div>
      </router-link>
      <SiteNavigation class="p-5 flex-grow overflow-auto" @jumpingToAnchor="closeIfNotMobile(closeMenu,isMobile)" />
      <div class="flex-shrink-0 flex border-t dark:border-slate-600 border-cyan-800 p-4">
        <a target="_blank" href="https://iamshishir.com/about-me/" class="flex-shrink-0 w-full group block">
          <div class="flex items-center">
            <div>
              <img class="inline-block h-9 w-9 rounded-full" src="@/assets/images/shishir_profie.png" alt="" />
            </div>
            <div class="ml-3">

              <p class="text-sm font-medium text-white">Built with
                <i class=" bi bi-suit-heart-fill
                  dark:bg-clip-text dark:text-transparent   dark:bg-gradient-to-r 
        from-yellow-100 via-yellow-300 to-yellow-500
                  
                  "></i>
                by Shishir
              </p>

              <div class="text-sm text-white mt-1">
                HIRE ME
              </div>

            </div>
          </div>

        </a>
      </div>
    </template>
    <!-- MAIN CONTENT TEMPLATE -->
    <template v-slot:content="{closeMenu,openMenu}">
      <div class="p-2  cursor-pointer text-2xl inline-block md:hidden" @click="openMenu()"><i
          class=" bi bi-three-dots-vertical"></i></div>
            <div class="">
              <client-only>
                <BraveThemeSwitch/>
              </client-only>
          <router-view />
        </div>
    </template>
  </BraveSidebarLayout>
</client-only>
</template>