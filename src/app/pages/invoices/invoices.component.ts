import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
})


export class InvoicesComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  private invoices = [
    {
      invoiceId:'DHL001',
      total: 1200,
      courier: 'DHL',
      match: '50%',
      status: 'in progress',
      currency: 'euro'
    }
    ,
    {
      invoiceId:'TNT001',
      total: 5000,
      courier: 'TNT',
      match: '90%',
      status: 'in progress',
      currency: 'dollar'
    }
  ];
}