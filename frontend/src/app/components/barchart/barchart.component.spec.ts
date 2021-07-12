/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LeistungService } from '../../services/leistung-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient ,HttpErrorResponse }   from '@angular/common/http';

import { BarchartComponent } from './barchart.component';

describe('BarchartComponent', () => {
  let component: BarchartComponent;
  let fixture: ComponentFixture<BarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartComponent],
      imports: [ HttpClientTestingModule ],
      providers: [LeistungService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartComponent);
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
    expect(component.data_inbetrieb.length).toBeLessThanOrEqual(0);
    expect(component.area.length).toBeLessThanOrEqual(0);
    expect(component.plz.length).toBeLessThanOrEqual(0);

    const temp_startdate : string = "2010-01-01";
    const temp_enddate : string = "2020-01-01";
    component.startdate= temp_startdate;
    component.enddate= temp_enddate;
    component.getdatafromapi()
    expect(component.temp0).not.toBeNull(); 
    expect(component.temp1).not.toBeNull();  
    expect(component.temp2).not.toBeNull();  
    expect(component.temp3).not.toBeNull();    
    expect(component.data_genehmigt.length).not.toBeNull(); 
    expect(component.data_inbetrieb.length).not.toBeNull(); 
    expect(component.area.length).not.toBeNull(); 
    expect(component.plz.length).not.toBeNull(); 

  });

});
