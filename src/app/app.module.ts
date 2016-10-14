import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CargoRoutingModule } from './app-routing.module';


import { FnService, TrailService, DecamelPipe } from './shared';


import {
  UiComponent, ControlsComponent, ContainersComponent, DataComponent,
  ButtonComponent, CheckComponent, 
  RowComponent, ColComponent, FlyComponent, WrapComponent,
  D1Component, D2Component, ObjComponent
} from './ui';


import { 
  HomeComponent,
  InvoicesComponent, 
  InvoiceDetailsComponent, 
  ChargeDetailsComponent, 
  ShipmentsComponent, 
  ShipmentDetailsComponent 
} from './pages';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    ControlsComponent,
    ContainersComponent,
    DataComponent,
    ButtonComponent,
    CheckComponent,
    RowComponent,
    ColComponent,
    FlyComponent,
    WrapComponent,
    D1Component,
    D2Component,
    HomeComponent,
    InvoicesComponent,
    ShipmentsComponent,
    ShipmentDetailsComponent,
    InvoiceDetailsComponent,
    ChargeDetailsComponent,
    ObjComponent,
    DecamelPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CargoRoutingModule
  ],
  providers: [FnService, TrailService],
  bootstrap: [AppComponent]
})
export class AppModule { }