'use strict';

//需要拿到的数据是健康成人
 
const db = uniCloud.database()
const product21Collection = db.collection("product-health21")
const product22Collection = db.collection("product-health22")


exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	let res = []
	let res1 = await product21Collection.get()
	res.push(res1.data)
	let res2 = await product22Collection.get()
	res.push(res2.data)
	// console.log(res)
	return res
};
