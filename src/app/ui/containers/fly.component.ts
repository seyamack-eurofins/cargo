import { Component, Input, OnInit, AfterViewInit, ElementRef, Renderer, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FnService } from '../../shared';


@Component({
  selector: 'ez-fly',
  templateUrl: './fly.component.html',
  styleUrls: ['./fly.component.css']
})


export class FlyComponent implements OnInit, AfterViewInit {

  constructor(
    private rndr: Renderer,
    private elRef: ElementRef,
    private fn: FnService,
    private router: Router
  ) { }

  @Input() private nav: any;
  private navKeys: string[] = [];

  @Input() private icon: string = '';
  @Input() private look: string = '';
  @Input('btn-label') private label = '';
  @Input('panel-title') private title = '';
  @Input() private direction = '';

  private el: HTMLElement = this.elRef.nativeElement;
  @ViewChild('fly') private flyRef: ElementRef;
  @ViewChild('panel') private panelRef: ElementRef;
  @ViewChild('backdrop') private backdropRef: ElementRef;

  ngOnInit() {
    if(this.nav){
      this.navKeys = this.fn.listObjKeys(this.nav);
    }
  }

  ngAfterViewInit () {

    // inner panel look
    var panel = this.panelRef.nativeElement;
    if(this.look){
      var arr = this.fn.splitSentence(this.look);
      for (var i = 0; i < arr.length; i++) {
        var panelCss = 'panel-'+arr[i];
        this.rndr.setElementClass(panel, panelCss, true);
      }
    }

  }

  private getTitle () {
    if(!this.title){
      if(this.label){
        return this.label;
      }else{
        return '';
      }
    }else{
      return this.title;
    }
  }

  private getDirection () {
    switch (this.direction){
      case 'right': return 'right';
      case 'top': return 'top';
      case 'bottom': return 'bottom';
      default: return 'left';
    }
  }

  private open() {
    var fly = this.flyRef.nativeElement;
    var backdrop = this.backdropRef.nativeElement;
    this.rndr.setElementClass(fly, 'open', true);
    this.rndr.setElementClass(backdrop, 'open', true);
  }

  private close() {
    var fly = this.flyRef.nativeElement;
    var backdrop = this.backdropRef.nativeElement;
    this.rndr.setElementClass(fly, 'open', false);
    this.rndr.setElementClass(backdrop, 'open', false);
  }

  private onNav (){
    this.close();    
  }

}
