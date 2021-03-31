'use strict';


exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event.article_id)
	let article_id = parseInt(event.article_id)
	const db = uniCloud.database()
	const collection = db.collection("article")
	const res = await collection.where({
		article_id: article_id
	}).get()
	//返回数据给客户端
	return res.data
};