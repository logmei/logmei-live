
// components/component-tag-name.js
Page<any,any>({
 
  data:{
  },

  onShow() {
   
  },
  handlerTapList(e){
    console.log('list....',e)
    switch (e.target.dataset.id){
      case "list":
        wx.navigateTo({
          url:'/pages/list/index'
        })
        break;
        case 'customList':
          wx.navigateTo({
            url:'/pages/custom-list/index'
          })
          break;
        default:

    }
  }
})
