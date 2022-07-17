<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="flex-1 lg:p-16">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl font-semibold mb-10">
          <i class="bi me-2 text-xl bi-menu-button-wide"></i> Brave Slider
        </h1>
        <p>
          BraveSlider is a responsive slider that you can use to slide any HTML
          Content or Images.
        </p>
        <p class="my-5">The following is a Simple Example.</p>
        <BraveSlider />
        <p class="my-5">Here is how the Slider looks in smaller Size</p>
        <div class="max-w-xl">
          <BraveSlider />
        </div>

        <h2 class="text-3xl font-semibold my-7">Features</h2>

        <p class="mb-5">
          BraveSlider is designed to be able to easily be customizable as per
          your requirement.
        </p>
        <li>
          You can configure ths Slider Controls and can build your own controls.
        </li>
        <li>You can use custom CSS or any CSS Library.</li>
        <li>
          There are no complex configuration required and you can easily
          unerstand the Slider.
        </li>
        <li>Supports CSS Animation.</li>
        <li>Resonsive HTML Slider, so you can use it in any device.</li>
        <li>Pre-made "Just Drop In" Ready Made Examples Available.</li>
        <li>Supports Auto-Play</li>
        <li>Supports Stop on Mouse Hover</li>
        <li>Light-weight, No bloated CSS.</li>

          <h2 class="text-3xl font-semibold my-7">How to Use</h2>
        <ol class="relative space-y-2 mb-16" style="counter-reset: step 0">
          <li
            class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5"
            style="counter-increment: step 1"
          >
            <div class="mb-6 col-span-2 xl:mb-0">
              <h4
                class=" leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"
              >
                Install Tailwind CSS
              </h4>
              <div class="">
                <p>
                  Install <code>`bravevue`</code> via npm
                </p>
              </div>
            </div>
            <div class="col-span-3">
                <BraveSyntaxHighlighter 
                copyText=" 📋 Copy Code"
                language="plaintext"
  
  prisimClassName="dark:!bg-slate-900 bg-slate-50 rounded-lg  " 
  class="!bg-slate-800 !rounded-lg "  ref="codebox">
  <template #header="{copyToClipboard,copyText}">
     <div class="flex text-sm rounded-t-lg  border-b border-slate-600">
        <div class="flex-1">
          <div class="dark:bg-slate-700 inline-block text-white  rounded-t-lg py-2 px-5  font-light ">Terminal</div>
        </div>
        <div @click="copyToClipboard()" 
        class=" mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900  inline-block">
         {{copyText}}</div>
      </div>
    </template>
  
  <template #default>{{`npm install bravevue`}}  </template>
  
  </BraveSyntaxHighlighter>
              </div>
          </li>



<!-- ======================== -->
<!-- SECOND SETEP -->
<!-- ======================== -->

          <li
            class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5"
            style="counter-increment: step 1"
          >
            <div class="mb-6 col-span-2 xl:mb-0">
              <h4
                class=" leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"
              >
                Import the Component
              </h4>
              <div class="">
                <p>
                  Import Component and add to your components objecct. 
                </p>
              </div>
            </div>
            <div class="col-span-3">
                <BraveSyntaxHighlighter 
                copyText=" 📋 Copy Code"
                language="javascript"
                prisimClassName="dark:!bg-slate-900 bg-slate-50 rounded-lg  "   
                class="!bg-slate-800 !rounded-lg "  ref="codebox">
                  <template #header="{copyToClipboard,copyText}">
                    <div class="flex text-sm rounded-t-lg  border-b border-slate-600">
                        <div class="flex-1">
                          <div class="dark:bg-slate-700 inline-block text-white  rounded-t-lg py-2 px-5  font-light ">
                            YourView.vue</div>
                        </div>
                        <div @click="copyToClipboard()" 
                        class=" mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900  inline-block">
                        {{copyText}}</div>
                      </div>
                    </template>
                    <template #default>{{`<script>
