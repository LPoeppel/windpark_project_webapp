import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LeistungService } from '../../services/leistung-service.service';
import { leistungtable } from '../../models/statistic.model';

@Component({
  selector: 'linechart',
  templateUrl: './linechart.component.html'
})

export class LinechartComponent implements OnChanges, OnInit {

  constructor(private Service: LeistungService) { };
  public leistung_genehmigt_arr: leistungtable[];
  public leistung_inbetriebnahme_arr: leistungtable[];
  option: any;
  leistung_genehmigt: number;
  leistung_inbetriebnahme: number;
  @Input() startdate: string;
  @Input() enddate: string;
  options: any;
  loading: boolean;


  xAxisData: number[] = [];
  data_genehmigt: number[] = [];
  data_inbetrieb: number[] = [];


  ngOnInit(): void {


  }




  async ngOnChanges() {
    this.getdatafromapi();
  }


  async getdatafromapi() {

    this.loading = true;
    this.Service.getLeistunglinechart(this.startdate, this.enddate, 'Genehmigt,D').subscribe(res => {
      this.xAxisData = [];
      this.data_genehmigt = [];
      for (let element of res) {
        this.xAxisData.push(element.year);
        this.data_genehmigt.push(Math.round(element.power));
      }

      this.Service.getLeistunglinechart(this.startdate, this.enddate, 'Inbetriebn,D').subscribe(res2 => {

        this.data_inbetrieb = [];
        for (let element of res2) {
          this.data_inbetrieb.push(Math.round(element.power));
        }

        this.setoption();
        this.loading = false;
      });
    });
  }

  setoption() {
    this.options = {
      legend: {
        data: ['Genehmigt', 'Inbetriebnahme'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: this.xAxisData,
        nameLocation: 'end',
        name: "Jahr",
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: [{
        type: "value",
        name: "Leistung in MW"
      }],
      series: [
        {
          name: 'Inbetriebnahme',
          type: 'line',
          data: this.data_inbetrieb,
          animationDelay: (idx) => idx * 10 + 100,
        },
        {
          name: 'Genehmigt',
          type: 'line',
          data: this.data_genehmigt,
          animationDelay: (idx) => idx * 10,
        }

      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }

}
