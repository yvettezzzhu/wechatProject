'use strict';

//需要到数据是健康全部
 
const db = uniCloud.database()
const product11Collection = db.collection("product-health11")
const product12Collection = db.collection("product-health12")


exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	let res = []
	let res1 = await product11Collection.get()
	res.push(res1.data)
	let res2 = await product12Collection.get()
	res.push(res2.data)
	// console.log(res)
	return res
};