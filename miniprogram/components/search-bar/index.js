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
        prefix: {
            type: String,
            value: 'search'
        }
    },
    methods: {
        handlerInput: function (e) {
            console.log('handlerInput....', e.detail.value);
            this.triggerEvent('searchinput', { value: e.detail.value });
        },
        handlerTap: function () {
            console.log('bindtap....', this.data.value);
            this.triggerEvent('searchtap', { value: this.data.value });
        },
        handlerClose: function (e) {
            console.log('handlerClose....');
            this.triggerEvent('close', {});
        },
        handlerSearch: function () {
            this.triggerEvent('search', { value: this.data.value });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsVUFBVSxFQUFDO1lBQ1YsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUMsSUFBSTtTQUNYO1FBQ0QsU0FBUyxFQUFDO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsSUFBSTtTQUNaO1FBQ0QsV0FBVyxFQUFDO1lBQ1YsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUMsSUFBSTtTQUNYO1FBQ0QsS0FBSyxFQUFDO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUMsRUFBRTtTQUNUO1FBQ0QsS0FBSyxFQUFDO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNiO1FBQ0QsTUFBTSxFQUFDO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUMsUUFBUTtTQUNmO0tBQ0Q7SUFNRCxPQUFPLEVBQUU7UUFDUCxZQUFZLEVBQUUsVUFBUyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDekQsQ0FBQztRQUNELFVBQVUsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUMsRUFBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQ3hELENBQUM7UUFDRCxZQUFZLEVBQUUsVUFBUyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtZQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsQ0FBQTtRQUMvQixDQUFDO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsRUFBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQ3JELENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvY29tcG9uZW50LXRhZy1uYW1lLmpzXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgc2hvd1NlYXJjaDp7XG4gICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgIHZhbHVlOnRydWVcbiAgIH0sXG4gICBzaG93Q2xvc2U6e1xuICAgICB0eXBlOiBCb29sZWFuLFxuICAgICB2YWx1ZTogdHJ1ZVxuICAgfSxcbiAgIHBsYWNlaG9sZGVyOntcbiAgICAgdHlwZTogU3RyaW5nLFxuICAgICB2YWx1ZTon5pCc57SiJ1xuICAgfSxcbiAgIHZhbHVlOntcbiAgICAgdHlwZTogU3RyaW5nLFxuICAgICB2YWx1ZTonJ1xuICAgfSxcbiAgIGZvY3VzOntcbiAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgdmFsdWU6IGZhbHNlXG4gICB9LFxuICAgcHJlZml4OntcbiAgICAgdHlwZTogU3RyaW5nLFxuICAgICB2YWx1ZTonc2VhcmNoJy8vIGRhdGVcbiAgIH1cbiAgfSxcblxuICBcbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZXJJbnB1dDogZnVuY3Rpb24oZSl7XG4gICAgICBjb25zb2xlLmxvZygnaGFuZGxlcklucHV0Li4uLicsZS5kZXRhaWwudmFsdWUpXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc2VhcmNoaW5wdXQnLHt2YWx1ZTplLmRldGFpbC52YWx1ZX0pLy8g54K55Ye75LqL5Lu2XG4gICAgfSxcbiAgICBoYW5kbGVyVGFwOiBmdW5jdGlvbigpe1xuICAgICAgY29uc29sZS5sb2coJ2JpbmR0YXAuLi4uJyx0aGlzLmRhdGEudmFsdWUpXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc2VhcmNodGFwJyx7dmFsdWU6dGhpcy5kYXRhLnZhbHVlfSkvLyDngrnlh7vkuovku7ZcbiAgICB9LFxuICAgIGhhbmRsZXJDbG9zZTogZnVuY3Rpb24oZSl7XG4gICAgICBjb25zb2xlLmxvZygnaGFuZGxlckNsb3NlLi4uLicpXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2xvc2UnLHt9KSAvLyDlhbPpl61cbiAgICB9LFxuICAgIGhhbmRsZXJTZWFyY2g6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc2VhcmNoJyx7dmFsdWU6dGhpcy5kYXRhLnZhbHVlfSkgLy8g5p+l6K+iXG4gICAgfVxuICB9XG59KVxuIl19