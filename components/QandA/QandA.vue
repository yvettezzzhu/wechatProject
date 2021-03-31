<template>
	<view>
		<view class="qanda">
			<view class="first1">
				<view class="icon1">
					Q
				</view>
				<view class="title">
					60岁买什么样的保险
				</view>
			</view>
			<view class="second2">
				<view class="icon2">
					A
				</view>
				<view class="content">
					<view class="firstline">
						<navigator url="../../pages/news_detail/news_detail">
							<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/7e77c2e3-26fe-42f5-bffc-76119d5c714f.jpeg" mode="" class="photo"></image>
							<text class="title">Alex</text>
							<image src="../../static/v.png" mode=""></image>
							<text class="v-content">80后北美精算师</text>
						</navigator>
					</view>
					<view class="next">
						<view class="next-content">
							60岁，可以购买的保障已经不太多。有几个问题需要沟通：一、重大疾病险保费相对较高，有可能出现倒挂;二、50岁是重大疾病险的投保门槛儿，需要体检，合格后，方可投保。三、看到老人这个年龄，是不是也该考虑自己晚年生活的提前规划呢。
						</view>
					</view>
				
				</view>
			</view>
			
		</view>
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
	.qanda{
		padding: 0 $bx-padding;
		.first1{
			margin-top: 10px;
			width: 100%;
			
			// background-color: #007AFF;
			display: flex;
			justify-content: flex-start;
			.icon1{
				
				width: 20px;
				height: 20px;
				background-color: #fd635d;
				color: #FFFFFF;
				line-height: 20px;
				text-align: center;
				border-top-left-radius: 50%;
				border-top-right-radius: 50%;
				border-bottom-left-radius: 50%;
				margin-right: 8px;
			}
			.title{
				
			}
		}
		.second2{
			margin-top: 2px;
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			.icon2{
				width: 20px;
				height: 20px;
				background-color: #6e8fff;
				color: #FFFFFF;
				line-height: 20px;
				text-align: center;
				border-top-left-radius: 50%;
				border-top-right-radius: 50%;
				border-bottom-left-radius: 50%;
				margin-right: 4px;
				flex-shrink: 0;
				margin-top: 6px;
			}
			.content{
				// background-color:#007AFF ;
				
				.firstline{
					.photo{
						width: 20px;
						height: 20px;
						border-radius: 50%;
					}
					image{
						width: 20px;
						height: 20px;
						vertical-align: middle;
						margin: 8px;
					}
					.title{
						display: inline-block;
						color: $bx-main-color3;
						font-size: 14px;
						margin-right: 6px;
					}
					.v-content{
						color: $bx-main-color2;
						font-size: 12px;
					}
				}
				.next{
					.next-content{
						font-size: 13px;
						color: #3e465f;
						padding-left: 8px;
						margin-bottom: 8px;
					}
				}
			}
		}
		
	}
</style>
