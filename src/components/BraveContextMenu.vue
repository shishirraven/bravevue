<template>
<div class="back-drop py-4" v-show="visiblity" oncontextmenu="return false;"  @click.self.stop="hide">
		<div class="dropdown-items" ref="dropItem" :style="menuStyle">
			<slot></slot>
		</div>
</div>
</template>
<script>
export default {
name : 'BraveContextMenu',
computed : {
},
data : function(){
	return {
        visiblity : false, 
        menuStyle : {
                    left:0,
                    top:0
                }
	}
}, // Data ends here
created : function()
{
	
}, 
methods : 
{
        show()
        {
			this.visiblity = true; 
			var self = this;
			setTimeout(function(){ self.adjustToWindow(); }, 100);
        },
		toggle()
		{
			this.visiblity = !this.isVisible; 
		}, 
        hide()
        {
			this.visiblity=false;
        },
        setPosition(event)
        {
		//	console.log(event);


			if(event.type =='mouseup')
			{
				this.menuStyle.top  = event.clientY+"px";
				this.menuStyle.left = event.clientX+"px";
				this.menuStyle.right = "auto";
				this.menuStyle.bottom = "auto";
			}
			if(event.type =='touchend')
			{	
				this.menuStyle.top  = event.changedTouches[0].clientY+"px";
				this.menuStyle.left = event.changedTouches[0].clientX+"px";
				this.menuStyle.right = "auto";
				this.menuStyle.bottom = "auto";

			
			}



			
            // this.menuStyle.top  = event.clientY+"px";
			// this.menuStyle.left = event.clientX+"px";
			// this.menuStyle.right = "auto";
			// this.menuStyle.bottom = "auto";
        }, 

		adjustToWindow()
		{
				var clientRects = this.$refs.dropItem.getBoundingClientRect();
				if((clientRects.right)>window.innerWidth)
                {
                  this.menuStyle.left		= "auto"; 
                  this.menuStyle.right 	= "0px"; 
				}
				
				
				if((clientRects.bottom)>window.innerHeight)
				{
					this.menuStyle.top	= "auto"; 
					this.menuStyle.bottom = "10px";
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
	z-index:100;
	background-color: rgba(250, 250, 250, 0.527);
}
.dropdown-items{
	position: fixed;
	border: 1px solid #dee2e6!important;
	background-color: white;
	min-width:150px;	
	z-index:1;
	box-shadow: #ddd 2px 2px;
}
a.menu-item {
		text-decoration: none;
		color:black;
}
.menu-item{
    padding:.5rem 1rem;
    background-color: white; 
    display: block;
    display: flex;
    align-content: center;
    cursor: pointer;
	border-bottom: 1px solid rgb(233, 233, 233);
}
.menu-item:hover{
    background-color: #eee;
}
</style>