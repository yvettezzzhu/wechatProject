<template>
	<view>
		<view class="nav">
			<view class="left">
				<view class="start">|</view>
				<view class="content">关爱子女</view>
			</view>
			<view class="right">
				<navigator url="../../product/product?id=8">
					<view class="more" @tap="test()">更多</view>
				</navigator>
			</view>
		</view>
		
		<view class="wrap" >
			<view class="box" v-for="(item,index) in content" :key = "index">
				<navigator :url="item.src" >
					<view class="photo">
						<image :src="item.img" mode="scaleToFill"></image>
					</view>
					<view class="desc1">
						<view class="title">
							{{item.title}}
						</view>
						<view class="desc">
							{{item.desc}}
						</view>
						<view class="price-detail">
							<view class="price">
								{{item.price}}
							</view>
							<view class="detail">
								{{item.detail}}
							</view>
						</view>
					</view>
					<view class="right1">></view>
				</navigator>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:[{
					"id":3,
					"type":"门诊及住院医疗保险",
					"typeDesc":"扩充保障更全面，患病住院不用愁",
					"src":"../../product_detail/product_detail?id=3",
					"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/dbd447f2-7a18-4ebd-841a-09001229a2a3.png",
					"title":"少儿门诊暖宝保",
					"desc":"1万保额，无免赔额",
					"price":"¥588",
					"detail":"/年0岁男|小额医疗报销"
				},{
					"id":7,
					"type":"重大疾病保险",
					"typeDesc":"罹患重病有赔付，安心养病有支撑",
					"src":"../../product_detail/product_detail?id=7",
					"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/9f6a5e22-124b-4aa5-82d4-825dd6405621.png",
					"title":"妈咪宝贝",
					"desc":"110种重疾，少儿特疾多倍赔",
					"price":"¥2010",
					"detail":"/年0岁男缴30年|可选重疾多次赔"
				},{
					"id":15,
					"type":"教育金",
					"typeDesc":"孩子的未来，教育基金来保障",
					"src":"../../product_detail/product_detail?id=0",
					"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/dbcce80a-ca93-4266-80c2-8ae4bdb61f36.png",
					"title":"天天向上",
					"price":"",
					"desc":"可选大学金或深造金领取",
					"detail":"30岁领取100%保额，4.025%定价利率"
				}]
			}
		},
		methods:{
			test(){
				uni.switchTab({
					url:"../product/product"
				})
			}
		},
		onLoad() {
			
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
	
	.wrap{
		padding-top: 40rpx;
		padding-left:$bx-padding;
		padding-right:$bx-padding;
		// background-color: #007AFF;
		.box{
			navigator{
				width: 100%;
				height: 160rpx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				// background-color: #2C405A;
				padding-bottom: 30upx;
				margin-bottom: 30rpx;
				border-bottom: 1px solid $bx-back-color2;
				.photo{
					width: 20%;
					display: flex;
					// background-color: #4CD964;
					image{
						width: 100%;
						height: 160rpx;
						border-radius: 20rpx;
					}
				}
				.desc1{
					width: 70%;
					margin-left: 20rpx;
					// background-color: #5428EE;
					.title{
						color: #555555;
						font-size: 34rpx;
						font-weight: 800;
						margin-bottom: 8rpx;
					}
					.desc{
						font-size: 28rpx;
						font-weight: 300;
						margin-bottom: 8upx;
					}
					.price-detail{
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						// background-color: #590d1d;
						.price{
							color: $bx-main-color3;
							font-size: 30rpx;
						}
						.detail{
							color: $bx-main-color2;
							
							font-size: 26rpx;
						}
					}
				}
				.right1{
					color: $bx-main-color2;
				}
			}
		}
		
	}
</style>

