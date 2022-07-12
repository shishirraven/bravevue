<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main class="flex-1 lg:p-16">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl font-semibold mb-10"> <i class="bi bi-window"></i> Brave Dialog</h1>
        <p>Add Dialogs to your VueJS App for Almost anything.</p>

        <h2 class="text-xl my-5">Examples</h2>
        <p>Click the following button to see BraveDialog in action</p>


        <h2 class="text-lg my-5 font-bold">Simple Brave Dialog with Tailwind CSS</h2>
        <button
          type="button"
          @click="$refs.bravedialog.show()"
          class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <i class="bi bi-window"></i> Open Dialog Box
        </button> &lt;- This is the button that will open the live example dialog box.

        <div
          class="bg-slate-400 py-32 rounded-2xl my-10 flex justify-center content-center"
        >
          <div class="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/2">
            <!-- Body -->
            <div class="flex">
              <div class="pl-5 pt-5">
                <div
                  class="h-10 w-10 rounded-full bg-red-200 flex justify-center content-center"
                >
                  <i
                    class="bi bi-exclamation-circle text-red-500 m-auto text-xl"
                  ></i>
                </div>
              </div>
              <div class="p-5">
                <h1 class="text-xl dark:text-white font-semibold text-gray-900 mb-2">
                  Deactivate Acccount
                </h1>
                <p class="text-gray-500 dark:text-gray-400 text-sm">
                  Are you sure you want to deactivate your account? All your
                  data will be permanently removed. This action cannot be undone
                </p>
              </div>
            </div>
            <!-- Buttons -->
            <div
              class="bg-slate-100 dark:bg-slate-900 px-5 py-2 rounded-b-xl flex justify-end gap-x-2"
            >
              <button
                type="button"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Cancel
              </button>

              <button
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Deactivate
              </button>
            </div>
          </div>
        </div>

        <BraveDialog
          ref="bravedialog1"
          class="bg-black/80 justify-center flex fixed bottom-0 left-0 right-0 top-0"
          dialogclasses="fixed lg:w-1/2 lg:m-auto m-3    dark:bg-slate-900 bg-white shadow-lg 
 dark:text-white rounded"
          :visibility="false"
        >
          <div class="p-5"></div>
          <h1>WEcome to my worl12312d</h1>
          <div class="p-1 text-right">
            <button
              @click="$refs.bravedialog.hide()"
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Close
            </button>
          </div>
        </BraveDialog>

        <BraveDialog
          ref="bravedialog"
          class="bg-black/80 backdrop-blur-sm dark:bg-black/80 justify-center flex fixed bottom-0 left-0 right-0 top-0"
          dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
          :visibility="false"
        >
          <!-- Body -->
          <div class="flex flex-1">
            <div class="pl-5 pt-5">
              <div
                class="h-10 w-10 rounded-full bg-red-200 flex justify-center content-center"
              >
                <i
                  class="bi bi-exclamation-circle text-red-500 m-auto text-xl"
                ></i>
              </div>
            </div>
            <div class="p-5">
              <h1 class="text-xl font-semibold dark:text-white text-gray-900 mb-2">
                Deactivate Acccount
              </h1>
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                Are you sure you want to deactivate your account? All your data
                will be permanently removed. This action cannot be undone
              </p>
            </div>
          </div>
          <!-- Buttons -->
          <div
            class="bg-slate-100 dark:bg-slate-900 px-5 py-2 rounded-b-lg flex justify-end gap-x-2"
          >
            <button
              @click="$refs.bravedialog.hide()"
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Cancel
            </button>

            <button
              @click="$refs.bravedialog.hide()"
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Deactivate
            </button>
          </div>
        </BraveDialog>
        <h3 class="text-xl my-5 text-bold">Import and add Component</h3>
        <BraveGistEmbed
          class="my-10"
          url="https://gist.github.com/shishirraven/434d4e87bd453aa7a6e4a14a1404406a"
        />
        <h3 class="text-xl my-5 text-bold">Use Dialog HTML in your Template</h3>
        <BraveGistEmbed
          class="my-10"
          url="https://gist.github.com/shishirraven/22c35e8b7bd84e8ad2edd8e9061dbb68"
        />
          <h3 class="text-xl my-5 text-bold">Open Dialog on Button Click</h3>
        <BraveGistEmbed
          class="my-10"
          url="https://gist.github.com/shishirraven/470f0d2d25c37c1824de9a475675d863"
        />

    <!-- ------------------------------------------------------------------ -->
    <!-- CENTERED WITH SINGLE ACTION -->
    <!-- ------------------------------------------------------------------ -->
    
    <div>
      <hr class="my-16">
    </div>
    


