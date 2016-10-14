import { Injectable } from '@angular/core';

@Injectable()
export class D1Service {

  constructor() {}

  public selections: any[] = [];
  public listRefsArr: any[] = [];
  public checkRefsArr: any[] = [];
  public filterInputRef: any = {};

  public addSelection (selected: any) {
    this.selections.push(selected);
    this.selections.sort(function(a, b) {
        return parseInt(a.index) - parseInt(b.index);
    });
  }
 
  public removeSelection(selected: any){
    for (var i = 0; i < this.selections.length; i++) {
      if(this.selections[i].index === selected.index){
        this.selections.splice(i, 1);
      }
    }
  }

  public uncheckSelection(selected: any) {
    for (var i = 0; i < this.checkRefsArr.length; i++) {
      var el = this.checkRefsArr[i].nativeElement
      var elIndex = parseInt(el.attributes.index.nodeValue);
      if(elIndex === selected.index){
        el.checked = false;
      }
    }
  }

  public generateSelectedObj (el: any){
    return {
      tag : el.tagName,
      type : el.type,
      value : el.value,
      name : el.name,
      checked : el.checked,
      index : parseInt(el.attributes.index.value)
    }
  }

  public handleByFilter(rgx: string, command: string){
    var re = new RegExp(rgx,'i');
    
    for (var i = 0; i < this.checkRefsArr.length; i++){
      var el = this.checkRefsArr[i].nativeElement;
      var selected = this.generateSelectedObj(el);

      if(re.test(el.value) && command === 'select'){
        if(!el.checked){
          el.checked = true;
          this.addSelection(selected);
        }
      }

      if(re.test(el.value) && command === 'deselect'){
        if(el.checked){
          el.checked = false;
          this.removeSelection(selected);
          this.uncheckSelection(selected); 
        }
      }
    }
  }


  public selectAll () {
    this.deselectAll();
    for (var i = 0; i < this.checkRefsArr.length; i++) {
      var el = this.checkRefsArr[i].nativeElement;
      el.checked = true;
      var selected = this.generateSelectedObj(el);
      this.selections.push(selected);
    }
  }
  
  public deselectAll () {
    this.selections.length = 0;
    for (var i = 0; i < this.checkRefsArr.length; i++) {
      var el = this.checkRefsArr[i].nativeElement;
      el.checked = false;
    }
  }


}

