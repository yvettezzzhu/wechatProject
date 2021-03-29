<template>
	<view class="main">
		<consultant-title></consultant-title>
		<consultant-content></consultant-content>
		<view class="blank3" style="height: 20px;">
		</view>
		<view class="back">
			<view class="box-1">
				立即定制
			</view>
			<image :src="src" @longtap="TanPreviewImage(src)" mode="scaleToFill"></image>
			<view class="box-2">
				微信号：Richtang99168
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
	.main{
		background-color:#eff2f5 ;
	}
	.back{
		padding: 8px $bx-padding;
		text-align: center;
		.box-1{
			background-color: #9378f4;
			width: 100px;
			margin: 10px auto;
			font-size: 20px;
			color: #FFFFFF;
			padding: 6px;
			border-radius: 20px;
		}
		image{
			width: 300rpx;
			height: 300rpx;
		}
		.box-2{
			margin-top: 8px;
		}
	}
	
</style>
