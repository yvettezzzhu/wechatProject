<template>
	<view>
		<view class="nav">
			<view class="left">
				<view class="start">|</view>
				<view class="content">新手指南</view>
			</view>
		</view>
		<view class="big-box">
			<view class="tab-button-box">
				<view class="first">
					<view class="forwho normal" @click="firstTab1()" :class="{ active1: isactive1}">
						<image src="../../static/product.png" mode="scaleToFill" style="width: 20px;height: 20px;"></image>
						<view class="text">
							为谁买
						</view>
					</view>
					<view class="buywhat normal" @click="firstTab2()" :class="{ active1: isactive2}">
						<image src="../../static/product.png" mode="scaleToFill" style="width: 20px;height: 20px;"></image>
						<view class="text">
							买什么
						</view>
					</view>
					<view class="howbuy normal" @click="firstTab3()" :class="{ active1: isactive3}">
						<image src="../../static/product.png" mode="scaleToFill" style="width: 20px;height: 20px;"></image>
						<view class="text">
							怎么买
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
			<view class="tab-content">
				<view class="colordesc">
					{{ displayContent.desc }}
				</view>
				<view class="colorbox">
					<view class="colortitle">
						<view class="num">
							01
						</view>
						<view class="innertitle">
							{{displayContent.title}}
						</view>
					</view>
					<view v-html="displayContent.content" class="colorcontent">
					</view>
				</view>
				<navigator :url="'../../news_detail/news_detail?aid='+ displayContent.article_id">展开</navigator>
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
				tab1:[
					"为自己",
					"为孩子",
					"为老人",
				],
				tab2:[
					"重疾",
					"医疗",
					"意外",
					"寿险",
					"年金",
					
				],
				tab3:[
					"网上保险",
					"保险经纪",
					
				],
				displayContent:{
							desc:"10分钟，知道自己该买什么保险",
							title:"人生保险配置组合方案：1＋4",
							content:"“1”，即社保。社保是当之无愧的保险之王，是最最最重要的医疗保障和养老保障。社保的医疗保障平时看病可以报销50%-90%，累计满25年，就可以终身看病报销。可以毫不夸张的说，社保卡比银行卡都宝贝。而且社保我们自己只需交1/3，公司交2/3，不够国家还会补贴几千亿。社保可以说是每个人必备的基础保险，有了社保才有资格谈商业保险配置。",
							article_id:26
						},
				content:[
					[
						{
							desc:"10分钟，知道自己该买什么保险",
							title:"人生保险配置组合方案：1＋4",
							content:"“1”，即社保。社保是当之无愧的保险之王，是最最最重要的医疗保障和养老保障。社保的医疗保障平时看病可以报销50%-90%，累计满25年，就可以终身看病报销。可以毫不夸张的说，社保卡比银行卡都宝贝。而且社保我们自己只需交1/3，公司交2/3，不够国家还会补贴几千亿。社保可以说是每个人必备的基础保险，有了社保才有资格谈商业保险配置。",
							article_id:26
						},
						{
							desc:"给孩子买保险，99%的父母都有这样的误区",
							title:"少儿医保",
							content:"少儿医保又叫少儿互助金，是一款由政府主办，各级财政补助的非盈利性质保险，同时也是唯一一款不会因为健康情况就拒保的保险且费率便宜，2019年的保费标准是200元一年，建议每个宝宝必上！！值得注意的是，除新生儿外，当年的少儿互助金都需要提前一年购买，一旦错过将不能补办",
							article_id:27
						},
						{
							desc:"给爸妈的保障，要做足这3层",
							title:"老人为什么要买保险",
							content:"随着年龄的增长，老人的免疫力逐渐下降，身体状况大不如前，很多病痛会自己找上门来，像颈椎、腰椎、骨质疏松等，都是比较常见的问题。更严重的有糖尿病、冠心病、癌症等，这些病痛不仅让身心深受折磨，长期且高昂的治疗费用，更是让人焦头烂额。",
							article_id:28
						},
					],
					[
						{
							desc:"重疾险大测评，值得买的，都在这儿了",
							title:"注重性价比的朋友，选单次赔付型",
							content:"达尔文5号焕新版、康惠保旗舰版2.0、康乐一生都很不错。达尔文5号焕新版：重/中/轻症比例超高，重/中/轻症赔得多。康惠保旗舰版2.0：保前症，理赔门槛更低；而且可自由勾选中/轻症保障。康乐一生2021：性价比高，重疾险额外赔得多，最高可赔200%保额。",
							article_id:29
						},
						{
							desc:"2021年，哪款医疗险值得买",
							title:"购买百万医疗险，需要注意的关键点",
							content:"百万医疗险不像重疾险和寿险，它是不保证终身续保的。这就意味着，一旦我们的健康状况出现问题，而投保的百万医疗险又停售，想要通过一款新产品的健康告知，并不容易。因此，选择百万医疗险，不仅要看保障责任、价格、免责条款、续保条款等常规内容；",
							article_id:30
						},
						{
							desc:"意外险榜单：买份意外险，家人更放心",
							title:"儿童意外险，这几款最值得买",
							content:"平安少儿险2020版：住院医疗保额高、门急诊有单独保额这款产品的住院医疗保额最低5万元，升级版达到10万，不是特别严重的疾病手术治疗费用，这个保额已经够用了。而意外门急诊有单独的5000元保额，也是比较充足的。",
							article_id:31
						},
						{
							desc:"全网最全寿险攻略，50款寿险测评",
							title:"一年期寿险、定期寿险、终身寿险",
							content:"一年期寿险买一年保一年，但是不可避免的存在两个问题：一是大多数产品不能保证续保，今年甲状腺问题恶化了，明年保险公司判定死亡风险大了，就不给续了。",
							article_id:32
						},
						{
							desc:"开门红年金险合集！哪款收益更高？",
							title:"2021开门红年金险有哪些？",
							content:"华夏福临门财富版这款开门红年金险产品的投保年龄为0-70岁，投保年龄范围比较广，保障期限为10年，缴费期限可选3/5年交，投保也算比较灵活。它的年金领取时间约定为第五个保单年，3年交的情况下，匆第5个保单年开始，每年可以领取年交保费的60%；5年交的情况下，从第5个保单年开始，每年可以领取100%年交保费。",
							article_id:33
						},
					],
					[
						{
							desc:"在支付宝上买 or 去保险公司买？",
							title:"支付宝的重疾险，哪款值得买？",
							content:"重疾险，名字就给人满满的安全感，往往是不少人购买保险时的第一选择。支付宝上的重疾险主打的是健康福系列，分为保障终身、保20年/30年、保一年、少儿版等几个版本。选择不多，没有让我眼前一亮的产品；但保障简单实用，都在及格线以上。",
							article_id:34
						},
						{
							desc:"找保险经纪买 or 去保险公司买？",
							title:"最近亲历的案例",
							content:"第一个案例：客户甲，有肝血管瘤和宫颈糜烂；当然宫颈糜烂本身不算疾病，是一种正常的生理现象，但是问题就出在这里。当时为了争取肝血管瘤最好的核保结果，选择了两家公司：天*和华*；天*的核保结果是肝血管瘤除外；华*的核保结果是肝血管瘤正常承保，但是因为宫颈糜烂把子宫疾病除外了；我想请问下如果是客户自己在保险公司买的话，会不会知道接下来应该怎么办？我的做法，找了华*公司的各级人员，据理力争，甚至差点撕破脸，要求重新核保，最终去掉了子宫的除外，变成了标体承保。",
							article_id:35
						},
		
					]
				]
			};
		},
		methods:{
			firstTab1(){
				this.isactive1 = !(this.isactive1);
				this.isactive2 = false;
				this.isactive3 = false;
				this.index1 = 0;
				this.index2 = 0;
				this.displayContent = this.content[this.index1][this.index2];
			},
			firstTab2(){
				this.isactive2 = !(this.isactive2);
				this.isactive3 = false;
				this.isactive1 = false;
				this.index1 = 1;
				this.index2 = 0;
				this.displayContent = this.content[this.index1][this.index2];
			},
			firstTab3(){
				this.isactive3 = !(this.isactive3);
				this.isactive2 = false;
				this.isactive1 = false;
				this.index1 = 2;
				this.index2 = 0;
				this.displayContent = this.content[this.index1][this.index2];
				console.log(this.index1);
			},
			secondTab(index){
				this.index2 = index;
				this.displayContent = this.content[this.index1][this.index2];
				console.log(this.displayContent);
			},
			
		}
	}
