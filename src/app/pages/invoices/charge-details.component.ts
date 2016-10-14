import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[ez-charge-details]',
  templateUrl: './charge-details.component.html',
})
export class ChargeDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }


  private charge = {
    awbNr:'AWB001',
    total: 500,
    currency: 'euro',
    vat: 100,
    match: true,
    from: 'AMC',
    to: 'ECL Breda',
    freightCharges: 400,
    securityCharges: 20,
    fuelCharges: 30,
    packagingCharges: 0,
    customsCharges: 20,
    dutiesCharges: 20,
    additionalCharges: 10,
    customerReference: 'Hormone pill study'
  };
  
  private costs = {
    freightCharges: 400,
    securityCharges: 20,
    fuelCharges: 30,
    packagingCharges: 0,
    customsCharges: 20,
    dutiesCharges: 20,
    additionalCharges: 10,
  };

  private allocations = [
    {
      sponsor: 'Novartis',
      study: 'Hormone pill study',
      ratio: '60%',
      items: 6,
      totalCharge: 300,
      vat: 60,
      approvedByPm: true
    }
    ,
    {
      sponsor: 'Merck',
      study: 'Placebo pill study',
      ratio: '40%',
      items: 4,
      totalCharge: 200,
      vat: 40,
      approvedByPm: false
    }
  ];

}
