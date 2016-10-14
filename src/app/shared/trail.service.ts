import { Injectable } from '@angular/core';

@Injectable()
export class TrailService {

  constructor() { }

  private history: string[] = [];

  public getHistory () {
    return this.history;
  }

  public storeAction (action: string, cmp: string, evt: any) {
    if(evt){
      var action = action || 'unidentified action';
      var cmp = cmp || 'unidentified component';
      var loc = evt.target.baseURI.toString() || 'unidentified location';
      var d = new Date(); 
      var timestamp = d.getDate() + "/"
                      + (d.getMonth()+1)  + "/" 
                      + d.getFullYear() + " @ "  
                      + d.getHours() + ":"  
                      + d.getMinutes() + ":" 
                      + d.getSeconds();
    
      var record = action + '\n' 
                    + cmp + '\n' 
                    + 'On: '+ loc + '\n'
                    + 'At: '+ timestamp;

      this.history.push(record);
    }
  }

}