</script>

<style lang="scss">
	
	.nav{
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 30px;
		.left{
			width: 100%;
			margin-top: 40rpx;
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
	.big-box{
		.tab-button-box{
			padding-bottom: 30upx;
			.first{
				display: flex;
				justify-content: space-between;
				// background-color: #2C405A;
				padding: 16px 30upx;
				padding-bottom: 20upx;
				.normal{
					// background-color: #007AFF;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 20rpx 10px;
					border-radius: 10rpx;
					border:2px solid $bx-back-color2;
					
					.text{
						margin-left: 10rpx;
					}
				}
			}
			.second{
				.scroll{
					// background-color: #007AFF;
					white-space: nowrap;
					width: 100%;
					// background-color: $bx-base-color;
					padding-left-right: 20rpx;
					display: none;
						.box{
							width: 140rpx;
							
							display: inline-block;
							text-align: center;
							view{
								height: 24px;
								border-radius: 24px;
								border: 1px solid $bx-main-color2;
								// border-color: $bx-main-color3;
								margin-left: 30rpx;
								// background-color: #007AFF;
							}
							.active3{
								color: $bx-main-color3 !important;
							}
						}
							.box-text{
								font-size: 12px;
								height: 24px;
								line-height: 24px;
								color: #afafaf;
							}
							.active3{
								color: $bx-main-color3;
							}
							
				}
			}
		}
		.tab-content{
			background-color: #eff2f5;
			padding-left: $bx-padding;
			padding-right: $bx-padding;
			.colordesc{
				height: 50px;
				font-size: 16px;
				font-weight: 600;
				color: $bx-main-color3;
				line-height: 50px;
				text-align: center;
				// background-color: #333333;
			}
			.colorbox{
				border-top-left-radius: 20rpx;
				border-top-right-radius: 20rpx;
				background-color: $bx-back-color1;
				padding: 20rpx;
				height: 80px;
				.colortitle{
					.num{
						font-size: 16px;
						font-weight: 600;
						color: $bx-main-color3;
						display: inline-block;
						margin-right: 10rpx;
					}
					.innertitle{
						display: inline-block;
					}
				}
				.colorcontent{
					margin-top: 10rpx;
					height: 60px;
					font-size: 12px;
					font-weight: 300;
					word-break: keep-all;
					word-wrap: break-word;
					white-space: pre-line;
					overflow: hidden;
				}
			}
			navigator{
				color: #5428ee;
				font-size: 14px;
				height: 20px;
				padding-top: 6px;
				padding-bottom: 4px;
				text-align: center;
				font-weight: 400;
				background-color: $bx-back-color1;
			}
	}
	}
	.isshow{
		display:block !important;
	}
	.active1{
		background-color: #9484ff;
		color: $bx-back-color1;
	}
	
	
</style>
