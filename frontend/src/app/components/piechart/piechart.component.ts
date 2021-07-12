import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LeistungService } from '../../services/leistung-service.service';
import { leistung } from '../../models/statistic.model';



@Component({
    selector: 'piechart',
    templateUrl: './piechart.component.html',
    styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit, OnChanges {

    constructor(private Service: LeistungService) { };
    public leistung_genehmigt_arr: leistung[];
    public leistung_inbetriebnahme_arr: leistung[];
    option: any;
    leistung_genehmigt: number;
    leistung_inbetriebnahme: number;
    @Input() startdate: string;
    @Input() enddate: string;




    async ngOnInit() {



    }

    ngOnChanges() {
        this.getdatafromapi();
    }

    async getdatafromapi() {
        this.Service.getLeistung(this.startdate, this.enddate, 'Genehmigt,D').subscribe(res => {
            this.leistung_genehmigt_arr = res; //get "genehmigt sum" from api  
            this.leistung_genehmigt = Math.round(this.leistung_genehmigt_arr['sum']);


            this.Service.getLeistung(this.startdate, this.enddate, 'Inbetriebn,D').subscribe(res2 => {
                this.leistung_inbetriebnahme_arr = res2;//get "inbetriebnahme sum"  from api 
                this.leistung_inbetriebnahme = Math.round(this.leistung_inbetriebnahme_arr['sum']);

                this.setoptions();
            });
        });
    }


    setoptions() {
        this.option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)'
            },
            legend: {
                align: 'left',
                data: ['Genehmigt', 'Inbetriebnahme']
            },
            series: [
                {

                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '18',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [

                        { value: this.leistung_inbetriebnahme, name: 'Inbetriebnahme' },
                        { value: this.leistung_genehmigt, name: 'Genehmigt' }

                    ]
                }
            ]
        };


    }


}
