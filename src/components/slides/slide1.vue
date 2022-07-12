<template>
    <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>
        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 
           
            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl ">
              <span 
               :class="{'animate__animated animate__lightSpeedInRight delay-1-2':isCurrentSlide}"
              class="inline-block animate__faster ">Data to enrich your</span>
              <!-- space -->
              <span class="inline-block text-indigo-600"
               :class="{'animate__animated animate__lightSpeedInRight animate__fadeIn  animate__faster delay-1-4':isCurrentSlide}"
               > online business</span>
            </h1>
            <p
             :class="{'animate__animated animate__lightSpeedInRight  animate__faster delay-1-6':isCurrentSlide}"
              
            class="mt-3  inline-block text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus<!-- -->
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="">
                <a href="#" 
                 :class="{'animate__animated animate__lightSpeedInRight  animate__faster delay-1-8':isCurrentSlide}"
              
                class="rounded-md shadow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Get started
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                 :class="{'animate__animated animate__lightSpeedInRight  animate__faster delay-2':isCurrentSlide}"
              
                href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <div :class="{'animate__animated animate__bounce animate__delay-1s':isCurrentSlide}"
     class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden md:block ">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2850&amp;q=80" alt="">
    </div>
  </div>
</template>
<script>
  export default{
    name: 'slide1',
    props: {
      isCurrentSlide: {
        type: Boolean,
        default: false
      }
    }

  }

</script>
<style>
.delay-1-2{
  animation-delay: .5s;  
}
.delay-1-4{
  animation-delay: .7s;  
}
.delay-1-6{
  animation-delay: .9s;  
}
.delay-1-8{
  animation-delay: 1.1s;  
}
.delay-2{
  animation-delay: 1.3s;  
}
</style>
        