'use strict';

//需要拿到的数据是健康少儿
 
const db = uniCloud.database()
const accident1Collection = db.collection("product-accident1")
const accident2Collection = db.collection("product-accident2")


exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	let res = []
	let res1 = await accident1Collection.get()
	res.push(res1.data)
	let res2 = await accident2Collection.get()
	res.push(res2.data)
	// console.log(res)
	return res
};
