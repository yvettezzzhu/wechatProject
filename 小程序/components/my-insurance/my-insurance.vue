<template>
	<view>
		<view class="nav">
			<view class="left">
				<view class="start">|</view>
				<view class="content">我的家庭保障</view>
			</view>
			<view class="right">
				<navigator url="../../news_detail/news_detail?id=8">
					<view class="more">查看</view>
				</navigator>
			</view>
		</view>
		<view class="header">
			<view class="box2">
				<text class="text1">配置</text>
				 <text class="text2">优先级</text>
			</view>
			<view class="box1">
				<view class="num">
					1
				</view>
				<view class="content">
					医疗保障
				</view>
			</view>
			<view class="box1">
				<view class="num">
					2
				</view>
				<view class="content">
					重疾保障
				</view>
			</view>
			<view class="box1">
				<view class="num">
					3
				</view>
				<view class="content">
					意外保障
				</view>
			</view>
			<view class="box1">
				<view class="num">
					4
				</view>
				<view class="content">
					寿险保障
				</view>
			</view>
		</view>
		<view class="desc-content">
			<view class="left1">
				本人
			</view>
			<view class="center">
				<view class="a">
					暂无保障
				</view>
				<navigator class="b" url="../../news_detail/news_detail?aid=10">
					去看看
					<text>保障配置攻略</text>
				</navigator>
			</view>
			<view class="right1">
				>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.desc-content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 8px;
		margin-left: $bx-padding;
		margin-right: 46rpx;
		// padding: 0 $bx-padding;
		background-color: $bx-back-color2;
		color: $bx-main-color2;
		height: 50px;
		font-size: 14px;
		.left1{
			width: 122rpx;
			height: 50px;
			border-right: 1px solid #FFFFFF;
			// background-color: #007AFF;
			line-height: 50px;
			text-align: center;
		}
		.center{
			padding: $bx-padding 0;
			.a{
				
			}
			navigator{
				text{
					color: $bx-main-color3;
				}
			}
		}
		.right1{
			color: #afafaf;
		}
	}
	.header{
		margin-top: 50px;
		padding: 0 $bx-padding;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
		height: 50px;
		background-color: #eff2f5;
		.box2{
			background-image: linear-gradient(to right, #c1c3f0, #e1e2f1);
			color: $bx-main-color3;
			height: 50px;
			width: 20%;
			padding: 8px 16rpx;
			margin-right: 16rpx;
			// text-align: center;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-size: 26rpx;
			.text1{
				display: block;
				width: 100%;
			}
			.text2{
				display: block;
				width: 100%;
			}
		}
		.box1{
			display: flex;
			justify-content: center;
			align-items: center;
			background-image: linear-gradient(to right, #c1c3f0, #e1e2f1);
			color: $bx-main-color3;
			height: 50px;
			width: 20%;
			padding: 8px 16rpx;
			margin-right: 16rpx;
			text-align: center;
			font-size: 26rpx;
			.num{
				color: #FFFFFF;
				margin-right: 16rpx;
			}
		}
	}
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
		.right{
			width: 30%;
			margin-top: 60rpx;
			padding-right: $bx-padding;
			display:flex;
			flex-direction: row;
			justify-content: flex-end;
			.more{
				color: $bx-main-color2;
				font-size: 12px;
			}
			
		}
	}
	
</style>
