import { Component, Input, OnInit, HostBinding, AfterViewInit, HostListener, ElementRef, Renderer } from '@angular/core';

import { TrailService, FnService } from '../../shared';

@Component({
  selector: '[ez-btn]',
  template: `
    <i *ngIf="icon" class="fa fa-{{ icon }}" aria-hidden="true"></i>
    {{ label }}
  `
})

export class ButtonComponent implements OnInit, AfterViewInit {

  constructor(
    private trail: TrailService,
    private fn: FnService,
    private elRef: ElementRef,
    private rndr: Renderer
  ){}

  private el: HTMLElement = this.elRef.nativeElement;

  @Input() private label: string = '';
  @Input() private icon: string = '';
  @Input() private look: string = '';
  @HostBinding('class') private classes: string = 'btn';

  ngOnInit() { }

  ngAfterViewInit () {
    this.rndr.setElementClass(this.el, 'btn-default', true);
    if(this.look){
      let array = this.fn.splitSentence(this.look);
      for (var i = 0; i < array.length; i++) {
        this.rndr.setElementClass(this.el, 'btn-'+array[i], true);
      }
    }

  }

  @HostListener('click', ['$event'])
  private onTrail(evt) {
    var info = 'Button :';
    info += this.label || this.icon;
    this.trail.storeAction('Clicked on:', info, evt);
  }


}
