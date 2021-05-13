Component({
  properties:{
    values:{
      type:Array,
      value:[true,false,true,true]
    }
  },
  data:{
    list:[
      {
        name:'提箱',
        index:0,
        lightUp:true,
      },
      {
        name:'封签',
        index:1,
        lightUp:true,
      },
      {
        name:'磅单',
        index:2,
        lightUp:false,
      },
      {
        name:'到达',
        index:3,
        lightUp:false,
      }
    ]
  },
  lifetimes:{
    attached: function() {
      // 在组件实例进入页面节点树时执行
      // console.log('attached',this.data)
      this.setData({
        list:this.data.list.map((v,index)=>{
          v.lightUp = this.data.values[index]
          return v
        } )
        })
    },
  }
})