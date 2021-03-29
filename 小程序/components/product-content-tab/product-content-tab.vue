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
							车险
						</view>
					</view>
					<view class="normal" @click="firstTab4()" :class="{ active1: isactive4}">
						
						<view class="text">
							意外
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
					<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true" :class="{ isshow: index1 == 2}">
						<view>
							<block v-for="(item,index) in tab4" :key = "index">
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
			<view class="tab-content" v-for="(type,number) in displayNav" :key="number">
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
						<view class="littleicon" @click="openarlert()">
							i
						</view>
						<view class="mask" @click="closealert()" :class="{ active5: isactive5}">
							<view class="up">
								<view class="up-first">
									<view class="icon">
										X
									</view>
									<view class="up-title">
										{{type[0].title}}
									</view>
								</view>
								<view class="up-content">
									{{type[0].introduction}}
								</view>
							</view>
						</view>
						
						
					</view>
					
				</view>
				<view class="wrap" >
					<view class="box" v-for="(item,index) in displayContent" :key = "index">
						<navigator :url="item.src" >
							<view class="photo">
								<image :src="item.img" mode="scaleToFill"></image>
							</view>
							<view class="desc1">
								<view class="title">
									{{item.title}}
								</view>
								<view class="desc">
									{{item.desc}}
								</view>
								<view class="price-detail">
									<view class="price">
										{{item.price}}
									</view>
									<view class="detail">
										{{item.detail}}
									</view>
								</view>
							</view>
							<view class="right1">></view>
						</navigator>
						
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
				// num1:0,
				// num2:0,
				index1:0,
				index2:0,
				isactive1:true,
				isactive2:false,
				isactive3:false,
				isactive4:false,
				isactive5:false,
				tab1:[
					"为自己",
					"为老人",
					"为孩子",
					"为自己",
				],
				tab2:[
					"为自己",
					"为老人",
					"为孩子",
					"为自己",
					"为老人",
					"为自己",
					"为老人",
				],
				tab3:[
					"为自己",
					"为老人",
					"为孩子",
					"为自己",
					"为老人",
					"为老人",
					"为孩子",
					"为自己",
					"为老人",
					"为孩子",
					"为自己",
					"为老人",
				],
				tab4:[
				],
				displayContent:[
							[
								{
								type:"门诊及住院医疗保险",
								typeDesc:"健康为自己11扩充保障更全面，患病住院不用愁",
								src:"../../pages/news_detail/news_detail",
								img:"../../static/188.png",
								title:"终身癌症医疗保险",
								desc:"最高800万，终身保证续保",
								price:"¥6.64",
								detail:"/月起|赠送质子重离子"
								},
								{
								type:"门诊及住院医疗保险",
								typeDesc:"健康为自己12扩充保障更全面，患病住院不用愁",
								src:"../../pages/news_detail/news_detail",
								img:"../../static/188.png",
								title:"终身癌症医疗保险",
								desc:"最高800万，终身保证续保",
								price:"¥6.64",
								detail:"/月起|赠送质子重离子"
								},
							],
							[
								{
									type:"门诊及住院医疗保险",
									typeDesc:"健康为自己21扩充保障更全面，患病住院不用愁",
									src:"../../pages/news_detail/news_detail",
									img:"../../static/188.png",
									title:"终身癌症医疗保险",
									desc:"最高800万，终身保证续保",
									price:"¥6.64",
									detail:"/月起|赠送质子重离子"
								},
								{
									type:"门诊及住院医疗保险",
									typeDesc:"健康为自己22扩充保障更全面，患病住院不用愁",
									src:"../../pages/news_detail/news_detail",
									img:"../../static/188.png",
									title:"终身癌症医疗保险",
									desc:"最高800万，终身保证续保",
									price:"¥6.64",
									detail:"/月起|赠送质子重离子"
								},
							],
						],
				displayNav:[
							[
								{
								type:"门诊及住院医疗保险",
								typeDesc:"健康为自己11扩充保障更全面，患病住院不用愁",
								src:"../../pages/news_detail/news_detail",
								img:"../../static/188.png",
								title:"终身癌症医疗保险",
								desc:"最高800万，终身保证续保",
								price:"¥6.64",
								detail:"/月起|赠送质子重离子",
								introduction:"1重疾险定义等等，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子月起|赠送质子重离子"
								},
								{
								type:"门诊及住院医疗保险",
								typeDesc:"健康为自己12扩充保障更全面，患病住院不用愁",
								src:"../../pages/news_detail/news_detail",
								img:"../../static/188.png",
								title:"终身癌症医疗保险",
								desc:"最高800万，终身保证续保",
								price:"¥6.64",
								detail:"/月起|赠送质子重离子",
								introduction:"重疾险定义等等，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子月起|赠送质子重离子"
								},
							],
							[
								{
									type:"门诊及住院医疗保险",
									typeDesc:"健康为自己21扩充保障更全面，患病住院不用愁",
									src:"../../pages/news_detail/news_detail",
									img:"../../static/188.png",
									title:"终身癌症医疗保险",
									desc:"最高800万，终身保证续保",
									price:"¥6.64",
									detail:"/月起|赠送质子重离子",
									introduction:"重疾险定义等等，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子月起|赠送质子重离子"
								},
								{
									type:"门诊及住院医疗保险",
									typeDesc:"健康为自己22扩充保障更全面，患病住院不用愁",
									src:"../../pages/news_detail/news_detail",
									img:"../../static/188.png",
									title:"终身癌症医疗保险",
									desc:"最高800万，终身保证续保",
									price:"¥6.64",
									detail:"/月起|赠送质子重离子",
									introduction:"重疾险定义等等，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子，月起|赠送质子重离子月起|赠送质子重离子"
								},
							],
						],
				content:[
					[
						[
							[
								{
								type:"门诊及住院医疗保险",
								typeDesc:"健康为自己11扩充保障更全面，患病住院不用愁",
								src:"../../pages/news_detail/news_detail",
								img:"../../static/188.png",
								title:"终身癌症医疗保险",
								desc:"最高800万，终身保证续保",
								price:"¥6.64",
								detail:"/月起|赠送质子重离子"
								},
								{
								type:"门诊及住院医疗保险",
								typeDesc:"健康为自己12扩充保障更全面，患病住院不用愁",
								src:"../../pages/news_detail/news_detail",
								img:"../../static/188.png",
								title:"终身癌症医疗保险",
								desc:"最高800万，终身保证续保",
								price:"¥6.64",
								detail:"/月起|赠送质子重离子"
								},
							],
							[
								{
									type:"门诊及住院医疗保险",
									typeDesc:"健康为自己21扩充保障更全面，患病住院不用愁",
									src:"../../pages/news_detail/news_detail",
									img:"../../static/188.png",
									title:"终身癌症医疗保险",
									desc:"最高800万，终身保证续保",
									price:"¥6.64",
									detail:"/月起|赠送质子重离子"
								},
								{
									type:"门诊及住院医疗保险",
									typeDesc:"健康为自己22扩充保障更全面，患病住院不用愁",
									src:"../../pages/news_detail/news_detail",
									img:"../../static/188.png",
									title:"终身癌症医疗保险",
									desc:"最高800万，终身保证续保",
									price:"¥6.64",
									detail:"/月起|赠送质子重离子"
								},
							],
						],
						[
							[
								{
								type:"门诊及住院医疗保险",
								typeDesc:"健康为老人11扩充保障更全面，患病住院不用愁",
								src:"../../pages/news_detail/news_detail",
								img:"../../static/188.png",
								title:"终身癌症医疗保险",
								desc:"最高800万，终身保证续保",
								price:"¥6.64",
								detail:"/月起|赠送质子重离子"
								},
								{
								type:"门诊及住院医疗保险",
								typeDesc:"健康为老人12扩充保障更全面，患病住院不用愁",
								src:"../../pages/news_detail/news_detail",
								img:"../../static/188.png",
								title:"终身癌症医疗保险",
								desc:"最高800万，终身保证续保",
								price:"¥6.64",
								detail:"/月起|赠送质子重离子"
								},
							],
							[
								{
									type:"门诊及住院医疗保险",
									typeDesc:"健康为老人21扩充保障更全面，患病住院不用愁",
									src:"../../pages/news_detail/news_detail",
									img:"../../static/188.png",
									title:"终身癌症医疗保险",
									desc:"最高800万，终身保证续保",
									price:"¥6.64",
									detail:"/月起|赠送质子重离子"
								},
								{
									type:"门诊及住院医疗保险",
									typeDesc:"健康为老人22扩充保障更全面，患病住院不用愁",
									src:"../../pages/news_detail/news_detail",
									img:"../../static/188.png",
									title:"终身癌症医疗保险",
									desc:"最高800万，终身保证续保",
									price:"¥6.64",
									detail:"/月起|赠送质子重离子"
								},
							],
						],
					],
					[
						[
							[
								{
								type:"门诊及住院医疗保险",
								typeDesc:"人寿为自己11扩充保障更全面，患病住院不用愁",
								src:"../../pages/news_detail/news_detail",
								img:"../../static/188.png",
								title:"终身癌症医疗保险",
								desc:"最高800万，终身保证续保",
								price:"¥6.64",
								detail:"/月起|赠送质子重离子"
								},
								{
								type:"门诊及住院医疗保险",
								typeDesc:"人寿为自己12扩充保障更全面，患病住院不用愁",
								src:"../../pages/news_detail/news_detail",
								img:"../../static/188.png",
								title:"终身癌症医疗保险",
								desc:"最高800万，终身保证续保",
								price:"¥6.64",
								detail:"/月起|赠送质子重离子"
								},
							],
							[
								{
									type:"门诊及住院医疗保险",
									typeDesc:"人寿为自己21扩充保障更全面，患病住院不用愁",
									src:"../../pages/news_detail/news_detail",
									img:"../../static/188.png",
									title:"终身癌症医疗保险",
									desc:"最高800万，终身保证续保",
									price:"¥6.64",
									detail:"/月起|赠送质子重离子"
								},
								{
									type:"门诊及住院医疗保险",
									typeDesc:"人寿为自己22扩充保障更全面，患病住院不用愁",
									src:"../../pages/news_detail/news_detail",
									img:"../../static/188.png",
									title:"终身癌症医疗保险",
									desc:"最高800万，终身保证续保",
									price:"¥6.64",
									detail:"/月起|赠送质子重离子"
								},
							],
						],
						[
							[
								{
								type:"门诊及住院医疗保险",
								typeDesc:"人寿为老人11扩充保障更全面，患病住院不用愁",
								src:"../../pages/news_detail/news_detail",
								img:"../../static/188.png",
								title:"终身癌症医疗保险",
								desc:"最高800万，终身保证续保",
								price:"¥6.64",
								detail:"/月起|赠送质子重离子"
								},
								{
								type:"门诊及住院医疗保险",
								typeDesc:"人寿为老人12扩充保障更全面，患病住院不用愁",
								src:"../../pages/news_detail/news_detail",
								img:"../../static/188.png",
								title:"终身癌症医疗保险",
								desc:"最高800万，终身保证续保",
								price:"¥6.64",
								detail:"/月起|赠送质子重离子"
								},
							],
							[
								{
									type:"门诊及住院医疗保险",
									typeDesc:"人寿为老人21扩充保障更全面，患病住院不用愁",
									src:"../../pages/news_detail/news_detail",
									img:"../../static/188.png",
									title:"终身癌症医疗保险",
									desc:"最高800万，终身保证续保",
									price:"¥6.64",
									detail:"/月起|赠送质子重离子"
								},
								{
									type:"门诊及住院医疗保险",
									typeDesc:"人寿为老人22扩充保障更全面，患病住院不用愁",
									src:"../../pages/news_detail/news_detail",
									img:"../../static/188.png",
									title:"终身癌症医疗保险",
									desc:"最高800万，终身保证续保",
									price:"¥6.64",
									detail:"/月起|赠送质子重离子"
								},
							],
						],
					],
				]
				
				
				
			};
		},
		methods:{
			firstTab1(){
				this.isactive1 = !(this.isactive1);
				this.isactive2 = false;
				this.isactive3 = false;
				this.isactive4 = false;
				this.index1 = 0;
			},
			firstTab2(){
				this.isactive2 = !(this.isactive2);
				this.isactive3 = false;
				this.isactive1 = false;
				this.isactive4 = false;
				this.index1 = 1;
			},
			firstTab3(){
				this.isactive3 = !(this.isactive3);
				this.isactive2 = false;
				this.isactive1 = false;
				this.isactive4 = false;
				this.index1 = 2;
				console.log(this.index1);
			},
			firstTab4(){
				this.isactive4 = !(this.isactive4);
				this.isactive2 = false;
				this.isactive1 = false;
				this.isactive3 = false;
				this.index1 = 3;
				console.log(this.index1);
			},
			secondTab(index){
				console.log(index)
				this.index2 = index;
				this.displayContent = this.content[this.index1][this.index2];
				console.log(this.displayContent);
			},
			openarlert(){
				this.isactive5 = true;
			},
			closealert(){
				this.isactive5 = false;
			}
		}
	}
