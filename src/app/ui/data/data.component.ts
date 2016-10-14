import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[ez-data]',
  templateUrl: './data.component.html'
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  
  
  private selectedCountries = ["Albania","Cameroon","Luxembourg"];
  private countries = [
      "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"
    ];



  private inbounds: any[] = [
      { 
        awbNumber: 'AWB001', samples: 100, weight: '10kg', volume: '75cm3', 
        a: 123456789, b: 123456789, c: 123456789, d: 123456789, e: 123456789, 
        f: 123456789, g: 123456789, h: 123456789, i: 123456789, j: 123456789, 
        k: 123456789, l: 123456789, m: 123456789, n: 123456789, o: 123456789, 
        p: 123456789, q: 123456789, r: 123456789, s: 123456789, t: 123456789
      }
      ,
      { 
        awbNumber: 'AWB002', samples: 100, weight: '10kg', volume: '75cm3', 
        a: 123456789, b: 123456789, c: 123456789, d: 123456789, e: 123456789, 
        f: 123456789, g: 123456789, h: 123456789, i: 123456789, j: 123456789, 
        k: 123456789, l: 123456789, m: 123456789, n: 123456789, o: 123456789, 
        p: 123456789, q: 123456789, r: 123456789, s: 123456789, t: 123456789
      }
      ,
      { 
        awbNumber: 'AWB003', samples: 100, weight: '10kg', volume: '75cm3', 
        a: 123456789, b: 123456789, c: 123456789, d: 123456789, e: 123456789, 
        f: 123456789, g: 123456789, h: 123456789, i: 123456789, j: 123456789, 
        k: 123456789, l: 123456789, m: 123456789, n: 123456789, o: 123456789, 
        p: 123456789, q: 123456789, r: 123456789, s: 123456789, t: 123456789
      }
      ,
      { 
        awbNumber: 'AWB004', samples: 100, weight: '10kg', volume: '75cm3', 
        a: 123456789, b: 123456789, c: 123456789, d: 123456789, e: 123456789, 
        f: 123456789, g: 123456789, h: 123456789, i: 123456789, j: 123456789, 
        k: 123456789, l: 123456789, m: 123456789, n: 123456789, o: 123456789, 
        p: 123456789, q: 123456789, r: 123456789, s: 123456789, t: 123456789
      }
      
    ];

}
