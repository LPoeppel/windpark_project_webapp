/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputMapsComponent } from './input-maps.component';
import { wkaService } from '../../services/wka.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('InputMapsComponent', () => {
  let component: InputMapsComponent;
  let fixture: ComponentFixture<InputMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputMapsComponent],
      imports: [HttpClientTestingModule],
      providers: [wkaService]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#addWKAID() should set wkaidfrommaps', () => {
    component.addWkaID('test')
    expect(component.wkaidfrommaps).toEqual('test');
  });

  it('#selectedTable_lat() should set lat', () => {
    component.selectedTable_lat(11)
    expect(component.lat).toBeLessThanOrEqual(11);
  });

  it('#selectedTable_lng() should set lng', () => {
    component.selectedTable_lng(11)
    expect(component.lng).toBeLessThanOrEqual(11);
  });



});
