<template>
  <BraveSelect
    class="relative inline-block"
    v-model="selectValue"
    :options="options"
    dropdown-class="shadow rounded border absolute z-10 dark:bg-slate-900 bg-white right-0 left-0"
    >
    <template v-slot:button="{ selectedValue }">
        <div
        role="button"
        class="dark:bg-slate-900   dark:hover:bg-slate-800  border dark:border-slate-500 border-slate-200  p-2 px-4
        rounded-lg shadow-sm dark:text-white bg-white   flex hover:shadow  dark:hover:border-slate-500 hover:border-slate-300"  
        >
            <div v-if="selectedValue != null">
                <strong>{{ selectedValue.name }} </strong>  is written in <strong>  {{ selectedValue.language }}</strong> 
            </div>
            <div v-else>Select a Language</div>
                <i class="ml-5 bi bi-chevron-down"></i>
            </div>
    </template>
    <template v-slot:menu="{ option, selectedValue }">
        <div
        role="button"
        :class="{
            'dark:bg-slate-800 bg-slate-200':
            JSON.stringify(selectedValue) == JSON.stringify(option),
        }"
        class="dark:hover:bg-slate-800 hover:bg-slate-200 
        dark:text-white
        cursor-pointer w-100 py-1 px-3 "
        >
        {{ option.name }}
        </div>
    </template>
</BraveSelect>
</template>
<script>
import { BraveSelect } from "bravevue";
export default {
  components: { BraveSelect },
    data(){
    return {
        selectValue : { name: 'Vue.js', language: 'JavaScript' },
        options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP', $isDisabled: true },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    }
  }
};
</script>
