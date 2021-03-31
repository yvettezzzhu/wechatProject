<template>
	<view>
		<view class="big-box">
			<view class="tab-button-box">
				<view class="first">
					<view class="normal" @click="firstTab1()" :class="{ active1: isactive1}">
						
						<view class="text">
							健康
						</view>
					</view>
					<view class="normal" @click="firstTab2()" :class="{ active1: isactive2}">
						
						<view class="text">
							人寿
						</view>
					</view>
					<view class="normal" @click="firstTab3()" :class="{ active1: isactive3}">
						
						<view class="text">
							意外
						</view>
					</view>
					<view class="normal" @click="firstTab4()" :class="{ active1: isactive4}">
						
						<view class="text">
							年金
						</view>
					</view>
					
				</view>
				
				<view class="second">
					<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true" :class="{ isshow: index1 == 0}">
						<view>
							<block v-for="(item,index) in tab1" :key = "index">
								<view class="box" @click="secondTab(index)" :class="{active2:index == index2}">
									<view>
										<text class="box-text" :class="{active3:index == index2}">{{item}}</text>
									</view>
								</view>
							</block>
						</view>			
					</scroll-view>
					<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true" :class="{ isshow: index1 == 1}">
						<view>
							<block v-for="(item,index) in tab2" :key = "index">
								<view class="box" @click="secondTab(index)" :class="{active2:index == index2}">
									<view>
										<text class="box-text" :class="{active3:index == index2}">{{item}}</text>
									</view>
								</view>
							</block>
						</view>			
					</scroll-view>
					<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true" :class="{ isshow: index1 == 2}">
						<view>
							<block v-for="(item,index) in tab3" :key = "index">
								<view class="box" @click="secondTab(index)" :class="{active2:index == index2}">
									<view>
										<text class="box-text" :class="{active3:index == index2}">{{item}}</text>
									</view>
								</view>
							</block>
						</view>			
					</scroll-view>			
				</view>
			</view>
			
			<view class="tab-content" v-for="(type,number) in displayContent" :key="number">
				<view class="nav" >
					<view class="left-box">
						<view class="left">
							<view class="start">|</view>
							<view class="content">{{ type[0].type }}</view>
						</view>
					</view>
					
					<view class="bottom">
						<view class="text">
							{{type[0].typeDesc}}
						</view>
						
					</view>
					
				</view>
				<view class="wrap" >
					<view class="box" v-for="(content,count) in displayContent[number]" :key = "count">
						<navigator :url="content.src" >
							<view class="photo">
								<image :src="content.img" mode="scaleToFill"></image>
							</view>
							<view class="desc1">
								<view class="title">
									{{content.title}}
								</view>
								<view class="desc">
									{{content.desc}}
								</view>
								<view class="price-detail">
									<view class="price">
										{{content.price}}
									</view>
									<view class="detail">
										{{content.detail}}
									</view>
								</view>
							</view>
							<view class="right1">></view>
						</navigator>
						
					</view>
				</view>
				<view class="blank" style="height: 8px;background-color:#eff2f5 ;"></view>
			</view>
					
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// num1:0,
				// num2:0,
				index1:0,
				index2:0,
				isactive1:true,
				isactive2:false,
				isactive3:false,
				isactive4:false,
				
				tab1:[
					"全部",
					"成人",
					"老人",
					"少儿",
				],
				tab2:[
				],
				tab3:[
				],
				tab4:[
				],
				displayContent:[
							[{
								"id":1,
								"type":"门诊及住院医疗保险",
								"typeDesc":"扩充保障更全面，患病住院不用愁",
								"src":"../../product_detail/product_detail?id=1",
								"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/10362631-8161-4dea-9865-ab0cdc12e8ad.png",
								"title":"超越保2020",
								"desc":"200万保额，6年后续保也无需审核",
								"price":"¥232",
								"detail":"/年|特需版价格实惠，6年保证续保"
							},
							{
								"id":2,
								"type":"门诊及住院医疗保险",
								"typeDesc":"扩充保障更全面，患病住院不用愁",
								"src":"../../product_detail/product_detail?id=0",
								"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/b2150d5d-6482-43c4-882f-2b7d4659d97e.png",
								"title":"好医保长期医疗险",
								"desc":"200万保额，重疾绿通、费用垫付",
								"price":"¥259",
								"detail":"/年|6年保证续保,保障升级"
							},
							{
								"id":3,
								"type":"门诊及住院医疗保险",
								"typeDesc":"扩充保障更全面，患病住院不用愁",
								"src":"../../product_detail/product_detail?id=3",
								"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/dbd447f2-7a18-4ebd-841a-09001229a2a3.png",
								"title":"少儿门诊暖宝保",
								"desc":"1万保额，无免赔额",
								"price":"¥588",
								"detail":"/年0岁男|小额医疗报销"
							},
							{
								"id":4,
								"type":"门诊及住院医疗保险",
								"typeDesc":"扩充保障更全面，患病住院不用愁",
								"src":"../../product_detail/product_detail?id=4",
								"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/56dd2af8-d9b6-4208-a827-819f9622f54f.jpeg",
								"title":"神农6年期癌症医疗",
								"desc":"300万保额，6年保证续保",
								"price":"¥189",
								"detail":"/年|三高人群可投保"
							},
							{
								"id":5,
								"type":"门诊及住院医疗保险",
								"typeDesc":"扩充保障更全面，患病住院不用愁",
								"src":"../../product_detail/product_detail?id=0",
								"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/4c9a04ef-1d06-4f0b-9d9f-c98377a7bc06.jpeg",
								"title":"好医保终身防癌医疗险",
								"desc":"400万保额，终身保证续保",
								"price":"¥169",
								"detail":"/年|三高人群可投保"
							}
							],
							[{
								"id":6,
								"type":"重大疾病保险",
								"typeDesc":"罹患重病有赔付，安心养病有支撑",
								"src":"../../product_detail/product_detail?id=6",
								"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/9f6a5e22-124b-4aa5-82d4-825dd6405621.png",
								"title":"康惠保旗舰版2.0",
								"desc":"100种重疾，60岁前重疾多赔60%",
								"price":"¥6575",
								"detail":"/年缴30年|可选癌症二次赔"
							},
							{
								"id":7,
								"type":"重大疾病保险",
								"typeDesc":"罹患重病有赔付，安心养病有支撑",
								"src":"../../product_detail/product_detail?id=7",
								"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/089e82d9-f613-4d8c-88d1-a2df31c3ca2d.png",
								"title":"妈咪宝贝",
								"desc":"110种重疾，少儿特疾多倍赔",
								"price":"¥2010",
								"detail":"/年0岁男缴30年|可选重疾多次赔"
							},
							{
								"id":8,
								"type":"重大疾病保险",
								"typeDesc":"扩充保障更全面，患病住院不用愁",
								"src":"../../product_detail/product_detail?id=8",
								"img":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fdd4c842-0240-43b2-ad74-f3e9d79db064/7c61220a-63dc-4b02-8e39-91ea18abe1fc.png",
								"title":"福满一生",
								"desc":"123种重疾，61岁前重疾多赔70%",
								"price":"¥6695",
								"detail":"/年|灵活可选身故责任"
							}
							]
						],
				
				
				
				
			};
		},
		methods:{
			firstTab1(){
				this.isactive1 = !(this.isactive1);
				this.isactive2 = false;
				this.isactive3 = false;
				this.isactive4 = false;
				this.index1 = 0;
				this.index2 = 0;
				var that = this;
				uniCloud.callFunction({
					name:"healthall",
					success(res){
						console.log(res.result)
						that.displayContent = res.result
						console.log(that.displayContent)
					},
					fail(err) {
						console.error(err)
					}
				})
			},
			firstTab2(){
				this.isactive2 = !(this.isactive2);
				this.isactive3 = false;
				this.isactive1 = false;
				this.isactive4 = false;
				this.index1 = 1;
				let that = this;
				uniCloud.callFunction({
					name:"life",
					success(res){
						console.log(res.result)
						that.displayContent = res.result
						console.log(that.displayContent)
					},
					fail(err) {
						console.error(err)
					}
				})
			},
			firstTab3(){
				this.isactive3 = !(this.isactive3);
				this.isactive2 = false;
				this.isactive1 = false;
				this.isactive4 = false;
				this.index1 = 2;
				console.log(this.index1);
				var that = this;
				uniCloud.callFunction({
					name:"accident",
					success(res){
						console.log(res.result)
						that.displayContent = res.result
						console.log(that.displayContent)
					},
					fail(err) {
						console.error(err)
					}
				})
			},
			firstTab4(){
				this.isactive4 = !(this.isactive4);
				this.isactive2 = false;
				this.isactive1 = false;
				this.isactive3 = false;
				this.index1 = 3;
				console.log(this.index1);
				var that = this;
				uniCloud.callFunction({
					name:"annuity",
					success(res){
						console.log(res.result)
						that.displayContent = res.result
						console.log(that.displayContent)
					},
					fail(err) {
						console.error(err)
					}
				})
			},
			secondTab(index){
				console.log(index)
				this.index2 = index;
				console.log(this.displayContent);
				if(index == 0){
					let that = this
					uniCloud.callFunction({
						name:"healthall",
						success(res){
							console.log(res.result)
							that.displayContent = res.result
							console.log(that.displayContent)
						},
						fail(err) {
							console.error(err)
						}
					})
				};
				if(index == 1){
					let that = this
					uniCloud.callFunction({
						name:"product",
						success(res){
							console.log(res.result)
							that.displayContent = res.result
							console.log(that.displayContent)
						},
						fail(err) {
							console.error(err)
						}
					})
				};
				if(index == 2){
					let that = this
					uniCloud.callFunction({
						name:"healthold",
						success(res){
							console.log(res.result)
							that.displayContent = res.result
							console.log(that.displayContent)
						},
						fail(err) {
							console.error(err)
						}
					})
				};
				if(index == 3){
					let that = this
					uniCloud.callFunction({
						name:"healthson",
						success(res){
							console.log(res.result)
							that.displayContent = res.result
							console.log(that.displayContent)
						},
						fail(err) {
							console.error(err)
						}
					})
				};
				
			},
			
		}
	}
