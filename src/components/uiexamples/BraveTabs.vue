<template>
  <BraveTabs ref="bravetabref" class="text-black dark:text-white my-10" tabs-wrapper-class="flex items-center"
    tabs-content-class="border  p-10 dark:bg-slate-800"
    tab-button-class="px-4 py-2 mr-px cursor-pointer rounded-t-lg mr-0 dark:bg-slate-900 bg-gray-50 hover:dark:bg-slate-800 hover:bg-gray-200"
    tab-button-active-class="px-4 py-2 mr-px shadow-inner-sm -mb-px border rounded-t-lg border-b-0 dark:bg-slate-800 bg-white "
    v-bind:tabs="['mobile','appliances','computers','gaming']" initialTab="mobile">
    <template #before-tab>
      <div class="px-2"><img class="h-7 w-auto" src="@/assets/images/logo.svg" alt="BraveVue" /></div>
    </template>
    <template #after-tab>
      <div class="px-2 grow text-right">
        <div class="inline-block">Help</div>
      </div>
    </template>
    <!-- ================================================================ -->
    <!-- SETTINGS PANEL  -->
    <!-- ================================================================ -->
    <template #tab-head-mobile>Mobile</template>
    <template #tab-panel-mobile>
      <h1 class="text-3xl mb-5">Content for mobile Panel</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae
        maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
    </template>

    <!-- Appliance Panel -->

    <template #tab-head-appliances>Appliances</template>
    <template #tab-panel-appliances>
      <h1 class="text-3xl mb-5">Content for Appliances Panel</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae
        maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
    </template>

    <!-- Computer Panel -->

    <template #tab-head-computers>💻 Computers</template>
    <template #tab-panel-computers>
      <h1 class="text-3xl mb-5">Content for Computers Panel</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae
        maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
    </template>

    <!-- Gaming Panel -->

    <template #tab-head-gaming> Gaming</template>
    <template #tab-panel-gaming>
      <h1 class="text-3xl mb-5">Content for Gaming Panel</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sunt atque unde ex odit consequatur recusandae
        maxime ullam inventore, porro laudantium soluta deleniti itaque quibusdam et, quas eaque minima fuga.</p>
    </template>
  </BraveTabs>
</template>
<script>
import { BraveTabs } from "bravevue";
export default {
  components: { BraveTabs },
};
</script>
