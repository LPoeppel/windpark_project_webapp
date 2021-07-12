import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LeistungService } from '../../services/leistung-service.service';
import { prepareBoxplotData } from 'echarts/extension/dataTool';


@Component({
    selector: 'boxplot',
    templateUrl: './boxplot.component.html',
    styleUrls: ['./boxplot.component.css']
})
export class BoxplotComponent implements OnInit {
    constructor(private Service: LeistungService) { };
    @Input() startdate: string;
    @Input() enddate: string;
    option: any;
    datatemp: number[] = []
    count: number;


    data = prepareBoxplotData(

        this.datatemp

    );

    ngOnChanges() {


        this.count = 0;


        this.getdatafromapi();

    }


    async getdatafromapi() {
        this.Service.getboxplot(this.startdate, this.enddate).subscribe(res => {
            this.data = [];
            this.datatemp = [];
            this.datatemp = res;
            this.data = prepareBoxplotData([

                this.datatemp

            ]);
            this.count = this.datatemp.length;

            this.setoptions();
        });
    }



    setoptions() {
        this.option = {

            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'shadow'
                }
            },

            xAxis: {
                type: 'category',
                data: this.data.axisData,
                boundaryGap: true,
                nameGap: 30,
                splitArea: {
                    show: false
                },
                axisLabel: {
                    formatter: this.count + " Datensätze"
                },
                splitLine: {
                    show: false
                }
            },


            yAxis: {
                type: 'value',
                name: 'Baudauer in Tagen',
                splitArea: {
                    show: true
                }
            },
            series: [
                {
                    boxWidth: ['35%', '35%'],
                    itemStyle: {

                        borderWidth: 2
                    },
                    name: 'boxplot',
                    type: 'boxplot',
                    data: this.data.boxData,
                    tooltip: {
                        formatter: function (param) {
                            return [
                                'upper: ' + param.data[5],
                                'Q3: ' + param.data[4],
                                'median: ' + param.data[3],
                                'Q1: ' + param.data[2],
                                'lower: ' + param.data[1]
                            ].join('<br/>');
                        }
                    }
                },
                {
                    name: 'outlier',
                    type: 'scatter',
                    data: this.data.outliers
                }
            ]
        };
    }




    ngOnInit() {
    }

}
