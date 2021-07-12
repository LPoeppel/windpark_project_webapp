import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  form_startdate = new FormControl('2015-01-01');
  form_enddate = new FormControl('2020-01-01');

  startdate_api: string;
  enddate_api: string;


  update() {
    this.startdate_api = this.form_startdate.value;
    this.enddate_api = this.form_enddate.value;
  }


  ngOnInit() {
    this.update();
  }

}
