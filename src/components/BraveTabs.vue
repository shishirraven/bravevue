<template>
<div>
	
<div class="tab-header d-flex pt-4">
	<div class="px-3 py-2 tab" 
	v-for="tab in tabs" :key="tab" 
	v-bind:class="{'tab-active':activeTab==tab}"
	@click="switchTab(tab)"
	>
		<slot v-bind:name="'tab-head-'+tab">{{tab}} </slot>
	</div> 
</div>
<div>
	<slot v-bind:name="computedTabPanel"></slot>
</div>
</div>
</template>
<script>
export default {
name : 'BraveTabs',
computed : {

	computedTabPanel : function()
	{
		return "tab-panel-"+this.activeTab; 
	}
},
props : 
{
	initialTab : String, 
	tabs 		: Array
}, // Props ends here
data : function(){
	return {
		activeTab : {}
	}
}, // Data ends here
created : function()
{
	this.activeTab = this.initialTab;
}, 
methods : 
{
		switchTab(tab)
		{
			this.activeTab = tab; 
		}, 

} // Method ends here
}
</script>
<style scoped>
.tab{
	cursor: pointer;
}
.tab-header{
  border-bottom:2px solid #CFD8DC;
}

.tab-active{
  margin-bottom:-2px;
  border-bottom:2px solid #42A5F5;
  font-weight:bold;
}
</style>