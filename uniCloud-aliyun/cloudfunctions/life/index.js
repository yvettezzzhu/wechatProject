'use strict';

//需要拿到的数据是人寿
 
const db = uniCloud.database()
const productCollection = db.collection("product-life")


exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	let res = []
	let res1 = await productCollection.get()
	res.push(res1.data)
	// console.log(res)
	return res
};
