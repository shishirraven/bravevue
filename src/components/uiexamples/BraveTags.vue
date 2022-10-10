<template>
    <BraveTags placeholder="Shishir" v-model="tags" class="flex flex-wrap gap-2"
        class-delete-icon="h-5 rounded hover:bg-red-600 w-5 cursor-pointer" :UseTwoBackspaceDelete="true"
        before-delete-tag-class="pl-4 pr-2  py-1 rounded bg-red-100 dark:bg-red-900 flex items-center gap-2"
        tag-class="pl-4 pr-2  py-1 rounded bg-slate-100 dark:bg-slate-900 flex items-center gap-2"
        input-class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</template>
<script>
import { BraveTags } from "bravevue"
export default {
    components: {
        BraveTags
    },

    data() {
        return {
            tags: ["bravevue", "braveTags", "Vue3", "Vite"]
        }
    },

}
</script>     