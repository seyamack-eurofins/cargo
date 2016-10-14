import { Component, OnInit } from '@angular/core';

import { FnService } from '../../shared';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
})
export class ShipmentDetailsComponent implements OnInit {

  private totals: any = {};

  constructor(
    private fn: FnService
  ){}


  ngOnInit() {
    var total = 0;
    var array = this.fn.listObjValues(this.costs);
    for (var i = 0; i < array.length; i++) {
      total += array[i];
    }
    
  }

  private shipment = {
    awbNr:'AWB001',
    status: 'matched',      
    courier: 'DHL',
    items: 10,
    from: 'AMC',
    to: 'ECL Breda',
    type: 'Inbound',
    visistDate: '09 Okt 2016',
    pickupDate: '10 Okt 2016',
    receptionDate: '11 Okt 2016',
    currency: 'euro',
    totalCharges: 1500,
    totalVAT: 300 
  };

  private costs = {
    freightCharges: 1200,
    securityCharges: 60,
    fuelCharges: 90,
    packagingCharges: 0,
    customsCharges: 60,
    dutiesCharges: 60,
    additionalCharges: 30
  };



  private charges = [
    {
      invoiceId:'DHL001',
      totalCharge: 500,
      VAT: 100,
      freightCharges: 400,
      securityCharges: 20,
      fuelCharges: 30,
      packagingCharges: 0,
      customsCharges: 20,
      dutiesCharges: 20,
      additionalCharges: 10,
      customerReference: 'Hormone pill study',
      currency: 'euro',
      invoiceDate: '01 Okt 2016'
    }
    ,
    {
      invoiceId:'DHL005',
      totalCharge: 1000,
      VAT: 200,
      freightCharges: 800,
      securityCharges: 40,
      fuelCharges: 60,
      packagingCharges: 0,
      customsCharges: 40,
      dutiesCharges: 40,
      additionalCharges: 20,
      currency: 'euro',
      customerReference: 'Hormone pill study',
      invoiceDate: '01 Nov 2016'
    }     
  ];  



  private allocations = [
    {
      study: 'Hormone pill',
      sponsor: 'Novartis',
      items: 6,
      ratio: '60% of 1500',
      totalCharge: 900
    }
    ,
    {
      study: 'Wonder pill',
      sponsor: 'Merck',
      items: 4,
      ratio: '40% of 1500',
      totalCharge: 600
    }    
  ];


}