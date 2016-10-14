import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[ez-controls]',
  templateUrl: './controls.component.html'
})
export class ControlsComponent implements OnInit {

  constructor(){}
  ngOnInit(){}

  private countries: string[] = ['Nederland','Belgie','Duitsland', 'England', 'Frankrijk'];


}