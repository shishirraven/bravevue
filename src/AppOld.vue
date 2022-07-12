<template>
  <!--
    This example requires updating your template:
    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="fixed inset-0 flex z-40 md:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex-1 flex flex-col max-w-xs w-full  bg-cyan-700 dark:bg-slate-900">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                   <i class="bi bi-x-lg"></i>
                </button>
              </div>
            </TransitionChild>
            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div class="flex-shrink-0 flex items-center px-4">
                <img class="h-8 w-auto" src="@/assets/images/logo.svg" alt="Workflow" />
                
              </div>
              <SiteNavigation/>
              <nav class="mt-5 px-2 space-y-1">


                  


                
              </nav>
            </div>
            <div class="flex-shrink-0 flex border-t border-indigo-800 p-4">
              <a href="#" class="flex-shrink-0 group block">
                <div class="flex items-center">
                  <div>
                    <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </div>
                  <div class="ml-3">
                    <p class="text-base font-medium text-white">Tom Cook</p>
                    <p class="text-sm font-medium text-indigo-200 group-hover:text-white">View profiledafdas  </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex-1 flex flex-col min-h-0 bg-cyan-700 dark:bg-slate-900">
        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div class="flex items-center2 flex-shrink-0 px-4">
            <img class="h-8 w-auto" src="@/assets/images/logo.svg" alt="Workflow" />
            <div class=" ml-2" >
              <div class="text-white antialiased text-xl
              ">BraveVue</div>

            </div>
            
          </div>
          
          <div>
           
          </div>
          <SiteNavigation class="mt-5 flex-1 px-2 space-y-1"/>
          <nav class="mt-5 flex-1 px-2 space-y-1">
            <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-cyan-800 text-white' : 'text-white hover:bg-cyan-600 hover:bg-opacity-75', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
              <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
              {{ item.name }}
            </a>
          </nav>
        </div>
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
                    by Shishir </p>
            
            <div class="text-sm text-white mt-1">
              HIRE ME
            </div>
            
            </div>
            </div>
            
          </a>
        </div>
        
      </div>
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
      <div class="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
        <button type="button" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <i class="bi bi-list text-3xl"></i>
        </button>
      </div>
      <div >
        <BraveThemeSwitcher class="float-right m-5"/>
      </div>
      <router-view />
    
    </div>
  </div>
</template>

<script>
import SiteNavigation from './components/SiteNavigation.vue'
import { ref } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { BraveThemeSwitcher } from "bravevue";

const navigation = [

]

export default {
  components: {
    SiteNavigation,
    BraveThemeSwitcher,
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,

  },
  setup() {
    const sidebarOpen = ref(false)

    return {
      navigation,
      sidebarOpen,
    }
  },
}
</script>