</script>

<style lang="scss">
	.isshow{
	    display:block !important;
	}
	.active1{
	    border-bottom:2px solid $bx-main-color3;
	}
	.big-box{
	    .tab-button-box{
	        // padding-bottom: 30upx;
	        // background-color: $bx-back-color2;
	        .first{
	            background-color: $bx-back-color2;
	            display: flex;
	            padding-left: 20%;
	            justify-content: space-between;
	            // background-color: #2C405A;
	            padding-right: 20%;
	            padding-bottom: 20upx;
	            .normal{
	                // background-color: #007AFF;
	                display: flex;
	                justify-content: center;
	                align-items: center;
	                padding: 20rpx 0;
	                
	                .text{
	                    // margin-left: 10rpx;
	                }
	            }
	        }
	        
	        .second{
	            background-color: $bx-back-color1;
	            padding-top: 8px;
	            padding-bottom: 8px;
	            
	            
	            .scroll{
	                // background-color: #007AFF;
	                white-space: nowrap;
	                width: 100%;
	                // background-color: $bx-base-color;
	                padding-left-right: 20rpx;
	                // border-left-top-radius:20upx ;
	                display: none;
	                    .box{
	                        width: 140rpx;
	                        display: inline-block;
	                        text-align: center;
	                        view{
	                            height: 24px;
	                            border-radius: 24px;
	                            // border: 1px solid $bx-main-color2;
	                            // border-color: $bx-main-color3;
	                            margin-left: 30rpx;
	                            // background-color: #007AFF;
	                        }
	                        .active3{
	                            color: $bx-main-color3 !important;
	                        }
	                    }
	                        .box-text{
	                            font-size: 14px;
	                            height: 24px;
	                            line-height: 24px;
	                            color: #afafaf;
	                        }						
	            }
	        }
	    }
	    .tab-content{
	        // border-top:1px solid $bx-back-color2 ;
	        .nav{
	            .left-box{
	                display:flex;
	                flex-direction: row;
	                justify-content: space-between;
	                align-items: center;
	                height: 30px;
	                
	                
	                .left{
	                    width: 70%;
	                    margin-top: 60rpx;
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
	            .bottom{
	                font-size: 12px;
	                padding-left: $bx-padding;
	                padding-top: 14px;
	                color: $bx-main-color2;
	                display: flex;
	                justify-content: flex-start;
	                align-items: center;
	                .text{
	                    
	                }
	                
	            }
	        }
	        .wrap{
	            // padding-top: 40rpx;
	            padding-left:$bx-padding;
	            padding-right:$bx-padding;
	            // background-color: #007AFF;
	            .box{
	                navigator{
	                    width: 100%;
	                    height: 160rpx;
	                    display: flex;
	                    flex-direction: row;
	                    justify-content: center;
	                    align-items: center;
	                    // background-color: #2C405A;
	                    padding-bottom: 10px;
						padding-top: 10px;
	                    border-bottom: 1px solid $bx-back-color2;
	                    .photo{
	                        width: 20%;
	                        display: flex;
	                        // background-color: #4CD964;
	                        image{
	                            width: 100%;
	                            height: 160rpx;
	                            border-radius: 20rpx;
	                        }
	                    }
	                    .desc1{
	                        width: 70%;
	                        margin-left: 20rpx;
	                        // background-color: #5428EE;
	                        .title{
	                            margin-bottom: 8upx;
								color: #555555;
								font-size: 34rpx;
								font-weight: 800;
	                        }
	                        .desc{
	                            font-size: 28rpx;
	                            font-weight: 300;
	                            margin-bottom: 8upx;
	                        }
	                        .price-detail{
	                            display: flex;
	                            flex-direction: row;
	                            justify-content: flex-start;
	                            // background-color: #590d1d;
	                            .price{
	                                color: $bx-main-color3;
	                                font-size: 30rpx;
	                            }
	                            .detail{
	                                color: $bx-main-color2;
	                                
	                                font-size: 26rpx;
	                            }
	                        }
	                    }
	                    .right1{
	                        color: $bx-main-color2;
	                    }
	                }
	            }
	            
	        }
	    }
	}
	
	
</style>
