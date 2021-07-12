import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { wkaService } from '../../services/wka.service';
import { wka } from '../../models/wka.model';



@Component({
   selector: 'input-maps',
   templateUrl: './input-maps.component.html',
   styleUrls: ['./input-maps.component.css']
})
export class InputMapsComponent implements OnInit {
   constructor(private apiservice: wkaService) { };
   startdate = new FormControl('2015-01-01');
   enddate = new FormControl('2020-01-01');
   startdate_api: string;
   enddate_api: string;
   genehmigt: boolean = true;
   gebaut: boolean = true;
   wkaidfrommaps: string;
   lat: number;
   lng: number;
   wka_Genehmigt: wka[];
   wka_all: wka[];
   wka_temp: wka[];
   counter: number;
   loading: boolean;



   async api_getdatabase() {
      this.loading = true;
      this.wka_Genehmigt.length = 0;
      this.wka_all.length = 0;
      this.wka_temp.length = 0;
      this.counter = 0;
      this.enddate_api = this.enddate.value;
      this.startdate_api = this.startdate.value;


      this.apiservice.getWKA(this.startdate_api, this.enddate_api, 'Genehmigt,D').subscribe(res => {
         this.wka_Genehmigt = res;

         this.apiservice.getWKA(this.startdate_api, this.enddate_api, 'Inbetriebn,D').subscribe(res1 => {
            for (let element_Genehmigt of this.wka_Genehmigt) {

               for (let element_res1 of res1) {
                  if (element_Genehmigt["Wka_ID,C,15"] == element_res1["Wka_ID,C,15"]) // remove dublicates
                  {
                     this.counter = this.counter + 1;
                  }
               }

               if (this.counter == 0) {
                  this.wka_temp.push(element_Genehmigt);
               }
               this.counter = 0;

            }
            this.wka_all = this.wka_temp.concat(res1);
            this.loading = false;
         });
      });

   }


   addWkaID(newItem: string) {
      this.wkaidfrommaps = newItem;
   }

   selectedTable_lat(newItem: number) {
      this.lat = newItem;
   }

   selectedTable_lng(newItem: number) {
      this.lng = newItem;
   }


   ngOnInit() {
      this.loading = true;
      this.wka_all = [];
      this.wka_Genehmigt = [];
      this.wka_temp = [];
      this.api_getdatabase();
   }

}
