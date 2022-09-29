<template>

    <BraveDraggable :visible="config.visible" :position="config.position" :placement="config.placement"
        v-slot="{hide, onHandleMouseDown,onHandleTouchMove,onHandleTouchEnd}"
        @placement-change="config.placement = $event" @position-change="config.position = $event">

        <div class="bg-white pb-3 rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700 w-80">
            <!-- Body -->
            <!-- TITLE BAR -->
            <div class="flex  text-sm py-1 px-2 items-center font-medium text-center
                 text-gray-500 bg-gray-50 rounded-t-lg border-b border-gray-200
                  dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
                <div class="flex grow items-center" @mousedown="onHandleMouseDown" @touchstart.passive="onHandleMouseDown"
                    @touchmove.passive="onHandleTouchMove" @touchend.passive="onHandleTouchEnd">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrows-move cursor-move" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z" />
                    </svg>
                    <div class="grow cursor-move">
                        Props Editor
                    </div>
                </div>
                <div class="cursor-pointer p-1 hover:text-red-700 hover:scale-125" @click="hide()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x"
                        viewBox="0 0 16 16">
                        <path
                            d="M14.354 1.646a.5.5 0 0 1 0 .708L9.707 8l4.647 4.646a.5.5 0 0 1-.708.708L9 8.707l-4.646 4.647a.5.5 0 0 1-.708-.708L8.293 8 3.646 3.354a.5.5 0 0 1 .708-.708L9 7.293l4.646-4.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                </div>
            </div>

            <!-- CONTENT -->
            <div class="p-5 overflow-y-auto h-96 ">
                <!-- looping properties and displaying input based on type -->

                <div v-for="(prop, index) in cProps" :key="index">




                    <div v-if="prop.type == 'Boolean'" class="flex items-center mb-4">
                        <input :id="prop.name" type="checkbox" v-model="inputValue[prop.name]"
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label :for="prop.name"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{prop.name}}</label>
                    </div>

                    


                    <div  class="mb-2" v-if="prop.type == 'switch'">
                        <label :for="prop.name" class="inline-flex relative items-center  cursor-pointer">
                    <input  v-model="inputValue[prop.name]" type="checkbox" value=""  :id="prop.name"  class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{prop.name}}</span>
                    </label>    
                    </div>
                    <div  class="mb-2" v-if="prop.type == 'String'">
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{prop.name}}</label>
                        <input v-model="inputValue[prop.name]" type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div  class="mb-2" v-if="prop.type == 'textarea'">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        {{prop.name}}</label>
                    <textarea id="message" rows="4"
                        type="text" v-model="inputValue[prop.name]"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""></textarea>
                        </div>


                    <div  class="mb-2" v-if="prop.type == 'Number'">
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{prop.name}}</label>
                        <div class="flex gap-2">

                            <input v-model.number="inputValue[prop.name]" type="number" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <input v-if="prop.type == 'Number' && prop.min!=undefined && prop.max!=undefined"
                            :min="prop.min" :max="prop.max" type="range" v-model.number.lazy="inputValue[prop.name]" />
                        </div>

                    </div>


               

                      

                        <input v-if="prop.type == 'Array'" type="text" v-model="inputValue[prop.name]" />
                        <input v-if="prop.type == 'Object'" type="text" v-model="inputValue[prop.name]" />
                        <input v-if="prop.type == 'Function'" type="text" v-model="inputValue[prop.name]" />
                </div>
            </div>

        </div>
    </BraveDraggable>
</template>
<script>
import { BraveDraggable } from 'bravevue';
export default {
    components: {
        BraveDraggable
    },
    created() {
        // map all keys of properties to array
        let mergedProps = Object.assign({},this.properties, this.additionalProps);
        this.cProps = Object.keys(mergedProps).map(key => {
            let prop = {
                name: key,
                type: mergedProps[key].type.name,
                default: mergedProps[key].default
            }
            if (mergedProps[key].min != undefined && mergedProps[key].max != undefined) {
                prop.min = mergedProps[key].min;
                prop.max = mergedProps[key].max;
            }
            if(mergedProps[key].input != undefined){
                prop.type = mergedProps[key].input;
            }
            // merging object with additionalProps
            return prop;
        })
    },
    props: {
        additionalProps: {
            type: Object,
            default: {}
        },
        properties: {
            type: Object,
            default: ""
        },
        // v-model for the value
        modelValue: {
            type: Object,
            default: ""
        }
    },
    data() {
        return {
            // the value of the input
            inputValue: this.modelValue,
            cProps: [],
            config: {
                visible: true,
                position: {
                    top: '10px',
                    right: '10px'
                },
                placement: 'top-right'
            }
        }
    },
    watch: {
        // watch for changes in the value
        modelValue(val) {
            this.inputValue = val;
        },
        inputValue(val) {
            this.$emit("input", val)
        }
    },
    methods: {


    }

}

</script>