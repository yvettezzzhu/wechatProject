登录
1. 体验范围开放：是否允许用户体验后授权，是否有取消按钮取消登录
授权个人信息功能后置（登录页面）

2. 体验范围特定：登录是否鉴权识别，是否有特定人群说明

登录的逻辑：
1. 在有效期内登录uni.getSetting
在的话：不用获取用户信息（display:none)，不用提交客户信息，直接获取openid（getappid，uni.login），去数据库取信息（getuser，展示）
不在的话：display授权登录，获取客户信息（bindGetUserInfo，头像，昵称等，并展示），获取openid（getappid，uni.login），提交用户信息（adduser）

同步与异步
1. 概念
同步一步一步往后执行
异步（非阻塞）：主逻辑（同步）和异步逻辑，主逻辑不需等异步逻辑完成，异步逻辑相互独立执行

2.异步包括如下：
$.ajax({ })
setTimeout({})

3.回调地狱：异步逻辑层层嵌套
解决方法：promise
const p = new Promise((resolve,reject) => {
	setTimeout(()=>{})
})
接收数据
resolve(" ") ===== then(res)

顺序执行：
1. promise同步主线程
2. then后微任务晚于主线程（要有resolve通知加入微任务）
3. 宏任务setTimeout,请求URL，请求数据库等，最后
4. 延迟处理，p2的resolve(p1)；等p1执行完，才会执行p2，且可以改变resolve还是reject
5. p1.then().then(),p1内有reject，第一个then走第二个参数reject是reject返回的，第二个then走第一个参数，返回的值是undefined
顺序是执行完then1再执行then2
6. 在then返回 return new Promise()里面可以选择resolve或reject，接下来的then可以接收
7. 解决回调地狱：
1）将宏任务套在promise里，执行完宏任务resolve，then才会执行
2）then里也有宏任务，then可以返回promise，将另一个宏任务也套在promise里，同样执行完宏任务接上resolve，后面的then才会执行
3）最后一个then可以直接放宏任务，不用再返回

new Promise(resolve => {
    setTimeout(() => {
      resolve('hello')
    }, 2000)
  }).then(val => {
    console.log(val) //  参数val = 'hello'
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('world')
      }, 2000)
    })
  }).then(val => {
    console.log(val) // 参数val = 'world'
  })