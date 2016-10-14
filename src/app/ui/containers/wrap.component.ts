import { Component, Input, OnInit, AfterViewInit, ElementRef, Renderer } from '@angular/core';
import {FnService} from '../../shared';

@Component({
  selector: '[ez-wrap]',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.css']
})
export class WrapComponent implements OnInit {

  @Input() private type: string = '';
  @Input() private title: string = '';
  @Input() private icon: string = '';
  @Input() private look: string = '';
  @Input() private img: string = '';

  constructor(
    private fn: FnService,
    private rndr: Renderer,
    private elRef: ElementRef
  ){}

  private el: HTMLElement = this.elRef.nativeElement;

  ngOnInit () {
    // trim for whitespace to prevent crashes
    this.type = this.type.trim();
    this.title = this.title.trim();
    this.icon = this.icon.trim();
    this.look = this.look.trim();
    this.img = this.img.trim();
    
    // default to panel component
    if(!this.type){
      this.type = 'panel';
    }else{
      this.type = this.setType();
    }

  }

  ngAfterViewInit () {
    this.rndr.setElementClass(this.el, this.type, true);
    this.rndr.setElementClass(this.el, this.type+'-default', true);
    if(this.look){
      var array = this.fn.splitSentence(this.look);
      for (var i = 0; i < array.length; i++) {
        this.rndr.setElementClass(this.el, this.type+'-'+array[i], true);
      }
    }
  }

  private setType (){
    switch (this.type) {
      case 'thumb': return 'thumbnail';
      case 'thumbnail': return 'thumbnail';
      case 'well': return 'well';
      default: return 'panel';
    }
  }

}



// WEBPACK FOOTER //
// /Users/dev/Desktop/ezship/~/angular2-template-loader!/Users/dev/Desktop/ezship/src/app/ui/containers/wrap.component.ts