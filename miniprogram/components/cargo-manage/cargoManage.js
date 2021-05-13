"use strict";
Component({
    properties: {
        data: {
            type: Array,
            value: [
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
        showButton: {
            type: Boolean,
            value: true
        }
    },
    data: {
        list: []
    },
    lifetimes: {
        attached: function () {
            var _this = this;
            var l = this.data.data.map(function (v) {
                var progress = [!!v.creationDate, !!v.signDate, !!v.startBoundDate, !!v.arriveTime];
                var cont = {
                    type: 'heavy',
                    title: v.containerNo,
                    time: v.creationDate,
                    rightTitle: v.carNo,
                    labels: [v.containerTypeMeaning, v.containerCategoryMeaning],
                    progress: [!!v.creationDate, !!v.signDate, !!v.startBoundDate, !!v.arriveTime],
                    buttonText: progress.every(function (v) { return v === true; }) ? '确认' : '确认并提醒',
                    showButton: _this.data.showButton
                };
                return cont;
            });
            this.setData({
                list: l
            });
        }
    },
    methods: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZ29NYW5hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJnb01hbmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFDO1lBQ0gsSUFBSSxFQUFDLEtBQUs7WUFDVixLQUFLLEVBQUM7Z0JBQ0o7b0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsYUFBYSxFQUFFLGFBQWE7b0JBQzVCLGVBQWUsRUFBRSxRQUFRO29CQUN6QixtQkFBbUIsRUFBRSxPQUFPO29CQUM1QixzQkFBc0IsRUFBRSxLQUFLO29CQUM3QiwwQkFBMEIsRUFBRSxVQUFVO29CQUN0QyxjQUFjLEVBQUUsaUJBQWlCO29CQUNqQyxVQUFVLEVBQUUsRUFBRTtvQkFDZCxnQkFBZ0IsRUFBRSxFQUFFO29CQUNwQixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLFNBQVM7aUJBQ3JCO2dCQUNEO29CQUNFLElBQUksRUFBRSxnQkFBZ0I7b0JBQ3RCLGFBQWEsRUFBRSxhQUFhO29CQUM1QixlQUFlLEVBQUUsUUFBUTtvQkFDekIsbUJBQW1CLEVBQUUsT0FBTztvQkFDNUIsc0JBQXNCLEVBQUUsS0FBSztvQkFDN0IsMEJBQTBCLEVBQUUsVUFBVTtvQkFDdEMsY0FBYyxFQUFFLGlCQUFpQjtvQkFDakMsVUFBVSxFQUFFLGlCQUFpQjtvQkFDN0IsZ0JBQWdCLEVBQUUsRUFBRTtvQkFDcEIsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxTQUFTO2lCQUNyQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QixhQUFhLEVBQUUsYUFBYTtvQkFDNUIsZUFBZSxFQUFFLFFBQVE7b0JBQ3pCLG1CQUFtQixFQUFFLE9BQU87b0JBQzVCLHNCQUFzQixFQUFFLEtBQUs7b0JBQzdCLDBCQUEwQixFQUFFLFVBQVU7b0JBQ3RDLGNBQWMsRUFBRSxpQkFBaUI7b0JBQ2pDLFVBQVUsRUFBRSxpQkFBaUI7b0JBQzdCLGdCQUFnQixFQUFFLGlCQUFpQjtvQkFDbkMsWUFBWSxFQUFFLGlCQUFpQjtvQkFDL0IsT0FBTyxFQUFFLFNBQVM7aUJBQ3JCO2FBQ0k7U0FDRjtRQUNELFVBQVUsRUFBQztZQUNULElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGO0lBS0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFDLEVBQUU7S0FDUjtJQUNELFNBQVMsRUFBQztRQUNSLFFBQVEsRUFBQztZQUFBLGlCQW9CUjtZQW5CQyxJQUFNLENBQUMsR0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO2dCQUNoQyxJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBQ2xGLElBQU0sSUFBSSxHQUFHO29CQUNYLElBQUksRUFBQyxPQUFPO29CQUNaLEtBQUssRUFBRSxDQUFDLENBQUMsV0FBVztvQkFDcEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZO29CQUNwQixVQUFVLEVBQUUsQ0FBQyxDQUFDLEtBQUs7b0JBQ25CLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsRUFBQyxDQUFDLENBQUMsd0JBQXdCLENBQUM7b0JBQzFELFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO29CQUMxRSxVQUFVLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFBLENBQUMsSUFBRSxPQUFBLENBQUMsS0FBRyxJQUFJLEVBQVIsQ0FBUSxDQUFDLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQSxDQUFDLENBQUEsT0FBTztvQkFDcEQsVUFBVSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtpQkFDakMsQ0FBQTtnQkFFRCxPQUFPLElBQUksQ0FBQTtZQUNiLENBQUMsQ0FBQyxDQUFBO1lBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxJQUFJLEVBQUUsQ0FBQzthQUNSLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtJQUlELE9BQU8sRUFBRSxFQUVSO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9jb21wb25lbnQtdGFnLW5hbWUuanNcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBkYXRhOntcbiAgICAgIHR5cGU6QXJyYXksXG4gICAgICB2YWx1ZTpbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDg1Nzc3NzA3ODE1MzQwNTQsXG4gICAgICAgICAgXCJjb250YWluZXJOb1wiOiBcIlRCSlUyMzQ1NjcxXCIsXG4gICAgICAgICAgXCJjb250YWluZXJUeXBlXCI6IFwiZGdJISFnXCIsXG4gICAgICAgICAgXCJjb250YWluZXJDYXRlZ29yeVwiOiBcIiFtT3ZuXCIsXG4gICAgICAgICAgXCJjb250YWluZXJUeXBlTWVhbmluZ1wiOiBcIumTgei3r+eusVwiLFxuICAgICAgICAgIFwiY29udGFpbmVyQ2F0ZWdvcnlNZWFuaW5nXCI6IFwiMzXlkKjpgJrnlKjpm4boo4XnrrFcIixcbiAgICAgICAgICBcImNyZWF0aW9uRGF0ZVwiOiBcIjIwMjEtMi0yMyAyMzoyM1wiLFxuICAgICAgICAgIFwic2lnbkRhdGVcIjogXCJcIixcbiAgICAgICAgICBcInN0YXJ0Qm91bmREYXRlXCI6IFwiXCIsXG4gICAgICAgICAgXCJhcnJpdmVUaW1lXCI6IFwiXCIsXG4gICAgICAgICAgXCJjYXJOb1wiOiBcIuS6rEFCSzg5OFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IDg1Nzc3NzA3ODE1MzQwNTQsXG4gICAgICAgIFwiY29udGFpbmVyTm9cIjogXCJUQkpVMjM0NTY3MlwiLFxuICAgICAgICBcImNvbnRhaW5lclR5cGVcIjogXCJkZ0khIWdcIixcbiAgICAgICAgXCJjb250YWluZXJDYXRlZ29yeVwiOiBcIiFtT3ZuXCIsXG4gICAgICAgIFwiY29udGFpbmVyVHlwZU1lYW5pbmdcIjogXCLpk4Hot6/nrrFcIixcbiAgICAgICAgXCJjb250YWluZXJDYXRlZ29yeU1lYW5pbmdcIjogXCIzNeWQqOmAmueUqOmbhuijheeusVwiLFxuICAgICAgICBcImNyZWF0aW9uRGF0ZVwiOiBcIjIwMjEtMi0yMyAyMzoyM1wiLFxuICAgICAgICBcInNpZ25EYXRlXCI6IFwiMjAyMS0yLTIzIDIzOjIzXCIsXG4gICAgICAgIFwic3RhcnRCb3VuZERhdGVcIjogXCJcIixcbiAgICAgICAgXCJhcnJpdmVUaW1lXCI6IFwiXCIsXG4gICAgICAgIFwiY2FyTm9cIjogXCLkuqxBQks4OThcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA4NTc3NzcwNzgxNTM0MDU0LFxuICAgICAgXCJjb250YWluZXJOb1wiOiBcIlRCSlUyMzQ1NjczXCIsXG4gICAgICBcImNvbnRhaW5lclR5cGVcIjogXCJkZ0khIWdcIixcbiAgICAgIFwiY29udGFpbmVyQ2F0ZWdvcnlcIjogXCIhbU92blwiLFxuICAgICAgXCJjb250YWluZXJUeXBlTWVhbmluZ1wiOiBcIumTgei3r+eusVwiLFxuICAgICAgXCJjb250YWluZXJDYXRlZ29yeU1lYW5pbmdcIjogXCIzNeWQqOmAmueUqOmbhuijheeusVwiLFxuICAgICAgXCJjcmVhdGlvbkRhdGVcIjogXCIyMDIxLTItMjMgMjM6MjNcIixcbiAgICAgIFwic2lnbkRhdGVcIjogXCIyMDIxLTItMjMgMjM6MjNcIixcbiAgICAgIFwic3RhcnRCb3VuZERhdGVcIjogXCIyMDIxLTItMjMgMjM6MjNcIixcbiAgICAgIFwiYXJyaXZlVGltZVwiOiBcIjIwMjEtMi0yMyAyMzoyM1wiLFxuICAgICAgXCJjYXJOb1wiOiBcIuS6rEFCSzg5OFwiXG4gIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICBzaG93QnV0dG9uOntcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgbGlzdDpbXVxuICB9LFxuICBsaWZldGltZXM6e1xuICAgIGF0dGFjaGVkOmZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBsOmFueSA9IHRoaXMuZGF0YS5kYXRhLm1hcCh2PT57XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gWyEhdi5jcmVhdGlvbkRhdGUsISF2LnNpZ25EYXRlLCEhdi5zdGFydEJvdW5kRGF0ZSwhIXYuYXJyaXZlVGltZV1cbiAgICAgICAgY29uc3QgY29udCA9IHtcbiAgICAgICAgICB0eXBlOidoZWF2eScsXG4gICAgICAgICAgdGl0bGU6IHYuY29udGFpbmVyTm8sXG4gICAgICAgICAgdGltZTogdi5jcmVhdGlvbkRhdGUsXG4gICAgICAgICAgcmlnaHRUaXRsZTogdi5jYXJObyxcbiAgICAgICAgICBsYWJlbHM6W3YuY29udGFpbmVyVHlwZU1lYW5pbmcsdi5jb250YWluZXJDYXRlZ29yeU1lYW5pbmddLFxuICAgICAgICAgIHByb2dyZXNzOlshIXYuY3JlYXRpb25EYXRlLCEhdi5zaWduRGF0ZSwhIXYuc3RhcnRCb3VuZERhdGUsISF2LmFycml2ZVRpbWVdLFxuICAgICAgICAgIGJ1dHRvblRleHQ6IHByb2dyZXNzLmV2ZXJ5KHY9PnY9PT10cnVlKT8n56Gu6K6kJzon56Gu6K6k5bm25o+Q6YaSJyxcbiAgICAgICAgICBzaG93QnV0dG9uOiB0aGlzLmRhdGEuc2hvd0J1dHRvblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRcbiAgICAgIH0pXG4gICAgICAvLyBjb25zb2xlLmxvZygnbC4uLi4uJyxsLEpTT04uc3RyaW5naWZ5KGxbMF0pKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGlzdDogbFxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBcbiAgfVxufSlcbiJdfQ==