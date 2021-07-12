import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from "@angular/google-maps";
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { AgmCoreModule } from '@agm/core';
import { AgmMarkerClustererModule } from '@agm/markerclusterer';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { wkatableComponent } from './components/usertable/wkatable.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import { ScatterchartComponent } from './components/scatterchart/scatterchart.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { BoxplotComponent } from './components/boxplot/boxplot.component';
import { Linechart5Component } from './components/linechart5/linechart5.component';
import { InputComponent } from './components/input/input.component';
import { MapsComponent } from './components/maps/maps.component';
import { InputMapsComponent } from './components/input-maps/input-maps.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { wkaService } from './services/wka.service';
import { LeistungService } from './services/leistung-service.service';


@NgModule({
  declarations: [
    AppComponent,
    wkatableComponent,
    LinechartComponent,
    ScatterchartComponent,
    BarchartComponent,
    BoxplotComponent,
    Linechart5Component,
    InputComponent,
    PiechartComponent,
    InputMapsComponent,
    MapsComponent,
    OverlayComponent,
    SpinnerComponent



  ],
  imports: [
    BrowserModule,
    AgmMarkerClustererModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQh7yjea5RgqtEPAEdaWfQio1nyQ8v10I'
    }),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    MatTabsModule,
    AppRoutingModule,
    MatGridListModule,
    HttpClientModule,
    GoogleMapsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    OverlayModule


  ],
  providers: [wkaService, LeistungService],
  bootstrap: [AppComponent],
  entryComponents: [SpinnerComponent]
})
export class AppModule { }
