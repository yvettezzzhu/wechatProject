<template>
	<view>
		<view class="">
			<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true">
				<view>
					<block v-for="(item,index) in tab" :key = "index">
						<view class="box" @click="tabs(index)" :class="{active:index == num}">
							<view>
								<text class="box-text" :class="{active1:index == num}">{{item}}</text>
							</view>
						</view>
					</block>
				</view>			
			</scroll-view>
		</view>
		
		<view style="height: 80rpx;"></view>
	</view>
</template>

<script>
	export default {
		name:"tab",
		data() {
			return {
				num:0,
				tab:['重疾险','寿险','医疗险','意外险','年金险','责任险']
			};
		},
		methods:{
			tabs(index){
				this.num = index
			}
		},
		// created() {
		// 	uniCloud.callFunction({
		// 		name:"tab",
				
		// 		success:(res) =>{
		// 			console.log(res)
		// 			this.tab = res.result.data
		// 		},
		// 		fail:(err) => {
		// 			console.log(err);
		// 		}
		// 	})
		// }
	}
</script>

<style lang="scss">
	.scroll{
		position: absolute;
		top: 90rpx;
		left: 0;
		white-space: nowrap;
		width: 100%;
		// background-color: $bx-base-color;
		padding: 20rpx;
		padding-bottom: 0;
			.box{
				width: 140rpx;
				display: inline-block;
				text-align: center;
			}
			.active{
				// background-image: linear-gradient(to right,#00aaff 0%,#aaaaff 100%);
				border-bottom: 2px solid #333333 ;
				padding-bottom: 20rpx;
			}
				.box-text{
					font-size: 16px;
					color: $bx-main-color2;
				}
				.active1{
					color:$bx-main-color1 ;
				}
	}
</style>
