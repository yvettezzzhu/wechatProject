<template>
	<view>
		<view class="box">
			<view class="title">
				{{title}}
			</view>
			<view class="second">
				<view class="author">
					{{author}}
				</view>
			</view>
			<view class="content">
				<rich-text :nodes="content[0].content"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
    export default {
        data() {
            return {
				title:"",
				author:"",
				content:[],
            }
        },
        onLoad(option) {
        	console.log(option.aid);
			var that = this;
			uniCloud.callFunction({
				name:"article",
				data:{
					article_id: option.aid,
				},
				success(res){
					console.log(res.result);
					that.title = res.result[0].title;
					that.author = res.result[0].author;
					that.content = res.result;
				},
				fail(err) {
					console.error(err)
				}
			})
        },
		onReady(){
            uni.setNavigationBarTitle({
                title:this.title
            })
        },
		methods:{
			
				 
				
			
		}
    }
</script>

<style lang="scss">
	.box{
		margin:$bx-padding;
		.title{
			font-size: 36rpx;
		}
		.second{
			margin-top:10px;
			color: #808080;
		}
		.content{
			margin-top: 16px;
		}
	}
</style>