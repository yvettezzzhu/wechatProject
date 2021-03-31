<template>
	<view>
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
						<image src="../../../static/index-active.png" mode=""></image>
						<view class="content">
							保单
						</view>
					</view>
					<view class="box1">
						<image src="../../../static/index-active.png" mode=""></image>
						<view class="content">
							理赔
						</view>
					</view>
					<view class="box1">
						<image src="../../../static/index-active.png" mode=""></image>
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
		
		<view class="blank1"></view>
		<my-insurance></my-insurance>
		<slide-column></slide-column>
		<view style="height: 8px;margin-top: 16px;background-color: #eff2f5;"></view>
		<my-server></my-server>
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
				avatarUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/8e4c9839-504f-4be3-8b9a-41df89023292.jpeg",
				nickName:"点击微信登录",
				openid:""
			}
		},
		onLoad() {
			
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
					new Promise(resolve => {
						uniCloud.callFunction({
							name:"getappid",
							success(res){
								
								that.APPID = res.result[0];
								that.APPSECRET = res.result[1];
								console.log(that.APPID,that.APPSECRET)
								resolve("获取aapid成功")
							},
							fail(err) {
								console.error(err)
							}
						})
					}).then(val=>{
						return new Promise(resolve=>{
							uni.login({
								provider:"weixin",
								success:function(res){
									console.log(res.code);
									that.JSCODE = res.code;
									uni.request({
										url:'https://api.weixin.qq.com/sns/jscode2session?appid='+ that.APPID+'&secret='+ that.APPSECRET+'&js_code='+that.JSCODE+'&grant_type=authorization_code',
										success:function(res){
											that.openid = res.data.openid;
											resolve("获取openid成功")
										}
									})
								}
							})
						})
						
					}).then(val =>{
						console.log(that.openid);
						console.log(that.nickName);
						uniCloud.callFunction({
							
							name:"adduser",
							data:{
								openid: that.openid,
								avatarUrl: that.avatarUrl,
								nickName: that.nickName
								// openid:"sdhisdhasd",
								// avatarUrl:"shdis",
								// nickName:"sdsd"
							},
							success(res){
								console.log(res);
							},
							fail(err) {
								console.error(err)
							}
						})
					})
						
				}catch(err){
					console.log(err);
					var that2 = this;
					uni.showModal({
						title:"您拒绝了授权，无法获取账号信息，请前往授权",
						showCancel:true,
						confirmText:"授权",
						cancelText:"取消",
						success: function (res) {
						        if (res.confirm) {
						            console.log('用户点击确定');
						        } else if (res.cancel) {
						            console.log('用户点击取消');
									that2.isactive5 = "none";
						        }
						    }
					})
				}
				
			},
			change1(){
				var that = this;
				uni.getSetting({
					success(res) {
						console.log(res.authSetting["scope.userInfo"]);
						if (res.authSetting["scope.userInfo"]!== true){
							//不为true，display获取用户信息
							that.isactive5 = "";
						}else{
							//display还是none
							new Promise(resolve => {
								uniCloud.callFunction({
									name:"getappid",
									success(res){
										
										that.APPID = res.result[0];
										that.APPSECRET = res.result[1];
										console.log(that.APPID,that.APPSECRET)
										resolve("获取aapid成功")
									},
									fail(err) {
										console.error(err)
									}
								})
								
							}).then(val => {
								console.log(val) //  参数val = 'hello'
								
								// 获取openid
								return new Promise(resolve => {
									uni.login({
										provider:"weixin",
										success:function(res){
											console.log(res.code);
											that.JSCODE = res.code;
											wx.request({
												url:'https://api.weixin.qq.com/sns/jscode2session?appid='+ that.APPID+'&secret='+ that.APPSECRET+'&js_code='+that.JSCODE+'&grant_type=authorization_code',
												success:function(res){
													that.openid = res.data.openid;
													console.log(that.openid)
													resolve("获取openid成功")
												}
											})
										}
									});
								})
								
							}).then(val => {
								console.log(val) 
								// 根据openid查询数据库，展示数据
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
							});
				
							
						}
					}	
				})
			},
		},
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
	
	.blank1{
		background-color: $bx-back-color2;
		margin-top: 16px;
		height: 8px;
	}
	
</style>
