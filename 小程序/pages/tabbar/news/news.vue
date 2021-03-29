<template>
	<view>
		<view class="top">
			<navigator url="../../news_detail/news_detail?aid=49">
				<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/3bf822b0-be94-468d-a83d-4dca621ed488.jpeg" mode=""></image>
				<view class="text">
					<view class="text1">
						有了医保为什么还要补充医保？
					</view>
					<view class="text2">
						医保的优势
					</view>
				</view>
			</navigator>
			
		</view>
		<hot-news></hot-news>
		<guess-news></guess-news>
		<view class="blank" style="height: 10px;">
			
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				articleList:[],
			}
		},
		methods: {
			
		},
		onLoad() {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#a49cef',
			})
		}
		
	}
</script>

<style lang="scss">
	.top{
		
		image{
			height: 70px;
			width: 100%;
		}
		.text{
			position: absolute;
			left: $bx-padding;
			top:8px;
			color: #FFFFFF;
			.text1{
				font-size: 12px;
				color: $bx-back-color2;
				margin-bottom: 4px;
			}
		}
	}
	
</style>
