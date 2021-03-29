'use strict';

//需要拿到的数据是健康少儿
 
const db = uniCloud.database()
const product41Collection = db.collection("product-annuity1")
const product42Collection = db.collection("product-annuity2")


exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	let res = []
	let res1 = await product41Collection.get()
	res.push(res1.data)
	let res2 = await product42Collection.get()
	res.push(res2.data)
	// console.log(res)
	return res
};
