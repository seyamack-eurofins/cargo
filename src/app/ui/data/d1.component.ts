
import { Component, Input, OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy, HostListener, HostBinding, ElementRef, Renderer, ViewChild, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { TrailService, FnService } from '../../shared';
import { D1Service } from './d1.service';



@Component({
  selector: '[ez-d1]',
  templateUrl: './d1.component.html',
  styleUrls: ['./d1.component.css'],
  providers: [D1Service]
})

export class D1Component implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked, DoCheck{
  
  constructor( 
    private cmpRef: ElementRef,
    private rndr: Renderer,
    private trail: TrailService,
    private fn: FnService,
    private srv: D1Service
  ){}

  
  //================================================
  //================================================
  
  private isOpen: boolean =  false;
  private hasInfo: boolean =  false;
  private selections: any[] = this.srv.selections;
  private selected: any = {};
  
  
  @Input() private label: string = '';
  @Input() private name: string = '';
  @Input() private icon: string = '';
  @Input() private index: string = '';
  @Input('toggle-type') private toggleType: string = '';
  @Input('filter-selection') private filterSelection: string = '';
  @Input('btn') private btnStyles: string = '';
  @Input('menu-type') private menuType: string = '';
  @Input('menu-items') private items: string[] = [];
  @Input() private preselected: any;
  @Input() private pipe: string = '';

 	@Output() emitter: EventEmitter<any> =  new EventEmitter();
	emit(){
    var obj = {
      index: this.getIndex(),
      selections: this.selections
    }
		this.emitter.emit(obj);
	}


  //================================================
  //================================================
  // Component & Template hooks
  @ViewChild('btn') private btnRef: ElementRef;
  @ViewChild('menu') private menuRef: ElementRef;
  @ViewChild('backdrop') private backdropRef: ElementRef;
  @ViewChild('list') private listRef: ElementRef;
  
  @ViewChild('filterInput') private filterInputRef: ElementRef;
  @ViewChildren('listItem') private listRefsArr: QueryList<ElementRef>;
  @ViewChildren('check') private checkRefsArr: QueryList<ElementRef>;



  //================================================
  //================================================
  private getIndex(){
    if(this.index){
      return this.index;
    }else{
      return 'none';
    }
  }
  
  private arrifyPreselected(){
    if(this.preselected && this.preselected.constructor === String){
      this.preselected = this.preselected.split(',');
      return this.preselected;
    };
  }
  
  private getPipe(){
    switch (this.pipe) {
      case 'decamel': return 'decamel';
      default: return '';
    }
  }

  private getToggleType(){
    switch (this.toggleType) {
      case 'button': return 'button';
      default: return 'well';
    }    
  }
  
  private isManyItems() {
    return (this.items.length > 10 ? true : false);
  }

  private getMenuType () {
    switch (this.menuType) {
      case 'radio': return 'radio';
      default: return 'checkbox';
    }
  }

  private getFilterSelection(){
    switch (this.filterSelection) {
      case 'off': return 'off';
      default: return 'on';
    }    
  }

  private getValue (item: string) {
    if(item){
      return this.fn.dashSentence(item);
    }
  }






  // Lifecycle hooks
  //================================================
  //================================================
  
  ngOnInit () {
    
    if(!this.name){
      var str = this.fn.dashSentence(this.label);
      var num = this.fn.getRandomInt(1, 1000);
      this.name = str+'_'+num;
    }

    this.arrifyPreselected();

    if(this.preselected && this.getMenuType() === 'checkbox'){
      for (var i = 0; i < this.preselected.length; i++) {
        for (var j = 0; j < this.items.length; j++) {
          if(this.preselected[i] === this.items[j]){
            this.selected = {
              value : this.preselected[i],
              name : this.name,
              tag : 'INPUT',
              type : this.getMenuType(),
              checked : true,
              index : j
            };
            this.srv.addSelection(this.selected);
          }
        }
      }
    }

    if(this.preselected && this.getMenuType() === 'radio'){
      for (var j = 0; j < this.items.length; j++) {
        if(this.preselected[0] === this.items[j]){
          this.selected = {
            value : this.preselected[0],
            name : this.name,
            tag : 'INPUT',
            type : this.getMenuType(),
            checked : true,
            index : j
          };
          this.srv.addSelection(this.selected);
        }
      }
    }



  }

  ngAfterViewInit () {
    // component css
    var cmp = this.cmpRef.nativeElement;
    this.rndr.setElementClass(cmp, 'd1', true);

    // button css
    if(this.btnStyles && this.getToggleType() === 'button'){
      var btn = this.btnRef.nativeElement;
      var classList = this.fn.splitSentence(this.btnStyles);
      for (var i = 0; i < classList.length; i++) {
        var style = 'btn-'+classList[i];
        this.rndr.setElementClass(btn, style, true);
      }
      if(classList.indexOf('block') !== -1){
        this.rndr.setElementClass(cmp, 'block', true);
      }
    }

    // Store all the view children hooks
    this.srv.checkRefsArr = this.checkRefsArr.toArray();
    this.srv.listRefsArr = this.listRefsArr.toArray();
    this.srv.filterInputRef = this.filterInputRef;


    var checks = this.srv.checkRefsArr;
    

    // set an index attr to avoid errors in duplicate values in array
    for (var i = 0; i < checks.length; i++) {
      var check = checks[i].nativeElement; 
      this.rndr.setElementAttribute(check, 'name', this.name);
      this.rndr.setElementAttribute(check, 'index', (i).toString());
    }
    
    // Check all preselected
    this.checkPreselected();
 

  }

  ngDoCheck(){}
  ngAfterViewChecked(){}

  ngOnDestroy () {
    //Destory all stores in the service
    this.srv.checkRefsArr.length = 0; 
    this.srv.listRefsArr.length = 0;
    delete this.srv.filterInputRef;
  }
  
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  };
  
  private closeCmp() {
    this.isOpen = false;
    var backdrop = this.backdropRef.nativeElement;
    var menu = this.menuRef.nativeElement;
    this.rndr.setElementClass(backdrop, 'open', false);
    this.rndr.setElementClass(menu, 'open', false);
  }

  private openCmp() {
    this.isOpen = true;
    var backdrop = this.backdropRef.nativeElement;
    var menu = this.menuRef.nativeElement;
    this.rndr.setElementClass(backdrop, 'open', true);
    this.rndr.setElementClass(menu, 'open', true);
  }



  //================================================
  //================================================
  
  private checkPreselected () {
    var checks = this.srv.checkRefsArr;
    for (var j = 0; j < this.srv.selections.length; j++){
      for (var i = 0; i < checks.length; i++) {
        var check = checks[i].nativeElement; 
        if(this.srv.selections[j].index === i){
          check.checked = true;
        }
      }
    }
  }

  // This FN is fired when the info icon btn is clicked. 
  // It shows and hides the selections panel.
  private infoClick(){
    var menu = this.menuRef.nativeElement;
    var className = this.menuRef.nativeElement.className;
    if(className.indexOf('has-info') === -1){
      this.rndr.setElementClass(menu, 'has-info', true);
    }else{
      this.rndr.setElementClass(menu, 'has-info', false);
    }
  }
  
  // this fn is fired when CLICKED on a RADIO or CHECKBOX EL
  private checkClick(evt) {

    this.selected = {
      tag : evt.target.tagName,
      type : evt.target.type,
      value : evt.target.value,
      name : evt.target.name,
      checked : evt.target.checked,
      index : parseInt(evt.target.attributes.index.value)
    };

    this.handleCheck();
    this.emit();
  }

  // this fn is fired when CLICKED on a RADIO or CHECKBOX EL
  private handleCheck(){
    // checkbox multi selection behaviour
    if(this.selected.type === 'checkbox'){
      
      // checked
      if(this.selected.checked){
        this.srv.addSelection(this.selected);
      }
      // unchecked
      else{
        this.srv.removeSelection(this.selected);
      }
    }

    // radio single selection behaviour
    if(this.selected.type === 'radio'){
      this.closeCmp();
      this.selections.length = 0;
      this.srv.addSelection(this.selected);
    }
  }

  // this fn is fired when SELECT or DESELECT ALL buttons are clicked.
  private handleFilter(command: string) {
    
    var value = this.srv.filterInputRef.nativeElement.value;
    
    // if there is a value then select all visible LI
    if (value){
      this.srv.handleByFilter(value, command);
    }

    // Else, select or deselect all LI
    else {
      if(command === 'select'){
        this.srv.selectAll();
      }
      
      if(command === 'deselect'){
        this.srv.deselectAll();  
      }
    }
    this.emit();
  }

  // this fn is fired when the Close Button on the selection alerts is clicked
  private undoSelection(selection: any, evt){
    evt.stopPropagation();
    this.selected = selection;
    this.srv.removeSelection(this.selected);
    this.srv.uncheckSelection(this.selected);
    this.emit();
  }


  // fn is fired on KEYUP in the Filter input
  private filter(value) {
    var listItems = this.srv.listRefsArr;
    
    if(value){
      this.showAllListItems();
      var rgx = new RegExp(value,'i');
      
      // hide the all LI that dont match
      for (var i = 0; i < listItems.length; i++){
        var el = listItems[i].nativeElement;
        if(!rgx.test(el.id)){
          this.rndr.setElementClass(el, 'hide', true);
        }
      }

    }else{
      this.showAllListItems();
    }
  }

  // This rendering fn makes sure that all LI's are visible'
  private showAllListItems () {
    var listItems = this.srv.listRefsArr;
    for (var i = 0; i < listItems.length; i++){
      var el = listItems[i].nativeElement;
      this.rndr.setElementClass(el, 'hide', false);
    }
  }

}
