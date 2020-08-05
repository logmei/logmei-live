"use strict";
App({
    globalData: {},
    onLaunch: function () {
        var _this = this;
        wx.getSystemInfo({ success: function (res) {
                console.log('systeminfo', res);
            } });
        console.log('onLaunch 小程序初始化...');
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (res) {
                console.log(res.code);
            },
        });
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res);
                            }
                        },
                    });
                }
            },
        });
    },
    onShow: function () {
        console.log('onshow 小程序启动或切前台');
    },
    onHide: function () {
        console.log('onHide 小程序切后台');
    },
    onError: function () {
        console.log('onError 错误监听函数');
    },
    onPageNotFound: function () {
        console.log('onPageNotFount 页面不存在监听函数');
    },
    onUnhandledRejection: function () {
        console.log('onUnhandledRejection 未处理的promise拒绝事件监听函数');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUUsRUFBRTtJQUNkLFFBQVE7UUFBUixpQkF1Q0M7UUF0Q0MsRUFBRSxDQUFDLGFBQWEsQ0FDZCxFQUFDLE9BQU8sRUFBQyxVQUFDLEdBQUc7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLENBQUE7WUFDL0IsQ0FBQyxFQUFDLENBQ0gsQ0FBQTtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUVqQyxJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRy9CLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRXZCLENBQUM7U0FDRixDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHOzRCQUVWLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7NEJBSXZDLElBQUksS0FBSSxDQUFDLHFCQUFxQixFQUFFO2dDQUM5QixLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUE7NkJBQ2hDO3dCQUNILENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNLEVBQUM7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDakMsQ0FBQztJQUNELE1BQU0sRUFBQztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUNELE9BQU8sRUFBQztRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBQ0QsY0FBYyxFQUFDO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFDRCxvQkFBb0IsRUFBQztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUE7SUFDekQsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC50c1xuQXBwPElBcHBPcHRpb24+KHtcbiAgZ2xvYmFsRGF0YToge30sXG4gIG9uTGF1bmNoKCkge1xuICAgIHd4LmdldFN5c3RlbUluZm8oXG4gICAgICB7c3VjY2VzczoocmVzKT0+e1xuICAgICAgICBjb25zb2xlLmxvZygnc3lzdGVtaW5mbycscmVzKVxuICAgICAgfX1cbiAgICApXG4gICAgY29uc29sZS5sb2coJ29uTGF1bmNoIOWwj+eoi+W6j+WIneWni+WMli4uLicpXG4gICAgLy8g5bGV56S65pys5Zyw5a2Y5YKo6IO95YqbXG4gICAgY29uc3QgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cbiAgICBsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSlcbiAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXG5cbiAgICAvLyDnmbvlvZVcbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuY29kZSlcbiAgICAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcbiAgICAgIH0sXG4gICAgfSlcbiAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXG4gICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgLy8g5Y+v5Lul5bCGIHJlcyDlj5HpgIHnu5nlkI7lj7Dop6PnoIHlh7ogdW5pb25JZFxuICAgICAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cblxuICAgICAgICAgICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgICAgICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pXG4gIH0sXG4gIG9uU2hvdzpmdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKCdvbnNob3cg5bCP56iL5bqP5ZCv5Yqo5oiW5YiH5YmN5Y+wJylcbiAgfSxcbiAgb25IaWRlOmZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coJ29uSGlkZSDlsI/nqIvluo/liIflkI7lj7AnKVxuICB9LFxuICBvbkVycm9yOmZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coJ29uRXJyb3Ig6ZSZ6K+v55uR5ZCs5Ye95pWwJylcbiAgfSxcbiAgb25QYWdlTm90Rm91bmQ6ZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZygnb25QYWdlTm90Rm91bnQg6aG16Z2i5LiN5a2Y5Zyo55uR5ZCs5Ye95pWwJylcbiAgfSxcbiAgb25VbmhhbmRsZWRSZWplY3Rpb246ZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZygnb25VbmhhbmRsZWRSZWplY3Rpb24g5pyq5aSE55CG55qEcHJvbWlzZeaLkue7neS6i+S7tuebkeWQrOWHveaVsCcpXG4gIH1cbn0pIl19