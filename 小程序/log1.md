主色蓝色
#1195db深色
#17abe3
#7dc5eb最浅
module字体大小：
color: #555555;
font-size: 34rpx;
font-weight: 800;
34rpx
28rpx
30rpx
26rpx
快捷键：ctrl-f查找



一. vue语法大体格式：
1.data内，数组or对象
2.methods内，函数
1)template
@tap = "test()"
2)js
test(){
	
}

:url="'../../news_detail/news_detail?aid='+ item.article_id"
../../../static/search-grey.png

二. 跳转
1）相对于pages里的页面
url:"../../product_detail/product_detail?id=1"
'../../news_detail/news_detail?aid='+ item.article_id

url:"../product/product"
2）跳进tabbar
switchTap，"../product/product"
3）跳转接收参数
上个页面：
uni.navigateTo({
	url: "details?id="+id,
});
拿到到参数为字符串，id，aid最好不要下划线

跳转到到新页面
onLoad(option) {
	console.log(option.id)
},	
	
三. 云函数
1）vue页面
uniCloud.callFunction({
	name:"product",
	data:{
		test: 'testValue'
	},
	success(res){
		console.log(res.result)
	},
	fail(err) {
		console.error(err)
	}
})
vue调用云函数返回到结果里的result即为云函数严格模式里的res

传参数
2）云函数严格模式cloudfunctions

'use strict';

(数据库查询，)
const db = uniCloud.database()
const collection = db.collection("product-health11")

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	
	//返回数据给客户端
	let res = []
	let res1 = await collection.skip(0).limit(1).get()
	res.push(res1)
	console.log(res)
	return res.data
};

查询一个数据库，返回一个对象，对象里到属性data即为数组
如果出现 article offset must be interger，
article是什么？函数，那可能云函数写错了，或者云函数没有上传。
如果忘记了article是什么，从必须是整数推，哪里涉及到了整数

四. 数据库
查询一个数据库，返回一个对象，对象里到属性data即为数组

1.数据库操作
1）查询限条数
let res1 = await product1Collection.skip(0).limit(1).get()
查询带条件
let id = parseInt(event.id)
let res = await collection.where({
		id: id
	}).get()

2.数据查看
1）product
"product-health11"：全部门诊及住院医疗保险
"product-health12":全部重大疾病保险
“product-health21”：成人门诊及住院医疗保险
“product-health22”：成人重大疾病保险
“product-health31”：老人门诊及住院医疗保险
“product-health32”：老人重大疾病保险
“product-health41”：少儿门诊及住院医疗保险
“product-health42”：少儿重大疾病保险

"product-life"：人寿

"product-accident1"：意外伤害保险
"product-accident2"：出行保险

"product-annuity1"：教育金
"product-annuity2":养老金

"product-detail"：详细页网址，通过id查询

2）article
"articlelist"：文章简介1，1-36，43。。。
"articlelist2":文章简介2+标签，37-42
"articlelist3":文章简介3+小图标，46-48

"article"：文章详情，通过article_id查询
页面：'../../news_detail/news_detail?aid='+ item.article_id
url参数不能有下划线

3)video
页面：'../../video_detail/video_detail?vid='+ item.video_id

五. 渲染数据
1）加载的时候
将方法写在methods里，onLoad(){}里this调用

but：在组件中并不能使用页面生命周期函数，所以我直接将onLoad换成mounted

<script>
    export default {
        data() {
            return {  
                 itemList: []
            }
        },
        onLoad() {
                   this.getList();
               },
        methods: {
            getList() {
                uni.request({
                    url: '/api/test.json', 
                    success: (res) => {
                        console.log(res.data);
                         this.itemList =res.data.first;
                    }
                });
            }
        }
    }
</script>
2）点击的时候
3)多层嵌套逻辑
第一种方案：
a.数据库内的逻辑：
1个集合c里，1个数组a，多个对象o
多个集合c，1个数组里A，多个数组里a，数组里多个对象o
（创建一个新数组，把两个数组追加到新数组里）
b.vue页面渲染逻辑：
displayContent和content：从数据中取到到数据：[[{},{}],[{},{}]]
取7次数据，调用7次云函数

小标题：
v-for="(type,number) in displayContent" :key="number"
{{ type[0].type }}
只有一个产品的时候


内容在小标题里：
v-for="(content,count) in displayContent[number]" :key = "count"

小tips：key变量不要重复！防止出错使用出错

c.云函数返回的内容
首先看下面：
1、查询一个数据库，返回一个对象，对象里到属性data即为数组
2、console输出的内容
[[{},{}],[{},{}]]
(2)[Array(5),Array(3)]
数组内部嵌套两个数组，第一个数组内有5个对象，第二个数组有3个对象
3、出现了
12+6，数据库出现了问题。。。注意覆盖或者把已经有的数据删掉
最重结论是：
1、查询一个数据库，返回一个对象，对象里到属性data即为数组
2、vue调用云函数返回到结果里的result即为云函数严格模式里的res

第二种方案：
[[[{{},{}}]]]具体什么形式，附在最下方，虽然只需请求一次，不过数据结构过于复杂，不适合布局在数据库里


4）数据库查询云函数封装
a、vue页面调用时带data参数，js云函数event接受解构

ps：get带？参数网页，option在onload(option)接受
option对象.出来，是字符串，或者作为data时变为了字符串

console上的字符串和整数的颜色不同，
查询数据库时要精确的数据类型

				
secondTab(index){
				console.log(index)
				this.index2 = index;
				this.displayContent = this.content[this.index1][this.index2];
				console.log(this.displayContent);
				console.log(this.displayContent.content);
			},