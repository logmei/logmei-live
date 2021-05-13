"use strict";
Page({
    data: {},
    onShow: function () {
    },
    handlerTapList: function (e) {
        console.log('list....', e);
        switch (e.target.dataset.id) {
            case "list":
                wx.navigateTo({
                    url: '/pages/list/index'
                });
                break;
            case 'customList':
                wx.navigateTo({
                    url: '/pages/custom-list/index'
                });
                break;
            default:
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBSSxDQUFVO0lBRVosSUFBSSxFQUFDLEVBQ0o7SUFFRCxNQUFNO0lBRU4sQ0FBQztJQUNELGNBQWMsWUFBQyxDQUFDO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekIsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUM7WUFDMUIsS0FBSyxNQUFNO2dCQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFDLG1CQUFtQjtpQkFDeEIsQ0FBQyxDQUFBO2dCQUNGLE1BQU07WUFDTixLQUFLLFlBQVk7Z0JBQ2YsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDWixHQUFHLEVBQUMsMEJBQTBCO2lCQUMvQixDQUFDLENBQUE7Z0JBQ0YsTUFBTTtZQUNSLFFBQVE7U0FFWDtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGNvbXBvbmVudHMvY29tcG9uZW50LXRhZy1uYW1lLmpzXG5QYWdlPGFueSxhbnk+KHtcbiBcbiAgZGF0YTp7XG4gIH0sXG5cbiAgb25TaG93KCkge1xuICAgXG4gIH0sXG4gIGhhbmRsZXJUYXBMaXN0KGUpe1xuICAgIGNvbnNvbGUubG9nKCdsaXN0Li4uLicsZSlcbiAgICBzd2l0Y2ggKGUudGFyZ2V0LmRhdGFzZXQuaWQpe1xuICAgICAgY2FzZSBcImxpc3RcIjpcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOicvcGFnZXMvbGlzdC9pbmRleCdcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2N1c3RvbUxpc3QnOlxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOicvcGFnZXMvY3VzdG9tLWxpc3QvaW5kZXgnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcblxuICAgIH1cbiAgfVxufSlcbiJdfQ==