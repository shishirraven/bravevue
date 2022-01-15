<template>
	<div class="drop-button" >
		<div ref="button" class="drop-head" @click="toggleVisiblity()">
		
			<slot  name="button" :selectedValue="selectedValue">Menu</slot>
		
		</div>
		<div ref="menu"  :class="dropdownClass" class="dropdown-items" v-clickoutside="hideByOutside" v-if="isVisible">
			<div v-for="(option,index) in options" :key="index" @click="selectedValue=option,hide()">
				<slot name="menu" :option="option" :selectedValue="selectedValue"></slot>
			</div>
		</div>
	</div>
</template>

<script>
import clickoutside from "@/directives/clickoutside.js"
import {
  computePosition,
  flip,
  shift,
  offset,
  size,
} from '@floating-ui/dom';

export default 
{
name : 'BraveDropSelect',
props: {
    value : Object,
    options  : Array,
	dropdownClass :String
},
directives:{clickoutside},
computed : {
},
data : function(){
	return {
		selectedValue : this.value,
		isVisible : false, 
		skipToken : false,
	}
}, // Data ends here
created : function()
{
	
}, 
updated:function(){
if(this.isVisible)
				this.setPosition()	
},
watch:{
	value:function(newVal)
	{
		this.selectedValue = newVal;
	},
	selectedValue: function(newVal){
		this.$emit('input',newVal);
	}
},
methods : 
{
		toggleVisiblity()
		{
			this.isVisible = !this.isVisible; 
			this.skipHide = true;
			


		}, 
		hide(){
			this.isVisible=false;
		},
		hideByOutside(){
			if(!this.skipHide)
			{
				this.isVisible=false;
			}
			this.skipHide =false;
		},
		setPosition(){
			const button = this.$refs.button;
			const tooltip = this.$refs.menu;
			computePosition(button, tooltip, {
			placement: 'bottom-start',
			middleware: [offset(6), flip(), shift({padding: 5}),
			
			size({
			apply({width, height,reference}) {
				// Do things with the data, e.g.
				Object.assign(tooltip.style, {
					maxWidth: `${width}px`,
					maxHeight: `${height}px`,
					minWidth: `${reference.width}px`,
				});
      },
    }),
			],
			}).then(({x, y}) => {
			Object.assign(tooltip.style, {
				left: `${x}px`,
				top: `${y}px`,
			});
			});
		}

} // Method ends here
}
</script>
<style scoped>
.drop-button{
	position: relative;
	display: inline-block;
}
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
.drop-item-container{
	/* position: relative; */
}
.dropdown-items{
	overflow: auto;
	position: absolute;
	z-index: 1;

    user-select: none;
    transition: opacity 700ms ease 0s, color 700ms ease 0s, transform 200ms ease 0s;
    /* cursor: pointer;
    opacity: 1;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    bottom: 26px;
    right: 26px;
    width: 36px;
    height: 36px;
    border-radius: 100%;
    font-size: 20px;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
    z-index: 101; */
    transform: translateX(0px) translateZ(0px);

}
</style>