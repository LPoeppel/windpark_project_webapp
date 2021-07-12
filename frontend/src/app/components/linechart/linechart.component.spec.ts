/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LinechartComponent } from './linechart.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LeistungService } from '../../services/leistung-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('LinechartComponent', () => {
  let component: LinechartComponent;
  let fixture: ComponentFixture<LinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinechartComponent],
      imports: [HttpClientTestingModule],
      providers: [LeistungService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setoptions() should fullfill options var', () => {
    component.setoption();
    expect(component.option).not.toBeNull;
  });

  it('#getmarker should fill marker array', () => {


    expect(component.data_genehmigt.length).toBeLessThanOrEqual(0);
    expect(component.data_inbetrieb.length).toBeLessThanOrEqual(0);
    expect(component.data_inbetrieb.length).toBeLessThanOrEqual(0);


    const temp_startdate: string = "2010-01-01";
    const temp_enddate: string = "2020-01-01";
    component.startdate = temp_startdate;
    component.enddate = temp_enddate;
    component.getdatafromapi()
    expect(component.data_genehmigt.length).not.toBeNull();
    expect(component.data_inbetrieb.length).not.toBeNull();

  });




});
