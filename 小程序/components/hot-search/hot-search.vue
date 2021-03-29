<template>
	<view>
		<view class="first">
			<text>知保热搜</text>
		</view>
		<view class="container">
			<view class="content2" v-for="(item,index) in history" :key="index">
				<navigator :url="'../../news_detail/news_detail?aid='+ item.article_id">
					<text class="title">{{item.title}}</text>
					<text class="icon">{{item.icon}}</text>
				</navigator>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				history:[
					{title:"险种比一比",
					icon:"热",
					article_id:13
					},
					{title:"最强重疾险",
					icon:"新",
					article_id:3
					},
					{title:"重疾险测评",
					icon:"热",
					article_id:29
					},
					{title:"医疗险买哪个",
					icon:"新",
					article_id:30
					},
					{title:"大or小保险公司",
					icon:"热",
					article_id:40
					},
					{title:"怎么买保险",
					icon:"新",
					article_id:43
					},
					{title:"理赔利益最大化",
					icon:"热",
					article_id:42
					},
					{title:"去哪买保险靠谱",
					icon:"新",
					article_id:45
					},
				]
			};
		}
	}
</script>

<style lang="scss">
	.container{
		.content2{
			padding: 4px 8px;
			display:inline-block;
			margin-right: 8px;
			margin-bottom: 8px;
			background-color: $bx-back-color2;
			font-size: 14px;
			color: $bx-main-color1;
			border-radius: 2px;
			.title{
				
			}
			.icon{
				display: inline-block;
				border-radius: 4px;
				font-size: 12px;
				color: #FFFFFF;
				background-color: $bx-back-color5;
				margin-left: 6px;
				width: 20px;
				height: 20px;
				text-align: center;
			}
		}
	}
	.first{
		display: flex;
		justify-content: space-between;
		padding: 10px $bx-padding;
		margin-top: 10px;
	}
	.container{
		padding:0 $bx-padding;
		.content{
			padding: 4px 8px;
			display:inline-block;
			margin-right: 8px;
			background-color: $bx-back-color2;
			font-size: 12px;
			color: $bx-main-color1;
			border-radius: 12px;
		}
	}
</style>
