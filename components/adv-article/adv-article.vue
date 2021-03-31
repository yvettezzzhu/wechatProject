<template>
	<view>
		<navigator :url="url">
			<view class="nav-title">
				<view class="name">阅读</view>
				<view class="title">
					{{ article }}
				</view>
			</view>
			<view class="notice">
				<view class="graph">
					<image class="image1" :src="img[0]" mode="scaleToFill"></image>
					<image class="image2" :src="img[1]" mode="scaleToFill"></image>
					<image class="image3" :src="img[2]" mode="scaleToFill"></image>
				</view>
				<view class="words">
					{{num}}人已读
				</view>
			</view>
		</navigator>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:"../../news_detail/news_detail?aid=36",
				article:"走路摔破头，喝汤烫到胳膊，被蚊子咬，没想到这些小意外会",
				num:5673,
				img:[
					"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/8954f3f3-3a5e-48ef-9d9b-1dd51d116fb4.jpeg",
					"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/2acace1a-ec37-4795-b187-cd1d20a58fe3.jpeg",
					"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/8a1e2d9d-d3e7-41c9-8f65-f4c652c90212.jpg"
				]
			};
		}
	}
</script>

<style lang="scss">
	.nav-title{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		// background-color: #007AFF;
		padding: 0 $bx-padding;
		.name{
			width: 40px;
			font-size: 12px;
			background-color: $bx-main-color3;
			color: $bx-back-color1;
			padding: 0 auto;
			text-align: center;
		}
		.title{
			margin-left: 10rpx;
			// background-color: #4CD964;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
			font-size: 16px;
		}
	}
	.notice{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin-top: 8px;
		margin-bottom: 20rpx;
		padding-left: $bx-padding;
		.graph{
			width: 60px;
			.image1{
				width: 20px;
				height: 20px;
				border-radius: 50%;
				position: relative;
			}
			.image2{
				width: 20px;
				height: 20px;
				border-radius: 50%;
				position: absolute;
				left: 30px;
			}
			.image3{
				width: 20px;
				height: 20px;
				border-radius: 50%;
				position: absolute;
				left: 46px;
			}
		}
		.words{
			color: $bx-main-color2;
			font-size: 12px;
		}
	}
</style>
