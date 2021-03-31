云函数：
1. [adduser]:查询参数对象值不能均为undefined

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

// bug：event：undefined

}).then(val =>{
	console.log(that.openid);
	// console.log(that.nickName);
	uniCloud.callFunction({
		
		name:"adduser",
		data:{
			openid: that.openid,
			avatarUrl: that.avatarUrl,
			nickName: that.nickName
		},
		success(res){
			console.log(上传成功);
			console.log(that.openid)
		},
		fail(err) {
			console.error(err)
		}
	})
})
1. 换掉了promise还是[adduser]:查询参数对象值不能均为undefined
2. 看看是不是that出现问题，将data改为字符串,还是undefined

最重要：看后台函数运行日志，请求入参中，没有openid，所以无法查询

担心重复可以直接：collection.doc('openid').set，而不要用add，set可以设置唯一的id和覆盖原来的