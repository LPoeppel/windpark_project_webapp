import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayComponent } from './overlay.component';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

describe('OverlayComponent', () => {
  let component: OverlayComponent;
  let fixture: ComponentFixture<OverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverlayComponent],
      providers: [Overlay]
    })
      .compileComponents();
      
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should show overlay', () => {
    
      component.createGlobalOverlay();
      
      
  
    });
});
