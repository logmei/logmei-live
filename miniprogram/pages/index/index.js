"use strict";
var app = getApp();
Page({
    data: {
        background: ['../../statics/images/WX20200803-191026.png', '../../statics/images/WX20200803-191100.png', '../../statics/images/WX20200803-191127.png'],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500,
        list: [
            {
                src: '../../statics/images/history.png',
                title: 'sky_1'
            }, {
                src: '../../statics/images/gift.png',
                title: 'sky_2'
            }, {
                src: '../../statics/images/data.png',
                title: 'sky_3'
            }, {
                src: '../../statics/images/credit-level.png',
                title: 'sky_4'
            }, {
                src: '../../statics/images/beauty.png',
                title: 'sky_5'
            }, {
                src: '../../statics/images/bags.png',
                title: 'sky_6'
            }, {
                src: '../../statics/images/pic.png',
                title: 'sky_7'
            },
        ],
        menus: [
            {
                src: '../../statics/images/menu_1.png',
                title: '特权管理'
            }, {
                src: '../../statics/images/menu_2.png',
                title: '任务宝'
            }, {
                src: '../../statics/images/menu_3.png',
                title: '优惠券'
            },
        ]
    },
    tapShow: function () {
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    formSubmit: function (e) {
        console.log('form发生了submit事件', e, e.detail.value);
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        });
    },
    onPullDownRefresh: function () {
        console.log('下拉刷新');
    },
    pulldownHandler: function (e) {
        console.log('pulldownHandler.......', e);
        if (e.target.dataset.type === 'start') {
            wx.startPullDownRefresh({ success: function () { return console.log('监听下拉刷新开始'); } });
        }
        if (e.target.dataset.type === 'stop') {
            wx.stopPullDownRefresh({ success: function () { return console.log('监听下拉刷新结束'); } });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFDaEMsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osVUFBVSxFQUFFLENBQUMsNENBQTRDLEVBQUUsNENBQTRDLEVBQUUsNENBQTRDLENBQUM7UUFDdEosYUFBYSxFQUFFLElBQUk7UUFDbkIsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsS0FBSztRQUNmLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixJQUFJLEVBQUM7WUFDSDtnQkFDRSxHQUFHLEVBQUMsa0NBQWtDO2dCQUN0QyxLQUFLLEVBQUMsT0FBTzthQUNkLEVBQUU7Z0JBQ0QsR0FBRyxFQUFDLCtCQUErQjtnQkFDbkMsS0FBSyxFQUFDLE9BQU87YUFDZCxFQUFFO2dCQUNELEdBQUcsRUFBQywrQkFBK0I7Z0JBQ25DLEtBQUssRUFBQyxPQUFPO2FBQ2QsRUFBRTtnQkFDRCxHQUFHLEVBQUMsdUNBQXVDO2dCQUMzQyxLQUFLLEVBQUMsT0FBTzthQUNkLEVBQUU7Z0JBQ0QsR0FBRyxFQUFDLGlDQUFpQztnQkFDckMsS0FBSyxFQUFDLE9BQU87YUFDZCxFQUFFO2dCQUNELEdBQUcsRUFBQywrQkFBK0I7Z0JBQ25DLEtBQUssRUFBQyxPQUFPO2FBQ2QsRUFBRTtnQkFDRCxHQUFHLEVBQUMsOEJBQThCO2dCQUNsQyxLQUFLLEVBQUMsT0FBTzthQUNkO1NBQ0Y7UUFDRCxLQUFLLEVBQUM7WUFDSjtnQkFDRSxHQUFHLEVBQUMsaUNBQWlDO2dCQUNyQyxLQUFLLEVBQUMsTUFBTTthQUNiLEVBQUU7Z0JBQ0QsR0FBRyxFQUFDLGlDQUFpQztnQkFDckMsS0FBSyxFQUFDLEtBQUs7YUFDWixFQUFFO2dCQUNELEdBQUcsRUFBQyxpQ0FBaUM7Z0JBQ3JDLEtBQUssRUFBQyxLQUFLO2FBQ1o7U0FDRjtLQUNGO0lBQ0QsT0FBTztJQUVQLENBQUM7SUFFRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxVQUFVLFlBQUMsQ0FBSztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUNELFdBQVcsWUFBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBQ0QsZUFBZSxZQUFDLENBQUs7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLENBQUMsQ0FBQTtRQUN2QyxJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksS0FBRyxPQUFPLEVBQUM7WUFDakMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUMsT0FBTyxFQUFDLGNBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixFQUFDLENBQUMsQ0FBQTtTQUMvRDtRQUNELElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFHLE1BQU0sRUFBQztZQUNoQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBQyxPQUFPLEVBQUMsY0FBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLEVBQUMsQ0FBQyxDQUFBO1NBQzlEO0lBQ0gsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5QYWdlKHtcblxuICBkYXRhOiB7XG4gICAgYmFja2dyb3VuZDogWycuLi8uLi9zdGF0aWNzL2ltYWdlcy9XWDIwMjAwODAzLTE5MTAyNi5wbmcnLCAnLi4vLi4vc3RhdGljcy9pbWFnZXMvV1gyMDIwMDgwMy0xOTExMDAucG5nJywgJy4uLy4uL3N0YXRpY3MvaW1hZ2VzL1dYMjAyMDA4MDMtMTkxMTI3LnBuZyddLFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgdmVydGljYWw6IGZhbHNlLFxuICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICBpbnRlcnZhbDogMjAwMCxcbiAgICBkdXJhdGlvbjogNTAwLFxuICAgIGxpc3Q6W1xuICAgICAge1xuICAgICAgICBzcmM6Jy4uLy4uL3N0YXRpY3MvaW1hZ2VzL2hpc3RvcnkucG5nJyxcbiAgICAgICAgdGl0bGU6J3NreV8xJ1xuICAgICAgfSwge1xuICAgICAgICBzcmM6Jy4uLy4uL3N0YXRpY3MvaW1hZ2VzL2dpZnQucG5nJyxcbiAgICAgICAgdGl0bGU6J3NreV8yJ1xuICAgICAgfSwge1xuICAgICAgICBzcmM6Jy4uLy4uL3N0YXRpY3MvaW1hZ2VzL2RhdGEucG5nJyxcbiAgICAgICAgdGl0bGU6J3NreV8zJ1xuICAgICAgfSwge1xuICAgICAgICBzcmM6Jy4uLy4uL3N0YXRpY3MvaW1hZ2VzL2NyZWRpdC1sZXZlbC5wbmcnLFxuICAgICAgICB0aXRsZTonc2t5XzQnXG4gICAgICB9LCB7XG4gICAgICAgIHNyYzonLi4vLi4vc3RhdGljcy9pbWFnZXMvYmVhdXR5LnBuZycsXG4gICAgICAgIHRpdGxlOidza3lfNSdcbiAgICAgIH0sIHtcbiAgICAgICAgc3JjOicuLi8uLi9zdGF0aWNzL2ltYWdlcy9iYWdzLnBuZycsXG4gICAgICAgIHRpdGxlOidza3lfNidcbiAgICAgIH0sIHtcbiAgICAgICAgc3JjOicuLi8uLi9zdGF0aWNzL2ltYWdlcy9waWMucG5nJyxcbiAgICAgICAgdGl0bGU6J3NreV83J1xuICAgICAgfSxcbiAgICBdLFxuICAgIG1lbnVzOltcbiAgICAgIHtcbiAgICAgICAgc3JjOicuLi8uLi9zdGF0aWNzL2ltYWdlcy9tZW51XzEucG5nJyxcbiAgICAgICAgdGl0bGU6J+eJueadg+euoeeQhidcbiAgICAgIH0sIHtcbiAgICAgICAgc3JjOicuLi8uLi9zdGF0aWNzL2ltYWdlcy9tZW51XzIucG5nJyxcbiAgICAgICAgdGl0bGU6J+S7u+WKoeWunSdcbiAgICAgIH0sIHtcbiAgICAgICAgc3JjOicuLi8uLi9zdGF0aWNzL2ltYWdlcy9tZW51XzMucG5nJyxcbiAgICAgICAgdGl0bGU6J+S8mOaDoOWIuCdcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuICB0YXBTaG93KCl7XG4gICAgXG4gIH0sXG4gIC8vIOS6i+S7tuWkhOeQhuWHveaVsFxuICBiaW5kVmlld1RhcCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2xvZ3MvbG9ncycsXG4gICAgfSlcbiAgfSxcbiAgZm9ybVN1Ym1pdChlOmFueSl7XG4gICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7YnLGUsZS5kZXRhaWwudmFsdWUpXG4gIH0sXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICB9KVxuICB9LFxuICBvblB1bGxEb3duUmVmcmVzaCgpe1xuICAgIGNvbnNvbGUubG9nKCfkuIvmi4nliLfmlrAnKVxuICB9LFxuICBwdWxsZG93bkhhbmRsZXIoZTphbnkpe1xuICAgIGNvbnNvbGUubG9nKCdwdWxsZG93bkhhbmRsZXIuLi4uLi4uJyxlKVxuICAgIGlmKGUudGFyZ2V0LmRhdGFzZXQudHlwZT09PSdzdGFydCcpe1xuICAgICAgd3guc3RhcnRQdWxsRG93blJlZnJlc2goe3N1Y2Nlc3M6KCk9PmNvbnNvbGUubG9nKCfnm5HlkKzkuIvmi4nliLfmlrDlvIDlp4snKX0pXG4gICAgfVxuICAgIGlmKGUudGFyZ2V0LmRhdGFzZXQudHlwZT09PSdzdG9wJyl7XG4gICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKHtzdWNjZXNzOigpPT5jb25zb2xlLmxvZygn55uR5ZCs5LiL5ouJ5Yi35paw57uT5p2fJyl9KVxuICAgIH1cbiAgfVxuXG59KVxuIl19