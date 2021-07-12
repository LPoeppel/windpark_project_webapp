import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { wkaService } from './wka.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('wkaService', () => {
  let service: wkaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [wkaService],
      imports: [HttpClientTestingModule]

    });
    service = TestBed.inject(wkaService);

  });


  it('service.getWKA should be created', () => {
    expect(service.getWKA("2000/01/01", "2010/01/01", "Genehmigt,D")).toBeTruthy();
  });













});
