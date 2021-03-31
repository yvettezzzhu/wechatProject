'use strict';

const db = uniCloud.database()
const collection = db.collection("video")

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event.test)
	
	
	//返回数据给客户端
	
	let res = await collection.get()
	console.log(res.data)
	return res.data
};
