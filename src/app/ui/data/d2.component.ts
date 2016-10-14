import { Component, Input, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild, Renderer, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { FnService } from '../../shared';


@Component({
  selector: '[ez-d2]',
  templateUrl: './d2.component.html',
  styleUrls: ['./d2.component.css']  
})
export class D2Component implements OnInit, AfterViewInit, OnDestroy {
  // Input VARS
  // ==========================
  @Input('model') private dataset: any[] = [];
  @Input('first-key') private firstKey: string = '';
  @Input('rest-keys') private restKeys: string = '';
  @Input() private link: string = '';

  // VARS
  // ==========================
  private datasetKeys: string[]= [];
  private viewKeys: string[] = [];
  private restViewKeys: string[] = [];
  private columnCount: number = 9;
  private firstColumnItems: string[] = [];
  private navId: string;
  private subscription: Subscription;

  constructor(
    private fn: FnService,
    private elRef: ElementRef,
    private rndr: Renderer,
    private router: Router,
    private activeRoute: ActivatedRoute
  ){
    this.subscription = activeRoute.params.subscribe(
      (param: any) => this.navId = param['id']
    );
  }

  // DOM Hooks
  // ==========================
  private host: HTMLElement = this.elRef.nativeElement;
  @ViewChild('wrapper') private wrapperRef: ElementRef;


  // Lifecycle hooks
  // ==========================
  ngOnInit() {

    console.log(this.navId);
    

    // Store the dataset keys in two separate lists.
    // One for the model and one for the view
    this.datasetKeys = Object.keys(this.dataset[0]);
    this.viewKeys = this.datasetKeys.slice();

    
    
    // Handle the first key
    // first check if the key exists in the dataset.
    // if you find a match then its ok
    // All else: first item of array will be the first key
    // ------------------------------------------------------------
    if(this.firstKey){
      for (var i = 0; i < this.datasetKeys.length; i++) {
        if(this.firstKey === this.datasetKeys[i]){
          this.generateFirstKeyList(this.firstKey);
        }
        else{
          this.firstKey = this.datasetKeys[0];
          this.generateFirstKeyList(this.datasetKeys[0]);
        }
      }
    }else{
      this.firstKey = this.datasetKeys[0];
      this.generateFirstKeyList(this.datasetKeys[0]);
    }


    // Handle the rest keys
    // ------------------------------------------------------------
    if(this.restKeys){
      this.generateColumns(this.restKeys);
    }else{
      this.viewKeys.shift();
      this.generateColumns(this.viewKeys);
    }
    

    // Check if the link is found as an object key in the model
    // If this isnt the case the deactive the link.
    // ------------------------------------------------------------
    if(this.link){
      let bool = false;
      for (var i = 0; i < this.datasetKeys.length; i++) {
        if(this.datasetKeys[i] === this.link){
          bool = true;
        }
      }
      if(!bool){
        this.link = '';
      }
    }


  }

  ngAfterViewInit () { 
    setTimeout(() => {
      this.setColumns();
    }, 0);
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }


  // Local functions
  // ==========================
  private onNav(str){}

  private d1Emitter(evt: any){
    this.restViewKeys[evt.index] = evt.selections[0].value;
  }
  
  private generateFirstKeyList(data: any){
    for (var i = 0; i < this.dataset.length; i++) {
      this.firstColumnItems.push(
        this.dataset[i][data]
      );
    }
  }

  private generateColumns (data: any) {
    var arr = [];
    if(data.constructor === String){
      arr = data.split(',');
    }
    if(data.constructor === Array){
      arr = data;
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
      // check if the restkeys are available in the dataset
      // push it in the view if its available
      for (var j = 0; j < this.datasetKeys.length; j++) {
        if(arr[i] === this.datasetKeys[j] && this.restViewKeys.length < this.columnCount){
          this.restViewKeys.push(arr[i]);
        }
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.setColumns();
  }

  private setColumns () {
    
    var wrapper = this.wrapperRef.nativeElement;
    var width = wrapper.offsetWidth;

    if(width < 1800){
      this.rndr.setElementClass(wrapper, 'hide-9', true);
    }else{this.rndr.setElementClass(wrapper, 'hide-9', false);}


    if(width < 1600){
      this.rndr.setElementClass(wrapper, 'hide-8', true);
    }else{this.rndr.setElementClass(wrapper, 'hide-8', false);}


    if(width < 1400){
      this.rndr.setElementClass(wrapper, 'hide-7', true);
    }else{this.rndr.setElementClass(wrapper, 'hide-7', false);}


    if(width < 1200){
      this.rndr.setElementClass(wrapper, 'hide-6', true);
    }else{this.rndr.setElementClass(wrapper, 'hide-6', false);}


    if(width < 1000){
      this.rndr.setElementClass(wrapper, 'hide-5', true);
    }else{this.rndr.setElementClass(wrapper, 'hide-5', false);}


    if(width < 750){
      this.rndr.setElementClass(wrapper, 'hide-4', true);
    }else{this.rndr.setElementClass(wrapper, 'hide-4', false);}


    if(width < 550){
      this.rndr.setElementClass(wrapper, 'hide-3', true);
    }else{this.rndr.setElementClass(wrapper, 'hide-3', false);}


    if(width < 350){
      this.rndr.setElementClass(wrapper, 'hide-2', true);
    }else{this.rndr.setElementClass(wrapper, 'hide-2', false);}

  }

}

