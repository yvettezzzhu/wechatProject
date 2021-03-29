<template>
	<view>
		<view class="top1">
			<view class="title">
				<view class="wrap1">
					<view class="first">
						1对1咨询顾问
					</view>
					<view class="second">
						家庭保险规划
					</view>
				</view>
				
			</view>
			<image class="pic" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/e5648d4d-592b-407a-8fe1-d46257167575.jpg" mode="scaleToFill"></image>
		</view>
		
		<view class="box">
			<view class="one">
				<view class="little-box">
					<view class="first-line">
						手把手帮你
					</view>
					<view class="second-line">
						挑保险
					</view>
				</view>
				<view class="little-box">
					<view class="first-line">
						专家协助
					</view>
					<view class="second-line">
						帮你闭坑
					</view>
				</view>
				<view class="little-box">
					<view class="first-line">
						节省保费
					</view>
					<view class="second-line">
						30%-50%
					</view>
				</view>
			</view>
			<view class="two">
				<view class="t1">
					<view class="t11">
						保存下方图片识别二维码添加微信
					</view>
					<image :src="src" @longtap="TanPreviewImage(src)" mode="scaleToFill"></image>
				</view>
				<view class="t2">
					or
				</view>
				<view class="t3">
					直接添加微信号：Richtang99168
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/385dc0d6-4cfb-4482-951b-bd396d52804f.jpeg"
			};
		},
		methods:{
			TanPreviewImage(imageUrl){ 
				console.log(imageUrl) // http://192.168.100.251:8970/6_1597822634094.png
				var images = [];
				images.push(imageUrl);
				console.log(images)  // ["http://192.168.100.251:8970/6_1597822634094.png"]
				uni.previewImage({ // 预览图片  图片路径必须是一个数组 => ["http://192.168.100.251:8970/6_1597822634094.png"]
					current:0,
					urls:images,
					longPressActions: {  //长按保存图片到相册
						itemList: ['保存图片'],
						success: (data)=> {
							console.log(data);
							uni.saveImageToPhotosAlbum({ //保存图片到相册
								filePath: payUrl,
								success: function () {
									uni.showToast({icon:'success',title:'保存成功'})
								},
								fail: (err) => {
									uni.showToast({icon:'none',title:'保存失败，请重新尝试'})
								}
							});
						},
						fail: (err)=> {
							console.log(err.errMsg);
						}
					}
				})
			}
		}
	}
</script>
<style lang="scss">
	.top1{
		display: flex;
		justify-content: space-between;
		background-color: #FFFFFF;
		.pic{
			width: 300rpx;
			height: 80px;
		}
		.title{
			// background-color: #007AFF;
			height: 80px;
			padding: 14px 40rpx;
			display: flex;
			align-items: center;
			.first{
				font-size: 50rpx;
			}
			.second{
				font-size: 42rpx;
				color: #808080;
				font-weight: 400;
			}
		}
	}
	.box{
		background-color: #FFFFFF;
		margin:0 $bx-padding;
		border-radius: 6px;
		box-shadow: 2px 2px 4px $bx-back-color4, -2px -2px 4px $bx-back-color4;
		padding: 12px 24rpx;
		.one{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.little-box{
				background-image: linear-gradient(to right, #a3a6ff,#88c7ff);
				width: 30%;
				text-align: center;
				color: #EFF2F5;
				padding: 6px 0;
				border-radius: 6px;
				.first-line{
					margin-bottom: 4px;
					font-size: 28rpx;
				}
				.second-line{
					font-size: 36rpx;
				}
			}
		}
		.two{
			padding:12px 16rpx;
			text-align: center;
			.t11{
			}
			image{
				margin-top: 8px;
				width: 300rpx;
				height: 300rpx;
			}
			.t2{
				color: #5428EE;
			}
		}
	}
</style>
