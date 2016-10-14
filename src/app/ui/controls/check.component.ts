import { Component, Input, OnInit, AfterViewInit, ElementRef, Renderer, ViewChildren, QueryList } from '@angular/core';
import { TrailService, FnService } from '../../shared';


@Component({
  selector: '[ez-check]',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})


export class CheckComponent implements OnInit, AfterViewInit{

  constructor(
    private fn: FnService,
    private elRef: ElementRef,
    private rndr: Renderer,
    private trail: TrailService
  ){}

  private el: HTMLElement = this.elRef.nativeElement;
  @ViewChildren('check') private checkRef: QueryList<ElementRef>;
  @Input() private items :any;
  @Input() private mode :string = '';
  @Input() private name :string = '';
  @Input() private look :string = '';

  ngOnInit () {
    if(this.items.constructor === String){
      this.items = this.fn.splitSentenceBy(this.items, /,/);
    }
    if(!this.name){
      var nr = this.fn.getRandomInt(0,1000000);
      this.name = this.getMode()+'_'+nr;
    }else{
      this.name = this.name.trim();
      this.name = this.name.toLowerCase();
      this.name = this.fn.dashSentence(this.name);
    }
  }

  ngAfterViewInit () {
    var checkRefs = this.checkRef.toArray(); 
    for (var i = 0; i < checkRefs.length; i++) {
      var check = checkRefs[i].nativeElement;
    }

    if(this.look){
      var cmp = this.el;
      var classes = this.fn.splitSentence(this.look);
      for (var i = 0; i < classes.length; i++) {
        var cssClass = this.getMode()+'-'+classes[i];
        this.rndr.setElementClass(cmp, cssClass, true);
      }
    }
  }

  getMode () {
    switch (this.mode) {
      case 'radio': return 'radio';
      default: return 'checkbox';
    }
  }

  getLook(){
    if(this.look){
      var cssClass;
      var arr = this.fn.splitSentence(this.look);
      for (var i = 0; i < arr.length; i++) {
        cssClass += ' '+this.getMode()+'-'+arr[i];
      }
      return cssClass;
    }
  }

  onChange (evt, el) {
    var chk = (el.checked ? 'is checked' : 'is unchecked')
    var info = (name+' '+el.type+': '+el.value+' '+chk);
    this.trail.storeAction('Change on:', info, evt);
  }
}
