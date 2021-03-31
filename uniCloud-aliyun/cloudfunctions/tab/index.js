'use strict';

const db = uniCloud.database()
const tabCollection = db.collection('tab')

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	//返回数据给客户端
	let res = await tabCollection.get()
	return res
};
