<template>
  
<BraveSyntaxHighlighter
                copyText=" 📋 Copy Code"
                :language="langauge"
                prisimClassName="dark:!bg-slate-900 bg-slate-50 rounded-lg  "
                class="!bg-slate-900 !rounded-lg"
                ref="codebox"
              >
                <template #header="{ copyToClipboard, copyText }">
                  <div
                    class="flex text-sm rounded-t-lg border-b border-slate-600"
                  >
                    <div class="flex-1">
                      <div
                        class="dark:bg-slate-700 inline-block text-white rounded-t-lg py-2 px-5 font-light"
                      >
                        <slot name="title"></slot>
                      </div>
                    </div>
                    <div
                      @click="copyToClipboard()"
                      class="mx-2 py-2 px-3 text-white cursor-pointer hover:bg-slate-900 inline-block"
                    >
                      {{ copyText }}
                    </div>
                  </div>
                </template>

                <template v-if="$slots.code() && $slots.code()[0] && $slots.code()[0].children" #default>{{$slots.code()[0].children}}</template>
              </BraveSyntaxHighlighter>
</template>
<script>
import {  BraveSyntaxHighlighter } from "bravevue";
export default {
  components: { BraveSyntaxHighlighter},
  props: {
    
    langauge: {
      type: String,
      default: "plaintext"
    }
  },
};
</script>