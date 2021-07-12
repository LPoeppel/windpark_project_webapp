import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { LeistungService } from '../../services/leistung-service.service';
import { builtduration } from '../../models/statistic.model';

@Component({
  selector: 'linechart5',
  templateUrl: './linechart5.component.html',
  styleUrls: ['./linechart5.component.css']
})
export class Linechart5Component implements OnInit, OnChanges {
  constructor(private Service: LeistungService) { };

  public buildduration: builtduration[];
  @Input() startdate: string;
  @Input() enddate: string;
  options: any;
  xAxisData: string[] = [];
  data: number[] = [];

  ngOnInit(): void {

  }

  async ngOnChanges() {
    this.getdatafromapi();
  }

  async getdatafromapi() {

    this.Service.getbuiltduration(this.startdate, this.enddate).subscribe(res => {
      this.xAxisData = [];
      this.data = [];

      for (let element of res) {
        let dateandtime = new Date(element.currentDate);
        let onlydate: string = String(dateandtime.getDate() + "." + (dateandtime.getMonth() + 1) + "." + dateandtime.getFullYear());

        this.xAxisData.push(onlydate);
        this.data.push(Math.round(element.average));
      }
      this.setoption();
    });
  }

  setoption() {
    this.options = {
      tooltip: {},
      xAxis: {
        data: this.xAxisData,
        nameLocation: 'end',
        name: "Zeitraum",
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: [{
        type: "value",
        name: "Baudauer in Tagen"
      }],
      series: [
        {
          name: 'Baudauer',
          type: 'line',
          data: this.data,
          smooth: true,
          animationDelay: (idx) => idx * 10 + 100,
        }

      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }

  //END  
}





