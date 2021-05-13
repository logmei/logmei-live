"use strict";
Page({
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
            value: true
        }
    },
    data: {
        page: 0,
        totalPages: 0,
        totalElements: 0,
        scrollHeight: 500,
        searchValue: '',
        date: '',
        isEmpty: true,
        list: [
            {
                time: '2021-2-23 23:23',
                count: '4',
                data: [
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
            {
                time: '2021-4-23 23:23',
                count: '4',
                data: [
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
            }
        ]
    },
    bindDateChange: function (e) {
        var _this = this;
        console.log(e.detail.value);
        this.setData({
            date: e.detail.value,
            page: 0,
        }, function () {
            _this.getList();
        });
    },
    onShow: function () {
        var that = this;
        that.setData({
            scrollHeight: wx.getSystemInfoSync().windowHeight - 20,
        });
    },
    getList: function () {
        console.log('getlist....');
        this.setData({
            isEmpty: false
        });
    },
    handlerInput: function (e) {
        var _this = this;
        console.log('handlerInput....');
        this.setData({
            searchValue: e.detail.value,
            page: 0
        }, function () {
            _this.getList();
        });
    },
    handlerClose: function () {
        var _this = this;
        console.log('handlerClose....');
        this.setData({
            searchValue: '',
            page: 0
        }, function () {
            _this.getList();
        });
    },
    handlerSearch: function (e) {
        console.log('handlerSearch....');
        this.getList();
    },
    bindscrolltolower: function () {
        var _this = this;
        if (this.data.page === this.data.totalPages - 1)
            return;
        this.setData({
            page: this.data.page + 1
        }, function () {
            _this.getList();
        });
    },
    onPullDownRefresh: function () {
        var _this = this;
        this.setData({
            searchValue: '',
            page: 0
        }, function () {
            _this.getList();
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBSSxDQUFDO0lBSUgsVUFBVSxFQUFFO1FBQ1YsVUFBVSxFQUFDO1lBQ1YsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUMsSUFBSTtTQUNYO1FBQ0QsU0FBUyxFQUFDO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsSUFBSTtTQUNaO1FBQ0QsV0FBVyxFQUFDO1lBQ1YsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUMsSUFBSTtTQUNYO1FBQ0QsS0FBSyxFQUFDO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUMsRUFBRTtTQUNUO1FBQ0QsS0FBSyxFQUFDO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Q7SUFDRCxJQUFJLEVBQUM7UUFDSCxJQUFJLEVBQUUsQ0FBQztRQUNQLFVBQVUsRUFBRSxDQUFDO1FBQ2IsYUFBYSxFQUFFLENBQUM7UUFDaEIsWUFBWSxFQUFFLEdBQUc7UUFDakIsV0FBVyxFQUFFLEVBQUU7UUFDZixJQUFJLEVBQUUsRUFBRTtRQUNSLE9BQU8sRUFBRSxJQUFJO1FBQ2IsSUFBSSxFQUFDO1lBQ0g7Z0JBQ0UsSUFBSSxFQUFDLGlCQUFpQjtnQkFDdEIsS0FBSyxFQUFDLEdBQUc7Z0JBQ1QsSUFBSSxFQUFDO29CQUNIO3dCQUNFLElBQUksRUFBRSxnQkFBZ0I7d0JBQ3RCLGFBQWEsRUFBRSxhQUFhO3dCQUM1QixlQUFlLEVBQUUsUUFBUTt3QkFDekIsbUJBQW1CLEVBQUUsT0FBTzt3QkFDNUIsc0JBQXNCLEVBQUUsS0FBSzt3QkFDN0IsMEJBQTBCLEVBQUUsVUFBVTt3QkFDdEMsY0FBYyxFQUFFLGlCQUFpQjt3QkFDakMsVUFBVSxFQUFFLEVBQUU7d0JBQ2QsZ0JBQWdCLEVBQUUsRUFBRTt3QkFDcEIsWUFBWSxFQUFFLEVB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SUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQztTQUN2QixFQUFDO1lBQ0EsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELGlCQUFpQjtRQUFqQixpQkFPQztRQU5DLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxXQUFXLEVBQUUsRUFBRTtZQUNmLElBQUksRUFBQyxDQUFDO1NBQ1AsRUFBQztZQUNBLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNoQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGNvbXBvbmVudHMvY29tcG9uZW50LXRhZy1uYW1lLmpzXG5QYWdlKHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIHNob3dTZWFyY2g6e1xuICAgICB0eXBlOiBCb29sZWFuLFxuICAgICB2YWx1ZTp0cnVlXG4gICB9LFxuICAgc2hvd0Nsb3NlOntcbiAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgdmFsdWU6IHRydWVcbiAgIH0sXG4gICBwbGFjZWhvbGRlcjp7XG4gICAgIHR5cGU6IFN0cmluZyxcbiAgICAgdmFsdWU6J+aQnOe0oidcbiAgIH0sXG4gICB2YWx1ZTp7XG4gICAgIHR5cGU6IFN0cmluZyxcbiAgICAgdmFsdWU6JydcbiAgIH0sXG4gICBmb2N1czp7XG4gICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgIHZhbHVlOiB0cnVlXG4gICB9XG4gIH0sXG4gIGRhdGE6e1xuICAgIHBhZ2U6IDAsXG4gICAgdG90YWxQYWdlczogMCxcbiAgICB0b3RhbEVsZW1lbnRzOiAwLFxuICAgIHNjcm9sbEhlaWdodDogNTAwLFxuICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICBkYXRlOiAnJyxcbiAgICBpc0VtcHR5OiB0cnVlLFxuICAgIGxpc3Q6W1xuICAgICAge1xuICAgICAgICB0aW1lOicyMDIxLTItMjMgMjM6MjMnLFxuICAgICAgICBjb3VudDonNCcsXG4gICAgICAgIGRhdGE6W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogODU3Nzc3MDc4MTUzNDA1NCxcbiAgICAgICAgICAgIFwiY29udGFpbmVyTm9cIjogXCJUQkpVMjM0NTY3MVwiLFxuICAgICAgICAgICAgXCJjb250YWluZXJUeXBlXCI6IFwiZGdJISFnXCIsXG4gICAgICAgICAgICBcImNvbnRhaW5lckNhdGVnb3J5XCI6IFwiIW1Pdm5cIixcbiAgICAgICAgICAgIFwiY29udGFpbmVyVHlwZU1lYW5pbmdcIjogXCLpk4Hot6/nrrFcIixcbiAgICAgICAgICAgIFwiY29udGFpbmVyQ2F0ZWdvcnlNZWFuaW5nXCI6IFwiMzXlkKjpgJrnlKjpm4boo4XnrrFcIixcbiAgICAgICAgICAgIFwiY3JlYXRpb25EYXRlXCI6IFwiMjAyMS0yLTIzIDIzOjIzXCIsXG4gICAgICAgICAgICBcInNpZ25EYXRlXCI6IFwiXCIsXG4gICAgICAgICAgICBcInN0YXJ0Qm91bmREYXRlXCI6IFwiXCIsXG4gICAgICAgICAgICBcImFycml2ZVRpbWVcIjogXCJcIixcbiAgICAgICAgICAgIFwiY2FyTm9cIjogXCLkuqxBQks4OThcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA4NTc3NzcwNzgxNTM0MDU0LFxuICAgICAgICAgIFwiY29udGFpbmVyTm9cIjogXCJUQkpVMjM0NTY3MlwiLFxuICAgICAgICAgIFwiY29udGFpbmVyVHlwZVwiOiBcImRnSSEhZ1wiLFxuICAgICAgICAgIFwiY29udGFpbmVyQ2F0ZWdvcnlcIjogXCIhbU92blwiLFxuICAgICAgICAgIFwiY29udGFpbmVyVHlwZU1lYW5pbmdcIjogXCLpk4Hot6/nrrFcIixcbiAgICAgICAgICBcImNvbnRhaW5lckNhdGVnb3J5TWVhbmluZ1wiOiBcIjM15ZCo6YCa55So6ZuG6KOF566xXCIsXG4gICAgICAgICAgXCJjcmVhdGlvbkRhdGVcIjogXCIyMDIxLTItMjMgMjM6MjNcIixcbiAgICAgICAgICBcInNpZ25EYXRlXCI6IFwiMjAyMS0yLTIzIDIzOjIzXCIsXG4gICAgICAgICAgXCJzdGFydEJvdW5kRGF0ZVwiOiBcIlwiLFxuICAgICAgICAgIFwiYXJyaXZlVGltZVwiOiBcIlwiLFxuICAgICAgICAgIFwiY2FyTm9cIjogXCLkuqxBQks4OThcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA4NTc3NzcwNzgxNTM0MDU0LFxuICAgICAgICBcImNvbnRhaW5lck5vXCI6IFwiVEJKVTIzNDU2NzNcIixcbiAgICAgICAgXCJjb250YWluZXJUeXBlXCI6IFwiZGdJISFnXCIsXG4gICAgICAgIFwiY29udGFpbmVyQ2F0ZWdvcnlcIjogXCIhbU92blwiLFxuICAgICAgICBcImNvbnRhaW5lclR5cGVNZWFuaW5nXCI6IFwi6ZOB6Lev566xXCIsXG4gICAgICAgIFwiY29udGFpbmVyQ2F0ZWdvcnlNZWFuaW5nXCI6IFwiMzXlkKjpgJrnlKjpm4boo4XnrrFcIixcbiAgICAgICAgXCJjcmVhdGlvbkRhdGVcIjogXCIyMDIxLTItMjMgMjM6MjNcIixcbiAgICAgICAgXCJzaWduRGF0ZVwiOiBcIjIwMjEtMi0yMyAyMzoyM1wiLFxuICAgICAgICBcInN0YXJ0Qm91bmREYXRlXCI6IFwiMjAyMS0yLTIzIDIzOjIzXCIsXG4gICAgICAgIFwiYXJyaXZlVGltZVwiOiBcIjIwMjEtMi0yMyAyMzoyM1wiLFxuICAgICAgICBcImNhck5vXCI6IFwi5LqsQUJLODk4XCJcbiAgICB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lOicyMDIxLTQtMjMgMjM6MjMnLFxuICAgICAgICBjb3VudDonNCcsXG4gICAgICAgIGRhdGE6W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogODU3Nzc3MDc4MTUzNDA1NCxcbiAgICAgICAgICAgIFwiY29udGFpbmVyTm9cIjogXCJUQkpVMjM0NTY3MVwiLFxuICAgICAgICAgICAgXCJjb250YWluZXJUeXBlXCI6IFwiZGdJISFnXCIsXG4gICAgICAgICAgICBcImNvbnRhaW5lckNhdGVnb3J5XCI6IFwiIW1Pdm5cIixcbiAgICAgICAgICAgIFwiY29udGFpbmVyVHlwZU1lYW5pbmdcIjogXCLpk4Hot6/nrrFcIixcbiAgICAgICAgICAgIFwiY29udGFpbmVyQ2F0ZWdvcnlNZWFuaW5nXCI6IFwiMzXlkKjpgJrnlKjpm4boo4XnrrFcIixcbiAgICAgICAgICAgIFwiY3JlYXRpb25EYXRlXCI6IFwiMjAyMS0yLTIzIDIzOjIzXCIsXG4gICAgICAgICAgICBcInNpZ25EYXRlXCI6IFwiXCIsXG4gICAgICAgICAgICBcInN0YXJ0Qm91bmREYXRlXCI6IFwiXCIsXG4gICAgICAgICAgICBcImFycml2ZVRpbWVcIjogXCJcIixcbiAgICAgICAgICAgIFwiY2FyTm9cIjogXCLkuqxBQks4OThcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA4NTc3NzcwNzgxNTM0MDU0LFxuICAgICAgICAgIFwiY29udGFpbmVyTm9cIjogXCJUQkpVMjM0NTY3MlwiLFxuICAgICAgICAgIFwiY29udGFpbmVyVHlwZVwiOiBcImRnSSEhZ1wiLFxuICAgICAgICAgIFwiY29udGFpbmVyQ2F0ZWdvcnlcIjogXCIhbU92blwiLFxuICAgICAgICAgIFwiY29udGFpbmVyVHlwZU1lYW5pbmdcIjogXCLpk4Hot6/nrrFcIixcbiAgICAgICAgICBcImNvbnRhaW5lckNhdGVnb3J5TWVhbmluZ1wiOiBcIjM15ZCo6YCa55So6ZuG6KOF566xXCIsXG4gICAgICAgICAgXCJjcmVhdGlvbkRhdGVcIjogXCIyMDIxLTItMjMgMjM6MjNcIixcbiAgICAgICAgICBcInNpZ25EYXRlXCI6IFwiMjAyMS0yLTIzIDIzOjIzXCIsXG4gICAgICAgICAgXCJzdGFydEJvdW5kRGF0ZVwiOiBcIlwiLFxuICAgICAgICAgIFwiYXJyaXZlVGltZVwiOiBcIlwiLFxuICAgICAgICAgIFwiY2FyTm9cIjogXCLkuqxBQks4OThcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiA4NTc3NzcwNzgxNTM0MDU0LFxuICAgICAgICBcImNvbnRhaW5lck5vXCI6IFwiVEJKVTIzNDU2NzNcIixcbiAgICAgICAgXCJjb250YWluZXJUeXBlXCI6IFwiZGdJISFnXCIsXG4gICAgICAgIFwiY29udGFpbmVyQ2F0ZWdvcnlcIjogXCIhbU92blwiLFxuICAgICAgICBcImNvbnRhaW5lclR5cGVNZWFuaW5nXCI6IFwi6ZOB6Lev566xXCIsXG4gICAgICAgIFwiY29udGFpbmVyQ2F0ZWdvcnlNZWFuaW5nXCI6IFwiMzXlkKjpgJrnlKjpm4boo4XnrrFcIixcbiAgICAgICAgXCJjcmVhdGlvbkRhdGVcIjogXCIyMDIxLTItMjMgMjM6MjNcIixcbiAgICAgICAgXCJzaWduRGF0ZVwiOiBcIjIwMjEtMi0yMyAyMzoyM1wiLFxuICAgICAgICBcInN0YXJ0Qm91bmREYXRlXCI6IFwiMjAyMS0yLTIzIDIzOjIzXCIsXG4gICAgICAgIFwiYXJyaXZlVGltZVwiOiBcIjIwMjEtMi0yMyAyMzoyM1wiLFxuICAgICAgICBcImNhck5vXCI6IFwi5LqsQUJLODk4XCJcbiAgICB9LFxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBiaW5kRGF0ZUNoYW5nZShlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZGF0ZTogZS5kZXRhaWwudmFsdWUsXG4gICAgICBwYWdlOiAwLFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMuZ2V0TGlzdCgpXG4gICAgfSlcbiAgfSxcblxuICBvblNob3coKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICB0aGF0LnNldERhdGEoe1xuICAgICAgc2Nyb2xsSGVpZ2h0OiB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCAtIDIwLFxuICAgIH0pXG4gIH0sXG4gIGdldExpc3QoKSB7XG4gICAgY29uc29sZS5sb2coJ2dldGxpc3QuLi4uJylcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgaXNFbXB0eSA6IGZhbHNlXG4gICAgfSlcbiAgfSxcblxuICAgIGhhbmRsZXJJbnB1dChlOiB7IGRldGFpbDogeyB2YWx1ZTogYW55IH0gfSl7XG4gICAgICBjb25zb2xlLmxvZygnaGFuZGxlcklucHV0Li4uLicpXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzZWFyY2hWYWx1ZTogZS5kZXRhaWwudmFsdWUsXG4gICAgICAgIHBhZ2U6MFxuICAgICAgfSwoKT0+e1xuICAgICAgICB0aGlzLmdldExpc3QoKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZXJDbG9zZSgpe1xuICAgICAgY29uc29sZS5sb2coJ2hhbmRsZXJDbG9zZS4uLi4nKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgICAgICBwYWdlOiAwIFxuICAgICAgfSwoKT0+e1xuICAgICAgICB0aGlzLmdldExpc3QoKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZXJTZWFyY2goZTogeyBkZXRhaWw6IHsgdmFsdWU6IGFueSB9IH0pe1xuICAgICAgY29uc29sZS5sb2coJ2hhbmRsZXJTZWFyY2guLi4uJylcbiAgICAgIHRoaXMuZ2V0TGlzdCgpXG4gICAgfSxcbiAgICBiaW5kc2Nyb2xsdG9sb3dlcigpe1xuICAgICAgaWYodGhpcy5kYXRhLnBhZ2UgPT09IHRoaXMuZGF0YS50b3RhbFBhZ2VzLTEpIHJldHVyblxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgcGFnZTogdGhpcy5kYXRhLnBhZ2UrMVxuICAgICAgfSwoKT0+e1xuICAgICAgICB0aGlzLmdldExpc3QoKVxuICAgICAgfSlcbiAgICB9LFxuICAgIG9uUHVsbERvd25SZWZyZXNoKCl7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzZWFyY2hWYWx1ZTogJycsXG4gICAgICAgIHBhZ2U6MFxuICAgICAgfSwoKT0+e1xuICAgICAgICB0aGlzLmdldExpc3QoKVxuICAgICAgfSlcbiAgICB9XG59KVxuIl19