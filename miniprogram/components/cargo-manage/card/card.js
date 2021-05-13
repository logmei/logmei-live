"use strict";
Component({
    properties: {
        values: {
            type: Object,
            value: {
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
                    value: ['铁路箱', '35吨通用集装箱']
                },
                progress: {
                    type: Array,
                    value: [true, false, false, false]
                },
                showButton: {
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
    data: {
        types: {
            heavy: {
                className: 'heavy_class',
                text: '重'
            }
        }
    },
    methods: {
        onTap: function () {
            this.triggerEvent('onClick', {});
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQUNSLFVBQVUsRUFBQztRQUNULE1BQU0sRUFBQztZQUNMLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFDO2dCQUNKLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsTUFBTTtvQkFDWixLQUFLLEVBQUUsT0FBTztpQkFDZjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsSUFBSSxFQUFFLE1BQU07b0JBQ1osS0FBSyxFQUFFLGFBQWE7aUJBQ3ZCO2dCQUNELElBQUksRUFBRTtvQkFDRixJQUFJLEVBQUUsTUFBTTtvQkFDWixLQUFLLEVBQUUsaUJBQWlCO2lCQUMzQjtnQkFDRCxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE1BQU07b0JBQ1osS0FBSyxFQUFFLFNBQVM7aUJBQ25CO2dCQUNELE1BQU0sRUFBRTtvQkFDSixJQUFJLEVBQUUsS0FBSztvQkFDWCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUMsVUFBVSxDQUFDO2lCQUM1QjtnQkFDRCxRQUFRLEVBQUU7b0JBQ04sSUFBSSxFQUFFLEtBQUs7b0JBQ1gsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDO2lCQUNsQztnQkFDRCxVQUFVLEVBQUM7b0JBQ1QsSUFBSSxFQUFFLE9BQU87b0JBQ2IsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0QsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxPQUFPO2lCQUNqQjthQUNGO1NBRUY7S0FFRjtJQUNELElBQUksRUFBQztRQUNILEtBQUssRUFBQztZQUNKLEtBQUssRUFBQztnQkFDSixTQUFTLEVBQUMsYUFBYTtnQkFDdkIsSUFBSSxFQUFDLEdBQUc7YUFDVDtTQUNGO0tBQ0Y7SUFDRCxPQUFPLEVBQUM7UUFDTixLQUFLLEVBQUU7WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBQyxFQUFFLENBQUMsQ0FBQTtRQUNqQyxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbkNvbXBvbmVudCh7XG4gIHByb3BlcnRpZXM6e1xuICAgIHZhbHVlczp7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZTp7XG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgdmFsdWU6ICdoZWF2eSdcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnVEJKVTIzNDU2NzgnXG4gICAgICAgIH0sXG4gICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnMjAyMS0yLTIzIDIzOjIzJ1xuICAgICAgICB9LFxuICAgICAgICByaWdodFRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ+S6rEFCSzg5OCdcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIHZhbHVlOiBbJ+mTgei3r+eusScsJzM15ZCo6YCa55So6ZuG6KOF566xJ11cbiAgICAgICAgfSxcbiAgICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgdmFsdWU6IFt0cnVlLGZhbHNlLGZhbHNlLGZhbHNlXVxuICAgICAgICB9LFxuICAgICAgICBzaG93QnV0dG9uOntcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvblRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAn56Gu6K6k5bm25o+Q6YaSJ1xuICAgICAgICB9LFxuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gIH0sXG4gIGRhdGE6e1xuICAgIHR5cGVzOntcbiAgICAgIGhlYXZ5OntcbiAgICAgICAgY2xhc3NOYW1lOidoZWF2eV9jbGFzcycsXG4gICAgICAgIHRleHQ6J+mHjSdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6e1xuICAgIG9uVGFwOiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ29uQ2xpY2snLHt9KVxuICAgIH1cbiAgfVxufSkiXX0=