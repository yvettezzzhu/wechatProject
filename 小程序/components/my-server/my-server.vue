<template>
	<view>
		<view class="nav">
			<view class="left">
				<view class="start">|</view>
				<view class="content">工具与服务</view>
			</view>
		</view>
		<view class="content1">
			<view class="box">
				<navigator url="../../consultant/consultant">
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/567ccf9c-d923-4cc2-908b-cf3b7c41bf72.png" mode=""></image>
					<view class="text">
						风险测评
					</view>
				</navigator>
			</view>
			<view @click="change" class="box">
				<!-- <navigator url="../../pages/consultant/consultant"> -->
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/54c620aa-131c-42c2-b649-978c3449e652.png" mode=""></image>
				<view class="text">
					保险顾问
				</view>
				<!-- </navigator> -->
			</view>
			<view class="box">
				<navigator url="">
					<image src="../../static/insurance.png" mode=""></image>
					<view class="text">
						我的保单
					</view>
				</navigator>
			</view>
			<view class="box">
				<navigator url="">
					<image src="../../static/collection.png" mode=""></image>
					<view class="text">
						我的收藏
					</view>
				</navigator>
			</view>
			<view class="box">
				<navigator url="">
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/e8b7cd42-6df9-444a-94b0-779090696513.png" mode=""></image>
					<view class="text">
						我的问答
					</view>
				</navigator>
			</view>
			<view class="box">
				<navigator url="../../consultant/consultant">
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/4b442014-ba69-4f63-922c-786774162bc6.png" mode=""></image>
					<view class="text">
						服务中心
					</view>
				</navigator>
			</view>
			<view class="box">
				<navigator url="">
					<image src="../../static/we.png" mode=""></image>
					<view class="text">
						关于我们
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			change:function(){
				uni.navigateTo({
					url:"../../consultant/consultant"
				})
				console.log("1232434")
			}
		}
	}
</script>

<style lang="scss">
	.nav{
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 30px;
		
		
		.left{
			width: 70%;
			margin-top: 60rpx;
			padding-left: $bx-padding;
			display:flex;
			flex-direction: row;
			justify-content: flex-start;
			.start{
				color: $bx-main-color3;
				font-weight: 700;
				margin-right: 10rpx;
			}
			.content{
				background-color: $bx-back-color1;
			}
		}
	}
	.content1{
		// display: flex;
		// justify-content: flex-start;
		// align-items: center;
		padding: $bx-padding;
		width: 100%;
		.box{
			display: inline-block;
			width: 20%;
			margin-top: 20px;
			margin-right: 30rpx;
			// background-color: #007AFF;
			text-align: center;
			image{
				width: 40px;
				height: 40px;
			}
			.text{
				font-size: 13px;
				
			}
		}
	}
</style>
