import { Component, OnInit, AfterViewInit, Input, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: '[ez-col]',
  template: `<ng-content></ng-content>`,
  styles: []
})

export class ColComponent implements OnInit, AfterViewInit {

  @Input() private xs: number;
  @Input() private sm: number;
  @Input() private md: number;
  @Input() private lg: number;
 
  constructor(
    private elRef: ElementRef,
    private rndr: Renderer
  ){}

  private el: HTMLElement = this.elRef.nativeElement;
  
  ngOnInit() {

  }

  ngAfterViewInit () {
    
    var mobile = this.validateNum(this.xs);
    var tablet = this.validateNum(this.sm);
    var desktop = this.validateNum(this.md);
    var tv = this.validateNum(this.lg);

    // Mobile
    if(mobile){
      this.rndr.setElementClass(this.el, 'col-xs-'+mobile, true)
    }else{
      this.rndr.setElementClass(this.el, 'col-xs-12', true)
    }

    // Tablet
    if(tablet){
      this.rndr.setElementClass(this.el, 'col-sm-'+tablet, true)
    }

    // Desktop
    if(desktop){
      this.rndr.setElementClass(this.el, 'col-md-'+desktop, true)
    }

    // TV
    if(tv){
      this.rndr.setElementClass(this.el, 'col-lg-'+tv, true)
    }

  }

 
  private validateNum (num: number) {
    if(!isNaN(num) && num <= 12 && num >= 0){
      return (num * 1);
    }else{
      return 0;
    }
  }

}

