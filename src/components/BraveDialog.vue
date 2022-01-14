<template>
<div class="back-drop py-4"  v-show="dialogVisible"  @click.self.stop="hide">
	<div class="dialog container m-3 d-flex flex-column" :style="{'width':dialogOrignalWidth}">
		<div class="tab-header  pt-4">
			<div class="px-4 py-3 h5">
				<slot name="dialog-heading">Heading</slot>
			</div> 
		</div>
		<div class="tab-panel flex-grow-1">
			<slot name="dialog-body">hello</slot>
		</div>
		<div class="footer" >
			<slot v-bind:hideDialog="hide" name="footer"></slot>
		</div>
	</div>
</div>
</template>
<script>
export default {
name : 'BraveDialog',
props : 
{
	visibility : Boolean,
	dialogwidth : String
}, // Props ends here
data : function(){
	return {
		dialogVisible : false,
		dialogOrignalWidth : "auto"
	}
}, // Data ends here
created : function()
{ 
    if(this.visibility!=undefined)
    {
        this.dialogVisible = this.visibility
    }

	if(this.dialogwidth!=undefined)
    {
        this.dialogOrignalWidth = this.dialogwidth;
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
	background-color: #000000a4;
}
.dialog{
	margin: auto;
	/* flex-grow: 1; */
	min-height:400px;
	max-width:800px;
	background-color: white; 
	border:1px solid #ddd;
	border-radius: 7px;
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