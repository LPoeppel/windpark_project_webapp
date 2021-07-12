import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { leistung, leistungtable, hubrotor, plz, builtduration } from '../models/statistic.model';

@Injectable()
export class LeistungService {
  private serviceUrl: string;

  constructor(private http: HttpClient) { }

  getLeistung(start: string, end: string, kind: string): Observable<leistung[]> {
    this.serviceUrl = '/teamtrivial/api/full-power?until=' + end + '&from=' + start + '&filterProperty=' + kind;
    return this.http.get<leistung[]>(this.serviceUrl);
  }

  getLeistunglinechart(start: string, end: string, kind: string): Observable<leistungtable[]> {
    this.serviceUrl = '/teamtrivial/api/power-per-year?until=' + end + '&from=' + start + '&filterProperty=' + kind;
    return this.http.get<leistungtable[]>(this.serviceUrl);
  }

  getrotor_vs_narbe(start: string, end: string, kind: string): Observable<hubrotor[]> {
    this.serviceUrl = '/teamtrivial/api/hub-rotor?until=' + end + '&from=' + start + '&filterProperty=' + kind;
    return this.http.get<hubrotor[]>(this.serviceUrl);
  }

  getplz(start: string, end: string, kind: string): Observable<plz[]> {
    this.serviceUrl = '/teamtrivial/api/power-per-area-code?until=' + end + '&from=' + start + '&filterProperty=' + kind;
    return this.http.get<plz[]>(this.serviceUrl);
  }

  getboxplot(start: string, end: string): Observable<number[]> {
    this.serviceUrl = '/teamtrivial/api/approved-built-difference?until=' + end + '&from=' + start;
    return this.http.get<number[]>(this.serviceUrl);
  }

  getbuiltduration(start: string, end: string): Observable<builtduration[]> {
    this.serviceUrl = '/teamtrivial/api/average-built-duration?until=' + end + '&from=' + start + '&amount=25';
    return this.http.get<builtduration[]>(this.serviceUrl);
  }

  //END
}

