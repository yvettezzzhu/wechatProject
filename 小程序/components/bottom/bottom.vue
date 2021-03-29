<template>
	<view>
		<view class="footer">
			<view class="footertitle">
				<image src="../../static/product-active.png" mode="scaleToFill"></image>
				<view class="title">
					知保 · 第三方保险咨询平台
				</view>
			</view>
			<view class="main">
				<view class="box">
					<image src="../../static/index-active.png" mode=""></image>
					<view class="title1">
						权威精选
					</view>
					<view class="title2">
						平均62款产品选1款
					</view>
				</view>
				<view class="box">
					<image src="../../static/product-active.png" mode=""></image>
					<view class="title1">
						价格实惠
					</view>
					<view class="title2">
						保费最低1元起
					</view>
				</view>
				<view class="box">
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/54c620aa-131c-42c2-b649-978c3449e652.png" mode=""></image>
					<view class="title1">
						理赔省心
					</view>
					<view class="title2">
						顾问1对1全程协助
					</view>
				</view>
			</view>
			<navigator url="../../consultant/consultant">
				<view class="server">
					<image src="../../static/play.png" mode=""></image>
					<view class="text">
						服务中心
					</view>
				</view>
			</navigator>
			
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
	.footer{
		background-color: $bx-back-color1;
		.footertitle{
			display: flex;
			justify-content: center;
			padding-top: 20px;
			image{
				width: 20px;
				height: 20px;
				margin-right: 10px;
			}
			.title{
				
			}
		}
		.main{
			display: flex;
			justify-content: space-between;
			padding-left: $bx-padding;
			padding-right: $bx-padding;
			padding-top: 20px;
			.box{
				// display: flex;
				// justify-content: center;
				// background-color: #007AFF;
				text-align: center;
				image{
					width: 50%;
					height: 50%;
				}
				.title1{
					font-size: 14px;
					margin-top: 4px;
					// text-align: center;
				}
				.title2{
					color: $bx-main-color2;
					font-size: 24rpx;
					// text-align: center;
				}
			}
		}
		.server{
			display: flex;
			justify-content: center;
			margin: 30px auto;
			width: 60%;
			border: 1px solid $bx-main-color3;
			border-radius: 10px;
			text-align: center;
			padding-top: 5px;
			padding-bottom: 5px;
			image{
				width: 20px;
				height: 20px;
				background-color: $bx-main-color3;
				margin-right: 10px;
			}
			.text{
				font-size: 14px;
				color: $bx-main-color3;
			}
		}
	}
</style>
