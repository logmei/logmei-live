// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    wx.getSystemInfo(
      {success:(res)=>{
        console.log('systeminfo',res)
      }}
    )
    console.log('onLaunch 小程序初始化...')
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            },
          })
        }
      },
    })
  },
  onShow:function(){
    console.log('onshow 小程序启动或切前台')
  },
  onHide:function(){
    console.log('onHide 小程序切后台')
  },
  onError:function(){
    console.log('onError 错误监听函数')
  },
  onPageNotFound:function(){
    console.log('onPageNotFount 页面不存在监听函数')
  },
  onUnhandledRejection:function(){
    console.log('onUnhandledRejection 未处理的promise拒绝事件监听函数')
  }
})