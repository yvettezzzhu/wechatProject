'use strict';


exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let id = parseInt(event.vid)
	const db = uniCloud.database()
	const collection = db.collection('video')
	const res = await collection.where({
		video_id: id
	}).get()
	//返回数据给客户端
	return res.data
};
