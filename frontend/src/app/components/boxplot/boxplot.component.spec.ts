/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoxplotComponent } from './boxplot.component';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LeistungService } from '../../services/leistung-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BoxplotComponent', () => {
  let component: BoxplotComponent;
  let fixture: ComponentFixture<BoxplotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoxplotComponent],
      imports: [HttpClientTestingModule],
      providers: [LeistungService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setoptions() should fullfill options var', () => {
    component.setoptions();
    expect(component.option).not.toBeNull;
  });

  it('#getmarker should fill marker array', () => {



    expect(component.datatemp.length).toBeLessThanOrEqual(0);


    const temp_startdate
      : string = "2010-01-01";
    const temp_enddate: string = "2020-01-01";
    component.startdate = temp_startdate;
    component.enddate = temp_enddate;
    component.getdatafromapi()
    expect(component.count).not.toBeNull();
    expect(component.data.length).not.toBeNull();


  });

  it('#ngonchenges test', () => {
    component.ngOnChanges();
    expect(component.count).toBeLessThanOrEqual(0);
  });





});
