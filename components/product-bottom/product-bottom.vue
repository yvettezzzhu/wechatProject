<template>
	<view>
		<view class="title">
			<view class="icon1">
				-
			</view>
			
			<view class="title-content">
				不知道怎么买保险？
			</view>
			<view class="icon2">
				-
			</view>
			
		</view>
		<view class="box">
			<navigator url="../../news_detail/news_detail?aid=43">
				<image class="photo" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/8541e248-3e1c-40a7-968e-5d9c49c12754.jpeg" mode=""></image>
				<view class="desc1">
					<view class="title">
						万字长文告诉你，保险怎么买！
					</view>
					<view class="desc">
						买保险，在正确的时候做正确的事
					</view>
				</view>
				<view class="right1">
					看详情
				</view>
			</navigator>
		</view>
		<view class="box">
			<navigator url="../../news_detail/news_detail?aid=44">
				<image class="photo" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/72f4e61e-0723-43d4-9d89-b769470d6af0.jpeg" mode=""></image>
				<view class="desc1">
					<view class="title">
						只买一种保险，买什么最合适？
					</view>
					<view class="desc">
						通过保险这种金融产品，完美转移风险
					</view>
				</view>
				<view class="right1">
					看详情
				</view>
			</navigator>
		</view>
		<view class="box">
			<navigator url="../../news_detail/news_detail?aid=45">
				<image class="photo" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/57f5d06a-0c77-4178-9a8e-14cfcffb13bf.jpeg" mode=""></image>
				<view class="desc1">
					<view class="title">
						一般人们都通过哪些途径买保险？
					</view>
					<view class="desc">
						保险市场纷繁复杂，代理人等渠道众多
					</view>
				</view>
				<view class="right1">
					看详情
				</view>
			</navigator>
		</view>
		<view class="blank" style="height: 8px;background-color:#eff2f5 ;"></view>	
		<navigator class="bottomest" url="../../consultant/consultant">联系客服</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.bottomest{
		height: 20px;
		text-align: center;
		font-size: 12px;
		margin: 10px 0;
		color: $bx-main-color3;
		font-weight: 400;
	}
	.title{
		display: flex;
		justify-content: center;
		padding-top: 20px;
		padding-bottom: 20px;
		.icon1{
			color: $bx-main-color3;
			margin-right: 10px;
		}
		.icon2{
			color: $bx-main-color3;
			margin-left: 10px;
		}
		.title-content{
			color: $bx-main-color1;
		}
	}
	.box{
		padding: 10px $bx-padding;
		// background-color: #333333;
		navigator{
			width: 100%;
			height: 50px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			// background-color: #007AFF;
	
			image{
				width: 15%;
				height: 100%;
				border-radius: 50%;
			}
			.desc1{
				// background-color: #2C405A;
				height: 50px;
				width: 70%;
				padding-left: 8px;
				.title{
					// background-color: #007AFF;
					padding: 0;
					font-size: 14px;
					display: inline-block;
				}
				.desc{
					margin-top: 6px;
					font-size: 12px;
					color: $bx-main-color2;
					// font-weight: 300;
					
				}
				
			}
			.right1{
				width: 15%;
				color: $bx-main-color2;
				background-color: $bx-main-color3;
				border-radius: 20px;
				padding: 6px 8px;
				font-size: 12px;
				text-align: center;
			}
		}
	}
		
</style>
