'use strict';

const db = uniCloud.database();
const collection = db.collection("user")
var res = "ok"

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event);
	let res1 = await collection.where({
		openid: event.openid
	}).get()
	if(res1 == []){
		let res2 = await collection.add({
			openid: event.openid,
			avatarUrl: event.avatarUrl,
			nickName: event.nickName
		})
	}
	
	
	//返回数据给客户端
	return res
};
