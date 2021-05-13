// components/component-tag-name.js
Component({
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
     value: false
   },
   prefix:{
     type: String,
     value:'search'// date
   }
  },

  
  /**
   * 组件的方法列表
   */
  methods: {
    handlerInput: function(e){
      console.log('handlerInput....',e.detail.value)
      this.triggerEvent('searchinput',{value:e.detail.value})// 点击事件
    },
    handlerTap: function(){
      console.log('bindtap....',this.data.value)
      this.triggerEvent('searchtap',{value:this.data.value})// 点击事件
    },
    handlerClose: function(e){
      console.log('handlerClose....')
      this.triggerEvent('close',{}) // 关闭
    },
    handlerSearch: function(){
      this.triggerEvent('search',{value:this.data.value}) // 查询
    }
  }
})
