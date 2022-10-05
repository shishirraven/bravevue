<template>
    <BraveTabs ref="bravetabref" class="overflow-hidden dark:bg-slate-900 p-5"
        tabsWrapperClass="flex mx-auto max-w-min bg-slate-200 dark:bg-slate-800 p-1 rounded-xl"
        tab-button-class="rounded-xl px-10 sm:px-10 py-2 dark:text-slate-400 whitespace-nowrap cursor-pointer text-center duration-200"
        tab-button-active-class="px-10 sm:px-10 rounded-xl bg-slate-900 dark:bg-slate-900 text-white whitespace-nowrap py-2 cursor-pointer text-center duration-200 shadow-md"
        tabs-content-class="mt-5 rounded-lg border dark:border-slate-800 py-7 px-7 dark:text-white"
        v-bind:tabs="['a', 'b', 'c']" initialTab="a">


        <!-- ================================================================ -->
        <!-- TAB-A: HEAD & CONTENT PANEL  -->
        <!-- ================================================================ -->

        <!-- TAB-A: HEAD PANEL  -->
        <template #tab-head-a>
            <span class="uppercase">Mobile</span>
        </template>

        <!-- TAB-A: CONTENT PANEL  -->
        <template #tab-panel-a>
            <div class="text-2xl font-bold mb-5 text-center uppercase">
                Mobile Tab Panel
            </div>
            <div class="columns-1 sm:columns-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa
                itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis
                dolorum autem sapiente similique non, architecto porro maxime blanditiis
                obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione
                ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id
                adipisci pariatur! Sapiente, dolore?
            </div>
        </template>

        <!-- ================================================================ -->
        <!-- TAB-B: HEAD & CONTENT PANEL  -->
        <!-- ================================================================ -->

        <!-- TAB-B: HEAD PANEL  -->
        <template #tab-head-b>
            <span class="uppercase">Tv</span>
        </template>

        <!-- TAB-B: CONTENT PANEL  -->
        <template #tab-panel-b>
            <div class="text-2xl font-bold mb-5 text-center uppercase">
                Tv Tab Panel
            </div>
            <div class="columns-1 sm:columns-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa
                itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis
                dolorum autem sapiente similique non, architecto porro maxime blanditiis
                obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione
                ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id
                adipisci pariatur! Sapiente, dolore?
            </div>
        </template>

        <!-- ================================================================ -->
        <!-- TAB-C: HEAD & CONTENT PANEL  -->
        <!-- ================================================================ -->

        <!-- TAB-C: HEAD PANEL  -->
        <template #tab-head-c>
            <span class="uppercase">Appliances</span>
        </template>

        <!-- TAB-C: CONTENT PANEL  -->
        <template #tab-panel-c>
            <div class="text-2xl font-bold mb-5 text-center uppercase">
                Appliances Tab Panel
            </div>
            <div class="columns-1 sm:columns-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa
                itaque quam rerum recusandae eum adipisci inventore deserunt, reiciendis
                dolorum autem sapiente similique non, architecto porro maxime blanditiis
                obcaecati vero aperiam nesciunt. Eius provident delectus ea est ratione
                ducimus architecto eligendi. Eius, deleniti molestias? Repudiandae id
                adipisci pariatur! Sapiente, dolore?
            </div>
        </template>
    </BraveTabs>
</template>
  
<script>
import { BraveTabs } from 'bravevue';
export default {
    components: {
        BraveTabs,
    },
};
</script>
  