import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[ez-home]',
  templateUrl: './home.component.html',
  styles: [`
    .progress{height:23px;margin:0;}
    .progress-bar > b{color:black}
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  private months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'Oktober',
    'November',
    'December'
  ];

  private invoiceTotals = {
    new: 6200,
    running: 1240,
    final: 7440
  };

  private invoiceStatuses = {
    new: 200,
    running: 800,
    final: 9000
  };
  
  private invoiceStates = {
    matched: 0.9,
    approved: 0.7,
    pending: 0.1
  };

  private shipmentStatuses = {
    matched: 0.8,
    readyForMatch: 0.2
  };
}
