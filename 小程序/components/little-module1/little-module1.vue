<template>
	<view>
		<view class="nav">
			<view class="left">
				<view class="start">|</view>
				<view class="content">精选推荐</view>
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
					"id":1,
					"type":"门诊及住院医疗保险",
					"typeDesc":"扩充保障更全面，患病住院不用愁",
					"src":"../../product_detail/product_detail?id=1",
					"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/10362631-8161-4dea-9865-ab0cdc12e8ad.png",
					"title":"超越保2020",
					"desc":"200万保额，6年后续保也无需审核",
					"price":"¥232",
					"detail":"/年|特需版价格实惠，6年保证续保"
				},{
					"id":6,
					"type":"重大疾病保险",
					"typeDesc":"罹患重病有赔付，安心养病有支撑",
					"src":"../../product_detail/product_detail?id=6",
					"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/9f6a5e22-124b-4aa5-82d4-825dd6405621.png",
					"title":"康惠保旗舰版2.0",
					"desc":"100种重疾，60岁前重疾多赔60%",
					"price":"¥6575",
					"detail":"/年|可选癌症二次赔"
				},{
					"id":15,
					"type":"出行保险",
					"typeDesc":"出游安全要第一，带上保险开心浪",
					"src":"../../product_detail/product_detail?id=15",
					"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/34a7966c-1ac1-42da-ba5b-b103fd0f27c2.png",
					"title":"平安吉祥人生",
					"desc":"20万保额，意外住院和门急诊",
					"price":"¥234",
					"detail":"/年|住院护理津贴"
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
