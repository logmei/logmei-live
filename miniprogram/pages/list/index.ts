
// components/component-tag-name.js
Page<any,any>({
  
  data:{
    scrollHeight: 500,
    page: 0,
    totalPages: 0,
    totalElements: 0,
    searchValue: '',
    list: [],
    isEmpty: true
  },

  onShow() {
    const that = this
    that.setData({
      scrollHeight: wx.getSystemInfoSync().windowHeight -20,
    })
  },

  getList() {
   console.log('getList....')
   this.setData({
    isEmpty: false
   })
  },

    handlerInput(e: { detail: { value: any } }){
      const that = this
      console.log('handlerInput 1111....')
      that.setData({
        searchValue: e.detail.value,
        page:0
      },()=>{
        if(e.detail.value==='test'){
          that.getList()
        } else {
          that.setData({
            isEmpty: true
          })
        }
      
       
      })
    },
    handlerClose(){
      const that = this
      console.log('handlerClose....')
      that.setData({
        searchValue: '',
        page: 0 
      },()=>{
        that.getList()
      })
    },
    handlerSearch(){
      console.log('handlerSearch....')
      this.getList()
    },
    bindscrolltolower(){
      const that = this
      if(this.data.page === this.data.totalPages-1) return
      this.setData({
        page: this.data.page+1
      },()=>{
        that.getList()
      })
    },
    onPullDownRefresh(){
      const that = this
      this.setData({
        searchValue: '',
        page:0
      },()=>{
        that.getList()
      })
    }
})
