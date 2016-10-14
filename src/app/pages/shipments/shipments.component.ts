import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
})
export class ShipmentsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  private shipments = [
    {
      awbNr:'AWB001',
      status: 'matched',      
      courier: 'DHL',
      items: 10,
      from: 'AMC',
      to: 'ECL Breda',
      type: 'Inbound',
      visistDate: '09 Okt 2016',
      pickupDate: '10 Okt 2016',
      receptionDate: '11 Okt 2016'      
    }
    ,
    {
      awbNr:'AWB002',
      status: 'ready for match',
      courier: 'UPS',
      items: 50,
      from: 'UZA',
      to: 'ECL Lancaster',
      type: 'Inbound',
      visistDate: '09 Okt 2016',
      pickupDate: '10 Okt 2016',
      receptionDate: '11 Okt 2016'      
    }

  ];  

}

