
import { Component, OnInit } from '@angular/core';
@Component({
  selector: '[ez-invoice-details]',
  templateUrl: './invoice-details.component.html'
})
export class InvoiceDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private invoice = {
    invoiceId:'DHL001',
    total: 1200,
    courier: 'DHL',
    match: '50%',
    status: 'in progress',
    currency: 'euro'
  };

  private charges = [
    {
      awbNr:'AWB001',
      total: 500,
      match: true,
      vat: 100,
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
    }
    ,
    {
      awbNr:'AWB002',
      total: 700,
      match: false,
      vat: 200,
      from: 'NY Hospital',
      to: 'ECL Lancaster',
      freightCharges: 600,
      securityCharges: 20,
      fuelCharges: 30,
      packagingCharges: 0,
      customsCharges: 20,
      dutiesCharges: 20,
      additionalCharges: 10,
      customerReference: 'Wonder pill study'
    }    
  ];

}