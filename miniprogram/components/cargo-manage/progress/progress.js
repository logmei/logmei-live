"use strict";
Component({
    properties: {
        values: {
            type: Array,
            value: [true, false, true, true]
        }
    },
    data: {
        list: [
            {
                name: '提箱',
                index: 0,
                lightUp: true,
            },
            {
                name: '封签',
                index: 1,
                lightUp: true,
            },
            {
                name: '磅单',
                index: 2,
                lightUp: false,
            },
            {
                name: '到达',
                index: 3,
                lightUp: false,
            }
        ]
    },
    lifetimes: {
        attached: function () {
            var _this = this;
            this.setData({
                list: this.data.list.map(function (v, index) {
                    v.lightUp = _this.data.values[index];
                    return v;
                })
            });
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9ncmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFDO1FBQ1QsTUFBTSxFQUFDO1lBQ0wsSUFBSSxFQUFDLEtBQUs7WUFDVixLQUFLLEVBQUMsQ0FBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUM7U0FDN0I7S0FDRjtJQUNELElBQUksRUFBQztRQUNILElBQUksRUFBQztZQUNIO2dCQUNFLElBQUksRUFBQyxJQUFJO2dCQUNULEtBQUssRUFBQyxDQUFDO2dCQUNQLE9BQU8sRUFBQyxJQUFJO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUMsSUFBSTtnQkFDVCxLQUFLLEVBQUMsQ0FBQztnQkFDUCxPQUFPLEVBQUMsSUFBSTthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFDLElBQUk7Z0JBQ1QsS0FBSyxFQUFDLENBQUM7Z0JBQ1AsT0FBTyxFQUFDLEtBQUs7YUFDZDtZQUNEO2dCQUNFLElBQUksRUFBQyxJQUFJO2dCQUNULEtBQUssRUFBQyxDQUFDO2dCQUNQLE9BQU8sRUFBQyxLQUFLO2FBQ2Q7U0FDRjtLQUNGO0lBQ0QsU0FBUyxFQUFDO1FBQ1IsUUFBUSxFQUFFO1lBQUEsaUJBU1Q7WUFOQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUMsS0FBSztvQkFDOUIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDbkMsT0FBTyxDQUFDLENBQUE7Z0JBQ1YsQ0FBQyxDQUFFO2FBQ0YsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczp7XG4gICAgdmFsdWVzOntcbiAgICAgIHR5cGU6QXJyYXksXG4gICAgICB2YWx1ZTpbdHJ1ZSxmYWxzZSx0cnVlLHRydWVdXG4gICAgfVxuICB9LFxuICBkYXRhOntcbiAgICBsaXN0OltcbiAgICAgIHtcbiAgICAgICAgbmFtZTon5o+Q566xJyxcbiAgICAgICAgaW5kZXg6MCxcbiAgICAgICAgbGlnaHRVcDp0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTon5bCB562+JyxcbiAgICAgICAgaW5kZXg6MSxcbiAgICAgICAgbGlnaHRVcDp0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTon56OF5Y2VJyxcbiAgICAgICAgaW5kZXg6MixcbiAgICAgICAgbGlnaHRVcDpmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6J+WIsOi+vicsXG4gICAgICAgIGluZGV4OjMsXG4gICAgICAgIGxpZ2h0VXA6ZmFsc2UsXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBsaWZldGltZXM6e1xuICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIOWcqOe7hOS7tuWunuS+i+i/m+WFpemhtemdouiKgueCueagkeaXtuaJp+ihjFxuICAgICAgLy8gY29uc29sZS5sb2coJ2F0dGFjaGVkJyx0aGlzLmRhdGEpXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBsaXN0OnRoaXMuZGF0YS5saXN0Lm1hcCgodixpbmRleCk9PntcbiAgICAgICAgICB2LmxpZ2h0VXAgPSB0aGlzLmRhdGEudmFsdWVzW2luZGV4XVxuICAgICAgICAgIHJldHVybiB2XG4gICAgICAgIH0gKVxuICAgICAgICB9KVxuICAgIH0sXG4gIH1cbn0pIl19