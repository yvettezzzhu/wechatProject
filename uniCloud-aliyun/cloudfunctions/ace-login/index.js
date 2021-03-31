'use strict';
const crypto = require('crypto') //node自带模块
const jwt = require('./jwt.js')  //引入jwt-simple中的
const loginConfig = {
  AppId: 'wx423e9f56253bcea2', //微信小程序AppId
  AppSecret: '126ef4dc969cf09ad2a8e40c04e5f8ac' //微信小程序AppSecret
}
const passSecret = 'abc' //用于用户数据库密码加密的密钥，使用一个比较长的随机字符串即可
const tokenExp = 8000000
const db = uniCloud.database()
exports.main = async (event, context) => {
	let data = {
	  appid: loginConfig.AppId,
	  secret: loginConfig.AppSecret,
	  js_code: event.code,
	  grant_type: 'authorization_code'
	}
	const res = await uniCloud.httpclient.request('https://api.weixin.qq.com/sns/jscode2session', {  //向微信发送请求获取用户openId
	  method: 'GET',
	  data,
	  dataType: 'json'
	})
	
	const success = res.status === 200 && res.data && res.data.openid
	if (!success) {
	  return {
	    status: -2,
	    msg: '从微信获取登录信息失败'
	  }
	}
	const {
	  openid
	} = res.data
	let openidObj = {
	  openid
	}
	const userInfo = event.userInfo
	let tokenSecret = crypto.randomBytes(16).toString('hex'),
	  token = jwt.encode(openidObj, tokenSecret)
	const userInDB = await db.collection('ace-user').where({
	  openid
	}).get()
	
	let userUpdateResult
	if (userInDB.data && userInDB.data.length === 0) {
	  userUpdateResult = await db.collection('ace-user').add({  //没有该用户就新增
	    ...openidObj,
		...userInfo,
	    tokenSecret,
	    exp: Date.now() + tokenExp
	  })
	} else {
	  userUpdateResult = await db.collection('ace-user').doc(userInDB.data[0]._id).set({  //有该用户就修改
	    ...openidObj,
		...userInfo,
	    tokenSecret,
	    exp: Date.now() + tokenExp
	  })
	}
	
	if (userUpdateResult.id || userUpdateResult.updated === 1) {
		const userVal = await db.collection('ace-user').where({
		  openid
		}).get()
		return {
			status: 1,
			token,
			userInfo:userVal.data[0], //该用户的信息
			msg: '登录成功'
		}
	}
	
	return {
	  status: -1,
	  msg: '微信登录'
	}
}
