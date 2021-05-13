
Component({
  properties:{
    values:{
      type: Object,
      value:{
        type: {
          type: String,
          value: 'heavy'
        },
        title: {
            type: String,
            value: 'TBJU2345678'
        },
        time: {
            type: String,
            value: '2021-2-23 23:23'
        },
        rightTitle: {
            type: String,
            value: '京ABK898'
        },
        labels: {
            type: Array,
            value: ['铁路箱','35吨通用集装箱']
        },
        progress: {
            type: Array,
            value: [true,false,false,false]
        },
        showButton:{
          type: Boolean,
          value: true
        },
        buttonText: {
            type: String,
            value: '确认并提醒'
        },
      }
      
    }

  },
  data:{
    types:{
      heavy:{
        className:'heavy_class',
        text:'重'
      }
    }
  },
  methods:{
    onTap: function(){
      this.triggerEvent('onClick',{})
    }
  }
})