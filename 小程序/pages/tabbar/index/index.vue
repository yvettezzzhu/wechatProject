<template>
	<view class="content">
		<view class="auto-login" :style="{display: isactive5}">
			<view class="content flex flex-column a-center j-center">
				<view class="title">授权登陆</view>
				<view class="info-msg">
					请授权头像等信息，以便我们为您提供更好的服务
				</view>
				<button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" class="btn" :loading="loading" :disabled="loading" v-if="status==='userInfo'">
					微信一键登录
				</button>		
				
			</view>
		</view>
		<navbar></navbar>
		<new-swiper></new-swiper>
		<navblock></navblock>
		<view style="height: 20upx;background-color: $bx-back-color2;">
		<little-module1></little-module1>	
		<adv-article></adv-article>
		<view style="height: 20upx;background-color:#eff2f5;"></view>
		<little-module2></little-module2>
		<view style="height: 20upx;background-color:#eff2f5;"></view>
		<little-module3></little-module3>
		<view style="height: 20upx;background-color:#eff2f5;"></view>
		<little-module4></little-module4>
		
		<view style="height: 20upx;background-color:#eff2f5;"></view>
		<content-tab></content-tab>
		<view style="height: 20upx;background-color:#eff2f5;"></view>
		<bottom></bottom>
		
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			status:{
				type:String,
				default:"userInfo"
			},		
		},

		data() {
			return {
				isactive5:"none",
				loading:false,
				APPID:"",
				APPSECRET:"",
				JSCODE:"",
				avatarUrl:"",
				nickName:"",
				openid:""
			}
		},
		onLoad() {
			var that = this;
			
			uni.getSetting({
				success(res) {
					console.log(res.authSetting["scope.userInfo"]);
					if (res.authSetting["scope.userInfo"]!== true){
						that.isactive5 = "";
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
					};
					
				}
			})
		},
		methods: {
			
			bindGetUserInfo(e){
				try{
					console.log(e.detail.userInfo.avatarUrl);
					this.avatarUrl = e.detail.userInfo.avatarUrl;
					console.log(e.detail.userInfo.nickName);
					this.nickName = e.detail.userInfo.nickName;
					this.isactive5 = "none";
					var that = this;
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
						})
					},1000);
					
					setTimeout(function(){
						console.log(that.openid);
						uniCloud.callFunction({
							name:"adduser",
							data:{
								openid: that.openid,
								avatarUrl: that.avatarUrl,
								nickName: that.nickName,
							},
							success(res){
								console.log(res)
							},
							fail(err) {
								console.error(err)
							}
						})
					},3000);
					
				}catch(err){
					console.log(err)
					uni.showModal({
						title:"您拒绝了授权，无法获取小程序信息，请前往授权",
						showCancel:false
					})
				}
				
			},
		},
	}
</script>

<style lang="scss">
	.auto-login{
		background: rgba(0,0,0,0.6);
		z-index: 99999;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		.content{
			width: 500rpx;
			// height: 600rpx;
			background: white;
			border-radius: 8rpx;
			.title{
				margin-top: 20px;
				font-size: 34rpx;
				margin-bottom: 24px;
				font-weight: bold;
				width: 100%;
				text-align: center;
				color: black;
			}
			.info-msg{
				font-size: 28rpx;
				margin-bottom: 24px;
				padding: 0 60rpx;
				color: grey;
				// text-indent: 2em;
			}
			.btn{
				padding: 8rpx 0rpx;
				width: 400rpx;
				text-align: center;
				background:  $bx-main-color3;
				border-radius: 8rpx;
				font-size: 26rpx;
				color: white;
				margin-bottom: 20px;
			}
		}
	}
	.content{
		background-color: $bx-back-color2;
	}
	
</style>
