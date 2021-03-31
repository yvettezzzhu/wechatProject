<template>
	<view>
		<view class="box3">
			<view class="follow2" id="slide">
				<swiper :autoplay="true" :interval="3000" :duration="1000" vertical="true" style="background-color: #FFFFFF;">
					<block v-for="(item,index) in slide" :key="index">
						<swiper-item>
							<view class="swiper-item" style="padding: 0 20rpx;">
								<navigator :url="item.url">
									<view class="first-line" style="display: flex;justify-content: flex-start;">
										<image :src="item.img" mode="scaleToFill" style="height: 20px;width: 20px;border-radius: 50%; margin-right: 20rpx;"></image>
										<view class="text" style="font-size: 14px;">
											{{item.title}}
										</view>
									</view>
									<view class="second-line" style="font-size: 12px;color: #555555;margin-top: 3px;">
										{{item.content}}
									</view>
								</navigator>
							</view>
						</swiper-item>
					</block>
					
					
				</swiper>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				slide:[{
					img:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/9056386d-3ec3-41f8-a96b-8948b58894eb.jpeg",
					title:"成人保险购买最全攻略",
					content:"月薪五六千，还有资格买保险吗？",
					url:"../../news_detail/news_detail?aid=46"
				},{
					img:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/3f668dae-713e-43de-a611-9c86bab7a4cf.jpeg",
					title:"女性如何买保险？",
					content:"一手抓住家庭，一手拿住事业。",
					url:"../../news_detail/news_detail?aid=47"
				},{
					img:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/627a43f4-9220-42ab-a469-da004c6d9950.jpeg",
					title:"保险小白必看！",
					content:"史上超全保险知识问答（收藏版）",
					url:"../../news_detail/news_detail?aid=48"
				}
				]
			}
		},
		
	}
</script>

<style lang="scss">
	.box3{
		margin: 16px $bx-padding;
		// height: 50px;
		// background-color: #007AFF;
		.follow2{
			margin: 0 8rpx;
			// background-color: #2C405A;
			border: 1px solid #eff2f5;
			box-shadow: 2px 2px 2px #eff2f5,-2px -2px 2px #eff2f5;
			// display: flex;
			// justify-content: space-between;
			// align-items: center;
			padding: 10px 10rpx;
			swiper{
				background-color: #FFFFFF;
				height:40px ;
			}
		}
		
	}
	
</style>
