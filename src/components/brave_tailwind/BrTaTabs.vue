<template>
    <BraveTabs ref="bravetabref" 
        :tabs="tabs"
        class="text-black dark:text-white my-10"
        tabs-wrapper-class="flex items-center"
        tabs-content-class="border    p-4 dark:bg-slate-800"
        tab-button-class="px-4 py-2 cursor-pointer rounded-t-lg mr-px dark:bg-slate-900 bg-gray-50 hover:dark:bg-slate-800 hover:bg-gray-200"
        tab-button-active-class="px-4 py-2  shadow-inner-sm -mb-px border rounded-t-lg border-b-0 dark:bg-slate-800 bg-white "
        >
        <template #after-tab>
            <slot name="after-tab"></slot>
        </template>

        <template v-for="tab in tabs" :key="tab" v-slot:[dynamcSlotName(tab)]>
           <slot :name="dynamcSlotName(tab)"></slot>
        </template>
        <template v-for="tab in tabs" :key="tab" v-slot:[dynamcSlotName2(tab)]>
           <slot :name="dynamcSlotName2(tab)"></slot>
        </template>
    </BraveTabs>
</template>
<script>
import {BraveTabs} from "bravevue";
export default
{
    props: {
        tabs: {
            type: Array,
            default: () => ['code', 'example']
        }
    },
    components: {
        BraveTabs
    },
    methods:{
        dynamcSlotName(name){
            return 'tab-head-' + name;
        },
        dynamcSlotName2(name){
            return 'tab-panel-' + name;
        }
    }
}
</script>
