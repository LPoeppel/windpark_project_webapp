import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LeistungService } from '../../services/leistung-service.service';

@Component({
  selector: 'barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})


export class BarchartComponent implements OnInit, OnChanges {

  constructor(private Service: LeistungService) { };
  @Input() startdate: string;
  @Input() enddate: string;
  option: any;

  data_genehmigt: number[] = [];
  data_inbetrieb: number[] = [];
  public plz: number[] = [];
  public area: string[] = [];

  temp0;
  temp1;
  temp2;
  temp3;

  ngOnChanges() {
    this.getdatafromapi();
  }

  async getdatafromapi() {
    this.Service.getplz(this.startdate, this.enddate, 'Genehmigt,D').subscribe(res => {
      this.data_genehmigt = [];
      this.plz = [];
      this.area = [];
      for (let element of res) {
        this.temp0 = [element.plz];
        this.temp1 = Math.round(element.power);
        this.temp3 = element.area;
        this.plz.push(this.temp0);
        this.area.push(this.temp3);
        this.data_genehmigt.push(this.temp1);

      }

      this.Service.getplz(this.startdate, this.enddate, 'Inbetriebn,D').subscribe(res2 => {
        this.data_inbetrieb = [];
        for (let element of res2) {
          this.temp2 = Math.round(element.power);
          this.data_inbetrieb.push(this.temp2)
        }

        this.setoptions();
      });
    });
  }

  setoptions() {
    let area: string[] = this.area;

    this.option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function (params) {
          try {
            return [
              params[0].name,
              area[params[0].dataIndex],
              " ",
              params[0].seriesName + ": " + params[0].value + " MW",
              params[1].seriesName + ": " + params[1].value + " MW",

            ].join('<br/>');
          }
          catch (e) { return params[0].name + " <br/>" + area[params[0].dataIndex] }

        }
      },
      legend: {
        data: ['Genehmigt', 'Inbetriebnahme'],
        align: 'left',
      },
      xAxis: {
        name: 'Postleitzahl',
        nameLocation: 'end',
        type: 'category',
        data: [this.plz[0], this.plz[1], this.plz[2], this.plz[3], this.plz[4], this.plz[5], this.plz[6], this.plz[7], this.plz[8], this.plz[9]]
      },
      yAxis: {
        name: 'Leistung in MW',
        type: 'value'

      },
      series: [{
        name: 'Inbetriebnahme',
        data: this.data_inbetrieb,
        type: 'bar'
      },
      {
        name: 'Genehmigt',
        data: this.data_genehmigt,
        type: 'bar',

      },



      ]
    };
  }







  ngOnInit() {

  }

}
