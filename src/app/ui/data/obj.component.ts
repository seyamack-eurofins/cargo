import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ez-obj',
  templateUrl: './obj.component.html',
  styleUrls: []
})
export class ObjComponent implements OnInit, AfterViewInit {

  @Input() private obj: any;
  private keys: any[] = [];
  private values: any[] = [];

  @Input('first-link') private firstLink: string = '';
  private firstKey: string = '';
  private firstValue: string = '';
  

  constructor(
    private router: Router
  ){}

  ngOnInit() {
    for(var key in this.obj) {
        if(this.obj.hasOwnProperty(key) && typeof this.obj[key] !== 'function') {
            this.keys.push(key);
            this.values.push(this.obj[key]);
        }
    }

    if(this.firstLink){
      
      this.firstKey = this.keys.shift();
      this.firstValue = this.values.shift();
     
    }
  }

  ngAfterViewInit () {  }

  private onNav () {
    if(this.firstLink){
      this.router.navigate([this.firstLink]);
    }
  }

}

