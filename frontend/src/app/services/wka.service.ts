import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { wka } from '../models/wka.model';
@Injectable()
export class wkaService {
  private serviceUrlTable: string;
  private serviceUrlmaps: string;

  constructor(private http: HttpClient) { }

  getWKA(start: string, end: string, kind: string): Observable<wka[]> {
    this.serviceUrlTable = '/teamtrivial/api/turbines?until=' + end + '&from=' + start + '&filterProperty=' + kind;
    return this.http.get<wka[]>(this.serviceUrlTable);
  }

}
