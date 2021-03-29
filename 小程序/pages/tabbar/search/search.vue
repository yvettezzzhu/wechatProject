<template>
	<view>
		<view class="navbar">
			<view class="navbar-fixed">
				<view class="navbar-search">
					<view class="navbar-search-icon">
						<image @tap="search1()" src="../../../static/search-grey.png" mode=""></image>
					</view>
					<input @confirm="search1()" v-model="val" class="navbar-search-text" focus placeholder="高性价比重疾险">
				</view>
			</view>
			<view style="height: 90rpx;"></view>
		</view>
		<view class="displaybox">
			<view class="littlebox" v-for="(res,num) in res" :key="num">
				<navigator :url="'../../news_detail/news_detail?aid='+ res.article_id">
					{{res.title}}
				</navigator>
				
			</view>
		</view>
		<view class="top">
			<view class="box" v-for="(item,index) in top" :key="index">
				<navigator :url="'../../news_detail/news_detail?aid='+ item.article_id">{{item.text}}</navigator>
			</view>
		</view>
		
		<view class="first">
			<text>最近搜索</text>
			<image @tap="del()" src="../../../static/delete.png" mode="scaleToFill"></image>
		</view>
		<view class="container">
			<view class="content" v-for="(item,index) in history" :key="index">
				<view @tap="pull(item)" class="item">
					{{item}}
				</view>
				
			</view>
		</view>
		
		<hot-search></hot-search>
		<view class="blank" style="height: 8px;background-color:#eff2f5;"></view>
		<QandA></QandA>
		<view class="blank" style="height: 8px;background-color:#eff2f5;"></view>
		<search-everyone></search-everyone>
		<view class="blank" style="height: 16px;background-color:#FFFFFF;"></view>
	</view>
	
</template>



<script>
	export default {
		
		data() {
			return {
				val:"",
				top:[
					{
						text:"保险避坑",
						article_id:10
					},
					{
						text:"四大保险",
						article_id:4
					},
					{
						text:"互联网保险",
						article_id:5
					},
					{
						text:"拒赔？",
						article_id:39
					},
				],
				history:[],
				res:[],
			}
			
		},
		methods: {
			search1(){
				if (this.val != ""){
					console.log(this.val);
					this.history.push(this.val);
					var that = this;
					uniCloud.callFunction({
						name:"searcharticle",
						data:{
							keywords: that.val,
						},
						success(res){
							console.log(res.result)
							that.res = res.result;
							if(res.result.length==0){
								that.res = [{
									title:"抱歉，没有找到相关的内容，请输入其他关键词，比如：保险，重疾险",
									article_id:1
								}]
							}
						},
						fail(err) {
							console.error(err)
						}
					})
				}
			},
			del(){
				this.history = []
			},
			pull(item){
				this.val= item;
			}
		},
		
		
	}
	
</script>


<style lang="scss">
	.displaybox{
		margin: 0 $bx-padding;
		color: #808080;
		font-size: 14px;
		border-top: 1px solid #d6d9d9;
		border-right: 1px solid #d6d9d9;
		border-left: 1px solid #d6d9d9;
		border-radius: 20rpx;
		.littlebox{
			padding:8px 16rpx;
			margin: 0 16rpx;
			border-bottom: 1px solid #d6d9d9;
		}
	}
	.first{
		// border-top: 1px solid $bx-back-color2;
		display: flex;
		justify-content: space-between;
		padding: 0px $bx-padding;
		margin: 10px;
		margin-top:16px;
		image{
			width: 20px;
			height: 20px;
		
		}
	}
	.container{
		padding:0 $bx-padding;
		.content{
			margin-bottom: 8px;
			padding: 4px 8px;
			display:inline-block;
			margin-right: 8px;
			background-color: $bx-back-color2;
			font-size: 12px;
			color: $bx-main-color1;
			border-radius: 12px;
		}
	}
	.navbar{
		.navbar-fixed{
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 30rpx;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 90rpx;
			// background-color: $bx-base-color;
			box-sizing: border-box;
			.navbar-search{
				display: flex;
				align-items: center;
				padding: 0 20rpx;
				width: 100%;
				height: 60rpx;
				background-color: #FFFFFF;
				border-radius: 60rpx;
				border:2rpx solid #C0C0C0;
				.navbar-search-icon{
					width: 40rpx;
					height: 40rpx;
				}
				input{
					width: 100%;
				}
					image{
						width: 40rpx;
						height: 40rpx;
						vertical-align: text-middle;
					}
				.navbar-search-text{
					margin-left: 10rpx;
					font-size: 12px;
					color: #999999;
				}
			}
		}
	}
	
	.top{
		display: flex;
		justify-content: flex-start;
		margin: 8px $bx-padding;
	}
	.box{
		padding: 4px 4px;
		background-color: $bx-back-color3;
		color: $bx-main-color3;
		font-size: 12px;
		margin-right: 10px;
	}

</style>

