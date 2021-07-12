import { Component, OnInit, ViewChild, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { wkaService } from '../../services/wka.service';
import { MapInfoWindow, GoogleMap } from '@angular/google-maps';
import { wka } from '../../models/wka.model';
import { marker } from '../../models/wka.model';
import { TileImageZoomChangingEventArgs } from 'igniteui-angular-core';

@Component({
  selector: 'wkamap',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit, OnChanges {
  constructor(private WKAService: wkaService) { }

  public wka: wka[];
  @Input() genehmigt: boolean;
  @Input() gebaut: boolean;
  @Input() latfromtable: number;
  @Input() lngfromtable: number;
  @Input() content: wka[];
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  ignorehidden: boolean = true;
  gridsize: number;
  zoom: number;
  lat: number;
  lng: number;
  radius: number;
  fillcolor: string = "blue";
  marker: marker[] = [];
  temp: marker;


  ngOnInit() {

    this.lat = 52.416454;
    this.lng = 13.237693;
    this.zoom = 8;
    this.radius = 0;
    this.genehmigt = true;
    this.gebaut = true;
    this.gridsize = 80;
    this.api_getmarker();

  }


  api_getmarker() {
    this.marker.length = 0;
    for (let element of this.content) {
      if (element["Status,C,20"] == 'vor Inbetriebnahme') {
        this.temp = {
          lat: element.Latitude,
          lng: element.Longitude,
          draggable: false,
          visible: true,
          betreiber: element["Anl_Bez,C,60"],
          address: element["PLZ,C,5"] + " " + element["Ort,C,254"],
          wkainfo: element["Wka_ID,C,15"],
          status: element["Status,C,20"],
          leistung: element["Leistung,N,13,3"],
          name: "genehmigt",
        }
      }

      else {
        this.temp = {
          lat: element.Latitude,
          lng: element.Longitude,
          draggable: false,
          visible: true,
          betreiber: element["Anl_Bez,C,60"],
          address: element["PLZ,C,5"] + " " + element["Ort,C,254"],
          wkainfo: element["Wka_ID,C,15"],
          name: "inbetrieb",
          status: element["Status,C,20"],
          leistung: element["Leistung,N,13,3"]
        };

      }
      this.marker.push(this.temp);
    }

  }


  ngOnChanges(changes: SimpleChanges) {

    if ((changes['latfromtable'] != undefined) && (changes['lngfromtable'] != undefined)) {
      this.passcoordinates(Number(this.latfromtable), Number(this.lngfromtable));
    }

    else if ((changes['gebaut'] != undefined) || (changes['genehmigt'] != undefined)) {
      if (!this.genehmigt) {
        for (let element of this.marker) {
          if (element.name == "genehmigt") {
            element.visible = false;
          }
        }
      }

      if (this.genehmigt) {
        for (let element of this.marker) {
          if (element.name == "genehmigt") {
            element.visible = true;
          }
        }
      }

      if (!this.gebaut) {
        for (let element of this.marker) {
          if (element.name == "inbetrieb") {
            element.visible = false;
          }
        }
      }

      if (this.gebaut) {
        for (let element of this.marker) {
          if (element.name == "inbetrieb") {
            element.visible = true;
          }
        }
      }

      if (this.zoom != 8) {
        this.zoom = 8;
      }
      else {
        this.zoom = this.zoom - 1;
      }
    }
    else {
      this.api_getmarker();
    }
  }

  // pass marked-marker to parent component
  @Output() selectedMarker = new EventEmitter<string>();
  addNewItem(value: string) {
    this.selectedMarker.emit(value);
  }

  passcoordinates(latNew: number, lngNew: number) {
    this.lat = Number(latNew);
    this.lng = Number(lngNew);
    this.radius = 100;
    if (this.zoom < 14) {
      this.zoom = 14;
    }
  }

  // End
}



