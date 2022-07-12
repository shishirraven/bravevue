<template>
    <div class="flex border m-1 bg-slate-100">
        <i class="bi fs-4 bi-house me-2"></i> 
        <div class="ml-2">{{node.selfData.text}} </div>
        
    </div>
    <div class="ml-5">
        <RenderTree1 v-model="node.childNodes" ></RenderTree1>
    </div>
</template>
<script>

export default {
    name : "TreeNode",
    props :['modelValue'],
    emits :['update:modelVaue'],
    data : function(){
        return {
            node: {}
        }
    },
    created(){
        if(this.modelValue!=undefined)
        {
            this.node = JSON.parse(JSON.stringify( this.modelValue));
        }
    }
}
</script>