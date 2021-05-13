// components/component-tag-name.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type:Array,
      value:[
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
    showButton:{
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[]
  },
  lifetimes:{
    attached:function(){
      const l:any = this.data.data.map(v=>{
        const progress = [!!v.creationDate,!!v.signDate,!!v.startBoundDate,!!v.arriveTime]
        const cont = {
          type:'heavy',
          title: v.containerNo,
          time: v.creationDate,
          rightTitle: v.carNo,
          labels:[v.containerTypeMeaning,v.containerCategoryMeaning],
          progress:[!!v.creationDate,!!v.signDate,!!v.startBoundDate,!!v.arriveTime],
          buttonText: progress.every(v=>v===true)?'确认':'确认并提醒',
          showButton: this.data.showButton
        }

        return cont
      })
      // console.log('l.....',l,JSON.stringify(l[0]))
      this.setData({
        list: l
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
