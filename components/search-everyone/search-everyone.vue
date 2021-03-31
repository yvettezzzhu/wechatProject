<template>
	<view>
		<view class="nav">
			<view class="left">
				<view class="start">|</view>
				<view class="content">大家都在看</view>
			</view>
			<view class="right">
				<navigator url="">
					<view class="content">订阅更多 +</view>
				</navigator>
			</view>
		</view>
		<view class="box">
			<view class="first2">
				全职太太离婚获5万元家务补偿：你认为合理吗
			</view>
			<view class="second2">
				<view class="yes">
					<text class="name">合理</text>
					<text class="hid">我已投</text>
				</view>
				<view class="no">
					不合理
				</view>
			</view>
			<view class="process">
				<view class="long">
					<view class="short1" id="short1" ref="short1" :style="[{width: setLeft}]">
						{{yes}}票
					</view>
					<view class="short2" id="short2" ref="short2" :style="[{width: setRight}]">
						{{no}}票
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
				yes:700,
				no:500,
				setLeft: "",
				setRight: "" ,
				
				videocontent:[]
			};
		},
		mounted() {
			this.setLeft = (this.yes / (this.yes + this.no))*100 + "%";
			this.setRight = (this.no / (this.yes + this.no))*100 + "%";
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
		},
		
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.bottom{
		// background-color: #007AFF;
		margin-top: 10px;
		padding: 0;
		// padding-left: $bx-padding;
			.box{
				display: inline-block;
				text-align: center;
				navigator{
					background-color: #2C405A;
					// margin-right: 20rpx;
					width: 100%;
					position: relative;
					image{
						width: 100%;
						height: 150px;
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
						bottom: 50px;
						left: 5px;
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
						word-break: keep-all;
						word-wrap: break-word;
						white-space: pre-line;
						overflow: hidden;
						text-align: left;
					}
				}
			}
			
		}
	
	
	.process{
		margin-top: 8px;
		.long{
			background-color: #007AFF;
			width: 100%;
			height: 16px;
			border-radius: 16px;
			display: flex;
			
			.short1{
				width: 30%;
				font-size: 10px;
				color: $bx-back-color1;
				background-color: #6e8fff;
				border-bottom-left-radius: 16px;
				border-top-left-radius: 16px;
				text-indent: 8px;
				
			}
			.short2{
				width: 70%;
				color: $bx-back-color1;
				font-size: 10px;
				background-color:#fc4445;
				text-align: right;
				padding-right: 8px;
				border-bottom-right-radius: 16px;
				border-top-right-radius: 16px;
			}
		}
	}
	
	.box{
		background-color: $bx-back-color2;
		margin-top: 15px;
		margin-left: $bx-padding;
		margin-right: $bx-padding;
		padding: $bx-padding;
		
		.first2{
			// background-color: #007AFF;
			width: 100%;
			font-size: 14px;
			color: #333333;
			font-weight: 500;
			text-align: center;
		}
		.second2{
			display: flex;
			justify-content: space-between;
			font-size: 12px;
			margin-top: 8px;
			.yes{
				.name{
					color: $bx-back-color7;
				}
				.hid{
					color: $bx-main-color2;
					margin-left: 8px;
				}
			}
			.no{
				color: #fc4445;
			}
		}
	}
	.nav{
		margin-top: 8px;
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 30px;
		padding-left: $bx-padding;
		padding-right: $bx-padding;
		.left{
			// width: 100%;
			// margin-top: 40rpx;
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
			font-size: 12px;
			color: $bx-main-color3;
			border: 1px solid $bx-main-color3;
			padding: 4px;
			padding-left: 8px;
			padding-right: 8px;
			border-radius: 12px;
			.content{
				height: 16px;
				line-height: 16px;
			}
		}
	}
	.bottom{
		// background-color: #007AFF;
		margin-top: 10px;
		padding: 0;
		// padding-left: $bx-padding;
			.box{
				padding: 0;
				display: inline-block;
				text-align: center;
				width: 40%;
				navigator{
					background-color: #fff;
					// margin-right: 20rpx;
					position: relative;
					image{
						width: 300upx;
						height: 400upx;
						border-radius: 10px;
						
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
						bottom: 50px;
						left: 5px;
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
						width: 300rpx;
						height: 36px;
						font-size: 12px;
						// background-color: #1Cd;
						color: $bx-main-color1;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
				}
			}
			
		}
	
	
</style>
