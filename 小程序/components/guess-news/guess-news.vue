<template>
	<view>
		<view class="nav">
			<view class="left">
				<view class="start">|</view>
				<view class="content">猜你想看</view>
			</view>
			<view class="right">
					<view class="new">
						<image :class="[rotate?'go':'aa']" @tap="newcontent()" src="../../static/new.png" mode=""></image>
					</view>
			</view>
		</view>
		<view class="box5" v-for="(item,index) in content" :key="index">
			<navigator :url="'../../news_detail/news_detail?aid='+ item.article_id">
				<view class="left">
					<view class="title">
						<text class="content">{{item.title}}</text>
						<text class="icon">{{item.label1}}</text>
					</view>
					<view class="label">
						<text class="label1">{{item.label2}}</text>
						<text class="label2">{{item.label3}}</text>
					</view>
				</view>
				<view class="right">
					<image :src="item.src" mode=""></image>
				</view>
			</navigator>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rotate:false,
				content:[
					{
						"title":"续费和续保傻傻分不清楚？看老司机带你读懂两者的区别",
						"label1":"精选",
						"label2":"秒懂系列",
						"label3":"续保很重要",
						"src":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/70aab820-45d2-4880-ad2b-ec0b5b9bfc29.jpeg",
						"article_id":37
					},
					{
						"title":"得了肾结石，这些保险还可以买！",
						"label1":"",
						"label2":"健康告知",
						"label3":"产品优选",
						"src":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/d35f6c66-4c84-4c24-9bf8-5d83245cc560.jpeg",
						"article_id":38
					},
					{
						"title":"又搞事！女子投保后患癌索赔60万遭拒，到底谁的错？",
						"label1":"",
						"label2":"索赔",
						"label3":"时事",
						"src":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/88b8c978-0dde-43d7-bff7-7d9128259cb4.png",
						"article_id":39
					},
				]
			};
		},
		
		methods:{
			newcontent(){
				this.rotate=!this.rotate;
				let that = this;
				setTimeout(function(){
					that.rotate=false;
				},510)
				var skip = Math.round(Math.random()*3)
				uniCloud.callFunction({
					name:"articlelist2",
					data:{
						skip: skip
					},
					success(res){
						console.log(res.result);
						that.content = res.result
					},
					fail(err) {
						console.error(err)
					}
				})
				
			}
		}
		
	}
</script>
	
<style lang="scss">
	.box5{
		padding: 12px $bx-padding;
		navigator{
			display: flex;
			justify-content: space-between;
			.left{
				// width:60%;
				// background-color: #2C405A;
				.title{
					// color: #555555;
					font-weight: 400;
					.content{
						font-size: 14px;
					}
					.icon{
						margin-left: 6px;
						font-size: 12px;
						background-color: #fc4445;
						color: #FFFFFF;
						// padding: 2px 2px;
					}
				}
				.label{
					font-size: 12px;
					margin-top: 12px;
					
					.label1{
						background-color: #c1c3f0;
						color: $bx-main-color3;
						margin-right: 8px;
						padding: 4px 4px;
						border-radius: 6px;
					}
					.label2{
						background-color: #c1c3f0;
						color: $bx-main-color3;
						padding: 4px 4px;
						border-radius: 6px;
					}
				}
			}
			.right{
				// background-color: #2C405A;
				// width: 30%;
				image{
					height: 60px;
					width: 80px;
					border-radius: 10px;
					// background-color: #4CD964;
				}
			}
		}
		
		// background-color: #007AFF;
		
	}
	.aa{
	    transition: all O.5s;
	    }
	.go{
		transform:rotate(-180deg);
		transition: all 0.5s;
	}
	.nav{
		margin-top: 20px;
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
			image{
				color: $bx-main-color2;
				width: 20px;
				height: 20px;
			}
			
		}
	}
	
</style>
