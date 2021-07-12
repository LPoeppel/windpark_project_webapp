import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LeistungService } from '../../services/leistung-service.service';
import { hubrotor } from '../../models/statistic.model';
import { _getOptionScrollPosition } from '@angular/material/core';

@Component({
  selector: 'scatterchart',
  templateUrl: './scatterchart.component.html',
  styleUrls: ['./scatterchart.component.css']
})
export class ScatterchartComponent implements OnInit {
  constructor(private Service: LeistungService) { };
  @Input() startdate: string;
  @Input() enddate: string;
  option: any;

  data_genehmigt: hubrotor[] = [];
  data_inbetrieb: hubrotor[] = [];
  temp;







  ngOnInit() {

  }

  ngOnChanges() {

    this.getdatafromapi();

  }

  async getdatafromapi() {
    this.Service.getrotor_vs_narbe(this.startdate, this.enddate, 'Genehmigt,D').subscribe(res => {
      this.data_genehmigt = [];
      for (let element of res) {
        this.temp = [element.hub, element.rotor]
        this.data_genehmigt.push(this.temp)
      }




      this.Service.getrotor_vs_narbe(this.startdate, this.enddate, 'Inbetriebn,D').subscribe(res2 => {
        this.data_inbetrieb = [];
        for (let element of res2) {

          this.temp = [element.hub, element.rotor]
          this.data_inbetrieb.push(this.temp)

        }



        this.setoptions();
      });
    });
  }


  setoptions() {
    this.option = {

      legend: {
        data: ['Genehmigt', 'Inbetriebnahme'],
        align: 'left',
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow'
        },
        formatter: 'Nabenhöhe,Rotordurchmesser: <br/> {c}'

      },

      xAxis: {
        name: 'Nabenhöhe in Meter',
        nameLocation: 'end',
        scale: true
      },
      yAxis: {
        name: 'Rotordurchmesser in Meter',
        scale: true
      },
      series: [{
        name: 'Inbetriebnahme',
        type: 'scatter',
        symbolSize: 10,
        data: this.data_inbetrieb

      }, {
        name: 'Genehmigt',
        type: 'scatter',
        data: this.data_genehmigt

      }]
    };

  }

}
