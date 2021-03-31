<template>
	<view style="padding: 0 30rpx;">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#d5d8d8" indicator-active-color="#5428ee" style="width:100%;height:300rpx;">
			<block v-for="(item,index) in swiper" :key = "index">
				<swiper-item >
					<view class="swiper-item">
						<navigator :url="item.url">
							<image :src="item.src" mode="scaleToFill" class="imagecss" image style="width:100%;height:300rpx;border-radius:20rpx;">
						</navigator>
					</view>
				</swiper-item>
			</block>
			
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper:[{
					url:"../../product_detail/product_detail?id=7",
					src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/607fa2cf-1dc7-4bcd-b72b-3e4ed1439d89.png"
				},{
					url:"../../news_detail/news_detail?aid=21",
					src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/b51ad031-cb54-4e77-8b16-33138c328039.png"
				},{
					url:"../../consultant/consultant",
					src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/9146abc4-2549-4e59-90b0-b9ac9978661d.png"
				}
				]
			};
		}
	}
</script>

<style lang=scss"">
	
</style>
