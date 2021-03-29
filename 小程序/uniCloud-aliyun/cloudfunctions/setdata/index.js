'use strict';

const db = uniCloud.database()
const collection = db.collection("user")

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	
	//返回数据给客户端
	const res = await collection.doc(event.openid).set({
		
	})
	return res.data
};
