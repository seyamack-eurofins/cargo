

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { 
  HomeComponent, 
  InvoicesComponent, 
  InvoiceDetailsComponent, 
  ChargeDetailsComponent, 
  ShipmentsComponent, 
  ShipmentDetailsComponent 
} from './pages';


import { UiComponent, UI_ROUTES } from './ui';


const routes: Routes = [
  { path: 'ui', component: UiComponent },
  { path: 'ui', component: UiComponent, children: UI_ROUTES },
  
  { path: 'invoices', component: InvoicesComponent },
  { path: 'invoices/:id', component: InvoiceDetailsComponent },
  { path: 'invoices/charges', component: InvoiceDetailsComponent },

  { path: 'invoices/:id/:id', component: ChargeDetailsComponent },
  { path: 'invoices/charges/allocation', component: ChargeDetailsComponent },
  
  { path: 'shipments', component: ShipmentsComponent },
  { path: 'shipments/:id', component: ShipmentDetailsComponent },
  { path: 'shipments/details', component: ShipmentDetailsComponent },
  
  { path: '', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})


export class CargoRoutingModule { }



