<script>
import "@/../node_modules/bravevue/dist/style.css";
import slide1 from '@/components/slides/slide1.vue'
import slide2 from '@/components/slides/slide2.vue'
import slide3 from '@/components/slides/slide3.vue'
import {BraveSlider} from 'bravevue'
export default{
  components: 
  {
    BraveSlider,
    slide1,
    slide2,
    slide3
  }
}
</script>
<template>
  <BraveSlider class="text-lg relative " :auto-play="true">
    <!-- SLIDES TEMPLATE -->
    <template v-slot:slides="{currentSlide}">
        <!-- <div class="bg-gray-100 min-w-full snap-center"></div> -->
        <div class=" min-w-full snap-center flex content-center justify-center flex-col">
            <slide1 :isCurrentSlide="currentSlide==0"/>
        </div>
        <div class="bg-indigo-900 min-w-full snap-center">
            <slide2/>
        </div>
        <div class="bg-indigo-900 min-w-full snap-center">
          <slide3 :isCurrentSlide="currentSlide==2"/>
        </div>
          
    </template>
  <!-- CONTROL TEMPLATE -->
  <template v-slot:controls="{prevSlide,nextSlide,scrollToSlide,totalSlides,currentSlide}">

      <!-- ===================================================================== -->
      <!-- PREVIOUS CONTROL BUTTON  -->
      <!-- ===================================================================== -->
      <div class="z-30 absolute p-5 cursor-pointer left-0 top-0 bottom-0 grid   hover:bg-slate-600  hover:opacity-60
      content-center justify-items-center  " @click="prevSlide">
         <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
          </svg>
        </div> 
      </div>
      <!-- ----------------------------------------------------------------  -->
      
      <!-- ===================================================================== -->
      <!-- NEXT  CONTROL BUTTON  -->
      <!-- ===================================================================== -->
      <div class="z-30 absolute p-5 cursor-pointer right-0 top-0 bottom-0 grid hover:bg-slate-600  hover:opacity-60
      content-center justify-items-center  " @click="nextSlide">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
          </svg>
        </div> 
      </div>
      <!-- ----------------------------------------------------------------  -->

      <!-- ===================================================================== -->
      <!-- looping Buttons  -->
      <!-- ===================================================================== -->

      <div class=" absolute bottom-7 left-0 right-0 z-20">    
        <div class="flex justify-center ">
          <div v-for="index in totalSlides" @click="currentSlide=index,scrollToSlide(index-1)" 
              class="h-5 w-5 border border-white opacity-50 cursor-pointer bg-slate-800 mr-2 hover:bg-slate-500 hover:scale-125 rounded-full" 
              :class="{'bg-slate-900 scale-125': currentSlide === index-1}"  :key="index" >
          </div>
        </div>
      </div>
       <!-- ----------------------------------------------------------------  -->

    </template>
  </BraveSlider>
 </template>
