/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { wka } from '../../models/wka.model';
import { MapsComponent } from './maps.component';
import { wkaService } from '../../services/wka.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MapsComponent', () => {
  let component: MapsComponent;
  let fixture: ComponentFixture<MapsComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapsComponent],
      imports: [HttpClientTestingModule],
      providers: [wkaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsComponent);
    component = fixture.componentInstance;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });




  it('#marked marker from parent component', () => {

    component.addNewItem("test");
    expect(component.selectedMarker).not.toBeNull();
  });

  
    it('#ngonchanges test', () => { 

      component.content = [];
      
      component.latfromtable = 1;
      component.lngfromtable = 1;
      component.genehmigt = true;
      component.gebaut = true;
      component.zoom=9;
      component.api_getmarker();
  
  
      component.ngOnChanges({         
        lat: new SimpleChange(null,component.latfromtable,true),
        lng: new SimpleChange(null,component.lngfromtable,true)
      });
  
      fixture.detectChanges();

      expect(component.lat).not.toBeNull();  
      expect(component.lng).not.toBeNull(); 
  
 
      component.ngOnChanges({         
       gebaut: new SimpleChange(null,component.gebaut,true)      
      });
      fixture.detectChanges();
      for(let element of component.marker) 
      {
        if (element.name == "genehmigt")
        {
          expect(element.visible).toBeTrue();
        } 
  
        if (element.name == "inbetrieb")
        {
          expect(element.visible).toBeTrue();
        } 
      }
      expect(component.zoom).toBeLessThanOrEqual(8);  
    
    });
  
  
    it('should pass coordinates from table to maps', () => {
      component.latfromtable= 11;
      component.lngfromtable= 11;
      component.zoom = 11;
      component.passcoordinates(component.latfromtable,component.lngfromtable);
      expect(component.lng).toBe(11);
      expect(component.lat).toBe(11);
      expect(component.radius).toBe(100);
      expect(component.zoom).toBe(14);
    }); 


  
  
});
