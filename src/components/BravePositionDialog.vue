<template>
	<div class="dialog p-2 "  v-show="dialogVisible"  :style="menuStyle">
		<div class="tab-header ">
			<div class="">
				<slot name="header"></slot>
			</div> 
		</div>
		<div class="tab-panel flex-grow-1">
			<slot name="body"></slot>
		</div>
		<div class="footer" >
			<slot v-bind:hideDialog="hide" name="footer"></slot>
		</div>
	</div>
</template>
<script>
export default {
name : 'BavePositionDialog',
props : 
{
	visibility : Boolean,
	offset : Number
}, // Props ends here
data : function(){
	return {
		activeTab : {},
		dialogVisible : false,
		dialogOffset :10,
		menuStyle : {
			left:0,
			top:0
		}
	}
}, // Data ends here
created : function()
{ 
   if(this.visibility!=undefined)
    {
        this.dialogVisible = this.visibility
    }
	if(this.offset!=undefined)
    {
        this.dialogOffset = this.offset
    }
}, 
methods : 
{
		show(event){
			this.setPosition(event);
			this.dialogVisible=true;
		}, 
		hide(){
			this.dialogVisible=false;
		},
		setPosition(event)
        {
			if(event.type =='mouseup' || event.type =='click')
			{
				this.menuStyle.top  = (event.clientY+this.dialogOffset)+"px";
				this.menuStyle.left = (event.clientX+this.dialogOffset)+"px";
			}
			if(event.type =='touchend')
			{	
				this.menuStyle.top  = (event.changedTouches[0].clientY+this.dialogOffset)+"px";
				this.menuStyle.left = (event.changedTouches[0].clientX+this.dialogOffset)+"px";
			}
        }
} // Method ends here
}
</script>
<style scoped>

.dialog{
	z-index: 1;
    position:fixed; 

}
</style>