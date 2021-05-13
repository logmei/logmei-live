"use strict";
Component({
    properties: {
        showSearch: {
            type: Boolean,
            value: true
        },
        showClose: {
            type: Boolean,
            value: true
        },
        placeholder: {
            type: String,
            value: '搜索'
        },
        value: {
            type: String,
            value: ''
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
    data: {
        searchValue: '',
        refresherTriggered: false
    },
    methods: {
        handlerInput: function (e) {
            console.log('list searchhandlerInput....', e.detail.value);
            this.triggerEvent('searchinput', { value: e.detail.value });
            this.setData({
                searchValue: e.detail.value
            });
        },
        handlerTap: function (e) {
            console.log('list bindtap....', e.detail.value);
            this.triggerEvent('searchtap', { value: e.detail.value });
        },
        handlerClose: function () {
            this.triggerEvent('close', {});
            this.setData({
                searchValue: ''
            });
        },
        handlerSearch: function (e) {
            this.triggerEvent('search', { value: e.detail.value });
            this.setData({
                searchValue: e.detail.value
            });
        },
        bindrefresherrefresh: function () {
            this.triggerEvent('bindrefresherrefresh', { value: this.data.value });
            this.setData({
                refresherTriggered: true
            });
        },
        bindscrolltolower: function () {
            console.log('list scrolltolower....', this.data.value);
            this.triggerEvent('scrolltolower', { value: this.data.value });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsVUFBVSxFQUFDO1lBQ1YsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUMsSUFBSTtTQUNYO1FBQ0QsU0FBUyxFQUFDO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsSUFBSTtTQUNaO1FBQ0QsV0FBVyxFQUFDO1lBQ1YsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUMsSUFBSTtTQUNYO1FBQ0QsS0FBSyxFQUFDO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUMsRUFBRTtTQUNUO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNiO1FBQ0QsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsR0FBRztTQUNYO0tBQ0Q7SUFDRCxJQUFJLEVBQUM7UUFDSCxXQUFXLEVBQUMsRUFBRTtRQUNkLGtCQUFrQixFQUFFLEtBQUs7S0FDMUI7SUFJRCxPQUFPLEVBQUU7UUFDUCxZQUFZLEVBQUUsVUFBUyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7WUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2FBQzVCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxVQUFVLEVBQUUsVUFBUyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDdkQsQ0FBQztRQUNELFlBQVksRUFBRTtZQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsV0FBVyxFQUFFLEVBQUU7YUFDaEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELGFBQWEsRUFBRSxVQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO1lBQ2xELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSzthQUM1QixDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBQyxFQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7WUFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxrQkFBa0IsRUFBRSxJQUFJO2FBQ3pCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUMsRUFBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQzVELENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvY29tcG9uZW50LXRhZy1uYW1lLmpzXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgc2hvd1NlYXJjaDp7XG4gICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgIHZhbHVlOnRydWVcbiAgIH0sXG4gICBzaG93Q2xvc2U6e1xuICAgICB0eXBlOiBCb29sZWFuLFxuICAgICB2YWx1ZTogdHJ1ZVxuICAgfSxcbiAgIHBsYWNlaG9sZGVyOntcbiAgICAgdHlwZTogU3RyaW5nLFxuICAgICB2YWx1ZTon5pCc57SiJ1xuICAgfSxcbiAgIHZhbHVlOntcbiAgICAgdHlwZTogU3RyaW5nLFxuICAgICB2YWx1ZTonJ1xuICAgfSxcbiAgIGZvY3VzOiB7XG4gICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgIHZhbHVlOiBmYWxzZVxuICAgfSxcbiAgIHNjcm9sbEhlaWdodDoge1xuICAgICB0eXBlOiBOdW1iZXIsXG4gICAgIHZhbHVlOiA1MDBcbiAgIH1cbiAgfSxcbiAgZGF0YTp7XG4gICAgc2VhcmNoVmFsdWU6JycsXG4gICAgcmVmcmVzaGVyVHJpZ2dlcmVkOiBmYWxzZVxuICB9LFxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlcklucHV0OiBmdW5jdGlvbihlKXtcbiAgICAgIGNvbnNvbGUubG9nKCdsaXN0IHNlYXJjaGhhbmRsZXJJbnB1dC4uLi4nLGUuZGV0YWlsLnZhbHVlKVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ3NlYXJjaGlucHV0Jyx7dmFsdWU6ZS5kZXRhaWwudmFsdWV9KS8vIOeCueWHu+S6i+S7tlxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2VhcmNoVmFsdWU6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlclRhcDogZnVuY3Rpb24oZSl7XG4gICAgICBjb25zb2xlLmxvZygnbGlzdCBiaW5kdGFwLi4uLicsZS5kZXRhaWwudmFsdWUpXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc2VhcmNodGFwJyx7dmFsdWU6ZS5kZXRhaWwudmFsdWV9KS8vIOeCueWHu+S6i+S7tlxuICAgIH0sXG4gICAgaGFuZGxlckNsb3NlOiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2Nsb3NlJyx7fSkgLy8g5YWz6ZetXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzZWFyY2hWYWx1ZTogJydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVyU2VhcmNoOiBmdW5jdGlvbihlKXtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdzZWFyY2gnLHt2YWx1ZTplLmRldGFpbC52YWx1ZX0pIC8vIOafpeivolxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2VhcmNoVmFsdWU6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgYmluZHJlZnJlc2hlcnJlZnJlc2g6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnYmluZHJlZnJlc2hlcnJlZnJlc2gnLHt2YWx1ZTp0aGlzLmRhdGEudmFsdWV9KSAvLyDmn6Xor6JcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHJlZnJlc2hlclRyaWdnZXJlZDogdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGJpbmRzY3JvbGx0b2xvd2VyOiBmdW5jdGlvbigpe1xuICAgICAgY29uc29sZS5sb2coJ2xpc3Qgc2Nyb2xsdG9sb3dlci4uLi4nLHRoaXMuZGF0YS52YWx1ZSlcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdzY3JvbGx0b2xvd2VyJyx7dmFsdWU6dGhpcy5kYXRhLnZhbHVlfSkgLy8g5p+l6K+iXG4gICAgfVxuICB9XG59KVxuIl19