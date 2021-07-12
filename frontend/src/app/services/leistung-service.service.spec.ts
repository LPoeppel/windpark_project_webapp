/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeistungService } from './leistung-service.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient ,HttpErrorResponse }   from '@angular/common/http';

describe('Service: LeistungService', () => {
  let service: LeistungService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [LeistungService]
    });

    service = TestBed.inject(LeistungService);
  });

  it('service.getLeistung should be created', () => 
  {
    expect(service.getLeistung("2000/01/01","2010/01/01","Genehmigt,D")).toBeTruthy();
  });

  it('service.getLinechart should be created', () => 
  {
    expect(service.getLeistunglinechart("2000/01/01","2010/01/01","Genehmigt,D")).toBeTruthy();
  });


  it('service.getrotor_vs_narbe should be created', () => 
  {
    expect(service.getrotor_vs_narbe("2000/01/01","2010/01/01","Genehmigt,D")).toBeTruthy();
  });


  it('service.getPLZ should be created', () => 
  {
    expect(service.getplz("2000/01/01","2010/01/01","Genehmigt,D")).toBeTruthy();
  });

  it('service.getboxplot should be created', () => 
  {
    expect(service.getboxplot("2000/01/01","2010/01/01")).toBeTruthy();
  });

  it('service.getbuiltduration should be created', () => 
  {
    expect(service.getbuiltduration("2000/01/01","2010/01/01")).toBeTruthy();
  });
  
});
