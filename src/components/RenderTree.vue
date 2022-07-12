<template>
 <div v-for="node in nodes">
    <TreeNode v-model="node.data" />
 </div>
<hr>
<h1>Hello</h1>
 <draggable 
  v-model="nodes" 
  group="people" 
  @start="drag=true" 
  @end="drag=false" 
  item-key="id">
  <template #item="{element}">
    <TreeNode v-model="element.data" />
   </template>
</draggable>
</template>
<script>
  import draggable from 'vuedraggable'
export default {
       components: {
            draggable,
        },
    name : "RenderTree1",
    props :['modelValue'],
    emits :['update:modelVaue'],
    data : function(){
        return {
            nodes : [],
            drag: false
        }
    },
    created(){
        if(this.modelValue!=undefined)
        {
            this.nodes = JSON.parse(JSON.stringify( this.modelValue));
        }
    }
}
</script>