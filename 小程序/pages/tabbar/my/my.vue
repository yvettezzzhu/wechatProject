<template>
	<view>
		<my-top></my-top>
		<view class="blank1"></view>
		<my-insurance></my-insurance>
		<slide-column></slide-column>
		<view style="height: 8px;margin-top: 16px;background-color: #eff2f5;"></view>
		<my-server></my-server>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			
		},
		methods:{
			
		},
	}
</script>

<style lang="scss">
	.blank1{
		background-color: $bx-back-color2;
		margin-top: 16px;
		height: 8px;
	}
	
</style>
