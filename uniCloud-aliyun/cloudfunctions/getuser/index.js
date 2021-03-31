'use strict';
const db = uniCloud.database()
const collection = db.collection("user")

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	
	//返回数据给客户端
	
	let res1 = await collection.where({
		openid:event.openid
	}).skip(0).limit(1).get()
	
	return res1.data
};
