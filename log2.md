富文本：
https://ask.dcloud.net.cn/article/35772

1. v-html
<div v-html="html"></div>
只支持app和h5
2. rich-text
<rich-text :nodes="strings"></rich-text>
strings: '<div style="text-align:center;"><img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png"/></div>'


数据库记录的格式：
article
{
    "article_id": 1,
    "author": "",
    "content": "",
    "title": ""
}

db_init.json格式
{
	"articlelist":{
		"data":[{
			
		}
		]
	}
}

vue语法
：数据----data
@事件----method
v-model双向绑定----input（data）

事件
@click			pc端
@tap			移动端
@keyup.enter	pc端
@confirm		移动端

周期
组件mounted
页面onload
应用onlaunch

云函数
searcharticle

数据库查询(where+正则表达式)
const db = uniCloud.database()
const collection = db.collection("article")

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event.keywords)
	var reg = event.keywords
	//返回数据给客户端
	
	let res = await collection.where({
			name: new RegExp(reg)
		}).skip(0).limit(1).get()
	
	console.log(res.data)
	return res.data
};


登录：
1. vue

1）在onload里判断用户是否登录（uni.getSetting）

2)用户允许提供信息，得到用户的头像和用户名（@getuserinfo="bindGetUserInfo"）
<button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" class="btn" :loading="loading" :disabled="loading" v-if="status==='userInfo'">
	微信一键登录
</button>

bindGetUserInfo(e){
	console.log(e.detail.userInfo.avatarUrl);
	console.log(e.detail.userInfo.nickName);
}

3）唯一用户id，openid



<button @click="handler" class="btn"  v-if="status==='userLocation'">
	授权地址位置
</button>


2. 云函数


vue改变样式

1. style
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
样式：后接变量activeColor，fontSize
data: {
  activeColor: 'red',
  fontSize: 30
}

2. class
<div :class="{ active: isActive }"></div>
active样式存在与否，取决于isActive是否为true



console上的问题
1. 数据类型
数组：（数量）[ ]
对象：res.authSetting["scope.userInfo"]
boolean：紫色，true
number：
string：



数据库读写
https://uniapp.dcloud.io/uniCloud/cf-database
add添加数据({}),批量([{}.{}])
update,set
remove
get


异步和同步
1. 异步转为同步
1）
setTimeout(function(){
	
},1000)



个人账号不能有video
<template>
	<view>
		<video :src="src" controls></video>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:""
			}
		},
		methods: {
			
		},
		onLoad(option) {
			console.log(option.vid);
			var that = this;
			uniCloud.callFunction({
				name:"videodetail",
				data:{
					vid: option.vid
				},
				success(res){
					console.log(res.result)
					that.src = res.result[0].url
				},
				fail(err) {
					console.error(err)
				}
			})
		}
	}
</script>

<style lang="scss">
	video{
		width: 100%;
		
	}
</style>


vue 模块everyone
<template>
	<view>
		<view class="nav">
			<navigator class="left">
				<view class="start">|</view>
				<view class="content">大家都在看</view>
			</navigator>
		</view>
		<view class="video">
			<scroll-view scroll-x="true" scroll-with-animation="true">
				<view>
					<view class="box" v-for="(item,index) in videocontent" :key="index">
						<navigator :url="'../../video_detail/video_detail?vid='+ item.video_id">
							<image :src="item.src" mode="scaleToFill"></image>
							<view class="play-love">
								<image src="../../static/play.png" mode="scaleToFill" style="width: 14px;height: 14px;"></image>
								<view class="play">
									{{item.play}}
								</view>
								<image src="../../static/love.png" mode="scaleToFill" style="width: 14px;height: 14px;"></image>
								<view class="love">
									{{item.love}}
								</view>
							</view>
							<view class="title">
								{{item.title}}
							</view>
						</navigator>
					</view>
				</view>
			</scroll-view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videocontent:[]
			};
		},
		mounted() {
			var that = this;
			uniCloud.callFunction({
				name:"video",
			
				success(res){
					console.log(res.result)
					that.videocontent = res.result
				},
				fail(err) {
					console.error(err)
				}
			})
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
			width: 100%;
			// margin-top: 40rpx;
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
	}
	
	.video{
		// background-color: #007AFF;
		margin-top: 20upx;
		scroll-view{
			white-space: nowrap;
			// width: 100%;
			// background-color: #333333;
			padding-left: $bx-padding;
			.box{
				display: inline-block;
				text-align: center;
				navigator{
					// background-color: #2C405A;
					margin-right: 20rpx;
					width: 240rpx;
					position: relative;
					image{
						width: 240rpx;
						height: 300rpx;
						border-radius: 10rpx;
						
					}
					.play-love{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						font-size: 12px;
						color: $bx-back-color1;
						// background-color: #007AFF;
						height: 20px;
						position: absolute;
						bottom: 80rpx;
						left: 10rpx;
						// z-index: 9999;
						.play{
							margin-right: 10rpx;
							// background-color: #333333;
							margin-left: 6rpx;
						}
						.love{
							margin-left: 6rpx;
						}
					}
					.title{
						width: 240rpx;
						height: 36px;
						font-size: 12px;
						// background-color: #1Cd;
						// word-break: keep-all;
						// word-wrap: break-word;
						white-space: pre-line;
						overflow: hidden;
						text-align: left;
					}
				}
			}
			
		}
	}

</style>

