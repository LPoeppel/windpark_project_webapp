import { Component, OnInit, ViewChild, AfterViewInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { wkaService } from '../../services/wka.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { wka } from '../../models/wka.model';
import { marker } from '../../models/wka.model';

@Component({
  selector: 'wkatable',
  templateUrl: './wkatable.component.html',
  styleUrls: ['./wkatable.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),

    ]),
  ]
})

export class wkatableComponent implements OnInit, AfterViewInit, OnChanges {
  constructor(private userService: wkaService) { }
  dataSource = new MatTableDataSource<wka>();
  public wka_Genehmigt: wka[];
  public wka_inBetrieb: wka[];
  public wka_all: wka[];
  expandedElement: wka | null;
  markers: marker[] = [];
  temp: marker;
  @Input() wkaIdfrommaps: string;
  @Input() content: wka[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['Bst_Name,C,120', 'PLZ,C,5', 'Ort,C,254', 'Anl_Nr,C,9', 'Leistung,N,13,3', 'Status,C,20'];


  ngOnInit() {
    this.dataSource.data = this.content;
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges) {

    if ((changes['wkaIdfrommaps'] != undefined)) {
      this.applyFiltermaps(this.wkaIdfrommaps);
    }
    else {
      this.dataSource.data = this.content;
      this.applyFiltermaps(" ");
    }


  }
  applyFiltermaps(event: string) {
    const filterValue = String(event);
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // pass marked-table-content to parent component
  @Output() lat = new EventEmitter<number>();
  @Output() lng = new EventEmitter<number>();
  addNewLat(value: number) {
    this.lat.emit(value);
  }
  addNewLng(value: number) {
    this.lng.emit(value);
  }


  // END
}



