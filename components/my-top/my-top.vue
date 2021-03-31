<template>
	
	
	<view>
		<view class="pad">
			<view class="top" @tap="change1">
				<image :src="avatarUrl" mode=""></image>
				<view class="right">
					<view class="name">
						{{nickName}}
					</view>
				</view>
			</view>
			<view class="box">
				<view class="box1">
					<image src="../../static/index-active.png" mode=""></image>
					<view class="content">
						保单
					</view>
				</view>
				<view class="box1">
					<image src="../../static/index-active.png" mode=""></image>
					<view class="content">
						理赔
					</view>
				</view>
				<view class="box1">
					<image src="../../static/index-active.png" mode=""></image>
					<view class="content">
						卡券
					</view>
				</view>
			</view>
			<view class="follow">
				<view class="icon">
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/2456a8d4-b28f-4b71-bdee-9323a1741597.png" mode=""></image>
				</view>
				<view class="center">
					<view class="title">
						保障免费领
					</view>
					<view class="desc">
						重疾险意外都可保护，最高领取5万以上
					</view>
				</view>
				<navigator url="">
					去领取
				</navigator>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				APPID:"",
				APPSECRET:"",
				JSCODE:"",
				avatarUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/8e4c9839-504f-4be3-8b9a-41df89023292.jpeg",
				nickName:"",
				openid:""
			};
		},
		mounted() {
			var that = this;
			
			uniCloud.callFunction({
				name:"getappid",
				success(res){
					
					that.APPID = res.result[0];
					that.APPSECRET = res.result[1];
				},
				fail(err) {
					console.error(err)
				}
			});
			setTimeout(function(){
				uni.login({
					provider:"weixin",
					success:function(res){
						console.log(res.code);
						that.JSCODE = res.code;
						wx.request({
							url:'https://api.weixin.qq.com/sns/jscode2session?appid='+ that.APPID+'&secret='+ that.APPSECRET+'&js_code='+that.JSCODE+'&grant_type=authorization_code',
							success:function(res){
								that.openid = res.data.openid;
							}
						})
					}
				});
			},1000)
			
			setTimeout(function(){
				uniCloud.callFunction({
					name:"getuser",
					data:{
						openid: that.openid
					},
					success(res){
						console.log(res.result);
						if(res.result !== []){
							that.nickName = res.result[0].nickName;
							that.avatarUrl = res.result[0].avatarUrl;
						}
					},
					fail(err) {
						console.error(err)
					}
				})
			},2000)
		},
		methods:{
			change1(){
				uni.navigateTo({
					url:"../../login/login"
				})
			}
		}
	}
</script>

<style lang="scss">
	.follow{
		margin: 0 8rpx;
		// background-color: #2C405A;
		border: 1px solid #eff2f5;
		box-shadow: 2px 2px 2px #eff2f5;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 10rpx;
		.icon{
			image{
				width: 100rpx;
				height: 50px;
			}	
		}
		.center{
			// background-color: #007AFF;
			flex: 1;
			padding: 0 30upx;
			width: 360rpx;
			height: 50px;
			.title{
				
			}
			.desc{
				color: $bx-main-color2;
				font-size: 13px;
				overflow: hidden;
				text-overflow:ellipsis; 
				white-space: nowrap;
			}
		}
		navigator{
			flex-shrink: 0;
			width: 120rpx;
			height: 30px;
			line-height: 30px;
			color: #FFFFFF;
			font-size: 12px;
			background-color: $bx-main-color3;
			border-radius: 30px;
			text-align: center;
		}
	}
	
	.box{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 14px;
		padding: 15px 80rpx ;
		background-image: linear-gradient(to bottom, #a49cef, #7574ef);
		border-radius: 6px;
		.box1{
			image{
				display: block;
				width: 100rpx;
				height: 50px;
			}
			.content{
				margin-top: 8px;
				text-align: center;
				color: #FFFFFF;
				font-size: 14px;
			}
		}
	}
	.top{
		margin-top: 15px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		image{
			height: 40px;
			width: 40px;
			border-radius: 50%;
		}
		.right{
			margin-left: 10px;
			.name{
				
			}
			navigator{
				margin-top: 4px;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				image{
					width: 16px;
					height: 16px;
				}
				text{
					font-size: $bx-main-color2;
					font-size: 12px;
				}
			}
		}
	}
	.pad{
		padding: 0 $bx-padding;
	}
	
</style>
