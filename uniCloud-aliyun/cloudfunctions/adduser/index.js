'use strict';

const db = uniCloud.database();
const collection = db.collection("user")


exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event);
	let res1 = await collection.doc('openid').set({
		openid:event.openid,
		avatarUrl: event.avatarUrl,
		nickName: event.nickName
	})
	
	let res = {
		content:"上传数据成功"
	}
	//返回数据给客户端
	return res
};
