<template>
  <transition name="fade">
<div class="tip-bottom tip border shadow rounded bg-dark text-white p-2 "  :style="{'width':dialogOrignalWidth}" v-show="dialogVisible" >
    <div class="">
        <div ><slot name="dialog-body">Sample Content</slot></div>
        
    </div>
     


</div>
  </transition>

<!-- 
<div class="back-drop py-4"  v-show="dialogVisible"  @click.self.stop="hide">
	<div class="dialog container m-3 d-flex flex-column" :style="{'width':dialogOrignalWidth}">
		<div class="tab-header  pt-4">
			<div class="px-4 py-3 h5">
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
</div> -->
</template>
<script>
export default {
name : 'BraveTip',
props : 
{
	visibility : Boolean,
	dialogwidth : String
}, // Props ends here
data : function(){
	return {
		activeTab : {},
		dialogVisible : true,
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
.tip{
    min-width: 300px;
}
.tip-bottom{
    position:fixed;
    top:10px; 
    right:10px; 
    z-index:2001;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>