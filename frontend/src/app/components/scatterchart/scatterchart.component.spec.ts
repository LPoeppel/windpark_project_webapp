/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScatterchartComponent } from './scatterchart.component';
import { LeistungService } from '../../services/leistung-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ScatterchartComponent', () => {
  let component: ScatterchartComponent;
  let fixture: ComponentFixture<ScatterchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScatterchartComponent],
      imports: [HttpClientTestingModule],
      providers: [LeistungService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterchartComponent);
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


    expect(component.data_genehmigt.length).toBeLessThanOrEqual(0);
    expect(component.data_inbetrieb).toBeLessThanOrEqual(0);

    const temp_startdate: string = "2010-01-01";
    const temp_enddate: string = "2020-01-01";
    component.startdate = temp_startdate;
    component.enddate = temp_enddate;
    component.getdatafromapi()
    expect(component.data_inbetrieb.length).not.toBeNull();
    expect(component.data_genehmigt.length).not.toBeNull();


  });





});
