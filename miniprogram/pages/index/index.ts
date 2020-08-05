// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
Page({

  data: {
    background: ['../../statics/images/WX20200803-191026.png', '../../statics/images/WX20200803-191100.png', '../../statics/images/WX20200803-191127.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    list:[
      {
        src:'../../statics/images/history.png',
        title:'sky_1'
      }, {
        src:'../../statics/images/gift.png',
        title:'sky_2'
      }, {
        src:'../../statics/images/data.png',
        title:'sky_3'
      }, {
        src:'../../statics/images/credit-level.png',
        title:'sky_4'
      }, {
        src:'../../statics/images/beauty.png',
        title:'sky_5'
      }, {
        src:'../../statics/images/bags.png',
        title:'sky_6'
      }, {
        src:'../../statics/images/pic.png',
        title:'sky_7'
      },
    ],
    menus:[
      {
        src:'../../statics/images/menu_1.png',
        title:'特权管理'
      }, {
        src:'../../statics/images/menu_2.png',
        title:'任务宝'
      }, {
        src:'../../statics/images/menu_3.png',
        title:'优惠券'
      },
    ]
  },
  tapShow(){
    
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  formSubmit(e:any){
    console.log('form发生了submit事件',e,e.detail.value)
  },
  getUserInfo(e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
  },
  onPullDownRefresh(){
    console.log('下拉刷新')
  },
  pulldownHandler(e:any){
    console.log('pulldownHandler.......',e)
    if(e.target.dataset.type==='start'){
      wx.startPullDownRefresh({success:()=>console.log('监听下拉刷新开始')})
    }
    if(e.target.dataset.type==='stop'){
      wx.stopPullDownRefresh({success:()=>console.log('监听下拉刷新结束')})
    }
  }

})
