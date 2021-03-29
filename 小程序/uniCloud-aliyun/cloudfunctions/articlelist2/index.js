'use strict';
const db = uniCloud.database()
const collection = db.collection("articlelist2")

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event.skip)
	
	
	//返回数据给客户端
	
	let res = await collection.skip(event.skip).limit(3).get()
	
	console.log(res.data)
	return res.data
};
