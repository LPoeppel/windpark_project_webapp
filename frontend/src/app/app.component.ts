import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ThemePalette } from '@angular/material/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  background: ThemePalette = 'warn';
  startdate = new FormControl('2010-01-01');



  async ngOnInit() {


  }




}

