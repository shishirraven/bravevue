<template>
    <h1>You can edit this text by clicking</h1>
    <div class="flex">
        <div @click="insertNode" class="bg-slate-100">Button 1</div>
        <div @click="insertNode"  class="bg-slate-100">Button 2</div>
    </div>


    <RenderTree1 v-model="nodeTree"/>
    <hr>
    <pre>
        {{nodeTree}}
    </pre>
  
</template>
<script>
import tree_seed_data from '@/tree_seed_data.vue';
import { v4 as uuidv4 } from 'uuid';
export default
{
    mixins:[tree_seed_data],

    data(){
        return {
            message : 'Hello World',
        }
    },
    methods:
    {
        insertNode()
        {
            alert("hello");
            this.nodeTree.push( {
                                         "id":uuidv4(),
                                        "component_name" : "text",
                                        "data" : {
                                            "selfData" : {
                                                "text" : "This is a text"
                                            }
                                        }
                                    });
        }
    }

    


}
</script>
