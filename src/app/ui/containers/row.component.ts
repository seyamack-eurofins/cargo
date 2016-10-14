import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: '[ez-row]',
  template: `<ng-content></ng-content>`,
  styles: []
})
export class RowComponent implements OnInit {

  constructor() {}
  ngOnInit() {}
  
  @HostBinding('class.row') private classes: boolean = true;

}