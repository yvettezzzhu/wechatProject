<template>
	<view>
		<view class="nav">
			<view class="left">
				<view class="start">|</view>
				<view class="content">孝顺父母</view>
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
					"id":4,
					"type":"门诊及住院医疗保险",
					"typeDesc":"扩充保障更全面，患病住院不用愁",
					"src":"../../product_detail/product_detail?id=4",
					"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/56dd2af8-d9b6-4208-a827-819f9622f54f.jpeg",
					"title":"神农6年期癌症医疗",
					"desc":"300万保额，6年保证续保",
					"price":"¥189",
					"detail":"/年|三高人群可投保"
						},{
					"id":14,
					"type":"意外伤害保险",
					"typeDesc":"意外无处不在，保障随时都在",
					"src":"../../product_detail/product_detail?id=0",
					"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/8797f98d-323d-4e4f-ad2a-1f358cd39966.jpeg",
					"title":"家中宝老人意外险",
					"desc":"20万保额，意外骨折保障",
					"price":"¥200",
					"detail":"/年50岁男|无免赔额"
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
