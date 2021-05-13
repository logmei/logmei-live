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
   focus: {
     type: Boolean,
     value: false
   },
   scrollHeight: {
     type: Number,
     value: 500
   }
  },
  data:{
    searchValue:'',
    refresherTriggered: false
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handlerInput: function(e){
      console.log('list searchhandlerInput....',e.detail.value)
      this.triggerEvent('searchinput',{value:e.detail.value})// 点击事件
      this.setData({
        searchValue: e.detail.value
      })
    },
    handlerTap: function(e){
      console.log('list bindtap....',e.detail.value)
      this.triggerEvent('searchtap',{value:e.detail.value})// 点击事件
    },
    handlerClose: function(){
      this.triggerEvent('close',{}) // 关闭
      this.setData({
        searchValue: ''
      })
    },
    handlerSearch: function(e){
      this.triggerEvent('search',{value:e.detail.value}) // 查询
      this.setData({
        searchValue: e.detail.value
      })
    },
    bindrefresherrefresh: function(){
      this.triggerEvent('bindrefresherrefresh',{value:this.data.value}) // 查询
      this.setData({
        refresherTriggered: true
      })
    },
    bindscrolltolower: function(){
      console.log('list scrolltolower....',this.data.value)
      this.triggerEvent('scrolltolower',{value:this.data.value}) // 查询
    }
  }
})
