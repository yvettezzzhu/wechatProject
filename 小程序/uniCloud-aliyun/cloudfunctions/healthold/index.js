'use strict';

//需要拿到的数据是健康老人
 
const db = uniCloud.database()
const product31Collection = db.collection("product-health31")
const product32Collection = db.collection("product-health32")


exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	let res = []
	let res1 = await product31Collection.get()
	res.push(res1.data)
	let res2 = await product32Collection.get()
	res.push(res2.data)
	// console.log(res)
	return res
};
