
// components/component-tag-name.js
Page({
  /**
   * 组件的属性列表
   */
  properties: {
    showSearch:{
     type: Boolean,
     value:true
   },
   showClose:{
     type: Boolean,
     value: true
   },
   placeholder:{
     type: String,
     value:'搜索'
   },
   value:{
     type: String,
     value:''
   },
   focus:{
     type: Boolean,
     value: true
   }
  },
  data:{
    page: 0,
    totalPages: 0,
    totalElements: 0,
    scrollHeight: 500,
    searchValue: '',
    date: '',
    isEmpty: true,
    list:[
      {
        time:'2021-2-23 23:23',
        count:'4',
        data:[
          {
            "id": 8577770781534054,
            "containerNo": "TBJU2345671",
            "containerType": "dgI!!g",
            "containerCategory": "!mOvn",
            "containerTypeMeaning": "铁路箱",
            "containerCategoryMeaning": "35吨通用集装箱",
            "creationDate": "2021-2-23 23:23",
            "signDate": "",
            "startBoundDate": "",
            "arriveTime": "",
            "carNo": "京ABK898"
        },
        {
          "id": 8577770781534054,
          "containerNo": "TBJU2345672",
          "containerType": "dgI!!g",
          "containerCategory": "!mOvn",
          "containerTypeMeaning": "铁路箱",
          "containerCategoryMeaning": "35吨通用集装箱",
          "creationDate": "2021-2-23 23:23",
          "signDate": "2021-2-23 23:23",
          "startBoundDate": "",
          "arriveTime": "",
          "carNo": "京ABK898"
      },
      {
        "id": 8577770781534054,
        "containerNo": "TBJU2345673",
        "containerType": "dgI!!g",
        "containerCategory": "!mOvn",
        "containerTypeMeaning": "铁路箱",
        "containerCategoryMeaning": "35吨通用集装箱",
        "creationDate": "2021-2-23 23:23",
        "signDate": "2021-2-23 23:23",
        "startBoundDate": "2021-2-23 23:23",
        "arriveTime": "2021-2-23 23:23",
        "carNo": "京ABK898"
    },
        ]
      },
      {
        time:'2021-4-23 23:23',
        count:'4',
        data:[
          {
            "id": 8577770781534054,
            "containerNo": "TBJU2345671",
            "containerType": "dgI!!g",
            "containerCategory": "!mOvn",
            "containerTypeMeaning": "铁路箱",
            "containerCategoryMeaning": "35吨通用集装箱",
            "creationDate": "2021-2-23 23:23",
            "signDate": "",
            "startBoundDate": "",
            "arriveTime": "",
            "carNo": "京ABK898"
        },
        {
          "id": 8577770781534054,
          "containerNo": "TBJU2345672",
          "containerType": "dgI!!g",
          "containerCategory": "!mOvn",
          "containerTypeMeaning": "铁路箱",
          "containerCategoryMeaning": "35吨通用集装箱",
          "creationDate": "2021-2-23 23:23",
          "signDate": "2021-2-23 23:23",
          "startBoundDate": "",
          "arriveTime": "",
          "carNo": "京ABK898"
      },
      {
        "id": 8577770781534054,
        "containerNo": "TBJU2345673",
        "containerType": "dgI!!g",
        "containerCategory": "!mOvn",
        "containerTypeMeaning": "铁路箱",
        "containerCategoryMeaning": "35吨通用集装箱",
        "creationDate": "2021-2-23 23:23",
        "signDate": "2021-2-23 23:23",
        "startBoundDate": "2021-2-23 23:23",
        "arriveTime": "2021-2-23 23:23",
        "carNo": "京ABK898"
    },
        ]
      }
    ]
  },
  bindDateChange(e: any) {
    console.log(e.detail.value)
    this.setData({
      date: e.detail.value,
      page: 0,
    }, () => {
      this.getList()
    })
  },

  onShow() {
    const that = this
    that.setData({
      scrollHeight: wx.getSystemInfoSync().windowHeight - 20,
    })
  },
  getList() {
    console.log('getlist....')
    this.setData({
      isEmpty : false
    })
  },

    handlerInput(e: { detail: { value: any } }){
      console.log('handlerInput....')
      this.setData({
        searchValue: e.detail.value,
        page:0
      },()=>{
        this.getList()
      })
    },
    handlerClose(){
      console.log('handlerClose....')
      this.setData({
        searchValue: '',
        page: 0 
      },()=>{
        this.getList()
      })
    },
    handlerSearch(e: { detail: { value: any } }){
      console.log('handlerSearch....')
      this.getList()
    },
    bindscrolltolower(){
      if(this.data.page === this.data.totalPages-1) return
      this.setData({
        page: this.data.page+1
      },()=>{
        this.getList()
      })
    },
    onPullDownRefresh(){
      this.setData({
        searchValue: '',
        page:0
      },()=>{
        this.getList()
      })
    }
})
