<template>
	<div>
		<a class="menu-item" v-if="href"   v-bind:href="href"><slot></slot></a>
		<div class="menu-item" v-if="!href" @click="onClick"><slot></slot></div>
	</div>
</template>
<script>
	export default {
		name : 'BraveMenuItem', 
		props : {
			href : String
		},
		methods : 
		{
			onClick()
			{
				//alert("hello");
				this.$emit('clickFun');
			}
		}
	}
</script>
<style scoped="">
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
	}
	.menu-item:hover{
		background-color: #eee;
	}
</style>