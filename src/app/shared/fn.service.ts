import { Injectable } from '@angular/core';

@Injectable()
export class FnService {

  constructor() { }

  // input: 'very long sentence'
  // output: ['very','long','sentence']
  public splitSentence (str: string) {
    let arr = [];
    if(str){
      str = str.trim();
      arr = str.split(/\s/);
    }
    return arr;
  }

  // input: 'item1, item2, item3' & /,/
  // output: ['item1','item2','item3']
  public splitSentenceBy (str: string, rgx: any) {
    let arr = [];
    rgx = rgx || /\s/;
    if(str){
      str = str.trim();
      arr = str.split(rgx);
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim();
      }
    }
    return arr;
  }

  // input: 'very long sentence'
  // output: 'very-long-sentence'
  public dashSentence (str: string) {
    var name = '';
    if(str){
      let array = this.splitSentence(str);
      name = array[0].toLowerCase();
      if(array.length > 1){
        for (var i = 1; i < array.length; i++) {
          name += '-'+array[i].toLowerCase();
        }
      }
    }
    return name;
  }
  

  // input: ['a','b','c'] , 2
  // output: ['a','c']
  public removeArrayItem(arr, value){
    var index = arr.indexOf(value);
    if(index > -1){
      arr.splice(index, 1);
    }
    return arr;
  }

  
  // input: 1, 1000
  // output: random whole nr between 1 and 1000
  public getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  // input: { name: 'John', age: '20' }
  // output: [ 'name', 'age' ]
  public listObjKeys (obj){
    var keys = [];
    for(var key in obj) {
        if(obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
            keys.push(key);
        }
    }
    return keys;
  }

  // input: { name: 'John', age: '20' }
  // output: [ 'John', '20' ]
  public listObjValues (obj){
    var values = [];
    for(var key in obj) {
        if(obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
            values.push(obj[key]);
        }
    }
    return values;
  }
  

}
