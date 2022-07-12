<template>
 <!-- <div v-for="node in nodes">
    <TreeNode v-model="node.data" />
 </div> -->

 <!-- <h1>Hello</h1> -->
  <draggable 
  v-model="nodes" 
  group="people" 
  @start="drag=true" 
  @end="drag=false" 
  item-key="id">
  <template #item="{element}">
  <div class="flex">
      handle
      <div>

          <TreeNode v-model="element.data" />
      </div>

  </div>
   </template>
</draggable>
</template>
<script>
import draggable from 'vuedraggable'
import TreeNode from '@/components/TreeNode.vue';
export default {
    name : "RenderTree1",
    components: {draggable},
    props :['modelValue'],
    emits :['update:modelVaue'],
    data : function(){
        return {
            nodes : []
        }
    },
    created(){
        if(this.modelValue!=undefined)
        {
            this.nodes =  this.modelValue;
        }
    }
}
</script>