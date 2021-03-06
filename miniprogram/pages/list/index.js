"use strict";
Page({
    data: {
        scrollHeight: 500,
        page: 0,
        totalPages: 0,
        totalElements: 0,
        searchValue: '',
        list: [],
        isEmpty: true
    },
    onShow: function () {
        var that = this;
        that.setData({
            scrollHeight: wx.getSystemInfoSync().windowHeight - 20,
        });
    },
    getList: function () {
        console.log('getList....');
        this.setData({
            isEmpty: false
        });
    },
    handlerInput: function (e) {
        var that = this;
        console.log('handlerInput 1111....');
        that.setData({
            searchValue: e.detail.value,
            page: 0
        }, function () {
            if (e.detail.value === 'test') {
                that.getList();
            }
            else {
                that.setData({
                    isEmpty: true
                });
            }
        });
    },
    handlerClose: function () {
        var that = this;
        console.log('handlerClose....');
        that.setData({
            searchValue: '',
            page: 0
        }, function () {
            that.getList();
        });
    },
    handlerSearch: function () {
        console.log('handlerSearch....');
        this.getList();
    },
    bindscrolltolower: function () {
        var that = this;
        if (this.data.page === this.data.totalPages - 1)
            return;
        this.setData({
            page: this.data.page + 1
        }, function () {
            that.getList();
        });
    },
    onPullDownRefresh: function () {
        var that = this;
        this.setData({
            searchValue: '',
            page: 0
        }, function () {
            that.getList();
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBSSxDQUFVO0lBRVosSUFBSSxFQUFDO1FBQ0gsWUFBWSxFQUFFLEdBQUc7UUFDakIsSUFBSSxFQUFFLENBQUM7UUFDUCxVQUFVLEVBQUUsQ0FBQztRQUNiLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsSUFBSSxFQUFFLEVBQUU7UUFDUixPQUFPLEVBQUUsSUFBSTtLQUNkO0lBRUQsTUFBTTtRQUNKLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsWUFBWSxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFlBQVksR0FBRSxFQUFFO1NBQ3RELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxPQUFPO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osT0FBTyxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUMsWUFBWSxFQUFaLFVBQWEsQ0FBNkI7UUFDeEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztZQUMzQixJQUFJLEVBQUMsQ0FBQztTQUNQLEVBQUM7WUFDQSxJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFHLE1BQU0sRUFBQztnQkFDekIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO2FBQ2Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxPQUFPLEVBQUUsSUFBSTtpQkFDZCxDQUFDLENBQUE7YUFDSDtRQUdILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFlBQVk7UUFDVixJQUFNLElBQUksR0FBRyxJQUFJLENBQUE7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxXQUFXLEVBQUUsRUFBRTtZQUNmLElBQUksRUFBRSxDQUFDO1NBQ1IsRUFBQztZQUNBLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNoQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxhQUFhO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUMsQ0FBQztZQUFFLE9BQU07UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDO1NBQ3ZCLEVBQUM7WUFDQSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDaEIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxXQUFXLEVBQUUsRUFBRTtZQUNmLElBQUksRUFBQyxDQUFDO1NBQ1AsRUFBQztZQUNBLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNoQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGNvbXBvbmVudHMvY29tcG9uZW50LXRhZy1uYW1lLmpzXG5QYWdlPGFueSxhbnk+KHtcbiAgXG4gIGRhdGE6e1xuICAgIHNjcm9sbEhlaWdodDogNTAwLFxuICAgIHBhZ2U6IDAsXG4gICAgdG90YWxQYWdlczogMCxcbiAgICB0b3RhbEVsZW1lbnRzOiAwLFxuICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICBsaXN0OiBbXSxcbiAgICBpc0VtcHR5OiB0cnVlXG4gIH0sXG5cbiAgb25TaG93KCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgdGhhdC5zZXREYXRhKHtcbiAgICAgIHNjcm9sbEhlaWdodDogd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQgLTIwLFxuICAgIH0pXG4gIH0sXG5cbiAgZ2V0TGlzdCgpIHtcbiAgIGNvbnNvbGUubG9nKCdnZXRMaXN0Li4uLicpXG4gICB0aGlzLnNldERhdGEoe1xuICAgIGlzRW1wdHk6IGZhbHNlXG4gICB9KVxuICB9LFxuXG4gICAgaGFuZGxlcklucHV0KGU6IHsgZGV0YWlsOiB7IHZhbHVlOiBhbnkgfSB9KXtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZygnaGFuZGxlcklucHV0IDExMTEuLi4uJylcbiAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgIHNlYXJjaFZhbHVlOiBlLmRldGFpbC52YWx1ZSxcbiAgICAgICAgcGFnZTowXG4gICAgICB9LCgpPT57XG4gICAgICAgIGlmKGUuZGV0YWlsLnZhbHVlPT09J3Rlc3QnKXtcbiAgICAgICAgICB0aGF0LmdldExpc3QoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgICBpc0VtcHR5OiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgXG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlckNsb3NlKCl7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coJ2hhbmRsZXJDbG9zZS4uLi4nKVxuICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgICAgICBwYWdlOiAwIFxuICAgICAgfSwoKT0+e1xuICAgICAgICB0aGF0LmdldExpc3QoKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZXJTZWFyY2goKXtcbiAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVyU2VhcmNoLi4uLicpXG4gICAgICB0aGlzLmdldExpc3QoKVxuICAgIH0sXG4gICAgYmluZHNjcm9sbHRvbG93ZXIoKXtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICBpZih0aGlzLmRhdGEucGFnZSA9PT0gdGhpcy5kYXRhLnRvdGFsUGFnZXMtMSkgcmV0dXJuXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBwYWdlOiB0aGlzLmRhdGEucGFnZSsxXG4gICAgICB9LCgpPT57XG4gICAgICAgIHRoYXQuZ2V0TGlzdCgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgb25QdWxsRG93blJlZnJlc2goKXtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzZWFyY2hWYWx1ZTogJycsXG4gICAgICAgIHBhZ2U6MFxuICAgICAgfSwoKT0+e1xuICAgICAgICB0aGF0LmdldExpc3QoKVxuICAgICAgfSlcbiAgICB9XG59KVxuIl19