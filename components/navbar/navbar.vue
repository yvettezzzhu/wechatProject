<template>
	<view class="navbar" @tap="change()">
		<view class="navbar-fixed">
			<view class="navbar-search">
				<view class="navbar-search-icon">
					<image src="../../static/search-grey.png" mode=""></image>
				</view>
				<view class="navbar-search-text">高性价比重疾险</view>
			</view>
		</view>
		<view style="height: 90rpx;"></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			change(){
				uni.switchTab({
					url:"/pages/tabbar/search/search"
				})
			}
		}
	}
</script>

<style lang="scss">
	.navbar{
		.navbar-fixed{
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 30rpx;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 90rpx;
			// background-color: $bx-base-color;
			box-sizing: border-box;
			.navbar-search{
				display: flex;
				align-items: center;
				padding: 0 20rpx;
				width: 100%;
				height: 60rpx;
				background-color: #FFFFFF;
				border-radius: 60rpx;
				border:2rpx solid #C0C0C0;
				.navbar-search-icon{
					width: 40rpx;
					height: 40rpx;
				}
					image{
						width: 40rpx;
						height: 40rpx;
						vertical-align: text-middle;
					}
				.navbar-search-text{
					margin-left: 10rpx;
					font-size: 12px;
					color: #999999;
				}
			}
		}
	}

</style>
