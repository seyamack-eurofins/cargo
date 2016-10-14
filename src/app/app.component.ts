import { Component } from '@angular/core';

import { TrailService } from './shared';

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent{
  
  private mainNav = {
    home: '/',
    invoices: '/invoices',
    shipments: '/shipments',
  };

  constructor (
    private trail: TrailService
  ) {}

  private history: string[] = [];

  getHistory () {
    this.history = this.trail.getHistory();
  }

  ngAfterViewInit(){
    this.history = this.trail.getHistory();
  }



}
