<template>
	<view class="back">
		<!-- <view class="back-block" style="height: 20rpx;"></view> -->
		<view class="box">
			<!-- <view class="top-box" style="height: 20rpx;"></view> -->
			<view v-for="(item,index) in content1" :key = "index" class="flex-son">
				<view class="inner-box">
					<navigator :url="item.url">
						<image :src="item.img" mode=""></image>
						<view>
							{{item.text}}
						</view>
					</navigator>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				content1:[
					{img:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/4e0bc253-8f15-4105-8bec-5d35c10076f4.png",text:"健康",url:"../../news_detail/news_detail?aid=22"},
					{img:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/2e5ed25e-2307-4156-8cec-75b36cc978fe.png",text:"人寿",url:"../../news_detail/news_detail?aid=23"},
					{img:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/85557ac0-1f09-4078-abae-0eb2be24c501.png",text:"意外",url:"../../news_detail/news_detail?aid=24"},
					{img:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/1edbbc8c-5485-460d-866c-706fcff605c9.png",text:"年金",url:"../../news_detail/news_detail?aid=25"},
					
					{img:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/5133b505-07c9-4ab9-868f-186ab3bd81d4.png",text:"产品对比",url:"../../consultant/consultant"},
					{img:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/45ac8956-be98-4eac-8524-c4a692ec294a.png",text:"1v1顾问",url:"../../consultant/consultant"},
					{img:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/c2239980-a456-4cbb-8ea5-217cbbefa5f6.png",text:"风险测评",url:"../../consultant/consultant"},
					{img:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/109a9f79-5111-4ca5-9f98-4900a728ee44.png",text:"更多保险",url:"../../consultant/consultant"},
					
				]
				
			};
		}
	}
</script>

<style lang="scss">
	.back{
		background-color: $bx-back-color2;
		.box{
			margin-top: 20upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
			background-color: $bx-back-color1;
			border-top-left-radius: 40rpx;
			border-top-right-radius: 40rpx;
			padding: 30upx 40upx 0;
			
			// 写v-for和占比
			.flex-son{		
				width: 25%;
				margin-bottom: 20upx;
				display: flex;
				flex-direction: row;
				justify-content:center;
				display: flex;
				.inner-box{
					image{
						width: 100rpx;
						height: 100rpx;
						//此处给图片加了圆脚，看ui图片看需不需要，正方形的画可以加圆角，一般不加，一直ui画好
						border-radius: 50%;
					}
					view{
						color: $bx-main-color1;
						font-size: 12px;
						text-align: center;
					}
				}
			}
			
		}
	}
</style>
