'use strict';

const uniID = require('uni-id')
exports.main = async (event) => {
	/* 如果你通过云函数Url访问
	 * 使用GET时参数位于event.queryStringParameters
	 * 使用POST时参数位于event.body
	 * 请自行处理上述场景
	 */
	let params = event.params || {}
	let payload = {}
	let noCheckAction = ['register', 'checkToken', 'encryptPwd', 'login', 'loginByWeixin', 'sendSmsCode',
		'setVerifyCode', 'loginBySms', 'loginByEmail', 'code2SessionWeixin', 'code2SessionAlipay'
	]
	if (noCheckAction.indexOf(event.action) === -1) {
		if (!event.uniIdToken) {
			return {
				code: 403,
				msg: '缺少token'
			}
		}
		payload = await uniID.checkToken(event.uniIdToken, {
			needPermission: true
		})
		if (payload.code && payload.code > 0) {
			return payload
		}
		params.uid = payload.uid
	}
	let res = {}

	switch (event.action) {
		case 'register':
			{
				const {
					username,
					password,
					needPermission
				} = params
				res = await uniID.register({
					username,
					password,
					needPermission
				});
				break;
			}
		case 'login':
			{
				const {
					username,
					password,
					needPermission
				} = params
				res = await uniID.login({
					username,
					password,
					needPermission,
					// 不指定queryField的情况下只会查询username
					queryField: ['username', 'email', 'mobile']
				});
				break;
			}
		case 'logout':
			res = await uniID.logout(event.uniIdToken);
			break;
		case 'updatePwd':
			{
				const {
					uid,
					oldPassword,
					newPassword
				} = params
				res = await uniID.updatePwd({
					uid,
					oldPassword,
					newPassword
				});
				break;
			}
		case 'setAvatar':
			{
				const {
					uid,
					avatar
				} = params
				res = await uniID.setAvatar({
					uid,
					avatar
				});
				break;
			}
		case 'bindMobile':
			{
				const {
					uid,
					mobile,
					code
				} = params
				res = await uniID.bindMobile({
					uid,
					mobile,
					code
				});
				break;
			}
		case 'unbindMobile':
			{
				const {
					uid,
					mobile,
					code
				} = params
				res = await uniID.unbindMobile({
					uid,
					mobile,
					code
				});
				break;
			}
		case 'bindEmail':
			{
				const {
					uid,
					email,
					code
				} = params
				res = await uniID.bindEmail({
					uid,
					email,
					code
				});
				break;
			}
		case 'unbindEmail':
			{
				const {
					uid,
					email,
					code
				} = params
				res = await uniID.unbindEmail({
					uid,
					email,
					code
				});
				break;
			}
		case 'code2SessionWeixin':
			{
				const {
					code
				} = params
				res = await uniID.code2SessionWeixin({
					code: event.code
				});
				break;
			}
		case 'loginByWeixin':
			{
				const {
					code
				} = params
				res = await uniID.loginByWeixin({
					code
				});
				break;
			}
		case 'bindWeixin':
			{
				const {
					uid,
					code
				} = params
				res = await uniID.bindWeixin({
					uid,
					code
				});
				break;
			}
		case 'unbindWeixin':
			res = await uniID.unbindWeixin(params.uid);
			break;
		case 'code2SessionAlipay':
			{
				const {
					code
				} = params
				res = await uniID.code2SessionAlipay({
					code
				});
				break;
			}
		case 'loginByAlipay':
			{
				const {
					code
				} = params
				res = await uniID.loginByAlipay({
					code
				});
				break;
			}
		case 'bindAlipay':
			{
				const {
					uid,
					code
				} = params
				res = await uniID.bindAlipay({
					uid,
					code
				});
				break;
			}
		case 'unbindAlipay':
			{
				res = await uniID.unbindAlipay(params.uid);
				break;
			}
		case 'checkToken':
			// 注意3.0.0版本取消了checkToken接口返回的用户信息
			res = await uniID.checkToken(event.uniIdToken, {
				needPermission: true
			})
			break;
		case 'resetPwd':
			res = await uniID.resetPwd({
				uid: params.uid,
				password: '123456'
			});
			break;
		case 'encryptPwd':
			const password = await uniID.encryptPwd('123456');
			res = {
				code: 0,
				msg: '密码加密完成',
				password
			}
			break;
		case 'sendSmsCode':
			{
				const {
					mobile,
					code,
					type
				} = params
				const templateId = ''
				if (templateId === '') {
					throw new Error('sendSmsCode接口需要传入templateId来指定所使用的短信模板')
				}
				res = await uniID.sendSmsCode({
					mobile,
					code,
					type,
					templateId
				});
				break;
			}
		case 'setVerifyCode':
			{
				const {
					mobile,
					code,
					type
				} = params
				res = await uniID.setVerifyCode({
					mobile,
					code,
					type
				});
				break;
			}
		case 'loginBySms':
			{
				const {
					mobile,
					code
				} = params
				res = await uniID.loginBySms({
					mobile,
					code
				});
				break;
			}
		case 'loginByEmail':
			{
				const {
					email,
					code
				} = params
				res = await uniID.loginByEmail({
					email,
					code
				});
				break;
			}
		case 'updateUser':
			{
				const {
					uid,
					nickname
				} = params
				res = await uniID.updateUser({
					uid,
					nickname
				});
				break;
			}
		case 'setUserInviteCode':
			{
				const {
					uid,
					// myInviteCode 不指定myInviteCode，自动获取
				} = params
				res = await uniID.setUserInviteCode({
					uid
				});
				break;
			}
		case 'acceptInvite':
			{
				const {
					uid,
					inviteCode
				} = params
				res = await uniID.acceptInvite({
					uid,
					inviteCode
				});
				break;
			}
		case 'addRole':
			{
				const {
					roleID,
					roleName,
					comment,
					permission
				} = params
				res = await uniID.addRole({
					roleID,
					roleName,
					comment,
					permission
				});
				break;
			}
		case 'getRoleList':
			{
				const {
					offset,
					limit,
					needTotal
				} = params
				res = await uniID.getRoleList({
					offset,
					limit,
					needTotal
				});
				break;
			}
		case 'addPermission':
			{
				const {
					permissionID,
					permissionName,
					comment
				} = params
				res = await uniID.addPermission({
					permissionID,
					permissionName,
					comment
				});
				break;
			}
		case 'getPermissionList':
			{
				const {
					offset,
					limit,
					needTotal
				} = params
				res = await uniID.getPermissionList({
					offset,
					limit,
					needTotal
				});
				break;
			}
		case 'getRoleByUid':
			{
				const {
					uid
				} = params
				res = await uniID.getRoleByUid({
					uid
				});
				break;
			}
		case 'bindRole':
			{
				const {
					roleList,
					// 设置reset为true，整体覆盖。设置为false时增量更新role
					reset,
				} = params
				res = await uniID.bindRole({
					roleList,
					reset,
				});
				break;
			}
		case 'bindPermission':
			{
				const {
					roleID,
					permissionList,
					// 设置reset为true，整体覆盖。设置为false时增量更新role
					reset,
				} = params
				res = await uniID.bindPermission({
					roleID,
					permissionList,
					reset,
				});
				break;
			}
		default:
			res = {
				code: 403,
				msg: '非法访问'
			}
			break;
	}

	//返回数据给客户端
	return res
};
