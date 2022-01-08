<template>
	<div class="dialog p-2 " v-if="dialogVisible" :style="menuStyle">
		<div class="tab-header ">
			<div class="">
				<slot name="dialog-heading">Heading2</slot>
			</div> 
		</div>
		<div class="tab-panel flex-grow-1">
			<slot name="dialog-body">hello</slot>
		</div>
		<div class="footer" >
			<slot v-bind:hideDialog="hide" name="footer"></slot>
		</div>
	</div>
</template>
<script>
export default {
name : 'BraveDialogSmall',
props : 
{
	visiblity : Boolean
}, // Props ends here
data : function(){
	return {
		activeTab : {},
		dialogVisible : false,
		offset :25,
		menuStyle : {
			left:0,
			top:0
		}
	}
}, // Data ends here
created : function()
{ 
    if(this.visiblity!=undefined)
    {
        this.dialogVisiblity = this.visiblity
    }
}, 
methods : 
{
		show(){
			this.dialogVisible=true;
			document.body.style.overflow = 'hidden';
			this.$forceUpdate();
		}, 
		hide(){
			this.dialogVisible=false;
			document.body.style.overflow = 'auto';
		},
		setPosition(event)
        {
            //console.log(event);
            //console.log(event.type);
			if(event.type =='mouseup')
			{
				this.menuStyle.top  = (event.clientY+this.offset)+"px";
				this.menuStyle.left = (event.clientX+this.offset)+"px";
			}
			if(event.type =='touchend')
			{	
				this.menuStyle.top  = (event.changedTouches[0].clientY+this.offset)+"px";
				this.menuStyle.left = (event.changedTouches[0].clientX+this.offset)+"px";
			}
        }
} // Method ends here
}
</script>
<style scoped>
.back-drop{
	position: fixed; 
	display: flex; 
	justify-content: center; 
	align-items: flex-start;
	top:0px;
	bottom:0px;
	left:0px;
	right:0px;
	overflow: auto; 
	z-index:10000;
	background-color: rgba(12,20,28,.74902);
}
.dialog{
    position:fixed; 
	width:150px;
	background-color: white; 
	border:1px solid #ddd;
	border-radius: 2px;
    -webkit-box-shadow: 0 2px 3px rgba(0,0,0,.35);
    box-shadow: 0 2px 3px rgba(0,0,0,.35);
}
.tab{
	cursor: pointer;
}
.tab-header{
  border-bottom:3px solid #CFD8DC;
}

.tab-active{
  margin-bottom:-2px;
  border-bottom:3px solid #42A5F5;
  font-weight:bold;
}
</style>