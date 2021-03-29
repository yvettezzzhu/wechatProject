<template>
	<view>
		<view class="nav">
			<view class="left">
				<view class="start">|</view>
				<view class="content">热榜</view>
			</view>
			<view class="right">
				
				<view @tap="changetosearch()" class="more">更多</view>
				
			</view>
		</view>
		
		<view class="wrap" >
			<view class="box" >
				<navigator url="../../news_detail/news_detail?aid=1">
					<view class="first">
						<view class="icon">
							1
						</view>
						<view class="title">
							十个保险相关常见问题的回答
						</view>
					</view>
					<view class="second">
						<view class="descr">
							第一个常见问题：“我现在购买的保险保额是50万元，二十年或者三十年后如果考虑通胀这50万元是不是不值钱了，到时一点用都没有？”
						</view>
					</view>
					<view class="third">
						<view class="author">
							李元霸
						</view>
						<view class="hot">
								🔥 239.4w热度
							
						</view>
					</view>
				</navigator>
				
			</view>
			<view class="box" >
				<navigator url="../../news_detail/news_detail?aid=2">
					<view class="first">
						<view class="icon" style="background-color: #fd8008;;">
							2
						</view>
						<view class="title">
							目前什么保险靠谱，值得买？
						</view>
					</view>
					<view class="second">
						<view class="descr">
							这几个月的重疾险市场，风云诡谲。一方面，大家都在暗暗猜测重疾险新规何时出台；另一方面，保险公司也一点都没闲着，把该下架的下架，该停售的停售。比如前些日子下架了保至70岁版本的达尔文3号、超级玛丽3号等4款信泰产品。
						</view>
					</view>
					<view class="third">
						<view class="author">
							幸运学社
						</view>
						<view class="hot">
								🔥 235.2w热度
						</view>
					</view>
				</navigator>
				
			</view>
			<view class="box" >
				<navigator url="../../news_detail/news_detail?aid=3">
					<view class="first">
						<view class="icon" style="background-color: #0f80ff;;">
							3
						</view>
						<view class="title">
							现在最好的重疾保险是哪个？
						</view>
					</view>
					<view class="second">
						<view class="descr">
							第一个是，重疾险新定义已经正式落地，总算是等到了最后落地实施阶段。						后续旧定义产品将依次下架，新定义产品将会上新。
						</view>
					</view>
					<view class="third">
						<view class="author">
							肆大财子
						</view>
						<view class="hot">
								🔥 232.8w热度
							
						</view>
					</view>
				</navigator>
				
			</view>
			<view class="box" v-for="(item,index) in articlelist" :key = "index">
				<navigator :url="'../../news_detail/news_detail?aid='+ item.article_id">
					<view class="first">
						<view class="icon" style="background-color: #e6e6e6;color: #7f7f7f;">
							{{item.article_id}}
						</view>
						<view class="title">
							{{item.title}}
						</view>
					</view>
					<view class="second">
						<view class="descr">
							{{item.description}}
						</view>
					</view>
					<view class="third">
						<view class="author">
							{{item.author}}
						</view>
						<view class="hot">
								🔥 {{item.hot}}w热度
							
						</view>
					</view>
				</navigator>
				
			</view>
			
					
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				articlelist:[],
			};
		},
		mounted() {
			let that = this;
			uniCloud.callFunction({
				name:"articlelist",
				success(res){
					console.log(res.result);
					that.articlelist = res.result;
				},
				fail(err) {
					console.error(err)
				}
			});
			
			
		},
		methods:{
		
			changetosearch(){
				uni.switchTab({
					url:"../search/search"
				})
			}
		}
	}
</script>

<style lang="scss">
	.icon1{
		
	}
	
	.nav{
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 30px;
		.left{
			width: 70%;
			margin-top: 10px;
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
			margin-top: 20px;
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
		padding-left: $bx-padding;
		padding-right: $bx-padding;
		padding-top: 8px;
		.box{
			border-bottom: 1px solid $bx-back-color2;
			padding: 8px $bx-padding;
			box-shadow: 0 5px 20px 0 #e6e6e6;
			margin-top: 8px;
			// padding-top: 8px;
			// padding-bottom: 8px;
			.first{
				display: flex;
				justify-content: flex-start;
				.icon{
					padding: 0 6px;
					height: 20px;
					background-color: #fc4445;
					color: #FFFFFF;
					font-size: 14px;
					text-align: center;
					line-height: 20px;
					border-radius: 50%;
					
				}
				.title{
					margin-left: 8px;
					
				}
			}
			.second{
				.descr{
					padding: 6px 0;
					height: 30px;
					color: $bx-main-color2;
					font-size: 12px;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					
				}
			}
			.third{
				display: flex;
				justify-content: space-between;
				margin-top: 6px;
				.author{
					font-size: 12px;
					color: #727373;
					
				}
				.hot{
					color: #fc4445;
					font-size: 12px;
				}
			}
		}
	}
</style>
