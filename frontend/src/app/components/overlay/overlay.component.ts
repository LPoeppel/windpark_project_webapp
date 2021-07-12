import { Component, OnInit, Input, OnChanges, } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SpinnerComponent } from '../spinner/spinner.component';



@Component({
  selector: 'overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit, OnChanges {
  constructor(private overlay: Overlay) {

  }
  @Input() progress: boolean;
  private overlayRef: OverlayRef;



  createGlobalOverlay() {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true,
    })

  }

  showOverlay() {
    this.overlayRef.attach(new ComponentPortal(SpinnerComponent));
  }

  destroyOverlay() {
    this.overlayRef.detach();
  }


  ngOnInit() {
    this.createGlobalOverlay();
    this.showOverlay();
  }


  ngOnChanges() {
    if (!this.progress) {
      this.destroyOverlay();
    }
    else {
      this.showOverlay();
    }
  }



}