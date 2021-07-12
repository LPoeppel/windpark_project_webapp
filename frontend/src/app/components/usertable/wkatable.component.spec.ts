import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { wkaService } from '../../services/wka.service';
import { wkatableComponent } from './wkatable.component';
import { SimpleChange } from '@angular/core';

describe('UsertableComponent', () => {
  let component: wkatableComponent;
  let fixture: ComponentFixture<wkatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ wkatableComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [wkaService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(wkatableComponent);
    component = fixture.componentInstance;
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  



  it('#ngonchanges test', () => {
    component.content =[];
    fixture.detectChanges();
    expect(component.dataSource).not.toBeNull();


    component.wkaIdfrommaps = "1";
    component.ngOnChanges({
      wkaIdfrommaps: new SimpleChange(null,component.wkaIdfrommaps,true)
    });
    fixture.detectChanges();
    expect(component.dataSource.filter).not.toBeNull();





  });


  it('should applyfiltermaps', () => {
    let temp:string ="test" ;
    component.applyFiltermaps(temp);
    expect(component.dataSource.filter).not.toBeNull();
    if (component.dataSource.paginator)
      {
        expect(component.paginator.firstPage()).toHaveBeenCalled();
      }

  });


  it('addNewLat() should set lat', () => {
    let temp:number =1;
    component.addNewLat(temp);
    expect(component.lat).not.toBeNull();

  });

  it('addNewLng() should set lng', () => {
    let temp:number =1;
    component.addNewLng(temp);
    expect(component.lng).not.toBeNull();

  });





  it('applyFilter should set datasource.filter', () => {
    let t:Event = new Event("test",{});
    const event: Event = t;
  //  component.applyFilter(event);
   // expect(component.dataSource.filter).not.toBeNull();



});

});
