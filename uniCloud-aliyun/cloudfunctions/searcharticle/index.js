'use strict';


const db = uniCloud.database()
const collection = db.collection("article")

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event.keywords)
	var reg = event.keywords
	//返回数据给客户端
	
	let res = await collection.where({
			title: new RegExp(reg)
		}).limit(5).get()
	
	console.log(res.data)
	return res.data
};