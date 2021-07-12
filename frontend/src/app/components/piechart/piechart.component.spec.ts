/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PiechartComponent } from './piechart.component';
import { LeistungService } from '../../services/leistung-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { doesNotReject } from 'assert';

describe('PiechartComponent', () => {
  let component: PiechartComponent;
  let fixture: ComponentFixture<PiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PiechartComponent],
      imports: [HttpClientTestingModule],
      providers: [LeistungService]
    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run async test with task', async function () {
    const spyTest = spyOn(component, 'getdatafromapi');
    component.ngOnChanges();
    expect(spyTest).toHaveBeenCalled();
  });

  /*it('check options value after #getdatafromapi call', waitForAsync(() => {
    component.getdatafromapi().then(() => {
      expect(component.option).not.toBeNull();
    })
  }));*/

  it('#getmarker should fill marker array', () => {



    const temp_startdate: string = "2010-01-01";
    const temp_enddate: string = "2020-01-01";
    component.startdate = temp_startdate;
    component.enddate = temp_enddate;
    component.getdatafromapi()
    expect(component.leistung_genehmigt_arr).not.toBeNull();
    expect(component.leistung_inbetriebnahme_arr).not.toBeNull();


  });

  it('setoptions() should fullfill options var', () => {
    component.setoptions();
    expect(component.option).not.toBeNull;
  });




});