import "@/../node_modules/bravevue/dist/style.css";
import {BraveSlider} from 'bravevue'
export default{
  components: 
  {
    BraveSlider,
  }
}
</script>`}}  </template>
                    </BraveSyntaxHighlighter>
              </div>
          </li>

<!-- ======================== -->
<!-- THIRD STEP -->
<!-- ======================== -->
          
          <li
            class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5"
            style="counter-increment: step 1"
          >
            <div class="mb-6 col-span-2 xl:mb-0">
              <h4
                class=" leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"
              >
                Add Component to your template
              </h4>
              <div class="">
                <p class="text-sm">
                  Place component in your template wherever you want the Slider to appear. 
                </p>
              </div>
            </div>
            <div class="col-span-5">
                <BraveSyntaxHighlighter 
                copyText=" 📋 Copy Code"
                language="javascript"
                prisimClassName="dark:!bg-slate-900 bg-slate-50 rounded-lg  "   
                class="!bg-slate-800 !rounded-lg "  ref="codebox">
                  <template #header="{copyToClipboard,copyText}">
                    <div class="flex text-sm rounded-t-lg  border-b border-slate-600">
                        <div class="flex-1">
                          <div class="dark:bg-slate-700 inline-block text-white  rounded-t-lg py-2 px-5  font-light ">
                            YourView.vue</div>
                        </div>
                        <div @click="copyToClipboard()" 
                        class=" mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900  inline-block">
                        {{copyText}}</div>
                      </div>
                    </template>
                    <template #default>{{`<BraveSlider class="text-lg relative " :auto-play="true">
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
  </BraveSlider>`}}  </template>
                    </BraveSyntaxHighlighter>
              </div>
          </li>



<!-- ======================== -->
<!-- FOURTH SLIDE -->
<!-- ======================== -->

          <li
            class="relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5"
            style="counter-increment: step 1"
          >
            <div class="mb-6 col-span-2 xl:mb-0">
              <h4
                class=" leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200"
              >
                Create and add slides. 
              </h4>
              <div class="text-sm">
                <p>
                  You can create and add slides to your slider. You can add any number of slides to your slider.
                  Here is an example of a Animated Slide you see in the example. 
                </p>
                  <p class="mt-3">
                    We use <a class="text-blue-700" href="https://animate.style/"> Animate.css </a> to animate the slider. 
                  </p>
              </div>
            </div>
            <div class="col-span-5">
                <BraveSyntaxHighlighter 
                copyText=" 📋 Copy Code"
                language="html"
                prisimClassName="dark:!bg-slate-900 bg-slate-50 rounded-lg  "   
                class="!bg-slate-800 !rounded-lg "  ref="codebox">
                  <template #header="{copyToClipboard,copyText}">
                    <div class="flex text-sm rounded-t-lg  border-b border-slate-600">
                        <div class="flex-1">
                          <div class="dark:bg-slate-700 inline-block text-white  rounded-t-lg py-2 px-5  font-light ">
                            Slide1.vue</div>
                        </div>
                        <div @click="copyToClipboard()" 
                        class=" mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900  inline-block">
                        {{copyText}}</div>
                      </div>
                    </template>
                    <template #default>{{`<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>
        <main
          class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span
                class="inline-block animate__faster"
                v-bind:class="{
                  'animate__animated animate__lightSpeedInRight delay-1-2':
                    isCurrentSlide,
                }"
                >Data to enrich your</span
              >
              <span
                class="inline-block text-indigo-600"
                v-bind:class="{
                  'animate__animated animate__lightSpeedInRight animate__fadeIn  animate__faster delay-1-4':
                    isCurrentSlide,
                }"
              >
                online business
              </span>
            </h1>
            <p
              :class="{
                'animate__animated animate__lightSpeedInRight  animate__faster delay-1-6':
                  isCurrentSlide,
              }"
              class="mt-3 inline-block text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus<!-- -->
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="">
                <a
                  href="#"
                  :class="{
                    'animate__animated animate__lightSpeedInRight  animate__faster delay-1-8':
                      isCurrentSlide,
                  }"
                  class="rounded-md shadow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  :class="{
                    'animate__animated animate__lightSpeedInRight  animate__faster delay-2':
                      isCurrentSlide,
                  }"
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <div
      :class="{
        'animate__animated animate__bounce animate__delay-1s': isCurrentSlide,
      }"
      class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden md:block"
    >
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2850&amp;q=80"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "slide1",
  props: {
    isCurrentSlide: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
.delay-1-2 {
  animation-delay: 0.5s;
}
.delay-1-4 {
  animation-delay: 0.7s;
}
.delay-1-6 {
  animation-delay: 0.9s;
}
.delay-1-8 {
  animation-delay: 1.1s;
}
.delay-2 {
  animation-delay: 1.3s;
}
</style>
`}}  </template>
                    </BraveSyntaxHighlighter>
              </div>
          </li>



          
        </ol>

        <!-- <BraveGistEmbed
          class="my-10"
          url="https://gist.github.com/shishirraven/3985c05c81ab898a5c476e792eb6298e"
        /> -->

        <!-- ------------------------------------------------------------------ -->
        <!-- !!! ENDS CENTERED WITH SINGLE ACTION -->
        <!-- ------------------------------------------------------------------ -->
      </div>
      <hr class="my-5" />
    </div>
  </main>
</template>

<script>
import BraveSlider from "@/components/uiexamples/BraveSlider.vue";
import { BraveGistEmbed,BraveSyntaxHighlighter } from "bravevue";
export default {
  components: { BraveGistEmbed, BraveSlider , BraveSyntaxHighlighter},
};
</script>
