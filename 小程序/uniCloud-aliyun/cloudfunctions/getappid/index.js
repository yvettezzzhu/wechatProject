'use strict';
'use strict';
const crypto = require('crypto') //node自带模块
const jwt = require('./jwt.js')  //引入jwt-simple中的
const loginConfig = {
  AppId: 'wx423e9f56253bcea2', //微信小程序AppId
  AppSecret: '126ef4dc969cf09ad2a8e40c04e5f8ac' //微信小程序AppSecret
}
const passSecret = 'abc' //用于用户数据库密码加密的密钥，使用一个比较长的随机字符串即可
const tokenExp = 8000000

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	return res
};
