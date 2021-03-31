<template>
	<view class="content">
		<view class="top">
			登录
		</view>
		<view class="box">
			<form @submit="formSubmit" onsubmit="return false;" @reset="formReset">
				 <view class="uni-form-item uni-column">
					<view class="title">昵称</view>
					<input class="uni-input" focus=true name="input" v-model="name" placeholder="请输入昵称" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">账号</view>
					<input class="uni-input" password=true name="input" v-model="password" placeholder="请输入密码" />
				</view>
				<view class="uni-btn-v">
					<button form-type="submit" class="su">登录</button>
					
				</view>
			</form>
			<view class="resigter">
				<navigator url="../resigter/resigter">没有账号？点击这里注册</navigator>
			</view>
		</view>
		
	</view>
</template>

<script>
	let weixinAuthService
	export default {
		data() {
			return {
				hasWeixinAuth: false,
				name:"",
				password:"",
			}
		},
		onLoad() {
			
		},
		methods: {
			formSubmit: function(e) {
				console.log(this.name,this.password)
			},
			
		}
	}
</script>

<style lang="scss">
	.content{
		background-color: $bx-back-color4;
	}
	.top{
		text-align: center;
		color: #FFFFFF;
		font-size: 48rpx;
		height: 100px;
		line-height: 100px;
	}
	.box{
		background-color: #FFFFFF;
		padding-left: $bx-padding;
		padding-right: $bx-padding;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		padding-top: 20px;
		form{
			
			.uni-form-item{
				font-size: 16px;
				display: flex;
				justify-content: flex-start;
				margin-bottom: 10px;
				.title{
					margin-right: 30px;
				}
				.uni-input{
					
				}
			}
			.uni-btn-v{
				margin-top: 30px;
				font-size: 14px;
				.su{}
			}
		}
		.resigter{
			color: $bx-back-color4;
			text-align: center;
			margin-top: 10px;
			font-size: 12px;
		}
	}
</style>

