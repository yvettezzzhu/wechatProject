<template>
	<view>
		<view class="first">
			<text>最近搜索</text>
			<image src="../../static/delete.png" mode="scaleToFill"></image>
		</view>
		<view class="container">
			<view class="content" v-for="(item,index) in history" :key="index">
				<view class="item">
					{{item}}
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				history:[
					"理赔实录","理赔实录","理赔实录"
				],
			};
		}
	}
</script>

<style lang="scss">
	.first{
		border-top: 1px solid $bx-back-color2;
		display: flex;
		justify-content: space-between;
		padding: 10px $bx-padding;
		margin-top: 10px;
		
		image{
			width: 20px;
			height: 20px;
			
		}
	}
	.container{
		padding:0 $bx-padding;
		.content{
			padding: 4px 8px;
			display:inline-block;
			margin-right: 8px;
			background-color: $bx-back-color2;
			font-size: 12px;
			color: $bx-main-color1;
			border-radius: 12px;
		}
	}
	
</style>
