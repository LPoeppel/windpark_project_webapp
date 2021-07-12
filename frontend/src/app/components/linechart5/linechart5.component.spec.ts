/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Linechart5Component } from './linechart5.component';
import { LeistungService } from '../../services/leistung-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Linechart5Component', () => {
  let component: Linechart5Component;
  let fixture: ComponentFixture<Linechart5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Linechart5Component],
      imports: [HttpClientTestingModule],
      providers: [LeistungService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Linechart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setoptions() should fullfill options var', () => {
    component.setoption();
    expect(component.options).not.toBeNull;
  });

  it('#getmarker should fill marker array', () => {


    expect(component.data.length).toBeLessThanOrEqual(0);
    expect(component.xAxisData).toBeLessThanOrEqual(0);

    const temp_startdate: string = "2010-01-01";
    const temp_enddate: string = "2020-01-01";
    component.startdate = temp_startdate;
    component.enddate = temp_enddate;
    component.getdatafromapi()
    expect(component.xAxisData.length).not.toBeNull();
    expect(component.data.length).not.toBeNull();


  });

});
