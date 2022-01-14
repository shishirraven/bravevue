<template>
<draggable v-model="tags" group="tags" @start="drag=true" @end="drag=false" 
ghost-class="sortable-ghost"
chosen-class="sortable-chosen" >
<transition-group name="flip-list"  >
<div  v-for="(tag,index) in tags" :key="tag[tagKey]" class="d-inline-block">
	<div class="tag d-flex align-items-center bg-grey mr-2 ">
	<div class="p-1  d-flex align-content-center "><span class="material-icons">drag_indicator</span></div>
	<div class="px-2">{{tag[tagKey]}}</div>
	<div class="  border-left  d-flex align-content-center px-1 cursor-hand" @click="deleteTag(index)"><span class="material-icons">close</span></div>
</div>
</div>

</transition-group>
</draggable>
</template>
<script>
	import draggable from 'vuedraggable'
	export default
	{
		data : function(){
			return {
				"tags" : []
			}
		},
		watch :
		{
			tags : {
				deep : true, 
				handler(){
					this.$emit('input',this.tags);
				}
			}
		},
		components: {
						draggable
					},
		name : "BraveTags",
		props :
			{
				"value" : Array, 
				"tagKey" : String
			},
		created : function(){
			this.tags = this.value; 

		},
		methods : {
			deleteTag (index){
				this.$delete(this.tags,index);
			}

		}
	}
</script>
<style scoped>
.bg-grey{
  background-color:#eee;
}
.flip-list-move {
  transition: transform 1s;
}
.sortable-chosen.sortable-ghost {
  opacity: .5;
}
.cursor-hand{
	cursor: pointer;
}
</style>