<h2 class="text-lg my-5 font-bold">Centered with single action with Tailwind CSS</h2>
        <button
          type="button"
          @click="$refs.bravedialog2.show()"
          class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
         <i class="bi bi-window"></i> Centered with single action 
        </button> &lt;- This is the button that will open the live example dialog box.

        <div
          class="bg-slate-400 py-32 rounded-2xl my-10 flex justify-center content-center"
        >
          <div class="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/2">
            <!-- Body -->
            <div class="text-center ">
              <div class="inline-block mt-5">
                <div
                  class="h-14 w-14 rounded-full bg-green-200 flex justify-center content-center"
                >
            
                  <i
                    class="bi bi-check2 text-green-500 m-auto text-2xl"
                  ></i>
                </div>
              </div>
              <div class="p-5">
                <h1 class="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
                 Payment Successful
                </h1>
                <p class="text-gray-500 text-sm dark:text-gray-400">
                  Thank you for your payment. We will be in touch with you soon.
                </p>
              </div>
              <div class="mx-5 mb-5">
                <button
                  @click="$refs.bravedialog2.hide()"
                  type="button"
                  class="text-white bg-blue-700 border border-gray-300 focus:outline-none hover:bg-blue-800
                   focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-700 
                   dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-gray-600 
                   dark:focus:ring-gray-700
                   min-w-full "
                >
                  Go back to the Dashboard
                </button>
              </div>
            </div>
            
          </div>
        </div>

        <BraveDialog
        ref="bravedialog2"
          class="bg-black/80 backdrop-blur-sm dark:bg-black/80 justify-center flex fixed bottom-0 left-0 right-0 top-0"
          dialogclasses="rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-lg mx-5 lg:w-1/3 flex-col flex my-auto "
          :visibility="false"
        >
          <div class="text-center ">
              <div class="inline-block mt-5">
                <div
                  class="h-14 w-14 rounded-full bg-green-200 flex justify-center content-center"
                >
            
                  <i
                    class="bi bi-check2 text-green-500 m-auto text-2xl"
                  ></i>
                </div>
              </div>
              <div class="p-5">
                <h1 class="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
                 Payment Successful
                </h1>
                <p class="text-gray-500 text-sm dark:text-gray-400">
                  Thank you for your payment. We will be in touch with you soon.
                </p>
              </div>
              <div class="mx-5 mb-5">
                <button
                  @click="$refs.bravedialog2.hide()"
                  type="button"
                  class="text-white bg-blue-700 border border-gray-300 focus:outline-none hover:bg-blue-800
                   focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-700 
                   dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-gray-600 
                   dark:focus:ring-gray-700
                   min-w-full "
                >
                  Go back to the Dashboard
                </button>
              </div>
            </div>
        </BraveDialog>

        <h3 class="text-xl my-5 text-bold">Import and add Component</h3>
        <BraveGistEmbed
          class="my-10"
          url="https://gist.github.com/shishirraven/434d4e87bd453aa7a6e4a14a1404406a"
        />
        <h3 class="text-xl my-5 text-bold">Use Dialog HTML in your Template</h3>
        <BraveGistEmbed
          class="my-10"
          url="https://gist.github.com/shishirraven/4f2433d0e6ef0a942a586609fb54fc68"
        />
          <h3 class="text-xl my-5 text-bold">Open Dialog on Button Click</h3>
        <BraveGistEmbed
          class="my-10"
          url="https://gist.github.com/shishirraven/162063a800edb7e3c3020a2b6c8afe4d"
        />

    <!-- ------------------------------------------------------------------ -->
    <!-- !!! ENDS CENTERED WITH SINGLE ACTION -->
    <!-- ------------------------------------------------------------------ -->




      </div>
      <hr />
    </div>
  </main>
</template>

<script>
import { BraveDialog, BraveGistEmbed } from "bravevue";
export default {
  components: { BraveDialog, BraveGistEmbed },
};
</script>