</script>

<style lang="scss">
	
	.mask{
		position: fixed;
		left: 0;
		top:0;
		width: 100%;
		height: 100%;
		z-index: 99;
		background-color: rgba($color: #000000, $alpha: 0.6);
		display: none;
		.up{
			position: fixed;
			top: 300rpx;
			left: 10%;
			width: 80%;
			background-color: $bx-back-color2;
			border-radius: 20rpx;
			z-index: 999;
			.up-first{
				display: flex;
				justify-content: center;
				align-items: center;
				border-bottom: 1px solid $bx-main-color2;
				padding: 8px 20upx;
				.icon{
					width: 5%;
					margin-left: 30rpx;
					font-size: 20px;
				}
				.up-title{
					width: 95%;
					padding-right: 10%;
					font-size: 16px;
					color: $bx-main-color1;
					text-align: center;
				}
			}
			.up-content{
				color: $bx-main-color1;
				padding: 8px 20upx;
			}
		}
	}
	.active5{
		display: block !important;
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
	        border-top:1px solid $bx-back-color2 ;
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
	                .littleicon{
	                    margin-left: 6px;
	                    text-align: center;
	                    line-height: 14px;
	                    border: 1px solid $bx-main-color2;
	                    width: 12px;
	                    height: 12px;
	                    border-radius:50% ;
	                }
	                .alert-box{
						// position: fixed;
						// top: 300upx;
	     //                // background-color:#007AFF;
	     //                width: 70%;
						// margin: 0 auto;
	                }
	                
	            }
	        }
	        .wrap{
	            padding-top: 40rpx;
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
	                    padding-bottom: 30upx;
	                    margin-bottom: 30rpx;
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
	                        }
	                        .desc{
	                            font-size: 14px;
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
	                                
	                            }
	                            .detail{
	                                color: $bx-main-color2;
	                                
	                                font-size: 12px;
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
	
	.isshow{
	    display:block !important;
	}
	.active1{
	    border-bottom:2px solid $bx-main-color3;
	}
</style>

